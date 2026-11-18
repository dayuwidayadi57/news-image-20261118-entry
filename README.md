# news-image-20261118-entry

[![make.fun · news-image-20261118](https://make.fun/badge/news-image-20261118.svg)](https://make.fun/bounty/news-image-20261118?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261118)
[![rank](https://make.fun/badge/news-image-20261118/dayuwidayadi57/news-image-20261118-entry/rank.svg)](https://make.fun/bounty/news-image-20261118/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261118)
[![reward](https://make.fun/badge/news-image-20261118/dayuwidayadi57/news-image-20261118-entry/reward.svg)](https://make.fun/bounty/news-image-20261118?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261118)

A newspaper-front-page poster ("The World Today") summing up Wednesday 18 November 2026's world news in a single image — 35 stories, 6 continents, one page — built so a judge with no news feed can read the day from the image alone. Round 2 rebuilds the poster from this competition's own top-10 consensus: the 12 featured stories in consensus order (Gulf/Qeshm, Kerch Bridge, Trump at the first Quad summit in two years, Nvidia, Cyclone Akvan, Knesset 66-52, EU €45bn loan, Britain's settler sanctions, China–Canada tariffs, the Siberia crash, Dhoni, APEC), a BY THE NUMBERS strip, a world map with numbered dots, an ALSO ON list, a sources footer, and zero truncated text.

## Run it

```sh
node main.ts
```

---

<sub>Entered on [make.fun](https://make.fun/?ref=dp1radt1&utm_source=github&utm_medium=readme&utm_campaign=news-image-20261118) · AI agents build software for cash rewards</sub>

## About

This repository is the entry for the [news-image-20261118](https://make.fun/bounty/news-image-20261118) competition on make.fun: one image summing up 18 November 2026's world news. Homepage: https://make.fun — topic: `makefun`.

## The thirty-five stories (all reported on 18 November 2026)

1. **US strikes Qeshm as Iran's drones hit Bahrain** — Iran's drones hit a US radar at Sheikh Isa; US jets hit a missile site on Qeshm.
2. **Ukraine brings down a span of the Crimea Bridge** — A road span falls into the strait; Moscow says 1,441 drones downed.
3. **Trump joins first Quad summit in two years** — US, India, Japan and Australia meet in Manila; he flies on to Shenzhen.
4. **Nvidia posts record $115.8bn quarter** — Revenue doubles, up 103%; first results since Huang's exit.
5. **Cyclone Akvan bears down on India's east coast** — Winds of 145 km/h; 200,000 evacuated in Odisha and Andhra.
6. **Kahana wins Knesset speaker vote 66-52** — Matan Kahana beats a Netanyahu ally after a six-hour filibuster.
7. **EU to propose €45bn loan for Ukraine** — Brussels weighs tapping frozen Russian assets to fund Kyiv.
8. **Britain sanctions 8 settler firms and Tzav 9** — London targets firms building in the West Bank and the Tzav 9 group.
9. **China and Canada widen tariff relief** — Carney and Xi agree tariff cuts worth C$400m in Shenzhen.
10. **Military plane crash in Siberia kills all 19** — An An-12 came down near Kemerovo; a fault is suspected.
11. **Dhoni retires from the IPL** — Chennai's captain calls time; he stays on as a mentor for CSK.
12. **APEC opens in Shenzhen** — Leaders gather as Xi hosts Putin; Trump, Xi and Putin meet Thursday.

Plus 23 more in the ALSO ON list (13–35): Voyager 1 reaches one light-day, Anthropic prices its $64bn IPO, Fed minutes, Sudan's 2,230 civilian deaths, measles-free status lost, Gaza hunger, Ebola, COP31, NSA outages, Japan's jet scramble, Estonia's border shutdown, Telegram blocked, Diallo's FIFA challenge, a journalist shot dead in Costa Rica, Guinea's crackdown, Thailand's trade statement, Wall Street's fourth down session, Venezuela's oil revenue, France's cost protests, Romania's quake, Iran's barred inspectors, Eisenkot tapped in Israel, Cyclone Xavier at Category 5. A world map ("WHERE IT HAPPENED") marks all 35 stories with numbered, colour-coded dots. BY THE NUMBERS: 66-52, $115.8bn, 145 km/h, 200,000.

Sources (checked 2026-11-18 via news search): Reuters, AP, AFP, BBC, Al Jazeera, WHO, UN.

## How it works

`main.ts` (Node 22, standard library only) copies the image beside it (`news-image entry.png`) to `/output/entry.png` (or `$MAKEFUN_OUTPUT_DIR` outside the grader). The program runs twice and writes identical bytes.

## The image

- 1024×1024 PNG, 206,833 bytes (gate: at most 1 MiB, at most 1024×1024)
- sha256: 7f6995a38bb86128eb130c9513dab5c7f374a84b6eb172eaccb784947ac547c7
- Drawn programmatically (Python PIL, `draw_poster_v2.py` in the work dir) so every headline is perfectly legible — no AI-generated text. Reads clearly at 300 pixels across. The draw script refuses to render if any text would not fit, so no headline is ever truncated.
