/* =========================================================================
   TRXL Episode Content — 234
   Swap these values to re-skin the infographic for any new episode.
   The same schema powers both the web infographic and the slide deck.
   ------------------------------------------------------------------------- */

window.TRXL_EPISODE = {
  number: 234,
  date: "July 2026",
  title: "Here's to the Crazy Ones",   // "Crazy" gets gradient — the round peg
  subtitle: "Håvard Vasshaug on pulling construction data out of the design tool, taking risk back instead of shedding it, and why the committee is where good ideas go to die.",

  // Hero visual concept (Step 0) — a grid of dim round outlines with one glowing
  // coral square that refuses to fit. Think Different, AEC edition. Distinct from
  // 224 (descending asteroid), 232 (concentric rings), 233 (dawn horizon).
  hero: {
    concept: "A cool, orderly grid of dim round outlines fills the sky. One hole holds a glowing coral square whose corners break the circle — it drifts, tilts, and casts light on the holes around it. The square peg in a round hole: the person the industry has no slot for, and needs most.",
    elements: ["dark grid field of round outlines", "one glowing coral square tilted in its hole", "soft radial bloom behind the peg", "diagonal stagger fade-in across the grid"],
    cssNotes: "ep234-field (grid container), ep234-cell (round hole), ep234-peg (glowing square + drift/tilt animation), ep234-bloom (radial glow), --i stagger on cells",
  },

  guest: {
    name: "Håvard Vasshaug",
    role: "Co-founder & CEO",
    firm: "AnkerDB",
    portrait: "assets/havard-vasshaug.png",
  },

  links: {
    listen: "https://trxl.co/234",
    newsletter: "https://trxl.co/leadership-edge-trxl-234/",
  },

  centralArgument:
    "Design authoring tools were never built to be the place where a contractor, a manufacturer, and an owner all work on live data — and twenty years of BIM requirements have been trying to force them to be exactly that. Håvard Vasshaug spent 21 years as the person in the middle of that circle, the one with 100 Dynamo scripts and everyone's construction data landing in his Revit model. He calls that version of himself The Bottleneck. His argument now is to reduce the data in the model but structure what remains, let the people who own the construction data modify it where they are, and stop pretending a six-week-old drawing is information. Underneath the software argument is a harder one about the profession: the industry has spent decades shedding risk, and the firms pulling ahead are the ones taking it back on purpose.",

  pullQuote: {
    text: "I don't think we have enough crazy ones in AEC. I think we need more crazy ones, and I think we need to give them some wiggle room.",
    attribution: "Håvard Vasshaug, co-founder and CEO of AnkerDB",
  },

  stats: [
    { value: "6 wks",  label: "how old the data is that most site teams are making today's decisions on" },
    { value: "21 yrs", label: "Håvard's run inside BIM before building the tool that ends the bottleneck" },
    { value: "52%",    label: "of total cost growth on construction projects traced to rework" },
  ],

  question:
    "Where in your firm is risk being handed off to someone else without a second thought — and what would it take to keep a piece of it, and charge for it?",

  analysis: [
    {
      title: "Reduce the data, but structure it",
      body: "A Revit file is already a database, and almost nobody works in it that way. Owners have spent millions asking design teams to stuff models full of cost, carbon, and construction metadata a design tool was never meant to hold, and the result is bloated models where fixing one thing breaks eight others. The fix is not a bigger model. It is a cleaner one: architects and engineers do parametric 3D, construction data attaches downstream and gets modified by the people who own it. And you do not need everyone on one standard — you need structured data in any standard, because structured data can be mapped later and garbage cannot.",
    },
    {
      title: "Six weeks late is the same as wrong",
      body: "Håvard is careful not to oversell real time; his biggest projects still run on weekly deliveries. But the direction is the point. A site manager cannot implement a change at any level while working from six-week-old data, which makes staleness a decision-making problem rather than a modeling one. The reflex it replaces is the architect's stamp of not-ready. Instead the plan decides when a zone is ready: if the lean schedule says this part of the building is done by week six, the train is leaving the station.",
    },
    {
      title: "Shedding risk was the wrong instinct",
      body: "Håvard's frustration with his own profession is about the willingness to rethink the work rather than repeat yesterday. What the industry has actually done for decades is move risk down the chain so it holds less of it — and in doing so it gave away the thing that lets you change your business model. His counter-move is to take more risk on and get compensated for it. One of Norway's largest public building owners told him a project was miles ahead of everyone else for exactly one reason: the design team self-disrupted and changed who does what.",
    },
  ],

  takeaways: [
    "Open your last delivered model and ask whether a contractor could use that data tomorrow — structured against any standard, consistently.",
    "Find the one person who keeps asking to do it differently, hand them a real project, and give them room to fail back to the old way.",
    "Name the decision on your current project that is running on six-week-old information, and shorten that loop first.",
    "Price one scope where you take on more risk instead of passing it down, and charge for holding it.",
  ],

  insights: [
    {
      title: "The bottleneck is a person",
      body: "When every contractor's data has to route through one expert's Revit model, the expert is the constraint — and no amount of scripting fixes that.",
    },
    {
      title: "Structure beats standardization",
      body: "You do not need every team on the same standard; you need data structured well enough that Omniclass can be mapped to Uniclass later.",
    },
    {
      title: "Stale equals wrong",
      body: "Information that arrives six weeks after the fact cannot change a decision, which makes it functionally the same as bad information.",
    },
    {
      title: "Risk is the product",
      body: "Professional services are not paid for drawings but for holding the risk of being wrong, so giving risk away gives away the upside with it.",
    },
    {
      title: "Committees manufacture no",
      body: "There are far more paths to a no than a yes in a committee, and plenty of people take pride in being the one who killed the risky idea.",
    },
  ],

  bottomLine:
    "The thread running through all of it is control. Architects want control over their files, so nobody else gets in. Engineers want control over their exposure, so they hand the risk down the chain. Firms want control over their process, so they route decisions through committees that mostly produce 'no.' Håvard's whole approach is an argument for loosening that grip on purpose: let the data live where the people who need it can shape it, let the plan decide when a zone is ready, and let the one stubborn person on your team go punch through a wall. The firms doing it are not reckless. They are the ones ending up light years ahead.",

  closingQuote:
    "Change in this industry has never come from a strategy deck. It comes from one stubborn human who won't take no for an answer — and a firm willing to make that survivable.",
};
