# Handover — 20 October 2026

## Current milestone
First interactive browser prototype implemented. Existing product and judgement documents remain authoritative for the broader vision. This build is a deliberately scoped first slice; it does not implement every item in v1-scope.md.

## Resume on another computer
1. Clone or download assistantmy47-prog/Lending-platform-v1.
2. Install Node.js 20+ (Node 22+ recommended). No npm install is required.
3. Run `npm start`, then open http://localhost:4173.
4. Run `npm test` and `npm run build`.
5. Read this file, AGENTS.md and the existing concept documents before making changes.

The application requires HTTP serving for ES modules; do not double-click index.html.
The static build is in dist and can be hosted on any static server.

## Agreed product and design context
The approved design takes its feed familiarity from Viva Engage: light surfaces,
near-black text, deep gold #8A651F, restrained status colours and generous spacing.
The feed is chronological, with deal/type filters. This supersedes the earlier document's
ranking suggestion for the default order; urgency is communicated on the item.
Users see prepared decisions and material changes. Detail appears by purpose.
Three connected concepts: decision desk, deal operating plan and client insight.
Roles: originator owns commercial intent; Operations owns internal structuring and daily
servicing; Middle Office owns confirms, reconciliations, internal reporting and payments.
Blackstone Bars is agented syndicated, revolver + LC, borrowing-base collateral;
our bank is issuing bank. Repayments are common. Agent role is still unconfirmed.
L1 product characteristics → L2 deal structure → L3 facilities / transactions → L4 events / evidence.

## Modules
- src/data.js: scenario, role, deal, source and product-model fixtures.
- src/state.js: pure transitions and dependency/role guards.
- src/components.js: reusable cards, case/detail rendering, source links and model view.
- src/app.js: navigation, dialogs, filters, persistence, proposal form and simulation controls.
- src/styles.css: design tokens, layout, responsive styling.
- public/sources: clearly labelled illustrative evidence.
- tests/workflow.test.js: role isolation, holds, parallel work and rules remaining inactive.

## Working interactions
Role switch; chronological feed; search and filters; watched deals; case decisions;
shared history; L1–L4 expandable model; missing requirements / outstanding actions;
source links; warehouse-to-originator referral; independent confirmation correction;
verified-evidence simulation; approved draw-plan prerequisite; payment outcome simulation;
insight watch, adaptation draft and rule-validation submission; fixed new-deal proposal template.

## Scripted walkthrough
1. Operations → review warehouse exception → request commercial direction.
2. Originator → review new commercial task → choose a direction. This does not clear eligibility.
3. Middle Office → correct confirmation. This can happen before or after step 1.
4. Demo controls → simulate verified evidence. This represents a same-location scenario;
it does not resolve the alternative new-location Credit / Legal approval route.
5. Operations → apply verified mapping → approve draw implementation plan.
6. Middle Office → Demo controls → simulate authorised release / settlement / reconciliation.
7. Insights & rules → submit alias proposal. It remains inactive pending testing and approval.

## Persistence and portability
Browser state is stored under lending-v1 in localStorage. Reloading retains decisions.
Export/import progress in Demo controls moves it between browsers/computers. The Git repo
contains code, scenario fixtures and context, not a user's browser state. Imported progress
is trusted prototype data, not a production audit trail or authority record.

## Known limits / next work
- No real AI, knowledge graph, ingestion, authentication, entitlements or payment integrations.
- Source access uses fixtures. REQ-001 is demonstrated, not connected to original client material.
- REQ-002 has a demonstrable quick view; actual completeness rules remain to be defined.
- REQ-003 is an expandable L1–L4 relationship view; a full graph editor is not implemented.
- New-deal creation stores intent and a fixed proposed template, not an inferred plan or generated term sheet.
- Team-to-individual assignment, reassignment, escalation timers and real readiness transitions remain to build.
- Alternate legal-change journey, late/missing evidence scheduler, full proposal edit/test/approve flow,
  contextual chat and evidence comparison UI are next iterations.
- Model amounts, dates and sample history are illustrative. Do not treat sample checks as actual validation.
- Missing setup requirements deliberately remain open; servicing examples are independent mock scenarios,
  not proof that the same deal is legally operationally ready.
- The original approved image files were not in the repository; this implementation follows the
  written approved visual direction. Future visual review should compare against those references.

## Next recommended iteration
User visual review, then expand scenario fixtures and implement task assignment and readiness.
Keep the feed calm: one clear judgement per item, alternatives and evidence behind deliberate disclosure.

## Verification for this milestone
Five Node workflow tests passed; app and component syntax checks passed; static build succeeded.
The managed preview started, but browser access was rejected by the browser security policy.
Visual rendering and interactive browser QA therefore remain unverified and should be the
first review on the next computer. No claim of pixel equivalence to the approved images is made.
