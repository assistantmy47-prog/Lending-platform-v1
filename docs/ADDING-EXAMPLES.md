# Adding an example

Add a scenario to `src/data.js` with a unique id, existing deal id, role, kind,
ISO timestamp, title, summary, owner, due description, established facts,
evidence source ids and choices. Add material uncertainty explicitly.

Kinds: Decision, Update, Insight, Similarity, Rule proposal.
Roles: operations, originator, middle.
Each choice has an id, label, outcome and optional gate referencing a state flag.
Informational updates have no choices. Do not label an unapproved proposal as active.

For a read-only example no renderer changes are needed. For new behaviour add its
transition in src/state.js and test the actual cross-role or authority boundary.
Register evidence in sources and put clearly labelled fixture text in public/sources.
Use an existing deal or add its L1–L4 model and watch metadata to deals.

State schema version is 1. Increment it and migrate/reset intentionally when incompatible.
