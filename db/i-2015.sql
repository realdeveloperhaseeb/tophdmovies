-- TopHDMovies — I (2015), Tamil film by Shankar starring Vikram.
SET NAMES utf8mb4;

INSERT INTO movies
  (title, slug, year, runtime, language, country, rating, status,
   overview, short_description, director, producer, writer,
   is_featured, is_trending, is_top_rated)
VALUES
('I','i-2015',2015,188,'Hindi, Tamil','India',6.0,'published',
 'A passionate bodybuilder rises to fame as a top model after falling for the woman of his dreams — until a jealous conspiracy disfigures him and destroys everything he loves. Transformed and broken, he sets out on a haunting quest for revenge. A visually spectacular romantic thriller from director Shankar, with music by A. R. Rahman.\n\nएक जुनूनी बॉडीबिल्डर अपने सपनों की हसीना से प्यार करने के बाद टॉप मॉडल बन जाता है — पर एक जलनभरी साज़िश उसे बदसूरत बना देती है और उसका सब कुछ छीन लेती है। टूटा हुआ और बदला हुआ, वह बदले की एक खौफनाक राह पर निकल पड़ता है। शंकर के निर्देशन और ए. आर. रहमान के संगीत से सजी एक भव्य रोमांटिक थ्रिलर।',
 'A model is disfigured by a jealous conspiracy and seeks revenge. | एक मॉडल को साज़िश के तहत बदसूरत बना दिया जाता है और वह बदला लेता है।',
 'S. Shankar','V. Ravichandran','S. Shankar, Subha',
 0,0,0);

UPDATE movies SET
  youtube_id='dQw4w9WgXcQ',
  download_480='https://example.com/download/i-2015-480p.mkv',
  download_720='https://example.com/download/i-2015-720p.mkv',
  download_1080='https://example.com/download/i-2015-1080p.mkv',
  size_480='550 MB', size_720='1.3 GB', size_1080='3.1 GB',
  embed_480='https://www.youtube.com/embed/dQw4w9WgXcQ',
  embed_720='https://www.youtube.com/embed/dQw4w9WgXcQ',
  embed_1080='https://www.youtube.com/embed/dQw4w9WgXcQ'
WHERE slug='i-2015';

INSERT IGNORE INTO movie_categories (movie_id, category_id)
SELECT m.id, c.id FROM movies m JOIN categories c ON c.slug IN ('bollywood','action','romance','thriller')
WHERE m.slug='i-2015';

INSERT IGNORE INTO movie_genres (movie_id, genre_id)
SELECT m.id, g.id FROM movies m JOIN genres g ON g.slug IN ('action','romance','thriller')
WHERE m.slug='i-2015';

INSERT INTO movie_cast (movie_id, actor_name, character_name, sort_order) VALUES
((SELECT id FROM movies WHERE slug='i-2015'),'Vikram','Lingesan',0),
((SELECT id FROM movies WHERE slug='i-2015'),'Amy Jackson','Diya',1),
((SELECT id FROM movies WHERE slug='i-2015'),'Suresh Gopi','John',2),
((SELECT id FROM movies WHERE slug='i-2015'),'Santhanam','Babu',3),
((SELECT id FROM movies WHERE slug='i-2015'),'Upen Patel','Vasudevan',4);
