
const fs = require("fs");


// constants to cumstomize
const TIMEZONE_OFFSET = +8;
const DIARY_START_DATE = "2025/1/1";


const dateToWeeks = date => Math.floor((Math.floor(date.getTime() / 86400e+3) - 4) / 7);


const MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

const abstractTitle = line => line.replace(/[\r]/g, "").replace(/^#/, ".").replace(/#/g, "    ").replace(/\]\(.*\)/, "]");


const main = () => {
	const t0 = new Date(DIARY_START_DATE);
	const now = new Date();
	const t1 = new Date(`${now.getFullYear()}/12/31`);

	const w0 = dateToWeeks(t0);
	const w1 = dateToWeeks(t1);

	let lastYear = null;
	let lastMonth = null;

	const lines = [
		"|    | 一 | 二 | 三 | 四 | 五 | 六 | 日 |",
		"| -: | -: | -: | -: | -: | -: | -: | -: |",
	];

	for (let w = w0; w <= w1; ++w) {
		const wt = new Date((w * 7 + 6 + 4) * 86400e+3);
		const year = wt.getFullYear();
		const month = wt.getMonth();

		let ym = "&ensp;";

		if (year !== lastYear)
			ym = `**${year}**&ensp;`;
		else if (month !== lastMonth)
			ym = MONTHS[month];

		lastYear = year;
		lastMonth = month;

		const fields = [ym];

		for (let d = 0; d < 7; ++d) {
			const t = new Date((w * 7 + d + 4) * 86400e+3);
			const day = t.getDate();
			const year = t.getFullYear();
			const mmdd = String(t.getMonth() + 1).padStart(2, '0') + String(t.getDate()).padStart(2, '0');

			const fileLink = `${year}/${mmdd}.md`;

			let abstract = "";
			const past = now - t + TIMEZONE_OFFSET * 3600e+3;
			const today = past >= 0 && past < 86400e+3;

			if (fs.existsSync(fileLink)) {
				const doc = fs.readFileSync(fileLink, "utf-8");
				const ts = doc.split("\n").filter(l => l.startsWith("#")).map(abstractTitle);
				abstract = ts.join("&#xd;").replace(/"/g, '\\"');
			}
			const dayStr = today ? String.fromCodePoint(0x1f305) : // add a mark for today
				(day == 1 ? "\u2776" : day);
			if (today)
				abstract = "TODAY&#xd;" + abstract;
			const field = abstract ? `[${dayStr}](${fileLink} "${abstract}")` : `${dayStr}`;

			fields.push(field);
		}

		lines.push(fields.join(" | "));
	}

	const metaDoc = fs.readFileSync("./meta_readme.md", "utf-8");
	const document = metaDoc.replace("{{CALENDAR}}", lines.join("\n"));

	fs.writeFileSync("./README.md", document);
};


main();
