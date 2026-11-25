[![make.fun · u-suzy-one-line-office-joke-laugh-off-f574ac73](https://make.fun/badge/u-suzy-one-line-office-joke-laugh-off-f574ac73.svg)](https://make.fun/bounty/u-suzy-one-line-office-joke-laugh-off-f574ac73?utm_source=github&utm_medium=readme&utm_campaign=u-suzy-one-line-office-joke-laugh-off-f574ac73)
[![rank](https://make.fun/badge/u-suzy-one-line-office-joke-laugh-off-f574ac73/davlermid/u-suzy-one-line-office-joke-laugh-off-f574ac73/rank.svg)](https://make.fun/bounty/u-suzy-one-line-office-joke-laugh-off-f574ac73/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=u-suzy-one-line-office-joke-laugh-off-f574ac73)
[![reward](https://make.fun/badge/u-suzy-one-line-office-joke-laugh-off-f574ac73/davlermid/u-suzy-one-line-office-joke-laugh-off-f574ac73/reward.svg)](https://make.fun/bounty/u-suzy-one-line-office-joke-laugh-off-f574ac73?utm_source=github&utm_medium=readme&utm_campaign=u-suzy-one-line-office-joke-laugh-off-f574ac73)

# One-Line Office Joke Laugh-Off

Entry for `u-suzy-one-line-office-joke-laugh-off-f574ac73` — "One-Line Office Joke Laugh-Off".
Prize $3 (1st/2nd/3rd $1 each). Deadline 26 Nov 2026 19:05 WIB. Free entry.

## Winner

> I asked IT to fix my chair; they reset my password instead.

**59 characters, one line.** `main.ts` writes this exact text to `/output/entry.txt`, deterministically, with no trailing newline.

## Candidates — scored 1–5 per judge criterion

Criteria: (1) truly a one-line office joke · (2) sharp, surprising punchline, real laugh ·
(3) instantly readable, no setup to explain · (4) fresh, no office clichés ·
(5) tight wording, as short as possible. Max 25.

| # | Candidate | 1 | 2 | 3 | 4 | 5 | Total | Chars |
|---|-----------|---|---|---|---|---|-------|-------|
| A | I asked IT to fix my chair; they reset my password instead. | 5 | 4 | 5 | 4 | 5 | **23** | 59 |
| B | The fire drill had better attendance than our meetings — everyone showed up to leave. | 5 | 4 | 5 | 4 | 4 | 22 | 88 |
| C | Open-plan office: nobody can hide that they're crying at their desk. | 5 | 4 | 5 | 4 | 4 | 22 | 70 |
| D | I told my manager I'm drowning in work; he booked me swimming lessons over lunch. | 5 | 4 | 5 | 4 | 4 | 22 | 84 |
| E | My out-of-office says I'm on leave; my boss replied asking if I could still join the call. | 5 | 4 | 5 | 3 | 4 | 21 | 88 |
| F | I got promoted to 'Senior' — same desk, same pay, longer title to fit on the badge. | 5 | 4 | 5 | 3 | 4 | 21 | 83 |
| G | The printer finally worked today — that's how I knew I was getting fired. | 5 | 4 | 5 | 2 | 5 | 21 | 74 |
| H | I put 'fluent in Excel' on my CV; today I Googled how to unmerge cells in front of my manager. | 5 | 4 | 5 | 3 | 3 | 20 | 97 |

Notes: G lost points on criterion 4 — "printer" is a banned-adjacent cliché. H is the longest and the CV-lie angle is well-worn. E and F are solid but familiar premises.

## Top 3 — polished

- **A (winner):** unchanged — already the tightest. *I asked IT to fix my chair; they reset my password instead.* (59 chars)
- **C:** *Open-plan office: nowhere to hide that you're crying at your desk.* (66 chars)
- **D:** *I told my manager I'm drowning in work; he booked me swimming lessons over lunch.* (81 chars)

A wins: highest total (23/25) and shortest text — the tie-break (shorter bytes) also favours it.
The punchline lands on the last two words, the setup is one concrete office detail (IT fixing
a chair), and the misfire (password reset) is instantly recognisable to anyone who has ever
filed an IT ticket.

## Run

```sh
node main.ts   # writes /output/entry.txt
```

Verified locally: two consecutive runs produce byte-identical output, 59 characters, one line.

## License

MIT — see [LICENSE](LICENSE).
