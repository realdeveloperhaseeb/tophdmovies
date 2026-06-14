-- ============================================================
--  TopHDMovies — MySQL schema (Hostinger Business plan)
--  Run this once on your database before starting the app.
--  charset utf8mb4 for full unicode (titles in any language).
-- ============================================================

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ---------- movies ----------
CREATE TABLE IF NOT EXISTS movies (
  id              INT UNSIGNED NOT NULL AUTO_INCREMENT,
  title           VARCHAR(255) NOT NULL,
  slug            VARCHAR(280) NOT NULL,
  year            SMALLINT UNSIGNED DEFAULT NULL,
  runtime         SMALLINT UNSIGNED DEFAULT NULL,        -- minutes (per episode for series)
  episode_info    VARCHAR(120) DEFAULT NULL,             -- series, e.g. "5 Seasons · 62 Episodes"
  language        VARCHAR(120) DEFAULT NULL,
  country         VARCHAR(120) DEFAULT NULL,
  rating          DECIMAL(3,1) DEFAULT NULL,             -- out of 10
  status          ENUM('published','draft') NOT NULL DEFAULT 'draft',

  poster_url      VARCHAR(1000) DEFAULT NULL,
  backdrop_url    VARCHAR(1000) DEFAULT NULL,
  youtube_id      VARCHAR(40)   DEFAULT NULL,

  overview        MEDIUMTEXT,                            -- full review / description
  short_description VARCHAR(255) DEFAULT NULL,

  director        VARCHAR(255) DEFAULT NULL,
  producer        VARCHAR(255) DEFAULT NULL,
  writer          VARCHAR(255) DEFAULT NULL,

  download_480    VARCHAR(1000) DEFAULT NULL,
  download_720    VARCHAR(1000) DEFAULT NULL,
  download_1080   VARCHAR(1000) DEFAULT NULL,
  size_480        VARCHAR(40)  DEFAULT NULL,
  size_720        VARCHAR(40)  DEFAULT NULL,
  size_1080       VARCHAR(40)  DEFAULT NULL,

  embed_480       VARCHAR(1000) DEFAULT NULL,
  embed_720       VARCHAR(1000) DEFAULT NULL,
  embed_1080      VARCHAR(1000) DEFAULT NULL,

  is_featured     TINYINT(1) NOT NULL DEFAULT 0,
  is_trending     TINYINT(1) NOT NULL DEFAULT 0,
  is_top_rated    TINYINT(1) NOT NULL DEFAULT 0,

  created_at      DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  updated_at      DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,

  PRIMARY KEY (id),
  UNIQUE KEY uniq_slug (slug),
  KEY idx_status (status),
  KEY idx_year (year),
  KEY idx_rating (rating),
  KEY idx_featured (is_featured),
  KEY idx_trending (is_trending),
  KEY idx_top_rated (is_top_rated),
  FULLTEXT KEY ft_title_overview (title, overview, short_description)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- ---------- categories ----------
CREATE TABLE IF NOT EXISTS categories (
  id            INT UNSIGNED NOT NULL AUTO_INCREMENT,
  name          VARCHAR(120) NOT NULL,
  slug          VARCHAR(140) NOT NULL,
  description   TEXT,
  display_order INT NOT NULL DEFAULT 0,
  status        ENUM('active','hidden') NOT NULL DEFAULT 'active',
  PRIMARY KEY (id),
  UNIQUE KEY uniq_cat_slug (slug)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- ---------- genres ----------
CREATE TABLE IF NOT EXISTS genres (
  id    INT UNSIGNED NOT NULL AUTO_INCREMENT,
  name  VARCHAR(120) NOT NULL,
  slug  VARCHAR(140) NOT NULL,
  PRIMARY KEY (id),
  UNIQUE KEY uniq_genre_slug (slug)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- ---------- movie_categories (M:N) ----------
CREATE TABLE IF NOT EXISTS movie_categories (
  movie_id    INT UNSIGNED NOT NULL,
  category_id INT UNSIGNED NOT NULL,
  PRIMARY KEY (movie_id, category_id),
  KEY idx_mc_cat (category_id),
  CONSTRAINT fk_mc_movie    FOREIGN KEY (movie_id)    REFERENCES movies(id)     ON DELETE CASCADE,
  CONSTRAINT fk_mc_category FOREIGN KEY (category_id) REFERENCES categories(id) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- ---------- movie_genres (M:N) ----------
CREATE TABLE IF NOT EXISTS movie_genres (
  movie_id INT UNSIGNED NOT NULL,
  genre_id INT UNSIGNED NOT NULL,
  PRIMARY KEY (movie_id, genre_id),
  KEY idx_mg_genre (genre_id),
  CONSTRAINT fk_mg_movie FOREIGN KEY (movie_id) REFERENCES movies(id) ON DELETE CASCADE,
  CONSTRAINT fk_mg_genre FOREIGN KEY (genre_id) REFERENCES genres(id) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- ---------- movie_cast ----------
CREATE TABLE IF NOT EXISTS movie_cast (
  id             INT UNSIGNED NOT NULL AUTO_INCREMENT,
  movie_id       INT UNSIGNED NOT NULL,
  actor_name     VARCHAR(200) NOT NULL,
  character_name VARCHAR(200) DEFAULT NULL,
  sort_order     INT NOT NULL DEFAULT 0,
  PRIMARY KEY (id),
  KEY idx_cast_movie (movie_id),
  CONSTRAINT fk_cast_movie FOREIGN KEY (movie_id) REFERENCES movies(id) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- ---------- page_views ----------
CREATE TABLE IF NOT EXISTS page_views (
  id         INT UNSIGNED NOT NULL AUTO_INCREMENT,
  movie_id   INT UNSIGNED NOT NULL,
  views      INT UNSIGNED NOT NULL DEFAULT 0,
  updated_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (id),
  UNIQUE KEY uniq_pv_movie (movie_id),
  CONSTRAINT fk_pv_movie FOREIGN KEY (movie_id) REFERENCES movies(id) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- ---------- contact_messages ----------
CREATE TABLE IF NOT EXISTS contact_messages (
  id         INT UNSIGNED NOT NULL AUTO_INCREMENT,
  name       VARCHAR(200) NOT NULL,
  email      VARCHAR(255) NOT NULL,
  subject    VARCHAR(120) NOT NULL,
  message    TEXT NOT NULL,
  is_read    TINYINT(1) NOT NULL DEFAULT 0,
  created_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (id),
  KEY idx_msg_read (is_read),
  KEY idx_msg_created (created_at)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- ---------- settings (key/value) ----------
CREATE TABLE IF NOT EXISTS settings (
  `key`   VARCHAR(120) NOT NULL,
  `value` TEXT,
  PRIMARY KEY (`key`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- ---------- media (admin image uploads, served via /api/media/[id]) ----------
CREATE TABLE IF NOT EXISTS media (
  id         VARCHAR(40) NOT NULL,
  mime       VARCHAR(100) NOT NULL,
  data       MEDIUMBLOB NOT NULL,
  size       INT UNSIGNED NOT NULL,
  created_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

SET FOREIGN_KEY_CHECKS = 1;
