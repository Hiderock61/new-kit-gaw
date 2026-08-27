# Stage 37: Brand unification audit

## Purpose

Stage 37 turns the accumulated prototype styling into one visual grammar before Demo v1.

The product concept remains:

**magazine + neighborhood guide + discovering people after the fact**

Click remains a resident of the world, not the main information system.

## Unified rules

### Color roles

- Cream: town / page background
- White: readable paper surfaces
- Ink / brown: primary text
- Blue: navigation and actions
- Orange: traces, warmth and selected accent moments
- Yellow, mint, peach and sky: small category or pictogram support only

No new independent accent family should be introduced without a functional reason.

### Surface rules

- Cards use one restrained 12px radius family.
- Controls use a smaller 9px radius family.
- Shadows stay soft and secondary.
- Reading areas remain calmer than discovery areas.

### Identity rules

- Person avatars remain person identity.
- Community pictograms remain category identity.
- Click remains atmosphere and contextual behavior.
- These three visual roles must not replace one another.

### Navigation rules

Blue consistently means something can move the user elsewhere or perform an action. Orange should not compete with blue for link semantics.

### Typography rules

- App title: strongest editorial voice
- Screen title: page identity
- Section title: local grouping
- Subheading: small structural label
- Body and statement text: reading-first, dark brown/ink
- Metadata: muted brown

### World rules

The town layer, community signs, footprints and Click illustrations may add atmosphere, but none may reduce the width needed for names, descriptions, statements, counts or tap targets.

## Stage 37 implementation

A final stylesheet, `stage37-brand-unify.css`, is loaded after all earlier prototype layers. It normalizes:

- palette roles
- typography hierarchy
- card surfaces
- radii and shadows
- navigation colors
- search and filter controls
- person identity visuals
- profile activity cards
- reading screens
- focus states
- small-screen spacing

Earlier stages remain in the repository as development history, while Stage 37 acts as the final presentation contract for Demo v1.

## Release guardrail

Before adding any final visual flourish, ask three questions:

1. Does it improve recognition, navigation or atmosphere?
2. Does it preserve information width and scanability?
3. Does it use an existing New Kit Gaw visual role rather than inventing a new one?

If the answer is no, leave it out.
