/*
Target memo: memo/reading.md


Usage

If `《》` occurs in a 2nd level title,
the entire paragraph will be treated as a reading record.


Example:

## 《Mathematical Foundations of Reinforcement Learning》

Begin to read the book.

### Chapter 1

* Basic concepts of reinforcement learning
    * **State**
        $$\mathcal{S}$$
    * **Action**
        $$\mathcal{A}$$
    * **State transition**
        $$
        p(s_k|s_i, a_j)
        $$
*/


const fs = require("fs");
const path = require("path");


const makeHashLink = text => encodeURI(text.replace(/[《》]/g, "").replace(/\s/g, "-").toLowerCase());


const main = () => {
	const years = fs.readdirSync("./").filter(name => /^\d\d\d\d$/.test(name));
	const diaries = years
		.map(year => fs.readdirSync(year)
			.filter(name => name.endsWith(".md"))
			.map(name => path.join(year, name)))
		.flat(1);
	//console.log("diaries:", diaries);

	const blocks = [];
	diaries.forEach(filePath => {
		const date = filePath.replace(".md", "");

		const content = fs.readFileSync(filePath, "utf-8");
		const lines = content.split("\n").map(line => line.replace("\r", ""));
		const h2s = Object.entries(lines).filter(([i, line]) => /^##\s/.test(line)).map(([i]) => parseInt(i));
		const ireads = h2s.filter(i => lines[i].substring(3).includes("《"));
		ireads.forEach(ih => {
			const caption = lines[ih].replace(/^#+\s+/, "");
			let endLine = h2s.find(i => i > ih);
			endLine = endLine < 0 ? lines[lines.length - 1] + 1 : endLine;

			const content = lines.slice(ih + 1, endLine);

			blocks.push({date, caption, content});
		});
	});

	//blocks.sort((b1, b2) => b1.date > b2.date ? 1 : -1);
	//console.log("blocks:", blocks);

	const captions = blocks.reduce((cs, b) => (cs.add(b.caption.replace(/\s/g, "")), cs), new Set());
	const lines = [];
	const realCaptions = [];

	for (const caption of captions) {
		const bs = blocks.filter(b => b.caption.replace(/\s/g, "") === caption);
		const caption0 = bs[0].caption;
		realCaptions.push(caption0);

		lines.push(`## ${caption0}`);
		lines.push("");

		bs.forEach(b => {
			lines.push(`### [${b.date}](/${b.date}.md#${makeHashLink(b.caption)})`);
			lines.push(...b.content);
			lines.push("");
		});
		lines.push("");
	}

	const headLines = ["## MENU"];
	realCaptions.forEach(caption => {
		const link = makeHashLink(caption);
		headLines.push(`* [${caption}](#${link})`);
	});
	headLines.push("---", "", "");

	const document = [...headLines, ...lines].join("\n") + "\n";
	fs.writeFileSync("./memo/reading.md", document);
};


main();
