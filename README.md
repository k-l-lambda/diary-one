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
&ensp; | 2 | 3 | 4 | 5 | [🌅](2025/0606.md "TODAY&#xd;") | 7 | 8
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
