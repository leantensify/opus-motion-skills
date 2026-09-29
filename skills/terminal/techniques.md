# Terminal — Techniques

These are reusable building blocks, not mandatory effects. Pick the smallest set that makes the brief clearer.

| # | Technique | How to use it |
| --- | --- | --- |
| 01 | Command Prompt | Open with one believable command that declares the action. |
| 02 | Streaming Logs | Emit concise status lines with semantic hierarchy: info, ok, warn, error. |
| 03 | Progress Fill | Use ASCII or block progress bars to pace a build/render process. |
| 04 | ASCII Banner | Resolve a key phrase into large terminal block characters. |
| 05 | Cursor Blink | Use the insertion point as a timing device between commands. |
| 06 | Diff Reveal | Show added/removed lines to visualize change. |
| 07 | Process Table | Animate rows of jobs, memory, or tasks as a compact system view. |
| 08 | Spinner State | Use deterministic spinner frames during short waits. |
| 09 | Prompt Chain | Let one command generate the next prompt rather than jumping scenes. |
| 10 | Exit Code Payoff | End a sequence with success status, elapsed time, or build artifact path. |

## Combination rule

Use 2–4 primary techniques in a short scene. Repetition should create a system; adding every technique creates noise.

## QA

- Can the scene still be identified as Terminal with the color removed?
- Is the motion driven by the style's engine rather than generic transforms?
- Does at least one technique directly support the message?
