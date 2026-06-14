-- ============================================================
--  TopHDMovies — Shah Rukh Khan collection (35 films).
--  Bollywood / Hindi. Bilingual overviews. Apply to LOCAL DB,
--  then sync-trailers + sync-tmdb to push posters & trailers.
-- ============================================================
SET NAMES utf8mb4;

INSERT INTO movies
  (title, slug, year, runtime, language, country, rating, status,
   overview, short_description, director, producer, writer,
   is_featured, is_trending, is_top_rated)
VALUES
('Deewana','deewana',1992,168,'Hindi','India',5.7,'published',
 'A young woman who has lost her husband finds love again with a passionate admirer — until her first love returns from the dead. The romantic drama that launched Shah Rukh Khan as a star.\n\nअपने पति को खो चुकी एक युवती को एक जुनूनी प्रशंसक के साथ दोबारा प्यार मिलता है — तभी उसका पहला प्यार वापस लौट आता है। यही रोमांटिक ड्रामा शाहरुख खान को स्टार बनाती है।',
 'A widow''s new love is tested when her first love returns. | एक विधवा का नया प्यार पहले प्यार के लौटने पर परखा जाता है।',
 'Raj Kanwar','Guddu Dhanoa, Lalit Kapoor','Raj Kanwar',0,0,0),

('Baazigar','baazigar',1993,166,'Hindi','India',7.4,'published',
 'A charming young man methodically seduces and destroys a wealthy family to avenge a past wrong — hiding a chilling secret behind his smile. A dark, twist-filled revenge thriller.\n\nएक आकर्षक नौजवान एक पुराने अन्याय का बदला लेने के लिए एक अमीर परिवार को सोच-समझकर तबाह करता है — अपनी मुस्कान के पीछे एक खौफनाक राज़ छिपाए। एक डार्क, ट्विस्ट से भरी बदले की कहानी।',
 'A man plots a chilling revenge on a rich family. | एक आदमी एक अमीर परिवार से खौफनाक बदला लेता है।',
 'Abbas-Mustan','Ganesh Jain','Robin Bhatt, Akash Khurana',0,0,1),

('Darr','darr',1993,166,'Hindi','India',7.1,'published',
 'A young woman becomes the obsession of a dangerously disturbed admirer who will stop at nothing to claim her — even as she builds a life with the man she loves. A tense psychological thriller.\n\nएक युवती एक खतरनाक रूप से सनकी प्रशंसक का जुनून बन जाती है जो उसे पाने के लिए किसी भी हद तक जा सकता है — जबकि वह अपने प्यार के साथ नई ज़िंदगी बसा रही है। एक तनावपूर्ण साइकोलॉजिकल थ्रिलर।',
 'A woman is stalked by a dangerous obsessive. | एक युवती एक खतरनाक सनकी प्रशंसक का शिकार बनती है।',
 'Yash Chopra','Yash Chopra','Honey Irani',0,0,0),

('Karan Arjun','karan-arjun',1995,175,'Hindi','India',7.2,'published',
 'Two brothers murdered by a cruel landlord are reborn, returning years later to fulfil their grieving mother''s unshakeable belief that her sons will come back to avenge her. A blockbuster of family, faith and revenge.\n\nएक क्रूर ज़मींदार द्वारा मारे गए दो भाई पुनर्जन्म लेते हैं और सालों बाद अपनी दुखी माँ के अटूट विश्वास को पूरा करने लौटते हैं कि उसके बेटे बदला लेने ज़रूर आएँगे। परिवार, आस्था और बदले की ब्लॉकबस्टर।',
 'Two murdered brothers are reborn to avenge their mother. | दो भाई पुनर्जन्म लेकर माँ का बदला लेने लौटते हैं।',
 'Rakesh Roshan','Rakesh Roshan','Sachin Bhowmick, Ravi Kapoor',0,0,0),

('Dilwale Dulhania Le Jayenge','dilwale-dulhania-le-jayenge',1995,189,'Hindi','India',8.1,'published',
 'Two young NRIs fall in love on a Europe trip, but her father has promised her hand to another. Instead of eloping, he wins her family''s heart the honourable way. The most beloved romance in Indian cinema.\n\nयूरोप की यात्रा पर दो NRI नौजवानों को प्यार हो जाता है, पर उसके पिता ने उसका हाथ किसी और को देने का वादा कर रखा है। भागने के बजाय वह सम्मान के साथ उसके परिवार का दिल जीतता है। भारतीय सिनेमा की सबसे प्यारी प्रेम कहानी।',
 'Raj wins Simran''s family the honourable way. | राज सम्मान के साथ सिमरन के परिवार का दिल जीतता है।',
 'Aditya Chopra','Yash Chopra','Aditya Chopra',1,0,1),

('Dil To Pagal Hai','dil-to-pagal-hai',1997,177,'Hindi','India',7.1,'published',
 'In the world of a musical theatre troupe, a director, his devoted best friend and a graceful dancer discover that the heart wants what it wants. A vibrant, music-filled romance about destined love.\n\nएक म्यूज़िकल थिएटर मंडली की दुनिया में, एक निर्देशक, उसकी समर्पित दोस्त और एक नाज़ुक नर्तकी पाते हैं कि दिल वही चाहता है जो वह चाहता है। तय किए हुए प्यार की एक रंगीन, संगीत से भरी कहानी।',
 'Love finds its destined path in a dance troupe. | एक डांस मंडली में प्यार अपनी मंज़िल ढूँढ लेता है।',
 'Yash Chopra','Yash Chopra','Yash Chopra',0,0,0),

('Pardes','pardes',1997,193,'Hindi','India',6.6,'published',
 'A simple Indian girl betrothed to an Americanised NRI discovers his true character, and finds an unexpected bond with the humble man sent to bring her abroad. A romantic drama of values and identity.\n\nएक सीधी-सादी भारतीय लड़की, जिसकी सगाई एक अमेरिकीकृत NRI से होती है, उसका असली चरित्र जान लेती है और उसे विदेश ले जाने भेजे गए सादगी भरे आदमी से एक अनपेक्षित रिश्ता बना लेती है। मूल्यों की रोमांटिक ड्रामा।',
 'A girl finds true love amid clashing values. | एक लड़की मूल्यों के टकराव के बीच सच्चा प्यार पाती है।',
 'Subhash Ghai','Subhash Ghai','Subhash Ghai',0,0,0),

('Dil Se','dil-se',1998,163,'Hindi','India',7.7,'published',
 'A radio journalist becomes hopelessly drawn to a mysterious woman with a dark, dangerous secret, in a haunting tale of obsessive love set against political turmoil. A bold, lyrical classic.\n\nएक रेडियो पत्रकार एक रहस्यमयी औरत की ओर बेबस खिंच जाता है जिसके पास एक अंधेरा, खतरनाक राज़ है — राजनीतिक उथल-पुथल के बीच जुनूनी प्यार की एक खौफनाक कहानी। एक बेबाक, काव्यात्मक क्लासिक।',
 'A journalist falls for a woman with a dark secret. | एक पत्रकार एक रहस्यमयी औरत के प्यार में पड़ता है।',
 'Mani Ratnam','Mani Ratnam, Shekhar Kapur','Mani Ratnam',0,0,1),

('Kuch Kuch Hota Hai','kuch-kuch-hota-hai',1998,177,'Hindi','India',7.7,'published',
 'Years after losing the woman he loved, a widowed father is reunited with his college best friend through his daughter''s matchmaking — and discovers love can bloom twice. A timeless feel-good romance.\n\nजिस औरत से वह प्यार करता था उसे खोने के सालों बाद, एक विधुर पिता अपनी बेटी की कोशिशों से अपनी कॉलेज की सबसे अच्छी दोस्त से फिर मिलता है — और पाता है कि प्यार दो बार भी हो सकता है। एक सदाबहार रोमांस।',
 'A father reunites with his college best friend. | एक पिता अपनी कॉलेज की दोस्त से दोबारा मिलता है।',
 'Karan Johar','Yash Johar','Karan Johar',1,0,1),

('Mohabbatein','mohabbatein',2000,216,'Hindi','India',7.2,'published',
 'At a strict, tradition-bound college, a free-spirited music teacher inspires students to follow their hearts — directly defying the iron-willed principal who forbids love. A grand romantic drama of love versus fear.\n\nएक सख्त, परंपरावादी कॉलेज में एक आज़ाद ख़याल संगीत शिक्षक छात्रों को अपने दिल की सुनने की प्रेरणा देता है — सीधे उस कठोर प्रिंसिपल को चुनौती देते हुए जो प्यार पर पाबंदी लगाता है। प्यार बनाम डर की भव्य ड्रामा।',
 'A teacher inspires students to choose love over fear. | एक शिक्षक छात्रों को प्यार चुनने की प्रेरणा देता है।',
 'Aditya Chopra','Yash Chopra','Aditya Chopra',0,0,0),

('Kabhi Khushi Kabhie Gham','kabhi-khushi-kabhie-gham',2001,210,'Hindi','India',7.4,'published',
 'When a wealthy patriarch disowns his adopted son for marrying beneath their class, a family is torn apart — until his younger brother sets out to mend the broken bonds. A lavish, emotional family epic.\n\nजब एक अमीर पिता अपने गोद लिए बेटे को अपनी हैसियत से नीचे शादी करने पर बेदखल कर देता है, तो एक परिवार बिखर जाता है — जब तक उसका छोटा भाई टूटे रिश्तों को जोड़ने नहीं निकल पड़ता। एक भव्य, भावुक फैमिली गाथा।',
 'A son is disowned; family bonds are torn and mended. | एक बेटा बेदखल; बिखरे रिश्ते फिर जुड़ते हैं।',
 'Karan Johar','Yash Johar','Karan Johar',1,0,1),

('Devdas','devdas',2002,185,'Hindi','India',7.5,'published',
 'Forbidden from marrying his childhood love by family pride, a heartbroken aristocrat spirals into despair and drink, finding fleeting solace with a courtesan. A breathtakingly opulent tragic romance.\n\nपरिवार के अभिमान के चलते अपने बचपन के प्यार से शादी न कर पाने पर, एक टूटे दिल वाला रईस निराशा और शराब में डूब जाता है, और एक तवायफ़ के पास क्षणिक सुकून पाता है। बेहद भव्य, दुखद प्रेमकथा।',
 'A heartbroken man spirals after a forbidden love. | एक टूटे दिल वाला आदमी प्यार खोकर बर्बाद हो जाता है।',
 'Sanjay Leela Bhansali','Bharat Shah','Sanjay Leela Bhansali',0,0,1),

('Kal Ho Naa Ho','kal-ho-naa-ho',2003,186,'Hindi','India',7.9,'published',
 'A cheerful stranger transforms the life of a gloomy young woman and her struggling family in New York — while hiding a heartbreaking secret of his own. A joyful, tear-jerking romance about living fully.\n\nएक खुशमिज़ाज अजनबी न्यूयॉर्क में एक उदास युवती और उसके जूझते परिवार की ज़िंदगी बदल देता है — जबकि अपना एक दिल तोड़ देने वाला राज़ छिपाए रखता है। पूरी तरह जीने के बारे में एक खुशनुमा, रुला देने वाला रोमांस।',
 'A joyful stranger changes a family, hiding a secret. | एक खुशमिज़ाज अजनबी एक परिवार बदल देता है।',
 'Nikkhil Advani','Yash Johar, Karan Johar','Karan Johar, Nikkhil Advani',1,0,1),

('Main Hoon Na','main-hoon-na',2004,179,'Hindi','India',7.0,'published',
 'An army officer goes undercover as a college student to protect a general''s daughter and reconnect with his estranged family, all while a vengeful renegade plots chaos. A fun, heartfelt action-drama.\n\nएक फौजी अफसर एक जनरल की बेटी की रक्षा करने और अपने बिछड़े परिवार से दोबारा जुड़ने के लिए कॉलेज छात्र बनकर घुसपैठ करता है, जबकि एक बदला लेने वाला बाग़ी तबाही की साज़िश रचता है। एक मज़ेदार एक्शन-ड्रामा।',
 'An officer goes undercover at a college. | एक फौजी कॉलेज में छात्र बनकर घुसपैठ करता है।',
 'Farah Khan','Gauri Khan','Farah Khan, Abbas Tyrewala',0,0,0),

('Veer-Zaara','veer-zaara',2004,192,'Hindi','India',7.8,'published',
 'An Indian Air Force pilot and a Pakistani woman share a love so profound that he sacrifices decades of his life in silence to protect her honour. A sweeping cross-border romance of timeless devotion.\n\nएक भारतीय वायुसेना पायलट और एक पाकिस्तानी औरत के बीच इतना गहरा प्यार होता है कि वह उसकी इज़्ज़त बचाने के लिए चुपचाप अपनी ज़िंदगी के दशकों कुर्बान कर देता है। सरहद पार एक भव्य, सदाबहार प्रेमकथा।',
 'A pilot sacrifices everything for a cross-border love. | एक पायलट सरहद पार प्यार के लिए सब कुर्बान कर देता है।',
 'Yash Chopra','Yash Chopra, Aditya Chopra','Aditya Chopra',0,0,1),

('Swades','swades',2004,210,'Hindi','India',8.2,'published',
 'A successful NASA scientist returns to his roots in a small Indian village to find his childhood nanny, and is slowly transformed by its people, its struggles and his own forgotten purpose. A profoundly moving drama.\n\nएक कामयाब नासा वैज्ञानिक अपनी बचपन की दाई को ढूँढने एक छोटे भारतीय गाँव में अपनी जड़ों की ओर लौटता है, और वहाँ के लोगों, संघर्षों और अपने भूले हुए मकसद से धीरे-धीरे बदल जाता है। एक बेहद भावुक ड्रामा।',
 'A NASA scientist rediscovers his roots in India. | एक नासा वैज्ञानिक भारत में अपनी जड़ें फिर से खोजता है।',
 'Ashutosh Gowariker','Ashutosh Gowariker, Ronnie Screwvala','Ashutosh Gowariker',0,0,1),

('Don','don',2006,168,'Hindi','India',7.0,'published',
 'When a ruthless crime lord is killed, the police recruit his look-alike to infiltrate the gang — but the deeper the impostor goes, the deadlier the game becomes. A slick, twisty crime thriller.\n\nजब एक बेरहम अपराध सरगना मारा जाता है, तो पुलिस उसके हमशक्ल को गैंग में घुसपैठ के लिए तैयार करती है — पर जितना गहरा वह जाता है, खेल उतना ही खतरनाक होता जाता है। एक स्टाइलिश, ट्विस्ट भरी क्राइम थ्रिलर।',
 'A look-alike infiltrates a crime lord''s gang. | एक हमशक्ल अपराध सरगना के गैंग में घुसता है।',
 'Farhan Akhtar','Ritesh Sidhwani, Farhan Akhtar','Farhan Akhtar',0,0,0),

('Chak De! India','chak-de-india',2007,153,'Hindi','India',8.2,'published',
 'A disgraced former hockey star takes charge of a divided, underdog women''s national team and forges them into champions, redeeming his honour and theirs. An inspiring, rousing sports drama.\n\nएक बदनाम पूर्व हॉकी स्टार एक बिखरी हुई, कमज़ोर समझी जाने वाली महिला राष्ट्रीय टीम की कमान संभालता है और उन्हें चैंपियन बना देता है, अपनी और उनकी इज़्ज़त लौटाते हुए। एक प्रेरणादायक, जोश भर देने वाला स्पोर्ट्स ड्रामा।',
 'A coach turns an underdog team into champions. | एक कोच कमज़ोर टीम को चैंपियन बना देता है।',
 'Shimit Amin','Aditya Chopra, Yash Chopra','Jaideep Sahni',0,0,1),

('Om Shanti Om','om-shanti-om',2007,162,'Hindi','India',6.7,'published',
 'A struggling 1970s film extra murdered alongside the star he adored is reborn decades later as a superstar — and sets out to expose her killer and avenge their past. A dazzling, masala love-and-revenge spectacle.\n\nसत्तर के दशक का एक जूझता फिल्म एक्स्ट्रा, जो उस स्टार के साथ मारा जाता है जिसे वह चाहता था, दशकों बाद एक सुपरस्टार के रूप में पुनर्जन्म लेता है — और उसके हत्यारे को बेनकाब कर बदला लेने निकलता है। एक चकाचौंध मसाला फिल्म।',
 'A reborn extra avenges his lost love. | एक पुनर्जन्मा एक्स्ट्रा अपने खोए प्यार का बदला लेता है।',
 'Farah Khan','Gauri Khan, Shah Rukh Khan','Farah Khan, Mushtaq Sheikh',0,0,0),

('Rab Ne Bana Di Jodi','rab-ne-bana-di-jodi',2008,167,'Hindi','India',7.4,'published',
 'A shy, ordinary office worker, secretly married to a woman who does not love him, invents a flamboyant alter ego to win her heart — and learns that true love sees the soul. A charming, gentle romance.\n\nएक शर्मीला, आम दफ़्तर कर्मचारी, जिसकी शादी एक ऐसी औरत से हुई है जो उससे प्यार नहीं करती, उसका दिल जीतने के लिए एक भड़कीला अलग रूप गढ़ता है — और सीखता है कि सच्चा प्यार रूह को देखता है। एक प्यारा, कोमल रोमांस।',
 'A shy man invents an alter ego to win his wife. | एक शर्मीला आदमी पत्नी का दिल जीतने नया रूप गढ़ता है।',
 'Aditya Chopra','Aditya Chopra','Aditya Chopra',0,0,0),

('My Name Is Khan','my-name-is-khan',2010,165,'Hindi','India',7.9,'published',
 'A man with Asperger''s sets out on a cross-country journey to tell the President of the United States a simple truth — that he is not a terrorist — in a moving story of love, faith and humanity.\n\nएस्पर्जर सिंड्रोम से ग्रस्त एक आदमी अमेरिका के राष्ट्रपति को एक सीधी बात कहने के लिए देश भर की यात्रा पर निकलता है — कि वह आतंकवादी नहीं है — प्यार, आस्था और इंसानियत की एक भावुक कहानी में।',
 'A man journeys to prove he is not a terrorist. | एक आदमी खुद को आतंकवादी न होने का सबूत देने निकलता है।',
 'Karan Johar','Hiroo Yash Johar, Gauri Khan','Shibani Bathija',0,0,1),

('Don 2','don-2',2011,148,'Hindi','India',7.0,'published',
 'Now the most wanted man in the underworld, Don sets his sights on conquering the European crime scene with an audacious heist — staying one step ahead of the police and his own treacherous allies. A sleek action thriller.\n\nअब अंडरवर्ल्ड का सबसे वांछित आदमी बन चुका डॉन एक दुस्साहसी डकैती के ज़रिए यूरोपीय अपराध जगत पर कब्ज़े की ठान लेता है — पुलिस और अपने ही धोखेबाज़ साथियों से एक कदम आगे रहते हुए। एक स्टाइलिश एक्शन थ्रिलर।',
 'Don targets Europe''s crime scene with a bold heist. | डॉन एक बड़ी डकैती से यूरोप पर कब्ज़ा चाहता है।',
 'Farhan Akhtar','Ritesh Sidhwani, Farhan Akhtar','Farhan Akhtar, Ameet Mehta',0,0,0),

('Ra.One','ra-one',2011,156,'Hindi','India',5.2,'published',
 'When a game designer''s deadly virtual villain escapes into the real world, only the game''s superheroic hero can be summoned to stop it — and protect his family. A big-budget sci-fi superhero spectacle.\n\nजब एक गेम डिज़ाइनर का खतरनाक वर्चुअल खलनायक असली दुनिया में भाग निकलता है, तो उसे रोकने और अपने परिवार को बचाने के लिए सिर्फ गेम के सुपरहीरो को बुलाया जा सकता है। एक बड़े बजट की साइ-फाई सुपरहीरो फिल्म।',
 'A game''s villain escapes; its hero must stop it. | गेम का खलनायक भागता है; हीरो को उसे रोकना है।',
 'Anubhav Sinha','Gauri Khan','Anubhav Sinha',0,0,0),

('Jab Tak Hai Jaan','jab-tak-hai-jaan',2012,176,'Hindi','India',6.7,'published',
 'A bomb-disposal officer haunted by a lost love and a vow to God crosses paths with a free-spirited young filmmaker, forcing him to confront the past he has buried. A tender, sweeping romance.\n\nखोए हुए प्यार और भगवान से किए एक वादे से सताया एक बम-निरोधक अफसर एक आज़ाद ख़याल युवा फिल्मकार से टकराता है, जो उसे अपने दफ़न किए अतीत का सामना करने पर मजबूर कर देती है। एक कोमल, भव्य रोमांस।',
 'A haunted officer confronts a buried lost love. | एक अफसर अपने दफ़न किए प्यार का सामना करता है।',
 'Yash Chopra','Aditya Chopra, Yash Chopra','Aditya Chopra, Devika Bhagat',0,0,0),

('Chennai Express','chennai-express',2013,141,'Hindi','India',6.0,'published',
 'A middle-aged man''s simple train journey south spins wildly out of control when he helps a don''s runaway daughter flee — landing him in a riot of comedy, romance and over-the-top action.\n\nएक अधेड़ उम्र के आदमी की साधारण दक्षिण की ट्रेन यात्रा तब बेकाबू हो जाती है जब वह एक डॉन की भागती हुई बेटी की मदद करता है — और कॉमेडी, रोमांस और ज़बरदस्त एक्शन के बवंडर में फँस जाता है।',
 'A train trip turns wild over a don''s daughter. | एक ट्रेन यात्रा एक डॉन की बेटी के चलते बेकाबू हो जाती है।',
 'Rohit Shetty','Gauri Khan, Ronnie Screwvala','K. Subhash, Yunus Sajawal',0,0,0),

('Happy New Year','happy-new-year',2014,180,'Hindi','India',5.0,'published',
 'A band of lovable misfits enters a global dance competition as the perfect cover for an audacious diamond heist — but learns that winning means more than the loot. A glitzy, big-hearted heist comedy.\n\nप्यारे नाकाम लोगों की एक टोली एक दुस्साहसी हीरे की डकैती के बेहतरीन बहाने के तौर पर एक ग्लोबल डांस कॉम्पिटिशन में उतरती है — पर सीखती है कि जीत लूट से कहीं बढ़कर है। एक चमक-धमक भरी हाइस्ट कॉमेडी।',
 'Misfits plan a heist behind a dance contest. | नाकाम लोगों की टोली डांस की आड़ में डकैती करती है।',
 'Farah Khan','Gauri Khan','Farah Khan',0,0,0),

('Dilwale','dilwale',2015,158,'Hindi','India',5.8,'published',
 'Two brothers with a violent, hidden past collide with the present when their younger siblings fall in love — reopening old wounds between two families. A glossy blend of romance, comedy and action.\n\nएक हिंसक, छिपे अतीत वाले दो भाई वर्तमान से तब टकराते हैं जब उनके छोटे भाई-बहन को प्यार हो जाता है — दो परिवारों के पुराने ज़ख्म फिर से खुल जाते हैं। रोमांस, कॉमेडी और एक्शन का चमकदार मेल।',
 'Two families'' hidden pasts collide over young love. | दो परिवारों का छिपा अतीत प्यार से टकराता है।',
 'Rohit Shetty','Gauri Khan, Rohit Shetty','Farhad-Sajid',0,0,0),

('Fan','fan',2016,138,'Hindi','India',7.0,'published',
 'A devoted young lookalike idolises a superstar to the point of obsession — until rejection turns his adoration into a dangerous vendetta. A tense, unusual thriller about fame and identity.\n\nएक समर्पित नौजवान हमशक्ल एक सुपरस्टार को जुनून की हद तक पूजता है — जब तक ठुकराया जाना उसकी भक्ति को एक खतरनाक दुश्मनी में नहीं बदल देता। शोहरत और पहचान पर एक तनावपूर्ण, अलग थ्रिलर।',
 'A superfan''s obsession turns into a vendetta. | एक सुपरफैन का जुनून दुश्मनी में बदल जाता है।',
 'Maneesh Sharma','Aditya Chopra','Habib Faisal',0,0,0),

('Dear Zindagi','dear-zindagi',2016,151,'Hindi','India',7.4,'published',
 'A talented but restless young cinematographer, struggling with relationships and self-doubt, finds clarity and healing through an unconventional therapist. A warm, refreshing coming-of-age drama.\n\nएक प्रतिभाशाली मगर बेचैन युवा सिनेमैटोग्राफर, रिश्तों और आत्म-संदेह से जूझती, एक अनोखे थेरेपिस्ट के ज़रिए साफ़ नज़रिया और सुकून पाती है। एक गर्मजोशी भरी, ताज़गी देने वाली कमिंग-ऑफ-एज ड्रामा।',
 'A young woman heals with help from a therapist. | एक युवती एक थेरेपिस्ट की मदद से सुकून पाती है।',
 'Gauri Shinde','Gauri Khan, Karan Johar','Gauri Shinde',0,0,1),

('Raees','raees',2017,143,'Hindi','India',6.8,'published',
 'A sharp, ambitious bootlegger rises from the streets to rule a liquor empire in dry-state Gujarat, clashing with a relentless police officer determined to bring him down. A gritty crime drama.\n\nएक तेज़, महत्वाकांक्षी शराब तस्कर सड़कों से उठकर शराबबंदी वाले गुजरात में एक शराब साम्राज्य पर राज करता है, और उसे गिराने पर अड़े एक कड़क पुलिस अफसर से भिड़ता है। एक दमदार क्राइम ड्रामा।',
 'A bootlegger builds an empire against the law. | एक शराब तस्कर कानून के खिलाफ साम्राज्य बनाता है।',
 'Rahul Dholakia','Ritesh Sidhwani, Farhan Akhtar, Gauri Khan','Rahul Dholakia, Harit Mehta',0,0,0),

('Jab Harry Met Sejal','jab-harry-met-sejal',2017,143,'Hindi','India',5.6,'published',
 'A jaded Europe tour guide reluctantly helps a chatty engaged woman retrace her steps to find her lost engagement ring — and the journey slowly rewrites both their hearts. A breezy travel romance.\n\nएक थका-हारा यूरोप टूर गाइड एक बातूनी सगाईशुदा औरत की उसकी खोई हुई अंगूठी ढूँढने में बेमन से मदद करता है — और यह सफ़र धीरे-धीरे दोनों के दिल बदल देता है। एक हल्की-फुल्की ट्रैवल रोमांस।',
 'A guide helps a woman find her lost ring. | एक गाइड एक औरत की खोई अंगूठी ढूँढने में मदद करता है।',
 'Imtiaz Ali','Gauri Khan','Imtiaz Ali',0,0,0),

('Zero','zero',2018,164,'Hindi','India',5.4,'published',
 'A spirited man of short stature, brimming with confidence, falls for a brilliant scientist with a disability and a fiery film star — on a larger-than-life journey of love and self-worth. An ambitious romantic drama.\n\nएक जोशीला बौना आदमी, आत्मविश्वास से भरा, एक प्रतिभाशाली दिव्यांग वैज्ञानिक और एक तेज़-तर्रार फिल्म स्टार के प्यार में पड़ जाता है — प्यार और आत्म-सम्मान की एक बड़ी यात्रा पर। एक महत्वाकांक्षी रोमांटिक ड्रामा।',
 'A short-statured man''s grand journey of love. | एक बौने आदमी की प्यार की बड़ी कहानी।',
 'Aanand L. Rai','Gauri Khan, Aanand L. Rai','Himanshu Sharma',0,0,0),

('Pathaan','pathaan',2023,146,'Hindi','India',6.0,'published',
 'An exiled spy comes out of the shadows to stop a rogue private army from unleashing a devastating attack on India — racing across the globe against a ruthless former agent. A high-octane spy blockbuster.\n\nएक निर्वासित जासूस छाया से बाहर निकलकर एक बाग़ी निजी सेना को भारत पर एक विनाशकारी हमला करने से रोकने निकलता है — एक बेरहम पूर्व एजेंट के खिलाफ दुनिया भर में दौड़ लगाते हुए। एक हाई-ऑक्टेन जासूसी ब्लॉकबस्टर।',
 'An exiled spy races to stop an attack on India. | एक जासूस भारत पर हमला रोकने की दौड़ लगाता है।',
 'Siddharth Anand','Aditya Chopra','Shridhar Raghavan, Abbas Tyrewala',1,1,1),

('Jawan','jawan',2023,169,'Hindi','India',7.0,'published',
 'A mysterious man leads a band of women on a high-stakes mission to right society''s wrongs, driven by a personal vendetta that ties him to a long-buried past. A massive, emotionally charged action spectacle.\n\nएक रहस्यमयी आदमी समाज की बुराइयों को सुधारने के एक बड़े मिशन पर महिलाओं की एक टोली का नेतृत्व करता है, एक निजी बदले से प्रेरित जो उसे एक दफ़न अतीत से जोड़ता है। एक विशाल, भावुक एक्शन फिल्म।',
 'A man leads a mission to right society''s wrongs. | एक आदमी समाज की बुराइयों से लड़ने निकलता है।',
 'Atlee','Gauri Khan','Atlee, S. Ramana Girivasan',1,1,1),

('Dunki','dunki',2023,161,'Hindi','India',6.7,'published',
 'Four friends from a Punjab village chase their dream of reaching England through the perilous, illegal "donkey route" — a journey of hope, friendship and belonging told with heart and humour. A moving dramedy.\n\nपंजाब के एक गाँव के चार दोस्त खतरनाक, गैरकानूनी "डंकी रूट" के ज़रिए इंग्लैंड पहुँचने का सपना पूरा करने निकलते हैं — उम्मीद, दोस्ती और अपनेपन की एक कहानी, दिल और हास्य के साथ। एक भावुक ड्रामेडी।',
 'Friends chase a dream abroad via the donkey route. | दोस्त डंकी रूट से विदेश पहुँचने का सपना देखते हैं।',
 'Rajkumar Hirani','Gauri Khan, Rajkumar Hirani','Rajkumar Hirani, Abhijat Joshi',0,1,0);

-- ---------- downloads (Google search) / embeds / trailer placeholder ----------
UPDATE movies SET
  youtube_id='dQw4w9WgXcQ',
  download_480=CONCAT('https://www.google.com/search?q=', REPLACE(REPLACE(REPLACE(title,'&','and'),'*',''),' ','+'), '+', year, '+download+480p'),
  download_720=CONCAT('https://www.google.com/search?q=', REPLACE(REPLACE(REPLACE(title,'&','and'),'*',''),' ','+'), '+', year, '+download+720p'),
  download_1080=CONCAT('https://www.google.com/search?q=', REPLACE(REPLACE(REPLACE(title,'&','and'),'*',''),' ','+'), '+', year, '+download+1080p'),
  embed_480='https://www.youtube.com/embed/dQw4w9WgXcQ',
  embed_720='https://www.youtube.com/embed/dQw4w9WgXcQ',
  embed_1080='https://www.youtube.com/embed/dQw4w9WgXcQ'
WHERE director IS NOT NULL AND slug IN ('deewana','baazigar','darr','karan-arjun','dilwale-dulhania-le-jayenge',
  'dil-to-pagal-hai','pardes','dil-se','kuch-kuch-hota-hai','mohabbatein','kabhi-khushi-kabhie-gham','devdas',
  'kal-ho-naa-ho','main-hoon-na','veer-zaara','swades','don','chak-de-india','om-shanti-om','rab-ne-bana-di-jodi',
  'my-name-is-khan','don-2','ra-one','jab-tak-hai-jaan','chennai-express','happy-new-year','dilwale','fan',
  'dear-zindagi','raees','jab-harry-met-sejal','zero','pathaan','jawan','dunki');

-- ---------- categories: Bollywood + per-film genres ----------
INSERT IGNORE INTO movie_categories (movie_id, category_id)
SELECT m.id, c.id FROM movies m JOIN categories c ON c.slug='bollywood' WHERE m.language='Hindi' AND m.country='India';

INSERT IGNORE INTO movie_categories (movie_id, category_id)
SELECT m.id, c.id FROM movies m JOIN categories c ON c.slug='romance'
WHERE m.slug IN ('deewana','dilwale-dulhania-le-jayenge','dil-to-pagal-hai','pardes','dil-se','kuch-kuch-hota-hai',
  'mohabbatein','devdas','kal-ho-naa-ho','veer-zaara','rab-ne-bana-di-jodi','jab-tak-hai-jaan','jab-harry-met-sejal','dilwale','zero');
INSERT IGNORE INTO movie_categories (movie_id, category_id)
SELECT m.id, c.id FROM movies m JOIN categories c ON c.slug='drama'
WHERE m.slug IN ('deewana','kabhi-khushi-kabhie-gham','devdas','kal-ho-naa-ho','veer-zaara','swades','chak-de-india',
  'my-name-is-khan','dear-zindagi','zero','dunki','mohabbatein','pardes');
INSERT IGNORE INTO movie_categories (movie_id, category_id)
SELECT m.id, c.id FROM movies m JOIN categories c ON c.slug='action'
WHERE m.slug IN ('karan-arjun','main-hoon-na','don','don-2','ra-one','dilwale','pathaan','jawan');
INSERT IGNORE INTO movie_categories (movie_id, category_id)
SELECT m.id, c.id FROM movies m JOIN categories c ON c.slug='thriller'
WHERE m.slug IN ('baazigar','darr','dil-se','don','don-2','fan','pathaan');
INSERT IGNORE INTO movie_categories (movie_id, category_id)
SELECT m.id, c.id FROM movies m JOIN categories c ON c.slug='crime'
WHERE m.slug IN ('baazigar','don','don-2','raees');
INSERT IGNORE INTO movie_categories (movie_id, category_id)
SELECT m.id, c.id FROM movies m JOIN categories c ON c.slug='comedy'
WHERE m.slug IN ('main-hoon-na','chennai-express','happy-new-year','dunki');

-- ---------- genres ----------
INSERT IGNORE INTO movie_genres (movie_id, genre_id)
SELECT m.id, g.id FROM movies m JOIN genres g ON g.slug='romance'
WHERE m.slug IN ('deewana','dilwale-dulhania-le-jayenge','dil-to-pagal-hai','pardes','dil-se','kuch-kuch-hota-hai',
  'mohabbatein','devdas','kal-ho-naa-ho','veer-zaara','rab-ne-bana-di-jodi','jab-tak-hai-jaan','jab-harry-met-sejal','dilwale','zero');
INSERT IGNORE INTO movie_genres (movie_id, genre_id)
SELECT m.id, g.id FROM movies m JOIN genres g ON g.slug='drama'
WHERE m.slug IN ('deewana','baazigar','darr','karan-arjun','dil-to-pagal-hai','pardes','dil-se','mohabbatein',
  'kabhi-khushi-kabhie-gham','devdas','kal-ho-naa-ho','veer-zaara','swades','chak-de-india','my-name-is-khan',
  'jab-tak-hai-jaan','dear-zindagi','raees','zero','dunki','jawan');
INSERT IGNORE INTO movie_genres (movie_id, genre_id)
SELECT m.id, g.id FROM movies m JOIN genres g ON g.slug='action'
WHERE m.slug IN ('karan-arjun','main-hoon-na','don','don-2','ra-one','dilwale','pathaan','jawan');
INSERT IGNORE INTO movie_genres (movie_id, genre_id)
SELECT m.id, g.id FROM movies m JOIN genres g ON g.slug='thriller'
WHERE m.slug IN ('baazigar','darr','dil-se','don','don-2','fan','pathaan','raees');
INSERT IGNORE INTO movie_genres (movie_id, genre_id)
SELECT m.id, g.id FROM movies m JOIN genres g ON g.slug='crime'
WHERE m.slug IN ('baazigar','don','don-2','raees');
INSERT IGNORE INTO movie_genres (movie_id, genre_id)
SELECT m.id, g.id FROM movies m JOIN genres g ON g.slug='comedy'
WHERE m.slug IN ('main-hoon-na','chennai-express','happy-new-year','om-shanti-om','dunki');
INSERT IGNORE INTO movie_genres (movie_id, genre_id)
SELECT m.id, g.id FROM movies m JOIN genres g ON g.slug='sci-fi'
WHERE m.slug IN ('ra-one');

-- ---------- cast ----------
INSERT INTO movie_cast (movie_id, actor_name, character_name, sort_order) VALUES
((SELECT id FROM movies WHERE slug='deewana'),'Shah Rukh Khan','Raja Sahai',0),
((SELECT id FROM movies WHERE slug='deewana'),'Divya Bharti','Kajal',1),
((SELECT id FROM movies WHERE slug='deewana'),'Rishi Kapoor','Ravi',2),
((SELECT id FROM movies WHERE slug='baazigar'),'Shah Rukh Khan','Ajay Sharma / Vicky Malhotra',0),
((SELECT id FROM movies WHERE slug='baazigar'),'Kajol','Priya Chopra',1),
((SELECT id FROM movies WHERE slug='baazigar'),'Shilpa Shetty','Seema Chopra',2),
((SELECT id FROM movies WHERE slug='darr'),'Shah Rukh Khan','Rahul Mehra',0),
((SELECT id FROM movies WHERE slug='darr'),'Juhi Chawla','Kiran Awasthi',1),
((SELECT id FROM movies WHERE slug='darr'),'Sunny Deol','Sunil Malhotra',2),
((SELECT id FROM movies WHERE slug='karan-arjun'),'Shah Rukh Khan','Arjun Singh',0),
((SELECT id FROM movies WHERE slug='karan-arjun'),'Salman Khan','Karan Singh',1),
((SELECT id FROM movies WHERE slug='karan-arjun'),'Kajol','Sonia Saxena',2),
((SELECT id FROM movies WHERE slug='dilwale-dulhania-le-jayenge'),'Shah Rukh Khan','Raj Malhotra',0),
((SELECT id FROM movies WHERE slug='dilwale-dulhania-le-jayenge'),'Kajol','Simran Singh',1),
((SELECT id FROM movies WHERE slug='dilwale-dulhania-le-jayenge'),'Amrish Puri','Chaudhry Baldev Singh',2),
((SELECT id FROM movies WHERE slug='dil-to-pagal-hai'),'Shah Rukh Khan','Rahul',0),
((SELECT id FROM movies WHERE slug='dil-to-pagal-hai'),'Madhuri Dixit','Pooja',1),
((SELECT id FROM movies WHERE slug='dil-to-pagal-hai'),'Karisma Kapoor','Nisha',2),
((SELECT id FROM movies WHERE slug='pardes'),'Shah Rukh Khan','Arjun Saagar',0),
((SELECT id FROM movies WHERE slug='pardes'),'Mahima Chaudhry','Ganga',1),
((SELECT id FROM movies WHERE slug='pardes'),'Amrish Puri','Kishorilal',2),
((SELECT id FROM movies WHERE slug='dil-se'),'Shah Rukh Khan','Amarkant Varma',0),
((SELECT id FROM movies WHERE slug='dil-se'),'Manisha Koirala','Meghna',1),
((SELECT id FROM movies WHERE slug='dil-se'),'Preity Zinta','Preeti Nair',2),
((SELECT id FROM movies WHERE slug='kuch-kuch-hota-hai'),'Shah Rukh Khan','Rahul Khanna',0),
((SELECT id FROM movies WHERE slug='kuch-kuch-hota-hai'),'Kajol','Anjali Sharma',1),
((SELECT id FROM movies WHERE slug='kuch-kuch-hota-hai'),'Rani Mukerji','Tina Malhotra',2),
((SELECT id FROM movies WHERE slug='mohabbatein'),'Shah Rukh Khan','Raj Aryan Malhotra',0),
((SELECT id FROM movies WHERE slug='mohabbatein'),'Amitabh Bachchan','Narayan Shankar',1),
((SELECT id FROM movies WHERE slug='mohabbatein'),'Aishwarya Rai','Megha Shankar',2),
((SELECT id FROM movies WHERE slug='kabhi-khushi-kabhie-gham'),'Shah Rukh Khan','Rahul Raichand',0),
((SELECT id FROM movies WHERE slug='kabhi-khushi-kabhie-gham'),'Kajol','Anjali Sharma',1),
((SELECT id FROM movies WHERE slug='kabhi-khushi-kabhie-gham'),'Amitabh Bachchan','Yashvardhan Raichand',2),
((SELECT id FROM movies WHERE slug='devdas'),'Shah Rukh Khan','Devdas Mukherjee',0),
((SELECT id FROM movies WHERE slug='devdas'),'Aishwarya Rai','Parvati / Paro',1),
((SELECT id FROM movies WHERE slug='devdas'),'Madhuri Dixit','Chandramukhi',2),
((SELECT id FROM movies WHERE slug='kal-ho-naa-ho'),'Shah Rukh Khan','Aman Mathur',0),
((SELECT id FROM movies WHERE slug='kal-ho-naa-ho'),'Preity Zinta','Naina Catherine Kapur',1),
((SELECT id FROM movies WHERE slug='kal-ho-naa-ho'),'Saif Ali Khan','Rohit Patel',2),
((SELECT id FROM movies WHERE slug='main-hoon-na'),'Shah Rukh Khan','Major Ram Prasad Sharma',0),
((SELECT id FROM movies WHERE slug='main-hoon-na'),'Sushmita Sen','Chandni',1),
((SELECT id FROM movies WHERE slug='main-hoon-na'),'Zayed Khan','Lakshman Prasad Sharma',2),
((SELECT id FROM movies WHERE slug='veer-zaara'),'Shah Rukh Khan','Veer Pratap Singh',0),
((SELECT id FROM movies WHERE slug='veer-zaara'),'Preity Zinta','Zaara Hayaat Khan',1),
((SELECT id FROM movies WHERE slug='veer-zaara'),'Rani Mukerji','Saamiya Siddiqui',2),
((SELECT id FROM movies WHERE slug='swades'),'Shah Rukh Khan','Mohan Bhargav',0),
((SELECT id FROM movies WHERE slug='swades'),'Gayatri Joshi','Gita',1),
((SELECT id FROM movies WHERE slug='don'),'Shah Rukh Khan','Don / Vijay',0),
((SELECT id FROM movies WHERE slug='don'),'Priyanka Chopra','Roma',1),
((SELECT id FROM movies WHERE slug='don'),'Arjun Rampal','Jasjit',2),
((SELECT id FROM movies WHERE slug='chak-de-india'),'Shah Rukh Khan','Kabir Khan',0),
((SELECT id FROM movies WHERE slug='chak-de-india'),'Vidya Malvade','Vidya Sharma',1),
((SELECT id FROM movies WHERE slug='om-shanti-om'),'Shah Rukh Khan','Om Prakash Makhija / Om Kapoor',0),
((SELECT id FROM movies WHERE slug='om-shanti-om'),'Deepika Padukone','Shanti Priya / Sandy',1),
((SELECT id FROM movies WHERE slug='om-shanti-om'),'Arjun Rampal','Mukesh Mehra',2),
((SELECT id FROM movies WHERE slug='rab-ne-bana-di-jodi'),'Shah Rukh Khan','Surinder Sahni / Raj',0),
((SELECT id FROM movies WHERE slug='rab-ne-bana-di-jodi'),'Anushka Sharma','Taani',1),
((SELECT id FROM movies WHERE slug='my-name-is-khan'),'Shah Rukh Khan','Rizwan Khan',0),
((SELECT id FROM movies WHERE slug='my-name-is-khan'),'Kajol','Mandira',1),
((SELECT id FROM movies WHERE slug='don-2'),'Shah Rukh Khan','Don',0),
((SELECT id FROM movies WHERE slug='don-2'),'Priyanka Chopra','Roma',1),
((SELECT id FROM movies WHERE slug='don-2'),'Lara Dutta','Ayesha',2),
((SELECT id FROM movies WHERE slug='ra-one'),'Shah Rukh Khan','Shekhar Subramaniam / G.One',0),
((SELECT id FROM movies WHERE slug='ra-one'),'Kareena Kapoor','Sonia Subramaniam',1),
((SELECT id FROM movies WHERE slug='ra-one'),'Arjun Rampal','Ra.One',2),
((SELECT id FROM movies WHERE slug='jab-tak-hai-jaan'),'Shah Rukh Khan','Samar Anand',0),
((SELECT id FROM movies WHERE slug='jab-tak-hai-jaan'),'Katrina Kaif','Meera Thapar',1),
((SELECT id FROM movies WHERE slug='jab-tak-hai-jaan'),'Anushka Sharma','Akira Rai',2),
((SELECT id FROM movies WHERE slug='chennai-express'),'Shah Rukh Khan','Rahul Mithaiwala',0),
((SELECT id FROM movies WHERE slug='chennai-express'),'Deepika Padukone','Meenamma',1),
((SELECT id FROM movies WHERE slug='happy-new-year'),'Shah Rukh Khan','Charlie',0),
((SELECT id FROM movies WHERE slug='happy-new-year'),'Deepika Padukone','Mohini',1),
((SELECT id FROM movies WHERE slug='happy-new-year'),'Abhishek Bachchan','Nandu Bhide',2),
((SELECT id FROM movies WHERE slug='dilwale'),'Shah Rukh Khan','Raj / Kaali',0),
((SELECT id FROM movies WHERE slug='dilwale'),'Kajol','Meera',1),
((SELECT id FROM movies WHERE slug='dilwale'),'Varun Dhawan','Veer',2),
((SELECT id FROM movies WHERE slug='fan'),'Shah Rukh Khan','Aryan Khanna / Gaurav',0),
((SELECT id FROM movies WHERE slug='fan'),'Waluscha de Sousa','Nandita',1),
((SELECT id FROM movies WHERE slug='dear-zindagi'),'Alia Bhatt','Kaira',0),
((SELECT id FROM movies WHERE slug='dear-zindagi'),'Shah Rukh Khan','Dr. Jehangir Khan (Jug)',1),
((SELECT id FROM movies WHERE slug='raees'),'Shah Rukh Khan','Raees Alam',0),
((SELECT id FROM movies WHERE slug='raees'),'Mahira Khan','Aasiya',1),
((SELECT id FROM movies WHERE slug='raees'),'Nawazuddin Siddiqui','Jaideep Ambalal Majmudar',2),
((SELECT id FROM movies WHERE slug='jab-harry-met-sejal'),'Shah Rukh Khan','Harinder "Harry" Singh Nehra',0),
((SELECT id FROM movies WHERE slug='jab-harry-met-sejal'),'Anushka Sharma','Sejal Zaveri',1),
((SELECT id FROM movies WHERE slug='zero'),'Shah Rukh Khan','Bauua Singh',0),
((SELECT id FROM movies WHERE slug='zero'),'Anushka Sharma','Aafia Yusufzai Bhinder',1),
((SELECT id FROM movies WHERE slug='zero'),'Katrina Kaif','Babita Kumari',2),
((SELECT id FROM movies WHERE slug='pathaan'),'Shah Rukh Khan','Pathaan',0),
((SELECT id FROM movies WHERE slug='pathaan'),'Deepika Padukone','Rubai',1),
((SELECT id FROM movies WHERE slug='pathaan'),'John Abraham','Jim',2),
((SELECT id FROM movies WHERE slug='jawan'),'Shah Rukh Khan','Vikram Rathore / Azad',0),
((SELECT id FROM movies WHERE slug='jawan'),'Nayanthara','Narmada Rai',1),
((SELECT id FROM movies WHERE slug='jawan'),'Vijay Sethupathi','Kalee Gaikwad',2),
((SELECT id FROM movies WHERE slug='dunki'),'Shah Rukh Khan','Hardayal "Hardy" Singh Dhillon',0),
((SELECT id FROM movies WHERE slug='dunki'),'Taapsee Pannu','Manu',1),
((SELECT id FROM movies WHERE slug='dunki'),'Vicky Kaushal','Sukhi',2);
