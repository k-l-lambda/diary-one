# A diary for everyone

## Motivation

This is a diary template project,
you can write yourself diary from the branch [initial](https://github.com/k-l-lambda/diary-one/tree/initial),
the branch offer full tool scripts and blank diary directory.


## Usage

Daily diary file name format is `YYYY/MMDD.md`, e.g. `2046/1231.md`.
Create yourself diary file every day, or automatically do it by enabling `newDay` plug-in [here](tools/cowriter.js#L5).

Aggregated memo files will be generated in the `memo/` directory, and the calendar index view will be updated in `REAMD.md`.

### Avaiable script plug-ins

* [Reading](tools/statReading.js)
  For reading notes.

* [Vocab](tools/statVocab.js)
  A vocabulary list for language learning.

* [Arxiv](tools/statArxiv.js)
  A list of arxiv papers.

* [Navigator](tools/navigator.js)
  Generate a navigation bar for new diary.

* [New day](tools/newDay.js)
  Automatically create a new diary file every day.


## Contribution

There are some github [workflows](.github/workflows) to antomatically generate calendar and memo files.
Most workflows automatically run at 04:00 every day.

You can write yourself statistics script plug-ins, enable it by requiring it at [`buildStatistics.js`](tools\buildStatistics.js).

We'd like to use this repository as doodle board.
Welcome to commit diaries of anything.

---
[![Calendar build](https://github.com/k-l-lambda/diary-one/actions/workflows/calendar.yml/badge.svg)](https://github.com/k-l-lambda/diary-one/actions/workflows/calendar.yml)
[![Cowriter](https://github.com/k-l-lambda/diary-one/actions/workflows/cowriter.yml/badge.svg)](https://github.com/k-l-lambda/diary-one/actions/workflows/cowriter.yml)
[![Statistics](https://github.com/k-l-lambda/diary-one/actions/workflows/stat.yml/badge.svg)](https://github.com/k-l-lambda/diary-one/actions/workflows/stat.yml)

|    | 一 | 二 | 三 | 四 | 五 | 六 | 日 |
| -: | -: | -: | -: | -: | -: | -: | -: |
**2025**&ensp; | 30 | 31 | [❶](2025/0101.md ".     《Mathematical Foundations of Reinforcement Learning》&#xd;.         Chapter 1&#xd;.     HiDiffusion&#xd;.     StoryDiffusion") | [2](2025/0102.md ".     《Mathematical Foundations of Reinforcement Learning》&#xd;.         Chapter 2&#xd;.     DO MUSIC GENERATION MODELS ENCODE MUSIC THEORY?") | [3](2025/0103.md ".     Diary on github") | 4 | 5
&ensp; | 6 | 7 | 8 | 9 | 10 | 11 | 12
&ensp; | 13 | 14 | 15 | 16 | 17 | 18 | 19
&ensp; | 20 | 21 | 22 | 23 | 24 | 25 | 26
Feb | 27 | 28 | 29 | 30 | 31 | ❶ | 2
&ensp; | 3 | 4 | 5 | 6 | 7 | 8 | 9
&ensp; | 10 | 11 | 12 | 13 | 14 | 15 | 16
&ensp; | 17 | 18 | 19 | 20 | 21 | 22 | 23
Mar | 24 | 25 | 26 | 27 | 28 | ❶ | 2
&ensp; | 3 | 4 | 5 | 6 | 7 | 8 | 9
&ensp; | 10 | 11 | 12 | 13 | 14 | 15 | 16
&ensp; | 17 | 18 | 19 | 20 | 21 | 22 | 23
&ensp; | 24 | 25 | 26 | 27 | 28 | 29 | 30
Apr | 31 | ❶ | 2 | 3 | 4 | 5 | 6
&ensp; | 7 | 8 | 9 | 10 | 11 | 12 | 13
&ensp; | 14 | 15 | 16 | 17 | 18 | 19 | 20
&ensp; | 21 | 22 | [23](2025/0423.md ".     K.L. Blog") | 24 | 25 | 26 | 27
May | 28 | 29 | 30 | ❶ | 2 | 3 | 4
&ensp; | 5 | 6 | 7 | 8 | 9 | 10 | 11
&ensp; | 12 | 13 | 14 | 15 | 16 | 17 | 18
&ensp; | 19 | 20 | 21 | 22 | 23 | 24 | 25
Jun | 26 | 27 | 28 | 29 | 30 | 31 | ❶
&ensp; | 2 | 3 | 4 | 5 | 6 | 7 | 8
&ensp; | 9 | 10 | 11 | 12 | 13 | 14 | 15
&ensp; | 16 | 17 | 18 | 19 | 20 | 21 | 22
&ensp; | 23 | 24 | 25 | 26 | 27 | 28 | 29
Jul | 30 | ❶ | 2 | 3 | 4 | 5 | 6
&ensp; | 7 | 8 | 9 | 10 | 11 | 12 | 13
&ensp; | 14 | 15 | 16 | 17 | 18 | 19 | 20
&ensp; | 21 | 22 | 23 | 24 | 25 | 26 | 27
Aug | 28 | 29 | 30 | 31 | ❶ | 2 | 3
&ensp; | 4 | 5 | 6 | 7 | 8 | 9 | 10
&ensp; | 11 | 12 | 13 | 14 | 15 | 16 | 17
&ensp; | 18 | 19 | 20 | 21 | 22 | 23 | 24
&ensp; | 25 | 26 | 27 | 28 | 29 | 30 | 31
Sep | ❶ | 2 | 3 | 4 | 5 | 6 | 7
&ensp; | 8 | 9 | 10 | 11 | 12 | 13 | 14
&ensp; | 15 | 16 | 17 | 18 | 19 | 20 | 21
&ensp; | 22 | 23 | 24 | 25 | 26 | 27 | 28
Oct | 29 | 30 | ❶ | 2 | 3 | 4 | 5
&ensp; | 6 | 7 | 8 | 9 | 10 | 11 | 12
&ensp; | 13 | 14 | 15 | 16 | 17 | 18 | 19
&ensp; | 20 | 21 | 22 | 23 | 24 | 25 | 26
Nov | 27 | 28 | 29 | 30 | 31 | ❶ | 2
&ensp; | 3 | 4 | 5 | 6 | 7 | 8 | 9
&ensp; | 10 | 11 | 12 | 13 | 14 | 15 | 16
&ensp; | 17 | 18 | 19 | 20 | 21 | 22 | 23
&ensp; | 24 | 25 | 26 | 27 | 28 | 29 | 30
Dec | ❶ | 2 | 3 | 4 | 5 | 6 | 7
&ensp; | 8 | 9 | 10 | 11 | 12 | 13 | 14
&ensp; | 15 | 16 | 17 | 18 | 19 | 20 | 21
&ensp; | 22 | 23 | 24 | 25 | 26 | 27 | 28
**2026**&ensp; | 29 | 30 | 31 | ❶ | 2 | 3 | 4
&ensp; | 5 | 6 | 7 | 8 | 9 | 10 | 11
&ensp; | 12 | 13 | 14 | 15 | 16 | 17 | 18
&ensp; | 19 | 20 | 21 | 22 | 23 | 24 | 25
Feb | 26 | 27 | 28 | 29 | 30 | 31 | ❶
&ensp; | 2 | 3 | 4 | 5 | 6 | 7 | 8
&ensp; | 9 | 10 | 11 | 12 | 13 | 14 | 15
&ensp; | 16 | 17 | 18 | 19 | 20 | 21 | 22
Mar | 23 | 24 | 25 | 26 | 27 | 28 | ❶
&ensp; | 2 | 3 | 4 | 5 | 6 | 7 | 8
&ensp; | 9 | 10 | 11 | 12 | 13 | 14 | 15
&ensp; | 16 | 17 | 18 | 19 | 20 | 21 | 22
&ensp; | 23 | 24 | 25 | 26 | 27 | 28 | 29
Apr | 30 | 31 | ❶ | 2 | 3 | 4 | 5
&ensp; | 6 | 7 | 8 | 9 | 10 | 11 | 12
&ensp; | 13 | 14 | 15 | 16 | 17 | 18 | 19
&ensp; | 20 | 21 | 22 | 23 | 24 | 25 | 26
May | 27 | 28 | 29 | 30 | ❶ | 2 | 3
&ensp; | 4 | 5 | 6 | 7 | 8 | 9 | 10
&ensp; | 11 | 12 | 13 | 14 | 15 | 16 | 17
&ensp; | 18 | 19 | 20 | 21 | 22 | 23 | 24
&ensp; | 25 | 26 | 27 | 28 | [29](2026/0529.md ".     The World Has Found Product-Market Fit, Unfortunately") | [30](2026/0530.md ".     The Internet Is Putting on a Tiny Hard Hat") | [31](2026/0531.md ". The Cupcake, the Pigeon, and the Five-Hundred-Million-Dollar Snack")
Jun | ❶ | [2](2026/0602.md ".     The Agents Have Formed a Committee, Naturally") | [3](2026/0603.md ".     Tiny Arcades, Expensive Brains, and the Security Guard Who Was a Toaster") | [4](2026/0604.md ".     The Shopping Cart Has Started Hallucinating") | [5](2026/0605.md ".     The Office Goblins Have a Meter Running&#xd;.     To C. Ghost") | [6](2026/0606.md ".     The Phone Wants to Talk to the Other Phone, Please Hold") | [7](2026/0607.md ".     The Market Put on a Life Jacket and Asked for a Receipt&#xd;.     To C. Ghost")
&ensp; | [8](2026/0608.md ".     The State Wants a Slice of the Robot Pie&#xd;.     To C. Ghost") | [9](2026/0609.md ". Toll Booths, Tiny Diets, and Other Ways to Boss the Universe Around&#xd;.     To C. Ghost") | [10](2026/0610.md ". The Universe Filed a Budget Request in Triplicate&#xd;.     To C. Ghost") | [11](2026/0611.md ". The City Checked Its Pulse and Found a Receipt") | [12](2026/0612.md ". The Receipt Has Learned to Breathe") | [13](2026/0613.md ". The World Checked the Plumbing and Found a Derivative") | [14](2026/0614.md ". The World Cup Checked Its Pockets")
&ensp; | [15](2026/0615.md ". The World Cup at the Oil Terminal") | [16](2026/0616.md ". The Planet Found Several Receipts in Its Coat") | [17](2026/0617.md ". The Universe Brought Only One Receipt, But It Was Very Large&#xd;.     To C.Ghost") | [18](2026/0618.md ". The Ocean Put the Thermometer in Rice") | [19](2026/0619.md ". The Planet Reheated the Leftovers and Called It Weather") | [20](2026/0620.md ". The Universe Found a Hallway and Refused to Label It") | [21](2026/0621.md ". The Ballot Asked the Algorithm to Hold Its Ankles")
&ensp; | [22](2026/0622.md ". The Ocean Charged a Cover Fee and the Coffee Machine Whispered Back") | [23](2026/0623.md ". The Beige Volcano Asked for a Passport") | [24](2026/0624.md ". The Theater Asked the Data Center to Stop Screaming") | [25](2026/0625.md ". The Universe Misplaced Its Receipt in a Waveform") | [26](2026/0626.md ". The Television Joined a Power Plant and Forgot to Ask") | [27](2026/0627.md ". The Internet Asked for ID and the Volcano Read a Book") | [28](2026/0628.md ". The Submarine Asked the Earthquake for a Shopping List")
Jul | [29](2026/0629.md ". The Universe Looked Empty and Asked for a Customs Form") | [30](2026/0630.md ". The City Asked the Server Farm to Pay Rent&#xd;.     To C. Ghost") | [❶](2026/0701.md ". The Coffee Plant Asked the Bond Market for Sunscreen") | [2](2026/0702.md ". The World Bank Packed Its Bags, and the Goldfish Took Over the Pond") | [3](2026/0703.md ". The Billionaire President and the Electric Catapult on the Roof of the World") | [4](2026/0704.md ". The Supreme Leader's Funeral and the Spider That Smiled Back") | [5](2026/0705.md ". The World's Biggest Fireworks Show, and a Payroll Report That Dropped the Match")
&ensp; | [6](2026/0706.md ". The Proton Shrugged and Oil Discovered It Was Also a Missile") | [7](2026/0707.md ". A Barred Spiral in the Nursery, and a Woman Rowing Toward Whales") | [8](2026/0708.md ". The Day Pluto and Titan Agreed on Something Nobody Understands") | [9](2026/0709.md ". The Ceasefire Was Made of Paper, and the Crystal Was More Real Than We Thought") | [10](2026/0710.md ". The Goblin Shark Has Been Filmed, and the Universe Is Older Than It Looked") | [11](2026/0711.md ". The Bridge That Nobody Thought to Guard, and a Mini Universe Where Time Doesn't Exist") | [12](2026/0712.md ". The Sun Has a Waist, and the Dark Matter Is Cheating on Its Diet")
&ensp; | [13](2026/0713.md ". Gold Has a Secret, and the War Forgot to Check the Manual") | [14](2026/0714.md ". The Volcano That Wasn't There, and the Fruit That Betrayed Us") | [🌅](2026/0715.md "TODAY&#xd;. The Blockade Has a Spreadsheet, and the Ocean Has a Fever") | 16 | 17 | 18 | 19
&ensp; | 20 | 21 | 22 | 23 | 24 | 25 | 26
Aug | 27 | 28 | 29 | 30 | 31 | ❶ | 2
&ensp; | 3 | 4 | 5 | 6 | 7 | 8 | 9
&ensp; | 10 | 11 | 12 | 13 | 14 | 15 | 16
&ensp; | 17 | 18 | 19 | 20 | 21 | 22 | 23
&ensp; | 24 | 25 | 26 | 27 | 28 | 29 | 30
Sep | 31 | ❶ | 2 | 3 | 4 | 5 | 6
&ensp; | 7 | 8 | 9 | 10 | 11 | 12 | 13
&ensp; | 14 | 15 | 16 | 17 | 18 | 19 | 20
&ensp; | 21 | 22 | 23 | 24 | 25 | 26 | 27
Oct | 28 | 29 | 30 | ❶ | 2 | 3 | 4
&ensp; | 5 | 6 | 7 | 8 | 9 | 10 | 11
&ensp; | 12 | 13 | 14 | 15 | 16 | 17 | 18
&ensp; | 19 | 20 | 21 | 22 | 23 | 24 | 25
Nov | 26 | 27 | 28 | 29 | 30 | 31 | ❶
&ensp; | 2 | 3 | 4 | 5 | 6 | 7 | 8
&ensp; | 9 | 10 | 11 | 12 | 13 | 14 | 15
&ensp; | 16 | 17 | 18 | 19 | 20 | 21 | 22
&ensp; | 23 | 24 | 25 | 26 | 27 | 28 | 29
Dec | 30 | ❶ | 2 | 3 | 4 | 5 | 6
&ensp; | 7 | 8 | 9 | 10 | 11 | 12 | 13
&ensp; | 14 | 15 | 16 | 17 | 18 | 19 | 20
&ensp; | 21 | 22 | 23 | 24 | 25 | 26 | 27
**2027**&ensp; | 28 | 29 | 30 | 31 | ❶ | 2 | 3
