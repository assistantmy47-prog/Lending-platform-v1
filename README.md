# Lending Platform V1

A portable, modular UI prototype for an exception-led commodity lending platform.
White/light surfaces, deep gold accents and a chronological decision feed.
All transactions, source material and actions are illustrative.

## Run

Requires Node.js 20+ (22+ recommended). No external packages or installation needed.

```sh
git clone https://github.com/assistantmy47-prog/Lending-platform-v1.git
cd Lending-platform-v1
npm start
```

Open http://localhost:4173. Downloading the repository ZIP also works; run the commands
from the extracted folder. ES modules require HTTP serving, not file://.

```sh
npm test
npm run build
```

`dist/` contains a portable static build. No credentials or platform-specific service is required.

## Explore

Switch between Operations, Trader / originator and Middle Office. Review a feed item,
open its evidence or deal, and record a decision. Use Demo controls for incoming evidence
and payment-result simulation. Decisions persist in this browser. Export/import progress
from Demo controls to continue the same demo state on another computer.

The first slice includes watched deals, purpose-specific case views, source links,
L1–L4 model navigation, a requirements quick view, insights, similarities and rule proposals.
Known limitations and remaining work are explicit in the handover.

## Continue development

- [Handover and next steps](docs/HANDOVER.md)
- [Adding examples](docs/ADDING-EXAMPLES.md)
- [Product vision](docs/product-vision.md)
- [Decision feed model](docs/decision-feed-model.md)
- [Blackstone Bars judgement catalogue](docs/blackstone-bars-judgement-catalogue.md)
- [V1 scope](docs/v1-scope.md)
- [Requirements register](docs/requirements.md)

Scenario fixtures, state transitions, components and presentation styles are separate
modules. See AGENTS.md for project constraints when continuing with a coding assistant.
