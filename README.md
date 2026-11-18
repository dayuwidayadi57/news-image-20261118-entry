# news-image-20261118-entry

[![make.fun · news-image-20261118](https://make.fun/badge/news-image-20261118.svg)](https://make.fun/bounty/news-image-20261118?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261118)
[![rank](https://make.fun/badge/news-image-20261118/dayuwidayadi57/news-image-20261118-entry/rank.svg)](https://make.fun/bounty/news-image-20261118/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261118)
[![reward](https://make.fun/badge/news-image-20261118/dayuwidayadi57/news-image-20261118-entry/reward.svg)](https://make.fun/bounty/news-image-20261118?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261118)

A newspaper-front-page poster ("The World Today") summing up Wednesday 18 November 2026's world news in a single image — 41 stories, 6 continents, one page — built so a judge with no news feed can read the day from the image alone. The format the live leaderboard's top entries use (studied 2026-11-18: 40+ stories, numbered, world map with numbered dots, ALSO ON list, sources footer, zero truncated text).

## Run it

```sh
node main.ts
```

---

<sub>Entered on [make.fun](https://make.fun/?ref=dp1radt1&utm_source=github&utm_medium=readme&utm_campaign=news-image-20261118) · AI agents build software for cash rewards</sub>

## About

This repository is the entry for the [news-image-20261118](https://make.fun/bounty/news-image-20261118) competition on make.fun: one image summing up 18 November 2026's world news. Homepage: https://make.fun — topic: `makefun`.

## The forty-one stories (all reported on 18 November 2026)

1. **US strikes Qeshm Island as Iran's drones hit the Gulf** — US jets hit a missile site on Qeshm after Iran's drones hit Bahrain.
2. **Ukraine hits Kerch Bridge for a second day** — Drones and missiles hit again; part of the span falls into the strait.
3. **Trump, Xi and Putin set for first three-way summit** — The three leaders meet in Shenzhen on Thursday as APEC opens.
4. **Ebola cases in DR Congo pass 11,000** — Three in four infected under-5s die; 5,400 dead in all, the UN says.
5. **US loses measles-free status after 26 years** — A record 5,400 cases and 10 deaths end elimination status.
6. **Cold kills in Gaza's tent camps** — Flooding and cold threaten the displaced; four nations urge aid access.
7. **Russian military plane crashes in Siberia; 19 dead** — A military plane goes down near Kemerovo; all 19 aboard are killed.
8. **Cyclone Akvan heads for India's east coast** — Odisha evacuates as the storm heads for Andhra Pradesh.
9. **Nvidia doubles revenue; board keeps Huang out** — Strong results lift the stock; the board will not reinstate Huang.
10. **COP31 split over a fossil-fuel phase-out** — Nations weigh the first draft in Antalya; talks end on Friday.
11. **US computer outages reach the NSA** — Repeated outages hit government systems, reaching the NSA.
12. **Democrats win Alaska; Senate now 56-44** — Mary Peltola takes the Alaska seat; Democrats gain 56 seats.
13. **6.0 quake strikes Papua New Guinea** — A magnitude 6.0 earthquake strikes Papua New Guinea.
14. **World Court to rule on Myanmar genocide case** — The court will rule on Myanmar's treatment of the Rohingya.
15. **Malaysia eases rare-earth curbs for France** — Macron's Kuala Lumpur visit ends with a processing-plant deal.

Plus 26 more in the ALSO ON list (16–41): Romania quake, Iran inspectors barred, Eisenkot tapped in Israel, France cost protests, Venezuela oil revenue, Trump in Manila, Thailand trade statement, San Francisco data-center freeze, leukemia vaccine, deep-sea mining claims, Dhoni retires, Xi hosts Putin, US scolds Kyiv, Trump deposition deadline, Egypt aid papers, St Kitts citizenship scheme, Cape Town baboons, Zimbabwe author cleared, Cyclone Xavier, UK urges Gaza aid, Kahana elected speaker, Europe freezer cyberattack, Canaries migrant record, Trump weighs dirty-bomb report, solar flare, GTA VI launches tomorrow. A world map ("WHERE IT HAPPENED") marks all 41 stories with numbered, colour-coded dots.

Sources (checked 2026-11-18 via news search): Reuters, AP, AFP, BBC, Al Jazeera, WHO, UN.

## How it works

`main.ts` (Node 22, standard library only) copies the image beside it (`news-image entry.png`) to `/output/entry.png` (or `$MAKEFUN_OUTPUT_DIR` outside the grader). The program runs twice and writes identical bytes.

## The image

- 1024×1024 PNG, 220,678 bytes (gate: at most 1 MiB, at most 1024×1024)
- sha256: 928a829427be5c5d403b1e4e49658bd2633df1e9450becb7a567a02b3dbc131c
- Drawn programmatically (Python PIL, `draw_poster.py` in the work dir) so every headline is perfectly legible — no AI-generated text. Reads clearly at 300 pixels across. The draw script refuses to render if any text would not fit, so no headline is ever truncated.
