window.TRXL_EPISODE = {
  number: 249,
  date: "November 2026",
  title: "Level Two Autonomy for Architects",
  titleEm: "Two",
  subtitle: "The bar design AI still has to clear, and what your firm can do before it gets there.",

  // Hero visual concept — the level-two gauge
  hero: {
    concept:
      "A strip of the six levels of driving automation (0–5). A lit marker settles on level 2, nudges toward 3 now and then, and drifts back, because design AI isn't there yet. A thin line underneath says who's still responsible.",
    elements: [
      "six-segment track with mono level numbers and SAE names",
      "gradient fill from level 0 up to the marker",
      "glowing marker resting on level 2 with a slow drift toward 3 and back",
      "level 2 label lit, level 3 label brightening as the marker approaches",
      "caption line: you're still responsible",
    ],
    cssNotes:
      "ep249-gauge / ep249-track / ep249-seg / ep249-fill / ep249-marker; in-flow inside .ep-hero-inner under the subtitle so nothing overlaps the title. Motion off (or no JS) freezes the marker at level 2.",
  },

  guest: {
    name: "Julian Geiger",
    role: "Chief AI Officer",
    firm: "Nemetschek Group",
    portrait: "assets/julian-geiger.png",
  },

  links: {
    listen: "https://trxl.co/249",
    newsletter: "https://www.trxl.co/leadership-edge-trxl-249/",
  },

  centralArgument:
    "Julian Geiger thinks design AI has to reach level two before it changes the work. That's the car that keeps its lane and handles the braking while you stay responsible. Today a model can produce a slick villa from a few prompts, but nothing in the demo says whether anyone could build it. Until AI can carry a project's full context, the architect supplies the context and the judgment. Both start with the firm's own project history.",

  pullQuote: {
    text: "Whatever you're using today, it will be the worst AI of your entire lifetime that you're using today.",
    attribution: "Julian Geiger, Chief AI Officer, Nemetschek Group",
  },

  stats: [
    { value: "Level 2", label: "the driver-assistance bar Julian says design AI still has to reach" },
    { value: "95.9%",   label: "GPT-6 Astra's BenchCAD score as reported by OpenAI, up from 83.3% for GPT-5.6 Sol" },
    { value: "3 weeks", label: "Julian's rough wait for the next big model release" },
  ],

  question:
    "Could a new hire open one of your finished project folders and tell you why the building looks the way it does?",

  analysis: [
    {
      title: "Your last bad experience has an expiration date",
      body: "Plenty of architects tried a chatbot two years ago, watched it hallucinate a quantity takeoff, and stopped there. Julian's view is that the verdict goes stale even if it was right at the time. He tells his own team to build for use cases that don't work yet, because three to six months from now they might. Any \"we tried it, it doesn't work\" decision older than six months is due for a retest.",
    },
    {
      title: "Drawing is improving faster than judgment",
      body: "Julian pointed to the CAD gains OpenAI reported with GPT-6 and said a design judgment measure barely moved. He thinks how a building feels to live in, from the daylight to the way you approach the house, is still the architect's turf, and that a trained eye could earn a premium as standard buildings get automated. If production gets cheaper, judgment is the part of the fee a firm can defend.",
    },
    {
      title: "AI without context saves nothing",
      body: "If AI saves you an hour and you spend an hour correcting it because the project's requirements live in other tools, you've gained nothing. That's Julian's case for Nemetschek's intelligence layer across Archicad, Allplan, Solibri, dRofus, Bluebeam and third-party tools, and it's a vendor describing its own strategy. The logic holds inside a firm too. An AI tool can only use the project history it can read.",
    },
  ],

  takeaways: [
    "Pick one task you'd like AI help with. Put four dates on your calendar: today, three months, six months, nine months. Run the same task each time and note what changed.",
    "Copy one finished project you're allowed to use into a new folder. Leave the original alone, and check your firm's data policy first.",
    "Point a tool that can read your files, like Claude Code, Claude Cowork or ChatGPT, at the copy. Paste the prompt below and answer its interview in voice mode.",
    "Hand the finished folder to someone who didn't work on the project. If they can explain what was decided, why, and what got built, it passes. Then do the next one.",
  ],

  // Ep 249 only — the copy-paste kit under the takeaways
  kit: {
    prompt:
`I'm an architect. This folder is a copy of one finished project:
drawings, models, emails, meeting notes and the submission set.
I want it organized so a new hire could open it and understand
what we were asked to do, what we decided and why, and what got built.

1. Review everything. Tell me what's here, what's missing and
   what's hard to follow.
2. Propose a folder structure and file names. Don't move anything
   until I approve.
3. Interview me one question at a time to fill the gaps, especially
   the decisions and the reasons behind them.
4. Make me a simple HTML page that lists your assumptions so I can
   mark each one right or wrong.`,
    checklist: [
      "The submission you made",
      "What was built in the end",
      "The building program",
      "The decisions and why, including the owner's Saturday-night email and the meeting where you talked it through",
      "A plain-text summary an AI tool can read (Julian keeps his own notes as Markdown files in Obsidian)",
      "File names and labels a stranger could follow",
    ],
    passLine: "“If you bring somebody new into the firm, they could look at that project folder and make sense of it. That's maybe the bar to pass.”",
    passAttr: "Julian Geiger",
  },

  insights: [
    { title: "Level two, not level five",      body: "AI does the directional design while you guide it, and you're still responsible for what gets built." },
    { title: "Process before technology",      body: "Julian sees AEC's biggest problems as process, collaboration and information problems. The appetite for AI was never what was missing." },
    { title: "Hours become seconds",           body: "The gap between the building in your head and the model on screen is hours today. Julian wants it down to seconds, so you can afford to test far more ideas." },
    { title: "Nobody reads release notes",     body: "When a vendor swaps the model in the back end, yesterday's failure may work today. Telling you that without nagging is its own design problem." },
    { title: "Leading agents is leading people", body: "Julian's advice is to be very specific about what you want and to give good feedback. He thinks it's close to a leadership skill." },
  ],

  bottomLine:
    "Julian isn't an architect, and he said so at the start. His advice still landed on two things a firm can do this month. Use the tools yourself and keep using them as they change. Get your project history into a state a new hire could follow. I pushed back that architects are good at cutting corners, and we ended up somewhere practical: copy the folder, let the AI interview you, and correct its assumptions as you go. Neither step needs a budget or a vendor decision.",

  closingQuote: "Once you see it, can't unsee it.",
};
