/* =========================================================================
   TRXL Episode Content — 230
   Swap these values to re-skin the infographic for any new episode.
   The same schema powers both the web infographic and the slide deck.
   ------------------------------------------------------------------------- */

window.TRXL_EPISODE = {
  number: 230,
  date: "May 2026",
  title: "Rooms for Storytelling",
  subtitle: "Keith Gerchak designs theaters, concert halls, and opera houses — and made a feature film — by holding one question through years of pressure: does this serve the story, and does it serve the audience?",

  // Hero visual concept — the empty stage
  hero: {
    concept: "A single warm spotlight pool on an empty dark stage, with faint rows of audience seat-backs silhouetted in the foreground darkness, framed by a proscenium arch. The room is waiting for the story; the audience is already present in the dark. A thin hand-drawn line traces the stage edge — a nod to Keith's discipline that every line has a purpose. The spotlight breathes gently.",
    elements: ["deep charcoal stage background with soft vignette", "warm conical spotlight descending from top center onto an elliptical pool of light on the stage floor", "faint silhouetted rows of audience seat-backs across the foreground", "proscenium arch framing the scene left/right/top", "thin hand-drawn baseline tracing the stage lip"],
    cssNotes: "ep230-stage, ep230-spotlight (cone), ep230-pool (floor ellipse), ep230-seats (repeating-gradient seat silhouettes), ep230-proscenium, ep230-line classes; spotlight uses a breathe keyframe on opacity/scale",
  },

  guest: {
    name: "Keith Gerchak",
    role: "Design Principal",
    firm: "TheaterDNA",
    portrait: "assets/keith-gerchak.png",
  },

  links: {
    listen: "https://trxl.co/230",
    newsletter: "https://www.trxl.co/leadership-edge-trxl-230/",
  },

  // One paragraph — the core thesis of the episode
  centralArgument:
    "Keith Gerchak has lived on both sides of the proscenium — child actor at Playhouse Square, architecture degree from Tulane, theater consultant in New York, and now design principal at TheaterDNA, a firm that works alongside Gehry Partners and SANAA on what he calls \"rooms for storytelling.\" He also spent twelve years co-writing, directing, and producing an independent feature film. Across all of it runs one consistent question: there is a story being told, there is an audience receiving it, and the designer's job is to make sure the room serves both. As drawing sets thicken and AI enters the workflow, the danger he names is precise — the tools start commanding the people instead of the people commanding the tools, and the building quietly stops being about the people who will sit in the seats.",

  // The hero pull quote
  pullQuote: {
    text: "I know every line that I put down on the paper. Every line has a meaning, every line has a purpose.",
    attribution: "Keith Gerchak — Design Principal, TheaterDNA",
  },

  // Three stats — keep value short, label concise
  stats: [
    { value: "12 yrs", label: "Keith spent co-writing, directing, and producing his feature film Lost and Found in Cleveland before its release" },
    { value: "50%",    label: "of a performing arts building is backstage infrastructure the audience never sees — and the first thing budgets try to cut" },
    { value: "500",    label: "theaters that screened the film nationwide in fall 2025, against an industry squeezing out independent work" },
  ],

  // A single provocative question to the reader
  question:
    "When was the last time you were in a completed building that clearly remembered who it was for — beyond the client who paid for it? What would it take to make that the test you apply at every phase of your next project, not just at the beginning?",

  // Three analysis sections
  analysis: [
    {
      title: "The room has to serve the story",
      body: "TheaterDNA's name is intentional — its people are operators, performers, and playwrights as much as consultants. That background gives Keith unusual clarity about what a venue actually is: a place where an audience gathers to laugh and cry together around a shared focal point. The practical consequence is a constant fight for the invisible half of the footprint — the fly space, loading docks, and rehearsal rooms that make the art possible. The audience is always the end client, even when they are never in the room during design.",
    },
    {
      title: "The script was the blueprint",
      body: "Keith and his co-writer spent twelve years bringing Lost and Found in Cleveland to screen — financing collapsed, a broker stole the money, they paid investors back, and two years later were asked to direct it themselves. The script, he says, became a blueprint: malleable as new information arrived, but the original draft is the film that reached theaters. A mentor's line stuck — \"it's 85% HR\" — hire the right people and make your vision strong enough to pivot in real time. The same holds for a decade-long building: only the team that can measure every decision against the original sketch keeps the vision intact.",
    },
    {
      title: "When technology loses the thread",
      body: "Keith designs entirely by hand and has kept his concept sketches from nearly every project. His critique is specific: as drawing sets grow and models get more detailed, the people building the project lose contact with the reasons behind the decisions. He watched the same dilution in the shift from hand drafting to CAD, and again from CAD to Revit — each treated, for a while, as data entry rather than design. AI follows the same arc; TheaterDNA tested it on building code and found it 50% wrong. His position is consistent: command the tools, don't let them command you.",
    },
  ],

  // Numbered action items
  takeaways: [
    "Make the first sketch by hand — one page, no dimensions, just the idea — even if your office runs entirely on Revit.",
    "Write one sentence naming who the building is for beyond the client — the ticket buyers, the dancers, the students — and pin it to the project folder.",
    "Measure every value-engineering cut, schedule compression, and confused contractor against that sentence before you accept the change.",
    "Use AI for what it is genuinely good at and name its limits out loud — let it be a thought partner, never the holder of judgment earned by experience.",
  ],

  // Five short insights
  insights: [
    { title: "Rooms for storytelling",   body: "Every venue serves a story and an audience; lose track of that and the building starts serving schedules and budgets instead." },
    { title: "The blueprint and the script", body: "A twelve-year film and an eight-year building both survive only if someone can hold the original vision and pivot without abandoning it." },
    { title: "The invisible 50%",        body: "Backstage infrastructure is what allows the art to be made, and it is the first thing every tightening budget attacks." },
    { title: "When tools command us",     body: "Thickening documentation and AI-assisted analysis put distance between a designer's intent and the people doing the work." },
    { title: "The case for working by hand", body: "Keith sketches every project because the discipline forces a reason behind every line — judgment that cannot be outsourced." },
  ],

  // Wrap-up
  bottomLine:
    "What stays with you from this conversation is how consistent Keith's worldview is across everything he does. Whether he is fighting a contractor who has lost the thread on a bespoke venue, navigating film distribution against industry consolidation, or making the case for designing by hand in the age of AI, it always returns to the same question: does this serve the story, and does it serve the audience? That is not just a philosophy for theater consultants. Any architect who can hold that question through eight years of review boards, value engineering, and contractor confusion produces something different than one who cannot — and the difference is almost always visible to the people who actually sit in the seats.",

  closingQuote:
    "The room is for the story, the tools are for the room. When the tools become the main conversation instead of the story, something went wrong upstream.",
};
