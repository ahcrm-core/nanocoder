# First-Red Evidence — NanoCoder Issue #1590

**Repository:** `ahcrm-core/nanocoder`
**Branch:** `first-red/1590-context-limit-overflow`
**Run:** `37456311850`
**Job:** `112244677126`
**Workflow head:** `cc55008d5b92daa24f854c6f4f7319877bb376dd`

## Result

Targeted test file executed successfully and produced a valid First-Red.

Existing tests: 18 PASS.

New First-Red cases:

1. `parseContextLimit('0.1')`
   - observed: `0`
   - expected: `null`

2. `parseContextLimit('9'.repeat(308) + 'k')`
   - observed: `Infinity`
   - expected: `null`

**First-Red verdict:** VALID / 2 targeted failures

This failure is preserved before any production-code repair.
