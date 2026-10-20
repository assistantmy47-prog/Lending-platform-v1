# Decision feed model

## Human judgement sequence

A decision is ready only when the user can answer five questions:

1. What changed?
2. Why does it matter?
3. What is already established?
4. What judgement is required from me?
5. What follows from my choice?

If the user must reconstruct these from raw documents, the item has been surfaced too early.

## Signal types

| Signal | Meaning | Default presentation |
| --- | --- | --- |
| Event | Something occurred and was recorded | Case history; no interruption |
| Notification | A watched outcome changed materially | Feed update; acknowledge or watch |
| Judgement call | Progress requires human judgement or authority | Prominent feed item with a direct action |
| Exception | An approved instruction, validation or expected event failed | Converted into a judgement call only when automation cannot resolve it |
| Improvement proposal | Repeated evidence suggests a reusable change | Separate review flow; never activated from one case decision |

## Feed item contract

Every judgement item should contain:

| Element | Purpose |
| --- | --- |
| Decision statement | Plain-language question owned by the current user |
| Material change | Difference from the approved or previously understood position |
| Consequence | Client, risk, obligation, processing or timing impact |
| Established facts | What the platform has already validated |
| Material uncertainty | Ambiguity that could reasonably change the choice |
| Recommendation or viable choices | Responses within the user's authority |
| Completion statement | What follows and whether the user's involvement ends |

The opening view should avoid full timelines, all extracted fields, raw confidence scores and generic metadata.

## Progressive disclosure

| User question | Information revealed |
| --- | --- |
| Why is this here? | Trigger, decisive instruction and affected outcome |
| Show the evidence | Relevant source passages, received facts and provenance |
| What else could we do? | Alternatives, constraints and consequences |
| Has this happened before? | Relevant precedent and material differences |
| Show the case | Full event, decision, dependency and execution history |

Conversational follow-up can answer these questions with the case context already attached. Known decisions should still have direct actions.

## Role-specific judgement

### Trader / originator

**Judgement:** How should the business serve the client within commercial, credit and legal boundaries?

**Minimum information:**

- client objective and timing;
- agreed commercial position;
- material departure;
- viable routes and consequences;
- relationship context relevant to the choice.

The originator should not repeat the operational investigation.

### Operations

**Judgement:** What is the correct interpretation, implementation or recovery route when received evidence and approved instructions do not align?

**Minimum information:**

- expected versus observed position;
- evidence and validation already completed;
- unresolved ambiguity;
- affected activities;
- permitted operational responses;
- commercial, Credit or Legal dependencies.

Operations owns deal setup, daily servicing and borrower information follow-up.

### Middle Office

**Judgement:** Does a difference require correction, evidence or a hold, and can confirmation, reconciliation, reporting or payment progress?

**Minimum information:**

- the specific difference;
- authoritative expected value;
- known explanation;
- downstream consequence;
- applicable control;
- remaining dependencies and release authority.

Eligibility or borrower-servicing issues appear as dependencies unless Middle Office must act.

## Watching

A watch delegates monitoring to the platform. It contains:

- the outcome being watched;
- the material change that should bring it back;
- the time horizon;
- escalation owner; and
- notification preference.

Role ownership creates mandatory watches. Users can add discretionary watches for client, risk or opportunity outcomes.

## Prioritisation

Items are ranked using:

1. consequence if unresolved;
2. time remaining;
3. the user's ability to influence the outcome;
4. whether the matter blocks a material downstream activity; and
5. whether it represents a material change to an explicitly watched outcome.

Volume, recency and model confidence alone should not determine prominence.

## Team pickup and assignment

Items are owned first by a **role team**, then by an individual.

1. The deal coverage model determines the accountable team.
2. The platform assigns an individual using named deal coverage, relevant authority or skill, availability and current workload.
3. The assignee can accept, reassign or request assistance.
4. Unaccepted or overdue work escalates to the coverage lead.
5. The shared case retains one accountable case owner even when several role tasks progress in parallel.

The primary feed should contain assigned work. A team pool is available for coverage, but should not become a permanent auction-style queue. “Needs owner” should be prominent mainly to the coverage lead.

## Feedback and learning

Repeated user questions indicate that a decision was not prepared adequately. Repeated resolutions can propose:

- a refined classification or routing rule;
- a validation;
- a deal-specific instruction;
- a product or data-model extension;
- improved client self-service; or
- a process redesign.

These remain proposals until scoped, tested and approved.
