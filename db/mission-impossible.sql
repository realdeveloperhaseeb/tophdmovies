-- ============================================================
--  TopHDMovies — Mission: Impossible franchise (1996 → 2025)
--  Bilingual overviews (English + हिंदी). Apply to the LOCAL DB,
--  then push live with: node scripts/sync-tmdb.mjs <slugs>
-- ============================================================
SET NAMES utf8mb4;

INSERT INTO movies
  (title, slug, year, runtime, language, country, rating, status,
   overview, short_description, director, producer, writer,
   is_featured, is_trending, is_top_rated)
VALUES
('Mission: Impossible','mission-impossible',1996,110,'English, Hindi','United States',7.1,'published',
 'Elite agent Ethan Hunt is framed for the deaths of his team and branded a traitor. To clear his name and expose the real mole, he assembles a rogue crew and pulls off one of cinema''s most iconic break-ins. A sleek, suspenseful spy thriller that launched a blockbuster franchise.\n\nएलीट एजेंट इथन हंट को उसकी पूरी टीम की मौत के लिए फँसाया जाता है और गद्दार करार दिया जाता है। अपनी बेगुनाही साबित करने और असली दुश्मन को बेनकाब करने के लिए वह एक खतरनाक मिशन पर निकल पड़ता है। तेज़-तर्रार एक्शन और दमदार सस्पेंस से भरपूर यह जासूसी थ्रिलर शुरू से आखिर तक बांधे रखती है।',
 'Ethan Hunt is framed as a traitor and must clear his name. | इथन हंट को गद्दार ठहराया जाता है और उसे अपनी बेगुनाही साबित करनी है।',
 'Brian De Palma','Tom Cruise, Paula Wagner','David Koepp, Robert Towne',0,0,1),

('Mission: Impossible 2','mission-impossible-2',2000,123,'English, Hindi','United States',6.1,'published',
 'Ethan Hunt races against time to stop a rogue agent from releasing a deadly engineered virus. With high-octane chases and gravity-defying stunts, this stylish sequel turns the spy game into a slick action spectacle.\n\nइथन हंट को एक खतरनाक वायरस को दुनिया में फैलने से रोकने के लिए समय के खिलाफ दौड़ लगानी है। रोमांचक चेज़, जानलेवा स्टंट और ज़बरदस्त एक्शन से भरी यह फिल्म दर्शकों को सीट से बांधे रखती है।',
 'Ethan Hunt must stop a deadly virus from spreading. | इथन हंट को एक घातक वायरस फैलने से रोकना है।',
 'John Woo','Tom Cruise, Paula Wagner','Robert Towne',0,0,0),

('Mission: Impossible III','mission-impossible-iii',2006,126,'English, Hindi','United States',6.9,'published',
 'Now training new agents, Ethan Hunt is pulled back into the field when a ruthless arms dealer threatens everyone he loves. The most personal mission yet, packed with tension, betrayal and explosive set-pieces.\n\nनई एजेंट्स को ट्रेनिंग दे रहे इथन हंट को तब वापस मैदान में उतरना पड़ता है जब एक बेरहम हथियार तस्कर उसके प्रियजनों को निशाना बनाता है। यह उसका सबसे निजी मिशन है, जो सस्पेंस, धोखे और ज़बरदस्त एक्शन से भरा हुआ है।',
 'A ruthless arms dealer targets Ethan''s loved ones. | एक बेरहम हथियार तस्कर इथन के अपनों को निशाना बनाता है।',
 'J.J. Abrams','Tom Cruise, Paula Wagner','Alex Kurtzman, Roberto Orci, J.J. Abrams',0,0,0),

('Mission: Impossible - Ghost Protocol','mission-impossible-ghost-protocol',2011,132,'English, Hindi','United States',7.4,'published',
 'When the IMF is shut down and blamed for a terrorist attack, Ethan Hunt and his team go off the grid to clear their name and stop a nuclear catastrophe. Famous for the breathtaking Burj Khalifa climb, it is pure edge-of-your-seat spectacle.\n\nजब IMF को बंद कर एक आतंकी हमले का दोष उस पर डाल दिया जाता है, तो इथन हंट और उसकी टीम अपनी बेगुनाही साबित करने और परमाणु तबाही रोकने के लिए बिना किसी सहारे के मिशन पर निकल पड़ते हैं। बुर्ज खलीफा वाले रोमांचक सीन के लिए मशहूर यह फिल्म लाजवाब है।',
 'The IMF is disavowed; Ethan must stop a nuclear plot. | IMF को दोषी ठहराया जाता है; इथन को परमाणु साज़िश रोकनी है।',
 'Brad Bird','Tom Cruise, J.J. Abrams','Josh Appelbaum, André Nemec',0,1,1),

('Mission: Impossible - Rogue Nation','mission-impossible-rogue-nation',2015,131,'English, Hindi','United States',7.4,'published',
 'Ethan Hunt takes on the Syndicate — a shadow network of rogue agents as skilled as the IMF itself. With a mysterious ally whose loyalties are unclear, he faces his most cunning enemy yet in a thrilling cat-and-mouse game.\n\nइथन हंट का सामना ''सिंडिकेट'' से होता है — एक गुप्त संगठन जिसके एजेंट IMF जितने ही माहिर हैं। एक रहस्यमयी साथी, जिसकी वफ़ादारी पर भरोसा नहीं किया जा सकता, के साथ वह अब तक के सबसे चालाक दुश्मन का सामना करता है। ज़बरदस्त सस्पेंस से भरी फिल्म।',
 'Ethan battles the Syndicate, a deadly rogue network. | इथन का सामना खतरनाक संगठन ''सिंडिकेट'' से होता है।',
 'Christopher McQuarrie','Tom Cruise, J.J. Abrams','Christopher McQuarrie',0,0,1),

('Mission: Impossible - Fallout','mission-impossible-fallout',2018,147,'English, Hindi','United States',7.7,'published',
 'When a mission goes wrong and plutonium falls into the wrong hands, Ethan Hunt must race across the globe to prevent a global catastrophe — hunted by allies and enemies alike. Widely hailed as one of the greatest action films ever made.\n\nजब एक मिशन बिगड़ जाता है और प्लूटोनियम गलत हाथों में पहुँच जाता है, तो इथन हंट को दुनिया भर में दौड़ लगाकर एक बड़ी तबाही रोकनी है — जहाँ दोस्त और दुश्मन दोनों उसके पीछे हैं। इसे अब तक की सबसे बेहतरीन एक्शन फिल्मों में गिना जाता है।',
 'Ethan races to recover stolen plutonium worldwide. | इथन चुराए गए प्लूटोनियम को वापस पाने के लिए दौड़ता है।',
 'Christopher McQuarrie','Tom Cruise, Jake Myers','Christopher McQuarrie',1,1,1),

('Mission: Impossible - Dead Reckoning Part One','mission-impossible-dead-reckoning-part-one',2023,163,'English, Hindi','United States',7.7,'published',
 'Ethan Hunt and his team chase a terrifying new weapon — a rogue artificial intelligence that threatens all of humanity. As powerful forces close in, Ethan learns that nothing matters more than the mission. Spectacular stunts and relentless tension.\n\nइथन हंट और उसकी टीम एक खतरनाक नए हथियार का पीछा करते हैं — एक बेकाबू आर्टिफिशियल इंटेलिजेंस जो पूरी मानवता के लिए खतरा है। जैसे-जैसे ताकतवर ताकतें करीब आती हैं, इथन समझता है कि मिशन से बढ़कर कुछ नहीं। लाजवाब स्टंट और लगातार बना रहने वाला सस्पेंस।',
 'Ethan hunts a rogue AI threatening humanity. | इथन मानवता के लिए खतरा बने एक AI का पीछा करता है।',
 'Christopher McQuarrie','Tom Cruise, Jake Myers','Christopher McQuarrie, Erik Jendresen',1,1,1),

('Mission: Impossible - The Final Reckoning','mission-impossible-the-final-reckoning',2025,169,'English, Hindi','United States',7.5,'published',
 'Ethan Hunt faces his deadliest mission yet in an explosive, globe-spanning finale, confronting the consequences of every choice he has ever made. A high-stakes, emotional conclusion to one of cinema''s greatest action sagas.\n\nइथन हंट अपने अब तक के सबसे खतरनाक मिशन का सामना करता है, जहाँ उसे अपने हर फैसले के अंजाम से जूझना है। दुनिया भर में फैले इस रोमांचक और भावुक अंत के साथ सिनेमा की सबसे बेहतरीन एक्शन गाथाओं में से एक अपने चरम पर पहुँचती है।',
 'Ethan Hunt faces his deadliest, final mission. | इथन हंट अपने सबसे खतरनाक और आखिरी मिशन का सामना करता है।',
 'Christopher McQuarrie','Tom Cruise, Jake Myers','Christopher McQuarrie, Erik Jendresen',1,1,1);

-- Placeholder downloads / embeds / trailer (replace later in /admin).
UPDATE movies SET
  youtube_id = 'dQw4w9WgXcQ',
  download_480  = CONCAT('https://example.com/download/', slug, '-480p.mkv'),
  download_720  = CONCAT('https://example.com/download/', slug, '-720p.mkv'),
  download_1080 = CONCAT('https://example.com/download/', slug, '-1080p.mkv'),
  size_480 = '500 MB', size_720 = '1.2 GB', size_1080 = '2.8 GB',
  embed_480  = 'https://www.youtube.com/embed/dQw4w9WgXcQ',
  embed_720  = 'https://www.youtube.com/embed/dQw4w9WgXcQ',
  embed_1080 = 'https://www.youtube.com/embed/dQw4w9WgXcQ'
WHERE slug LIKE 'mission-impossible%';

-- Categories: Hollywood, Action, Thriller
INSERT IGNORE INTO movie_categories (movie_id, category_id)
SELECT m.id, c.id FROM movies m JOIN categories c ON c.slug IN ('hollywood','action','thriller')
WHERE m.slug LIKE 'mission-impossible%';

-- Genres: Action, Adventure, Thriller
INSERT IGNORE INTO movie_genres (movie_id, genre_id)
SELECT m.id, g.id FROM movies m JOIN genres g ON g.slug IN ('action','adventure','thriller')
WHERE m.slug LIKE 'mission-impossible%';

-- Cast (top billed)
INSERT INTO movie_cast (movie_id, actor_name, character_name, sort_order) VALUES
((SELECT id FROM movies WHERE slug='mission-impossible'),'Tom Cruise','Ethan Hunt',0),
((SELECT id FROM movies WHERE slug='mission-impossible'),'Jon Voight','Jim Phelps',1),
((SELECT id FROM movies WHERE slug='mission-impossible'),'Emmanuelle Béart','Claire Phelps',2),

((SELECT id FROM movies WHERE slug='mission-impossible-2'),'Tom Cruise','Ethan Hunt',0),
((SELECT id FROM movies WHERE slug='mission-impossible-2'),'Dougray Scott','Sean Ambrose',1),
((SELECT id FROM movies WHERE slug='mission-impossible-2'),'Thandiwe Newton','Nyah Nordoff-Hall',2),

((SELECT id FROM movies WHERE slug='mission-impossible-iii'),'Tom Cruise','Ethan Hunt',0),
((SELECT id FROM movies WHERE slug='mission-impossible-iii'),'Philip Seymour Hoffman','Owen Davian',1),
((SELECT id FROM movies WHERE slug='mission-impossible-iii'),'Michelle Monaghan','Julia Meade',2),

((SELECT id FROM movies WHERE slug='mission-impossible-ghost-protocol'),'Tom Cruise','Ethan Hunt',0),
((SELECT id FROM movies WHERE slug='mission-impossible-ghost-protocol'),'Jeremy Renner','William Brandt',1),
((SELECT id FROM movies WHERE slug='mission-impossible-ghost-protocol'),'Simon Pegg','Benji Dunn',2),

((SELECT id FROM movies WHERE slug='mission-impossible-rogue-nation'),'Tom Cruise','Ethan Hunt',0),
((SELECT id FROM movies WHERE slug='mission-impossible-rogue-nation'),'Rebecca Ferguson','Ilsa Faust',1),
((SELECT id FROM movies WHERE slug='mission-impossible-rogue-nation'),'Simon Pegg','Benji Dunn',2),

((SELECT id FROM movies WHERE slug='mission-impossible-fallout'),'Tom Cruise','Ethan Hunt',0),
((SELECT id FROM movies WHERE slug='mission-impossible-fallout'),'Henry Cavill','August Walker',1),
((SELECT id FROM movies WHERE slug='mission-impossible-fallout'),'Rebecca Ferguson','Ilsa Faust',2),

((SELECT id FROM movies WHERE slug='mission-impossible-dead-reckoning-part-one'),'Tom Cruise','Ethan Hunt',0),
((SELECT id FROM movies WHERE slug='mission-impossible-dead-reckoning-part-one'),'Hayley Atwell','Grace',1),
((SELECT id FROM movies WHERE slug='mission-impossible-dead-reckoning-part-one'),'Esai Morales','Gabriel',2),

((SELECT id FROM movies WHERE slug='mission-impossible-the-final-reckoning'),'Tom Cruise','Ethan Hunt',0),
((SELECT id FROM movies WHERE slug='mission-impossible-the-final-reckoning'),'Hayley Atwell','Grace',1),
((SELECT id FROM movies WHERE slug='mission-impossible-the-final-reckoning'),'Ving Rhames','Luther Stickell',2);
