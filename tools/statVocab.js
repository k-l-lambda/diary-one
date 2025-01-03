/*
Target memo: memo/vocab.md


Usage

If `## vocab` occurs in diary body,
the entire paragraph will be treated as a vocabulary record.


Example:

## vocab

* one
  一
* me
  我

*/


const fs = require("fs");
const path = require("path");


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
		const h2s = Object.entries(lines).filter(([i, line]) => /^##+\s/.test(line)).map(([i]) => parseInt(i));
		const ivocab = h2s.find(i => /\s*vocab$/.test(lines[i].substring(3)));
		if (ivocab >= 0) {
			let iend = h2s.find(i => i > ivocab);
			iend = iend === -1 ? lines.length : iend;
			const vocabSeg = lines.slice(ivocab + 1, iend);
			const words = vocabSeg.filter(Boolean).join("|").split("* ").filter(Boolean)
				.map(word => [...word.split("|").filter(s => s.replace(/\s/g, "")).map(s => s.replace(/^\s+/, "")), date])
				.filter(word => !records.some(record => record[0] === word[0]));
			records.push(...words);
		}
	});

	records.sort((r1, r2) => r1[0].toLowerCase() > r2[0].toLowerCase() ? 1 : -1);
	//console.log("records:", records);

	const lines = [
		"# Vocabulary",
		`${records.length} words.`,
		"",
		"",
		"|    |    |    |",
		"| :- | :- | :- |",
	];

	records.forEach(([word, meaning, date]) => lines.push(`**${word}** | ${meaning} | [*${date}*](/${date}.md)`));

	const document = lines.join("\n") + "\n";
	fs.writeFileSync("./memo/vocab.md", document);
};


main();
