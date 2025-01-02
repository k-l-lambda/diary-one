
const fs = require("fs");
const path = require("path");


const arxivURLPattern = /https?:\/\/arxiv\.org\/\w+\/(\d\d\d\d\.\d+)/;
const githubPattern = /https?:\/\/github\.com\/[\w-_]+\/[\w-_]+/;
const blogPattern = /https?:\/\/[^.]+\.github.io[^)\s]+/;


const extractTitle = text => {
	const captures = text.match(/\[([^\[\]]+)\]/);
	return captures && captures[1];
};


const main = () => {
	const years = fs.readdirSync("./").filter(name => /^\d\d\d\d$/.test(name));
	const diaries = years
		.map(year => fs.readdirSync(year)
			.filter(name => name.endsWith(".md"))
			.map(name => path.join(year, name)))
		.flat(1);
	//console.log("diaries:", diaries);

	const records = [];
	diaries.forEach(filePath => {
		const date = filePath.replace(".md", "");

		const content = fs.readFileSync(filePath, "utf-8");
		const lines = content.split("\n").map(line => line.replace("\r", ""));
		const hs = Object.entries(lines).filter(([i, line]) => /^#+\s/.test(line)).map(([i]) => parseInt(i));
		const arxs = Object.entries(lines).filter(([i, line]) => arxivURLPattern.test(line)).map(([i]) => parseInt(i));

		arxs.forEach(i => {
			const captures = lines[i].match(arxivURLPattern);
			const id = captures[1];

			const ih = [...hs].reverse().find(ii => ii < i) || 0;
			let iend = hs.find(ii => ii > ih) || lines.length;

			let name = extractTitle(lines[i]);
			if (!name) {
				const title = lines[ih].replace(/^#+\s+/, "");
				name = extractTitle(title) || title;
			}

			const istart = Math.max(ih, i - 2);
			const segment = lines.slice(istart, iend).join("\n");
			const githubCaptures = segment.match(githubPattern);
			const github = githubCaptures ? githubCaptures[0].replace(/^.+\.com\//, "") : "";
			const blogCaptures = segment.match(blogPattern);
			const blog = blogCaptures ? blogCaptures[0] : "";

			const record = records.find(record => record.id === id);
			if (record) {
				record.date = date;
				record.name = name || record.name;
				record.github = github || record.github;
				record.blog = blog || record.blog;
			}
			else
				records.push({date, id, name, github, blog});
		});
	});

	records.sort((r1, r2) => r1.id > r2.id ? 1 : -1);
	//console.log("records:", records);

	const lines = [
		"# arxiv",
		"",
		"",
		"| id | name | paper | github | blog | diary |",
		"| :- | :-   | :-    | :-     | :-   | :-    |",
	];

	records.forEach(({date, id, name, github, blog}) =>
		lines.push(`[*${id}*](https://arxiv.org/abs/${id}) | **${name}** | [pdf](https://arxiv.org/pdf/${id}) [html](https://arxiv.org/html/${id}v1) | [${github}](https://github.com/${github}) | [${blog.substring(8).replace(/\.github\.io.*/, "")}](${blog}) | [*${date}*](/${date}.md)`));

	const document = lines.join("\n") + "\n";
	fs.writeFileSync("./memo/arxiv.md", document);
};


main();
