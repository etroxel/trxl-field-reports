/* =========================================================================
   TRXL Episode Content — 229
   Swap these values to re-skin the infographic for any new episode.
   The same schema powers both the web infographic and the slide deck.
   ------------------------------------------------------------------------- */

window.TRXL_EPISODE = {
  number: 229,
  date: "May 2026",
  title: "Building the Water Cooler Before Anyone Was Thirsty",
  subtitle: "Jeff Mottle ran CGarchitect for 21 years with no business plan — and what he watched happen to archviz should concern every AEC firm still waiting for AI to settle down.",

  // Hero visual concept — campfire series: warm ember glow rising from center bottom, sparks floating upward
  hero: {
    concept: "The Campfire Series visual. Deep charcoal background with a warm amber/orange radial glow rising from the bottom center — the fire itself off-screen below the frame. Tiny ember particles float upward and fade out at varying speeds, tracing the arc of a community that gathered around a single platform for 21 years. The glow is warm and honest, not dramatic.",
    elements: ["deep charcoal background with subtle noise texture", "warm amber radial glow at bottom center (the campfire off-frame)", "floating ember particles rising and fading at varied speeds", "faint horizontal smoke wisps drifting left and right", "subtle vignette darkening corners"],
    cssNotes: "ep229-bg, ep229-glow, ep229-ember (particles use --d, --delay, --drift CSS custom properties), ep229-smoke classes",
  },

  guest: {
    name: "Jeff Mottle",
    role: "Founder",
    firm: "CGarchitect + formerly NVIDIA",
    portrait: "assets/jeff-mottle.png",
  },

  links: {
    listen: "https://trxl.co/229",
    newsletter: "https://www.trxl.co/leadership-edge-trxl-229/",
  },

  // One paragraph — the core thesis of the episode
  centralArgument:
    "Jeff Mottle didn't build CGarchitect from a business plan. He built it to monitor a job board he could check himself. He had no plan when he added advertising, no plan when he launched the 3D Awards — widely considered the Oscars of archviz — no plan when he started CGschool, and no plan when he began predicting an AI wave that most of the industry dismissed as science fiction. He ran the platform for 21 years, sold it to Chaos Group, then spent four years inside NVIDIA watching the wave finally arrive. His verdict is clear: the democratization of archviz started 15 years before ChatGPT, with Lumion and the game engines. AI didn't disrupt the industry — it just closed the deal on a process that was already underway. The AEC firms that are waiting for a clear AI winner before committing to experimentation are making the same mistake Jeff watched firms make for two decades. By the time it settles, the first movers will have already eaten their lunch.",

  // The hero pull quote
  pullQuote: {
    text: "AI just sped up the last 5% that was not yet democratized.",
    attribution: "Jeff Mottle — Founder, CGarchitect",
  },

  // Three stats — keep value short, label concise
  stats: [
    { value: "21 years",   label: "CGarchitect ran before the sale to Chaos Group — from a $10/month hosting bill to $20,000/month in servers" },
    { value: "500K",       label: "database subscribers at peak, millions of monthly views — built entirely through word of mouth, never advertised" },
    { value: "5%",         label: "of archviz democratization that AI actually finished — the other 95% happened before anyone said 'ChatGPT'" },
  ],

  // A single provocative question to the reader
  question:
    "If you're still waiting for the right AI tool to emerge before committing to experimentation, who exactly is doing the experimenting right now — and how far ahead will they be by the time you decide?",

  // Three analysis sections
  analysis: [
    {
      title: "The platform nobody planned, and why that was the point",
      body: "CGarchitect started in 2001 as a side project with two goals: create a community for archviz professionals and monitor the job board so Jeff could apply first. Within a year it was running ads. Within five years it was the definitive global platform for the industry, with hundreds of thousands of subscribers built entirely on word of mouth. The awards, the school, the publishing arm — none of it was planned. Each one emerged from a real need that appeared in front of Jeff at the right moment. His consistent move: say yes, figure out how to make it work, stay until it stops being interesting. The same instinct that built CGarchitect is what he's now applying to AI.",
    },
    {
      title: "Democratization started 15 years before the AI panic",
      body: "When Lumion shipped and game engines became accessible to architects who weren't trained visualization artists, the era of the expert button-pusher was already over. The people whose entire value proposition was knowing how to use one difficult piece of software were already under pressure. Jeff watched this from the platform he ran — the community discussions shifted from technical mastery to storytelling, to design communication, to how to tell a client something they could feel. AI accelerated the last remaining slice of that shift. The firms treating AI as an unprecedented discontinuity missed the fifteen-year ramp that preceded it.",
    },
    {
      title: "Relationships are the only thing that actually compounds",
      body: "When Jeff sold CGarchitect and asked himself what skill he actually carried into the next chapter, the answer wasn't community building or editorial judgment. It was relationships. The biggest deals he made across 21 years came from friendships that had been quietly building for a decade with no business objective in mind. The call that led to Chaos acquiring CGarchitect happened because Jeff reached out to an old contact — who said, funny you should call, I was thinking the same thing. The call that led to four years at NVIDIA happened the same way. His argument for AEC professionals is not nostalgic: it's structural. Every transaction you make with another firm either deposits into or withdraws from a relationship that will outlast the project by years. The industry is conservative enough that the only durable competitive advantage left is being the person people actually want to call.",
    },
  ],

  // Numbered action items
  takeaways: [
    "Start experimenting with AI now — pick a real workflow problem, not an impressive demo. The specific tool matters less than the understanding you build by using it.",
    "Stop waiting for analysis to produce certainty. AEC's instinct to overanalyze everything to death applies here too, and AI will have moved three generations by the time you finish the committee review.",
    "Audit your billing model. If your revenue depends on hours, start building the case internally for outcome-based pricing — because AI making a task 10x faster doesn't mean the value delivered dropped 90%.",
    "Invest in relationships before you need them. Attend one more event in person than you planned. Have one dinner that has nothing to do with a current project. That is where the real pipeline lives.",
  ],

  // Five short insights
  insights: [
    { title: "Right place, right time — then staying",    body: "Jeff didn't predict CGarchitect's 21-year run. He started something real, showed up consistently, and said yes when the next thing appeared. Most platforms fail not for lack of insight but for lack of staying power." },
    { title: "Expert button-pushers: already gone",       body: "The democratization of visualization tools made technical mastery insufficient long before AI. The studios that survived were the ones that shifted from knowing the software to knowing how to communicate design." },
    { title: "90% of archviz just needs to be good enough", body: "Jeff's honest assessment of where AI lands: the vast majority of visualization work doesn't require exceptional craft — it requires clear communication. AI handles that tier. The small percentage of exceptional work still needs exceptional people." },
    { title: "Face-to-face still cannot be replaced",    body: "A hundred video calls don't equal one dinner. Jeff made this case not from nostalgia but from data: his most durable partnerships started from conversations that had nothing to do with business. COVID revealed how much of his energy had come from exactly that." },
    { title: "AEC's conservatism is rational until it kills you", body: "The industry is appropriately careful about technology adoption — people's lives depend on how buildings perform. But that caution, applied to AI experimentation, is a different kind of risk. The first movers are building workflows right now. Waiting for it to settle is a choice with a cost." },
  ],

  // Wrap-up
  bottomLine:
    "Jeff Mottle spent 21 years as the connective tissue of an industry he watched form in real time — from DOS-era rendering to global archviz platform to AI-accelerated obsolescence of an entire skill tier. His read isn't doom. It's urgency. The firms that will navigate the AI wave aren't the ones that pick the right tool at the right moment. They're the ones already deep in the experimentation process, building internal understanding and relationships that no software release can replicate. The billing model will have to change. The conservatism will have to be redirected. The relationships will have to be built before they're needed. CGarchitect lasted 21 years because someone showed up with no plan and stayed. The same quality — showing up before you know how it turns out — is exactly what the next five years in AEC will reward.",

  closingQuote:
    "Anybody who's sitting there waiting for the off-the-shelf solution to come that uses AI is going to be the loser.",
};
