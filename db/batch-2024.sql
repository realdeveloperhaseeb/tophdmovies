-- ============================================================
--  TopHDMovies batch: John Wick (4), Justice League (2),
--  Lord of the Rings (3), + series: Money Heist, Breaking Bad,
--  Stranger Things, All of Us Are Dead, Off Campus S1/S2.
--  Bilingual overviews. Apply to LOCAL DB, then sync-tmdb.
-- ============================================================
SET NAMES utf8mb4;

INSERT INTO movies
  (title, slug, year, runtime, language, country, rating, status,
   overview, short_description, director, producer, writer,
   is_featured, is_trending, is_top_rated)
VALUES
-- ---------- John Wick ----------
('John Wick','john-wick',2014,101,'Hindi, English','United States',7.4,'published',
 'A grieving retired hitman is pulled back into a deadly underworld when a brutal mistake by the wrong people gives him a reason to pick up his guns again. Sleek, stylish and relentlessly kinetic, the film that redefined modern action cinema.\n\nएक रिटायर हो चुका दुखी कॉन्ट्रैक्ट किलर तब फिर से बंदूकें उठाने पर मजबूर हो जाता है, जब गलत लोगों की एक बेरहम गलती उसे बदले की वजह दे देती है। स्टाइलिश और बेहद रफ़्तार भरी यह फिल्म आधुनिक एक्शन सिनेमा की परिभाषा बदल देती है।',
 'A retired hitman returns for revenge. | एक रिटायर किलर बदले के लिए लौटता है।',
 'Chad Stahelski','Basil Iwanyk','Derek Kolstad',0,0,1),

('John Wick: Chapter 2','john-wick-chapter-2',2017,122,'Hindi, English','United States',7.4,'published',
 'Bound by a blood oath, John Wick is forced to travel to Rome for one more impossible job — only to find the entire assassin underworld turning against him. Bigger, bolder and packed with breathtaking gunfights.\n\nएक खूनी कसम से बंधा जॉन विक एक और नामुमकिन काम के लिए रोम जाने पर मजबूर हो जाता है — और पाता है कि पूरी हत्यारों की दुनिया उसके खिलाफ हो गई है। और बड़ी, और दमदार, ज़बरदस्त गनफाइट्स से भरी।',
 'A blood oath forces John back into the game. | एक कसम जॉन को फिर मैदान में खींच लाती है।',
 'Chad Stahelski','Basil Iwanyk','Derek Kolstad',0,0,1),

('John Wick: Chapter 3 - Parabellum','john-wick-chapter-3-parabellum',2019,130,'Hindi, English','United States',7.4,'published',
 'With a massive bounty on his head and the entire assassin network hunting him, John Wick fights for survival across the globe with no rules and no mercy. A breathless, beautifully choreographed thrill ride.\n\nअपने सिर पर भारी इनाम और पूरे हत्यारों के नेटवर्क के पीछे पड़ने के साथ, जॉन विक बिना किसी नियम और रहम के दुनिया भर में अपनी जान बचाने के लिए लड़ता है। दम साध देने वाली, खूबसूरती से रची एक्शन सवारी।',
 'Hunted worldwide, John fights to survive. | दुनिया भर में पीछा किए जाते जॉन की जंग।',
 'Chad Stahelski','Basil Iwanyk','Derek Kolstad',0,1,1),

('John Wick: Chapter 4','john-wick-chapter-4',2023,169,'Hindi, English','United States',7.7,'published',
 'John Wick uncovers a path to defeating the High Table, but first he must face a powerful new enemy and old friends turned foes in a final, globe-spanning battle for his freedom. The saga''s biggest and boldest chapter.\n\nजॉन विक हाई टेबल को हराने का रास्ता ढूँढ निकालता है, पर पहले उसे एक ताकतवर नए दुश्मन और दोस्त से दुश्मन बन चुके लोगों का सामना दुनिया भर में फैली एक आखिरी जंग में करना है। गाथा का सबसे बड़ा अध्याय।',
 'John fights one last global battle for freedom. | जॉन आज़ादी के लिए आखिरी जंग लड़ता है।',
 'Chad Stahelski','Basil Iwanyk','Shay Hatten, Michael Finch',1,1,1),

-- ---------- Justice League ----------
('Justice League','justice-league',2017,120,'Hindi, English','United States',6.1,'published',
 'Inspired by a selfless act, Bruce Wayne recruits a team of metahumans to stand against a catastrophic threat to the world. Batman, Wonder Woman and new allies unite for the first time in a battle to save humanity.\n\nएक निःस्वार्थ बलिदान से प्रेरित होकर ब्रूस वेन दुनिया पर मंडराते एक भयानक खतरे के खिलाफ मेटाह्यूमन्स की एक टीम बनाता है। बैटमैन, वंडर वुमन और नए साथी मानवता को बचाने की जंग में पहली बार एकजुट होते हैं।',
 'Batman unites heroes to save the world. | बैटमैन दुनिया बचाने को नायकों को एकजुट करता है।',
 'Zack Snyder','Charles Roven, Deborah Snyder','Chris Terrio, Joss Whedon',0,0,0),

('Zack Snyder''s Justice League','zack-snyders-justice-league',2021,242,'Hindi, English','United States',8.0,'published',
 'The director''s sweeping four-hour vision of the League''s formation — darker, deeper and more epic, as the heroes race to stop Steppenwolf and Darkseid from unleashing destruction on Earth. The definitive cut of the story.\n\nनिर्देशक की चार घंटे लंबी भव्य दृष्टि, जो लीग के गठन को और गहरा, और महाकाव्यात्मक बनाती है, जहाँ नायक स्टेपेनवुल्फ़ और डार्कसीड को धरती पर तबाही मचाने से रोकने की दौड़ में हैं। कहानी का असली रूप।',
 'The epic four-hour director''s cut of the League. | लीग का भव्य चार घंटे का डायरेक्टर कट।',
 'Zack Snyder','Charles Roven, Deborah Snyder','Chris Terrio',1,1,1),

-- ---------- The Lord of the Rings ----------
('The Lord of the Rings: The Fellowship of the Ring','the-lord-of-the-rings-the-fellowship-of-the-ring',2001,178,'Hindi, English','New Zealand',8.9,'published',
 'A young hobbit inherits a ring of terrible power and sets out with a fellowship of unlikely heroes to destroy it before it falls into the hands of a dark lord. An epic, breathtaking journey that begins one of cinema''s greatest sagas.\n\nएक नौजवान हॉबिट को एक भयानक शक्ति वाली अंगूठी विरासत में मिलती है, और वह अनोखे नायकों की एक टोली के साथ उसे नष्ट करने निकल पड़ता है, इससे पहले कि वह किसी अंधकार के स्वामी के हाथ लगे। सिनेमा की महानतम गाथाओं की शुरुआत।',
 'A hobbit sets out to destroy a ring of dark power. | एक हॉबिट एक शक्तिशाली अंगूठी नष्ट करने निकलता है।',
 'Peter Jackson','Peter Jackson, Barrie M. Osborne','Fran Walsh, Philippa Boyens, Peter Jackson',1,0,1),

('The Lord of the Rings: The Two Towers','the-lord-of-the-rings-the-two-towers',2002,179,'Hindi, English','New Zealand',8.8,'published',
 'As the fellowship splinters, the free peoples of Middle-earth prepare for war while two hobbits press on toward the dark land with a treacherous guide. The stakes rise in this stunning, battle-forged middle chapter.\n\nजैसे ही टोली बिखरती है, मिडिल-अर्थ के स्वतंत्र लोग युद्ध की तैयारी करते हैं, जबकि दो हॉबिट एक धोखेबाज़ रहनुमा के साथ अंधकार की धरती की ओर बढ़ते हैं। इस शानदार मध्य अध्याय में दांव और ऊँचा हो जाता है।',
 'War looms as the fellowship splinters. | टोली बिखरने पर युद्ध के बादल मँडराते हैं।',
 'Peter Jackson','Peter Jackson, Barrie M. Osborne','Fran Walsh, Philippa Boyens, Peter Jackson',0,0,1),

('The Lord of the Rings: The Return of the King','the-lord-of-the-rings-the-return-of-the-king',2003,201,'Hindi, English','New Zealand',9.0,'published',
 'As the final battle for Middle-earth begins, a king claims his throne and two weary hobbits make a last desperate push to destroy the ring at the heart of the enemy''s realm. A triumphant, emotional epic for the ages.\n\nजैसे ही मिडिल-अर्थ की आखिरी जंग शुरू होती है, एक राजा अपना सिंहासन पाता है और दो थके-हारे हॉबिट दुश्मन के राज्य के बीचों-बीच अंगूठी को नष्ट करने का आखिरी बेताब प्रयास करते हैं। एक भावुक और विजयी महाकाव्य।',
 'The final battle for Middle-earth begins. | मिडिल-अर्थ की आखिरी जंग शुरू होती है।',
 'Peter Jackson','Peter Jackson, Barrie M. Osborne','Fran Walsh, Philippa Boyens, Peter Jackson',1,0,1),

-- ---------- Series ----------
('Money Heist','money-heist',2017,70,'Hindi, Spanish, English','Spain',8.2,'published',
 'A criminal mastermind known as the Professor recruits eight strangers to pull off the biggest heist in history — storming the Royal Mint of Spain. As the plan unravels under pressure, loyalty and survival collide. A gripping, addictive thriller.\n\n''द प्रोफेसर'' नाम का एक शातिर दिमाग आठ अजनबियों को इतिहास की सबसे बड़ी डकैती के लिए चुनता है — स्पेन की रॉयल मिंट पर कब्ज़ा। जैसे-जैसे दबाव में योजना उलझती है, वफ़ादारी और बचाव टकराते हैं। एक रोमांचक, लती लगा देने वाली थ्रिलर।',
 'A mastermind plans the biggest heist in history. | एक शातिर दिमाग इतिहास की सबसे बड़ी डकैती रचता है।',
 'Álex Pina','Vancouver Media','Álex Pina',1,1,1),

('Breaking Bad','breaking-bad',2008,49,'Hindi, English','United States',9.5,'published',
 'A mild-mannered high-school chemistry teacher diagnosed with cancer turns to cooking crystal meth to secure his family''s future — and slowly transforms into a ruthless kingpin. One of the greatest, most acclaimed dramas ever made.\n\nकैंसर से जूझ रहा एक सीधा-सादा हाई-स्कूल केमिस्ट्री टीचर अपने परिवार का भविष्य सुरक्षित करने के लिए ड्रग्स बनाने लगता है — और धीरे-धीरे एक बेरहम सरगना में बदल जाता है। अब तक की सबसे बेहतरीन और सराही गई ड्रामा सीरीज़ में से एक।',
 'A chemistry teacher becomes a meth kingpin. | एक केमिस्ट्री टीचर ड्रग सरगना बन जाता है।',
 'Vince Gilligan','Sony Pictures Television','Vince Gilligan',1,1,1),

('Stranger Things','stranger-things',2016,51,'Hindi, English','United States',8.7,'published',
 'When a young boy vanishes in a small town, his friends, family and the local police uncover a terrifying mystery involving secret experiments, supernatural forces and a strange girl with powers. A nostalgic, thrilling sci-fi sensation.\n\nजब एक छोटे शहर में एक बच्चा गायब हो जाता है, तो उसके दोस्त, परिवार और पुलिस एक भयानक रहस्य का पर्दाफ़ाश करते हैं — गुप्त प्रयोग, अलौकिक ताकतें और शक्तियों वाली एक अजीब लड़की। पुरानी यादों से भरी रोमांचक साइ-फाई सनसनी।',
 'Friends uncover a supernatural mystery. | दोस्त एक अलौकिक रहस्य का पर्दाफ़ाश करते हैं।',
 'The Duffer Brothers','21 Laps Entertainment','The Duffer Brothers',1,1,1),

('All of Us Are Dead','all-of-us-are-dead',2022,60,'Hindi, Korean, English','South Korea',7.4,'published',
 'A sudden zombie outbreak traps a group of high-school students inside their school, cut off from rescue and surrounded by the infected. They must fight, hide and hold on to their humanity to survive. A tense, emotional Korean thriller.\n\nएक अचानक ज़ॉम्बी प्रकोप हाई-स्कूल के छात्रों के एक समूह को उनके स्कूल के अंदर फँसा देता है, जहाँ न बचाव है और चारों ओर संक्रमित लोग हैं। ज़िंदा रहने के लिए उन्हें लड़ना, छिपना और अपनी इंसानियत बचाए रखनी है। एक तनावपूर्ण कोरियन थ्रिलर।',
 'Students trapped in a school during a zombie outbreak. | ज़ॉम्बी प्रकोप में स्कूल में फँसे छात्र।',
 'Lee Jae-kyoo, Kim Nam-su','Film Monster','Chun Sung-il',0,1,0),

('Off Campus (Season 1)','off-campus-season-1',2022,30,'Hindi','India',7.0,'published',
 'A coming-of-age campus drama that follows a group of college students as they navigate friendship, ambition, heartbreak and the messy, memorable chaos of student life. Warm, relatable and full of heart.\n\nकॉलेज के दिनों की एक कहानी, जो छात्रों के एक समूह का पीछा करती है, जो दोस्ती, महत्वाकांक्षा, दिल टूटने और छात्र जीवन की यादगार उथल-पुथल से गुज़रते हैं। दिल को छू लेने वाली और अपनी-सी लगने वाली सीरीज़।',
 'College students navigate friendship and ambition. | कॉलेज के छात्र दोस्ती और सपनों से गुज़रते हैं।',
 NULL,NULL,NULL,0,0,0),

('Off Campus (Season 2)','off-campus-season-2',2023,30,'Hindi','India',7.0,'published',
 'The campus story continues as friendships are tested, new dreams take shape and the students face bigger choices about love, careers and growing up. A heartfelt next chapter of college life.\n\nकॉलेज की कहानी आगे बढ़ती है, जहाँ दोस्तियाँ परखी जाती हैं, नए सपने आकार लेते हैं और छात्र प्यार, करियर और बड़े होने को लेकर बड़े फैसलों का सामना करते हैं। कॉलेज जीवन का एक दिल छू लेने वाला अगला अध्याय।',
 'Friendships are tested as college life continues. | कॉलेज जीवन में दोस्तियाँ परखी जाती हैं।',
 NULL,NULL,NULL,0,0,0);

-- ---------- downloads / embeds / trailer ----------
UPDATE movies SET
  youtube_id='dQw4w9WgXcQ',
  download_480=CONCAT('https://example.com/download/', slug, '-480p.mkv'),
  download_720=CONCAT('https://example.com/download/', slug, '-720p.mkv'),
  download_1080=CONCAT('https://example.com/download/', slug, '-1080p.mkv'),
  size_480='450 MB', size_720='1.1 GB', size_1080='2.6 GB',
  embed_480='https://www.youtube.com/embed/dQw4w9WgXcQ',
  embed_720='https://www.youtube.com/embed/dQw4w9WgXcQ',
  embed_1080='https://www.youtube.com/embed/dQw4w9WgXcQ'
WHERE slug IN ('john-wick','john-wick-chapter-2','john-wick-chapter-3-parabellum','john-wick-chapter-4',
  'justice-league','zack-snyders-justice-league','the-lord-of-the-rings-the-fellowship-of-the-ring',
  'the-lord-of-the-rings-the-two-towers','the-lord-of-the-rings-the-return-of-the-king',
  'money-heist','breaking-bad','stranger-things','all-of-us-are-dead','off-campus-season-1','off-campus-season-2');

-- ---------- categories ----------
INSERT IGNORE INTO movie_categories (movie_id, category_id)
SELECT m.id, c.id FROM movies m JOIN categories c ON c.slug IN ('hollywood','action','thriller','crime')
WHERE m.slug IN ('john-wick','john-wick-chapter-2','john-wick-chapter-3-parabellum','john-wick-chapter-4');

INSERT IGNORE INTO movie_categories (movie_id, category_id)
SELECT m.id, c.id FROM movies m JOIN categories c ON c.slug IN ('hollywood','action','sci-fi')
WHERE m.slug IN ('justice-league','zack-snyders-justice-league');

INSERT IGNORE INTO movie_categories (movie_id, category_id)
SELECT m.id, c.id FROM movies m JOIN categories c ON c.slug IN ('hollywood','action','drama')
WHERE m.slug IN ('the-lord-of-the-rings-the-fellowship-of-the-ring','the-lord-of-the-rings-the-two-towers','the-lord-of-the-rings-the-return-of-the-king');

INSERT IGNORE INTO movie_categories (movie_id, category_id)
SELECT m.id, c.id FROM movies m JOIN categories c ON c.slug IN ('web-series','crime','thriller','drama')
WHERE m.slug='money-heist';
INSERT IGNORE INTO movie_categories (movie_id, category_id)
SELECT m.id, c.id FROM movies m JOIN categories c ON c.slug IN ('tv-shows','crime','drama','thriller')
WHERE m.slug='breaking-bad';
INSERT IGNORE INTO movie_categories (movie_id, category_id)
SELECT m.id, c.id FROM movies m JOIN categories c ON c.slug IN ('web-series','sci-fi','horror','drama')
WHERE m.slug='stranger-things';
INSERT IGNORE INTO movie_categories (movie_id, category_id)
SELECT m.id, c.id FROM movies m JOIN categories c ON c.slug IN ('web-series','horror','thriller','drama')
WHERE m.slug='all-of-us-are-dead';
INSERT IGNORE INTO movie_categories (movie_id, category_id)
SELECT m.id, c.id FROM movies m JOIN categories c ON c.slug IN ('web-series','drama','romance')
WHERE m.slug IN ('off-campus-season-1','off-campus-season-2');

-- ---------- genres ----------
INSERT IGNORE INTO movie_genres (movie_id, genre_id)
SELECT m.id, g.id FROM movies m JOIN genres g ON g.slug IN ('action','thriller','crime')
WHERE m.slug IN ('john-wick','john-wick-chapter-2','john-wick-chapter-3-parabellum','john-wick-chapter-4');
INSERT IGNORE INTO movie_genres (movie_id, genre_id)
SELECT m.id, g.id FROM movies m JOIN genres g ON g.slug IN ('action','adventure','sci-fi','fantasy')
WHERE m.slug IN ('justice-league','zack-snyders-justice-league');
INSERT IGNORE INTO movie_genres (movie_id, genre_id)
SELECT m.id, g.id FROM movies m JOIN genres g ON g.slug IN ('action','adventure','fantasy','drama')
WHERE m.slug IN ('the-lord-of-the-rings-the-fellowship-of-the-ring','the-lord-of-the-rings-the-two-towers','the-lord-of-the-rings-the-return-of-the-king');
INSERT IGNORE INTO movie_genres (movie_id, genre_id)
SELECT m.id, g.id FROM movies m JOIN genres g ON g.slug IN ('crime','thriller','drama')
WHERE m.slug IN ('money-heist','breaking-bad');
INSERT IGNORE INTO movie_genres (movie_id, genre_id)
SELECT m.id, g.id FROM movies m JOIN genres g ON g.slug IN ('sci-fi','horror','drama','mystery')
WHERE m.slug='stranger-things';
INSERT IGNORE INTO movie_genres (movie_id, genre_id)
SELECT m.id, g.id FROM movies m JOIN genres g ON g.slug IN ('horror','thriller','drama')
WHERE m.slug='all-of-us-are-dead';
INSERT IGNORE INTO movie_genres (movie_id, genre_id)
SELECT m.id, g.id FROM movies m JOIN genres g ON g.slug IN ('drama','romance','comedy')
WHERE m.slug IN ('off-campus-season-1','off-campus-season-2');

-- ---------- cast ----------
INSERT INTO movie_cast (movie_id, actor_name, character_name, sort_order) VALUES
((SELECT id FROM movies WHERE slug='john-wick'),'Keanu Reeves','John Wick',0),
((SELECT id FROM movies WHERE slug='john-wick'),'Michael Nyqvist','Viggo Tarasov',1),
((SELECT id FROM movies WHERE slug='john-wick'),'Willem Dafoe','Marcus',2),

((SELECT id FROM movies WHERE slug='john-wick-chapter-2'),'Keanu Reeves','John Wick',0),
((SELECT id FROM movies WHERE slug='john-wick-chapter-2'),'Common','Cassian',1),
((SELECT id FROM movies WHERE slug='john-wick-chapter-2'),'Riccardo Scamarcio','Santino D''Antonio',2),

((SELECT id FROM movies WHERE slug='john-wick-chapter-3-parabellum'),'Keanu Reeves','John Wick',0),
((SELECT id FROM movies WHERE slug='john-wick-chapter-3-parabellum'),'Halle Berry','Sofia',1),
((SELECT id FROM movies WHERE slug='john-wick-chapter-3-parabellum'),'Ian McShane','Winston',2),

((SELECT id FROM movies WHERE slug='john-wick-chapter-4'),'Keanu Reeves','John Wick',0),
((SELECT id FROM movies WHERE slug='john-wick-chapter-4'),'Donnie Yen','Caine',1),
((SELECT id FROM movies WHERE slug='john-wick-chapter-4'),'Bill Skarsgård','Marquis',2),

((SELECT id FROM movies WHERE slug='justice-league'),'Ben Affleck','Bruce Wayne / Batman',0),
((SELECT id FROM movies WHERE slug='justice-league'),'Gal Gadot','Diana Prince / Wonder Woman',1),
((SELECT id FROM movies WHERE slug='justice-league'),'Henry Cavill','Clark Kent / Superman',2),

((SELECT id FROM movies WHERE slug='zack-snyders-justice-league'),'Ben Affleck','Bruce Wayne / Batman',0),
((SELECT id FROM movies WHERE slug='zack-snyders-justice-league'),'Gal Gadot','Diana Prince / Wonder Woman',1),
((SELECT id FROM movies WHERE slug='zack-snyders-justice-league'),'Henry Cavill','Clark Kent / Superman',2),

((SELECT id FROM movies WHERE slug='the-lord-of-the-rings-the-fellowship-of-the-ring'),'Elijah Wood','Frodo Baggins',0),
((SELECT id FROM movies WHERE slug='the-lord-of-the-rings-the-fellowship-of-the-ring'),'Ian McKellen','Gandalf',1),
((SELECT id FROM movies WHERE slug='the-lord-of-the-rings-the-fellowship-of-the-ring'),'Viggo Mortensen','Aragorn',2),

((SELECT id FROM movies WHERE slug='the-lord-of-the-rings-the-two-towers'),'Elijah Wood','Frodo Baggins',0),
((SELECT id FROM movies WHERE slug='the-lord-of-the-rings-the-two-towers'),'Ian McKellen','Gandalf',1),
((SELECT id FROM movies WHERE slug='the-lord-of-the-rings-the-two-towers'),'Viggo Mortensen','Aragorn',2),

((SELECT id FROM movies WHERE slug='the-lord-of-the-rings-the-return-of-the-king'),'Elijah Wood','Frodo Baggins',0),
((SELECT id FROM movies WHERE slug='the-lord-of-the-rings-the-return-of-the-king'),'Ian McKellen','Gandalf',1),
((SELECT id FROM movies WHERE slug='the-lord-of-the-rings-the-return-of-the-king'),'Viggo Mortensen','Aragorn',2),

((SELECT id FROM movies WHERE slug='money-heist'),'Úrsula Corberó','Tokyo',0),
((SELECT id FROM movies WHERE slug='money-heist'),'Álvaro Morte','The Professor',1),
((SELECT id FROM movies WHERE slug='money-heist'),'Pedro Alonso','Berlin',2),

((SELECT id FROM movies WHERE slug='breaking-bad'),'Bryan Cranston','Walter White',0),
((SELECT id FROM movies WHERE slug='breaking-bad'),'Aaron Paul','Jesse Pinkman',1),
((SELECT id FROM movies WHERE slug='breaking-bad'),'Anna Gunn','Skyler White',2),

((SELECT id FROM movies WHERE slug='stranger-things'),'Millie Bobby Brown','Eleven',0),
((SELECT id FROM movies WHERE slug='stranger-things'),'Finn Wolfhard','Mike Wheeler',1),
((SELECT id FROM movies WHERE slug='stranger-things'),'David Harbour','Jim Hopper',2),

((SELECT id FROM movies WHERE slug='all-of-us-are-dead'),'Park Ji-hu','Nam On-jo',0),
((SELECT id FROM movies WHERE slug='all-of-us-are-dead'),'Yoon Chan-young','Lee Cheong-san',1),
((SELECT id FROM movies WHERE slug='all-of-us-are-dead'),'Cho Yi-hyun','Choi Nam-ra',2);
