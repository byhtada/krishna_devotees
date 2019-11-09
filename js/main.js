$(document).ready(function () {
  var api_url      = "https://hyls-api.ru:443/";

    var cookie_name_token = "krishna_token";
    var cookie_name_id    = "krishna_id";
    var cookie_token      = getCookie(cookie_name_token);


    var songs = [

        {   title: "Akrodha Paramānanda",
            description: "~ Pañca-tattva » The Wonderful Qualities of Nityānanda Prabhu ~",
            author: "Śrīla Locana dāsa Ṭhākura",
            subject: "subject akrodha",
            first_verse: "akrodha paramānanda nityānanda rāya",
            content: [

                {script: "অক্রোধ পরমানন্দ নিত্যানন্দ-রায় ।<br/>" +
                         "অভিমান-শূন্য নিতাই নগরে বেড়ায় ।।১।।",
                        verse: "akrodha paramānanda nityānanda rāya<br/>" +
                               "abhimāna-śūnya nitāi nagare beḓāya (1)",
                        wfw: "① akrodh—free from anger; param—supreme; ānanda—bliss; nityānanda—Nityānanda Prabhu; rāy—noble; ② abhimān—false ego; śūnya—devoid; nitāi—Nitāi; nagare—throughout the town; beḓāy—wanders.",
                        translation: "The noble Nityānanda Prabhu, the personification of supreme transcendental bliss, is never angry. Devoid of all false ego, He wanders throughout the town."},

                {script: "অধম পতিত জীবের দ্বারে দ্বারে গিয়া ।<br/>" +
                    "হরিনাম-মহামন্ত্র দিচ্ছেন বিলাইয়া ।।২।।",
                    verse: "adhama patita jīber dvāre dvāre giyā<br/>" +
                    "harināma-mahāmantra dicchena bilāiyā (2)",
                    wfw: "① adham—lowly; patit—fallen; jīber—of souls; dvāre dvāre—from door to door; giyā—having gone; ② harinām-mahāmantra—the hare kṛṣṇa mahā-mantra; dicchen—he is giving; bilāiyā—having distributed.",
                    translation: "Going from door to door among the residences of lowly and fallen souls, He freely distributes the harināma mahā-mantra."},

                {script: "এত বলি’ নিত্যানন্দ ভূমে গড়ি’ যায় ।<br/>" +
                    "সোনার পর্ব্বত যেন ধূলাতে লোটায় ।।৪।।",
                    verse: "etô bôli’ nityānanda bhūme gaḓi’ ĵāya<br/>" +
                            "sonāra parbata ĵenô dhūlāte loṭāya (4)",
                    wfw: "① ĵā’re—to whom; dekhe—he sees; tā’re—to them; kahe—he says; dante—in teeth; tṛṇa—straw; dhôri’—having held; ② āmāre—to me; kiniyā lahô—purtchase for yourself [lit. having purchased, take]; bôlô—call out; gaurhari—Gaurahari.",
                    translation: "Holding a straw in His teeth, He calls out to whomever He sees, “Please purchase Me by calling out ‘Gaurahari!’ ”"},

                {script: "অধম পতিত জীবের দ্বারে দ্বারে গিয়া ।<br/>" +
                    "হরিনাম-মহামন্ত্র দিচ্ছেন বিলাইয়া ।।২।।",
                    verse: "adhama patita jīber dvāre dvāre giyā<br/>" +
                    "harināma-mahāmantra dicchena bilāiyā (2)",
                    wfw: "① adham—lowly; patit—fallen; jīber—of souls; dvāre dvāre—from door to door; giyā—having gone; ② harinām-mahāmantra—the hare kṛṣṇa mahā-mantra; dicchen—he is giving; bilāiyā—having distributed.",
                    translation: "Going from door to door among the residences of lowly and fallen souls, He freely distributes the harināma mahā-mantra."},


            ]},
        {   title: "Akrodha Paramānanda",
            description: "~ Pañca-tattva » The Wonderful Qualities of Nityānanda Prabhu ~",
            author: "Śrīla Locana dāsa Ṭhākura",
            subject: "subject akrodha",
            first_verse: "akrodha paramānanda nityānanda rāya",
            content: [

                {script: "অক্রোধ পরমানন্দ নিত্যানন্দ-রায় ।<br/>" +
                         "অভিমান-শূন্য নিতাই নগরে বেড়ায় ।।১।।",
                        verse: "akrodha paramānanda nityānanda rāya<br/>" +
                               "abhimāna-śūnya nitāi nagare beḓāya (1)",
                        wfw: "① akrodh—free from anger; param—supreme; ānanda—bliss; nityānanda—Nityānanda Prabhu; rāy—noble; ② abhimān—false ego; śūnya—devoid; nitāi—Nitāi; nagare—throughout the town; beḓāy—wanders.",
                        translation: "The noble Nityānanda Prabhu, the personification of supreme transcendental bliss, is never angry. Devoid of all false ego, He wanders throughout the town."},

                {script: "অধম পতিত জীবের দ্বারে দ্বারে গিয়া ।<br/>" +
                    "হরিনাম-মহামন্ত্র দিচ্ছেন বিলাইয়া ।।২।।",
                    verse: "adhama patita jīber dvāre dvāre giyā<br/>" +
                    "harināma-mahāmantra dicchena bilāiyā (2)",
                    wfw: "① adham—lowly; patit—fallen; jīber—of souls; dvāre dvāre—from door to door; giyā—having gone; ② harinām-mahāmantra—the hare kṛṣṇa mahā-mantra; dicchen—he is giving; bilāiyā—having distributed.",
                    translation: "Going from door to door among the residences of lowly and fallen souls, He freely distributes the harināma mahā-mantra."},

                {script: "এত বলি’ নিত্যানন্দ ভূমে গড়ি’ যায় ।<br/>" +
                    "সোনার পর্ব্বত যেন ধূলাতে লোটায় ।।৪।।",
                    verse: "etô bôli’ nityānanda bhūme gaḓi’ ĵāya<br/>" +
                            "sonāra parbata ĵenô dhūlāte loṭāya (4)",
                    wfw: "① ĵā’re—to whom; dekhe—he sees; tā’re—to them; kahe—he says; dante—in teeth; tṛṇa—straw; dhôri’—having held; ② āmāre—to me; kiniyā lahô—purtchase for yourself [lit. having purchased, take]; bôlô—call out; gaurhari—Gaurahari.",
                    translation: "Holding a straw in His teeth, He calls out to whomever He sees, “Please purchase Me by calling out ‘Gaurahari!’ ”"},

                {script: "অধম পতিত জীবের দ্বারে দ্বারে গিয়া ।<br/>" +
                    "হরিনাম-মহামন্ত্র দিচ্ছেন বিলাইয়া ।।২।।",
                    verse: "adhama patita jīber dvāre dvāre giyā<br/>" +
                    "harināma-mahāmantra dicchena bilāiyā (2)",
                    wfw: "① adham—lowly; patit—fallen; jīber—of souls; dvāre dvāre—from door to door; giyā—having gone; ② harinām-mahāmantra—the hare kṛṣṇa mahā-mantra; dicchen—he is giving; bilāiyā—having distributed.",
                    translation: "Going from door to door among the residences of lowly and fallen souls, He freely distributes the harināma mahā-mantra."},


            ]},
        {   title: "Akrodha Paramānanda",
            description: "~ Pañca-tattva » The Wonderful Qualities of Nityānanda Prabhu ~",
            author: "Śrīla Locana dāsa Ṭhākura",
            subject: "subject akrodha",
            first_verse: "akrodha paramānanda nityānanda rāya",
            content: [

                {script: "অক্রোধ পরমানন্দ নিত্যানন্দ-রায় ।<br/>" +
                         "অভিমান-শূন্য নিতাই নগরে বেড়ায় ।।১।।",
                        verse: "akrodha paramānanda nityānanda rāya<br/>" +
                               "abhimāna-śūnya nitāi nagare beḓāya (1)",
                        wfw: "① akrodh—free from anger; param—supreme; ānanda—bliss; nityānanda—Nityānanda Prabhu; rāy—noble; ② abhimān—false ego; śūnya—devoid; nitāi—Nitāi; nagare—throughout the town; beḓāy—wanders.",
                        translation: "The noble Nityānanda Prabhu, the personification of supreme transcendental bliss, is never angry. Devoid of all false ego, He wanders throughout the town."},

                {script: "অধম পতিত জীবের দ্বারে দ্বারে গিয়া ।<br/>" +
                    "হরিনাম-মহামন্ত্র দিচ্ছেন বিলাইয়া ।।২।।",
                    verse: "adhama patita jīber dvāre dvāre giyā<br/>" +
                    "harināma-mahāmantra dicchena bilāiyā (2)",
                    wfw: "① adham—lowly; patit—fallen; jīber—of souls; dvāre dvāre—from door to door; giyā—having gone; ② harinām-mahāmantra—the hare kṛṣṇa mahā-mantra; dicchen—he is giving; bilāiyā—having distributed.",
                    translation: "Going from door to door among the residences of lowly and fallen souls, He freely distributes the harināma mahā-mantra."},

                {script: "এত বলি’ নিত্যানন্দ ভূমে গড়ি’ যায় ।<br/>" +
                    "সোনার পর্ব্বত যেন ধূলাতে লোটায় ।।৪।।",
                    verse: "etô bôli’ nityānanda bhūme gaḓi’ ĵāya<br/>" +
                            "sonāra parbata ĵenô dhūlāte loṭāya (4)",
                    wfw: "① ĵā’re—to whom; dekhe—he sees; tā’re—to them; kahe—he says; dante—in teeth; tṛṇa—straw; dhôri’—having held; ② āmāre—to me; kiniyā lahô—purtchase for yourself [lit. having purchased, take]; bôlô—call out; gaurhari—Gaurahari.",
                    translation: "Holding a straw in His teeth, He calls out to whomever He sees, “Please purchase Me by calling out ‘Gaurahari!’ ”"},

                {script: "অধম পতিত জীবের দ্বারে দ্বারে গিয়া ।<br/>" +
                    "হরিনাম-মহামন্ত্র দিচ্ছেন বিলাইয়া ।।২।।",
                    verse: "adhama patita jīber dvāre dvāre giyā<br/>" +
                    "harināma-mahāmantra dicchena bilāiyā (2)",
                    wfw: "① adham—lowly; patit—fallen; jīber—of souls; dvāre dvāre—from door to door; giyā—having gone; ② harinām-mahāmantra—the hare kṛṣṇa mahā-mantra; dicchen—he is giving; bilāiyā—having distributed.",
                    translation: "Going from door to door among the residences of lowly and fallen souls, He freely distributes the harināma mahā-mantra."},


            ]},
        {   title: "Akrodha Paramānanda",
            description: "~ Pañca-tattva » The Wonderful Qualities of Nityānanda Prabhu ~",
            author: "Śrīla Locana dāsa Ṭhākura",
            subject: "subject akrodha",
            first_verse: "akrodha paramānanda nityānanda rāya",
            content: [

                {script: "অক্রোধ পরমানন্দ নিত্যানন্দ-রায় ।<br/>" +
                         "অভিমান-শূন্য নিতাই নগরে বেড়ায় ।।১।।",
                        verse: "akrodha paramānanda nityānanda rāya<br/>" +
                               "abhimāna-śūnya nitāi nagare beḓāya (1)",
                        wfw: "① akrodh—free from anger; param—supreme; ānanda—bliss; nityānanda—Nityānanda Prabhu; rāy—noble; ② abhimān—false ego; śūnya—devoid; nitāi—Nitāi; nagare—throughout the town; beḓāy—wanders.",
                        translation: "The noble Nityānanda Prabhu, the personification of supreme transcendental bliss, is never angry. Devoid of all false ego, He wanders throughout the town."},

                {script: "অধম পতিত জীবের দ্বারে দ্বারে গিয়া ।<br/>" +
                    "হরিনাম-মহামন্ত্র দিচ্ছেন বিলাইয়া ।।২।।",
                    verse: "adhama patita jīber dvāre dvāre giyā<br/>" +
                    "harināma-mahāmantra dicchena bilāiyā (2)",
                    wfw: "① adham—lowly; patit—fallen; jīber—of souls; dvāre dvāre—from door to door; giyā—having gone; ② harinām-mahāmantra—the hare kṛṣṇa mahā-mantra; dicchen—he is giving; bilāiyā—having distributed.",
                    translation: "Going from door to door among the residences of lowly and fallen souls, He freely distributes the harināma mahā-mantra."},

                {script: "এত বলি’ নিত্যানন্দ ভূমে গড়ি’ যায় ।<br/>" +
                    "সোনার পর্ব্বত যেন ধূলাতে লোটায় ।।৪।।",
                    verse: "etô bôli’ nityānanda bhūme gaḓi’ ĵāya<br/>" +
                            "sonāra parbata ĵenô dhūlāte loṭāya (4)",
                    wfw: "① ĵā’re—to whom; dekhe—he sees; tā’re—to them; kahe—he says; dante—in teeth; tṛṇa—straw; dhôri’—having held; ② āmāre—to me; kiniyā lahô—purtchase for yourself [lit. having purchased, take]; bôlô—call out; gaurhari—Gaurahari.",
                    translation: "Holding a straw in His teeth, He calls out to whomever He sees, “Please purchase Me by calling out ‘Gaurahari!’ ”"},

                {script: "অধম পতিত জীবের দ্বারে দ্বারে গিয়া ।<br/>" +
                    "হরিনাম-মহামন্ত্র দিচ্ছেন বিলাইয়া ।।২।।",
                    verse: "adhama patita jīber dvāre dvāre giyā<br/>" +
                    "harināma-mahāmantra dicchena bilāiyā (2)",
                    wfw: "① adham—lowly; patit—fallen; jīber—of souls; dvāre dvāre—from door to door; giyā—having gone; ② harinām-mahāmantra—the hare kṛṣṇa mahā-mantra; dicchen—he is giving; bilāiyā—having distributed.",
                    translation: "Going from door to door among the residences of lowly and fallen souls, He freely distributes the harināma mahā-mantra."},


            ]},
        {   title: "Akrodha Paramānanda",
            description: "~ Pañca-tattva » The Wonderful Qualities of Nityānanda Prabhu ~",
            author: "Śrīla Locana dāsa Ṭhākura",
            subject: "subject akrodha",
            first_verse: "akrodha paramānanda nityānanda rāya",
            content: [

                {script: "অক্রোধ পরমানন্দ নিত্যানন্দ-রায় ।<br/>" +
                         "অভিমান-শূন্য নিতাই নগরে বেড়ায় ।।১।।",
                        verse: "akrodha paramānanda nityānanda rāya<br/>" +
                               "abhimāna-śūnya nitāi nagare beḓāya (1)",
                        wfw: "① akrodh—free from anger; param—supreme; ānanda—bliss; nityānanda—Nityānanda Prabhu; rāy—noble; ② abhimān—false ego; śūnya—devoid; nitāi—Nitāi; nagare—throughout the town; beḓāy—wanders.",
                        translation: "The noble Nityānanda Prabhu, the personification of supreme transcendental bliss, is never angry. Devoid of all false ego, He wanders throughout the town."},

                {script: "অধম পতিত জীবের দ্বারে দ্বারে গিয়া ।<br/>" +
                    "হরিনাম-মহামন্ত্র দিচ্ছেন বিলাইয়া ।।২।।",
                    verse: "adhama patita jīber dvāre dvāre giyā<br/>" +
                    "harināma-mahāmantra dicchena bilāiyā (2)",
                    wfw: "① adham—lowly; patit—fallen; jīber—of souls; dvāre dvāre—from door to door; giyā—having gone; ② harinām-mahāmantra—the hare kṛṣṇa mahā-mantra; dicchen—he is giving; bilāiyā—having distributed.",
                    translation: "Going from door to door among the residences of lowly and fallen souls, He freely distributes the harināma mahā-mantra."},

                {script: "এত বলি’ নিত্যানন্দ ভূমে গড়ি’ যায় ।<br/>" +
                    "সোনার পর্ব্বত যেন ধূলাতে লোটায় ।।৪।।",
                    verse: "etô bôli’ nityānanda bhūme gaḓi’ ĵāya<br/>" +
                            "sonāra parbata ĵenô dhūlāte loṭāya (4)",
                    wfw: "① ĵā’re—to whom; dekhe—he sees; tā’re—to them; kahe—he says; dante—in teeth; tṛṇa—straw; dhôri’—having held; ② āmāre—to me; kiniyā lahô—purtchase for yourself [lit. having purchased, take]; bôlô—call out; gaurhari—Gaurahari.",
                    translation: "Holding a straw in His teeth, He calls out to whomever He sees, “Please purchase Me by calling out ‘Gaurahari!’ ”"},

                {script: "অধম পতিত জীবের দ্বারে দ্বারে গিয়া ।<br/>" +
                    "হরিনাম-মহামন্ত্র দিচ্ছেন বিলাইয়া ।।২।।",
                    verse: "adhama patita jīber dvāre dvāre giyā<br/>" +
                    "harināma-mahāmantra dicchena bilāiyā (2)",
                    wfw: "① adham—lowly; patit—fallen; jīber—of souls; dvāre dvāre—from door to door; giyā—having gone; ② harinām-mahāmantra—the hare kṛṣṇa mahā-mantra; dicchen—he is giving; bilāiyā—having distributed.",
                    translation: "Going from door to door among the residences of lowly and fallen souls, He freely distributes the harināma mahā-mantra."},


            ]},
        {   title: "Akrodha Paramānanda",
            description: "~ Pañca-tattva » The Wonderful Qualities of Nityānanda Prabhu ~",
            author: "Śrīla Locana dāsa Ṭhākura",
            subject: "subject akrodha",
            first_verse: "akrodha paramānanda nityānanda rāya",
            content: [

                {script: "অক্রোধ পরমানন্দ নিত্যানন্দ-রায় ।<br/>" +
                         "অভিমান-শূন্য নিতাই নগরে বেড়ায় ।।১।।",
                        verse: "akrodha paramānanda nityānanda rāya<br/>" +
                               "abhimāna-śūnya nitāi nagare beḓāya (1)",
                        wfw: "① akrodh—free from anger; param—supreme; ānanda—bliss; nityānanda—Nityānanda Prabhu; rāy—noble; ② abhimān—false ego; śūnya—devoid; nitāi—Nitāi; nagare—throughout the town; beḓāy—wanders.",
                        translation: "The noble Nityānanda Prabhu, the personification of supreme transcendental bliss, is never angry. Devoid of all false ego, He wanders throughout the town."},

                {script: "অধম পতিত জীবের দ্বারে দ্বারে গিয়া ।<br/>" +
                    "হরিনাম-মহামন্ত্র দিচ্ছেন বিলাইয়া ।।২।।",
                    verse: "adhama patita jīber dvāre dvāre giyā<br/>" +
                    "harināma-mahāmantra dicchena bilāiyā (2)",
                    wfw: "① adham—lowly; patit—fallen; jīber—of souls; dvāre dvāre—from door to door; giyā—having gone; ② harinām-mahāmantra—the hare kṛṣṇa mahā-mantra; dicchen—he is giving; bilāiyā—having distributed.",
                    translation: "Going from door to door among the residences of lowly and fallen souls, He freely distributes the harināma mahā-mantra."},

                {script: "এত বলি’ নিত্যানন্দ ভূমে গড়ি’ যায় ।<br/>" +
                    "সোনার পর্ব্বত যেন ধূলাতে লোটায় ।।৪।।",
                    verse: "etô bôli’ nityānanda bhūme gaḓi’ ĵāya<br/>" +
                            "sonāra parbata ĵenô dhūlāte loṭāya (4)",
                    wfw: "① ĵā’re—to whom; dekhe—he sees; tā’re—to them; kahe—he says; dante—in teeth; tṛṇa—straw; dhôri’—having held; ② āmāre—to me; kiniyā lahô—purtchase for yourself [lit. having purchased, take]; bôlô—call out; gaurhari—Gaurahari.",
                    translation: "Holding a straw in His teeth, He calls out to whomever He sees, “Please purchase Me by calling out ‘Gaurahari!’ ”"},

                {script: "অধম পতিত জীবের দ্বারে দ্বারে গিয়া ।<br/>" +
                    "হরিনাম-মহামন্ত্র দিচ্ছেন বিলাইয়া ।।২।।",
                    verse: "adhama patita jīber dvāre dvāre giyā<br/>" +
                    "harināma-mahāmantra dicchena bilāiyā (2)",
                    wfw: "① adham—lowly; patit—fallen; jīber—of souls; dvāre dvāre—from door to door; giyā—having gone; ② harinām-mahāmantra—the hare kṛṣṇa mahā-mantra; dicchen—he is giving; bilāiyā—having distributed.",
                    translation: "Going from door to door among the residences of lowly and fallen souls, He freely distributes the harināma mahā-mantra."},


            ]},
        {   title: "Akrodha Paramānanda",
            description: "~ Pañca-tattva » The Wonderful Qualities of Nityānanda Prabhu ~",
            author: "Śrīla Locana dāsa Ṭhākura",
            subject: "subject akrodha",
            first_verse: "akrodha paramānanda nityānanda rāya",
            content: [

                {script: "অক্রোধ পরমানন্দ নিত্যানন্দ-রায় ।<br/>" +
                         "অভিমান-শূন্য নিতাই নগরে বেড়ায় ।।১।।",
                        verse: "akrodha paramānanda nityānanda rāya<br/>" +
                               "abhimāna-śūnya nitāi nagare beḓāya (1)",
                        wfw: "① akrodh—free from anger; param—supreme; ānanda—bliss; nityānanda—Nityānanda Prabhu; rāy—noble; ② abhimān—false ego; śūnya—devoid; nitāi—Nitāi; nagare—throughout the town; beḓāy—wanders.",
                        translation: "The noble Nityānanda Prabhu, the personification of supreme transcendental bliss, is never angry. Devoid of all false ego, He wanders throughout the town."},

                {script: "অধম পতিত জীবের দ্বারে দ্বারে গিয়া ।<br/>" +
                    "হরিনাম-মহামন্ত্র দিচ্ছেন বিলাইয়া ।।২।।",
                    verse: "adhama patita jīber dvāre dvāre giyā<br/>" +
                    "harināma-mahāmantra dicchena bilāiyā (2)",
                    wfw: "① adham—lowly; patit—fallen; jīber—of souls; dvāre dvāre—from door to door; giyā—having gone; ② harinām-mahāmantra—the hare kṛṣṇa mahā-mantra; dicchen—he is giving; bilāiyā—having distributed.",
                    translation: "Going from door to door among the residences of lowly and fallen souls, He freely distributes the harināma mahā-mantra."},

                {script: "এত বলি’ নিত্যানন্দ ভূমে গড়ি’ যায় ।<br/>" +
                    "সোনার পর্ব্বত যেন ধূলাতে লোটায় ।।৪।।",
                    verse: "etô bôli’ nityānanda bhūme gaḓi’ ĵāya<br/>" +
                            "sonāra parbata ĵenô dhūlāte loṭāya (4)",
                    wfw: "① ĵā’re—to whom; dekhe—he sees; tā’re—to them; kahe—he says; dante—in teeth; tṛṇa—straw; dhôri’—having held; ② āmāre—to me; kiniyā lahô—purtchase for yourself [lit. having purchased, take]; bôlô—call out; gaurhari—Gaurahari.",
                    translation: "Holding a straw in His teeth, He calls out to whomever He sees, “Please purchase Me by calling out ‘Gaurahari!’ ”"},

                {script: "অধম পতিত জীবের দ্বারে দ্বারে গিয়া ।<br/>" +
                    "হরিনাম-মহামন্ত্র দিচ্ছেন বিলাইয়া ।।২।।",
                    verse: "adhama patita jīber dvāre dvāre giyā<br/>" +
                    "harināma-mahāmantra dicchena bilāiyā (2)",
                    wfw: "① adham—lowly; patit—fallen; jīber—of souls; dvāre dvāre—from door to door; giyā—having gone; ② harinām-mahāmantra—the hare kṛṣṇa mahā-mantra; dicchen—he is giving; bilāiyā—having distributed.",
                    translation: "Going from door to door among the residences of lowly and fallen souls, He freely distributes the harināma mahā-mantra."},


            ]},
        {   title: "Akrodha Paramānanda",
            description: "~ Pañca-tattva » The Wonderful Qualities of Nityānanda Prabhu ~",
            author: "Śrīla Locana dāsa Ṭhākura",
            subject: "subject akrodha",
            first_verse: "akrodha paramānanda nityānanda rāya",
            content: [

                {script: "অক্রোধ পরমানন্দ নিত্যানন্দ-রায় ।<br/>" +
                         "অভিমান-শূন্য নিতাই নগরে বেড়ায় ।।১।।",
                        verse: "akrodha paramānanda nityānanda rāya<br/>" +
                               "abhimāna-śūnya nitāi nagare beḓāya (1)",
                        wfw: "① akrodh—free from anger; param—supreme; ānanda—bliss; nityānanda—Nityānanda Prabhu; rāy—noble; ② abhimān—false ego; śūnya—devoid; nitāi—Nitāi; nagare—throughout the town; beḓāy—wanders.",
                        translation: "The noble Nityānanda Prabhu, the personification of supreme transcendental bliss, is never angry. Devoid of all false ego, He wanders throughout the town."},

                {script: "অধম পতিত জীবের দ্বারে দ্বারে গিয়া ।<br/>" +
                    "হরিনাম-মহামন্ত্র দিচ্ছেন বিলাইয়া ।।২।।",
                    verse: "adhama patita jīber dvāre dvāre giyā<br/>" +
                    "harināma-mahāmantra dicchena bilāiyā (2)",
                    wfw: "① adham—lowly; patit—fallen; jīber—of souls; dvāre dvāre—from door to door; giyā—having gone; ② harinām-mahāmantra—the hare kṛṣṇa mahā-mantra; dicchen—he is giving; bilāiyā—having distributed.",
                    translation: "Going from door to door among the residences of lowly and fallen souls, He freely distributes the harināma mahā-mantra."},

                {script: "এত বলি’ নিত্যানন্দ ভূমে গড়ি’ যায় ।<br/>" +
                    "সোনার পর্ব্বত যেন ধূলাতে লোটায় ।।৪।।",
                    verse: "etô bôli’ nityānanda bhūme gaḓi’ ĵāya<br/>" +
                            "sonāra parbata ĵenô dhūlāte loṭāya (4)",
                    wfw: "① ĵā’re—to whom; dekhe—he sees; tā’re—to them; kahe—he says; dante—in teeth; tṛṇa—straw; dhôri’—having held; ② āmāre—to me; kiniyā lahô—purtchase for yourself [lit. having purchased, take]; bôlô—call out; gaurhari—Gaurahari.",
                    translation: "Holding a straw in His teeth, He calls out to whomever He sees, “Please purchase Me by calling out ‘Gaurahari!’ ”"},

                {script: "অধম পতিত জীবের দ্বারে দ্বারে গিয়া ।<br/>" +
                    "হরিনাম-মহামন্ত্র দিচ্ছেন বিলাইয়া ।।২।।",
                    verse: "adhama patita jīber dvāre dvāre giyā<br/>" +
                    "harināma-mahāmantra dicchena bilāiyā (2)",
                    wfw: "① adham—lowly; patit—fallen; jīber—of souls; dvāre dvāre—from door to door; giyā—having gone; ② harinām-mahāmantra—the hare kṛṣṇa mahā-mantra; dicchen—he is giving; bilāiyā—having distributed.",
                    translation: "Going from door to door among the residences of lowly and fallen souls, He freely distributes the harināma mahā-mantra."},


            ]},
        {   title: "Akrodha Paramānanda",
            description: "~ Pañca-tattva » The Wonderful Qualities of Nityānanda Prabhu ~",
            author: "Śrīla Locana dāsa Ṭhākura",
            subject: "subject akrodha",
            first_verse: "akrodha paramānanda nityānanda rāya",
            content: [

                {script: "অক্রোধ পরমানন্দ নিত্যানন্দ-রায় ।<br/>" +
                         "অভিমান-শূন্য নিতাই নগরে বেড়ায় ।।১।।",
                        verse: "akrodha paramānanda nityānanda rāya<br/>" +
                               "abhimāna-śūnya nitāi nagare beḓāya (1)",
                        wfw: "① akrodh—free from anger; param—supreme; ānanda—bliss; nityānanda—Nityānanda Prabhu; rāy—noble; ② abhimān—false ego; śūnya—devoid; nitāi—Nitāi; nagare—throughout the town; beḓāy—wanders.",
                        translation: "The noble Nityānanda Prabhu, the personification of supreme transcendental bliss, is never angry. Devoid of all false ego, He wanders throughout the town."},

                {script: "অধম পতিত জীবের দ্বারে দ্বারে গিয়া ।<br/>" +
                    "হরিনাম-মহামন্ত্র দিচ্ছেন বিলাইয়া ।।২।।",
                    verse: "adhama patita jīber dvāre dvāre giyā<br/>" +
                    "harināma-mahāmantra dicchena bilāiyā (2)",
                    wfw: "① adham—lowly; patit—fallen; jīber—of souls; dvāre dvāre—from door to door; giyā—having gone; ② harinām-mahāmantra—the hare kṛṣṇa mahā-mantra; dicchen—he is giving; bilāiyā—having distributed.",
                    translation: "Going from door to door among the residences of lowly and fallen souls, He freely distributes the harināma mahā-mantra."},

                {script: "এত বলি’ নিত্যানন্দ ভূমে গড়ি’ যায় ।<br/>" +
                    "সোনার পর্ব্বত যেন ধূলাতে লোটায় ।।৪।।",
                    verse: "etô bôli’ nityānanda bhūme gaḓi’ ĵāya<br/>" +
                            "sonāra parbata ĵenô dhūlāte loṭāya (4)",
                    wfw: "① ĵā’re—to whom; dekhe—he sees; tā’re—to them; kahe—he says; dante—in teeth; tṛṇa—straw; dhôri’—having held; ② āmāre—to me; kiniyā lahô—purtchase for yourself [lit. having purchased, take]; bôlô—call out; gaurhari—Gaurahari.",
                    translation: "Holding a straw in His teeth, He calls out to whomever He sees, “Please purchase Me by calling out ‘Gaurahari!’ ”"},

                {script: "অধম পতিত জীবের দ্বারে দ্বারে গিয়া ।<br/>" +
                    "হরিনাম-মহামন্ত্র দিচ্ছেন বিলাইয়া ।।২।।",
                    verse: "adhama patita jīber dvāre dvāre giyā<br/>" +
                    "harināma-mahāmantra dicchena bilāiyā (2)",
                    wfw: "① adham—lowly; patit—fallen; jīber—of souls; dvāre dvāre—from door to door; giyā—having gone; ② harinām-mahāmantra—the hare kṛṣṇa mahā-mantra; dicchen—he is giving; bilāiyā—having distributed.",
                    translation: "Going from door to door among the residences of lowly and fallen souls, He freely distributes the harināma mahā-mantra."},


            ]},



        {title: "name1", description: "description1", author: "author1", spoken1: "spoken1", subject: "subject1", first_verse: "first1",
            content: [{script: "script11", verse: "verse11", wfw: "wfw11", translation: "translation11"},
                      {script: "script12", verse: "verse12", wfw: "wfw12", translation: "translation12"},
                      {script: "script13", verse: "verse13", wfw: "wfw13", translation: "translation13"}]},


        {title: "name3", description: "description3", author: "author3", spoken3: "spoken3", subject: "subject3", first_verse: "first3",
            content: [{script: "script31", verse: "verse31", wfw: "wfw31", translation: "translation31"},
                      {script: "script32", verse: "verse32", wfw: "wfw32", translation: "translation32"},
                      {script: "script33", verse: "verse33", wfw: "wfw33", translation: "translation33"}]},
    ];










    $.ajaxSetup({
        error: function (data, textStatus, jqXHR) {
            console.log(data);

            if (data.status == 401) {
                console.log("Error 401");
                $('#page_login').show();
                $("#page_main") .hide();

                if (data.responseText.includes("Incorrect credentials")) {
                    alert(alert_login_error);
                }
                if (data.responseText.includes("Bad Token")) {
                    cookie_token = getCookie(cookie_name_token);
                }
            }

            if (data.status == 500) {
                console.log("Error 500 ");
                $('#error_500').show();
                sendError();
            }
        }
    });

    if (!navigator.cookieEnabled) {
        alert('Включите cookie для комфортной работы');
    }

    function ifLogin()  {

        if (typeof cookie_token !== 'undefined' && cookie_token !== 'undefined') {
            start();
        } else {
            console.log("no 21 da");
            $("#wrapper_login").show();
        }
    }



    $('#btn_login').click(function () {

        console.log("btn_login");
       // var token_web = Base64.encode(phone + ":" + pass);

        var token_web = Base64.encode($('#login').val() + ":" + $('#password').val());
        console.log("token_web " + token_web);
        try {
            $.ajax({
                type: "GET",
                url: api_url + "token",
                headers: {
                    'Authorization': 'Basic ' + token_web,
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
                success: function (data) {
                    // console.log("try get token");
                    console.log(JSON.stringify(data));

                    if (data.token.length == 32) {
                        //console.log("success get token");
                        setCookie(cookie_name_token, data.token, {expires: 36000000000000});
                        setCookie(cookie_name_id,    data.user_id, {expires: 36000000000000});
                        cookie_token = getCookie(cookie_name_token);
                        ifLogin();
                    } else {
                        //   console.log("fail get token");
                    }
                },
                failure: function (errMsg) {
                    //    console.log(errMsg.toString());
                }
            });
        }
        catch (err) {
            //  console.log(err);
        }

    });


    function start(){

        $.ajax({
            type: "GET",
            url:   api_url + "get_freedom_info",
            data: { user_time: new Date(), os: getOS()},
            headers: {
                'Authorization': 'Token token=' + cookie_token,
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            success: function (data) {
                console.log(data);

                if (data.courses.active_courses == 0) {
                    $('#wrapper_login')         .show();
                    $('#page_welcome')         .hide();
                    $('#page_login')         .hide();
                    $('#page_courses_select').show();
                    courses_initial= data.courses.courses;
                    setInitialCourses();
                } else {
                    $('#wrapper_login').hide();
                    $('#wrapper_main') .show();

                    setDayInfo(data.day_info);
                    setTodayPractise(data.day_info.day_practises);
                    $('#page_diary')   .show();

                    courses_real= data.courses.courses;
                    setRealCourses();
                    setMaterials(data.materials);

                    setUserPractises(data.practises.practises);
                    setUserInfo(data.user);
                    getSetCommonInfo();

                }

            },
            failure: function (errMsg) {
                alert(errMsg);
            }
        });
    }

   // ifLogin();




    function letsGo(){
        songs.sort(dynamicSort("name"));

        var rows = "";
        $.each(songs, function (i, item) {
            rows += '<div class="content_title one_string" data-type="title" data-value="' + item.title + '" >';
            rows += item.title + '</div>';
        });
        $('#content_title').empty().append(rows);

        var rows = "";
        $.each(songs, function (i, item) {
            rows += '<div class="content_title one_string" data-type="first_verse" data-value="' + item.first_verse + '" >';
            rows += item.first_verse + '</div>';
        });
        $('#content_first_verse').empty().append(rows);

    }


    $(document).on('click', '.content_title ', function () {
        //var value = "";
        var current_song = "";

        switch ($(this).attr("data-type")){
            case "title":
                current_song = songs.filter(x => x.title === $(this).attr("data-value"))[0];
                break;
            case "first_verse":
                current_song = songs.filter(x => x.first_verse === $(this).attr("data-value"))[0];
                break;
        }

        console.log(current_song);

        var value = '';
        value += '<div class="content_value description">' + current_song.description + '</div>';

        value += '<div class="content_value_titles title">' + current_song.title + '</div>';
        value += '<div class="content_value_titles author">' + current_song.author + '</div>';

        $.each(current_song.content, function (i, item) {
            if (show_script)      { value += '<div class="content_value script">      ' + item.script      + '</div>'; }
            if (show_verse)       { value += '<div class="content_value verse">       ' + item.verse       + '</div>'; }
            if (show_wfw)         { value += '<div class="content_value wfw">         ' + item.wfw         + '</div>'; }
            if (show_translation) { value += '<div class="content_value translation"> ' + item.translation + '</div>'; }


            value += '<div class="content_divider"></div>';
        });

        console.log(current_song);


        $('.div_content_titles').hide();
        $('.div_content_value').empty().append(value).show();
        $('.content_value ').css('font-size', current_size_small + "px");
        $('.content_value_titles  ').css('font-size', current_size_big + "px");

        $('.content_title').css('color', current_text_color);
        $('.content_value').css('color', current_text_color);
    });



    letsGo();


    function dynamicSort(property) {
        var sortOrder = 1;
        if(property[0] === "-") {
            sortOrder = -1;
            property = property.substr(1);
        }
        return function (a,b) {
            /* next line works with strings and numbers,
             * and you may want to customize it to your needs
             */
            var result = (a[property] < b[property]) ? -1 : (a[property] > b[property]) ? 1 : 0;
            return result * sortOrder;
        }
    }




    $(document).on('click', '.navigation_items ',         function () {
        $('.navigation_items').css('color', 'white');
        $(this).css('color', '#00e8c1');

        $('.div_content_titles').hide();
        $('.div_content_value').hide();
        var div_id = "content_" + $(this).attr("data-navigate-to");
        $('#' + div_id).show();
    });
    var current_size_small = parseInt($('.content_value ').css('font-size'));
    var current_size_big   = parseInt($('.content_value_titles  ').css('font-size'));

    var current_text_color = "#333333";
    $(document).on('click', '.change_size ',         function () {

        if ($(this).attr("data-size") === "small"){
            current_size_small -= 1;
            current_size_big   -= 1;
        } else {
            current_size_small += 1;
            current_size_big   += 1;
        }

        $('.content_title ').css('font-size', current_size_small + "px");
        $('.content_value ').css('font-size', current_size_small + "px");
        $('.content_value_titles  ').css('font-size', current_size_big + "px");
    });
    $(document).on('click', '.color_selector',         function () {
        $('.color_selector').css('background-color', 'transparent');
        $(this).css('background-color', '#00e8c1');

        var background_color = "";
        var text_color = "";

        switch ($(this).attr("data-color")){
            case "light":
                background_color = "#f8f8f8";
                text_color       = "#333333";
                break;
            case "medium":
                background_color = "#23a1a1";
                text_color       = "#f8f8f8";
                break;
            case "dark":
                background_color = "#333b49";
                text_color       = "#f8f8f8";
                break;
        }

        $('.wrapper_content').css('background-color', background_color);
        current_text_color = text_color;

        $('.content_title').css('color', current_text_color);
        $('.content_value').css('color', current_text_color);
    });

    $('#icon_menu').click(function(){
        console.log("click");
        $('.div_menu').show();
    });



    $('#menu_close').click(function(){

        $('.div_menu').hide();
    });

    var show_script      = true;
    var show_verse       = true;
    var show_wfw         = true;
    var show_translation = true;
    $(document).on('click', '.menu_switchers',         function () {
        console.log($(this).attr("id"));
        console.log($(this).is(":checked"));

        var new_state = $(this).is(":checked");

        switch ($(this).attr("id")) {
            case "switch_script":
                show_script = new_state;
                break;
            case "switch_verse":
                show_verse = new_state;
                break;
            case "switch_wfw":
                show_wfw = new_state;
                break;
            case "switch_translation":
                show_translation = new_state;
                break;
        }
    });










    $('#search_field').on('click', function (event) {
        $("#search_field").animate({width:"340px"}, 1500);
        $(".div_search_icon").animate({left:"390px"}, 1500);
    });
    $('#search_field').on('focusout', function (event) {
        $("#search_field").animate({width:"170px"}, 1500);
        $(".div_search_icon").animate({left:"220px"}, 1500);
    });

    var last_animation = Date.now();
    var last_scroll_position = 0;
    $(window).scroll(function() {



        if ( Date.now() - last_animation > 700) {
            if ($(this).scrollTop() > last_scroll_position) {
                //$('.app_bar').fadeOut();
                last_animation = Date.now();
                $(".app_bar").stop().animate({height:"0px"}, 500);
            } else {
                // $('.app_bar').fadeIn();
                last_animation = Date.now();
                $(".app_bar").stop().animate({height:"90px"}, 500);

            }
        }



        last_scroll_position = $(this).scrollTop();
    });























    $('body').on('click', '[data-block]', function (e) {
        e.preventDefault();
        if($(this).hasClass('open')){
            $(this).removeClass('open');
            $($(this).data('block')).slideUp(300);
        } else {
            $(this).addClass('open');
            $($(this).data('block')).slideDown(300);
        }
    });
    $('body').on('click', '[data-plugin="tabs"]', function (e) {
        e.preventDefault();
        $(this).addClass('active').siblings().removeClass('active');
        $($(this).data('target')).addClass('active').siblings().removeClass('active');
    });
    $('body').on('click', '[data-modal="modal"]', function (e) {
        e.preventDefault();
        $($(this).data('target')).addClass('open');
    });
    $('body').on('click', '.close_popup', function (e) {
        e.preventDefault();
        $(this).parent().removeClass('open');
    });
    var thisTimeDrop;

    var time_dropper_type  = "";
    var time_dropper_value = "";
    $('body').on('click', '.time_drop', function (e) {
        e.preventDefault();
        time_dropper_type = $(this).attr("data-type");
        var title = "";
        switch ($(this).attr("data-type")) {
            case "question_now":
                title = "Во сколько Вы <br>обычно просыпаетесь?";
                break;
            case "question_target":
                title = "Установите цель <br>по времени подъема";
                break;
            case "diary":
                title = "Укажите фактическое <br>время подъема сегодня";
                break;
        }

        $('.header_popup_time_dropper').empty().append(title);
        $('#popup_time_dropper').addClass('open');
        $('#input_time_dropper').trigger('click');
        thisTimeDrop = $(this);
    });


    $('body').on('click', '.close_popup', function (e) {
        if (time_dropper_type === "diary") {
            tickWakeup($('#input_time_dropper').val());
        }

        e.preventDefault();
        $(this).parent().removeClass('open');
        thisTimeDrop.val($('#input_time_dropper').val());
        $('#input_time_dropper').val('')
    });
    $('body').on('click', '[data-tooltip]', function (e) {
        e.preventDefault();
        if($(this).hasClass('active')){
            $(this).removeClass('active');
            $($(this).data('tooltip')).removeClass('active');
        } else {
            $(this).addClass('active');
            $($(this).data('tooltip')).addClass('active').css('top', (parseInt($(this).offset().top) + 37) + 'px');
        }
    });



    function openInNewTab(url) {
        var win = window.open(url, '_blank');
        win.focus();
    }
    function sendError(){
        $.ajax({
            type: "POST",
            url:  api_url + "send_error",
            headers: {
                'Authorization':'Token token=' + cookie_token,
                'Content-Type':'application/x-www-form-urlencoded'
            },
            success: function(data){
            },
            failure: function(errMsg) {
                alert(errMsg.toString());
            }
        });
    }
    function getOS() {
        var userAgent = window.navigator.userAgent,
            platform = window.navigator.platform,
            macosPlatforms = ['Macintosh', 'MacIntel', 'MacPPC', 'Mac68K'],
            windowsPlatforms = ['Win32', 'Win64', 'Windows', 'WinCE'],
            iosPlatforms = ['iPhone', 'iPad', 'iPod'],
            os = null;

        if (macosPlatforms.indexOf(platform) !== -1) {
            os = 'Mac OS';
        } else if (iosPlatforms.indexOf(platform) !== -1) {
            os = 'iOS';
        } else if (windowsPlatforms.indexOf(platform) !== -1) {
            os = 'Windows';
        } else if (/Android/.test(userAgent)) {
            os = 'Android';
        } else if (!os && /Linux/.test(platform)) {
            os = 'Linux';
        }

        return os;
    }
    function setCookie(name, value, options) {
        options = options || {};
        var expires = options.expires;

        if (typeof expires == "number" && expires) {
            var d = new Date();
            d.setTime(d.getTime() + expires * 1000);
            expires = options.expires = d;
        }
        if (expires && expires.toUTCString) {
            options.expires = expires.toUTCString();
        }

        value = encodeURIComponent(value);
        var updatedCookie = name + "=" + value;
        for (var propName in options) {
            updatedCookie += "; " + propName;
            var propValue = options[propName];
            if (propValue !== true) {
                updatedCookie += "=" + propValue;
            }
        }
        document.cookie = updatedCookie;
    }
    function getCookie(name) {
        var matches = document.cookie.match(new RegExp(
            "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
        ));
        return matches ? decodeURIComponent(matches[1]) : undefined;
    }
    function deleteCookie( name ) {
        document.cookie = name + '=undefined; expires=Thu, 01 Jan 1970 00:00:01 GMT; path=/';
    }

    $('.btn_exit').click(function () {
        deleteCookie(cookie_name_token);
        cookie_token = getCookie(cookie_name_token);

        window.location.reload();
    });
});









