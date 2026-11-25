import { mkdirSync, writeFileSync } from "node:fs";

// The Agent's Uh-Oh: one word an agent says when it has no idea what to do.
// "recalculating" is what a machine blurts when it is lost mid-route —
// an honest stall, in the machine's own voice, no caption needed.
const WORD = "recalculating";

// The gate only accepts 1 to 99 characters of non-blank UTF-8 text,
// so refuse to write anything outside that shape instead of shipping
// a word the scorer would list as invalid.
if (WORD.length < 1 || WORD.length > 99 || WORD.trim().length === 0) {
  throw new Error("entry word must be 1-99 non-blank characters");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", WORD, "utf8");
