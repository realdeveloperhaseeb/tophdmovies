-- ============================================================
--  TopHDMovies — Fast & Furious saga (2001 → 2023, incl. Hobbs & Shaw)
--  Bilingual overviews (EN + हिंदी), language "Hindi, English".
--  Apply to LOCAL DB, then: node scripts/sync-tmdb.mjs <slugs>
-- ============================================================
SET NAMES utf8mb4;

INSERT INTO movies
  (title, slug, year, runtime, language, country, rating, status,
   overview, short_description, director, producer, writer,
   is_featured, is_trending, is_top_rated)
VALUES
('The Fast and the Furious','the-fast-and-the-furious',2001,106,'Hindi, English','United States',6.8,'published',
 'An undercover cop infiltrates the underground world of street racing to bust a crew suspected of high-speed heists, only to be drawn to their leader and his code of loyalty and family. The film that ignited a global high-octane franchise.\n\nएक अंडरकवर पुलिस अधिकारी स्ट्रीट रेसिंग की गुप्त दुनिया में घुसपैठ करता है, पर वहाँ के सरगना और उसके परिवार जैसे जुड़ाव की ओर खिंचता चला जाता है। यहीं से शुरू हुई दुनिया भर में मशहूर हाई-स्पीड फ्रैंचाइज़ी।',
 'An undercover cop infiltrates the street-racing world. | एक अंडरकवर पुलिस वाला स्ट्रीट रेसिंग की दुनिया में घुसता है।',
 'Rob Cohen','Neal H. Moritz','Gary Scott Thompson, David Ayer',0,0,0),

('2 Fast 2 Furious','2-fast-2-furious',2003,107,'Hindi, English','United States',5.9,'published',
 'Former cop Brian O''Conner teams up with an old friend to take down a drug lord in Miami, trading speed and style for one last shot at redemption. A flashy, fast-paced ride packed with custom cars and daring stunts.\n\nपूर्व पुलिस अधिकारी ब्रायन अपने पुराने दोस्त के साथ मिलकर मियामी के एक ड्रग लॉर्ड को पकड़ने का बीड़ा उठाता है। तेज़ रफ़्तार, चमक-धमक और खतरनाक स्टंट से भरी एक रोमांचक सवारी।',
 'Brian teams up to take down a Miami drug lord. | ब्रायन मियामी के ड्रग लॉर्ड को पकड़ने निकलता है।',
 'John Singleton','Neal H. Moritz','Michael Brandt, Derek Haas',0,0,0),

('The Fast and the Furious: Tokyo Drift','the-fast-and-the-furious-tokyo-drift',2006,104,'Hindi, English','United States',6.0,'published',
 'Sent to live in Tokyo, a rebellious American teenager is pulled into the underground world of drift racing, where he must master a new style of driving and earn respect on the streets. A stylish, neon-soaked chapter that reinvents the series.\n\nटोक्यो भेजा गया एक बाग़ी अमेरिकी किशोर ड्रिफ्ट रेसिंग की गुप्त दुनिया में खिंच आता है, जहाँ उसे ड्राइविंग की नई शैली में महारत हासिल कर सड़कों पर इज़्ज़त कमानी है। नियॉन रोशनी में डूबा एक स्टाइलिश अध्याय।',
 'A teen masters drift racing on Tokyo''s streets. | एक किशोर टोक्यो की सड़कों पर ड्रिफ्ट रेसिंग सीखता है।',
 'Justin Lin','Neal H. Moritz','Chris Morgan',0,0,0),

('Fast & Furious','fast-and-furious-2009',2009,107,'Hindi, English','United States',6.6,'published',
 'Old rivals Dom and Brian are forced back together to hunt a shared enemy, reigniting a fragile alliance built on speed, trust and revenge. The film that brought the original crew roaring back and set the saga on a bold new course.\n\nपुराने प्रतिद्वंद्वी डॉम और ब्रायन एक साझा दुश्मन का पीछा करने के लिए फिर से साथ आते हैं, जहाँ रफ़्तार, भरोसे और बदले पर टिकी एक कमज़ोर दोस्ती दोबारा जाग उठती है। मूल टीम की धमाकेदार वापसी।',
 'Dom and Brian reunite to hunt a shared enemy. | डॉम और ब्रायन एक साझा दुश्मन के लिए फिर साथ आते हैं।',
 'Justin Lin','Neal H. Moritz','Chris Morgan',0,0,0),

('Fast Five','fast-five',2011,130,'Hindi, English','United States',7.3,'published',
 'On the run in Rio, Dom and his crew plan one massive heist to win their freedom — while a relentless federal agent hunts them down. The film that transformed the series into a blockbuster heist-action saga and added a legendary new foe.\n\nरियो में फरार डॉम और उसकी टीम अपनी आज़ादी के लिए एक बड़ी डकैती की योजना बनाते हैं, जबकि एक कड़क संघीय एजेंट उनके पीछे पड़ा है। यहीं से सीरीज़ एक ज़बरदस्त हाइस्ट-एक्शन गाथा में बदल जाती है।',
 'Dom''s crew plans a massive heist in Rio. | डॉम की टीम रियो में एक बड़ी डकैती की योजना बनाती है।',
 'Justin Lin','Neal H. Moritz','Chris Morgan',1,0,1),

('Fast & Furious 6','fast-and-furious-6',2013,130,'Hindi, English','United States',7.0,'published',
 'Offered clean records in exchange for taking down a ruthless mercenary, Dom''s crew returns for a globe-spanning mission — one that brings a thought-lost member back into the fold. Bigger stunts, higher stakes and pure adrenaline.\n\nएक खतरनाक भाड़े के सैनिक को पकड़ने के बदले साफ़ रिकॉर्ड का प्रस्ताव मिलने पर डॉम की टीम एक दुनिया भर में फैले मिशन पर लौटती है, जो एक खोई हुई समझी गई साथी को वापस ले आता है। और बड़े स्टंट, और ऊँचा दांव।',
 'Dom''s crew hunts a mercenary across the globe. | डॉम की टीम एक भाड़े के सैनिक का पीछा करती है।',
 'Justin Lin','Neal H. Moritz','Chris Morgan',0,0,1),

('Furious 7','furious-7',2015,137,'Hindi, English','United States',7.1,'published',
 'The crew faces their deadliest enemy yet — a vengeful assassin hunting them one by one for what they did to his brother. An explosive, emotional ride famous for its heartfelt farewell to a beloved star.\n\nटीम का सामना अब तक के सबसे खतरनाक दुश्मन से होता है — एक बदला लेने वाला हत्यारा जो उन्हें एक-एक कर निशाना बना रहा है। एक धमाकेदार और भावुक सफ़र, जो एक प्रिय सितारे को दिल छू लेने वाली विदाई देता है।',
 'The crew faces a vengeful assassin hunting them. | टीम एक बदला लेने वाले हत्यारे का सामना करती है।',
 'James Wan','Neal H. Moritz','Chris Morgan',1,1,1),

('The Fate of the Furious','the-fate-of-the-furious',2017,136,'Hindi, English','United States',6.6,'published',
 'When a mysterious woman lures Dom into betraying his own family, the crew must band together to stop a global catastrophe and bring their leader back. A high-stakes thriller that turns the team against the man who built it.\n\nजब एक रहस्यमयी औरत डॉम को अपने ही परिवार से ग़द्दारी करने पर मजबूर कर देती है, तो टीम को एक वैश्विक तबाही रोकने और अपने सरगना को वापस लाने के लिए एकजुट होना पड़ता है। ऊँचे दांव वाला रोमांचक थ्रिलर।',
 'A mystery woman turns Dom against his family. | एक रहस्यमयी औरत डॉम को परिवार के खिलाफ कर देती है।',
 'F. Gary Gray','Neal H. Moritz','Chris Morgan',0,0,0),

('Fast & Furious Presents: Hobbs & Shaw','hobbs-and-shaw',2019,137,'Hindi, English','United States',6.4,'published',
 'A lawman and an outcast who can barely stand each other are forced to team up against a cybernetically enhanced super-soldier threatening humanity. A loud, funny, action-packed spin-off built on explosive chemistry.\n\nएक कानून का रखवाला और एक बाग़ी, जो एक-दूसरे को फूटी आँख नहीं सुहाते, मानवता के लिए खतरा बने एक सुपर-सोल्जर के खिलाफ साथ आने को मजबूर हो जाते हैं। धमाकेदार केमिस्ट्री से भरी मज़ेदार स्पिन-ऑफ।',
 'Hobbs and Shaw team up against a super-soldier. | हॉब्स और शॉ एक सुपर-सोल्जर के खिलाफ साथ आते हैं।',
 'David Leitch','Hiram Garcia','Chris Morgan, Drew Pearce',0,1,0),

('F9: The Fast Saga','f9-the-fast-saga',2021,143,'Hindi, English','United States',5.2,'published',
 'Dom''s past comes roaring back when his estranged, lethal brother joins forces with an old enemy. To protect everything he loves, Dom must confront the demons he left behind. Gravity-defying set-pieces and family at the wheel.\n\nजब डॉम का बिछड़ा और खतरनाक भाई एक पुराने दुश्मन से हाथ मिला लेता है, तो उसका अतीत लौट आता है। अपने हर अज़ीज़ को बचाने के लिए डॉम को अपने पुराने राज़ों का सामना करना पड़ता है। हैरतअंगेज़ स्टंट और परिवार।',
 'Dom faces his lethal estranged brother. | डॉम अपने खतरनाक बिछड़े भाई का सामना करता है।',
 'Justin Lin','Neal H. Moritz','Daniel Casey, Justin Lin',0,1,0),

('Fast X','fast-x',2023,141,'Hindi, English','United States',5.8,'published',
 'A vengeful enemy from the crew''s past returns with a deadly plan to destroy everything — and everyone — Dom loves. The beginning of the explosive final chapters, with the highest stakes the family has ever faced.\n\nटीम के अतीत का एक बदला लेने वाला दुश्मन एक खतरनाक योजना के साथ लौटता है, ताकि डॉम के हर अज़ीज़ और हर चीज़ को तबाह कर दे। धमाकेदार अंतिम अध्यायों की शुरुआत, जहाँ दांव सबसे ऊँचा है।',
 'A vengeful enemy targets everyone Dom loves. | एक बदला लेने वाला दुश्मन डॉम के अपनों को निशाना बनाता है।',
 'Louis Leterrier','Vin Diesel, Neal H. Moritz','Dan Mazeau, Justin Lin',1,1,0);

-- Placeholder downloads / embeds / trailer
UPDATE movies SET
  youtube_id = 'dQw4w9WgXcQ',
  download_480  = CONCAT('https://example.com/download/', slug, '-480p.mkv'),
  download_720  = CONCAT('https://example.com/download/', slug, '-720p.mkv'),
  download_1080 = CONCAT('https://example.com/download/', slug, '-1080p.mkv'),
  size_480 = '450 MB', size_720 = '1.1 GB', size_1080 = '2.6 GB',
  embed_480  = 'https://www.youtube.com/embed/dQw4w9WgXcQ',
  embed_720  = 'https://www.youtube.com/embed/dQw4w9WgXcQ',
  embed_1080 = 'https://www.youtube.com/embed/dQw4w9WgXcQ'
WHERE slug IN ('the-fast-and-the-furious','2-fast-2-furious','the-fast-and-the-furious-tokyo-drift',
  'fast-and-furious-2009','fast-five','fast-and-furious-6','furious-7','the-fate-of-the-furious',
  'hobbs-and-shaw','f9-the-fast-saga','fast-x');

-- Categories: Hollywood, Action, Crime, Thriller
INSERT IGNORE INTO movie_categories (movie_id, category_id)
SELECT m.id, c.id FROM movies m JOIN categories c ON c.slug IN ('hollywood','action','crime','thriller')
WHERE m.slug IN ('the-fast-and-the-furious','2-fast-2-furious','the-fast-and-the-furious-tokyo-drift',
  'fast-and-furious-2009','fast-five','fast-and-furious-6','furious-7','the-fate-of-the-furious',
  'hobbs-and-shaw','f9-the-fast-saga','fast-x');

-- Genres: Action, Adventure, Thriller, Crime
INSERT IGNORE INTO movie_genres (movie_id, genre_id)
SELECT m.id, g.id FROM movies m JOIN genres g ON g.slug IN ('action','adventure','thriller','crime')
WHERE m.slug IN ('the-fast-and-the-furious','2-fast-2-furious','the-fast-and-the-furious-tokyo-drift',
  'fast-and-furious-2009','fast-five','fast-and-furious-6','furious-7','the-fate-of-the-furious',
  'hobbs-and-shaw','f9-the-fast-saga','fast-x');

-- Cast (top billed)
INSERT INTO movie_cast (movie_id, actor_name, character_name, sort_order) VALUES
((SELECT id FROM movies WHERE slug='the-fast-and-the-furious'),'Vin Diesel','Dominic Toretto',0),
((SELECT id FROM movies WHERE slug='the-fast-and-the-furious'),'Paul Walker','Brian O''Conner',1),
((SELECT id FROM movies WHERE slug='the-fast-and-the-furious'),'Michelle Rodriguez','Letty Ortiz',2),

((SELECT id FROM movies WHERE slug='2-fast-2-furious'),'Paul Walker','Brian O''Conner',0),
((SELECT id FROM movies WHERE slug='2-fast-2-furious'),'Tyrese Gibson','Roman Pearce',1),
((SELECT id FROM movies WHERE slug='2-fast-2-furious'),'Eva Mendes','Monica Fuentes',2),

((SELECT id FROM movies WHERE slug='the-fast-and-the-furious-tokyo-drift'),'Lucas Black','Sean Boswell',0),
((SELECT id FROM movies WHERE slug='the-fast-and-the-furious-tokyo-drift'),'Sung Kang','Han Lue',1),
((SELECT id FROM movies WHERE slug='the-fast-and-the-furious-tokyo-drift'),'Bow Wow','Twinkie',2),

((SELECT id FROM movies WHERE slug='fast-and-furious-2009'),'Vin Diesel','Dominic Toretto',0),
((SELECT id FROM movies WHERE slug='fast-and-furious-2009'),'Paul Walker','Brian O''Conner',1),
((SELECT id FROM movies WHERE slug='fast-and-furious-2009'),'Jordana Brewster','Mia Toretto',2),

((SELECT id FROM movies WHERE slug='fast-five'),'Vin Diesel','Dominic Toretto',0),
((SELECT id FROM movies WHERE slug='fast-five'),'Paul Walker','Brian O''Conner',1),
((SELECT id FROM movies WHERE slug='fast-five'),'Dwayne Johnson','Luke Hobbs',2),

((SELECT id FROM movies WHERE slug='fast-and-furious-6'),'Vin Diesel','Dominic Toretto',0),
((SELECT id FROM movies WHERE slug='fast-and-furious-6'),'Dwayne Johnson','Luke Hobbs',1),
((SELECT id FROM movies WHERE slug='fast-and-furious-6'),'Michelle Rodriguez','Letty Ortiz',2),

((SELECT id FROM movies WHERE slug='furious-7'),'Vin Diesel','Dominic Toretto',0),
((SELECT id FROM movies WHERE slug='furious-7'),'Paul Walker','Brian O''Conner',1),
((SELECT id FROM movies WHERE slug='furious-7'),'Jason Statham','Deckard Shaw',2),

((SELECT id FROM movies WHERE slug='the-fate-of-the-furious'),'Vin Diesel','Dominic Toretto',0),
((SELECT id FROM movies WHERE slug='the-fate-of-the-furious'),'Dwayne Johnson','Luke Hobbs',1),
((SELECT id FROM movies WHERE slug='the-fate-of-the-furious'),'Charlize Theron','Cipher',2),

((SELECT id FROM movies WHERE slug='hobbs-and-shaw'),'Dwayne Johnson','Luke Hobbs',0),
((SELECT id FROM movies WHERE slug='hobbs-and-shaw'),'Jason Statham','Deckard Shaw',1),
((SELECT id FROM movies WHERE slug='hobbs-and-shaw'),'Idris Elba','Brixton Lore',2),

((SELECT id FROM movies WHERE slug='f9-the-fast-saga'),'Vin Diesel','Dominic Toretto',0),
((SELECT id FROM movies WHERE slug='f9-the-fast-saga'),'Michelle Rodriguez','Letty Ortiz',1),
((SELECT id FROM movies WHERE slug='f9-the-fast-saga'),'John Cena','Jakob Toretto',2),

((SELECT id FROM movies WHERE slug='fast-x'),'Vin Diesel','Dominic Toretto',0),
((SELECT id FROM movies WHERE slug='fast-x'),'Jason Momoa','Dante Reyes',1),
((SELECT id FROM movies WHERE slug='fast-x'),'Michelle Rodriguez','Letty Ortiz',2);
