# Click UI placement contract v2

Stage 27 converts the early placement memo into the current operating rule set after HOME implementation and density testing.

## Core principle

**Screen meaning → Click action.** Click is not random decoration. Information always wins over mascot width, and Click only lives where the action or atmosphere matches the function.

## Placement hierarchy

1. Preserve names, counts, descriptions, chevrons, buttons, and tap targets.
2. Match the screen function to a Click behavior.
3. Use spare space, section edges, and breathing room before changing content layout.
4. If Click forces wrapping or weakens instant readability, relocate or remove Click.
5. Click is atmosphere and context, never the tap target (`pointer-events: none`).

## Current role map

| UI meaning | Component | Baseline behavior |
|---|---|---|
| movement / entering the world | `click-move` | scooter + sunglasses |
| footprints / trace / presence | `click-sniff` | bare eyes, sniffing |
| neutral standby | `click-wait` | relaxed, half-lidded; use only when real spare space exists |
| looking inside / browsing | `click-peek` | quiet observation; not required on every community screen |
| rest / breathing room | `click-rest` | lying/sleeping, bare eyes |
| work / laptop activity | `click-work` | laptop/browsing pose |
| food-specific activity | `click-food` | dedicated eating pose only; placeholders are temporary |
| test / backstage state | `click-box` | validation UI only, never production branding |

## Density rule v2

- HOME baseline is **three main encounters**: move → sniff → rest.
- Do not put Click in every section just because space exists.
- HOME profile-card mascot was removed because the information itself should remain the focus.
- HOME community-heading mascot was removed because it made the mascot rhythm too dense.
- Footprints remain the strongest permanent Click scene because the pose and function match directly.
- Community-card Clicks are a controlled pilot, not the default for every card.

## HOME baseline

- Header: `click-move`
- Profile card: no mascot by default
- Footprints: `click-sniff`
- Community heading: no mascot by default
- Community cards: selected pilot cards only
- Explore / lower HOME: `click-rest`
- Validation panel: `click-box`, visually secondary and removed in production

## Community-card rule

- Keep the left category pictogram for instant recognition.
- A small Click may occupy spare space on the right if text remains fully readable.
- Start with selected cards, not the whole list.
- Dedicated topic-specific assets are preferred:
  - movie → popcorn / movie-watching Click
  - town Chinese → noodle / food Click
  - morning run → running Click
  - remote work → laptop Click
- Temporary substitute poses must be labeled as pilot assets and must not become the final canonical illustration accidentally.

## Profile rule

- The profile avatar belongs to the person, not Click.
- Never replace a person's initial/photo identity marker with the mascot.
- Profile pages may use `click-wait`, `click-peek`, or `click-rest` only in nearby spare space and only when they do not compete with biography or activity content.

## Expression rule

- Ordinary state: half-lidded / relaxed / slightly distant.
- Sunglasses: movement, outside, or mildly "on" mode.
- Bare eyes: hesitation, rest, traces, softness, quiet observation.
- Large sparkling eyes: exceptional emotion only, never the default face.
- Blue cap remains a stable recognition mark.

## Interaction rule

Click never changes navigation semantics. Existing button/link hit areas stay untouched. Decorative assets should use `pointer-events: none` and should not create new accidental tap targets.

## Production rule

Validation/backstage motifs such as `click-box` are for development only. Before demo/public release, remove the validation panel and any Click whose meaning depends on internal testing context.

## Stage 27 conclusion

The mascot system is now treated as **UI vocabulary** rather than a sticker collection. The decision order is always:

**What does this screen mean? → Which Click behavior matches? → Is there spare space? → If not, use no Click.**
