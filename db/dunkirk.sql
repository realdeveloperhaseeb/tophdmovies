-- TopHDMovies — Dunkirk (2017). Apply to LOCAL DB, then sync-tmdb.
SET NAMES utf8mb4;

INSERT INTO movies
  (title, slug, year, runtime, language, country, rating, status,
   overview, short_description, director, producer, writer,
   is_featured, is_trending, is_top_rated)
VALUES
('Dunkirk','dunkirk',2017,106,'Hindi, English','United Kingdom',7.8,'published',
 'Trapped on the beaches of Dunkirk with their backs to the sea, hundreds of thousands of Allied soldiers await rescue as the enemy closes in. Told across land, sea and air, Christopher Nolan''s tense, immersive war epic turns a desperate evacuation into an unrelenting fight for survival.\n\nडनकर्क के समुद्र तटों पर फँसे लाखों मित्र-देशों के सैनिक, पीठ के पीछे समंदर और सामने बढ़ता दुश्मन, बचाव की उम्मीद में हैं। ज़मीन, समंदर और आसमान — तीनों मोर्चों पर बुनी क्रिस्टोफर नोलन की यह तनावपूर्ण युद्ध गाथा एक बेताब निकासी को जीवित रहने की जंग में बदल देती है।',
 'Allied soldiers fight to survive a desperate WWII evacuation at Dunkirk. | डनकर्क में फँसे मित्र-देशों के सैनिक बचने के लिए जूझते हैं।',
 'Christopher Nolan','Emma Thomas, Christopher Nolan','Christopher Nolan',
 0,0,1);

UPDATE movies SET
  youtube_id = 'dQw4w9WgXcQ',
  download_480='https://example.com/download/dunkirk-480p.mkv',
  download_720='https://example.com/download/dunkirk-720p.mkv',
  download_1080='https://example.com/download/dunkirk-1080p.mkv',
  size_480='400 MB', size_720='950 MB', size_1080='2.2 GB',
  embed_480='https://www.youtube.com/embed/dQw4w9WgXcQ',
  embed_720='https://www.youtube.com/embed/dQw4w9WgXcQ',
  embed_1080='https://www.youtube.com/embed/dQw4w9WgXcQ'
WHERE slug='dunkirk';

INSERT IGNORE INTO movie_categories (movie_id, category_id)
SELECT m.id, c.id FROM movies m JOIN categories c ON c.slug IN ('hollywood','drama','thriller','action')
WHERE m.slug='dunkirk';

INSERT IGNORE INTO movie_genres (movie_id, genre_id)
SELECT m.id, g.id FROM movies m JOIN genres g ON g.slug IN ('action','drama','thriller')
WHERE m.slug='dunkirk';

INSERT INTO movie_cast (movie_id, actor_name, character_name, sort_order) VALUES
((SELECT id FROM movies WHERE slug='dunkirk'),'Fionn Whitehead','Tommy',0),
((SELECT id FROM movies WHERE slug='dunkirk'),'Tom Hardy','Farrier',1),
((SELECT id FROM movies WHERE slug='dunkirk'),'Mark Rylance','Mr. Dawson',2),
((SELECT id FROM movies WHERE slug='dunkirk'),'Cillian Murphy','Shivering Soldier',3),
((SELECT id FROM movies WHERE slug='dunkirk'),'Kenneth Branagh','Commander Bolton',4);
