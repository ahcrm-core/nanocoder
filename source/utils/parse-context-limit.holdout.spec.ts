import test from 'ava';
import {parseContextLimit} from './parse-context-limit';

test('fresh holdout - rejects sub-half plain value after rounding', t => {
	t.is(parseContextLimit('0.49'), null);
});

test('fresh holdout - accepts plain rounding boundary', t => {
	t.is(parseContextLimit('0.5'), 1);
});

test('fresh holdout - rejects sub-half after k scaling', t => {
	t.is(parseContextLimit('0.0004k'), null);
});

test('fresh holdout - accepts k scaling boundary', t => {
	t.is(parseContextLimit('0.0005k'), 1);
});

test('fresh holdout - rejects overflow introduced by k scaling on a different magnitude', t => {
	t.is(parseContextLimit('9'.repeat(307) + 'k'), null);
});

test('fresh holdout - preserves normal k value', t => {
	t.is(parseContextLimit('1k'), 1000);
});
