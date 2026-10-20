# Product vision

## Problem

Commodity lending operations rely heavily on subject-matter experts reading emails and documents, reconstructing deal context and manually deciding what to do next. Conventional workflow tools often reorganise that work into queues, forms and deal screens without removing the interpretation burden.

The unstructured data foundation creates a different opportunity. Objects, emails and semi-structured information are ingested into a governed operational data store, classified and related to the product and data model. A knowledge graph supports relationships, correlation and validation.

The UX must convert those capabilities into lower cognitive and administrative effort.

## Target operating model

The executed credit agreement and effective amendments become the authoritative basis for ongoing servicing. The platform translates them into an approved deal operating plan containing:

- obligations and expected events;
- required evidence;
- calculations and validation rules;
- permitted automated actions;
- human decision boundaries;
- owners, deadlines and escalation paths; and
- source references and effective dates.

Routine activity progresses within that plan. Human attention is requested only where judgement, authorisation, client engagement or material review is required.

## Experience model

The primary experience is a personal feed of:

1. **Decisions requiring the user** — a judgement is ready or an unresolved issue is becoming consequential.
2. **Material changes to watched outcomes** — a commitment, client outcome or prior understanding may need to be revisited.
3. **Patterns worth considered attention** — an evidenced opportunity, recurring weakness or emerging risk is ready for review.

A shared case sits beneath each feed item. It preserves facts, evidence, decisions, role tasks, dependencies and execution receipts. Most users should rarely need to open the complete case.

## Design principles

### Prepare the decision

Resolve everything possible before requesting human attention. Present a specific judgement call, rather than a bundle of documents.

### Show the change

Present the new or conflicting fact against the relevant approved position.

### Lead with consequence

Explain why the change matters to the client, exposure, obligation, payment or intended outcome.

### Reveal information for a purpose

The first view contains only what is needed to understand and act. Deeper layers answer:

- Why was this surfaced?
- What evidence supports it?
- What alternatives exist?
- What happened previously?
- What is the complete case history?

### Tailor to the role and judgement

The same case can create different role-specific items. Each role sees only the decision it owns. Work owned by another role appears as a dependency or material update.

### Separate signals

The system must distinguish:

- an **event** recorded in the case;
- a **notification** that changes a watched outcome; and
- a **judgement call** that requires a person's decision.

Only the last category should normally demand action in the primary feed.

### Preserve accountability

Every unresolved outcome has an accountable role, individual owner, completion condition and escalation path.

### Separate resolution from improvement

A current-case decision may produce a proposed reusable improvement. The proposal requires scope, tests and approval before changing future behaviour.

### Make completion explicit

Confirm what was decided, what the platform will do next and whether the user's involvement is complete.

## Long-term outcome

The platform should progressively reduce repeated decisions while improving the quality of expert attention. Its advantage is not simply automation: it should preserve and strengthen bespoke client management, commercial insight and pattern recognition.
