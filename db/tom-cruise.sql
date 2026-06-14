-- ============================================================
--  TopHDMovies — Tom Cruise collection (excl. Mission: Impossible,
--  already on the site). Bilingual overviews. Apply to LOCAL DB,
--  then: node scripts/sync-tmdb.mjs <slugs>
-- ============================================================
SET NAMES utf8mb4;

INSERT INTO movies
  (title, slug, year, runtime, language, country, rating, status,
   overview, short_description, director, producer, writer,
   is_featured, is_trending, is_top_rated)
VALUES
('Edge of Tomorrow','edge-of-tomorrow',2014,113,'Hindi, English','United States',7.9,'published',
 'A soldier with no combat experience is killed within minutes of a hopeless battle against an alien invasion — only to wake up and live the same brutal day again and again. Each loop makes him sharper, deadlier and closer to victory. A thrilling, inventive sci-fi action ride.\n\nएलियन आक्रमण के खिलाफ एक बेबस जंग में कुछ ही मिनटों में मारा गया एक अनुभवहीन सैनिक बार-बार उसी क्रूर दिन में जागता है। हर बार वह और तेज़, और खतरनाक और जीत के करीब होता जाता है। एक रोमांचक और अनोखी साइ-फाई एक्शन फिल्म।',
 'A soldier relives the same alien battle on a loop. | एक सैनिक एलियन जंग का वही दिन बार-बार जीता है।',
 'Doug Liman','Erwin Stoff','Christopher McQuarrie',1,1,1),

('Top Gun','top-gun',1986,110,'Hindi, English','United States',6.9,'published',
 'A hotshot young fighter pilot battles his own recklessness and fierce rivals at an elite naval flight school, while a tragedy forces him to confront what it truly means to be the best. A high-flying, adrenaline-fueled classic.\n\nएक तेज़-तर्रार नौजवान फाइटर पायलट एक प्रतिष्ठित नेवल फ्लाइट स्कूल में अपनी लापरवाही और कड़े प्रतिद्वंद्वियों से जूझता है, जबकि एक हादसा उसे सबसे बेहतर होने के असली मायने सिखा देता है। रोमांच से भरी एक क्लासिक फिल्म।',
 'A hotshot pilot trains at an elite flight school. | एक जोशीला पायलट एलीट फ्लाइट स्कूल में ट्रेनिंग लेता है।',
 'Tony Scott','Don Simpson, Jerry Bruckheimer','Jim Cash, Jack Epps Jr.',0,0,1),

('Top Gun: Maverick','top-gun-maverick',2022,130,'Hindi, English','United States',8.2,'published',
 'After decades as a test pilot, Maverick returns to train a new generation of elite aviators for a near-impossible mission — confronting his past and the ghosts of those he has lost. A spectacular, soaring sequel packed with real aerial thrills.\n\nदशकों तक टेस्ट पायलट रहने के बाद मैवरिक एक लगभग नामुमकिन मिशन के लिए एलीट पायलटों की नई पीढ़ी को ट्रेनिंग देने लौटता है — जहाँ उसे अपने अतीत और खोए हुए लोगों की यादों का सामना करना है। शानदार हवाई रोमांच से भरी भव्य सीक्वल।',
 'Maverick returns to train elite pilots. | मैवरिक एलीट पायलटों को ट्रेनिंग देने लौटता है।',
 'Joseph Kosinski','Jerry Bruckheimer, Tom Cruise','Ehren Kruger, Eric Warren Singer',1,1,1),

('Minority Report','minority-report',2002,145,'Hindi, English','United States',7.6,'published',
 'In a future where a special police unit arrests murderers before they strike, a top officer is accused of a killing he has not yet committed — and goes on the run to prove his innocence. A sleek, mind-bending sci-fi thriller.\n\nएक ऐसे भविष्य में जहाँ एक खास पुलिस यूनिट हत्यारों को अपराध करने से पहले ही गिरफ्तार कर लेती है, एक टॉप अफसर पर एक ऐसी हत्या का आरोप लगता है जो उसने अभी की ही नहीं। अपनी बेगुनाही साबित करने वह भाग निकलता है। दिमाग घुमा देने वाली साइ-फाई थ्रिलर।',
 'A cop is accused of a future murder. | एक पुलिस अफसर पर भविष्य की हत्या का आरोप लगता है।',
 'Steven Spielberg','Gerald R. Molen','Scott Frank, Jon Cohen',0,0,1),

('Jack Reacher','jack-reacher',2012,130,'Hindi, English','United States',7.0,'published',
 'A drifter and former military investigator is pulled into a chilling case when a trained sniper guns down five strangers — and the evidence is not what it seems. A taut, hard-hitting crime thriller.\n\nएक पूर्व सैन्य जाँचकर्ता और घुमंतू तब एक खौफनाक केस में उलझ जाता है जब एक प्रशिक्षित स्नाइपर पाँच अजनबियों को गोली मार देता है — और सबूत वैसे नहीं जैसे दिखते हैं। एक कसा हुआ, दमदार क्राइम थ्रिलर।',
 'A drifter investigates a sniper''s killing spree. | एक जाँचकर्ता एक स्नाइपर के केस की तह तक जाता है।',
 'Christopher McQuarrie','Tom Cruise, Don Granger','Christopher McQuarrie',0,0,0),

('Jack Reacher: Never Go Back','jack-reacher-never-go-back',2016,118,'Hindi, English','United States',6.1,'published',
 'Reacher returns to his old military unit only to find its commander framed for a crime — and himself the target of a deadly conspiracy. On the run, he fights to uncover the truth. A fast-paced action thriller.\n\nरीचर अपनी पुरानी सैन्य यूनिट में लौटता है और पाता है कि उसकी कमांडर को एक अपराध में फँसाया गया है — और वह खुद एक खतरनाक साज़िश का निशाना है। फरार होकर वह सच्चाई का पर्दाफ़ाश करने की जंग लड़ता है।',
 'Reacher is framed in a deadly conspiracy. | रीचर एक खतरनाक साज़िश में फँसाया जाता है।',
 'Edward Zwick','Tom Cruise, Don Granger','Richard Wenk, Edward Zwick',0,0,0),

('Oblivion','oblivion',2013,124,'Hindi, English','United States',7.0,'published',
 'One of the last men on a ruined future Earth, a drone repairman''s reality unravels when he rescues a mysterious survivor and uncovers a shattering truth about his mission. A stunning, atmospheric sci-fi adventure.\n\nतबाह हो चुकी भविष्य की धरती पर बचे आखिरी इंसानों में से एक, एक ड्रोन रिपेयरमैन की दुनिया तब उलट जाती है जब वह एक रहस्यमयी जीवित बची को बचाता है और अपने मिशन के बारे में एक चौंकाने वाला सच जान लेता है। एक खूबसूरत साइ-फाई फिल्म।',
 'A drone repairman uncovers a shattering truth. | एक ड्रोन रिपेयरमैन एक बड़ा सच खोल देता है।',
 'Joseph Kosinski','Joseph Kosinski','Karl Gajdusek, Michael Arndt',0,0,0),

('The Last Samurai','the-last-samurai',2003,154,'Hindi, English','United States',7.8,'published',
 'A disillusioned American war veteran hired to crush a samurai rebellion is captured — and slowly drawn into their ancient code of honour, duty and sacrifice. A sweeping, emotional epic of two worlds colliding.\n\nएक मायूस अमेरिकी युद्ध-वेटरन, जिसे समुराई विद्रोह कुचलने के लिए रखा जाता है, बंदी बन जाता है — और धीरे-धीरे उनके सम्मान, कर्तव्य और बलिदान के प्राचीन उसूलों की ओर खिंचता चला जाता है। दो दुनियाओं के टकराव की एक भावुक महागाथा।',
 'A war vet is drawn into the samurai way. | एक वेटरन समुराई के उसूलों की ओर खिंचता है।',
 'Edward Zwick','Tom Cruise, Edward Zwick','John Logan, Edward Zwick',0,0,1),

('Collateral','collateral',2004,120,'Hindi, English','United States',7.5,'published',
 'A cab driver''s ordinary night turns deadly when a contract killer hijacks his taxi and forces him to drive between hits across Los Angeles. A sleek, tense neo-noir thriller.\n\nएक टैक्सी ड्राइवर की आम रात तब जानलेवा बन जाती है जब एक कॉन्ट्रैक्ट किलर उसकी टैक्सी हाईजैक कर उसे लॉस एंजेलिस में एक के बाद एक कत्ल के बीच गाड़ी चलाने पर मजबूर कर देता है। एक स्टाइलिश और तनावपूर्ण थ्रिलर।',
 'A hitman hijacks a cabbie''s night. | एक हत्यारा एक टैक्सी ड्राइवर की रात कब्जा लेता है।',
 'Michael Mann','Michael Mann, Julie Richardson','Stuart Beattie',0,0,1),

('War of the Worlds','war-of-the-worlds',2005,116,'Hindi, English','United States',6.5,'published',
 'When towering alien war machines rise to wipe out humanity, an ordinary father fights to keep his children alive across a collapsing world. A relentless, terrifying survival spectacle.\n\nजब विशाल एलियन युद्ध-मशीनें मानवता का सफ़ाया करने उठ खड़ी होती हैं, तो एक आम पिता ढहती दुनिया के बीच अपने बच्चों को ज़िंदा रखने की जंग लड़ता है। एक भयानक और लगातार बना रहने वाला रोमांच।',
 'A father protects his kids during an alien invasion. | एक पिता एलियन हमले में बच्चों को बचाता है।',
 'Steven Spielberg','Kathleen Kennedy, Colin Wilson','Josh Friedman, David Koepp',0,0,0),

('Jerry Maguire','jerry-maguire',1996,139,'Hindi, English','United States',7.3,'published',
 'A slick sports agent has a crisis of conscience, loses everything, and risks it all on one loyal client and one woman who believes in him. A warm, funny and irresistible romantic drama.\n\nएक चालाक स्पोर्ट्स एजेंट का ज़मीर जाग उठता है, वह सब कुछ खो देता है, और अपना सब कुछ एक वफ़ादार क्लाइंट और एक ऐसी औरत पर दांव पर लगा देता है जो उस पर भरोसा करती है। एक दिल को छू लेने वाली रोमांटिक ड्रामा।',
 'A sports agent risks it all on loyalty and love. | एक एजेंट वफ़ादारी और प्यार पर सब दांव लगा देता है।',
 'Cameron Crowe','James L. Brooks, Cameron Crowe','Cameron Crowe',0,0,0),

('A Few Good Men','a-few-good-men',1992,138,'Hindi, English','United States',7.7,'published',
 'A brash young military lawyer defends two marines accused of murder, uncovering a chain of command willing to bury the truth. A gripping, electrifying courtroom drama with an unforgettable showdown.\n\nएक तेज़-तर्रार नौजवान सैन्य वकील कत्ल के आरोपी दो मरीन का बचाव करता है और एक ऐसी कमांड चेन का पर्दाफ़ाश करता है जो सच को दफ़न करने को तैयार है। एक यादगार टकराव वाला रोमांचक कोर्टरूम ड्रामा।',
 'A lawyer defends marines and battles a cover-up. | एक वकील मरीन का बचाव कर साज़िश से भिड़ता है।',
 'Rob Reiner','David Brown, Rob Reiner','Aaron Sorkin',0,0,1),

('Rain Man','rain-man',1988,133,'Hindi, English','United States',8.0,'published',
 'A self-centered hustler discovers he has an autistic savant brother he never knew — and a cross-country road trip slowly transforms them both. A tender, award-winning drama about family and connection.\n\nएक खुदगर्ज़ नौजवान को पता चलता है कि उसका एक ऑटिस्टिक सेवंट भाई है जिसके बारे में वह कभी जानता ही नहीं था — और देश भर की एक रोड ट्रिप धीरे-धीरे दोनों को बदल देती है। परिवार और जुड़ाव पर एक भावुक, पुरस्कार विजेता ड्रामा।',
 'A hustler bonds with his savant brother. | एक नौजवान अपने सेवंट भाई से जुड़ता है।',
 'Barry Levinson','Mark Johnson','Ronald Bass, Barry Morrow',0,0,1),

('The Firm','the-firm',1993,154,'Hindi, English','United States',6.8,'published',
 'A brilliant young lawyer joins a prestigious firm that seems too good to be true — and discovers a deadly secret that traps him between the mob and the FBI. A taut, twisty legal thriller.\n\nएक होनहार नौजवान वकील एक प्रतिष्ठित फर्म में शामिल होता है जो सच होने के लिए बहुत अच्छी लगती है — और एक खतरनाक राज़ खोल देता है जो उसे माफ़िया और FBI के बीच फँसा देता है। एक कसा हुआ, घुमावदार लीगल थ्रिलर।',
 'A young lawyer is trapped by a firm''s deadly secret. | एक वकील फर्म के खतरनाक राज़ में फँस जाता है।',
 'Sydney Pollack','Scott Rudin, John Davis','David Rabe, Robert Towne',0,0,0),

('Vanilla Sky','vanilla-sky',2001,136,'Hindi, English','United States',6.9,'published',
 'A wealthy, charming publisher''s perfect life shatters after a tragedy, blurring the line between dream, memory and reality. A haunting, mind-bending romantic mystery.\n\nएक अमीर और आकर्षक पब्लिशर की परफेक्ट ज़िंदगी एक हादसे के बाद बिखर जाती है, जहाँ सपने, यादें और हकीकत की रेखा धुंधली हो जाती है। एक खौफनाक, दिमाग घुमा देने वाली रोमांटिक रहस्यकथा।',
 'A man''s reality blurs after a tragedy. | एक हादसे के बाद आदमी की हकीकत धुंधली हो जाती है।',
 'Cameron Crowe','Tom Cruise, Paula Wagner','Cameron Crowe',0,0,0),

('The Mummy','the-mummy-2017',2017,110,'Hindi, English','United States',5.4,'published',
 'A soldier of fortune awakens an ancient Egyptian princess entombed for her unspeakable crimes — unleashing a vengeful power across the modern world. A monster-action adventure.\n\nएक भाड़े का सैनिक एक प्राचीन मिस्री राजकुमारी को जगा देता है जिसे उसके भयानक अपराधों के लिए दफ़न किया गया था — और आधुनिक दुनिया में एक बदला लेने वाली ताकत फैल जाती है। एक मॉन्स्टर-एक्शन एडवेंचर।',
 'A soldier awakens a vengeful ancient mummy. | एक सैनिक एक बदला लेने वाली ममी जगा देता है।',
 'Alex Kurtzman','Alex Kurtzman, Chris Morgan','David Koepp, Christopher McQuarrie',0,0,0),

('American Made','american-made',2017,115,'Hindi, English','United States',7.2,'published',
 'The wild true story of a charming airline pilot who becomes a smuggler and informant juggling the CIA, drug cartels and his own greed. A fast, funny and dizzying crime ride.\n\nएक आकर्षक एयरलाइन पायलट की बेलगाम सच्ची कहानी, जो CIA, ड्रग कार्टेल और अपनी ही लालच के बीच तालमेल बिठाते हुए एक तस्कर और मुखबिर बन जाता है। एक तेज़, मज़ेदार और चकरा देने वाली क्राइम फिल्म।',
 'A pilot becomes a smuggler for the CIA and cartels. | एक पायलट CIA और कार्टेल के लिए तस्कर बन जाता है।',
 'Doug Liman','Brian Grazer, Doug Davison','Gary Spinelli',0,0,0),

('Valkyrie','valkyrie',2008,121,'Hindi, English','United States',7.1,'published',
 'A wounded German colonel leads a daring plot to assassinate Hitler and seize control of the government from within. A tense, gripping wartime thriller based on a true conspiracy.\n\nएक घायल जर्मन कर्नल हिटलर की हत्या और भीतर से सरकार पर कब्ज़ा करने की एक साहसी साज़िश का नेतृत्व करता है। एक सच्ची साज़िश पर आधारित तनावपूर्ण, रोमांचक युद्धकालीन थ्रिलर।',
 'A colonel plots to assassinate Hitler. | एक कर्नल हिटलर की हत्या की साज़िश रचता है।',
 'Bryan Singer','Bryan Singer, Christopher McQuarrie','Christopher McQuarrie, Nathan Alexander',0,0,0),

('Knight and Day','knight-and-day',2010,109,'Hindi, English','United States',6.3,'published',
 'An ordinary woman is swept into a globe-trotting adventure with a charming, possibly rogue secret agent who insists he is protecting her. A breezy, action-packed romantic comedy.\n\nएक आम औरत एक आकर्षक और शायद बाग़ी सीक्रेट एजेंट के साथ दुनिया भर की रोमांचक यात्रा में बह जाती है, जो ज़ोर देता है कि वह उसकी हिफ़ाज़त कर रहा है। एक हल्की-फुल्की, एक्शन से भरी रोमांटिक कॉमेडी।',
 'A woman joins a rogue agent''s wild adventure. | एक औरत एक बाग़ी एजेंट के रोमांच में शामिल हो जाती है।',
 'James Mangold','Cathy Konrad, Todd Garner','Patrick O''Neill',0,0,0),

('Days of Thunder','days-of-thunder',1990,107,'Hindi, English','United States',6.0,'published',
 'A brash, gifted rookie stock-car driver battles fierce rivals, a near-fatal crash and his own ego on his way to the top of NASCAR. A high-speed, adrenaline-charged racing drama.\n\nएक तेज़-तर्रार और प्रतिभाशाली नौसिखिया स्टॉक-कार ड्राइवर NASCAR के शिखर तक पहुँचने की राह में कड़े प्रतिद्वंद्वियों, एक जानलेवा हादसे और अपने ही अहंकार से जूझता है। एक हाई-स्पीड रेसिंग ड्रामा।',
 'A rookie driver races to the top of NASCAR. | एक नौसिखिया ड्राइवर NASCAR के शिखर की ओर दौड़ता है।',
 'Tony Scott','Don Simpson, Jerry Bruckheimer','Robert Towne',0,0,0),

('Born on the Fourth of July','born-on-the-fourth-of-july',1989,145,'Hindi, English','United States',7.2,'published',
 'The true story of an idealistic young man who returns from war paralysed and disillusioned, and transforms into a passionate anti-war activist. A powerful, deeply moving drama.\n\nएक आदर्शवादी नौजवान की सच्ची कहानी, जो युद्ध से लकवाग्रस्त और मायूस लौटता है और एक जोशीले युद्ध-विरोधी कार्यकर्ता में बदल जाता है। एक दमदार और दिल को झकझोर देने वाला ड्रामा।',
 'A paralysed veteran becomes an anti-war activist. | एक लकवाग्रस्त वेटरन युद्ध-विरोधी कार्यकर्ता बनता है।',
 'Oliver Stone','A. Kitman Ho, Oliver Stone','Oliver Stone, Ron Kovic',0,0,0),

('Risky Business','risky-business',1983,99,'Hindi, English','United States',6.8,'published',
 'When his parents leave town, a straitlaced teenager''s wild streak turns one reckless decision into a chaotic, life-changing adventure. A sharp, iconic coming-of-age comedy.\n\nजब उसके माता-पिता शहर से बाहर जाते हैं, तो एक संयमित किशोर की बेलगाम हरकत एक लापरवाह फैसले को एक अराजक, ज़िंदगी बदल देने वाले रोमांच में बदल देती है। एक तीखी, मशहूर कमिंग-ऑफ-एज कॉमेडी।',
 'A teen''s reckless choice spirals out of control. | एक किशोर का लापरवाह फैसला बेकाबू हो जाता है।',
 'Paul Brickman','Jon Avnet, Steve Tisch','Paul Brickman',0,0,0),

('Interview with the Vampire','interview-with-the-vampire',1994,123,'Hindi, English','United States',7.6,'published',
 'A two-hundred-year-old vampire recounts his haunting tale of immortality, seduction and despair — bound forever to the charismatic, dangerous vampire who turned him. A lush, gothic horror drama.\n\nएक दो सौ साल पुराना वैम्पायर अमरता, आकर्षण और निराशा की अपनी खौफनाक कहानी सुनाता है — हमेशा के लिए उस करिश्माई और खतरनाक वैम्पायर से बंधा हुआ जिसने उसे वैम्पायर बनाया। एक भव्य, गॉथिक हॉरर ड्रामा।',
 'A vampire recounts his haunting immortal tale. | एक वैम्पायर अपनी खौफनाक अमर कहानी सुनाता है।',
 'Neil Jordan','Stephen Woolley, David Geffen','Anne Rice',0,0,1),

('Eyes Wide Shut','eyes-wide-shut',1999,159,'Hindi, English','United States',7.5,'published',
 'After a confession shakes his marriage, a Manhattan doctor wanders into a dark, secret world of desire and danger over one feverish night. Stanley Kubrick''s hypnotic, mysterious final film.\n\nएक कबूलनामे से उसकी शादी हिल जाने के बाद, मैनहट्टन का एक डॉक्टर एक बुख़ार-भरी रात में इच्छा और खतरे की एक अंधेरी, गुप्त दुनिया में भटक जाता है। स्टैनली क्यूब्रिक की सम्मोहक और रहस्यमयी आखिरी फिल्म।',
 'A doctor enters a secret world of desire. | एक डॉक्टर इच्छाओं की एक गुप्त दुनिया में पहुँचता है।',
 'Stanley Kubrick','Stanley Kubrick','Stanley Kubrick, Frederic Raphael',0,0,0);

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
WHERE slug IN ('edge-of-tomorrow','top-gun','top-gun-maverick','minority-report','jack-reacher',
  'jack-reacher-never-go-back','oblivion','the-last-samurai','collateral','war-of-the-worlds',
  'jerry-maguire','a-few-good-men','rain-man','the-firm','vanilla-sky','the-mummy-2017',
  'american-made','valkyrie','knight-and-day','days-of-thunder','born-on-the-fourth-of-july',
  'risky-business','interview-with-the-vampire','eyes-wide-shut');

-- ---------- categories: all Hollywood ----------
INSERT IGNORE INTO movie_categories (movie_id, category_id)
SELECT m.id, c.id FROM movies m JOIN categories c ON c.slug='hollywood'
WHERE m.slug IN ('edge-of-tomorrow','top-gun','top-gun-maverick','minority-report','jack-reacher',
  'jack-reacher-never-go-back','oblivion','the-last-samurai','collateral','war-of-the-worlds',
  'jerry-maguire','a-few-good-men','rain-man','the-firm','vanilla-sky','the-mummy-2017',
  'american-made','valkyrie','knight-and-day','days-of-thunder','born-on-the-fourth-of-july',
  'risky-business','interview-with-the-vampire','eyes-wide-shut');

-- Action
INSERT IGNORE INTO movie_categories (movie_id, category_id)
SELECT m.id, c.id FROM movies m JOIN categories c ON c.slug='action'
WHERE m.slug IN ('edge-of-tomorrow','top-gun','top-gun-maverick','jack-reacher','jack-reacher-never-go-back',
  'oblivion','the-last-samurai','war-of-the-worlds','the-mummy-2017','knight-and-day','days-of-thunder');
-- Sci-Fi
INSERT IGNORE INTO movie_categories (movie_id, category_id)
SELECT m.id, c.id FROM movies m JOIN categories c ON c.slug='sci-fi'
WHERE m.slug IN ('edge-of-tomorrow','minority-report','oblivion','war-of-the-worlds','vanilla-sky');
-- Thriller
INSERT IGNORE INTO movie_categories (movie_id, category_id)
SELECT m.id, c.id FROM movies m JOIN categories c ON c.slug='thriller'
WHERE m.slug IN ('minority-report','jack-reacher','jack-reacher-never-go-back','collateral','a-few-good-men',
  'the-firm','vanilla-sky','valkyrie','eyes-wide-shut');
-- Drama
INSERT IGNORE INTO movie_categories (movie_id, category_id)
SELECT m.id, c.id FROM movies m JOIN categories c ON c.slug='drama'
WHERE m.slug IN ('the-last-samurai','jerry-maguire','a-few-good-men','rain-man','born-on-the-fourth-of-july',
  'interview-with-the-vampire','eyes-wide-shut');
-- Crime
INSERT IGNORE INTO movie_categories (movie_id, category_id)
SELECT m.id, c.id FROM movies m JOIN categories c ON c.slug='crime'
WHERE m.slug IN ('jack-reacher','collateral','american-made');
-- Comedy
INSERT IGNORE INTO movie_categories (movie_id, category_id)
SELECT m.id, c.id FROM movies m JOIN categories c ON c.slug='comedy'
WHERE m.slug IN ('jerry-maguire','knight-and-day','american-made','risky-business');
-- Horror
INSERT IGNORE INTO movie_categories (movie_id, category_id)
SELECT m.id, c.id FROM movies m JOIN categories c ON c.slug='horror'
WHERE m.slug IN ('the-mummy-2017','interview-with-the-vampire');
-- Romance
INSERT IGNORE INTO movie_categories (movie_id, category_id)
SELECT m.id, c.id FROM movies m JOIN categories c ON c.slug='romance'
WHERE m.slug IN ('jerry-maguire','vanilla-sky');

-- ---------- genres ----------
INSERT IGNORE INTO movie_genres (movie_id, genre_id)
SELECT m.id, g.id FROM movies m JOIN genres g ON g.slug='action'
WHERE m.slug IN ('edge-of-tomorrow','top-gun','top-gun-maverick','jack-reacher','jack-reacher-never-go-back',
  'oblivion','the-last-samurai','war-of-the-worlds','the-mummy-2017','knight-and-day','days-of-thunder');
INSERT IGNORE INTO movie_genres (movie_id, genre_id)
SELECT m.id, g.id FROM movies m JOIN genres g ON g.slug='sci-fi'
WHERE m.slug IN ('edge-of-tomorrow','minority-report','oblivion','war-of-the-worlds','vanilla-sky');
INSERT IGNORE INTO movie_genres (movie_id, genre_id)
SELECT m.id, g.id FROM movies m JOIN genres g ON g.slug='thriller'
WHERE m.slug IN ('minority-report','jack-reacher','jack-reacher-never-go-back','collateral','a-few-good-men',
  'the-firm','vanilla-sky','valkyrie','eyes-wide-shut','war-of-the-worlds');
INSERT IGNORE INTO movie_genres (movie_id, genre_id)
SELECT m.id, g.id FROM movies m JOIN genres g ON g.slug='drama'
WHERE m.slug IN ('the-last-samurai','jerry-maguire','a-few-good-men','rain-man','the-firm','born-on-the-fourth-of-july',
  'interview-with-the-vampire','eyes-wide-shut','top-gun','top-gun-maverick','valkyrie');
INSERT IGNORE INTO movie_genres (movie_id, genre_id)
SELECT m.id, g.id FROM movies m JOIN genres g ON g.slug='crime'
WHERE m.slug IN ('jack-reacher','collateral','american-made');
INSERT IGNORE INTO movie_genres (movie_id, genre_id)
SELECT m.id, g.id FROM movies m JOIN genres g ON g.slug='comedy'
WHERE m.slug IN ('jerry-maguire','knight-and-day','american-made','risky-business');
INSERT IGNORE INTO movie_genres (movie_id, genre_id)
SELECT m.id, g.id FROM movies m JOIN genres g ON g.slug='horror'
WHERE m.slug IN ('the-mummy-2017','interview-with-the-vampire');
INSERT IGNORE INTO movie_genres (movie_id, genre_id)
SELECT m.id, g.id FROM movies m JOIN genres g ON g.slug='romance'
WHERE m.slug IN ('jerry-maguire','vanilla-sky');
INSERT IGNORE INTO movie_genres (movie_id, genre_id)
SELECT m.id, g.id FROM movies m JOIN genres g ON g.slug='fantasy'
WHERE m.slug IN ('the-mummy-2017','interview-with-the-vampire');
INSERT IGNORE INTO movie_genres (movie_id, genre_id)
SELECT m.id, g.id FROM movies m JOIN genres g ON g.slug='mystery'
WHERE m.slug IN ('vanilla-sky','eyes-wide-shut');

-- ---------- cast ----------
INSERT INTO movie_cast (movie_id, actor_name, character_name, sort_order) VALUES
((SELECT id FROM movies WHERE slug='edge-of-tomorrow'),'Tom Cruise','Major William Cage',0),
((SELECT id FROM movies WHERE slug='edge-of-tomorrow'),'Emily Blunt','Rita Vrataski',1),
((SELECT id FROM movies WHERE slug='edge-of-tomorrow'),'Bill Paxton','Master Sergeant Farell',2),

((SELECT id FROM movies WHERE slug='top-gun'),'Tom Cruise','Pete "Maverick" Mitchell',0),
((SELECT id FROM movies WHERE slug='top-gun'),'Kelly McGillis','Charlie',1),
((SELECT id FROM movies WHERE slug='top-gun'),'Val Kilmer','Tom "Iceman" Kazansky',2),

((SELECT id FROM movies WHERE slug='top-gun-maverick'),'Tom Cruise','Pete "Maverick" Mitchell',0),
((SELECT id FROM movies WHERE slug='top-gun-maverick'),'Miles Teller','Bradley "Rooster" Bradshaw',1),
((SELECT id FROM movies WHERE slug='top-gun-maverick'),'Jennifer Connelly','Penny Benjamin',2),

((SELECT id FROM movies WHERE slug='minority-report'),'Tom Cruise','John Anderton',0),
((SELECT id FROM movies WHERE slug='minority-report'),'Colin Farrell','Danny Witwer',1),
((SELECT id FROM movies WHERE slug='minority-report'),'Samantha Morton','Agatha',2),

((SELECT id FROM movies WHERE slug='jack-reacher'),'Tom Cruise','Jack Reacher',0),
((SELECT id FROM movies WHERE slug='jack-reacher'),'Rosamund Pike','Helen Rodin',1),
((SELECT id FROM movies WHERE slug='jack-reacher'),'Werner Herzog','The Zec',2),

((SELECT id FROM movies WHERE slug='jack-reacher-never-go-back'),'Tom Cruise','Jack Reacher',0),
((SELECT id FROM movies WHERE slug='jack-reacher-never-go-back'),'Cobie Smulders','Susan Turner',1),
((SELECT id FROM movies WHERE slug='jack-reacher-never-go-back'),'Danika Yarosh','Samantha',2),

((SELECT id FROM movies WHERE slug='oblivion'),'Tom Cruise','Jack Harper',0),
((SELECT id FROM movies WHERE slug='oblivion'),'Morgan Freeman','Malcolm Beech',1),
((SELECT id FROM movies WHERE slug='oblivion'),'Andrea Riseborough','Victoria',2),

((SELECT id FROM movies WHERE slug='the-last-samurai'),'Tom Cruise','Nathan Algren',0),
((SELECT id FROM movies WHERE slug='the-last-samurai'),'Ken Watanabe','Katsumoto',1),
((SELECT id FROM movies WHERE slug='the-last-samurai'),'Billy Connolly','Zebulon Gant',2),

((SELECT id FROM movies WHERE slug='collateral'),'Tom Cruise','Vincent',0),
((SELECT id FROM movies WHERE slug='collateral'),'Jamie Foxx','Max',1),
((SELECT id FROM movies WHERE slug='collateral'),'Jada Pinkett Smith','Annie',2),

((SELECT id FROM movies WHERE slug='war-of-the-worlds'),'Tom Cruise','Ray Ferrier',0),
((SELECT id FROM movies WHERE slug='war-of-the-worlds'),'Dakota Fanning','Rachel Ferrier',1),
((SELECT id FROM movies WHERE slug='war-of-the-worlds'),'Tim Robbins','Harlan Ogilvy',2),

((SELECT id FROM movies WHERE slug='jerry-maguire'),'Tom Cruise','Jerry Maguire',0),
((SELECT id FROM movies WHERE slug='jerry-maguire'),'Cuba Gooding Jr.','Rod Tidwell',1),
((SELECT id FROM movies WHERE slug='jerry-maguire'),'Renée Zellweger','Dorothy Boyd',2),

((SELECT id FROM movies WHERE slug='a-few-good-men'),'Tom Cruise','Lt. Daniel Kaffee',0),
((SELECT id FROM movies WHERE slug='a-few-good-men'),'Jack Nicholson','Col. Nathan Jessep',1),
((SELECT id FROM movies WHERE slug='a-few-good-men'),'Demi Moore','Lt. Cdr. JoAnne Galloway',2),

((SELECT id FROM movies WHERE slug='rain-man'),'Dustin Hoffman','Raymond Babbitt',0),
((SELECT id FROM movies WHERE slug='rain-man'),'Tom Cruise','Charlie Babbitt',1),
((SELECT id FROM movies WHERE slug='rain-man'),'Valeria Golino','Susanna',2),

((SELECT id FROM movies WHERE slug='the-firm'),'Tom Cruise','Mitch McDeere',0),
((SELECT id FROM movies WHERE slug='the-firm'),'Gene Hackman','Avery Tolar',1),
((SELECT id FROM movies WHERE slug='the-firm'),'Jeanne Tripplehorn','Abby McDeere',2),

((SELECT id FROM movies WHERE slug='vanilla-sky'),'Tom Cruise','David Aames',0),
((SELECT id FROM movies WHERE slug='vanilla-sky'),'Penélope Cruz','Sofia Serrano',1),
((SELECT id FROM movies WHERE slug='vanilla-sky'),'Cameron Diaz','Julie Gianni',2),

((SELECT id FROM movies WHERE slug='the-mummy-2017'),'Tom Cruise','Nick Morton',0),
((SELECT id FROM movies WHERE slug='the-mummy-2017'),'Sofia Boutella','Ahmanet',1),
((SELECT id FROM movies WHERE slug='the-mummy-2017'),'Russell Crowe','Dr. Henry Jekyll',2),

((SELECT id FROM movies WHERE slug='american-made'),'Tom Cruise','Barry Seal',0),
((SELECT id FROM movies WHERE slug='american-made'),'Domhnall Gleeson','Monty Schafer',1),
((SELECT id FROM movies WHERE slug='american-made'),'Sarah Wright','Lucy Seal',2),

((SELECT id FROM movies WHERE slug='valkyrie'),'Tom Cruise','Col. Claus von Stauffenberg',0),
((SELECT id FROM movies WHERE slug='valkyrie'),'Kenneth Branagh','Maj. Gen. Henning von Tresckow',1),
((SELECT id FROM movies WHERE slug='valkyrie'),'Bill Nighy','Gen. Friedrich Olbricht',2),

((SELECT id FROM movies WHERE slug='knight-and-day'),'Tom Cruise','Roy Miller',0),
((SELECT id FROM movies WHERE slug='knight-and-day'),'Cameron Diaz','June Havens',1),
((SELECT id FROM movies WHERE slug='knight-and-day'),'Peter Sarsgaard','Fitzgerald',2),

((SELECT id FROM movies WHERE slug='days-of-thunder'),'Tom Cruise','Cole Trickle',0),
((SELECT id FROM movies WHERE slug='days-of-thunder'),'Robert Duvall','Harry Hogge',1),
((SELECT id FROM movies WHERE slug='days-of-thunder'),'Nicole Kidman','Dr. Claire Lewicki',2),

((SELECT id FROM movies WHERE slug='born-on-the-fourth-of-july'),'Tom Cruise','Ron Kovic',0),
((SELECT id FROM movies WHERE slug='born-on-the-fourth-of-july'),'Kyra Sedgwick','Donna',1),
((SELECT id FROM movies WHERE slug='born-on-the-fourth-of-july'),'Willem Dafoe','Charlie',2),

((SELECT id FROM movies WHERE slug='risky-business'),'Tom Cruise','Joel Goodson',0),
((SELECT id FROM movies WHERE slug='risky-business'),'Rebecca De Mornay','Lana',1),
((SELECT id FROM movies WHERE slug='risky-business'),'Joe Pantoliano','Guido',2),

((SELECT id FROM movies WHERE slug='interview-with-the-vampire'),'Tom Cruise','Lestat de Lioncourt',0),
((SELECT id FROM movies WHERE slug='interview-with-the-vampire'),'Brad Pitt','Louis de Pointe du Lac',1),
((SELECT id FROM movies WHERE slug='interview-with-the-vampire'),'Kirsten Dunst','Claudia',2),

((SELECT id FROM movies WHERE slug='eyes-wide-shut'),'Tom Cruise','Dr. Bill Harford',0),
((SELECT id FROM movies WHERE slug='eyes-wide-shut'),'Nicole Kidman','Alice Harford',1),
((SELECT id FROM movies WHERE slug='eyes-wide-shut'),'Sydney Pollack','Victor Ziegler',2);
