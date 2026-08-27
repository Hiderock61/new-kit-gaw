# New Kit Gaw Demo v1

Status: **Demo v1 complete**

New Kit Gaw is a seeded front-end social/community prototype built around this discovery loop:

**HOME → Profile → Community → Topic → Statement → Profile → another Community**

The aim of Demo v1 is not to imitate a feed. It tests whether a person can enter through an interest or statement, discover another person afterward, and keep moving through that person's communities and activity.

## Demo v1 includes

- 12 seeded people
- 36 communities
- 54 topics
- 108 statements/comments
- 8 community categories
- profile, community, topic, statement and footprint screens
- browser/app-history back navigation
- aggregated directional footprints
- community search and category filtering
- shared-community labels such as `あなたも参加中`
- Click mascot placement system
- community-specific sign/atmosphere layer
- responsive layout aimed at iPhone widths around 375–430px

## Brand grammar

- Blue = navigation / action
- Orange = footprints / warmth / traces
- White = reading surface
- Cream = town/background surface
- Person avatar = person identity
- Community pictogram/sign = place identity
- Click = resident / atmosphere

Click is never a tap target and should never take width away from names, counts, descriptions or primary actions.

## Public demo and test modes

Normal URL:

- public Demo v1 presentation
- backstage viewer switch hidden

`?debug=1`:

- reveals the seeded-person viewer switch used for validation

`?walktest=1`:

- enables the Stage 35 circulation test panel
- measures whether a user can travel from HOME through a community and statement to a new person and then to another community

The two query parameters can be combined when needed.

## Intentional Demo v1 limits

This is a prototype, not a production social service. Demo v1 intentionally does not include:

- authentication or real accounts
- backend/database persistence
- real posting or editing
- moderation/reporting systems
- server-side notifications
- production analytics
- dedicated final movie/food Click illustrations for every community context

The seeded data and local interaction logic exist to test information architecture, discovery, navigation and world/brand feel before backend work.

## Completion rule

Demo v1 is considered complete because the full parent structure is represented and navigable:

**Community → Topic → Statement → Profile → Footprints**

and because the product can be evaluated without adding filler content or mascot decoration solely to increase density.

Future work should begin as a new version or a clearly named post-Demo-v1 stage rather than silently extending the Stage 22–38 roadmap.
