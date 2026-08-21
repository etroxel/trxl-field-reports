/* =========================================================================
   TRXL Episode Content — 238
   The Next AEC Tech Stack, Arc 1 Episode 1.
   Roundup format: one question, ten voices, no single guest. Uses `roster`
   instead of `guest` / `guests` — see the roster block in the HTML.

   `cite` fields are timestamps into the YouTube cut. They render as links
   that jump to the moment. Timestamps come from 238-transcript.md, which
   is the final edit and matches the published chapter marks — never
   hand-adjust one without re-checking the tape.
   ------------------------------------------------------------------------- */

window.TRXL_EPISODE = {
  number: 238,
  date: "August 2026",
  title: "The Technology Tax Nobody Can Agree On",
  titleEm: "Nobody",
  subtitle:
    "Ten people building the next AEC tech stack got the same question. None of them answered it the same way.",

  youtube: "https://youtu.be/PEFq6grOj3Y",

  // Full editions go to every subscriber, free accounts included — the free
  // signup is deliberate, it feeds the list. Partners funded the series.
  access:
    "Every edition of this series goes out in full to everyone on the list, free accounts included, because the partners paid for it. Sign up free at trxl.co and the remaining eight come to you.",

  // Hero visual concept — the divided workday
  hero: {
    concept:
      "A single horizontal bar representing one workday, split between design and everything else. The divider drifts slowly between roughly 30% and 70%, with a live percentage readout riding along, and never settles — ten people were asked where the line falls and no two agreed.",
    elements: [
      "full-width bar with coral 'design' fill and muted 'everything else' remainder",
      "animated divider with a percentage readout that counts up and down as it drifts",
      "tick marks at 25 / 50 / 75",
    ],
    cssNotes:
      "ep238-daybar, ep238-fill, ep238-divider, ep238-readout, ep238-ticks; divider animated via keyframed left offset, readout uses an @property counter on the same 14s timing so the number stays in sync",
  },

  // Roundup episode — no single guest. The roster drives the hero badge and
  // the bottom-line list; there are no portraits by design.
  roster: {
    badge: "10 voices · 8 companies · 1 question",
    line: "The Next AEC Tech Stack · Arc 1: BIM 2.0",
    // `avatar` is the hedcut, never the headshot. Gavin's file is under his
    // former surname (Crump) in the guest portrait library — renamed on copy.
    people: [
      { name: "Randall Stevens", firm: "AVAIL", avatar: "assets/hedcuts/randall-stevens.webp" },
      { name: "Matt Wash", firm: "Bimbeats", avatar: "assets/hedcuts/matt-wash.webp" },
      { name: "Ariel Cooke-Zamora", firm: "Bimbeats", avatar: "assets/hedcuts/ariel-cooke-zamora.webp" },
      { name: "Gavin Nicholls", firm: "Architectus", avatar: "assets/hedcuts/gavin-nicholls.webp" },
      { name: "Campbell Yule", firm: "AEC Tech Analyst", avatar: "assets/hedcuts/campbell-yule.webp" },
      { name: "Jesper Wallgren", firm: "Finch", avatar: "assets/hedcuts/jesper-wallgren.webp" },
      { name: "Holger Kreienbrink", firm: "Graphisoft", avatar: "assets/hedcuts/holger-kreienbrink.webp" },
      { name: "Marty Rozmanith", firm: "Skema", avatar: "assets/hedcuts/marty-rozmanith.webp" },
      { name: "Dimitrie Stefanescu", firm: "Speckle", avatar: "assets/hedcuts/dimitrie-stefanescu.webp" },
      { name: "Clifton Harness", firm: "TestFit", avatar: "assets/hedcuts/clifton-harness.webp" },
    ],
  },

  links: {
    listen: "https://trxl.co/238",
    newsletter: "https://www.trxl.co/leadership-edge-trxl-238/",
  },

  centralArgument:
    "Every vendor in AEC says the same thing: our tool frees designers to design. So I asked ten of them the same question on camera, with no script and no approval over the final cut — does it, or does it just move the technology tax to a different line item? What came back was not one answer. It was a running argument about what design even is, and about who actually eats the time when a tool works exactly as advertised.",

  pullQuote: {
    text: "You think your identity is drawing a parking lot? That's a joke. Your identity is changing the built environment, the thing out there, towards what is better for the people that live out there.",
    attribution: "Clifton Harness, CEO & co-founder, TestFit",
    cite: { ts: "1:06:30", who: "Clifton Harness" },
  },

  stats: [
    { value: "50%", label: "of the workday AVAIL's founder estimates goes to friction, not design", cite: { ts: "9:45", who: "Randall Stevens" } },
    { value: "10", label: "voices asked the same unscripted question, no answers pre-approved" },
    { value: "3", label: "incompatible definitions of the technology tax that came back" },
  ],

  question:
    "If you tracked your own hours for one real week, not an estimate at the end of the day, how much would actually be design work — and could you name specifically what's eating the rest?",

  analysis: [
    {
      title: "Whose 50 percent is it, anyway",
      body: "Randall Stevens bet the friction eats close to half the day, measured in seconds and minutes nobody bothers to log. Bimbeats found the sharper version on a real project: three people marking up the same PDF, none aware of the other two. Gavin Nicholls named the cost nobody puts on a pricing sheet — every new platform needs its own internal champion before it sticks.",
      cites: [
        { ts: "9:45", who: "Randall Stevens" },
        { ts: "13:50", who: "Matt Wash" },
        { ts: "20:45", who: "Gavin Nicholls" },
      ],
    },
    {
      title: "The wheel everyone keeps reinventing",
      body: "Dimitrie Stefanescu called out a narcissistic streak inside architecture itself, decades of building tools for the sake of building tools, competing on who had the better pencil instead of who delivered the better building. Marty Rozmanith added the reframe that undercuts the whole premise: the technology tax is not an absolute, it is relative to whatever you had before.",
      cites: [
        { ts: "51:48", who: "Dimitrie Stefanescu" },
        { ts: "47:31", who: "Marty Rozmanith" },
      ],
    },
    {
      title: "The finance nobody put in the syllabus",
      body: "Clifton Harness skipped the software question entirely. His argument is that the real constraint on American buildings was never gravity or zoning, it is finance, and that the profession has never built the vocabulary to make design legible to the capital deciding what gets funded. Fear of the algorithm, in his read, is an identity problem, not a technology one.",
      cites: [
        { ts: "1:08:30", who: "Clifton Harness" },
        { ts: "1:15:55", who: "Clifton Harness" },
      ],
    },
  ],

  takeaways: [
    "Pick one recently finished project and hunt for work that got done twice without anyone noticing.",
    "Look hardest at markup tools, file naming, and anywhere more than one person touches the same deliverable.",
    "Fix one small process and test it on the next project — not the whole platform.",
    "Track your own hours for a real week before trusting anyone's estimate of where the time goes, including your own.",
  ],

  // These are deliberately NOT the moments cited in the analysis above — the
  // point of this section is to send people somewhere new in the tape, so
  // every timestamp here is unused elsewhere on the page and the topics range
  // past the episode's main argument. Between these and the analysis cites,
  // all ten voices get surfaced.
  // `prompt` turns each card back on the reader — the insight lands harder
  // as a question about their own firm than as a statement about the show.
  insightsKicker: "Additional key insights",
  insightsNote: "Ten more moments worth your time, one from every voice in the episode and ranging well past the argument above. Each card jumps to that point in the tape.",
  insights: [
    {
      title: "Demos well, but where's the risk?",
      body: "Autodesk put an MCP server in front of the Revit APIs. The demo lands. The question is what happens the moment it stops doing what you wanted.",
      prompt: "Where in your risk cycle would you let a tool like that touch a live project?",
      cite: { ts: "10:56", who: "Randall Stevens" },
    },
    {
      title: "Narrower than it looks",
      body: "Most of what gets sold as BIM 2.0 is automated documentation riding on top of the incumbents, not a replacement for them.",
      prompt: "Which tool on your shortlist actually replaces something, and which just rides along?",
      cite: { ts: "21:52", who: "Campbell Yule" },
    },
    {
      title: "Don't design architecture too fast",
      body: "The founder whose tool compresses a week of massing into an hour is the one cautioning against rushing the result.",
      prompt: "If a tool handed your team back four days, would they go deeper or just start the next job?",
      cite: { ts: "33:11", who: "Jesper Wallgren" },
    },
    {
      title: "A vendor names his own limit",
      body: "Asked whether early design analysis can happen in Archicad, Graphisoft's answer was no. It's a static modeler.",
      prompt: "When did a vendor last tell you what their product can't do before you found out yourself?",
      cite: { ts: "38:30", who: "Holger Kreienbrink" },
    },
    {
      title: "The lock-in was the file",
      body: "Never the authoring tool. Separate the model from the file and the tool underneath becomes interchangeable.",
      prompt: "If you left your main platform tomorrow, how much of your project data could you actually take?",
      cite: { ts: "56:20", who: "Dimitrie Stefanescu" },
    },
    {
      title: "Autodesk is a steal",
      body: "At roughly two percent of gross, the CEO of a competing tool calls the big platform right-priced. Architects rarely agree, which is his point.",
      prompt: "Is your objection to software pricing an economics argument, or a feelings one?",
      cite: { ts: "1:13:29", who: "Clifton Harness" },
    },
    {
      title: "Something has to switch off",
      body: "Tech budgets are fixed and sometimes shrinking, so a new platform usually gets paid for by displacing licenses of an old one.",
      prompt: "What would you turn off to pay for the tool you want next?",
      cite: { ts: "1:17:05", who: "Gavin Nicholls" },
    },
    {
      title: "The 2030 invoice has two lines",
      body: "A human cost in dollars and an AI cost in dollars. Right now the AI has been cheap enough to feel like a drug nobody has been billed for.",
      prompt: "If tokens showed up as a line item next quarter, which workflows would survive the review?",
      cite: { ts: "1:24:36", who: "Matt Wash" },
    },
    {
      title: "Less than 1% are AI-first",
      body: "Firms with genuinely AI-embedded workflows are a rounding error today, and 2030 may not move that number much.",
      prompt: "Is your firm's AI plan a real workflow change, or a pilot that never left pilot?",
      cite: { ts: "1:25:44", who: "Ariel Cooke-Zamora" },
    },
    {
      title: "Ideation grew, execution shrank",
      body: "After AI the balance flipped, and senior people are worn out chasing low-value chat tasks instead of the questions only they can answer.",
      prompt: "What are your most senior people spending time on that the tools already handle?",
      cite: { ts: "1:33:56", who: "Marty Rozmanith" },
    },
  ],

  bottomLine:
    "Ask ten companies whether their software frees architects to design and you get ten different definitions of the question. Randall measures it in minutes lost. Bimbeats measures it in duplicated effort. Dimitrie measures it against decades of tools built to impress rather than help. Marty measures it against whoever happens to be in the room. Clifton skips the software and goes straight for the money. None of them are wrong, and that is exactly the problem — the industry cannot agree on what it is even paying for.",

  closingQuote:
    "If you have an existential fear that technology is gonna take your identity, you gotta fix your identity. Make it about outcomes.",
  closingQuoteCite: { ts: "1:15:55", who: "Clifton Harness" },
};
