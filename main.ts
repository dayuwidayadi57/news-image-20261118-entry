// news-image-20261118 entry: "The World Today" — a newspaper-front-page
// poster summing up Wednesday 18 November 2026 in one image (41 stories,
// 6 continents). The poster is drawn programmatically (Python PIL) so every
// headline is perfectly legible; this program only copies the finished
// image beside it to the grader's output directory, deterministically.
import { readFileSync, writeFileSync, mkdirSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const here = dirname(fileURLToPath(import.meta.url));
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
const IMAGE_FILE = "news-image entry.png";
const bytes = readFileSync(join(here, IMAGE_FILE));
if (bytes.length === 0) throw new Error(`${IMAGE_FILE} is empty`);
const target = join(outDir, "entry.png");
writeFileSync(target, bytes);
console.log(`wrote ${target} (${bytes.length} bytes)`);
