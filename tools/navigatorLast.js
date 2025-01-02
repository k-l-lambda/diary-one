
const { buildNavigator } = require("./navigator");


const main = () => {
	const processAll = process.argv.includes("--all");

	buildNavigator(processAll);
};


main();
