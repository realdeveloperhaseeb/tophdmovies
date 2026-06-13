-- ============================================================
--  TopHDMovies — Marvel Cinematic Universe (2008 → 2025)
--  Import AFTER schema.sql (and after seed.sql, if used).
--  Import ONCE (cast rows are not de-duplicated on re-import).
--
--  • All overviews are original, SEO-focused copy.
--  • Posters/backdrops are auto-generated placeholder images
--    (replace with real artwork via the admin upload tool).
--  • youtube_id is a shared placeholder — replace per movie.
-- ============================================================

SET NAMES utf8mb4;

-- ---------- Movies ----------
INSERT INTO movies
  (title, slug, year, runtime, language, country, rating, status,
   overview, short_description, director, producer, writer,
   is_featured, is_trending, is_top_rated)
VALUES
('Iron Man','iron-man',2008,126,'English','United States',7.9,'published',
 'Billionaire inventor Tony Stark is forced to confront the deadly legacy of his weapons empire after he is captured and builds a powered suit of armour to escape. Returning home a changed man, he perfects the technology into the iconic Iron Man suit and sets out to protect the world. A sharp, charismatic origin story that launched an entire cinematic universe.',
 'Tony Stark builds a high-tech armoured suit to escape captivity and becomes Iron Man in the origin story that launched the MCU.',
 'Jon Favreau','Kevin Feige','Mark Fergus, Hawk Ostby',0,0,1),

('The Incredible Hulk','the-incredible-hulk',2008,112,'English','United States',6.6,'published',
 'On the run from the military and desperate for a cure, scientist Bruce Banner fights to control the monstrous force raging inside him. When a new and far more dangerous creature emerges, Banner must embrace the very power he fears. A fast, action-driven chapter that explores the cost of living with an uncontrollable alter ego.',
 'Fugitive scientist Bruce Banner searches for a cure while battling a deadly new creature in this action-packed Hulk adventure.',
 'Louis Leterrier','Kevin Feige','Zak Penn',0,0,0),

('Iron Man 2','iron-man-2',2010,124,'English','United States',6.9,'published',
 'With his identity as Iron Man now public, Tony Stark faces pressure from the government, rivals and a vengeful enemy with a deadly grudge against his family. As the technology keeping him alive slowly poisons him, Stark must rebuild himself and his legacy. A bigger, flashier sequel that widens the world of armoured heroes.',
 'Tony Stark battles a vengeful enemy and his own failing health as the world demands control of his Iron Man technology.',
 'Jon Favreau','Kevin Feige','Justin Theroux',0,0,0),

('Thor','thor',2011,115,'English','United States',7.0,'published',
 'The arrogant heir to an alien throne is cast out and stripped of his power, banished to Earth to learn humility among mortals. As his scheming brother seizes control back home, Thor must prove himself worthy of his hammer and his crown. A grand, mythic adventure that blends cosmic spectacle with heartfelt growth.',
 'Banished to Earth and stripped of his power, the mighty Thor must prove himself worthy as his brother seizes the throne.',
 'Kenneth Branagh','Kevin Feige','Ashley Miller, Zack Stentz',0,0,0),

('Captain America: The First Avenger','captain-america-the-first-avenger',2011,124,'English','United States',6.9,'published',
 'A frail but courageous young man volunteers for a secret experiment that transforms him into a super-soldier during the Second World War. As Captain America, he leads the fight against a fanatical enemy wielding otherworldly power. A rousing, old-fashioned heroic adventure about the heart behind the shield.',
 'A brave young man becomes the super-soldier Captain America and battles a fanatical foe during the Second World War.',
 'Joe Johnston','Kevin Feige','Christopher Markus, Stephen McFeely',0,0,0),

('The Avengers','the-avengers',2012,143,'English','United States',8.0,'published',
 'When a powerful threat endangers the entire planet, a fractured team of extraordinary heroes is brought together for the first time. Learning to fight as one rather than as rivals, they make their stand against an invading army. A landmark blockbuster that proved a shared universe of heroes could deliver pure, crowd-pleasing spectacle.',
 'Earth''s mightiest heroes unite for the first time to stop an alien invasion in this landmark superhero team-up.',
 'Joss Whedon','Kevin Feige','Joss Whedon',1,0,1),

('Iron Man 3','iron-man-3',2013,130,'English','United States',7.1,'published',
 'Haunted by past trauma and stripped of nearly everything he relies on, Tony Stark faces a mysterious terrorist and a deadly new technology. Forced to survive on his wits alone, he rediscovers what truly makes him a hero. A darker, more personal chapter packed with twists and inventive action.',
 'A haunted Tony Stark faces a mysterious terrorist and must survive on his wits alone in this twist-filled chapter.',
 'Shane Black','Kevin Feige','Drew Pearce, Shane Black',0,0,0),

('Thor: The Dark World','thor-the-dark-world',2013,112,'English','United States',6.8,'published',
 'An ancient enemy returns to plunge the universe back into darkness, forcing Thor into an uneasy alliance with his treacherous brother. To save all the realms, the thunder god must risk everything he loves. A cosmic adventure that raises the stakes across the nine realms.',
 'Thor forms an uneasy alliance with his treacherous brother to stop an ancient enemy from plunging the universe into darkness.',
 'Alan Taylor','Kevin Feige','Christopher Yost, Christopher Markus',0,0,0),

('Captain America: The Winter Soldier','captain-america-the-winter-soldier',2014,136,'English','United States',7.7,'published',
 'Adjusting to the modern world, Captain America uncovers a vast conspiracy hidden within the very organisation he serves. Hunted by a mysterious and deadly assassin from his own past, he must decide who can still be trusted. A taut, grounded political thriller widely regarded as one of the finest entries in the saga.',
 'Captain America uncovers a deadly conspiracy and faces a mysterious assassin in this acclaimed political thriller.',
 'Anthony & Joe Russo','Kevin Feige','Christopher Markus, Stephen McFeely',0,0,1),

('Guardians of the Galaxy','guardians-of-the-galaxy',2014,121,'English','United States',8.0,'published',
 'A roguish space adventurer is thrown together with a mismatched band of outlaws when a powerful artifact falls into his hands. Bickering, broke and barely heroic, this unlikely family must unite to save the galaxy. A funny, heartfelt and wildly original cosmic adventure powered by an unforgettable soundtrack.',
 'A band of mismatched outlaws unite to save the galaxy in this funny, heartfelt and wildly original cosmic adventure.',
 'James Gunn','Kevin Feige','James Gunn, Nicole Perlman',0,0,1),

('Avengers: Age of Ultron','avengers-age-of-ultron',2015,141,'English','United States',7.3,'published',
 'When an attempt to create a global peacekeeping programme goes catastrophically wrong, the Avengers must stop a terrifying artificial intelligence bent on humanity''s extinction. As cracks form within the team, they confront the consequences of their own power. A spectacular, character-rich sequel that deepens the bonds and the divisions among the heroes.',
 'The Avengers face a terrifying artificial intelligence bent on humanity''s extinction in this spectacular sequel.',
 'Joss Whedon','Kevin Feige','Joss Whedon',0,0,0),

('Ant-Man','ant-man',2015,117,'English','United States',7.3,'published',
 'A skilled thief looking for redemption is recruited to wield a remarkable suit that lets him shrink in size but grow in strength. To pull off a heist that could save the world, he must master his new powers and embrace the role of an unlikely hero. A fun, inventive and surprisingly heartfelt small-scale adventure.',
 'A reformed thief masters a suit that shrinks his size but boosts his strength to pull off a world-saving heist as Ant-Man.',
 'Peyton Reed','Kevin Feige','Edgar Wright, Joe Cornish',0,0,0),

('Captain America: Civil War','captain-america-civil-war',2016,147,'English','United States',7.8,'published',
 'When political pressure demands oversight of the Avengers, the team splinters into opposing sides led by Captain America and Iron Man. As loyalties are tested and friendships shatter, a personal betrayal pushes the conflict to a devastating breaking point. An emotionally charged blockbuster that pits hero against hero.',
 'The Avengers splinter into warring sides led by Captain America and Iron Man in this emotionally charged hero-versus-hero clash.',
 'Anthony & Joe Russo','Kevin Feige','Christopher Markus, Stephen McFeely',0,0,1),

('Doctor Strange','doctor-strange',2016,115,'English','United States',7.5,'published',
 'After a devastating accident ends his career, a brilliant but arrogant surgeon seeks healing in a hidden world of mysticism and magic. As he masters the mystic arts, he is drawn into a battle to protect reality itself. A visually dazzling, mind-bending journey into the supernatural side of the universe.',
 'A brilliant surgeon masters the mystic arts and battles to protect reality in this visually dazzling supernatural adventure.',
 'Scott Derrickson','Kevin Feige','Jon Spaihts, Scott Derrickson',0,0,0),

('Guardians of the Galaxy Vol. 2','guardians-of-the-galaxy-vol-2',2017,136,'English','United States',7.6,'published',
 'The galaxy''s most dysfunctional family is back, and this time the adventure turns deeply personal as long-buried secrets about their pasts come to light. Bonds are tested and loyalties questioned as they face a threat closer to home than ever before. A vibrant, emotional and laugh-out-loud sequel about the families we choose.',
 'The Guardians uncover deep secrets about their pasts in this vibrant, emotional and hilarious cosmic sequel.',
 'James Gunn','Kevin Feige','James Gunn',0,0,0),

('Spider-Man: Homecoming','spider-man-homecoming',2017,133,'English','United States',7.4,'published',
 'Eager to prove himself as more than a friendly neighbourhood hero, a teenage Peter Parker juggles high school life with crime-fighting. When a dangerous arms dealer threatens his city, he must learn what it really means to be a hero. A fresh, funny and grounded coming-of-age take on the web-slinger.',
 'Teenage Peter Parker balances high school and heroics while facing a dangerous arms dealer in this fresh Spider-Man adventure.',
 'Jon Watts','Kevin Feige','Jonathan Goldstein, John Francis Daley',0,0,0),

('Thor: Ragnarok','thor-ragnarok',2017,130,'English','United States',7.9,'published',
 'Stripped of his hammer and trapped on a chaotic alien world, Thor must win his freedom in a gladiatorial arena and race home to stop the destruction of his realm. With a powerful new enemy threatening everything, he assembles an unlikely team. A colourful, riotously funny reinvention bursting with energy and style.',
 'A hammerless Thor fights to escape an alien world and save his realm from destruction in this colourful, hilarious adventure.',
 'Taika Waititi','Kevin Feige','Eric Pearson',0,0,1),

('Black Panther','black-panther',2018,134,'English','United States',7.3,'published',
 'Returning home to take the throne of a secretive, technologically advanced nation, a young king is challenged by a dangerous rival with a personal claim to power. As old wounds resurface, he must decide what kind of leader to be. A culturally landmark epic of legacy, identity and responsibility.',
 'A young king defends his secretive, advanced nation from a dangerous rival in this culturally landmark superhero epic.',
 'Ryan Coogler','Kevin Feige','Ryan Coogler, Joe Robert Cole',0,0,0),

('Avengers: Infinity War','avengers-infinity-war',2018,149,'English','United States',8.4,'published',
 'A ruthless cosmic warlord sets out to collect six all-powerful stones that would let him reshape the universe with a snap of his fingers. To stop him, every hero must come together in the most ambitious battle ever attempted. A staggering, emotional epic that builds to one of cinema''s most shocking conclusions.',
 'The heroes unite against a cosmic warlord seeking ultimate power in this staggering, emotional and shocking epic.',
 'Anthony & Joe Russo','Kevin Feige','Christopher Markus, Stephen McFeely',1,1,1),

('Ant-Man and the Wasp','ant-man-and-the-wasp',2018,118,'English','United States',7.0,'published',
 'Balancing life as a hero with the demands of being a father, Scott Lang is pulled back into action alongside a fierce new partner. Together they race to uncover secrets from the past while staying one step ahead of their enemies. A breezy, inventive and good-natured adventure full of size-shifting fun.',
 'Scott Lang teams with the Wasp to uncover secrets from the past in this breezy, inventive size-shifting adventure.',
 'Peyton Reed','Kevin Feige','Chris McKenna, Erik Sommers',0,0,0),

('Captain Marvel','captain-marvel',2019,123,'English','United States',6.8,'published',
 'A powerful warrior caught between two alien worlds crash-lands on Earth, haunted by fragments of a forgotten past. As she pieces together her true identity, she discovers a strength greater than she ever imagined. A high-flying cosmic origin story about finding your power and your place.',
 'A powerful warrior pieces together her forgotten past and discovers her true strength in this high-flying cosmic origin story.',
 'Anna Boden & Ryan Fleck','Kevin Feige','Anna Boden, Ryan Fleck',0,0,0),

('Avengers: Endgame','avengers-endgame',2019,181,'English','United States',8.4,'published',
 'In the devastating aftermath of a universe-altering defeat, the remaining heroes gather for one last desperate plan to undo the damage and restore what was lost. Spanning time and sacrifice, it is the culmination of an unprecedented saga. A monumental, deeply emotional finale that delivers a payoff years in the making.',
 'The surviving heroes mount one last desperate plan to undo a universe-altering defeat in this monumental, emotional finale.',
 'Anthony & Joe Russo','Kevin Feige','Christopher Markus, Stephen McFeely',1,1,1),

('Spider-Man: Far From Home','spider-man-far-from-home',2019,129,'English','United States',7.4,'published',
 'Hoping for a relaxing trip abroad, Peter Parker''s holiday is interrupted when he is recruited to battle powerful elemental threats. As a charismatic new ally arrives, Peter learns that not everything is what it seems. A fun, globe-trotting adventure about stepping up and growing into a bigger role.',
 'Peter Parker''s European holiday turns into a battle against elemental threats and deception in this globe-trotting adventure.',
 'Jon Watts','Kevin Feige','Chris McKenna, Erik Sommers',0,0,0),

('Black Widow','black-widow',2021,134,'English','United States',6.7,'published',
 'Forced to confront the dark and dangerous secrets of her past, a master spy reunites with the makeshift family she left behind. As a deadly organisation closes in, she must finally face what made her who she is. A gritty, emotional spy thriller that gives a beloved hero her long-overdue spotlight.',
 'A master spy confronts the dark secrets of her past and reunites with her makeshift family in this gritty spy thriller.',
 'Cate Shortland','Kevin Feige','Eric Pearson',0,0,0),

('Shang-Chi and the Legend of the Ten Rings','shang-chi-and-the-legend-of-the-ten-rings',2021,132,'English','United States',7.4,'published',
 'A young man who has built a quiet life is pulled back into a world he tried to escape when his father''s shadowy organisation comes calling. To confront his past, he must master an ancient legacy and embrace his destiny. A thrilling, beautifully choreographed martial-arts epic with real heart.',
 'A young man confronts his father''s shadowy organisation and embraces his destiny in this thrilling martial-arts epic.',
 'Destin Daniel Cretton','Kevin Feige','Dave Callaham, Destin Daniel Cretton',0,0,0),

('Eternals','eternals',2021,156,'English','United States',6.3,'published',
 'A group of immortal beings who have secretly guided humanity for thousands of years are forced from the shadows when an ancient threat re-emerges. Reuniting after centuries apart, they must decide how far they will go to protect the world. An ambitious, visually striking epic spanning the whole of human history.',
 'Immortal guardians of humanity reunite to face an ancient threat in this ambitious, visually striking epic.',
 'Chloe Zhao','Kevin Feige','Chloe Zhao',0,0,0),

('Spider-Man: No Way Home','spider-man-no-way-home',2021,148,'English','United States',8.2,'published',
 'When a spell to restore his secret identity goes dangerously wrong, Peter Parker tears open the fabric of reality and unleashes foes from across the multiverse. To set things right, he faces the toughest choices of his life. A thrilling, emotional and crowd-igniting celebration of everything that makes the hero great.',
 'A spell gone wrong unleashes multiverse villains, forcing Peter Parker into the toughest choices of his life.',
 'Jon Watts','Kevin Feige','Chris McKenna, Erik Sommers',1,1,1),

('Doctor Strange in the Multiverse of Madness','doctor-strange-in-the-multiverse-of-madness',2022,126,'English','United States',6.9,'published',
 'Pursued across shattered realities, the master of the mystic arts must protect a young traveller with the power to journey between worlds. As a familiar ally is consumed by grief and power, the multiverse itself hangs in the balance. A bold, frightening and visually inventive plunge into the supernatural unknown.',
 'Doctor Strange races across shattered realities to protect a powerful traveller in this bold, frightening multiverse adventure.',
 'Sam Raimi','Kevin Feige','Michael Waldron',0,1,0),

('Thor: Love and Thunder','thor-love-and-thunder',2022,118,'English','United States',6.2,'published',
 'Searching for inner peace, the thunder god''s quiet retirement is shattered by a vengeful villain on a mission to wipe out the gods. Reuniting with old friends and a powerful former love, Thor must rediscover what he is fighting for. A loud, colourful and emotional cosmic adventure.',
 'Thor reunites with old friends and a former love to stop a villain hunting the gods in this colourful cosmic adventure.',
 'Taika Waititi','Kevin Feige','Taika Waititi, Jennifer Kaytin Robinson',0,0,0),

('Black Panther: Wakanda Forever','black-panther-wakanda-forever',2022,161,'English','United States',6.7,'published',
 'Grieving a profound loss, the leaders of a proud nation fight to protect their home from new threats rising from land and sea. As a powerful underwater kingdom emerges, they must find the strength to forge a new path. A moving, visually spectacular tribute about legacy, grief and resilience.',
 'A grieving nation defends its home against a powerful underwater kingdom in this moving, spectacular tribute.',
 'Ryan Coogler','Kevin Feige','Ryan Coogler, Joe Robert Cole',0,1,0),

('Ant-Man and the Wasp: Quantumania','ant-man-and-the-wasp-quantumania',2023,124,'English','United States',6.0,'published',
 'A family adventure takes a terrifying turn when Scott Lang and his loved ones are pulled into a strange and dangerous subatomic realm. There they encounter a powerful conqueror whose ambitions threaten everything. A wild, effects-driven journey that opens the door to a far bigger threat.',
 'Scott Lang and his family are pulled into a dangerous subatomic realm ruled by a powerful conqueror in this wild adventure.',
 'Peyton Reed','Kevin Feige','Jeff Loveness',0,0,0),

('Guardians of the Galaxy Vol. 3','guardians-of-the-galaxy-vol-3',2023,150,'English','United States',7.9,'published',
 'When one of their own is gravely endangered, the Guardians embark on a perilous mission to save him, uncovering the heartbreaking origins that made him who he is. As they confront a ruthless architect of suffering, the team faces its greatest test. A funny, emotional and triumphant farewell to a beloved family.',
 'The Guardians risk everything to save one of their own in this funny, emotional and triumphant farewell.',
 'James Gunn','Kevin Feige','James Gunn',0,1,1),

('The Marvels','the-marvels',2023,105,'English','United States',5.6,'published',
 'Three heroes discover their powers have become mysteriously entangled, swapping places whenever they use them. Forced to work together despite barely knowing one another, they must master their connection to stop a vengeful threat. A fast, light and breezy cosmic team-up packed with spectacle.',
 'Three heroes whose powers are mysteriously entangled must team up to stop a vengeful threat in this breezy cosmic adventure.',
 'Nia DaCosta','Kevin Feige','Nia DaCosta, Megan McDonnell',0,0,0),

('Deadpool & Wolverine','deadpool-and-wolverine',2024,128,'English','United States',7.7,'published',
 'The unkillable, foul-mouthed mercenary drags a reluctant, world-weary mutant into a reality-hopping mission neither of them wants. Trading insults and blows at every turn, the mismatched pair must save more than they bargained for. An outrageous, gleefully violent and hilarious buddy adventure.',
 'A foul-mouthed mercenary drags a reluctant mutant into a reality-hopping mission in this outrageous, hilarious buddy adventure.',
 'Shawn Levy','Kevin Feige','Ryan Reynolds, Rhett Reese, Paul Wernick',1,1,1),

('Captain America: Brave New World','captain-america-brave-new-world',2025,118,'English','United States',6.0,'published',
 'Newly stepping into the role of Captain America, Sam Wilson finds himself at the centre of an international incident that could ignite a global crisis. To expose the truth, he must uncover a sinister plot before it is too late. A grounded, tense political thriller for a new era.',
 'Sam Wilson takes up the shield and races to expose a sinister plot before it ignites a global crisis in this tense thriller.',
 'Julius Onah','Kevin Feige','Rob Edwards, Malcolm Spellman',0,1,0),

('Thunderbolts*','thunderbolts',2025,127,'English','United States',7.0,'published',
 'A group of antiheroes, misfits and former villains are thrown together on a mission designed to destroy them. Forced to rely on one another, this dysfunctional crew discovers an unlikely shot at redemption. A gritty, surprising and emotionally resonant team-up about second chances.',
 'A crew of antiheroes and misfits find an unlikely shot at redemption in this gritty, surprising and emotional team-up.',
 'Jake Schreier','Kevin Feige','Eric Pearson, Joanna Calo',0,1,0),

('The Fantastic Four: First Steps','the-fantastic-four-first-steps',2025,120,'English','United States',7.0,'published',
 'A pioneering team of explorers gains extraordinary abilities after a journey beyond the stars, becoming a family of heroes. Facing a world-ending cosmic threat, they must learn to harness their powers together. A bright, retro-futuristic adventure brimming with wonder and optimism.',
 'A family of explorers gains extraordinary powers and faces a world-ending cosmic threat in this retro-futuristic adventure.',
 'Matt Shakman','Kevin Feige','Josh Friedman, Jeff Kaplan',0,1,0);

-- ---------- Media, downloads, embeds (placeholders for all MCU films) ----------
UPDATE movies SET
  youtube_id = 'dQw4w9WgXcQ',
  poster_url = CONCAT('https://placehold.co/500x750/0b0b0b/22c55e/png?text=',
    REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(title,'&',''),':',''),'*',''),'  ',' '),' ','+')),
  backdrop_url = CONCAT('https://placehold.co/1600x900/0b0b0b/16a34a/png?text=',
    REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(title,'&',''),':',''),'*',''),'  ',' '),' ','+')),
  download_480  = CONCAT('https://example.com/download/', slug, '-480p.mkv'),
  download_720  = CONCAT('https://example.com/download/', slug, '-720p.mkv'),
  download_1080 = CONCAT('https://example.com/download/', slug, '-1080p.mkv'),
  size_480 = '480 MB', size_720 = '1.1 GB', size_1080 = '2.7 GB',
  embed_480  = 'https://www.youtube.com/embed/dQw4w9WgXcQ',
  embed_720  = 'https://www.youtube.com/embed/dQw4w9WgXcQ',
  embed_1080 = 'https://www.youtube.com/embed/dQw4w9WgXcQ'
WHERE slug IN (
  'iron-man','the-incredible-hulk','iron-man-2','thor','captain-america-the-first-avenger',
  'the-avengers','iron-man-3','thor-the-dark-world','captain-america-the-winter-soldier',
  'guardians-of-the-galaxy','avengers-age-of-ultron','ant-man','captain-america-civil-war',
  'doctor-strange','guardians-of-the-galaxy-vol-2','spider-man-homecoming','thor-ragnarok',
  'black-panther','avengers-infinity-war','ant-man-and-the-wasp','captain-marvel',
  'avengers-endgame','spider-man-far-from-home','black-widow',
  'shang-chi-and-the-legend-of-the-ten-rings','eternals','spider-man-no-way-home',
  'doctor-strange-in-the-multiverse-of-madness','thor-love-and-thunder',
  'black-panther-wakanda-forever','ant-man-and-the-wasp-quantumania',
  'guardians-of-the-galaxy-vol-3','the-marvels','deadpool-and-wolverine',
  'captain-america-brave-new-world','thunderbolts','the-fantastic-four-first-steps'
);

-- ---------- Categories: all MCU films -> Hollywood, Action, Sci-Fi ----------
INSERT IGNORE INTO movie_categories (movie_id, category_id)
SELECT m.id, c.id FROM movies m JOIN categories c ON c.slug IN ('hollywood','action','sci-fi')
WHERE m.slug IN (
  'iron-man','the-incredible-hulk','iron-man-2','thor','captain-america-the-first-avenger',
  'the-avengers','iron-man-3','thor-the-dark-world','captain-america-the-winter-soldier',
  'guardians-of-the-galaxy','avengers-age-of-ultron','ant-man','captain-america-civil-war',
  'doctor-strange','guardians-of-the-galaxy-vol-2','spider-man-homecoming','thor-ragnarok',
  'black-panther','avengers-infinity-war','ant-man-and-the-wasp','captain-marvel',
  'avengers-endgame','spider-man-far-from-home','black-widow',
  'shang-chi-and-the-legend-of-the-ten-rings','eternals','spider-man-no-way-home',
  'doctor-strange-in-the-multiverse-of-madness','thor-love-and-thunder',
  'black-panther-wakanda-forever','ant-man-and-the-wasp-quantumania',
  'guardians-of-the-galaxy-vol-3','the-marvels','deadpool-and-wolverine',
  'captain-america-brave-new-world','thunderbolts','the-fantastic-four-first-steps'
);

-- Add Comedy category to the lighter, funnier entries
INSERT IGNORE INTO movie_categories (movie_id, category_id)
SELECT m.id, c.id FROM movies m JOIN categories c ON c.slug = 'comedy'
WHERE m.slug IN (
  'guardians-of-the-galaxy','guardians-of-the-galaxy-vol-2','guardians-of-the-galaxy-vol-3',
  'thor-ragnarok','thor-love-and-thunder','ant-man','ant-man-and-the-wasp',
  'spider-man-homecoming','deadpool-and-wolverine'
);

-- Add Thriller category to the more grounded thrillers
INSERT IGNORE INTO movie_categories (movie_id, category_id)
SELECT m.id, c.id FROM movies m JOIN categories c ON c.slug = 'thriller'
WHERE m.slug IN (
  'captain-america-the-winter-soldier','captain-america-civil-war',
  'black-widow','captain-america-brave-new-world','thunderbolts'
);

-- ---------- Genres: all MCU films -> Action, Adventure, Sci-Fi ----------
INSERT IGNORE INTO movie_genres (movie_id, genre_id)
SELECT m.id, g.id FROM movies m JOIN genres g ON g.slug IN ('action','adventure','sci-fi')
WHERE m.slug IN (
  'iron-man','the-incredible-hulk','iron-man-2','thor','captain-america-the-first-avenger',
  'the-avengers','iron-man-3','thor-the-dark-world','captain-america-the-winter-soldier',
  'guardians-of-the-galaxy','avengers-age-of-ultron','ant-man','captain-america-civil-war',
  'doctor-strange','guardians-of-the-galaxy-vol-2','spider-man-homecoming','thor-ragnarok',
  'black-panther','avengers-infinity-war','ant-man-and-the-wasp','captain-marvel',
  'avengers-endgame','spider-man-far-from-home','black-widow',
  'shang-chi-and-the-legend-of-the-ten-rings','eternals','spider-man-no-way-home',
  'doctor-strange-in-the-multiverse-of-madness','thor-love-and-thunder',
  'black-panther-wakanda-forever','ant-man-and-the-wasp-quantumania',
  'guardians-of-the-galaxy-vol-3','the-marvels','deadpool-and-wolverine',
  'captain-america-brave-new-world','thunderbolts','the-fantastic-four-first-steps'
);

-- Add Fantasy genre to the magic/mystical entries
INSERT IGNORE INTO movie_genres (movie_id, genre_id)
SELECT m.id, g.id FROM movies m JOIN genres g ON g.slug = 'fantasy'
WHERE m.slug IN (
  'thor','thor-the-dark-world','thor-ragnarok','thor-love-and-thunder',
  'doctor-strange','doctor-strange-in-the-multiverse-of-madness','eternals',
  'shang-chi-and-the-legend-of-the-ten-rings','black-panther'
);

-- Add Comedy genre to the funnier entries
INSERT IGNORE INTO movie_genres (movie_id, genre_id)
SELECT m.id, g.id FROM movies m JOIN genres g ON g.slug = 'comedy'
WHERE m.slug IN (
  'guardians-of-the-galaxy','guardians-of-the-galaxy-vol-2','guardians-of-the-galaxy-vol-3',
  'thor-ragnarok','ant-man','spider-man-homecoming','deadpool-and-wolverine'
);

-- ---------- Cast (top billed, 3 per film) ----------
INSERT INTO movie_cast (movie_id, actor_name, character_name, sort_order) VALUES
((SELECT id FROM movies WHERE slug='iron-man'),'Robert Downey Jr.','Tony Stark / Iron Man',0),
((SELECT id FROM movies WHERE slug='iron-man'),'Gwyneth Paltrow','Pepper Potts',1),
((SELECT id FROM movies WHERE slug='iron-man'),'Jeff Bridges','Obadiah Stane',2),

((SELECT id FROM movies WHERE slug='the-incredible-hulk'),'Edward Norton','Bruce Banner / Hulk',0),
((SELECT id FROM movies WHERE slug='the-incredible-hulk'),'Liv Tyler','Betty Ross',1),
((SELECT id FROM movies WHERE slug='the-incredible-hulk'),'Tim Roth','Emil Blonsky',2),

((SELECT id FROM movies WHERE slug='iron-man-2'),'Robert Downey Jr.','Tony Stark / Iron Man',0),
((SELECT id FROM movies WHERE slug='iron-man-2'),'Mickey Rourke','Ivan Vanko',1),
((SELECT id FROM movies WHERE slug='iron-man-2'),'Scarlett Johansson','Natasha Romanoff',2),

((SELECT id FROM movies WHERE slug='thor'),'Chris Hemsworth','Thor',0),
((SELECT id FROM movies WHERE slug='thor'),'Natalie Portman','Jane Foster',1),
((SELECT id FROM movies WHERE slug='thor'),'Tom Hiddleston','Loki',2),

((SELECT id FROM movies WHERE slug='captain-america-the-first-avenger'),'Chris Evans','Steve Rogers / Captain America',0),
((SELECT id FROM movies WHERE slug='captain-america-the-first-avenger'),'Hayley Atwell','Peggy Carter',1),
((SELECT id FROM movies WHERE slug='captain-america-the-first-avenger'),'Hugo Weaving','Red Skull',2),

((SELECT id FROM movies WHERE slug='the-avengers'),'Robert Downey Jr.','Tony Stark / Iron Man',0),
((SELECT id FROM movies WHERE slug='the-avengers'),'Chris Evans','Steve Rogers / Captain America',1),
((SELECT id FROM movies WHERE slug='the-avengers'),'Scarlett Johansson','Natasha Romanoff / Black Widow',2),

((SELECT id FROM movies WHERE slug='iron-man-3'),'Robert Downey Jr.','Tony Stark / Iron Man',0),
((SELECT id FROM movies WHERE slug='iron-man-3'),'Guy Pearce','Aldrich Killian',1),
((SELECT id FROM movies WHERE slug='iron-man-3'),'Ben Kingsley','Trevor Slattery',2),

((SELECT id FROM movies WHERE slug='thor-the-dark-world'),'Chris Hemsworth','Thor',0),
((SELECT id FROM movies WHERE slug='thor-the-dark-world'),'Natalie Portman','Jane Foster',1),
((SELECT id FROM movies WHERE slug='thor-the-dark-world'),'Tom Hiddleston','Loki',2),

((SELECT id FROM movies WHERE slug='captain-america-the-winter-soldier'),'Chris Evans','Steve Rogers / Captain America',0),
((SELECT id FROM movies WHERE slug='captain-america-the-winter-soldier'),'Scarlett Johansson','Natasha Romanoff / Black Widow',1),
((SELECT id FROM movies WHERE slug='captain-america-the-winter-soldier'),'Sebastian Stan','Bucky Barnes / Winter Soldier',2),

((SELECT id FROM movies WHERE slug='guardians-of-the-galaxy'),'Chris Pratt','Peter Quill / Star-Lord',0),
((SELECT id FROM movies WHERE slug='guardians-of-the-galaxy'),'Zoe Saldana','Gamora',1),
((SELECT id FROM movies WHERE slug='guardians-of-the-galaxy'),'Dave Bautista','Drax',2),

((SELECT id FROM movies WHERE slug='avengers-age-of-ultron'),'Robert Downey Jr.','Tony Stark / Iron Man',0),
((SELECT id FROM movies WHERE slug='avengers-age-of-ultron'),'Chris Hemsworth','Thor',1),
((SELECT id FROM movies WHERE slug='avengers-age-of-ultron'),'James Spader','Ultron',2),

((SELECT id FROM movies WHERE slug='ant-man'),'Paul Rudd','Scott Lang / Ant-Man',0),
((SELECT id FROM movies WHERE slug='ant-man'),'Evangeline Lilly','Hope van Dyne',1),
((SELECT id FROM movies WHERE slug='ant-man'),'Michael Douglas','Hank Pym',2),

((SELECT id FROM movies WHERE slug='captain-america-civil-war'),'Chris Evans','Steve Rogers / Captain America',0),
((SELECT id FROM movies WHERE slug='captain-america-civil-war'),'Robert Downey Jr.','Tony Stark / Iron Man',1),
((SELECT id FROM movies WHERE slug='captain-america-civil-war'),'Sebastian Stan','Bucky Barnes',2),

((SELECT id FROM movies WHERE slug='doctor-strange'),'Benedict Cumberbatch','Stephen Strange',0),
((SELECT id FROM movies WHERE slug='doctor-strange'),'Chiwetel Ejiofor','Karl Mordo',1),
((SELECT id FROM movies WHERE slug='doctor-strange'),'Rachel McAdams','Christine Palmer',2),

((SELECT id FROM movies WHERE slug='guardians-of-the-galaxy-vol-2'),'Chris Pratt','Peter Quill / Star-Lord',0),
((SELECT id FROM movies WHERE slug='guardians-of-the-galaxy-vol-2'),'Zoe Saldana','Gamora',1),
((SELECT id FROM movies WHERE slug='guardians-of-the-galaxy-vol-2'),'Kurt Russell','Ego',2),

((SELECT id FROM movies WHERE slug='spider-man-homecoming'),'Tom Holland','Peter Parker / Spider-Man',0),
((SELECT id FROM movies WHERE slug='spider-man-homecoming'),'Michael Keaton','Adrian Toomes / Vulture',1),
((SELECT id FROM movies WHERE slug='spider-man-homecoming'),'Robert Downey Jr.','Tony Stark',2),

((SELECT id FROM movies WHERE slug='thor-ragnarok'),'Chris Hemsworth','Thor',0),
((SELECT id FROM movies WHERE slug='thor-ragnarok'),'Tom Hiddleston','Loki',1),
((SELECT id FROM movies WHERE slug='thor-ragnarok'),'Cate Blanchett','Hela',2),

((SELECT id FROM movies WHERE slug='black-panther'),'Chadwick Boseman','T''Challa / Black Panther',0),
((SELECT id FROM movies WHERE slug='black-panther'),'Michael B. Jordan','Erik Killmonger',1),
((SELECT id FROM movies WHERE slug='black-panther'),'Lupita Nyong''o','Nakia',2),

((SELECT id FROM movies WHERE slug='avengers-infinity-war'),'Robert Downey Jr.','Tony Stark / Iron Man',0),
((SELECT id FROM movies WHERE slug='avengers-infinity-war'),'Josh Brolin','Thanos',1),
((SELECT id FROM movies WHERE slug='avengers-infinity-war'),'Chris Hemsworth','Thor',2),

((SELECT id FROM movies WHERE slug='ant-man-and-the-wasp'),'Paul Rudd','Scott Lang / Ant-Man',0),
((SELECT id FROM movies WHERE slug='ant-man-and-the-wasp'),'Evangeline Lilly','Hope van Dyne / Wasp',1),
((SELECT id FROM movies WHERE slug='ant-man-and-the-wasp'),'Michael Douglas','Hank Pym',2),

((SELECT id FROM movies WHERE slug='captain-marvel'),'Brie Larson','Carol Danvers / Captain Marvel',0),
((SELECT id FROM movies WHERE slug='captain-marvel'),'Samuel L. Jackson','Nick Fury',1),
((SELECT id FROM movies WHERE slug='captain-marvel'),'Jude Law','Yon-Rogg',2),

((SELECT id FROM movies WHERE slug='avengers-endgame'),'Robert Downey Jr.','Tony Stark / Iron Man',0),
((SELECT id FROM movies WHERE slug='avengers-endgame'),'Chris Evans','Steve Rogers / Captain America',1),
((SELECT id FROM movies WHERE slug='avengers-endgame'),'Josh Brolin','Thanos',2),

((SELECT id FROM movies WHERE slug='spider-man-far-from-home'),'Tom Holland','Peter Parker / Spider-Man',0),
((SELECT id FROM movies WHERE slug='spider-man-far-from-home'),'Jake Gyllenhaal','Quentin Beck / Mysterio',1),
((SELECT id FROM movies WHERE slug='spider-man-far-from-home'),'Zendaya','MJ',2),

((SELECT id FROM movies WHERE slug='black-widow'),'Scarlett Johansson','Natasha Romanoff / Black Widow',0),
((SELECT id FROM movies WHERE slug='black-widow'),'Florence Pugh','Yelena Belova',1),
((SELECT id FROM movies WHERE slug='black-widow'),'David Harbour','Alexei / Red Guardian',2),

((SELECT id FROM movies WHERE slug='shang-chi-and-the-legend-of-the-ten-rings'),'Simu Liu','Shang-Chi',0),
((SELECT id FROM movies WHERE slug='shang-chi-and-the-legend-of-the-ten-rings'),'Awkwafina','Katy',1),
((SELECT id FROM movies WHERE slug='shang-chi-and-the-legend-of-the-ten-rings'),'Tony Leung','Wenwu',2),

((SELECT id FROM movies WHERE slug='eternals'),'Gemma Chan','Sersi',0),
((SELECT id FROM movies WHERE slug='eternals'),'Richard Madden','Ikaris',1),
((SELECT id FROM movies WHERE slug='eternals'),'Angelina Jolie','Thena',2),

((SELECT id FROM movies WHERE slug='spider-man-no-way-home'),'Tom Holland','Peter Parker / Spider-Man',0),
((SELECT id FROM movies WHERE slug='spider-man-no-way-home'),'Zendaya','MJ',1),
((SELECT id FROM movies WHERE slug='spider-man-no-way-home'),'Benedict Cumberbatch','Stephen Strange',2),

((SELECT id FROM movies WHERE slug='doctor-strange-in-the-multiverse-of-madness'),'Benedict Cumberbatch','Stephen Strange',0),
((SELECT id FROM movies WHERE slug='doctor-strange-in-the-multiverse-of-madness'),'Elizabeth Olsen','Wanda Maximoff',1),
((SELECT id FROM movies WHERE slug='doctor-strange-in-the-multiverse-of-madness'),'Xochitl Gomez','America Chavez',2),

((SELECT id FROM movies WHERE slug='thor-love-and-thunder'),'Chris Hemsworth','Thor',0),
((SELECT id FROM movies WHERE slug='thor-love-and-thunder'),'Natalie Portman','Jane Foster / Mighty Thor',1),
((SELECT id FROM movies WHERE slug='thor-love-and-thunder'),'Christian Bale','Gorr',2),

((SELECT id FROM movies WHERE slug='black-panther-wakanda-forever'),'Letitia Wright','Shuri',0),
((SELECT id FROM movies WHERE slug='black-panther-wakanda-forever'),'Angela Bassett','Ramonda',1),
((SELECT id FROM movies WHERE slug='black-panther-wakanda-forever'),'Tenoch Huerta','Namor',2),

((SELECT id FROM movies WHERE slug='ant-man-and-the-wasp-quantumania'),'Paul Rudd','Scott Lang / Ant-Man',0),
((SELECT id FROM movies WHERE slug='ant-man-and-the-wasp-quantumania'),'Evangeline Lilly','Hope van Dyne / Wasp',1),
((SELECT id FROM movies WHERE slug='ant-man-and-the-wasp-quantumania'),'Jonathan Majors','Kang',2),

((SELECT id FROM movies WHERE slug='guardians-of-the-galaxy-vol-3'),'Chris Pratt','Peter Quill / Star-Lord',0),
((SELECT id FROM movies WHERE slug='guardians-of-the-galaxy-vol-3'),'Chukwudi Iwuji','The High Evolutionary',1),
((SELECT id FROM movies WHERE slug='guardians-of-the-galaxy-vol-3'),'Karen Gillan','Nebula',2),

((SELECT id FROM movies WHERE slug='the-marvels'),'Brie Larson','Carol Danvers / Captain Marvel',0),
((SELECT id FROM movies WHERE slug='the-marvels'),'Teyonah Parris','Monica Rambeau',1),
((SELECT id FROM movies WHERE slug='the-marvels'),'Iman Vellani','Kamala Khan / Ms. Marvel',2),

((SELECT id FROM movies WHERE slug='deadpool-and-wolverine'),'Ryan Reynolds','Wade Wilson / Deadpool',0),
((SELECT id FROM movies WHERE slug='deadpool-and-wolverine'),'Hugh Jackman','Logan / Wolverine',1),
((SELECT id FROM movies WHERE slug='deadpool-and-wolverine'),'Emma Corrin','Cassandra Nova',2),

((SELECT id FROM movies WHERE slug='captain-america-brave-new-world'),'Anthony Mackie','Sam Wilson / Captain America',0),
((SELECT id FROM movies WHERE slug='captain-america-brave-new-world'),'Harrison Ford','Thaddeus Ross',1),
((SELECT id FROM movies WHERE slug='captain-america-brave-new-world'),'Tim Blake Nelson','Samuel Sterns / The Leader',2),

((SELECT id FROM movies WHERE slug='thunderbolts'),'Florence Pugh','Yelena Belova',0),
((SELECT id FROM movies WHERE slug='thunderbolts'),'Sebastian Stan','Bucky Barnes',1),
((SELECT id FROM movies WHERE slug='thunderbolts'),'David Harbour','Alexei / Red Guardian',2),

((SELECT id FROM movies WHERE slug='the-fantastic-four-first-steps'),'Pedro Pascal','Reed Richards',0),
((SELECT id FROM movies WHERE slug='the-fantastic-four-first-steps'),'Vanessa Kirby','Sue Storm',1),
((SELECT id FROM movies WHERE slug='the-fantastic-four-first-steps'),'Joseph Quinn','Johnny Storm',2);
