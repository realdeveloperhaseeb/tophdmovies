-- Replace placeholder download links with a Google search query per movie+quality,
-- so each download button redirects somewhere useful.
SET NAMES utf8mb4;

UPDATE movies SET
  download_480 = CONCAT('https://www.google.com/search?q=',
    REPLACE(REPLACE(REPLACE(title,'&','and'),'*',''),' ','+'),
    CASE WHEN year IS NOT NULL THEN CONCAT('+',year) ELSE '' END, '+download+480p'),
  download_720 = CONCAT('https://www.google.com/search?q=',
    REPLACE(REPLACE(REPLACE(title,'&','and'),'*',''),' ','+'),
    CASE WHEN year IS NOT NULL THEN CONCAT('+',year) ELSE '' END, '+download+720p'),
  download_1080 = CONCAT('https://www.google.com/search?q=',
    REPLACE(REPLACE(REPLACE(title,'&','and'),'*',''),' ','+'),
    CASE WHEN year IS NOT NULL THEN CONCAT('+',year) ELSE '' END, '+download+1080p');
