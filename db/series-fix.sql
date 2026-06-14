-- Fix series metadata: episode_info + accurate country/runtime (per episode).
SET NAMES utf8mb4;

UPDATE movies SET country='Spain', runtime=50, episode_info='5 Parts · 41 Episodes',
  language='Hindi, Spanish, English' WHERE slug='money-heist';

UPDATE movies SET country='United States', runtime=47, episode_info='5 Seasons · 62 Episodes',
  language='Hindi, English' WHERE slug='breaking-bad';

UPDATE movies SET country='United States', runtime=51, episode_info='4 Seasons · 34 Episodes',
  language='Hindi, English' WHERE slug='stranger-things';

UPDATE movies SET country='South Korea', runtime=60, episode_info='1 Season · 12 Episodes',
  language='Hindi, Korean, English' WHERE slug='all-of-us-are-dead';

UPDATE movies SET country='India', runtime=30, episode_info='Season 1 · 5 Episodes',
  language='Hindi' WHERE slug='off-campus-season-1';

UPDATE movies SET country='India', runtime=30, episode_info='Season 2 · 5 Episodes',
  language='Hindi' WHERE slug='off-campus-season-2';
