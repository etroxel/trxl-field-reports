window.TRXL_EPISODE = {
  number: 242,
  date: "September 2026",
  title: "Designing for 100 Years… in 100 Seconds?",
  titleEm: "Seconds?",
  subtitle:
    "When a vendor says AI, do they mean autocomplete, a copilot, or an agent, and does it matter? And can you describe a building in plain English and get something real back?",

  youtube: "https://youtu.be/1u26J_SfsCI",

  access:
    "Every edition of this series goes out in full to everyone on the list, free accounts included, because the partners paid for it. Sign up free at trxl.co and the rest of Arc 2 comes to you.",

  hero: {
    concept:
      "Two identical towers flank the title. The left one stacks all ten balconies in about a second, and one of them lands a little off. The right one gets two floors in across the whole cycle and stops, still going up. Same building, two clocks.",
    elements: [
      "two matching tower outlines with a ground line, one on each side of the headline",
      "ten balcony slabs in the fast tower, two in the slow one, revealed bottom-up one floor per step",
      "one coral slab in the fast tower, shifted off the facade: the error that crept in",
      "mono labels: 100 seconds / 100 years",
    ],
    cssNotes:
      "ep242-cut-frame, ep242-cut-sky, ep242-pair, ep242-tower (+ ep242-fast / ep242-slow), ep242-slabs, ep242-label, ep242-cut-grain; CSS-only, stepped clip-path on a 12s cycle. [data-motion=\"off\"] shows the fast tower complete and the slow one at two floors for the og.png capture.",
  },

  roster: {
    badge: "15 voices · 10 companies · 2 questions",
    line: "The Next AEC Tech Stack · Arc 2: Agentic AI · Episode 2 of 3",
    // `avatar` is the hedcut, never the headshot.
    people: [
      { name: "Oliver Goldman", firm: "Autodesk", avatar: "assets/hedcuts/oliver-goldman.webp" },
      { name: "Greg Demchak", firm: "Bentley Systems", avatar: "assets/hedcuts/greg-demchak.webp" },
      { name: "Prasanta Bose", firm: "TwinMaster", avatar: "assets/hedcuts/prasanta-bose.webp" },
      { name: "Michael Jansen", firm: "TwinMaster", avatar: "assets/hedcuts/michael-jansen.webp" },
      { name: "Mike Soldan", firm: "Egnyte", avatar: "assets/hedcuts/mike-soldan.webp" },
      { name: "Matt Wash", firm: "Bimbeats", avatar: "assets/hedcuts/matt-wash.webp" },
      { name: "Ariel Cooke-Zamora", firm: "Bimbeats", avatar: "assets/hedcuts/ariel-cooke-zamora.webp" },
      { name: "Marty Rozmanith", firm: "Skema", avatar: "assets/hedcuts/marty-rozmanith.webp" },
      { name: "Scott Reynolds", firm: "UpCodes", avatar: "assets/hedcuts/scott-reynolds.webp" },
      { name: "Jesper Wallgren", firm: "Finch", avatar: "assets/hedcuts/jesper-wallgren.webp" },
      { name: "Roderick Bates", firm: "Chaos", avatar: "assets/hedcuts/roderick-bates.webp" },
      { name: "Holger Kreienbrink", firm: "Graphisoft", avatar: "assets/hedcuts/holger-kreienbrink.webp" },
      { name: "Gavin Nicholls", firm: "Architectus", avatar: "assets/hedcuts/gavin-nicholls.webp" },
      { name: "Campbell Yule", firm: "AEC Tech Analyst", avatar: "assets/hedcuts/campbell-yule.webp" },
      { name: "Theodoros Galanos", firm: "Aurecon", avatar: "assets/hedcuts/theodoros-galanos.webp" },
    ],
  },

  links: {
    listen: "https://trxl.co/242",
    newsletter: "https://www.trxl.co/leadership-edge-trxl-242/",
  },

  centralArgument:
    "I asked fifteen people to define autocomplete, copilot, and agent, and Autodesk's Oliver Goldman told me he isn't sure the terms mean much beyond marketing and branding. The answers that held up were about something else: what an agent is allowed to touch, whether you can read what it did, and who checks it. Autodesk opened Revit's MCP server read-only for exactly that reason. Then I asked whether you can prompt your way to a building. Geometry from a prompt is getting close. Deciding what to build runs on a different clock, and Jesper Wallgren of Finch put a number on it.",

  pullQuote: {
    text: "I don't think you should design anything that should last for 100 years in 100 seconds.",
    attribution: "Jesper Wallgren, Finch",
    cite: { ts: "1:55:10", who: "Jesper Wallgren" },
  },

  stats: [
    { value: "50 hrs", label: "of active time one engineer spent in a structural model with no second reviewer, flagged by a Bimbeats agent from a one-line QA/QC prompt", cite: { ts: "27:00", who: "Matt Wash" } },
    { value: "1%", label: "the error Campbell Yule says can creep in at every step when agents are stacked, while the final answer still looks correct", cite: { ts: "1:20:50", who: "Campbell Yule" } },
    { value: "1 week", label: "how long Bimbeats' developer estimated a proof-of-concept MCP server would take without AI. He vibe coded it between dinner and a call", cite: { ts: "29:50", who: "Matt Wash" } },
  ],

  question:
    "If an agent had a pen in your Revit models tomorrow, what's the first thing you'd want it barred from changing?",

  analysis: [
    {
      title: "Who holds the pen",
      body: "Oliver Goldman describes an MCP server as a new kind of API for agents instead of programmers, and Revit 2027 shipped one. Autodesk started it read-only, because editing is where trust gets hard: you have a pen, the agent has a pen, and somebody has to decide how that works without wrecking the model. Write access has since been announced. Marty Rozmanith drew the line that matters for a firm. With a copilot you're always in the loop. With an agent you delegate and review the result when it says it's done, and delegating doesn't absolve you of responsibility for what it did.",
      cites: [
        { ts: "15:20", who: "Oliver Goldman" },
        { ts: "16:40", who: "Oliver Goldman" },
        { ts: "43:40", who: "Marty Rozmanith" },
      ],
    },
    {
      title: "Scripts, stacks, and the 1 percent",
      body: "Marty's most useful point: given a goal, an agent often does best by writing a deterministic script and running it, so the same input gets the same result next time. Ariel Cooke-Zamora's crash-report process at Bimbeats went the same way and ended up as a Python script. The risk is chaining. Scott Reynolds said that if agents are stacked in a sequential line, the software architecture is wrong, and every answer needs a traceable citation. Campbell Yule's prototypes showed why: a small error at each step compounds, and the result still looks right at the end.",
      cites: [
        { ts: "37:00", who: "Marty Rozmanith" },
        { ts: "48:10", who: "Scott Reynolds" },
        { ts: "1:20:50", who: "Campbell Yule" },
      ],
    },
    {
      title: "A hundred years in a hundred seconds",
      body: "Oliver said there's a path from language to geometry, but a model trained only on language reasons about geometry poorly, which is why Autodesk trains models on both. Roderick Bates said nobody has taken those workflows to a buildable outcome yet, outside of maybe a garden shed. Holger Kreienbrink doesn't believe in prompting a building at all, because a building always has a site, streets, and neighbors around it. Jesper Wallgren split the difference: checking and flagging can take microseconds, and deciding what to build should take a couple of days at least.",
      cites: [
        { ts: "1:42:45", who: "Oliver Goldman" },
        { ts: "1:47:42", who: "Roderick Bates" },
        { ts: "1:57:30", who: "Holger Kreienbrink" },
        { ts: "1:55:10", who: "Jesper Wallgren" },
      ],
    },
  ],

  takeaways: [
    "Run any new agent read-only for a month on one narrow question, where the answer is a finding rather than an edit, and have a person check every finding.",
    "Ask whether the agent writes something you can read and rerun. A deterministic script you can inspect beats a fresh probabilistic answer every time.",
    "Run the agents after you settle a design baseline, not on every click. Mid-edit feedback is noise and it burns tokens.",
    "Write down how an agent must build things before it gets write access, so the model stays editable by the next person who opens it.",
  ],

  // Deliberately not the moments cited above: one card per voice, fifteen
  // in all, each sending people somewhere new in the tape.
  insightsKicker: "Additional key insights",
  insightsNote: "Fifteen more moments worth your time, one from every voice in the episode. Each card jumps to that point in the tape.",
  insights: [
    {
      title: "The rollout order isn't the idea order",
      body: "Oliver Goldman says Autodesk Assistant started as a help feature because that was the easiest thing to ship, not because it was the first idea. The standalone, cross-product version was imagined early and took far longer to build.",
      prompt: "Which of your firm's AI tools are you judging by version one?",
      cite: { ts: "3:00", who: "Oliver Goldman" },
    },
    {
      title: "A superblock simulation in a week",
      body: "Greg Demchak's lab ran a hackathon with the city of Basel and built web apps, plus an Apple Vision Pro version, for testing car-free superblocks in near real time. Prototypes were running in a few days.",
      prompt: "What idea at your firm has been waiting years for a week of focused building?",
      cite: { ts: "22:00", who: "Greg Demchak" },
    },
    {
      title: "Autocomplete for a building",
      body: "Prasanta Bose reframes autocomplete as working from partial information: bring in a bare-bones design and the system fills in what it doesn't know yet, like thermal comfort and carbon, grounded in the real thing.",
      prompt: "How much of your early design work is filling in what the model doesn't know yet?",
      cite: { ts: "9:40", who: "Prasanta Bose" },
    },
    {
      title: "Why the big vendors hold back",
      body: "Michael Jansen argues large software companies avoid truly agentic systems because agents doing everything in one place would cut into the dozens of separate tools that already earn them revenue.",
      prompt: "When a vendor's AI stays narrow, is that a technical limit or a business one?",
      cite: { ts: "1:33:30", who: "Michael Jansen" },
    },
    {
      title: "An RFP, agent by agent",
      body: "Mike Soldan breaks an RFP into a chain: intake, go/no-go against a library, human approval on the no-gos, drafting from past responses, then review. The smaller each step, the more control you have.",
      prompt: "Could you draw your own pursuit process as a chain of steps today?",
      cite: { ts: "1:08:30", who: "Mike Soldan" },
    },
    {
      title: "Burnout reports without a middleman",
      body: "Matt Wash says people and culture teams can now ask an agent directly whether someone has been working excessive hours, instead of routing the question through the one BIM manager who knew the dashboards.",
      prompt: "Who in your firm waits on a technical person to answer a people question?",
      cite: { ts: "1:10:45", who: "Matt Wash" },
    },
    {
      title: "Some of the nodes are magic",
      body: "Ariel Cooke-Zamora thinks about his reporting pipeline the way he used Grasshopper: each step is a node, except now a few of those nodes are an LLM, where something goes in and an answer comes out.",
      prompt: "Which step in your workflow is the one that needs a little magic?",
      cite: { ts: "33:20", who: "Ariel Cooke-Zamora" },
    },
    {
      title: "An HTML editor in two hours",
      body: "Marty Rozmanith got tired of bloated HTML editors and wrote his own for the Mac in about two hours. Custom tooling that was never worth building is suddenly cheap enough to try.",
      prompt: "What small tool would your team build if it only took an afternoon?",
      cite: { ts: "46:50", who: "Marty Rozmanith" },
    },
    {
      title: "The handoff problem is older than AI",
      body: "When I pointed out that firms stack errors too, Scott Reynolds widened it: architect to engineer to AHJ to bidding to the GC. Compounding mistakes are a delivery problem first.",
      prompt: "Where in your delivery chain does a small mistake get passed along unchecked?",
      cite: { ts: "49:00", who: "Scott Reynolds" },
    },
    {
      title: "It checked the program against the site",
      body: "Jesper Wallgren gave Finch's agent a client's skyscraper and asked if the space configuration made sense for the site. It came back suggesting more storage and activity space. Nobody trained it for that task.",
      prompt: "What question would you ask an agent about your current project's program?",
      cite: { ts: "52:20", who: "Jesper Wallgren" },
    },
    {
      title: "Tools made like a lost wax mold",
      body: "Roderick Bates sees plenty of firms vibe coding small widgets that work, get used once, and are thrown away. Very little of it gets codified and reused.",
      prompt: "How many of your team's one-off tools are worth keeping, and who would maintain them?",
      cite: { ts: "57:30", who: "Roderick Bates" },
    },
    {
      title: "GDL gets a second life",
      body: "Holger Kreienbrink recalls a visual GDL product that failed years ago because it was too complicated. Now people use Claude to write it, and an Archicad MCP server was coming in October.",
      prompt: "Which old scripting tool in your stack becomes useful again with plain language?",
      cite: { ts: "1:00:40", who: "Holger Kreienbrink" },
    },
    {
      title: "AI reads your comments",
      body: "Gavin Nicholls commented everything he ever wrote and says AI eats that up. Documented code lets an AI use a block without reading it, which keeps context and token costs down.",
      prompt: "Could an AI find its way around your firm's code without reading all of it?",
      cite: { ts: "53:40", who: "Gavin Nicholls" },
    },
    {
      title: "Run the agents after the baseline",
      body: "Campbell Yule would rather settle a design, then run costing, heating, and carbon agents against the baseline, than have them report on every half-finished change.",
      prompt: "When in your design process would an automated check actually help?",
      cite: { ts: "1:19:50", who: "Campbell Yule" },
    },
    {
      title: "Narrow agents skip the messy data problem",
      body: "Theodoros Galanos says the first people doing agentic AI will get out of the \"my data is messy\" problem, because a task-specific agent only needs the information around that task.",
      prompt: "What narrow task could you start on without cleaning up all your data first?",
      cite: { ts: "1:24:10", who: "Theodoros Galanos" },
    },
  ],

  bottomLine:
    "Nobody in this episode argued against agents, and nobody argued for handing them everything. The answers that held up were about permission and review: what an agent may change, whether you can read what it did, and who decides when it's finished. Geometry from a prompt is getting close. Deciding what a building should be is still the slow part, and the practical work for a firm is deciding where a person stays in the loop and writing it down.",

  closingQuote:
    "You cannot just prompt something and then hope this will become a building.",
  closingQuoteAttribution: "Holger Kreienbrink, Graphisoft",
  closingQuoteCite: { ts: "1:58:20", who: "Holger Kreienbrink" },
};
