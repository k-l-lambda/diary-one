
const fs = require("fs");
const path = require("path");


const NAV_MARK = ">:sailboat:";

const pathToDate = str => str && str.match(/(\d\d\d\d)\./)[1];


const makeBar = (date, prev, next) => {
	const content = fs.readFileSync(date, "utf-8");
	let lines = content.split("\n").map(line => line.replace("\r", ""));
	const ibar = lines.findIndex(line => line.startsWith(NAV_MARK));

	if (ibar >= 0) {
		const urls = lines[ibar].match(/\([^()]+\)/g);
		if (urls) {
			const [defaultPrev, defaultNext] = urls.map(url => url.replace(/^\(|\)$/g, "")).concat([null]);
			prev = prev || defaultPrev;
			next = next || defaultNext;
		}
	}

	const bar = [
		`${NAV_MARK} &ensp;`,
		prev && `[*${pathToDate(prev)}* **&#x21e6;**](${prev})`,
		`&ensp; ${date.substring(0, 4)}/**${pathToDate(date)}** &ensp;`,
		next && `[**&#x21e8;** *${pathToDate(next)}*](${next})`,
	].filter(Boolean).join(" ");

	if (ibar >= 0)
		lines.splice(ibar, 1, bar);
	else
		lines.unshift("", bar, "");

	const newContent = lines.join("\n");
	fs.writeFileSync(date, newContent);
};


const relativeTo = (p1, p2) => path.relative(path.dirname(p1), p2);


const buildNavigator = (processAll = false) => {
	const now = new Date();
	const year = now.getFullYear().toString();

	if (processAll) {
		let lastDate = null;

		for (let y = 2023; y <= year; ++y) {
			const dates = fs.readdirSync(y.toString())
				.filter(name => name.endsWith(".md"))
				.sort();

			for (const d of dates) {
				const date = path.join(y.toString(), d);
				if (lastDate) {
					makeBar(date, relativeTo(date, lastDate), null);
					makeBar(lastDate, null, relativeTo(lastDate, date));
				}

				lastDate = date;
			}
		}
	}
	else {
		if (!fs.existsSync(year))
			return;

		const dates = fs.readdirSync(year)
			.filter(name => name.endsWith(".md"))
			.sort();

		const lastDate = path.join(year, dates.pop());
		let date2 = dates.pop();
		let yestodayYear = year;
		if (!date2) {	// crossing years
			yestodayYear = (now.getFullYear() - 1).toString();
			const dates2 = fs.readdirSync(yestodayYear)
				.filter(name => name.endsWith(".md"))
				.sort();

				date2 = dates2.pop();
		}
		const lastDate2 = date2 && path.join(yestodayYear, date2);

		if (lastDate && lastDate2) {
			makeBar(lastDate, relativeTo(lastDate, lastDate2), null);
			makeBar(lastDate2, null, relativeTo(lastDate2, lastDate));
		}
	}
};


module.exports = {buildNavigator};
