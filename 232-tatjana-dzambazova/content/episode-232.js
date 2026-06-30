/* =========================================================================
   TRXL Episode Content — 232
   Swap these values to re-skin the infographic for any new episode.
   The same schema powers both the web infographic and the slide deck.
   ------------------------------------------------------------------------- */

window.TRXL_EPISODE = {
  number: 232,
  date: "June 2026",
  title: "Bringing Joy Back to Architecture",   // second-to-last word ("Back") gets gradient emphasis
  subtitle: "Tatjana Dzambazova, Revit's first product manager and AI Strategy Lead at Motif, on why the era of expert-only tools ends — and what architecture looks like when software finally serves everyone.",

  // Hero visual concept — concentric rings of access (Step 0)
  hero: {
    concept: "Three luminous concentric rings — swim, snorkel, dive — emanating from a single warm glowing core on a deep dark field. Each ring scales in sequentially on load, like ripples from a stone dropped in still water. The innermost ring is brightest; all three share the same center, showing that depth of expertise is a spectrum, not a gate. Floating mono labels mark each ring.",
    elements: ["deep dark field with subtle accent radial vignette", "three concentric circle rings scaling in staggered via --i", "bright pulsing center core dot", "three mono-text labels (swim / snorkel / dive) floating outward from each ring"],
    cssNotes: "ep232-rings (container, centered), ep232-ring (concentric circles, --i:0/1/2, scale-in animation), ep232-core (pulsing dot with glow), ep232-level labels (swim / snorkel / dive, absolute positioned)",
  },

  guest: {
    name: "Tatjana Dzambazova",
    role: "AI Strategy Lead",
    firm: "Motif",
    portrait: "assets/tatjana-dzambazova.png",  // hedcut
  },

  links: {
    listen: "https://trxl.co/232",
    newsletter: "https://trxl.co/leadership-edge-trxl-232/",
  },

  centralArgument: "The architecture profession didn't lose its joy by accident. It lost it incrementally, through tools designed for experts that made everyone else feel like they were serving the software instead of the other way around. AI is the first real opportunity to break that pattern — not by automating the work away, but by designing tools that welcome architects at every level of fluency and make room for the kind of thinking that makes buildings worth experiencing.",

  pullQuote: {
    text: "If you don't define what you'll be paid for in the future, the owners will decide for you.",
    attribution: "Tatjana Dzambazova, AI Strategy Lead, Motif",
  },

  stats: [
    { value: "25 yrs", label: "the age of the software foundations AEC is still building on" },
    { value: "5", label: "AI capabilities in Tatjana's deities framework: Prometheus, Hermes, Augur, Mnemosyne, Zeus" },
    { value: "30 min", label: "minimum session to start capturing what BIM never could: the process behind the building" },
  ],

  question: "When did you last pause mid-project and ask not 'what's the most efficient path to the deliverable' — but 'what kind of building do we actually want to make here'?",

  analysis: [
    {
      title: "The terror of technological expertise",
      body: "Every major AEC tool repeated the same pattern: built for experts, who became gatekeepers, while everyone else felt like they were serving the software. Firms ended up hiring people who knew Revit over people who were good architects. AI, designed deliberately, can break this cycle — by welcoming everyone at their level of fluency rather than filtering for the trained.",
    },
    {
      title: "What Revit never built",
      body: "Revit optimized for coordination and compliance — better documentation, not better buildings. It never helped firms learn from previous projects, create institutional knowledge, or transfer what made their architecture distinctive. The tool that became the industry's universal language didn't capture what the industry most needed to keep. When senior architects leave, their process goes with them.",
    },
    {
      title: "Faster is not better",
      body: "Tatjana's warning isn't about AI replacing architects — it's about architects voluntarily ceding the thinking that makes them architects. If AI handles more and more cognition and firms accept that trade without examining it, the profession risks 'mental obesity': losing its capacity for hard thinking. The right frame isn't replacement or efficiency. It's partnership — a thinking partner you could never afford.",
    },
  ],

  takeaways: [
    "Define what you'll be paid for before your clients define it for you — in writing, shared with your team.",
    "Run a 30-minute process capture session before your next project closes: what won't be visible in the model?",
    "Audit your tools for the expert trap — do they serve your whole team, or filter for the trained few?",
    "Map the five AI capabilities to your workflow and ask which your firm most needs to develop next.",
  ],

  insights: [
    {
      title: "Swim, snorkel, dive",
      body: "The right tool welcomes everyone at their level — beginner, intermediate, expert — without penalizing anyone for going shallow or rewarding only those who go deep.",
    },
    {
      title: "Process over artifacts",
      body: "Firms store BIM models meticulously; almost none of what makes their architecture distinctive lives in those files. The process — decisions, reversals, constraints — lives in people and disappears when they leave.",
    },
    {
      title: "The credential inversion",
      body: "When tools become the credential, firms hire for tool fluency over design ability. AI can reverse this — but only if firms and tool-builders choose to design for it deliberately.",
    },
    {
      title: "Mental obesity is the real risk",
      body: "Ceding too much thinking to AI doesn't create efficiency — it risks cognitive atrophy. The question is which tasks to automate and which to protect, not how fast everything can be handed over.",
    },
    {
      title: "Curation is the job",
      body: "Anyone can generate a rendering. The architect's value is judgment: knowing what matters, why, and being able to defend it. That's the capability to protect, develop, and charge for.",
    },
  ],

  bottomLine: "The thread running through three decades of Tatjana's career is the same one running through this conversation: tools should serve the people who use them, not the other way around. What she's building at Motif — and what she's asking architects to think about — is whether AI can finally close the gap between what the profession is capable of and what its tools have allowed. Not by automating the work away, but by making room for the thinking that got squeezed out somewhere inside the documentation. She uses the Frank Lloyd Wright civic center in San Rafael as her north star: a building that made someone forget why they came. That's what architects can make when the conditions are right. The question is whether the profession is willing to build those conditions.",

  closingQuote: "You're given a thinking partner you could never afford. Embrace it.",
};
