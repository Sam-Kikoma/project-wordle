const values = [
	"aback",
	"abaft",
	"abase",
	"abate",
	"abbey",
	"abbot",
	"abhor",
	"abide",
	"abler",
	"abode",
	"about",
	"above",
	"abuse",
	"abyss",
	"ached",
	"aches",
	"acids",
	"acorn",
	"acres",
	"acrid",
	"acted",
	"actor",
	"acute",
	"adage",
	"adapt",
	"added",
	"adder",
	"adept",
	"adieu",
	"admit",
	"adobe",
	"adopt",
	"adore",
	"adorn",
	"adult",
	"aegis",
	"aeons",
	"affix",
	"afire",
	"afoot",
	"after",
];
export const answers = values.map((value) => value.toUpperCase());

export const answerGen = (answers) => {
	const randomInt = Math.floor(Math.random() * answers.length);
	return answers[randomInt];
};

export const answer = answerGen(answers);
