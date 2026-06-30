/* =========================================================================
   TRXL Episode Content — 233
   Swap these values to re-skin the infographic for any new episode.
   The same schema powers both the web infographic and the slide deck.
   ------------------------------------------------------------------------- */

window.TRXL_EPISODE = {
  number: 233,
  date: "June 2026",
  title: "Spaces For People To Kiss",   // "To" gets gradient — poetic pause on the preposition
  subtitle: "Mariusz Hermansdorfer on why sustainability belongs in the first week of design, and what it took to spin the first tech company out of Henning Larsen.",

  // Hero visual concept (Step 0) — warm dawn glow rising from a dark horizon,
  // scattered data-point stars above: sustainability arriving at the START of design,
  // before anything is locked. Distinct from 224 (descending asteroid) and 232 (concentric rings).
  hero: {
    concept: "A warm amber dawn rising from a dark horizon into a near-black sky scattered with glowing data-point stars. The horizon is where design meets environmental data — the earliest moment, before massing locks. Warmth rises from below; analytical dots float above.",
    elements: ["near-black sky gradient", "warm amber/coral radial glow at horizon", "thin luminous horizon line", "scattered glowing particle dots with staggered pulse animation"],
    cssNotes: "ep233-field (sky background), ep233-glow (radial dawn at horizon), ep233-horizon-line (thin warm line), ep233-particles (data-point stars, --i delay stagger)",
  },

  guest: {
    name: "Mariusz Hermansdorfer",
    role: "Founder & CEO",
    firm: "Nflection (jifto)",
    portrait: "assets/mariusz-hermansdorfer.png",
  },

  links: {
    listen: "https://trxl.co/233",
    newsletter: "https://trxl.co/leadership-edge-trxl-233/",
  },

  centralArgument:
    "Sustainability analysis has failed the design process not because the science is wrong, but because it arrives too late and speaks the wrong language. Mariusz Hermansdorfer spent 13 years inside one of architecture's most respected firms watching perfectly good analysis get filed and ignored — because it came at the end, in spreadsheet form, to people who were already thinking in images. jifto is an argument that sustainability belongs in the first week, inside Rhino, in visual form, with an AI companion that explains what the output means and what to do next.",

  pullQuote: {
    text: "The reason I am building jifto, that's my personal motivation, is so that architects can build these spaces for people to kiss in.",
    attribution: "Mariusz Hermansdorfer, founder of jifto / Nflection",
  },

  stats: [
    { value: "80%",  label: "of sustainability questions jifto can answer with 20% of the tooling — the Pareto bet" },
    { value: "4M",   label: "architects worldwide who have never had access to a specialist sustainability team" },
    { value: "13 yrs", label: "inside the Ramboll group — the path from engineering student to Ramboll's first-ever tech spin-off" },
  ],

  question:
    "If you pulled sustainability analysis into the first week of your next project — before massing was locked, before consultants were engaged — what single design decision do you think would actually change?",

  analysis: [
    {
      title: "The translation layer problem",
      body: "Engineers and designers have been talking past each other about sustainability for decades. The engineer delivers technically correct analysis; the designer doesn't know what to do with it. The result gets filed, the design moves forward unchanged, and the sustainability intent evaporates. The tool that bridges these two worlds — presenting analysis as images inside the software designers already use — is worth more than the analysis itself.",
    },
    {
      title: "The 80% bet",
      body: "jifto doesn't try to be the best sustainability tool for specialists. That's deliberate. What doesn't exist is a tool for the architect at a three-person firm who needs to understand relative wind performance between two massing options today, without hiring a consultant. By targeting the majority who have never run a sustainability study at all, jifto bets that value is created in the broad middle, not at the high end of precision.",
    },
    {
      title: "The spinout: what it actually takes",
      body: "Getting a 750-person firm inside a 20,000-person engineering conglomerate to release its first-ever spin-off required nearly a year of dedicated negotiation — not just about structure or equity, but about trust. No template existed. The cultural conditions at Henning Larsen mattered: flat hierarchy, in-house PhD program, open-source research culture. A product inside an architecture firm always loses to a project deadline. A separate entity finally gave it someone whose livelihood depended on it.",
    },
  ],

  takeaways: [
    "Pull one sustainability study into the first week of your next project, before any massing decision is final.",
    "Map where your firm's sustainability analysis currently lands: early design, late design, or post-facto compliance checkbox?",
    "If you've built internal tools your team relies on, ask who outside your firm would pay to have that same problem solved.",
    "Define your firm's sustainability commitment at week one — in writing, before consultants are engaged.",
  ],

  insights: [
    {
      title: "The translation layer",
      body: "The tool that bridges designers and engineers — presenting analysis as images inside Rhino, not as spreadsheets — is worth more than the analysis itself.",
    },
    {
      title: "The 80% window",
      body: "Four million architects lack access to specialist sustainability tools; solving 80% of their questions with 20% of the tooling changes the entire market, not just the top firms.",
    },
    {
      title: "The timing window",
      body: "Decisions in the first weeks of design influence up to 70% of a building's embodied carbon; most sustainability analysis arrives after those weeks are gone.",
    },
    {
      title: "Software never rests",
      body: "Unlike a building, software has no completion date — only a dedicated product team with skin in the game keeps it alive and improving.",
    },
    {
      title: "The human root",
      body: "The clearest signal of a durable product: the founder can trace it back to a story about what spaces do to people, not just what the algorithm can optimize.",
    },
  ],

  bottomLine:
    "Mariusz opened the conversation with Steve Jobs's idea that you can only connect the dots looking backwards. After 13 years and a near-year-long negotiation to spin out a company, his dots connect into something that reads as almost inevitable in retrospect: an engineer who built software pipelines as a student, built internal tools for colleagues for a decade, then realized the only way to give those tools the care they needed was to make them someone's entire job. What jifto is building is not just a faster wind study. It's an argument about what the practice of architecture is for — and a bet that four million architects who have never been able to answer a sustainability question in week one deserve the same tools that the top twenty firms have had for years.",

  closingQuote:
    "Every meaningful space was built by someone who cared what it would feel like to be there. jifto exists to give more architects the data to make that case.",
};
