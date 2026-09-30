---
name: Homefront
description: Committed property management for Brisbane, the Gold Coast and the Sunshine Coast. Clear, bright and human, built around one electric-blue house-front mark.
colors:
  homefront-blue: "#002CDF"
  blue-press: "#0022B0"
  blue-tint: "#E6ECFF"
  night: "#0B1437"
  ink: "#2A3142"
  slate: "#5B6478"
  line: "#DCE1EC"
  mist: "#F4F6FB"
  paper: "#FFFFFF"
  leased-green: "#0B7A47"
  leased-tint: "#E3F4EA"
  alert-red: "#B42318"
typography:
  display:
    fontFamily: "Archivo, 'Helvetica Neue', Arial, sans-serif"
    fontSize: "clamp(2.5rem, 4.5vw + 1rem, 4.25rem)"
    fontWeight: 800
    lineHeight: 1.02
    letterSpacing: "-0.02em"
    fontVariation: "'wdth' 112"
  headline:
    fontFamily: "Archivo, 'Helvetica Neue', Arial, sans-serif"
    fontSize: "clamp(1.75rem, 2.2vw + 1rem, 2.75rem)"
    fontWeight: 750
    lineHeight: 1.1
    letterSpacing: "-0.015em"
    fontVariation: "'wdth' 108"
  title:
    fontFamily: "Archivo, 'Helvetica Neue', Arial, sans-serif"
    fontSize: "1.25rem"
    fontWeight: 700
    lineHeight: 1.3
  body-lead:
    fontFamily: "'Public Sans', system-ui, sans-serif"
    fontSize: "1.25rem"
    fontWeight: 400
    lineHeight: 1.5
  body:
    fontFamily: "'Public Sans', system-ui, sans-serif"
    fontSize: "1.0625rem"
    fontWeight: 400
    lineHeight: 1.6
  label:
    fontFamily: "'Public Sans', system-ui, sans-serif"
    fontSize: "0.8125rem"
    fontWeight: 600
    lineHeight: 1.3
    letterSpacing: "0.02em"
  figure:
    fontFamily: "'Public Sans', system-ui, sans-serif"
    fontSize: "1.5rem"
    fontWeight: 700
    lineHeight: 1.1
    fontFeature: "'tnum' 1"
rounded:
  sm: "6px"
  md: "12px"
  lg: "20px"
spacing:
  "1": "4px"
  "2": "8px"
  "3": "12px"
  "4": "16px"
  "6": "24px"
  "8": "32px"
  "12": "48px"
  "16": "64px"
  "24": "96px"
  "32": "128px"
components:
  button-primary:
    backgroundColor: "{colors.homefront-blue}"
    textColor: "{colors.paper}"
    typography: "{typography.label}"
    rounded: "{rounded.sm}"
    padding: "16px 24px"
    height: "52px"
  button-primary-hover:
    backgroundColor: "{colors.blue-press}"
    textColor: "{colors.paper}"
  button-secondary:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.night}"
    rounded: "{rounded.sm}"
    padding: "15px 23px"
    height: "52px"
  button-on-night:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.homefront-blue}"
    rounded: "{rounded.sm}"
    height: "52px"
  input-address:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.night}"
    typography: "{typography.body}"
    rounded: "{rounded.sm}"
    padding: "0 16px"
    height: "56px"
  card-property:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
    rounded: "{rounded.md}"
    padding: "0 0 24px"
  badge-leased:
    backgroundColor: "{colors.leased-tint}"
    textColor: "{colors.leased-green}"
    typography: "{typography.label}"
    rounded: "{rounded.sm}"
    padding: "4px 8px"
  band-night:
    backgroundColor: "{colors.night}"
    textColor: "{colors.paper}"
    padding: "96px 0"
  section-mist:
    backgroundColor: "{colors.mist}"
    textColor: "{colors.ink}"
    padding: "96px 0"
---

<!-- SEED: established with the user before implementation; re-run /impeccable document once there's code to capture the actual tokens and components. -->

# Design System: Homefront

## Overview

**Creative North Star: "The Well-Kept House"**

Homefront follows the category standard for property management, executed at the level of the best Australian agencies (Different, Cubbi, Ailo). That standard exists for good reasons. Owners comparing three or four agencies want to find the appraisal, the fees, the service area and the people without hunting for them. The design doesn't win by being unusual. It wins by being noticeably better kept than the agency down the road: tidy spacing, real photographs, plain numbers, and a named person at every turn. The site's job is to show the claim "we treat your property as our own", so everything should feel looked after.

The system is bright and daylit: white and pale mist grounds, deep night-navy text, and one electric blue that belongs to the logo and the primary action. That blue is intense, so it is rationed. It marks the brand, the next step, and the current state, and nothing else. Depth comes from calm tonal bands (paper, mist, night) rather than shadows or gradients. The type pairs a slightly wide, heavy grotesk (Archivo), which echoes the squat, solid H of the mark, with Public Sans, a plain workhorse face that stays legible at small sizes on a phone.

The recurring signature comes from the logo itself. The small square "door" in the H's lower counter becomes the **door square**: a solid blue square used as the list bullet, the active-navigation marker, the section kicker and the map pin. It is the only ornament in the system.

**Key Characteristics:**
- Address-first: the rental appraisal starts with one address field, placed high on every owner-facing page.
- A human in every viewport that asks for trust: a named manager, a direct number, a real face.
- One saturated colour, used for brand and action only.
- Real SEQ homes in real daylight. No stock handshakes, no dangling keys, no AI renders.
- Plain numbers in tabular figures: weekly rent, fees, days to lease.

## Colors

The strategy is Restrained: cool neutrals with one committed brand blue. Night navy carries weight, and green appears only as a leased or success signal.

### Primary
- **Homefront Blue** (#002CDF): the logo colour, sampled from the supplied mark. It is used for the mark, primary buttons, links, the door square, focus rings and the selected state. White text on it reaches 8.7:1. Don't use it for large background fields; the one exception is the appraisal CTA band, which may go full blue once per page.
- **Blue Press** (#0022B0): hover and pressed state for anything that's Homefront Blue.
- **Blue Tint** (#E6ECFF): selected rows, active region tabs, a highlighted field in a form. Never used as a decorative panel colour.

### Secondary
- **Night** (#0B1437): headings, the footer, the high-trust band (team, fees, switching), and the mobile action bar. It's a blue-black, so it sits in the same family as the mark rather than fighting it.

### Tertiary (status only)
- **Leased Green** (#0B7A47) on **Leased Tint** (#E3F4EA): "Leased" badges, success confirmations, "rent paid" states in owner reporting. Nowhere else.
- **Alert Red** (#B42318): form errors and overdue states. Never used for emphasis in marketing copy.

### Neutral
- **Ink** (#2A3142): body text on paper and mist.
- **Slate** (#5B6478): secondary text, captions, metadata (beds, baths, suburb). Minimum 5.9:1 on paper; don't lighten it.
- **Line** (#DCE1EC): 1px borders, dividers, input outlines at rest.
- **Mist** (#F4F6FB): the alternate section ground, used for rhythm between paper sections.
- **Paper** (#FFFFFF): the default ground.

### Named Rules
**The One Blue Rule.** Homefront Blue marks the brand, the next step and the current state. If a blue element is neither the logo, an action nor a selection, it shouldn't be blue.

**The Mark Is Untouched Rule.** The H mark appears only in Homefront Blue on paper or mist, or in paper-white on night or blue. It is never recoloured, outlined, gradient-filled, rotated or stretched, and there are no other versions of it.

## Typography

**Display Font:** Archivo, variable, width 108 to 112 (fallback: Helvetica Neue, Arial)
**Body Font:** Public Sans (fallback: system-ui)

**Character:** Archivo, set slightly wide and heavy, has the same squat, planted stance as the H mark, which makes headlines read like signage on a well-built house. Public Sans is plain and even. It carries the long passages, the forms and the numbers with no personality to get in the way.

### Hierarchy
- **Display** (800, clamp 2.5 to 4.25rem, 1.02): one per page, the hero promise. Maximum about 8 words. Sentence case.
- **Headline** (750, clamp 1.75 to 2.75rem, 1.1): section openers.
- **Title** (700, 1.25rem, 1.3): card titles, FAQ questions, service names, manager names.
- **Body Lead** (400, 1.25rem, 1.5): the one or two sentences under a display or headline.
- **Body** (400, 1.0625rem / 17px, 1.6): all running text, max 68ch.
- **Label** (600, 0.8125rem, +0.02em): buttons, badges, form labels, metadata. Sentence case, never all caps.
- **Figure** (700, 1.5rem, tabular): weekly rent, fee percentages, day counts. Always tabular figures, always with the unit ("$720 / week").

### Named Rules
**The Plain Number Rule.** Money and time are always numerals with their unit, set in tabular Public Sans. Never spell them out, never round them into marketing ("hundreds of dollars more"), and never show a figure the business hasn't supplied.

**The Sentence Case Rule.** No all-caps labels or tracked-out eyebrows. The door square does the job an eyebrow would.

## Layout

A 12-column grid with a maximum content width of 1200px inside a 1440px frame. Gutters are 24px on desktop and 16px on mobile, with a 16px minimum side margin on phones. Spacing is on a 4px base (see the tokens); sections breathe at 96px on desktop and 64px on mobile. There is always more space above a heading than below it.

Page rhythm alternates paper and mist, with one night band per page for the highest-trust content (the team, fees, switching). The standard owner page runs: hero (promise + address appraisal + real home photo) → what we look after → leased homes → the people → fees and switching → FAQ → appraisal band → footer.

- **Hero:** a split layout of 6 columns of copy and appraisal field, and 6 columns of photograph (rounded lg). On mobile the photo drops below the field, and the field is never pushed below the fold.
- **Header:** logo left; Service areas, Leased, About, Contact centred; phone number and "Free rental appraisal" right. It's sticky, and gains the floating shadow once scrolled.
- **Mobile:** a fixed bottom action bar on night with two actions, "Call" and "Get appraisal". The header collapses to logo + menu.
- **Services:** a two-column list with door-square bullets (a title and one plain sentence each), not a grid of identical icon cards.
- **Breakpoints:** 480, 768, 1024, 1280.

## Elevation & Depth

The system is flat by default. Depth is tonal: paper, mist and night bands separate content, and 1px Line borders define cards and inputs. There is one shadow, used only for things that float above the page.

### Shadow Vocabulary
- **Float** (`box-shadow: 0 8px 24px rgba(11, 20, 55, 0.12)`): the scrolled sticky header, dropdowns, the address autocomplete list, the mobile action bar. Never on cards at rest.

### Named Rules
**The Flat-At-Rest Rule.** Cards and sections don't cast shadows. A property card lifts only on hover, by changing its border to Homefront Blue, not by adding a shadow.

## Shapes

Corners are gently squared, following the slightly softened corners of the mark: 6px (sm) on buttons, inputs and badges, 12px (md) on cards and photo thumbnails, and 20px (lg) on the hero photograph only. No pills, no circles except avatar photos, and no blobs, waves or angled section dividers.

The **door square** is the system's only motif. It's a solid Homefront Blue square with 1px rounding, sized at 0.5em beside text (bullets, kickers), 4 × 16px as the active-nav underline stub, and 12px on map pins. It's always a square, always blue, and never animated beyond a fade.

## Components

### Buttons
- **Primary:** Homefront Blue, paper text, 52px tall, 6px radius, label type. Hover goes to Blue Press. The focus ring is 2px Homefront Blue with a 2px paper offset. Only one primary per viewport.
- **Secondary:** paper ground, a 1px Night border, Night text. Hover goes to the Mist ground.
- **On night:** paper ground, Homefront Blue text.
- **Text link:** Homefront Blue, underlined at 1px with 3px offset; the underline thickens to 2px on hover.

### Address appraisal field
The system's most important component. It's a 56px input with a map-pin door square inside the left edge and the placeholder "Your rental's address". A primary button sits attached on the right on desktop and stacks full-width below on mobile. Suburb autocomplete floats beneath it with the Float shadow. Under it, one line of Slate text says what happens next ("A local manager calls you within one business day with a written estimate"). Use that promise only once the business confirms it.

### Property card (Leased)
A 4:3 photo (radius md, top), a Leased badge overlaid top-left, the suburb as a Title, and "3 bed · 2 bath · 1 car" in Slate label type. Weekly rent is set in Figure. A "Leased in N days" line appears only when real data exists. The border is Line, turning to Homefront Blue on hover.

### Manager card
A real photograph (square, radius md), the name as a Title, the role and regions in Slate, and a direct mobile number and email as text links. This is how Homefront makes "attention" visible. It appears on the homepage, every region page, and beside the appraisal form.

### Region tabs
Brisbane, Gold Coast and Sunshine Coast as a segmented control. The active tab is Blue Tint with Night text and a door-square stub; inactive tabs are paper with Slate text. Switching changes the suburb list and leased examples beneath without reloading the page.

### FAQ accordion
Full-width rows separated by Line, with the question as Title and a plus that rotates to a cross (200ms). Answers are Body, max 68ch. One row open at a time is not enforced.

### Fee panel
A night band with the management fee, letting fee and inclusions in Figure type, in a two-column "included / charged separately" list. Show "[Fee to be supplied]" placeholders until real numbers exist; never estimate them.

### Motion
State changes run 150 to 250ms with ease-out (`cubic-bezier(0.2, 0.8, 0.2, 1)`). Sections fade and rise 12px once on first view, with content visible by default if scripts fail. No parallax, no scroll-jacking, no autoplay carousels. `prefers-reduced-motion` removes all movement except colour changes.

## Do's and Don'ts

**Do**
- Put the address appraisal field in the first viewport of every owner-facing page.
- Show real people with names and direct numbers wherever the page asks for trust.
- Use real photographs of SEQ homes in daylight, cropped tight on the front door and street, echoing the mark.
- State rents and fees as plain numerals with units, in tabular figures.
- Keep one primary button per viewport and let Homefront Blue stay rare.
- Label placeholder numbers and testimonials as placeholders until the owner supplies real ones.

**Don't**
- Don't recolour, outline, animate or redraw the H mark.
- Don't use stock clichés: handshakes, keys dangling from a finger, smiling couples holding boxes, AI-generated houses.
- Don't build identical icon-card grids for services, or hero-metric rows of invented stats ("500+ happy owners").
- Don't use gradients, glass effects, drop-shadowed cards, or blue as a large decorative field.
- Don't use all-caps eyebrows or tracked-out labels.
- Don't write adjectives in place of evidence ("meticulous", "seamless", "dedicated"). Show the inspection, the leased home, the person.
- Don't bring back the retired look: grey photo-overlay heroes, Poppins or Open Sans, or the curved hero corner.
