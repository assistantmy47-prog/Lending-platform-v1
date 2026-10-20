# Blackstone Bars judgement catalogue

## Transaction profile

**Counterparty:** Blackstone Bars  
**Deal:** Agented syndicated lending arrangement  
**Bank role:** Issuing bank  
**Facilities:** Revolver and letter of credit  
**Collateral management:** Borrowing base  
**Expected activity:** Repayments are more frequent than drawdowns; both are permitted

This transaction is the canonical V1 scenario. Details below are working assumptions for prototype design and require validation with actual process owners before production use.

## Lifecycle overview

1. The originator describes the proposed transaction conversationally.
2. The platform proposes a commercial structure and draft implementation plan.
3. The originator confirms commercial intent and progresses term-sheet creation.
4. Legal documentation and Credit decisions produce the executed agreement.
5. The executed agreement is compared with the proposed structure and becomes the authoritative servicing basis.
6. Operations approves the internal structure and operating plan.
7. Middle Office approves confirmation, reconciliation, reporting and payment setup within its remit.
8. Routine borrowing-base, repayment, drawdown and letter-of-credit activity runs within the approved plan.
9. Exceptions become prepared role-specific decisions.
10. Repeated exceptions may generate separately governed improvement proposals.

## Current-state versus future-state model

| Situation | Today | Future |
| --- | --- | --- |
| New deal creation | Originator explains the deal through documents, email and meetings. Operations and Middle Office reconstruct the requirements and maintain separate checklists. | Originator prompts a proposed structure. The platform creates a traceable plan using the term sheet, product/data model, relevant precedent and permitted knowledge-graph relationships. |
| Executed agreement received | Specialists manually compare documents with prior understanding and identify changes. | The platform extracts authoritative terms, compares them with the proposed plan and asks humans only about material differences or unsupported interpretations. |
| Deal implementation | Operations converts legal terms into bookings, controls, calendars and procedures using SME knowledge. | A draft operating plan proposes bookings, parameters, expected events, validations, alerts, actions and exception routes. Operations approves or changes the plan. |
| Control setup | Middle Office builds confirmation, reconciliation, reporting and payment controls from handovers and documents. | Role-specific setup tasks are generated from the same approved structure. Middle Office validates its control implementation and unresolved differences. |
| Borrowing base | Operations locates the document, checks completeness, recalculates collateral and follows up issues manually. | Receipt, extraction, validation and calculation run automatically. Operations sees completion or receives a prepared decision when evidence is missing, late or cannot be validated. |
| Repayment | Teams interpret the request, coordinate processing and communicate completion. | A conforming repayment follows the approved straight-through path. Operations receives outcome visibility; Middle Office receives only its required reconciliation, payment or reporting work. |
| Drawdown | Operations interprets the request, reconstructs facility rules and coordinates implementation across teams. | The platform proposes a drawdown implementation plan. Operations validates the plan; other roles receive only their decisions, dependencies and material updates. |

## Judgement catalogue

### 1. Create the proposed deal structure

**Trigger:** The originator begins a new Blackstone Bars transaction.

**Human judgement:** Does the proposed structure accurately express the intended commercial arrangement?

**Primary owner:** Trader / originator.

**The platform prepares:**

- proposed revolver and letter-of-credit facility structure;
- parties, roles and agented-deal relationships;
- issuing-bank responsibilities;
- proposed limits, sublimits, availability and tenor parameters;
- borrowing-base structure and collateral categories;
- anticipated requests, notices, confirmations and reports;
- validations, alerts, permitted actions and decision boundaries;
- comparable structures from relevant deals, with material differences;
- assumptions and missing terms requiring confirmation.

**Minimum feed information:**

- concise description of the proposed structure;
- unresolved commercial questions;
- material assumptions;
- significant differences from selected precedents;
- the consequence of accepting each material choice.

**Possible decisions:**

- confirm the commercial structure;
- change a parameter or facility relationship;
- exclude an unsuitable precedent;
- request a Credit or Legal view on an unresolved matter;
- mark an assumption for negotiation.

**Future outcome:** A versioned proposed structure and term-sheet plan. It is not yet an approved operating instruction.

### 2. Accept the documented deal as the servicing basis

**Trigger:** An executed credit agreement or amendment is received.

**Human judgement:** Do material differences between the intended structure and executed agreement represent accepted terms, an extraction issue or a documentation problem?

**Primary owner:** Originator for commercial intent; Legal and Credit for their respective authorities.

**Operations involvement:** Receives the resolved authoritative position and any remaining implementation question.

**The platform prepares:**

- comparison of proposed terms, term sheet and executed agreement;
- material differences and effective dates;
- clause evidence;
- unresolved contradictions;
- effect on the proposed operating plan.

**Future outcome:** The executed agreement becomes the authoritative source for servicing. Prior proposals remain in history but do not govern operations.

### 3. Approve the deal operating plan

**Trigger:** The authoritative agreement structure is available.

**Human judgement:** Will the proposed internal structure and servicing plan implement the documented deal correctly?

**Primary owner:** Operations.

**The platform prepares:**

- facilities, limits, sublimits and relationships;
- revolver and letter-of-credit booking structure;
- parties and bank roles;
- borrowing-base formula, collateral rules and eligibility parameters;
- expected documents and event calendar;
- proposed automated actions;
- validation and hold conditions;
- exception and escalation routes;
- source evidence for each material instruction;
- unresolved mappings or unsupported terms.

**Minimum feed information:**

- plan sections that require Operations judgement;
- departures from standard patterns;
- unimplemented or conflicting requirements;
- downstream effect of each decision.

**Possible decisions:**

- approve a plan component;
- correct an internal mapping;
- define a deal-specific instruction;
- refer a commercial ambiguity to the originator;
- refer a legal or credit ambiguity to the relevant authority;
- hold activation until evidence or approval is obtained.

**Future outcome:** Approved operating instructions determine what may run automatically and what must return to a human.

### 4. Approve Middle Office control readiness

**Trigger:** The proposed internal deal structure is ready for control setup.

**Human judgement:** Are confirmation, reconciliation, internal-reporting and payment controls complete and consistent with the documented deal and internal bookings?

**Primary owner:** Middle Office.

**The platform prepares:**

- expected confirmation types and fields;
- reconciliation populations and authoritative sources;
- payment instruction references and approval paths;
- internal reporting treatment and completion criteria;
- differences between documented terms and proposed setup;
- dependencies on Operations, Credit, Legal or authorised payment release.

**Possible decisions:**

- approve the control setup;
- correct a confirmation or reporting mapping;
- request missing payment or settlement evidence;
- place a hold on affected activity;
- refer a booking discrepancy to Operations.

**Future outcome:** Deal readiness is recorded by control domain. The deal does not appear simply “ready” when a material domain remains incomplete.

### 5. New deal created

**Trigger:** The proposed or documented Blackstone Bars deal reaches the relevant handover state.

**Signal type:** Coordinated call to action, not a general announcement.

**Operations feed item:** Review the proposed operating structure and claim or accept implementation ownership.

**Middle Office feed item:** Review the proposed confirmation, reconciliation, reporting and payment setup and claim or accept control ownership.

**Originator view:** Watch the implementation outcome; act only when a commercial question returns.

**Required information:**

- why the handover is ready;
- which artefacts and terms are authoritative;
- proposed scope for the receiving role;
- open dependencies;
- required completion date;
- named accountable team and proposed assignee.

### 6. Borrowing-base document received and validated

**Trigger:** A new borrowing-base certificate or supporting collateral document is received.

**Signal type:** Event, followed by notification only if the update is material to a watched outcome.

**Primary owner:** Operations.

**Straight-through path:**

1. identify client, deal, facility and reporting period;
2. authenticate sender and detect duplicates or superseded versions;
3. extract collateral, ineligibles, reserves and calculated availability;
4. reconcile totals and units;
5. validate completeness, eligibility and freshness against the operating plan;
6. update the borrowing-base state;
7. create an execution receipt and retain source evidence.

**Operations presentation when all checks pass:**

- short outcome update, such as “October borrowing base validated; availability updated”;
- material movement and headroom if relevant;
- no decision request.

**Originator notification:** Only when a watched commercial threshold, client commitment or material risk changes.

**Middle Office notification:** Only when the borrowing-base outcome changes a confirmation, reconciliation, reporting or payment dependency within its remit.

### 7. Borrowing base cannot be validated

**Trigger:** The received borrowing base fails a validation or leaves a material ambiguity.

**Human judgement:** What prevents validation, and what is the permitted recovery route?

**Primary owner:** Operations.

**The platform resolves first:**

- document identity and reporting period;
- missing or conflicting fields;
- formula and total checks;
- collateral eligibility rules;
- comparison with prior period;
- other supporting documents already received;
- known approved mappings and tolerances.

**Minimum feed information:**

- exact failed validation;
- expected versus observed value;
- affected availability or downstream activity;
- what has already been checked;
- permitted recovery actions;
- deadline and escalation point.

**Possible decisions:**

- accept a permitted deal-specific interpretation;
- request corrected or additional client evidence;
- exclude affected collateral;
- refer a commercial issue to the originator;
- refer an eligibility or waiver issue to Credit or Legal;
- place or retain a hold.

### 8. Borrowing base is late

**Trigger:** The expected document has not arrived by the operating-plan deadline.

**Signal type:** Alert and Operations action.

**Human judgement:** Usually none initially; follow the approved recovery path. Judgement is requested only if the standard escalation fails or a waiver or alternative treatment is proposed.

**Primary owner:** Operations.

**The platform prepares:**

- expected document and period;
- deadline and governing instruction;
- receipt search already completed;
- affected activities;
- approved reminder or escalation step;
- next deadline and owner.

**Future outcome:** The feed asks Operations to review or send a prepared follow-up only where human involvement is required. It does not pretend that the deal is current because nothing was received.

### 9. Conforming repayment

**Trigger:** Blackstone Bars submits a repayment that fits the approved plan.

**Signal type:** Straight-through event with role-specific visibility.

**Automated path:**

1. identify the deal, facility, amount, currency and requested date;
2. validate notice, authority, amount and allocation rules;
3. apply the approved repayment implementation plan;
4. route required confirmation, payment and reconciliation work;
5. update balances only when the required execution evidence is received;
6. refresh internal reporting;
7. close with an execution receipt.

**Operations feed:** Informational outcome because repayments are strategically relevant to availability and client behaviour. No action if all checks pass.

**Middle Office feed:** Action only for confirmation, reconciliation, reporting or payment tasks not already automated.

**Originator feed:** Notify only if a watched client outcome changes materially, such as an unusual repayment, facility wind-down signal or change in utilisation pattern.

**Completion wording:** Must distinguish “instruction validated,” “submitted,” “settled” and “reconciled.”

### 10. Repayment exception

**Trigger:** A repayment cannot follow the approved straight-through path.

**Operations judgement examples:**

- facility or allocation is ambiguous;
- notice or instruction does not identify the intended structure;
- requested treatment conflicts with the agreement or operating plan.

**Middle Office judgement examples:**

- payment evidence does not match the expected amount or date;
- confirmation differs from the validated instruction;
- ledger or cash reconciliation does not match;
- internal reporting cannot be completed.

**Originator judgement examples:**

- the client requests a commercial treatment outside the existing terms;
- the repayment appears to signal a material relationship or facility change.

Each role receives its own item from one shared case.

### 11. Drawdown request received

**Trigger:** Blackstone Bars requests a revolver drawdown.

**Primary initial owner:** Operations.

**Human judgement:** Is the proposed drawdown implementation plan structurally correct and permitted by the approved operating plan?

**The platform prepares:**

- request identity, amount, currency and requested date;
- facility and tranche selection;
- borrowing-base availability and relevant limits;
- notice and authorisation checks;
- conditions and evidence required for the request;
- proposed bookings and balance effects;
- confirmation, payment, reporting and reconciliation dependencies;
- conflicts, assumptions and outstanding approvals;
- proposed sequence and owners.

**Operations feed item:**

> Validate the implementation plan for the USD X revolver drawdown.

The item should lead with material issues. Passing checks remain collapsed.

**Operations decisions:**

- approve the proposed implementation plan;
- correct the facility, tranche, allocation or booking treatment;
- request missing client evidence;
- refer a commercial departure to the originator;
- retain a hold pending Credit, Legal or other required approval.

**Originator feed:**

- watches the client funding outcome by default;
- receives a decision only for a commercial departure or client choice;
- receives a material alert if timing or deliverability becomes threatened.

**Middle Office feed:**

- receives confirmation, reconciliation, reporting and payment tasks once their prerequisites are ready;
- sees Operations eligibility or structural work as a dependency;
- does not repeat the drawdown-structure validation.

**Completion:** The case closes only after the requested outcome is executed, acknowledged, reconciled and reported as required.

### 12. Letter-of-credit request

Letter-of-credit issuance is relevant to the Blackstone Bars structure but should follow after the first V1 scenarios. It is likely to introduce additional document, wording, limit, fee, expiry and issuance decisions. The product model should reserve the facility relationship without forcing the V1 mock-up to simulate the entire issuance process.

## Pickup and coverage model for Blackstone Bars

### Default assignment

- Blackstone Bars has named coverage teams for Originations, Operations and Middle Office.
- Each role task is automatically proposed to a named individual using deal coverage, authority, skill, availability and workload.
- The proposed owner receives the item in **For you**.
- Other authorised team members can find it in the team pool or shared case without all receiving an alert.

### Accept, reassign or assist

The proposed owner can:

- accept ownership;
- reassign to an eligible colleague with a reason;
- request help while retaining accountability; or
- escalate an incorrect routing rule.

### Failure to pick up

- time-sensitive unaccepted work escalates to the coverage lead;
- approaching client or contractual deadlines change prominence;
- the platform never silently converts a team-owned item into an ownerless queue entry.

### Parallel work

One shared case can contain parallel role tasks. For example:

- Operations validates drawdown structure;
- Middle Office resolves a confirmation discrepancy;
- the originator watches the funding outcome.

Payment remains held until the required prerequisites are satisfied. Each team sees the other work as a dependency, rather than a duplicate task.

## Open validation questions

The following should be confirmed with Blackstone Bars process SMEs before finalising the mock-up:

1. Which entity acts as administrative agent, and which notices originate externally versus internally?
2. What does “issuing bank” require for the letter-of-credit workflow and control ownership?
3. Which repayment steps are currently performed by Operations versus Middle Office?
4. What payment release authorities and segregation-of-duties rules apply?
5. Which borrowing-base calculations and eligibility tests are deterministic today?
6. Which notifications must be retained for policy, audit or contractual reasons even when no action is required?
7. What are the current team coverage and assignment rules?
