/* =========================================================================
   TRXL Episode Content — 237
   Phil Read, Read | Thomas — "The Sawtooth Chart Was Never the Enemy"
   ------------------------------------------------------------------------- */

window.TRXL_EPISODE = {
  number: 237,
  date: "August 2026",
  title: "The Sawtooth Chart Was Never the Enemy",
  titleEm: "Never", // gradient word (default second-to-last lands on "the" — override to a stronger word)
  subtitle: "Phil Read on the friction BIM spent twenty years trying to erase, and why removing it removes judgment too.",

  // Hero visual concept
  hero: {
    concept: "The real MacLeamy-curve sawtooth (Evan's exact path data) — the smooth 'BIM Promise' curve fades out while the jagged process curve draws itself in, coral-to-indigo gradient, and holds there.",
    elements: ["dim smooth curve that fades on load", "gradient sawtooth curve that draws in via stroke-dashoffset and settles", "slow glow pulse at the peaks once settled", "ambient radial bloom behind it"],
    cssNotes: "ep237-page, ep237-bloom, ep237-chart/.ep237-smooth/.ep237-saw classes; inline SVG with the two path `d` values Evan supplied, stroke-dasharray:1 + pathLength=1 for a size-independent draw animation",
  },

  guest: {
    name: "Phil Read",
    role: "Co-founder & CEO",
    firm: "Read | Thomas",
    portrait: "assets/phil-read.png",
  },

  links: {
    listen: "https://trxl.co/237",
    newsletter: "https://www.trxl.co/leadership-edge-trxl-237/",
  },

  centralArgument:
    "Phil Read has spent this year sitting with firms across the U.S. and Australia, watching what they actually do with AI rather than what they post about it. His case is that the sawtooth, the jagged line in the MacLeamy curve that BIM spent twenty years trying to smooth into something continuous, was never the failure it was made out to be. The jagged stopping points are where somebody with experience says wait a minute. Automated documentation is fast but not yet trustworthy, the real AI wins right now are in materials and lighting rather than generating form, and delegation, the skill AI now demands of junior staff, is something architecture school has never taught.",

  pullQuote: {
    text: "We're in the business of turning electricity into drawings right now, and what the client wants is a polite, curated experience with judgment.",
    attribution: "Phil Read, co-founder and CEO, Read | Thomas",
  },

  stats: [
    { value: "2,000", label: "patient-room sheets Glyph generates in minutes, all needing a human check" },
    { value: "$25K",  label: "old cost of two weeks' speculative fit-out work, now a morning" },
    { value: "50",    label: "the hard cap on Phil's own AEC Acoustics event, by design" },
  ],

  question:
    "If a week of work on your team compressed into a morning tomorrow, where would that recovered time <em>actually</em> go, not where you'd <em>want it</em> to go?",

  analysis: [
    {
      title: "The sawtooth was never the failure",
      body: "The jagged line every BIM presentation taught you to eliminate is, in Phil's reading, the most valuable part of the process. A genuinely frictionless flow from sketch to model to documentation removes the moments where someone with experience is forced to stop and say wait a minute. He didn't arrive at this from theory: a Sydney firm told him they wanted the AI's output modeled from scratch anyway, chaff removed, judgment reapplied.",
    },
    {
      title: "Done isn't finished",
      body: "A real hospital project needs 2,000 patient-room sheets. Glyph generates them in minutes. Then someone has to open all 2,000 and check them, and when you correct one, the tool never asks whether it should correct the rest. The failure isn't speed, it's predictability. Where Phil is genuinely enthusiastic: materials, finishes, and light studies on top of a design that already has judgment baked in.",
    },
    {
      title: "The interns are getting interns",
      body: "AI is an intern, structurally, and the junior person who used to do the work can now delegate it, except doing the work is how people used to acquire judgment in the first place. Phil's answer isn't to mourn the reps, it's to teach delegation and accountability decades earlier than the twenty years it usually takes to learn on the job.",
    },
  ],

  takeaways: [
    "Pick one pursuit you would have declined on cost. Run it AI-first with a hard one-morning time box.",
    "Name who is accountable for reviewing AI-generated output on your next project kickoff, and what \"checked\" means.",
    "Teach delegation and accountability alongside the reps. Don't wait twenty years for it to happen on its own.",
    "Decide on purpose where recovered time goes. Backlog is the default outcome, not the only one.",
  ],

  insights: [
    { title: "The silicon intern",              body: "AI executes; the senior designer still stands over the shoulder and asks the questions." },
    { title: "It's done, not finished",          body: "Fast documentation still needs a human to check every single sheet, one by one." },
    { title: "Delegation, taught early",         body: "Architecture school builds judgment through reps. Nobody teaches how to hand reps off." },
    { title: "Recovered time defaults to backlog", body: "Unless somebody decides otherwise, a saved week just becomes more work." },
    { title: "Fifty people, on purpose",         body: "Phil's own AEC Acoustics event caps attendance deliberately, the same friction as the sawtooth." },
  ],

  bottomLine:
    "Judgment has to happen somewhere, and most of the current enthusiasm around AI is aimed at removing exactly the moments where it used to happen: the sawtooth, the week of optioneering, the sheet an intern set up badly and got corrected on. Phil isn't arguing for slowing down on principle, and he's genuinely excited about what's working. But there's a real difference between compressing work and deleting the conditions that produce expertise, and right now firms are doing both without telling them apart.",

  closingQuote:
    "An intern is a person who is becoming something, and the becoming happens through work a more experienced person could have done faster themselves. If the silicon intern does that work instead, nobody notices the succession case collapsed for about ten years.",
};
