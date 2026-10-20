# V1 mock-up scope

## Objective

Validate whether a decision feed can reduce interpretation effort in a realistic Blackstone Bars transaction.

The V1 should answer:

- Can each role identify why an item deserves attention?
- Can the user act without reconstructing deal context?
- Is evidence available without making the opening view noisy?
- Do handoffs preserve one shared case without duplicating work?
- Does the user know what happens next and when involvement is complete?

## Navigation model

1. **For you** — assigned judgement calls and material changes.
2. **Watching** — outcomes delegated to the platform for monitoring.
3. **Cases** — search and drill-down into the shared record.
4. **Team coverage** — exception-only view for unassigned, reassigned and approaching-SLA work.

The product opens on **For you**.

## V1 scenarios

### A. Prompt-led new deal creation

The originator describes Blackstone Bars and receives a proposed revolver, letter-of-credit and borrowing-base structure. The experience exposes assumptions, material precedent differences and unresolved commercial choices. Confirmation creates a proposed term-sheet plan, not an approved servicing instruction.

### B. Executed deal handover and setup

The platform compares the executed agreement with the proposed structure. Operations and Middle Office receive distinct setup calls to action. Both contribute to one readiness case.

### C. Borrowing-base receipt

A valid document updates availability automatically and produces a concise Operations outcome. Missing, late or invalid evidence generates a prepared Operations item.

### D. Conforming repayment

A routine repayment runs through the approved path. Operations receives outcome visibility. Middle Office receives only control work that is not automated. The scenario demonstrates status differences between validated, submitted, settled and reconciled.

### E. Drawdown request

The platform proposes a drawdown implementation plan. Operations validates structure. The originator watches the client outcome and acts only on a commercial departure. Middle Office handles confirmation, reconciliation, reporting and payment tasks when ready.

### F. Reusable improvement

A repeated exception proposes a scoped improvement. Current-case resolution and future rule change remain separate.

## Interaction requirements

- One primary judgement per feed item.
- Concise change-and-consequence summary.
- Direct actions for known choices.
- Conversational follow-up for contextual questions.
- Purpose-led evidence drill-down.
- Material uncertainty visible on the opening item.
- Clear next step and completion message.
- Role switching for prototype evaluation.
- Shared case history beneath role-specific items.
- Simulation of parallel tasks and downstream receipts.
- Individual assignment backed by team coverage and escalation.
- Clear separation between event, notification and judgement call.

## Out of scope

- A portfolio dashboard.
- A browse-first list of deals.
- Production authentication or entitlements.
- Live document ingestion or model inference.
- Production payment execution.
- A generic workflow builder.
- Complete Credit or Legal workbenches.
- Full letter-of-credit issuance workflow.
- Production integration with booking, loan, payment or reporting systems.

## Prototype data model

- user, role, team and coverage rule;
- client, deal and facility;
- source object and evidence;
- proposed commercial structure;
- approved operating instruction;
- expected and observed event;
- material difference;
- decision and choices;
- role task and dependency;
- watch;
- execution receipt;
- improvement proposal.

## Acceptance criteria

A participant should be able to:

1. identify the required judgement within ten seconds;
2. explain why it matters without opening the case;
3. locate decisive evidence with one deliberate drill-down;
4. act or defer without navigating to a deal record;
5. state what the platform will do next;
6. distinguish their responsibility from the other roles;
7. distinguish informational visibility from action;
8. retrieve the case when deeper investigation is genuinely required; and
9. understand who owns the item and what happens if it is not accepted.

## Recommended build sequence

1. Implement the feed shell, role switching and signal types.
2. Build the prompt-led new-deal proposal.
3. Build handover and setup tasks.
4. Build a valid and invalid borrowing-base journey.
5. Build the conforming repayment journey.
6. Build the drawdown plan and parallel role tasks.
7. Add watching, assignment and coverage behaviour.
8. Add the shared case drill-down.
9. Add the improvement-proposal journey.
10. Conduct short scenario tests with all three roles.
