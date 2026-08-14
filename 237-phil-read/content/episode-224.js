/* =========================================================================
   TRXL Episode Content — 224
   Swap these values to re-skin the infographic for any new episode.
   The same schema powers both the web infographic and the slide deck.
   ------------------------------------------------------------------------- */

window.TRXL_EPISODE = {
  number: 224,
  date: "April 2026",
  title: "The Asteroid Is Visible Now",
  subtitle: "A dozen waves hitting AEC at once — and what to do before it lands.",

  // Hero visual concept — brainstorm this before building the infographic
  hero: {
    concept: "A glowing asteroid descending toward a horizon — the threat is visible, close, and inevitable. The viewer is standing on the ground looking up.",
    elements: ["deep sky gradient (navy → charcoal)", "horizon line", "glowing orb with coral pulse animation", "subtle particle drift"],
    cssNotes: "ep-hero-sky, ep-horizon, ep-asteroid classes; orb is pure CSS radial gradient + keyframe pulse",
  },

  guest: {
    name: "Martyn Day",
    role: "Co-founder & Director",
    firm: "X3DMedia",
    portrait: "assets/martyn-day.png",
  },

  links: {
    listen: "https://trxl.co/224",
    newsletter: "https://www.trxl.co/leadership-edge-trxl-224/",
  },

  // One paragraph — the core thesis of the episode
  centralArgument:
    "What happens when engineering automation, AI-written software, open SDKs, and a company like Palantir all arrive in your industry at the same time? Martyn Day has covered AEC for 37 years, and he made it clear: what is happening right now is unlike anything he has seen. It is not one wave. It is a dozen waves at once, hitting every layer of the industry.",

  // The hero pull quote
  pullQuote: {
    text: "It took a hundred years for the industrial revolution to sweep through. This thing's gonna hit us and it's gonna be a 10 year process, and we're just not ready.",
    attribution: "Martyn Day, co-founder, X3DMedia",
  },

  // Three stats — keep value short, label concise
  stats: [
    { value: "$390M", label: "AECOM's acquisition of AI startup Consigli" },
    { value: "90%",   label: "claimed reduction in engineering time" },
    { value: "7 hrs", label: "to generate a full MEP design from a Revit file" },
  ],

  // A single provocative question to the reader
  question:
    "If your firm had to rethink its entire tech stack, billing model, and hiring strategy from scratch today, knowing what tools will be available in 18 months, what would you keep and what would you abandon?",

  // Three analysis sections
  analysis: [
    {
      title: "Everything is being attacked at once",
      body: "AI disruption in AEC is not a single vector. Automation tools generate full MEP layouts overnight, real-time solvers reposition structure as architects move floor plates, open SDKs let AI write functional CDEs, and Palantir is building an ontology layer inside construction firms. The compounding effect is the real threat.",
    },
    {
      title: "Your data is your future",
      body: "Firms are paying for subscriptions, cloud hosting, API tokens, and AI processing on top of each other. The cost stack is compounding. Once a Palantir-style company becomes the intelligence layer between your data and your workflows, everything else becomes commodity plumbing you do not own.",
    },
    {
      title: "The people problem nobody wants to talk about",
      body: "Law firms already slowed recruiting because AI handles entry-level work. If AEC follows that pattern — cutting junior hires because AI fills those tasks — the knowledge gap in ten years will be catastrophic. Yet the people who can break down problems for AI to solve will be extraordinarily valuable.",
    },
  ],

  // Numbered action items
  takeaways: [
    "Map every location where your project data lives: ACC, cloud drives, email attachments, local servers, individual hard drives.",
    "For each location, answer three questions: Can you access this data programmatically? Could you train an LLM on it without a third party's permission? Is someone else already learning from it?",
    "Start with one completed project. Pull the data together, run a local LLM against it, and see what you can extract.",
    "Begin centralizing and cleaning your data now. The firms that will have options in 18 months are the ones that start this quarter.",
  ],

  // Five short insights
  insights: [
    { title: "The simultaneity problem",  body: "A dozen disruptions arriving at once from different directions, not a single threat." },
    { title: "The data reckoning",        body: "Firms that own and train on their own data gain advantages no vendor can replicate." },
    { title: "The talent paradox",        body: "Firms need to recruit aggressively now, even as AI makes teams smaller." },
    { title: "The gold-dust people",      body: "The person who can structure a problem for AI becomes your most valuable employee." },
    { title: "Peak named user",           body: "Tokenization and automation force vendors to rethink pricing — and it will cost more." },
  ],

  // Wrap-up
  bottomLine:
    "Martyn said he is excited by the technology and worried about humans in equal measure. The tools arriving right now — from overnight MEP solvers to AI that can write a CDE from a chat prompt — are genuinely remarkable. But the institutions, the billing models, the career pipelines, the industry frameworks: none of them were built for this pace of change. The firms that thrive will treat this moment not as a single wave to ride but as a fundamental restructuring of how they operate.",

  closingQuote:
    "Everyone can see the asteroid coming and most are still debating whether to look up. There is a gap between intellectual understanding and operational urgency, and that gap is where most of the damage will happen.",
};
