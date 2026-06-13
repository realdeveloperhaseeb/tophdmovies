-- ============================================================
--  TopHDMovies — seed data (sample categories, genres, movies)
--  Run AFTER schema.sql. Safe to re-run: uses INSERT IGNORE /
--  ON DUPLICATE KEY where practical.
--  All descriptions/titles below are original demo content.
-- ============================================================

SET NAMES utf8mb4;

-- ---------- categories ----------
INSERT INTO categories (name, slug, description, display_order, status) VALUES
  ('Hollywood',   'hollywood',   'Blockbusters and indie gems from the American film industry — action, drama, sci-fi and everything in between.', 1, 'active'),
  ('Bollywood',   'bollywood',   'The biggest hits from Hindi cinema, packed with drama, music and unforgettable storytelling.', 2, 'active'),
  ('Lollywood',   'lollywood',   'The best of Pakistani cinema — powerful stories, fresh talent and cultural classics.', 3, 'active'),
  ('Action',      'action',      'High-octane thrillers, explosive set-pieces and edge-of-your-seat adventures.', 4, 'active'),
  ('Comedy',      'comedy',      'Feel-good films and laugh-out-loud comedies for every mood.', 5, 'active'),
  ('Horror',      'horror',      'Spine-chilling tales, supernatural scares and psychological terror.', 6, 'active'),
  ('Thriller',    'thriller',    'Twist-filled mysteries and suspense that keeps you guessing until the final frame.', 7, 'active'),
  ('Romance',     'romance',     'Heartfelt love stories and emotional journeys of the heart.', 8, 'active'),
  ('Sci-Fi',      'sci-fi',      'Future worlds, space epics and mind-bending science fiction.', 9, 'active'),
  ('Animation',   'animation',   'Animated adventures and family favourites for all ages.', 10, 'active'),
  ('Crime',       'crime',       'Gripping crime dramas, heists and stories from the underworld.', 11, 'active'),
  ('Drama',       'drama',       'Powerful, character-driven stories that stay with you.', 12, 'active'),
  ('Biography',   'biography',   'True stories and dramatised lives of remarkable people.', 13, 'active'),
  ('Documentary', 'documentary', 'Real stories, real people and the world as it is.', 14, 'active'),
  ('Web Series',  'web-series',  'Binge-worthy episodic series from across the streaming world.', 15, 'active'),
  ('TV Shows',    'tv-shows',    'Popular television series and seasons, all in one place.', 16, 'active')
ON DUPLICATE KEY UPDATE name = VALUES(name), description = VALUES(description), display_order = VALUES(display_order);

-- ---------- genres ----------
INSERT IGNORE INTO genres (name, slug) VALUES
  ('Action','action'),('Adventure','adventure'),('Animation','animation'),
  ('Comedy','comedy'),('Crime','crime'),('Drama','drama'),
  ('Fantasy','fantasy'),('Horror','horror'),('Mystery','mystery'),
  ('Romance','romance'),('Sci-Fi','sci-fi'),('Thriller','thriller'),
  ('Documentary','documentary'),('Biography','biography'),('Family','family');

-- ---------- settings ----------
INSERT INTO settings (`key`, `value`) VALUES
  ('site_name', 'TopHDMovies'),
  ('site_tagline', 'Discover movies. Read reviews. Watch trailers.'),
  ('default_meta_description', 'TopHDMovies is your home for movie information, reviews, trailers and HD download links in 480p, 720p and 1080p. Discover your next favourite film.'),
  ('footer_disclaimer', 'This site does not host any files. All content is provided for informational purposes only. We link to external sources and do not take responsibility for third-party content.'),
  ('featured_movie_id', '1'),
  ('admin_email', 'petroffavocat@gmail.com')
ON DUPLICATE KEY UPDATE `value` = VALUES(`value`);

-- ============================================================
--  Sample movies (original demo content)
-- ============================================================
INSERT INTO movies
  (title, slug, year, runtime, language, country, rating, status,
   poster_url, backdrop_url, youtube_id, overview, short_description,
   director, producer, writer,
   download_480, download_720, download_1080, size_480, size_720, size_1080,
   embed_480, embed_720, embed_1080,
   is_featured, is_trending, is_top_rated)
VALUES
  ('Echoes of Tomorrow', 'echoes-of-tomorrow', 2024, 142, 'English', 'United States', 8.6, 'published',
   'https://picsum.photos/seed/echoes-poster/500/750', 'https://picsum.photos/seed/echoes-back/1600/900', 'dQw4w9WgXcQ',
   'When a brilliant but reclusive physicist discovers a way to send short messages a single day into the past, she believes she has found a tool to prevent tragedy. Echoes of Tomorrow is a tense, deeply human science-fiction drama that asks how much of the future we are truly meant to control. As her experiments ripple outward in unexpected ways, the line between saving lives and rewriting them begins to blur. Anchored by a remarkable lead performance and a haunting score, the film builds to a finale that is both intimate and staggering in scale. A thoughtful, beautifully shot meditation on grief, hope and the price of second chances.',
   'A physicist who can text one day into the past races to prevent a tragedy — and learns the future fights back.',
   'Maya Okonkwo', 'Bright Harbor Pictures', 'Maya Okonkwo, Daniel Reyes',
   'https://example.com/dl/echoes-480p.mp4', 'https://example.com/dl/echoes-720p.mp4', 'https://example.com/dl/echoes-1080p.mp4',
   '420 MB', '950 MB', '2.3 GB',
   'https://www.youtube.com/embed/dQw4w9WgXcQ', 'https://www.youtube.com/embed/dQw4w9WgXcQ', 'https://www.youtube.com/embed/dQw4w9WgXcQ',
   1, 1, 1),

  ('The Last Monsoon', 'the-last-monsoon', 2023, 156, 'Hindi', 'India', 8.1, 'published',
   'https://picsum.photos/seed/monsoon-poster/500/750', 'https://picsum.photos/seed/monsoon-back/1600/900', 'dQw4w9WgXcQ',
   'Set against the sweeping landscapes of rural India, The Last Monsoon follows three generations of a family bound together by a single stretch of farmland and the rains that decide their fate each year. Sweeping, lyrical and emotionally rich, the film weaves romance, sacrifice and resilience into an unforgettable portrait of a changing nation. When a long drought threatens everything they have built, old wounds resurface and the family must choose between tradition and survival. A triumph of storytelling with a soundtrack that lingers long after the credits roll.',
   'Three generations of a farming family face their fate as a historic drought threatens everything they love.',
   'Arjun Mehta', 'Sunrise Films', 'Arjun Mehta, Kavya Nair',
   'https://example.com/dl/monsoon-480p.mp4', 'https://example.com/dl/monsoon-720p.mp4', 'https://example.com/dl/monsoon-1080p.mp4',
   '480 MB', '1.1 GB', '2.7 GB',
   'https://www.youtube.com/embed/dQw4w9WgXcQ', 'https://www.youtube.com/embed/dQw4w9WgXcQ', 'https://www.youtube.com/embed/dQw4w9WgXcQ',
   1, 1, 1),

  ('Midnight Vault', 'midnight-vault', 2024, 118, 'English', 'United Kingdom', 7.7, 'published',
   'https://picsum.photos/seed/vault-poster/500/750', 'https://picsum.photos/seed/vault-back/1600/900', 'dQw4w9WgXcQ',
   'A disgraced security expert is pulled into one last job: breaking into the most secure private vault in London during a single 90-minute power window. But nothing about the job is what it seems. Midnight Vault is a slick, twist-laden heist thriller that races through double-crosses, hidden agendas and a ticking clock. Stylish direction and a razor-sharp script keep the tension high from the first frame to the explosive final reveal. Smart, fast and endlessly entertaining.',
   'A disgraced expert takes one last heist — 90 minutes to crack London''s most secure vault before the power returns.',
   'Eleanor Voss', 'Northgate Studios', 'Tom Fielding',
   'https://example.com/dl/vault-480p.mp4', 'https://example.com/dl/vault-720p.mp4', 'https://example.com/dl/vault-1080p.mp4',
   '400 MB', '900 MB', '2.1 GB',
   'https://www.youtube.com/embed/dQw4w9WgXcQ', 'https://www.youtube.com/embed/dQw4w9WgXcQ', 'https://www.youtube.com/embed/dQw4w9WgXcQ',
   1, 1, 0),

  ('Paper Lanterns', 'paper-lanterns', 2022, 109, 'English', 'Canada', 7.9, 'published',
   'https://picsum.photos/seed/lanterns-poster/500/750', 'https://picsum.photos/seed/lanterns-back/1600/900', 'dQw4w9WgXcQ',
   'Two strangers meet at a small-town lantern festival and spend a single night wandering the streets, sharing the stories that have shaped them. Tender, funny and quietly profound, Paper Lanterns is a modern romance about the moments that change us when we least expect them. With natural performances and gorgeous handheld cinematography, the film captures the magic of connection without ever feeling saccharine. A warm, lovely film to lose yourself in.',
   'Two strangers spend one magical night at a lantern festival — and discover the moment that changes everything.',
   'Grace Lindqvist', 'Maplewood Pictures', 'Grace Lindqvist',
   'https://example.com/dl/lanterns-480p.mp4', 'https://example.com/dl/lanterns-720p.mp4', 'https://example.com/dl/lanterns-1080p.mp4',
   '360 MB', '820 MB', '1.9 GB',
   'https://www.youtube.com/embed/dQw4w9WgXcQ', 'https://www.youtube.com/embed/dQw4w9WgXcQ', 'https://www.youtube.com/embed/dQw4w9WgXcQ',
   0, 1, 1),

  ('Hollow Creek', 'hollow-creek', 2023, 101, 'English', 'United States', 7.2, 'published',
   'https://picsum.photos/seed/hollow-poster/500/750', 'https://picsum.photos/seed/hollow-back/1600/900', 'dQw4w9WgXcQ',
   'When a group of college friends return to a remote lake house for a reunion weekend, they begin to suspect they are not alone. Hollow Creek is a taut, atmospheric horror that trades cheap jump-scares for creeping dread and a genuinely unsettling mystery. As the night unfolds, long-buried secrets claw their way to the surface and the friends realise the real threat may have come with them. Beautifully shot and genuinely frightening.',
   'A reunion weekend at a remote lake house turns to dread when the friends realise they are not alone.',
   'Marcus Bell', 'Lantern House Films', 'Marcus Bell, Priya Shah',
   'https://example.com/dl/hollow-480p.mp4', 'https://example.com/dl/hollow-720p.mp4', 'https://example.com/dl/hollow-1080p.mp4',
   '350 MB', '780 MB', '1.8 GB',
   'https://www.youtube.com/embed/dQw4w9WgXcQ', 'https://www.youtube.com/embed/dQw4w9WgXcQ', 'https://www.youtube.com/embed/dQw4w9WgXcQ',
   0, 1, 0),

  ('Starfall Brigade', 'starfall-brigade', 2024, 134, 'English', 'United States', 8.0, 'published',
   'https://picsum.photos/seed/starfall-poster/500/750', 'https://picsum.photos/seed/starfall-back/1600/900', 'dQw4w9WgXcQ',
   'In the year 2189, a ragtag squad of salvage pilots stumbles upon a derelict warship carrying a secret that could end a decades-long galactic war — or start a far worse one. Starfall Brigade is a rousing space adventure full of dazzling visuals, sharp humour and genuine heart. As the crew is hunted across the stars, unlikely friendships are forged and ordinary people become heroes. A crowd-pleasing sci-fi spectacle built for the big screen.',
   'A crew of salvage pilots finds a derelict warship hiding a secret that could end — or ignite — a galactic war.',
   'Dana Cross', 'Orbit Lab', 'Dana Cross, Leo Park',
   'https://example.com/dl/starfall-480p.mp4', 'https://example.com/dl/starfall-720p.mp4', 'https://example.com/dl/starfall-1080p.mp4',
   '460 MB', '1.0 GB', '2.5 GB',
   'https://www.youtube.com/embed/dQw4w9WgXcQ', 'https://www.youtube.com/embed/dQw4w9WgXcQ', 'https://www.youtube.com/embed/dQw4w9WgXcQ',
   1, 0, 1);

-- ---------- cast ----------
INSERT INTO movie_cast (movie_id, actor_name, character_name, sort_order) VALUES
  (1, 'Olivia Hartman', 'Dr. Mira Solis', 0),
  (1, 'Andre Whitlock', 'Sam Okafor', 1),
  (1, 'Renata Cole', 'Dr. Ines Vidal', 2),
  (2, 'Vikram Saxena', 'Hari', 0),
  (2, 'Ananya Pillai', 'Meera', 1),
  (2, 'Rohan Das', 'Young Hari', 2),
  (3, 'James Oduya', 'Cole Mercer', 0),
  (3, 'Sofia Marchetti', 'Nina', 1),
  (4, 'Theo Lindqvist', 'Adam', 0),
  (4, 'Chloe Bennett', 'Wren', 1),
  (5, 'Marcus Reed', 'Danny', 0),
  (5, 'Aisha Rahman', 'Priya', 1),
  (6, 'Kai Park', 'Captain Vega', 0),
  (6, 'Nadia Holt', 'Specialist Rourke', 1);

-- ---------- movie_categories ----------
-- 1 Echoes (Hollywood, Sci-Fi, Drama)
INSERT IGNORE INTO movie_categories (movie_id, category_id)
SELECT 1, id FROM categories WHERE slug IN ('hollywood','sci-fi','drama');
-- 2 Monsoon (Bollywood, Drama, Romance)
INSERT IGNORE INTO movie_categories (movie_id, category_id)
SELECT 2, id FROM categories WHERE slug IN ('bollywood','drama','romance');
-- 3 Vault (Hollywood, Thriller, Crime, Action)
INSERT IGNORE INTO movie_categories (movie_id, category_id)
SELECT 3, id FROM categories WHERE slug IN ('hollywood','thriller','crime','action');
-- 4 Lanterns (Hollywood, Romance, Drama)
INSERT IGNORE INTO movie_categories (movie_id, category_id)
SELECT 4, id FROM categories WHERE slug IN ('hollywood','romance','drama');
-- 5 Hollow (Hollywood, Horror, Thriller)
INSERT IGNORE INTO movie_categories (movie_id, category_id)
SELECT 5, id FROM categories WHERE slug IN ('hollywood','horror','thriller');
-- 6 Starfall (Hollywood, Sci-Fi, Action)
INSERT IGNORE INTO movie_categories (movie_id, category_id)
SELECT 6, id FROM categories WHERE slug IN ('hollywood','sci-fi','action');

-- ---------- movie_genres ----------
INSERT IGNORE INTO movie_genres (movie_id, genre_id) SELECT 1, id FROM genres WHERE slug IN ('sci-fi','drama','mystery');
INSERT IGNORE INTO movie_genres (movie_id, genre_id) SELECT 2, id FROM genres WHERE slug IN ('drama','romance');
INSERT IGNORE INTO movie_genres (movie_id, genre_id) SELECT 3, id FROM genres WHERE slug IN ('thriller','crime','action');
INSERT IGNORE INTO movie_genres (movie_id, genre_id) SELECT 4, id FROM genres WHERE slug IN ('romance','drama');
INSERT IGNORE INTO movie_genres (movie_id, genre_id) SELECT 5, id FROM genres WHERE slug IN ('horror','thriller','mystery');
INSERT IGNORE INTO movie_genres (movie_id, genre_id) SELECT 6, id FROM genres WHERE slug IN ('sci-fi','action','adventure');

-- ---------- page_views (demo numbers) ----------
INSERT INTO page_views (movie_id, views) VALUES
  (1, 18432), (2, 14210), (3, 9875), (4, 7321), (5, 6044), (6, 11290)
ON DUPLICATE KEY UPDATE views = VALUES(views);
