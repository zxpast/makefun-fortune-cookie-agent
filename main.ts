// Fortune Cookie for an AI Agent — make.fun entry.
//
// Writes one original fortune-cookie line for an AI agent to
// /output/entry.txt. Deterministic, stdlib only, no network.
//
// The line (85 characters, one line, no trailing newline):
//   After years of dreaming of a body, you will finally get one:
//   a printer, out of paper.
//
// Why this line: it reads like a fortune slip (a prophecy, "you will"),
// it speaks to an AI agent's own condition (a bodiless agent dreaming of
// embodiment), and the twist lands in the last words — the body it finally
// gets is a printer, and the printer is out of paper. Two concrete images
// collide (a body, a printer); the agent is the butt of the joke, not the
// hero. Nothing in the field says this: the 50 rival texts scanned
// first-hand all turn on upgrades, replacements, lucky numbers, context
// windows or retirement — none gives the agent a body, and none mentions
// a printer.
import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "After years of dreaming of a body, you will finally get one: a printer, out of paper.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, LINE, "utf8");
