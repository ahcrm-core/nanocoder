# ORQELON Fresh Holdout V0.1 — NanoCoder Issue #1590 — Result

**Status:** PASS
**Run:** `37457008371`
**Job:** `112246973296`
**Workflow head:** `2da76f65d4cb2da66a6339c000f190f674d46c96`
**Repair commit:** `89c8f35180d985818a60be201f70d148e5e33821`
**Frozen repaired source blob:** `8ab2490f1176701aaaa8fd9b52c3aa5fb6cbbd5f`
**Frozen holdout blob:** `5516da25efc99339c13f8d376d4062bf6e3a04f6`

## Result

Fresh Holdout V0.1 executed exactly once against the frozen repaired source.

All 6 fresh cases passed:

1. `parseContextLimit('0.49') -> null`
2. `parseContextLimit('0.5') -> 1`
3. `parseContextLimit('0.0004k') -> null`
4. `parseContextLimit('0.0005k') -> 1`
5. `parseContextLimit('9'.repeat(307) + 'k') -> null`
6. `parseContextLimit('1k') -> 1000`

**Fresh Holdout verdict:** `6/6 PASS`

## Historical preservation

The valid First-Red remains preserved:
- Run `37456311850`
- 2 targeted failures:
  - `0.1 -> 0`
  - huge value with `k -> Infinity`

The later Same-Attack and Fresh Holdout successes do not erase that evidence.

## Bounded claim

Within this tested scope, the minimal repair correctly validates the final transformed context-limit result after scaling and rounding, while preserving representative valid boundary values.

This does not establish:
- full repository regression closure;
- upstream acceptance;
- merge authority;
- release or production readiness.

**STATE: VALID FIRST-RED -> MINIMAL REPAIR -> SAME-ATTACK 20/20 PASS -> FRESH HOLDOUT 6/6 PASS**
