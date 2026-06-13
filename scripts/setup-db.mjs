// Run schema.sql then seed.sql against the configured MySQL database.
//   npm run db:setup
// Reads connection info from .env.local / environment.
import { readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';
import mysql from 'mysql2/promise';

const __dirname = dirname(fileURLToPath(import.meta.url));

// Tiny .env.local loader (no extra dependency).
function loadEnv(file) {
  try {
    const text = readFileSync(join(__dirname, '..', file), 'utf8');
    for (const line of text.split('\n')) {
      const m = line.match(/^\s*([A-Z0-9_]+)\s*=\s*(.*)\s*$/i);
      if (m && !process.env[m[1]]) {
        process.env[m[1]] = m[2].replace(/^["']|["']$/g, '');
      }
    }
  } catch {
    /* file optional */
  }
}
loadEnv('.env.local');
loadEnv('.env');

function splitStatements(sql) {
  // Strip line comments, then split on semicolons that end a statement.
  return sql
    .split('\n')
    .filter((l) => !l.trim().startsWith('--'))
    .join('\n')
    .split(/;\s*[\r\n]/)
    .map((s) => s.trim())
    .filter(Boolean);
}

async function runFile(conn, file) {
  const sql = readFileSync(join(__dirname, '..', 'db', file), 'utf8');
  const statements = splitStatements(sql);
  for (const stmt of statements) {
    await conn.query(stmt);
  }
  console.log(`✓ applied db/${file} (${statements.length} statements)`);
}

const dbName = process.env.DB_NAME || 'tophdmovies';

const conn = await mysql.createConnection({
  host: process.env.DB_HOST || 'localhost',
  port: Number(process.env.DB_PORT || 3306),
  user: process.env.DB_USER || 'root',
  password: process.env.DB_PASS || '',
  multipleStatements: true,
});

await conn.query(
  `CREATE DATABASE IF NOT EXISTS \`${dbName}\` CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci`
);
await conn.query(`USE \`${dbName}\``);
console.log(`✓ using database \`${dbName}\``);

await runFile(conn, 'schema.sql');
await runFile(conn, 'seed.sql');

await conn.end();
console.log('\n✅ Database ready. Start the app with: npm run dev');
