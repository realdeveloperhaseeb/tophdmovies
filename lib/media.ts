import crypto from 'node:crypto';
import { queryOne, execute } from './db';

// Uploaded images are stored in MySQL so they survive redeploys (the app
// filesystem is re-cloned from git on every deploy). Served via /api/media/[id].

let ensured = false;

/** Create the media table on first use (self-healing, no manual migration). */
export async function ensureMediaTable(): Promise<void> {
  if (ensured) return;
  await execute(
    `CREATE TABLE IF NOT EXISTS media (
       id         VARCHAR(40) NOT NULL,
       mime       VARCHAR(100) NOT NULL,
       data       MEDIUMBLOB NOT NULL,
       size       INT UNSIGNED NOT NULL,
       created_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
       PRIMARY KEY (id)
     ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci`
  );
  ensured = true;
}

export async function saveMedia(buf: Buffer, mime: string): Promise<string> {
  await ensureMediaTable();
  const id = crypto.randomBytes(12).toString('hex');
  await execute('INSERT INTO media (id, mime, data, size) VALUES (?, ?, ?, ?)', [
    id,
    mime,
    buf,
    buf.length,
  ]);
  return id;
}

export async function getMedia(id: string): Promise<{ mime: string; data: Buffer } | null> {
  await ensureMediaTable();
  return queryOne<{ mime: string; data: Buffer }>('SELECT mime, data FROM media WHERE id = ?', [id]);
}
