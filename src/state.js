import { scenarios, commercialTask } from './data.js';
export const initialState = () => ({ version: 1, role: 'operations', page: 'feed', filter: 'All types', dealFilter: 'all', query: '', watched: ['blackstone', 'meridian'], completed: {}, flags: {}, history: [], drafts: [], proposal: null });
export function items(state) { return [...scenarios, ...(state.flags.commercialRequested ? [commercialTask] : [])]; }
export function canAct(state, item, choice) { return item.role === state.role && !state.completed[item.id] && (!choice.gate || !!state.flags[choice.gate]); }
export function act(state, itemId, choiceId) {
  const item = items(state).find(i => i.id === itemId);
  const choice = item?.choices.find(c => c.id === choiceId);
  if (!choice || !canAct(state, item, choice)) throw new Error('Action is unavailable until its role and dependencies are satisfied.');
  const next = structuredClone(state);
  next.completed[itemId] = choice.outcome;
  if (itemId === 'eligibility' && choiceId === 'refer') next.flags.commercialRequested = true;
  if (itemId === 'eligibility' && choiceId === 'map') next.flags.eligibilityResolved = true;
  if (itemId === 'draw') next.flags.planApproved = true;
  if (itemId === 'confirmation') next.flags.confirmationCorrected = true;
  if (itemId === 'rule') next.flags.ruleSubmitted = true;
  if (itemId === 'late-pattern') next.flags.submissionWatch = true;
  if (itemId === 'similarity') next.flags.adaptationDraft = true;
  next.history.unshift({ time: new Date().toISOString(), role: state.role, deal: item.deal, text: choice.outcome });
  return next;
}
export function simulate(state, event) {
  const next = structuredClone(state);
  if (event === 'evidence') {
    next.flags.locationVerified = true;
    delete next.completed.eligibility;
    next.history.unshift({ time: new Date().toISOString(), role: 'operations', deal: 'blackstone', text: 'Simulation: revised evidence verifies the same approved location. Operations must still apply the mapping.' });
  } else if (event === 'payment') {
    if (state.role !== 'middle' || !state.flags.planApproved || !state.flags.confirmationCorrected || next.flags.paymentReconciled) throw new Error('Payment simulation requires Middle Office, approved plan and corrected confirmation.');
    next.flags.paymentReconciled = true;
    next.history.unshift({ time: new Date().toISOString(), role: 'middle', deal: 'blackstone', text: 'Simulation only: authorised release, settlement receipt and reconciliation completed. No real funds moved.' });
  } else throw new Error('Unknown simulation event');
  return next;
}
export function visibleItems(state) {
  return items(state).filter(i => i.role === state.role && (state.page !== 'insights' || ['Insight', 'Similarity', 'Rule proposal'].includes(i.kind)) && (state.filter === 'All types' || i.kind === state.filter) && (state.dealFilter === 'all' || i.deal === state.dealFilter) && `${i.title} ${i.summary}`.toLowerCase().includes(state.query.toLowerCase())).sort((a,b) => b.time.localeCompare(a.time));
}
export function loadState(storage) {
  try { const value = JSON.parse(storage.getItem('lending-v1')); return value?.version === 1 && value.flags && value.completed && Array.isArray(value.history) ? { ...initialState(), ...value } : initialState(); } catch { return initialState(); }
}
