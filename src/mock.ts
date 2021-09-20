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
