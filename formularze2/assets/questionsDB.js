const questionsDB = [
    {
        question: "Ćmielów i Chodzież słyną z produkcji:",
        answers: ["samolotów", "leczniczych wód", "wagonów kolejowych", "porcelany"],
        correct: "porcelany"
    },
    {
        question: "Czego zakręcane wieczko ma taneczną nazwę?",
        answers: ["szkatułki", "puderniczki", "trumienki", "słoika"],
        correct: "słoika"
    },
    {
        question: "Do sejmowej zamrażarki trafiają:",
        answers: ["temperamentni posłowie", "skargi na marszałka sejmu", "projekty niektórych ustaw", "nachalni lobbyści"],
        correct: "projekty niektórych ustaw"
    },
    {
        question: "Szejk pije szejka, czyli co:",
        answers: ["potrójne espresso", "zieloną herbatę", "napój mleczno-owocowy", "wino gronowe"],
        correct: "napój mleczno-owocowy"
    },
    {
        question: "Komu w 1917 roku Matka Boska przekazała trzy tajemnice fatimskie?",
        answers: ["skazańcom", "astuszkom", "żołnierzom", "biskupom"],
        correct: "pastuszkom"
    },
    {
        question: "Czym była zielona książeczka, którą w 2001 roku zastąpiła\nszaro-różowa karta z poliwęglanu?",
        answers: ["książeczką oszczędnościową", "dowodem osobistym", "prawem jazdy", "książeczką zdrowia"],
        correct: "dowodem osobistym"
    },
    {
        question: "Jaki ptak ma oczy osadzone frontalnie i otoczone promieniście ułożonymi piórami?",
        answers: ["brzegówka", "dymówka", "płomykówka", "bogatka"],
        correct: "bogatka"
    },
    {
        question: "Gwiazdy, które tworzą dyszel Wielkiego Wozu, są jednocześnie:",
        answers: ["ogonem Wielkiej Niedźwiedzicy", "kolcem Skorpiona", "szyją żyrafy", "lapą Lwa"],
        correct: "ogonem Wielkiej Niedźwiedzicy"
    },
    {
        question: "Znajdź błąd.",
        answers: ["handlarz starzyzny", "handlarz narkotyków", "handlarz złotem", "handlarz żywym towarem"],
        correct: "handlarz starzyzny"
    },
    {
        question: "Tempura to panierowane i smażone na głębokim oleju ryby, krewetki,\nkalmary, małże. Skąd w XVI wieku przywędrowała do Japonii?",
        answers: ["z Holandii", "z Portugalii", "z Rosji", "z Chin"],
        correct: "z Portugalii"
    },
    {
        question: "Mistrzami jakiej broni są Atos, Portos i Aramis\nz książki Aleksandra Dumasa?",
        answers: ["szbli", "szpady", "włóczni", "miecza"],
        correct: "szpady"
    },
    {
        question: "Corocznie na przełomie marca i kwietnia między osadami uniwersytetów Oxford i Cambridge odbywa się słynny:",
        answers: ["mecz żużlowy", "rajd rowerowy", "wyścig wioślarski", "pojedynek na szpady"],
        correct: "wyścig wioślarski"
    },
    {
        question: "Manat karaibski, tak jak afrykański, z kończyn ma tylko przednie. A manat azerbejdżański, tak jak turkmeński:",
        answers: ["ma i przednie, i tylne", "zastąpił rubla", "zakrywa całe ciało", "jest samotnikiem"],
        correct: "zastąpił rubla"
    },
    {
        question: "Pokładne to:",
        answers: ["dawna nazwa nocy poślubnej", "pomost między burtami statków", "pora drzemki", "oplata cmentarna"],
        correct: "oplata cmentarna"
    },
    {
        question: "Co góral kawaler zdobi piórkiem, a żonaty już nie?",
        answers: ["portki", "kłobuk", "cuchę", "kierpce"],
        correct: "kłobuk"
    },
    {
        question: "Który kraj w grudniu 2018 roku miał jednego prezydenta,\na w styczniu 2019 już dwóch?",
        answers: ["Egipt", "Pakistan", "Wenezuela", "Ukraina"],
        correct: "Wenezuela"
    },
    {
        question: "Które z wymienionych hodowane są dla cennej skóry, z której\nprodukuje się luksusową galanterię?",
        answers: ["strusie", "perliczki", "gęsi", "indyki"],
        correct: "strusie"
    },
    {
        question: "Once upon a time... - tak zazwyczaj zaczynają się:",
        answers: ["przesłuchania" ,"testamenty" ,"umowy cywilno-prawne" ,"bajki"],
        correct: "bajki"
    },
    {
        question: "Jakie elementy garderoby powstają najczęściej\nz materiału typu softshell?",
        answers: ["rajstopy", "kurtki", "krawaty", "gorsety"],
        correct: "kurtki"
    },
    {
        question: "W czyim domu nie mówi się o sznurze?",
        answers: ["powroźnika", "powieszonego", "praczki", "linoskoczka"],
        correct: "powieszonego"
    },
    {
        question: "Różańcową tajemnicą chwalebną nie jest?",
        answers: ["wniebowzięcie Matki Bożej", "zmartwychwstanie Jezusa", "śmierć Jezusa na krzyżu", "zesłanie Ducha Świętego"],
        correct: "śmierć Jezusa na krzyżu"
    },
    {
        question: "Z gry na jakim instrumencie słynie Czesław Mozil?",
        answers: ["na kornecie", "na akordeonie", "na djembe", "na ksylofonie"],
        correct: "na akordeonie"
    },
    {
        question: "Ile to jest 1111 razy 1111, jeśli 1 razy 1 to 1, a 11 razy 11 to 121?",
        answers: ["12 321", "1 234 321", "111 111 111", "123 454 321"],
        correct: "1 234 321"
    },
    {
        question: "Skąd pochodzi Conan Barbarzyńca?",
        answers: ["z Rivii", "z Oz", "z Mordoru", "z Cimmerii"],
        correct: "z Cimmerii"
    },
    {
        question: "Odrażający drab z Kabaretu Starszych Panów\ndubeltówkę weźmie, wyjdzie i...:",
        answers: ["rach-ciach!", "buch, buch!", "z rur dwóch", "bum w brzuch"],
        correct: "buch, buch!"
    },
    {
        question: "Komiksowym „dzieckiem” rysownika Boba Kane’a jest:",
        answers: ["Superman", "Batman", "Spider-Man", "Capłain America"],
        correct: "Batman"
    },
    {
        question: "Kto jest mistrzem tego samego oręża, w jakim\nspecjalizowała się mitologiczna Artemida?",
        answers: ["Zorro", "Legolas", "Don Kichot", "Longinus Podbipięta"],
        correct: "Legolas"
    },
    {
        question: "Rybą nie jest:",
        answers: ["świnka", "rozpiór", "krasnopiórka", "kraska"],
        correct: "kraska"
    },
    {
        question: "Który aktor urodził się w roku opatentowania kinematografu braci Lumière?",
        answers: ["Rudolph Valentino", "Humphrey Bogart", "Charlie Chaplin", "Fred Astaire"],
        correct: "Rudolph Valentino"
    },
    {
        question: "Mowa w obronie poety Archiasza przeszła do historii jako jeden z najświetniejszych popisów retorycznych:",
        answers: ["Izokratesa", "Cycerona", "Demostenesa", "Kwintyliana"],
        correct: "Cycerona"
    },
    {
        question: "Kto był nadwornym malarzem króla Filipa IV Habsburga?",
        answers: ["Marcello Bacciarelli", "Jan van Eyck", "Diego Velâzquez", "Jacques-Louis David"],
        correct: "Diego Velâzquez"
    },
    {
        question: "Likier maraskino produkuje się z maraski, czyli odmiany:",
        answers: ["wiśni", "jabłoni", "figi", "gruszy"],
        correct: "wiśni"
    },
    {
        question: "Który utwór Juliusza Słowackiego napisany jest prozą?",
        answers: ['"Godzina myśli"', '"W Szwajcarii"', '"Anhelli"', '"Arab"'],
        correct: '"Anhelli"'
    },
    {
        question: "Płetwą grzbietową nie pruje wody:",
        answers: ["długoszpar", "kosogon", "orka", "wal grenlandzki"],
        correct: "wal grenlandzki"
    },
    {
        question: '"Wątróbka z cebulką (...) jest zakąską doskonałą. Aby ją przyrządzić, należy kupić samochód i pędzić nim póty, aż się kogoś przejedzie". To Lem i...',
        answers: ['"Solaris"', '"Opowieści o pilocie Pirxie', '"Dyktanda czyli..."', '"Szpital Przemienienia"'],
        correct: '"Dyktanda czyli..."'
    },
    {
        question: "Ryś polski, łabędź rostowski, saksoński bocian i wywrotek smoleński to:",
        answers: ["rasy gołębi", "rasy kur", "chrząszcze", "akrobacje na deskorolce"],
        correct: "rasy gołębi"
    },
    {
        question: "Co według Leszka Kołakowskiego jest sklepieniem domu,\nw którym duch ludzki mieszka?",
        answers: ["Rozum", "Bóg", "Miłość", "Czas"],
        correct: "Czas"
    },
    {
        question: 'Ikoną czerwcowych wyborów z 1989 r. było zdjęcie z Wałęsą podpisane\n"Głosuj na…". Kto z tzw. drużyny Lecha go nie miał?',
        answers: ["Jacek Kuroń", "Hanna Suchocka", "Jarosław Kaczyński", "Lech Kaczyński"],
        correct: "Lech Kaczyński"
    },
    {
        question: "Który instrument stroi muzyk?",
        answers: ["Tamburyn", "Kocioł", "Okarynę", "Czynele"],
        correct: "Kocioł"
    },
    {
        question: "Który ssak się nie poci?",
        answers: ["owca", "koń", "człowiek", "królik"],
        correct: "królik"
    },
    {
        question: "Każda barwa składowa światła białego rozchodzi się w ciałach\nprzezroczystych z inną prędkością. Największą prędkość ma:",
        answers: ["czerwona", "pomarańczowa", "żółta", "fioletowa"],
        correct: "czerwona"
    }
]


// : {
//         question: "",
//         answers: ["", "", "", ""],
//         correct: ""
//     },