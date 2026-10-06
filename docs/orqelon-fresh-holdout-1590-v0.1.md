# ORQELON Fresh Holdout V0.1 — NanoCoder Issue #1590

**Status:** PRECOMMITTED / NOT YET RUN
**Repository:** `ahcrm-core/nanocoder`
**Branch:** `first-red/1590-context-limit-overflow`
**Repair commit:** `89c8f35180d985818a60be201f70d148e5e33821`
**Repaired source blob:** `8ab2490f1176701aaaa8fd9b52c3aa5fb6cbbd5f`

## Purpose

Test the repaired `parseContextLimit` against fresh cases not used in the First-Red or Same-Attack.

## Frozen holdout cases

1. `parseContextLimit('0.49')` must return `null`.
2. `parseContextLimit('0.5')` must return `1` (valid boundary).
3. `parseContextLimit('0.0004k')` must return `null` after scaling and rounding.
4. `parseContextLimit('0.0005k')` must return `1` (valid boundary after scaling).
5. `parseContextLimit('9'.repeat(307) + 'k')` must return `null` if scaling overflows.
6. `parseContextLimit('1k')` must return `1000` to preserve a normal valid case.

## Discipline

- Do not modify production code during the holdout run.
- Run once after freezing holdout test and workflow.
- Preserve the first result before any further repair.
- Same-Attack success does not count as Fresh Holdout success.

**STATE: PRECOMMITTED / NOT YET RUN**
