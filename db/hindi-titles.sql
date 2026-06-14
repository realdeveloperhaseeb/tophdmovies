-- ============================================================
--  TopHDMovies — Hindi titles (title_hi) for every movie.
--  Apply to LOCAL DB, then push live with: node scripts/sync-text.mjs
--  (live DB auto-adds the title_hi column via /api/sync ensureSchema.)
-- ============================================================
SET NAMES utf8mb4;

-- MCU
UPDATE movies SET title_hi='आयरन मैन' WHERE slug='iron-man';
UPDATE movies SET title_hi='द इनक्रेडिबल हल्क' WHERE slug='the-incredible-hulk';
UPDATE movies SET title_hi='आयरन मैन 2' WHERE slug='iron-man-2';
UPDATE movies SET title_hi='थॉर' WHERE slug='thor';
UPDATE movies SET title_hi='कैप्टन अमेरिका: द फर्स्ट एवेंजर' WHERE slug='captain-america-the-first-avenger';
UPDATE movies SET title_hi='द एवेंजर्स' WHERE slug='the-avengers';
UPDATE movies SET title_hi='आयरन मैन 3' WHERE slug='iron-man-3';
UPDATE movies SET title_hi='थॉर: द डार्क वर्ल्ड' WHERE slug='thor-the-dark-world';
UPDATE movies SET title_hi='कैप्टन अमेरिका: द विंटर सोल्जर' WHERE slug='captain-america-the-winter-soldier';
UPDATE movies SET title_hi='गार्डियंस ऑफ़ द गैलेक्सी' WHERE slug='guardians-of-the-galaxy';
UPDATE movies SET title_hi='एवेंजर्स: एज ऑफ़ अल्ट्रॉन' WHERE slug='avengers-age-of-ultron';
UPDATE movies SET title_hi='एंट-मैन' WHERE slug='ant-man';
UPDATE movies SET title_hi='कैप्टन अमेरिका: सिविल वॉर' WHERE slug='captain-america-civil-war';
UPDATE movies SET title_hi='डॉक्टर स्ट्रेंज' WHERE slug='doctor-strange';
UPDATE movies SET title_hi='गार्डियंस ऑफ़ द गैलेक्सी वॉल्यूम 2' WHERE slug='guardians-of-the-galaxy-vol-2';
UPDATE movies SET title_hi='स्पाइडर-मैन: होमकमिंग' WHERE slug='spider-man-homecoming';
UPDATE movies SET title_hi='थॉर: रैगनारोक' WHERE slug='thor-ragnarok';
UPDATE movies SET title_hi='ब्लैक पैंथर' WHERE slug='black-panther';
UPDATE movies SET title_hi='एवेंजर्स: इन्फिनिटी वॉर' WHERE slug='avengers-infinity-war';
UPDATE movies SET title_hi='एंट-मैन एंड द वास्प' WHERE slug='ant-man-and-the-wasp';
UPDATE movies SET title_hi='कैप्टन मार्वल' WHERE slug='captain-marvel';
UPDATE movies SET title_hi='एवेंजर्स: एंडगेम' WHERE slug='avengers-endgame';
UPDATE movies SET title_hi='स्पाइडर-मैन: फार फ्रॉम होम' WHERE slug='spider-man-far-from-home';
UPDATE movies SET title_hi='ब्लैक विडो' WHERE slug='black-widow';
UPDATE movies SET title_hi='शांग-ची एंड द लेजेंड ऑफ़ द टेन रिंग्स' WHERE slug='shang-chi-and-the-legend-of-the-ten-rings';
UPDATE movies SET title_hi='इटरनल्स' WHERE slug='eternals';
UPDATE movies SET title_hi='स्पाइडर-मैन: नो वे होम' WHERE slug='spider-man-no-way-home';
UPDATE movies SET title_hi='डॉक्टर स्ट्रेंज इन द मल्टीवर्स ऑफ़ मैडनेस' WHERE slug='doctor-strange-in-the-multiverse-of-madness';
UPDATE movies SET title_hi='थॉर: लव एंड थंडर' WHERE slug='thor-love-and-thunder';
UPDATE movies SET title_hi='ब्लैक पैंथर: वकांडा फॉरएवर' WHERE slug='black-panther-wakanda-forever';
UPDATE movies SET title_hi='एंट-मैन एंड द वास्प: क्वांटमेनिया' WHERE slug='ant-man-and-the-wasp-quantumania';
UPDATE movies SET title_hi='गार्डियंस ऑफ़ द गैलेक्सी वॉल्यूम 3' WHERE slug='guardians-of-the-galaxy-vol-3';
UPDATE movies SET title_hi='द मार्वल्स' WHERE slug='the-marvels';
UPDATE movies SET title_hi='डेडपूल एंड वॉल्वरिन' WHERE slug='deadpool-and-wolverine';
UPDATE movies SET title_hi='कैप्टन अमेरिका: ब्रेव न्यू वर्ल्ड' WHERE slug='captain-america-brave-new-world';
UPDATE movies SET title_hi='थंडरबोल्ट्स' WHERE slug='thunderbolts';
UPDATE movies SET title_hi='द फैंटास्टिक फोर: फर्स्ट स्टेप्स' WHERE slug='the-fantastic-four-first-steps';

-- Mission: Impossible
UPDATE movies SET title_hi='मिशन: इम्पॉसिबल' WHERE slug='mission-impossible';
UPDATE movies SET title_hi='मिशन: इम्पॉसिबल 2' WHERE slug='mission-impossible-2';
UPDATE movies SET title_hi='मिशन: इम्पॉसिबल 3' WHERE slug='mission-impossible-iii';
UPDATE movies SET title_hi='मिशन: इम्पॉसिबल - घोस्ट प्रोटोकॉल' WHERE slug='mission-impossible-ghost-protocol';
UPDATE movies SET title_hi='मिशन: इम्पॉसिबल - रोग नेशन' WHERE slug='mission-impossible-rogue-nation';
UPDATE movies SET title_hi='मिशन: इम्पॉसिबल - फॉलआउट' WHERE slug='mission-impossible-fallout';
UPDATE movies SET title_hi='मिशन: इम्पॉसिबल - डेड रेकनिंग पार्ट वन' WHERE slug='mission-impossible-dead-reckoning-part-one';
UPDATE movies SET title_hi='मिशन: इम्पॉसिबल - द फाइनल रेकनिंग' WHERE slug='mission-impossible-the-final-reckoning';

-- Demo seed titles
UPDATE movies SET title_hi='एकोज़ ऑफ़ टुमॉरो' WHERE slug='echoes-of-tomorrow';
UPDATE movies SET title_hi='द लास्ट मानसून' WHERE slug='the-last-monsoon';
UPDATE movies SET title_hi='मिडनाइट वॉल्ट' WHERE slug='midnight-vault';
UPDATE movies SET title_hi='पेपर लैंटर्न्स' WHERE slug='paper-lanterns';
UPDATE movies SET title_hi='हॉलो क्रीक' WHERE slug='hollow-creek';
UPDATE movies SET title_hi='स्टारफॉल ब्रिगेड' WHERE slug='starfall-brigade';
