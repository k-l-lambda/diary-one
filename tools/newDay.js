
const fs = require('fs');


const template_md = `
# :pig:

Slacked off this day, nothing to write...
`;


const main = () => {
	// create a new page for today
	const now = new Date();
	const year = now.getFullYear();
	const month = String(now.getMonth() + 1).padStart(2, '0');
	const day = String(now.getDate()).padStart(2, '0');
	const todayPath = `./${year}/${month}${day}.md`;

	if (fs.existsSync(todayPath)) {
		// already exists
		return;
	}

	fs.writeFileSync(todayPath, template_md);
};


main();
