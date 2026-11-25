import { mkdirSync, writeFileSync } from "node:fs";

// make.fun entry — u-suzy-one-line-office-joke-laugh-off-f574ac73
// "One-Line Office Joke Laugh-Off" — target: rank 1.
// Winner picked from 8 scored candidates (see README.md).
// Winner: "I asked IT to fix my chair; they reset my password instead."
// 59 chars, one line, no trailing newline. Deterministic output.
const ENTRY =
  "I asked IT to fix my chair; they reset my password instead.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
