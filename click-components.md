# Click component contract v1

Stage 26 standardizes Click as reusable UI vocabulary rather than one-off decoration.

## Core rule

Information wins over mascot width. Click may occupy spare space, but must never cover names, counts, descriptions, chevrons, profile actions, or tap targets.

## Component roles

| Component | Meaning | Preferred use | Sunglasses | Recommended visual size | Minimum visual size | Minimum clear space from text |
|---|---|---|---|---|---|---|
| `click-move` | movement / going somewhere | HOME header, route/transition cue | yes | 118×110 px | 96×90 px | 12 px |
| `click-sniff` | trace / presence / discovery | footprints, finding places | no | 94×82 px | 72×64 px | 12 px |
| `click-wait` | neutral standby | HOME/profile spare space | usually no | 72×68 px | 56×52 px | 14 px |
| `click-peek` | watching / looking inside | community entrance, browse state | optional | 76×68 px | 56×50 px | 14 px |
| `click-rest` | rest / comfort / done for now | lower HOME, empty/breathing space | no | 82×72 px | 64×56 px | 14 px |
| `click-box` | demo / backstage / test state | validation-only UI | optional | 76×82 px | 60×64 px | 12 px |
| `click-work` | working / browsing / laptop | work community, browsing state | optional | 62×58 px in cards | 50×46 px | 12 px |
| `click-food` | eating / food-specific activity | food communities only | optional | 62×58 px in cards | 50×46 px | 12 px |

## Expression rule

- Ordinary states use Click's half-lidded / relaxed baseline expression.
- Sunglasses are mainly for movement or mildly "on" states.
- Bare eyes are preferred for hesitation, softness, rest, traces, and quiet observation.
- Large sparkling eyes are exception states, not the baseline.

## Density rule

- One Click per functional scene, not one per card by default.
- HOME baseline density is three main encounters: move → sniff → rest.
- Community-card Clicks are an experiment and must preserve the left information pictogram.
- If a Click forces text wrapping or reduces instant readability, remove or relocate the Click before changing the information layout.

## Asset mapping as of Stage 26

- `click-move` → `assets/gaw-skate.webp`
- `click-sniff` → `assets/gaw-sniff.webp`
- `click-rest` → `assets/gaw-rest.webp`
- `click-box` → `assets/click-box.webp`
- `click-work` / temporary `click-peek` → `assets/click-community.webp`
- `click-wait` → `assets/click-home.webp`
- `click-food` → dedicated asset not yet supplied; do not pretend a placeholder is final

## Implementation rule

Click is atmosphere and context, never the tap target. Use `pointer-events: none`. Keep the original semantic button/link hit areas unchanged.
