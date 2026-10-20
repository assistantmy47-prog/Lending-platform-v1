import test from 'node:test';
import assert from 'node:assert/strict';
import { initialState, act, simulate, visibleItems } from '../src/state.js';
test('payment remains held through referral and commercial direction', () => {
  let s=act(initialState(),'eligibility','refer');
  s.role='originator'; s=act(s,'commercial','change');
  assert.equal(s.flags.eligibilityResolved,undefined);
  s.role='middle'; s=act(s,'confirmation','correct');
  assert.throws(()=>simulate(s,'payment'));
});
test('parallel confirmation and evidence permit guarded downstream progression', () => {
  let s=initialState(); s.role='middle'; s=act(s,'confirmation','correct');
  s=simulate(s,'evidence'); s.role='operations';
  s=act(s,'eligibility','map'); s=act(s,'draw','approve');
  assert.throws(()=>simulate(s,'payment')); // Operations cannot release payment
  s.role='middle'; s=simulate(s,'payment');
  assert.equal(s.flags.paymentReconciled,true);
  assert.throws(()=>simulate(s,'payment')); // no duplicate execution
});
test('unverified mapping and cross-role actions are rejected', () => {
  const s=initialState();
  assert.throws(()=>act(s,'eligibility','map'));
  assert.throws(()=>act(s,'confirmation','correct'));
  assert.throws(()=>act(s,'draw','approve'));
});
test('rule submission does not activate a rule or resolve collateral', () => {
  const s=act(initialState(),'rule','submit');
  assert.equal(s.flags.ruleSubmitted,true);
  assert.equal(s.flags.ruleActive,undefined);
  assert.equal(s.flags.eligibilityResolved,undefined);
  assert.throws(()=>act(s,'rule','submit'));
});
test('role feed uses chronology and filters without mixing responsibilities', () => {
  const s=initialState(); s.role='middle';
  assert.ok(visibleItems(s).every(i=>i.role==='middle'));
  s.role='operations'; s.filter='Decision';
  const list=visibleItems(s);
  assert.ok(list.every(i=>i.kind==='Decision'));
  assert.deepEqual(list.map(i=>i.time),list.map(i=>i.time).sort().reverse());
});
