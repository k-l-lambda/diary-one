# A diary for everyone

[![Calendar build](https://github.com/k-l-lambda/diary-one/actions/workflows/calendar.yml/badge.svg)](https://github.com/k-l-lambda/diary-one/actions/workflows/calendar.yml)
[![Cowriter](https://github.com/k-l-lambda/diary-one/actions/workflows/cowriter.yml/badge.svg)](https://github.com/k-l-lambda/diary-one/actions/workflows/cowriter.yml)
[![Statistics](https://github.com/k-l-lambda/diary-one/actions/workflows/stat.yml/badge.svg)](https://github.com/k-l-lambda/diary-one/actions/workflows/stat.yml)
---

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


{{CALENDAR}}
