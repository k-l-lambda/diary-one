
const { buildNavigator } = require("./navigator");

// If you want to create new page automatically every day, uncomment the following line
//require("./newDay.js");


const main = () => {
	const processAll = process.argv.includes("--all");

	buildNavigator(processAll);
};


main();
