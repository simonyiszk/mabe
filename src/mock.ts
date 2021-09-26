// TODO: remove this file once we have set up contentful

type IEvent = {
	id: number;
	image: string;
	title: string;
	startDate: Date;
	endDate: Date;
	place: string;
	content: string;
};

export const EVENTS = [
	{
		id: 0,
		title: "Some title",
		content: `A World Press Photo Budapesten már a második alkalommal fogadja a közönséget a Magyar Nemzeti Múzeumban! A
világszerte 100 városban bemutatott válogatás Magyarországon 2019. szeptember 19-től október 23-ig tekinthető
meg. A gyakran megrázó pályaműveket bemutató tárlatot idén két kísérő kiállítás egészíti ki: a „Digital Storytelling”
verseny díjazottjai mellett a nemzetközi karriert felmutató Borsi Flóra szürreális képeit is megtekinthetik.`,
		place: "Magyar Nemzeti Múzeum",
		startDate: new Date(),
		endDate: new Date(2021, 12, 21),
		image: "https://placekitten.com/700/500",
	},
	{
		id: 0,
		title: "Valami csodalatos",
		content: `A World Press Photo Budapesten már a második alkalommal fogadja a közönséget a Magyar Nemzeti Múzeumban! A
világszerte 100 városban bemutatott válogatás Magyarországon 2019. szeptember 19-től október 23-ig tekinthető
meg. A gyakran megrázó pályaműveket bemutató tárlatot idén két kísérő kiállítás egészíti ki: a „Digital Storytelling”
verseny díjazottjai mellett a nemzetközi karriert felmutató Borsi Flóra szürreális képeit is megtekinthetik.`,
		place: "Magyar Nemzeti Múzeum",
		startDate: new Date(),
		endDate: new Date(2021, 12, 21),
		image: "https://placekitten.com/700/500",
	},
	{
		id: 0,
		title: "Nagyon jo esemeny",
		content: `A World Press Photo Budapesten már a második alkalommal fogadja a közönséget a Magyar Nemzeti Múzeumban! A
világszerte 100 városban bemutatott válogatás Magyarországon 2019. szeptember 19-től október 23-ig tekinthető
meg. A gyakran megrázó pályaműveket bemutató tárlatot idén két kísérő kiállítás egészíti ki: a „Digital Storytelling”
verseny díjazottjai mellett a nemzetközi karriert felmutató Borsi Flóra szürreális képeit is megtekinthetik.`,
		place: "Magyar Nemzeti Múzeum",
		startDate: new Date(),
		endDate: new Date(2021, 12, 21),
		image: "https://placekitten.com/700/500",
	},
	{
		id: 0,
		title: "Egy esemeny valami egeszen hosszu nevvel",
		content: `A World Press Photo Budapesten már a második alkalommal fogadja a közönséget a Magyar Nemzeti Múzeumban! A
világszerte 100 városban bemutatott válogatás Magyarországon 2019. szeptember 19-től október 23-ig tekinthető
meg. A gyakran megrázó pályaműveket bemutató tárlatot idén két kísérő kiállítás egészíti ki: a „Digital Storytelling”
verseny díjazottjai mellett a nemzetközi karriert felmutató Borsi Flóra szürreális képeit is megtekinthetik.`,
		place: "Magyar Nemzeti Múzeum",
		startDate: new Date(),
		endDate: new Date(2021, 12, 21),
		image: "https://placekitten.com/700/500",
	},
] as IEvent[];

type IGalleryItem = {
	id: number;
	title: string;
	image: string;
	gImages: string[];
};

export const GALLERYITEMS = [
	{
		id: 1,
		title: "Nyári tábor",
		image: "https://placekitten.com/408/287",
		gImages: Array(20).fill("https://placekitten.com/200/286", 0),
	},
	{
		id: 2,
		title: "Téli tábor",
		image: "https://placekitten.com/408/287",
		gImages: Array(16).fill("https://placekitten.com/408/287", 0),
	},
	{
		id: 3,
		title: "Tavaszi tábor",
		image: "https://placekitten.com/408/287",
		gImages: Array(4).fill("https://placekitten.com/408/287", 0),
	},
	{
		id: 4,
		title: "Őszi tábor",
		image: "https://placekitten.com/408/287",
		gImages: Array(1).fill("https://placekitten.com/408/287", 0),
	},
] as IGalleryItem[];

type INewsSuggestion = {
	id: number;
	title: string;
	content: string;
	date: string | Date;
	image: string;
	author: INewsAuthor;
};

type INewsAuthor = {
	name: string;
	description: string;
	date: string | Date;
	image: string;
};

type INewsItem = {
	image: string;
	title: string;
	content: string;
	author: INewsAuthor;
	otherArticles?: INewsSuggestion[];
};

export const NEWSITEMS = [
	{
		title:
			"Sikeresen lezárt pályázat, Pharmahungary Group, Szegedi Tudományegyetem és Ashok & Rita Patel Institute (India) kardioprotektív molekula fejlesztése az akut miokardiális infarktus kezelésére",
		content: `Sikeresen lezárult a „Mátrix-metalloproteináz-2 gátló molekulák szintézise, kemoinformatikai fejlesztése, optimalizálása és preklinikai tesztelése kardioprotekció indikációra” projekt a Pharmahungary 2000 Kísérletes és Klinikai Kutatásfejlesztési Kft. (Pharmahungary) konzorciumvezető, a Szegedi Tudományegyetem (SZTE), konzorciumi tag és az indiai partner, Ashok & Rita Patel Institute of Integrated Study and Research in Biotechnology & Allied Sciences (ARIBAS) közreműködésében.
		A projekt célja a szívizom infarktus és az annak következtében kialakuló szívelégtelenség terápiájának előmozdítása volt mátrix-metalloproteináz (MMP) gátló molekulák fejlesztésével. Az MMP-k jelentőségét az SZTE és Pharmahungary kutatói ismerték fel a szív stressz adaptációjának hátterében, ami új utat nyitott az iszkémiás szívbetegség terápiájának fejlesztésében. A jelen projektben az előzetes eredményeink szerint a szívet védő ún. kardioprotektív hatású, a Pharmahungary nemzetközi szabadalmaival védett, MMP gátló gyógyszermolekula jelöltekről a gyógyszerfejlesztésben nélkülözhetetlen kísérletes adatokat gyűjtöttünk, és azonosítottunk két gyógyszer jelöltet és 2 újabb MMP gátló gyógyszerjelöltről sikerült kimutatnunk a szívinfarktus elleni jótékony hatást. A gyógyszerfejlesztésben újszerű megközelítésben, a klinikailag releváns társbetegségeket modellezve (melynek jelentőségére szintén kutatóink világítottak rá elsőként), a szívinfarktus egyik legfontosabb társbetegségének a hiperlipidámiának a jelenlétében gyűjtöttünk további adatokat a gyógyszerjelölt molekulák hatásosságával kapcsolatban.
		A projekt során az MMP aktivitás mérésének technológiáját is fejlesztettük, illetve az MMP-k szerepét más betegségekben is tanulmányoztuk, melyek eredményei nyomán új ipari fejlesztési projekteket indítottunk. Eredményeink egy részét elsőrangú nemzetközi tudományos szakfolyóiratokban publikáltuk, nemzetközi és hazai tudományos konferenciákon, illetve nemzetközi ipari kiállításokon és üzletember találkozókon mutattuk le. A jelen projektben elvégzett K+F munka nagyban növelte az MMP gátlókkal kapcsolatos szellemi tulajdonunk értékét, új gyógyszerjelölt molekulákat eredményezett (melyek alapján új szabadalmi beadványt készítettünk elő), továbbá új K+F szolgáltatásaink technológiai hátterének fejlődését segítette elő.
		`,
		author: {
			name: "Szerző neve",
			date: "Szeptember 08",
			description: "vm szoveg",
			image: "https://placekitten.com/408/287",
		},
		image: "https://placekitten.com/408/287",
		otherArticles: [
			{
				id: 1,
				title: "Title",
				content:
					"Nullam eu rutrum risus. Donec sollicitudin vehicula nulla, in sagittis mi. Aenean vulputate nulla vitae mauris sagittis, quis aliquam libero lobortis. Morbi lectus leo, feugiat et malesuada ac, congue eget sapien. Integer dictum sodales dictum. Etiam odio sem, luctus in sollicitudin quis,Integer dictum sodales dictum. Etiam odio sem, luctus in sollicitudin quis,Integer dictum sodales dictum. Etiam odio sem, luctus in sollicitudin quis,",
				date: "2021.05.04.",
				image: "https://placekitten.com/408/287",
				author: {
					name: "Cute Seal",
					date: new Date(),
					description: "vm leírás",
					image: "https://placekitten.com/408/287",
				},
			},
			{
				id: 2,
				title: "Title",
				content:
					"Nullam eu rutrum risus. Donec sollicitudin vehicula nulla, in sagittis mi. Aenean vulputate nulla vitae mauris sagittis, quis aliquam libero lobortis. Morbi lectus leo, feugiat et malesuada ac, congue eget sapien. Integer dictum sodales dictum. Etiam odio sem, luctus in sollicitudin quis,Integer dictum sodales dictum. Etiam odio sem, luctus in sollicitudin quis,Integer dictum sodales dictum. Etiam odio sem, luctus in sollicitudin quis,",
				date: "2021.05.04.",
				image: "https://placekitten.com/408/287",
				author: {
					name: "Cute Seal",
					date: new Date(),
					description: "vm leírás",
					image: "https://placekitten.com/408/287",
				},
			},
		],
	},
] as INewsItem[];
