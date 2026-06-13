// Generates original cinematic SVG posters & backdrops for a movie.
// Used by scripts/sync-movies.mjs and the daily add-movie flow.
// (These are designed/branded posters, not official studio artwork.)

function esc(s) {
  return String(s ?? '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');
}

function hash(s) {
  let h = 0;
  for (let i = 0; i < s.length; i++) h = (h * 31 + s.charCodeAt(i)) >>> 0;
  return h;
}

function wrap(text, max) {
  const words = String(text).split(/\s+/);
  const lines = [];
  let cur = '';
  for (const w of words) {
    if ((cur + ' ' + w).trim().length > max && cur) {
      lines.push(cur);
      cur = w;
    } else {
      cur = (cur + ' ' + w).trim();
    }
  }
  if (cur) lines.push(cur);
  return lines;
}

const FONT = 'Outfit, Segoe UI, Arial, sans-serif';

function chips(tags, x, y, maxW) {
  let cx = x;
  const out = [];
  for (const t of tags) {
    const w = 16 + t.length * 9.5;
    if (cx + w > x + maxW) break;
    out.push(
      `<rect x="${cx}" y="${y}" width="${w}" height="28" rx="14" fill="#22c55e" fill-opacity="0.16" stroke="#22c55e" stroke-opacity="0.5"/>` +
        `<text x="${cx + w / 2}" y="${y + 19}" text-anchor="middle" font-family="${FONT}" font-size="13" font-weight="600" fill="#4ade80">${esc(t)}</text>`
    );
    cx += w + 8;
  }
  return out.join('');
}

/** 500x750 portrait poster. */
export function makePoster(m) {
  const hue = hash(m.title) % 360;
  const glow = `hsl(${hue}, 62%, 45%)`;
  const top = `hsl(${hue}, 55%, 16%)`;
  const tags = (m.tags || []).slice(0, 2);

  const lines = wrap(m.title, 15).slice(0, 3);
  const fs = lines.length >= 3 ? 38 : 46;
  const lh = fs + 8;
  const titleBottom = 600;
  const titleTop = titleBottom - (lines.length - 1) * lh;

  const titleTspans = lines
    .map((ln, i) => `<tspan x="38" y="${titleTop + i * lh}">${esc(ln)}</tspan>`)
    .join('');

  const meta = [m.year, m.runtime ? `${Math.floor(m.runtime / 60)}h ${m.runtime % 60}m` : null]
    .filter(Boolean)
    .join('  •  ');

  const ratingBadge =
    m.rating != null
      ? `<rect x="378" y="30" width="90" height="36" rx="9" fill="#000" fill-opacity="0.55" stroke="#22c55e" stroke-opacity="0.55"/>` +
        `<text x="423" y="55" text-anchor="middle" font-family="${FONT}" font-size="18" font-weight="700" fill="#22c55e">★ ${Number(m.rating).toFixed(1)}</text>`
      : '';

  return `<svg xmlns="http://www.w3.org/2000/svg" width="500" height="750" viewBox="0 0 500 750">
<defs>
<linearGradient id="bg" x1="0" y1="0" x2="0" y2="1">
<stop offset="0" stop-color="${top}"/><stop offset="0.45" stop-color="#0b0b0b"/><stop offset="1" stop-color="#000000"/>
</linearGradient>
<radialGradient id="glow" cx="0.5" cy="0.24" r="0.62">
<stop offset="0" stop-color="${glow}" stop-opacity="0.55"/><stop offset="1" stop-color="${glow}" stop-opacity="0"/>
</radialGradient>
<linearGradient id="fade" x1="0" y1="0" x2="0" y2="1">
<stop offset="0" stop-color="#000000" stop-opacity="0"/><stop offset="1" stop-color="#000000" stop-opacity="0.92"/>
</linearGradient>
</defs>
<rect width="500" height="750" fill="url(#bg)"/>
<rect width="500" height="750" fill="url(#glow)"/>
<g transform="translate(250,295)" opacity="0.10">
<circle r="118" fill="none" stroke="#ffffff" stroke-width="3"/>
<path d="M-38 -54 L72 0 L-38 54 Z" fill="#ffffff"/>
</g>
<rect x="0" y="400" width="500" height="350" fill="url(#fade)"/>
<text x="34" y="54" font-family="${FONT}" font-size="22" font-weight="800" fill="#ffffff" letter-spacing="0.5">TOP<tspan fill="#22c55e">HD</tspan>MOVIES</text>
${ratingBadge}
<rect x="38" y="${titleTop - 64}" width="46" height="6" rx="3" fill="#22c55e"/>
${chips(tags, 38, titleTop - 44, 420)}
<text font-family="${FONT}" font-size="${fs}" font-weight="800" fill="#ffffff">${titleTspans}</text>
<text x="38" y="${titleBottom + 38}" font-family="${FONT}" font-size="17" font-weight="500" fill="#bdbdbd">${esc(meta)}</text>
<text x="38" y="${titleBottom + 70}" font-family="${FONT}" font-size="14" font-weight="600" fill="#22c55e" letter-spacing="1.5">DOWNLOAD IN HD • 480p 720p 1080p</text>
</svg>`;
}

/** 1600x900 wide backdrop. */
export function makeBackdrop(m) {
  const hue = hash(m.title) % 360;
  const glow = `hsl(${hue}, 62%, 45%)`;
  const top = `hsl(${hue}, 55%, 14%)`;
  const tags = (m.tags || []).slice(0, 3);

  const lines = wrap(m.title, 22).slice(0, 2);
  const fs = 96;
  const lh = fs + 8;
  const titleTop = 470 - (lines.length - 1) * lh;
  const titleTspans = lines
    .map((ln, i) => `<tspan x="90" y="${titleTop + i * lh}">${esc(ln)}</tspan>`)
    .join('');

  const meta = [
    m.year,
    m.runtime ? `${Math.floor(m.runtime / 60)}h ${m.runtime % 60}m` : null,
    m.rating != null ? `★ ${Number(m.rating).toFixed(1)}` : null,
  ]
    .filter(Boolean)
    .join('   •   ');

  return `<svg xmlns="http://www.w3.org/2000/svg" width="1600" height="900" viewBox="0 0 1600 900">
<defs>
<linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
<stop offset="0" stop-color="${top}"/><stop offset="0.6" stop-color="#0a0a0a"/><stop offset="1" stop-color="#000000"/>
</linearGradient>
<radialGradient id="glow" cx="0.78" cy="0.3" r="0.6">
<stop offset="0" stop-color="${glow}" stop-opacity="0.5"/><stop offset="1" stop-color="${glow}" stop-opacity="0"/>
</radialGradient>
<linearGradient id="fade" x1="0" y1="0" x2="1" y2="0">
<stop offset="0" stop-color="#000000" stop-opacity="0.85"/><stop offset="1" stop-color="#000000" stop-opacity="0"/>
</linearGradient>
</defs>
<rect width="1600" height="900" fill="url(#bg)"/>
<rect width="1600" height="900" fill="url(#glow)"/>
<g transform="translate(1180,430)" opacity="0.12">
<circle r="200" fill="none" stroke="#ffffff" stroke-width="4"/>
<path d="M-64 -92 L122 0 L-64 92 Z" fill="#ffffff"/>
</g>
<rect width="1600" height="900" fill="url(#fade)"/>
<text x="90" y="120" font-family="${FONT}" font-size="32" font-weight="800" fill="#ffffff" letter-spacing="1">TOP<tspan fill="#22c55e">HD</tspan>MOVIES</text>
<rect x="92" y="${titleTop - 80}" width="64" height="8" rx="4" fill="#22c55e"/>
${chips(tags, 92, titleTop - 56, 900)}
<text font-family="${FONT}" font-size="${fs}" font-weight="800" fill="#ffffff">${titleTspans}</text>
<text x="92" y="${470 + 60}" font-family="${FONT}" font-size="26" font-weight="500" fill="#cfcfcf">${esc(meta)}</text>
<text x="92" y="${470 + 104}" font-family="${FONT}" font-size="20" font-weight="600" fill="#22c55e" letter-spacing="2">DOWNLOAD IN HD • 480p 720p 1080p</text>
</svg>`;
}
