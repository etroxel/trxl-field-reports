/* =========================================================================
   TRXL Episode Content — 228
   Swap these values to re-skin the infographic for any new episode.
   The same schema powers both the web infographic and the slide deck.
   ------------------------------------------------------------------------- */

window.TRXL_EPISODE = {
  number: 228,
  date: "June 2026",
  title: "What Did You Actually Do Today",
  subtitle: "The construction industry gets paid to stay broken — and that needs to change before AI makes hourly billing obsolete.",

  // Hero visual concept — empty timesheet with glowing divider and question mark
  hero: {
    concept: "A dark field of faint horizontal timesheet rows bisected by a single glowing vertical line — Steve's 'line down the middle of the page.' Left side has a warm ember glow (purposeful work). Right side has scattered particles drifting upward and dissolving (everything else). A massive, barely-visible question mark pulses at center: the day's answer, still blank.",
    elements: ["dark charcoal background with repeating horizontal timesheet rows", "glowing vertical center divider with accent pulse", "warm left-side radial glow", "scattered right-side floating particles", "large gradient question mark at low opacity with breathe animation"],
    cssNotes: "ep228-bg (::before for row lines), ep228-scene, ep228-vline, ep228-left-glow, ep228-qmark, ep228-particle classes; particles use CSS custom properties --d and --delay for stagger",
  },

  guest: {
    name: "Steve Burrows, CBE",
    role: "Founder",
    firm: "B2Burrows",
    portrait: "assets/steve-burrows.png",
  },

  links: {
    listen: "https://trxl.co/228",
    newsletter: "https://www.trxl.co/leadership-edge-trxl-228/",
  },

  // One paragraph — the core thesis of the episode
  centralArgument:
    "Steve Burrows spent 29 years at Arup building things like the Bird's Nest Stadium, ran engineering at AECOM and WSP, and was Head of Engineering at Katerra when it tried — and failed — to reinvent construction at scale. His conclusion: the construction industry is profitable precisely because it's broken. Engineers earn their margin on change orders. Contractors stopped building and just pass paper. Clients absorb every inefficiency, and their kids can't afford homes. Steve's answer is not a software platform or a mandate from leadership. It's a piece of paper with a line down the middle, and the discipline to answer one question honestly at the end of every workday.",

  // The hero pull quote
  pullQuote: {
    text: "The construction industry is the only one I know where everybody gets well paid for screwing up.",
    attribution: "Steve Burrows, CBE — Founder, B2Burrows",
  },

  // Three stats — keep value short, label concise
  stats: [
    { value: "≥50%",  label: "of every construction dollar wasted — Steve called Evan's number a conservative floor" },
    { value: "60%",   label: "of Steve's day at WSP consumed by meetings before he finally walked away from corporate" },
    { value: "2×",    label: "productivity gain available to anyone who clears the right side of the page" },
  ],

  // A single provocative question to the reader
  question:
    "When AI is handling standard engineering at near-zero cost, how will a firm that charges by the hour survive — and are you already building a practice that gets paid for value instead?",

  // Three analysis sections
  analysis: [
    {
      title: "The system was designed to reward dysfunction",
      body: "AEC engineers make most of their margin not on original scope but on change orders — which only happen when the process breaks down. Contractors stopped self-performing construction and became paper-passers. Clients absorb every inefficiency, housing costs keep climbing, and homeownership is slipping out of reach for the next generation. Nobody inside the system has a financial incentive to fix it. That is exactly why it stays broken.",
    },
    {
      title: "You are selling knowledge you cannot actually access",
      body: "Every AEC firm sells its track record across a hundred past projects. Almost none can demonstrate in real time what they learned from any of them. The knowledge left with the people who did the work. When Steve's team was asked to show their knowledge management system live during a client interview, the room went quiet — nothing existed. The new team starts from scratch on each project and bills full price for rediscovery.",
    },
    {
      title: "Most startups are solutions without a defined problem",
      body: "Steve talks to a new construction startup every week. More than half have identified an interesting AI or automation capability and are still searching for the specific problem it solves. The standard pitch: cite McKinsey on construction productivity, gesture at the size of the market, promise to take 1%. Steve's framework: pick one thing to optimize — time, cost, or quality — get the right people in the room, figure out how to scale it. Most startups skip all three steps.",
    },
  ],

  // Numbered action items
  takeaways: [
    "Draw a line down the middle of a page. Left: highest and best use of your time. Right: everything else. Track honestly what you actually do for the next 30 days.",
    "Eliminate the right column. Delegate it, decline the meeting, or simply stop going. Free the time before you try to fill it with something better.",
    "Use the recovered time to standardize and automate the work on the left — the work you were hired to do. That is where the real productivity gain lives.",
    "Align responsibility and authority explicitly. If someone has a bigger title but no power to act on it, that is not a promotion — it is a different name on the same ceiling.",
  ],

  // Five short insights
  insights: [
    { title: "No burning platform",         body: "AEC professionals bill north of $200/hr in a system that rewards dysfunction. There is no personal incentive to change what pays so well — until AI makes hourly billing obsolete." },
    { title: "Solutions hunting problems",  body: "Defining the problem before building the solution is the most obvious advice in business. Most construction startups skip it and build anyway." },
    { title: "Stop before you start",       body: "You cannot add anything meaningful until you stop doing something else first. Most professionals never take that first step." },
    { title: "Knowledge that walks",        body: "AEC firms sell institutional memory from past projects, but that memory lives in people who have moved on. No platform. No structured data. No way to interrogate what was actually learned." },
    { title: "Title ≠ authority",           body: "Most AEC firms give people responsibility without the power to act on it. That is not a management structure — it is a system for assigning blame." },
  ],

  // Wrap-up
  bottomLine:
    "Steve is not painting a picture of doom — he is painting a picture of focus. The construction industry is broken at the system level, but the system is made of individuals. Individuals can change what is within their control today: which meetings they attend, which problems they actually own, whether their firm's knowledge lives anywhere other than the heads of people who have already left. The tools to standardize, automate, and reclaim professional time already exist. When AI drives standard engineering toward zero cost, firms that have been billing by the hour will need a new answer to the question everyone will be asking.",

  closingQuote:
    "I'm only on this earth for a limited period of time. Is coming home having done not much really how I want to spend it?",
};
