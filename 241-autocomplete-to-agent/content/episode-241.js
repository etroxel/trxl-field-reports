window.TRXL_EPISODE = {
  number: 241,
  date: "September 2026",
  title: "From Autocomplete to Agent",
  titleEm: "Agent",
  subtitle:
    "Every company in this arc has AI in their marketing, so I asked all of them the same question: in a real firm today, what can it actually do, and what can't it?",

  youtube: "https://youtu.be/MUVtq9YrNN8",

  // Full editions go to every subscriber, free accounts included — the free
  // signup is deliberate, it feeds the list. Partners funded the series.
  access:
    "Every edition of this series goes out in full to everyone on the list, free accounts included, because the partners paid for it. Sign up free at trxl.co — this opens Arc 2, and the rest of the series still comes to you.",

  // Hero visual concept — the wrapper and the harness
  hero: {
    concept:
      "Two identical forms flank the title. At rest they are the same object: same outline, same skin, nothing to choose between them. On a slow cycle the skins dissolve and the difference resolves — one is hollow around a borrowed core, the other is packed with mechanism running from that same core out to the shell. The core is identical in both. Everything that distinguishes them is the part nobody demos.",
    elements: [
      "two matching rounded forms, one on each side of the headline, identical while closed",
      "an identical bright core inside both — the borrowed model, nobody's differentiator",
      "struts and an inner ring of checks inside the right-hand form only — the harness",
      "skins that dissolve on a 12s cycle, hold open long enough to read the difference, then close",
    ],
    cssNotes:
      "ep241-cut-frame, ep241-cut-sky, ep241-pair, ep241-box, ep241-core, ep241-mech (+ span struts, ep241-mech-ring), ep241-skin, ep241-label, ep241-cut-grain; CSS-only, no JS. [data-motion=\"off\"] freezes the skins OPEN (opacity 0) so the og.png capture shows the difference rather than two identical closed boxes.",
  },

  // Roundup episode — no single guest. The roster drives the hero badge and
  // the bottom-line list; there are no portraits by design.
  roster: {
    badge: "16 voices · 11 companies · 1 question",
    line: "The Next AEC Tech Stack · Arc 2: Agentic AI · Opening episode",
    // `avatar` is the hedcut, never the headshot.
    people: [
      { name: "Michael Jansen", firm: "Twinmaster", avatar: "assets/hedcuts/michael-jansen.webp" },
      { name: "Prasanta Bose", firm: "Twinmaster", avatar: "assets/hedcuts/prasanta-bose.webp" },
      { name: "Roderick Bates", firm: "Chaos", avatar: "assets/hedcuts/roderick-bates.webp" },
      { name: "Scott Reynolds", firm: "UpCodes", avatar: "assets/hedcuts/scott-reynolds.webp" },
      { name: "Mike Soldan", firm: "Egnyte", avatar: "assets/hedcuts/mike-soldan.webp" },
      { name: "Greg Demchak", firm: "Bentley Systems", avatar: "assets/hedcuts/greg-demchak.webp" },
      { name: "Holger Kreienbrink", firm: "Graphisoft", avatar: "assets/hedcuts/holger-kreienbrink.webp" },
      { name: "Marty Rozmanith", firm: "Skema", avatar: "assets/hedcuts/marty-rozmanith.webp" },
      { name: "Ariel Cooke-Zamora", firm: "Bimbeats", avatar: "assets/hedcuts/ariel-cooke-zamora.webp" },
      { name: "Matt Wash", firm: "Bimbeats", avatar: "assets/hedcuts/matt-wash.webp" },
      { name: "Jesper Wallgren", firm: "Finch", avatar: "assets/hedcuts/jesper-wallgren.webp" },
      { name: "Oliver Goldman", firm: "Autodesk", avatar: "assets/hedcuts/oliver-goldman.webp" },
      { name: "Randall Stevens", firm: "AVAIL", avatar: "assets/hedcuts/randall-stevens.webp" },
      { name: "Campbell Yule", firm: "AEC Tech Analyst", avatar: "assets/hedcuts/campbell-yule.webp" },
      { name: "Gavin Nicholls", firm: "Architectus", avatar: "assets/hedcuts/gavin-nicholls.webp" },
      { name: "Theodoros Galanos", firm: "Aurecon", avatar: "assets/hedcuts/theodoros-galanos.webp" },
    ],
  },

  links: {
    listen: "https://trxl.co/241",
    newsletter: "https://www.trxl.co/leadership-edge-trxl-241/",
  },

  centralArgument:
    "Michael Jansen says 95% of the tools calling themselves AI are really just a bit of code wrapped around somebody else's model. Theodoros Galanos says a real AI solution is about 90% harness — the validation, the integration, the monitoring built around somebody else's model. Those two sentences describe the identical object. That's the problem this episode is actually about: from the outside, at the demo, a wrapper and a harness look exactly the same. So I asked sixteen people building and using this stuff to open theirs up, on camera.",

  pullQuote: {
    text: "Stop taking people's word for what works and what doesn't work, and adopting those things. What to start doing is to start testing and experimenting yourself.",
    attribution: "Scott Reynolds, UpCodes",
    cite: { ts: "1:16:45", who: "Scott Reynolds" },
  },

  stats: [
    { value: "95%", label: "the share of self-described AI tools Michael Jansen says are really a thin shell around someone else's model", cite: { ts: "45:25", who: "Michael Jansen" } },
    { value: "90 / 10", label: "Theodoros Galanos's split between the harness and the model itself — the 10% is the part every demo is actually showing you", cite: { ts: "57:55", who: "Oliver Goldman", label: "Oliver Goldman's pushback" } },
    { value: "$200K", label: "the size of the monthly token bill Mike Soldan has watched land on firms that rolled a tool out company-wide", cite: { ts: "1:39:05", who: "Mike Soldan" } },
  ],

  question:
    "If you opened up the AI tool your firm is closest to buying, would you find a harness in there, or a skin around a model you could have called yourself?",

  analysis: [
    {
      title: "Same silhouette, opposite substance",
      body: "Jansen's complaint and Galanos's compliment are the same sentence pointed in opposite directions. Both describe code wrapped around a model somebody else trained. The difference is whether that wrapping is a coat of paint or the actual product. Oliver Goldman at Autodesk pushed back when I put the 90/10 number to him, and fairly — building the models is extremely difficult and wildly expensive, he said. But he didn't argue the underlying point. The harness, he told me, is where the distinguishing capabilities lie right now, and nobody has figured out a reproducible way to build one yet. That's the honest state of the field: the valuable part and the lazy part occupy the same shape, and the industry has no agreed way to tell them apart from the outside.",
      cites: [
        { ts: "45:25", who: "Michael Jansen" },
        { ts: "58:15", who: "Oliver Goldman" },
      ],
    },
    {
      title: "What's actually inside the ones that work",
      body: "Open up the tools in this episode that people are really using on live projects and the same thing keeps turning up: the model is doing less than you'd think. Marty Rozmanith says 90 to 95% of what Skema does is discrete deterministic math, and they don't meaningfully train anything — the AI's job is to figure out which five of five hundred solver inputs you meant. Egnyte puts parsers in front of the language model precisely because language models are bad at counting stairs and reading nested tables in an AEC contract. Finch gave its agent tools that measure geometry rather than trusting the model to reason about it. None of that is model cleverness. All of it is domain expertise, built by people who know what a building actually is, wrapped around a component they rented.",
      cites: [
        { ts: "12:30", who: "Marty Rozmanith" },
        { ts: "1:37:55", who: "Mike Soldan" },
        { ts: "41:15", who: "Jesper Wallgren" },
      ],
    },
    {
      title: "Who pays for the difference",
      body: "The wrapper-versus-harness distinction stops being philosophical the moment the invoice arrives. Mike Soldan has watched firms deploy a tool across the whole company and get back a six-figure monthly token bill, and his point about why Egnyte does the parsing up front is not architectural pride — it's that the enrichment lets the query run on a mid-tier model instead of the most expensive one. That's the harness paying for itself. A thin wrapper has no such option: it passes the meter straight through to you. Roderick Bates is already watching firms throttle back rendering volume because compute became real money, and Holger Kreienbrink says Graphisoft has only just started what he calls their learning year on token consumption. Everyone in this episode is discovering the same thing at once, which is that the free-iteration era ended quietly and nobody repriced anything.",
      cites: [
        { ts: "1:39:05", who: "Mike Soldan" },
        { ts: "1:30:00", who: "Roderick Bates" },
        { ts: "1:33:05", who: "Holger Kreienbrink" },
      ],
    },
  ],

  takeaways: [
    "Ask any vendor pitching you AI the wrapper question directly: what in here did you build, and what are you renting from a model provider. The answer, or the dodge, tells you which of the two shapes you're looking at.",
    "Judge the harness, not the model. The differentiator is the validation, the domain checks, and the integration — so ask what happens when the model is wrong, not what happens when it's right.",
    "Price the tokens before you scale a tool past a pilot. A rollout that's cheap for ten people can land a six-figure monthly bill at company scale, and the vendor doing enrichment up front is the one keeping you off the expensive model.",
    "Test it yourself instead of taking anyone's word for it, the way Scott Reynolds does — including taking your own word for it, since most of these answers have an expiration date measured in months.",
  ],

  // Deliberately NOT the moments cited in the analysis or stats above — the
  // point of this section is to send people somewhere new in the tape.
  // One card per voice, sixteen in all: every contracted Arc 2 partner plus
  // the three practitioner voices.
  insightsKicker: "Additional key insights",
  insightsNote: "Sixteen more moments worth your time, one from every voice in the episode and ranging well past the argument above. Each card jumps to that point in the tape.",
  insights: [
    {
      title: "Who's checking your work",
      body: "Roderick Bates points at a blind spot nobody markets to: a sole practitioner has a great eye and nobody to show it to. Asking the cat doesn't help. Feedback against the fairly set rules of what makes a good image is, he thinks, not a bad place for AI to sit.",
      prompt: "Who gives your work a critical read before a client sees it, and what happens on the weeks nobody's available?",
      cite: { ts: "1:52:55", who: "Roderick Bates" },
    },
    {
      title: "The audit before the plan check",
      body: "Scott Reynolds describes UpCodes' plan review running on an uploaded set as early as SD: it flags code issues, but also the unglamorous coordination misses — the architectural set disagreeing with the mechanical, the plan disagreeing with the spec.",
      prompt: "How many of your last project's RFIs were a coordination mismatch a machine could have caught in SD?",
      cite: { ts: "19:55", who: "Scott Reynolds" },
    },
    {
      title: "No pre-recorded demos",
      body: "Mike Soldan says Egnyte doesn't do canned demos, full stop. The query runs live in front of you, and if it fails, they deal with it in the room. In an industry where trust is the hard currency, that's the whole sales strategy.",
      prompt: "When did a vendor last show you their tool working live on your own data instead of theirs?",
      cite: { ts: "1:05:45", who: "Mike Soldan" },
    },
    {
      title: "Describe it, and it writes the widget",
      body: "Greg Demchak walks through what's shipping inside MicroStation now: describe what you want in plain language, and it instantiates Python snippets that build working widgets and generate real solid geometry — not pixels, geometry an engineer can analyze.",
      prompt: "What's the small custom tool your team keeps wishing for and never has a week to build?",
      cite: { ts: "27:00", who: "Greg Demchak" },
    },
    {
      title: "Where's the beef",
      body: "Holger Kreienbrink's filter for separating a real product from vaporware is refreshingly low-tech: talk to the people, watch their pace of development, and notice whether there's anything underneath the pitch deck. If it's PowerPoint and a prototype, he asks where the beef is.",
      prompt: "What would you have to see from a startup, beyond the demo, to put them in your roadmap?",
      cite: { ts: "1:54:25", who: "Holger Kreienbrink" },
    },
    {
      title: "A command line without the syntax",
      body: "Marty Rozmanith's definition is the most useful one in the episode: an LLM is a command line where you don't have to know the syntax. You say what you mean, and if it gets it wrong, you correct it. What it can do for you depends entirely on the tools you hand it.",
      prompt: "If the interface is just a command line that forgives your syntax, what would you ask your own software to do?",
      cite: { ts: "42:15", who: "Marty Rozmanith" },
    },
    {
      title: "The adoption curve nobody had to self-report",
      body: "Ariel Cooke-Zamora can see AI adoption in a firm without asking anyone, because the window title tells Bimbeats which program is open. Two years ago it was a handful of early adopters. Now it's a power-law curve and effectively everyone.",
      prompt: "If you measured your firm's real AI usage this way, would the number surprise leadership in a good way or a bad one?",
      cite: { ts: "31:50", who: "Ariel Cooke-Zamora" },
    },
    {
      title: "They guessed fee proposals. It was inspection reports.",
      body: "Matt Wash's team benchmarked a firm that was certain fee proposals were their biggest time sink, because that's where the tools they'd seen were pointed. The data said site inspection reports took twice as long. Their instinct sent them at the smaller problem.",
      prompt: "What does your team assume is its biggest time sink, and when did anyone last measure it?",
      cite: { ts: "34:55", who: "Matt Wash" },
    },
    {
      title: "Hand it the compliance document",
      body: "Jesper Wallgren is most excited about the least glamorous feature: upload a document like the London Design Guide and ask how the building measures up against it. These documents are long and boring to read, which is exactly why nobody reads them carefully.",
      prompt: "Which standards document on your current project has nobody actually read end to end?",
      cite: { ts: "40:15", who: "Jesper Wallgren" },
    },
    {
      title: "Engage with a steady hand",
      body: "Oliver Goldman's advice for firm leaders cuts between two failure modes: spend every day chasing model announcements and you'll get no work done, ignore it entirely and the world moves on without you. Measured engagement, with someone actually reflecting on what you learn.",
      prompt: "Who in your firm is responsible for reflecting on what your AI experiments taught you, not just for running them?",
      cite: { ts: "1:46:55", who: "Oliver Goldman" },
    },
    {
      title: "Twelve of the twenty-five, today",
      body: "Michael Jansen puts a real number on what Arch-e can do right now: of roughly 20 to 25 key performance indicators a building has to answer for, it handles about 12 to 15, with schedule, cost, zoning compliance, and clash detection first in line.",
      prompt: "Which of your project's KPIs would you actually trust a tool to score, and which do you need a person to sign?",
      cite: { ts: "48:40", who: "Michael Jansen" },
    },
    {
      title: "Fewer middle managers, more micro Garys",
      body: "Prasanta Bose thinks the deepest change is organizational, not technical: when everyone can interrogate the model directly, hierarchy flattens, the middle layer thins out, and one experienced person's judgment gets amplified across several projects at once.",
      prompt: "If everyone in your office could query the model directly, which approval step in your process stops earning its place?",
      cite: { ts: "2:14:25", who: "Prasanta Bose" },
    },
    {
      title: "Ship it too early and they're gone",
      body: "Randall Stevens spent years testing the big platforms' photo auto-tagging, watching it stay mediocre. When a vendor in this industry shipped it anyway, the bad results eroded customer trust in the whole search. Fix it the next day and it doesn't matter — people already parked it.",
      prompt: "Which tool has your team written off that might actually be good now, and who would ever go back and check?",
      cite: { ts: "54:35", who: "Randall Stevens" },
    },
    {
      title: "The partner sitting beside them, all the time",
      body: "Campbell Yule thinks the firms still standing in 2030 are the ones that captured their own judgment and put it into their systems, so a junior gets the partner's thinking on demand instead of waiting for their hour of attention that day.",
      prompt: "Where does your firm's hardest-won judgment currently live — in a system, or in three people's heads?",
      cite: { ts: "2:03:05", who: "Campbell Yule" },
    },
    {
      title: "Contact us for pricing is a turnoff",
      body: "Gavin Nicholls on what tips him off that a small product has started cosplaying as a big one: the website stops showing the product, pricing disappears behind a contact form, and he's lost two hours only to find out he didn't want it anyway.",
      prompt: "What does your own firm's website hide behind a contact form that a prospective client would rather just see?",
      cite: { ts: "1:08:35", who: "Gavin Nicholls" },
    },
    {
      title: "Resist your instincts",
      body: "Theodoros Galanos's advice to leaders who don't know what to do is the most counterintuitive in the episode: whatever your instinct tells you, resist it. If your instinct is to buy, because you always buy, stop and ask what else you could do. Maybe you need partners, not vendors.",
      prompt: "The last time your firm faced a technology decision, did you buy because it was right, or because buying is what you do?",
      cite: { ts: "2:06:25", who: "Theodoros Galanos" },
    },
  ],

  bottomLine:
    "Nobody in this episode claimed AI is solved, and the more credible ones didn't claim their own product was either. Holger said Graphisoft's AI visualizer is just okay. Oliver said nobody knows how to build a harness reproducibly yet. Marty said most of what Skema does isn't AI at all. What separated the useful answers from the marketing wasn't confidence, it was specificity: which twelve of twenty-five KPIs, which five of five hundred inputs, which model tier the query runs on, which bill landed last month. A wrapper can't answer at that resolution. That's the tell.",

  closingQuote:
    "The complexity is now harnessed. The genie is now in the box.",
  closingQuoteAttribution: "Prasanta Bose, Twinmaster",
  closingQuoteCite: { ts: "2:18:25", who: "Prasanta Bose" },
};
