window.TRXL_EPISODE = {
  number: 244,
  date: "October 2026",
  title: "Who Signs When the AI Is Wrong?",
  titleEm: "Wrong?",
  subtitle:
    "The stamp hasn't changed. Everything around it has. What happens to checking when AI output keeps getting better, and who learns the job when the work that taught it goes away?",

  youtube: "https://youtu.be/aI89npnKpk4",

  access:
    "Every edition of this series goes out in full to everyone on the list, free accounts included, because the partners paid for it. Sign up free at trxl.co and Arc 3 comes to you.",

  hero: {
    concept:
      "A row of six drawing sheets. Each gets a check mark, and each check is a little fainter than the one before. Then a stamp lands at the end of the row anyway.",
    elements: [
      "six sheet outlines with drawing lines and a title block",
      "a coral check mark on each sheet, strongest on the first and nearly gone by the sixth",
      "a ring stamp that arrives after the last check",
      "mono labels: checked / signed anyway",
    ],
    cssNotes:
      "ep244-cut-frame, ep244-cut-sky, ep244-row, ep244-sheet, ep244-tick, ep244-stamp, ep244-label, ep244-cut-grain; CSS-only on a 12s cycle, each check offset 0.45s with its own opacity (--o). [data-motion=\"off\"] shows every check at final strength plus the stamp for the og.png capture.",
  },

  roster: {
    badge: "15 voices · 10 companies · 1 stamp",
    line: "The Next AEC Tech Stack · Arc 2: Agentic AI · Episode 3 of 3",
    // `avatar` is the hedcut, never the headshot.
    people: [
      { name: "Mike Soldan", firm: "Egnyte", avatar: "assets/hedcuts/mike-soldan.webp" },
      { name: "Roderick Bates", firm: "Chaos", avatar: "assets/hedcuts/roderick-bates.webp" },
      { name: "Randall Stevens", firm: "AVAIL", avatar: "assets/hedcuts/randall-stevens.webp" },
      { name: "Matt Wash", firm: "Bimbeats", avatar: "assets/hedcuts/matt-wash.webp" },
      { name: "Ariel Cooke-Zamora", firm: "Bimbeats", avatar: "assets/hedcuts/ariel-cooke-zamora.webp" },
      { name: "Oliver Goldman", firm: "Autodesk", avatar: "assets/hedcuts/oliver-goldman.webp" },
      { name: "Jesper Wallgren", firm: "Finch", avatar: "assets/hedcuts/jesper-wallgren.webp" },
      { name: "Scott Reynolds", firm: "UpCodes", avatar: "assets/hedcuts/scott-reynolds.webp" },
      { name: "Holger Kreienbrink", firm: "Graphisoft", avatar: "assets/hedcuts/holger-kreienbrink.webp" },
      { name: "Prasanta Bose", firm: "TwinMaster", avatar: "assets/hedcuts/prasanta-bose.webp" },
      { name: "Michael Jansen", firm: "TwinMaster", avatar: "assets/hedcuts/michael-jansen.webp" },
      { name: "Marty Rozmanith", firm: "Skema", avatar: "assets/hedcuts/marty-rozmanith.webp" },
      { name: "Gavin Nicholls", firm: "Architectus", avatar: "assets/hedcuts/gavin-nicholls.webp" },
      { name: "Campbell Yule", firm: "", avatar: "assets/hedcuts/campbell-yule.webp" },
      { name: "Theodoros Galanos", firm: "Generative AI Leader", avatar: "assets/hedcuts/theodoros-galanos.webp" },
    ],
  },

  links: {
    listen: "https://trxl.co/244",
    newsletter: "https://www.trxl.co/leadership-edge-trxl-244/",
  },

  centralArgument:
    "I asked fifteen people what happens when the AI is wrong and who is still on the hook. Almost everyone said the stamp stays with a person today. The risks they described weren't about a model making things up. Graphisoft's Holger Kreienbrink expects people to check AI output once, three times, five times, ten times, and then less and less, until they sign without looking. Theodoros Galanos asked whether anyone who demands 99% from a machine knows their own firm's number. And the work that used to teach judgment, the drafting, is the work being automated. The last turn was the fee: Campbell Yule's arithmetic on hourly billing shows how the productivity gain goes to the client.",

  pullQuote: {
    text: "And then you will sign it without further checking. Is it good? I'm not 100% sure.",
    attribution: "Holger Kreienbrink, Graphisoft",
    cite: { ts: "45:10", who: "Holger Kreienbrink" },
  },

  stats: [
    { value: "1,000", label: "sheets in a project set that an automation run might touch, which Randall Stevens says someone would then have to go look at", cite: { ts: "9:10", who: "Randall Stevens" } },
    { value: "99%", label: "the accuracy people ask of AI, while Theodoros Galanos asks whether anyone knows if their own firm gets there", cite: { ts: "58:20", who: "Theodoros Galanos" } },
    { value: "100 → 70", label: "hours a task takes with AI help, in Campbell Yule's example. At an hourly rate, the 30 hours go to the client", cite: { ts: "2:23:20", who: "Campbell Yule" } },
  ],

  question:
    "If someone asked your firm tomorrow what share of the drawings that leave the building contain an error, could you give a number, and what would it take to find out?",

  analysis: [
    {
      title: "What the stamp covers now",
      body: "Ariel Cooke-Zamora and Matt Wash both said the stamp stays with a person. Matt added that whether a human really looked at each drawing is an older problem than AI, because a digital signature can go across many sheets at once. Randall Stevens took it to the scale of a real set: run an automation across 1,000 sheets and someone has to go look at every piece of it, so you created more work, not less. Mike Soldan said the risk has moved from hallucination to reference content that is five years old. Oliver Goldman said the accountability stays with whoever delivers, whatever tools they used.",
      cites: [
        { ts: "12:40", who: "Matt Wash" },
        { ts: "10:09", who: "Randall Stevens" },
        { ts: "4:10", who: "Mike Soldan" },
        { ts: "17:00", who: "Oliver Goldman" },
      ],
    },
    {
      title: "Checking less and less",
      body: "Holger Kreienbrink said people will check AI output a few times and then check it less and less, and admitted to skipping Perplexity's pages of reasoning. Roderick Bates pointed out the double standard: an intern who repeated a mistake would be packing up their desk, and AI gets a pass. The defenses on offer were specific. Jesper Wallgren described rules that fire every time, against an agentic read of a document that nobody can promise is complete. Matt Wash said an AI check before the human can reduce risk, as long as a clean result isn't treated as proof. Scott Reynolds called UpCodes a second set of eyes, not a replacement for plan review. Theodoros Galanos asked the question underneath: are we 99% ourselves, and do we know?",
      cites: [
        { ts: "44:10", who: "Holger Kreienbrink" },
        { ts: "36:30", who: "Roderick Bates" },
        { ts: "30:07", who: "Jesper Wallgren" },
        { ts: "35:50", who: "Matt Wash" },
        { ts: "54:30", who: "Scott Reynolds" },
        { ts: "58:20", who: "Theodoros Galanos" },
      ],
    },
    {
      title: "Who learns the job, and who gets paid",
      body: "Asked who a firm still hires, Holger Kreienbrink said someone who knows how to check, which means understanding where the water goes and the logic of a building. I said the emerging professional's day probably has to move from drawing details to job sites. Scott Reynolds described showing the rationale and the code sections so juniors build the skill instead of getting an answer. Then the business model: Campbell Yule showed how an hourly rate turns a 100-hour task that now takes 70 into the client's discount, and Marty Rozmanith said the old equation between standard of care and hours is now broken.",
      cites: [
        { ts: "1:01:06", who: "Holger Kreienbrink" },
        { ts: "1:29:20", who: "Scott Reynolds" },
        { ts: "2:23:20", who: "Campbell Yule" },
        { ts: "2:06:26", who: "Marty Rozmanith" },
      ],
    },
  ],

  takeaways: [
    "Pick one recently finished project and count the RFIs, addenda, and change orders that trace back to a drawing error. Sort them by type.",
    "Have a senior reviewer log every miss on a sample of 20 to 50 sheets. If you're testing an AI check, run it on the same sample and compare.",
    "Write down where the human checkpoint sits before the tool goes live, and keep the AI pass ahead of the human review, not in place of it.",
    "Treat a clean AI result as one more check, not as proof that nothing is left to check.",
  ],

  // One moment from each voice, none of them the lines cited above.
  insightsKicker: "Additional key insights",
  insightsNote: "Fifteen more moments worth your time, one from every voice in the episode. Each card jumps to that point in the tape.",
  insights: [
    {
      title: "Pick your checkpoints",
      body: "Mike Soldan says human in the loop isn't disappearing. Some firms let an RFP draft run to the end and have the bid team review it. Others set gates at several levels. Firms decide where they're comfortable with the risk.",
      prompt: "Where are the gates in your most important workflow, and who set them?",
      cite: { ts: "3:00", who: "Mike Soldan" },
    },
    {
      title: "Liability that doesn't expire",
      body: "Roderick Bates passed along what someone said about New York: a design professional's liability for a building apparently never goes away, and it carries on after a renovation, with more parties added.",
      prompt: "How long does your firm keep the records that would defend a decision?",
      cite: { ts: "6:22", who: "Roderick Bates" },
    },
    {
      title: "Use AI to help the checker",
      body: "Randall Stevens would use AI to give the people validating a deliverable better information so they decide faster, rather than expecting a machine to produce a set that someone just stamps.",
      prompt: "Is your AI pilot built to replace a reviewer or to make one faster?",
      cite: { ts: "9:26", who: "Randall Stevens" },
    },
    {
      title: "Insurance for the agent's mistake",
      body: "Ariel Cooke-Zamora saw a Y Combinator company selling insurance for when your AI agent messes up. A new market has already opened around who pays when the agent is wrong.",
      prompt: "Who in your contracts pays when an automated step goes wrong?",
      cite: { ts: "11:40", who: "Ariel Cooke-Zamora" },
    },
    {
      title: "Competence by conversation",
      body: "Matt Wash expects more verbal questioning of competence for licensure, because AI can help produce the reports that used to prove it. Matt's advice to a university: spend more of the grade on a student explaining a problem.",
      prompt: "Could your newest hire explain, out loud, why a detail works?",
      cite: { ts: "1:42:00", who: "Matt Wash" },
    },
    {
      title: "Show it as a proposal",
      body: "Oliver Goldman says Autodesk presents generative results as work in progress, not final: a proposed layout in the editor you can lock, adjust, and rerun, so the user stays in the frame of mind of someone still working.",
      prompt: "Does your tool of choice present an answer, or a draft?",
      cite: { ts: "18:00", who: "Oliver Goldman" },
    },
    {
      title: "A check that fires too often",
      body: "Jesper Wallgren heard of a firm that wrote a document checking a thousand things in a Revit model. So many things went wrong that people stopped listening. Finch keeps its rules narrow so a warning still means something.",
      prompt: "Which of your standing warnings has everyone learned to ignore?",
      cite: { ts: "27:10", who: "Jesper Wallgren" },
    },
    {
      title: "AI brain rot",
      body: "Scott Reynolds worries about people outsourcing critical thinking to AI. Code expertise took decades to accumulate. The information arrives faster now, but applying it right has no replacement.",
      prompt: "What judgment call in your office has moved to a tool without anyone deciding that?",
      cite: { ts: "1:29:20", who: "Scott Reynolds" },
    },
    {
      title: "Do something with your hands",
      body: "Holger Kreienbrink does not expect robotics on construction sites within ten years, and suggested that maybe everyone should become a bricklayer or a carpenter. Do something with your hands.",
      prompt: "What does your team make or build that no model can?",
      cite: { ts: "2:08:40", who: "Holger Kreienbrink" },
    },
    {
      title: "Make the agent show its proof",
      body: "Prasanta Bose wants agents to explain what they did: the tools they used, the assumptions they made, the state they worked from. That makes the output verifiable by a human and gives hooks to improve it.",
      prompt: "Can your AI tool tell you which assumptions it made?",
      cite: { ts: "46:40", who: "Prasanta Bose" },
    },
    {
      title: "What firms ask before they buy",
      body: "Michael Jansen listed what serious firms ask: how to verify results, how to rule out hallucination, who owns the IP, how to reuse firm knowledge, whether the vendor trains on their models, and how to keep a human in control.",
      prompt: "Which of those questions has your firm already answered in writing?",
      cite: { ts: "48:57", who: "Michael Jansen" },
    },
    {
      title: "Revit raised the bar",
      body: "Marty Rozmanith recalls that AutoCAD produced legions of drafters who never needed to know how a building goes together. Revit modeled like a cardboard model and required knowing more. If AI lowers the bar now, maybe it's about time.",
      prompt: "Which skill at your firm is only a software skill?",
      cite: { ts: "1:37:51", who: "Marty Rozmanith" },
    },
    {
      title: "A trail for the hard way",
      body: "Gavin Nicholls had to confront that the static lessons built to show how to do everything manually are now automated by AI. They stay as a trail for anyone who wants to do it the hard way.",
      prompt: "What have you built that a tool now does in two prompts?",
      cite: { ts: "1:45:24", who: "Gavin Nicholls" },
    },
    {
      title: "The rendering precedent",
      body: "Campbell Yule recalls architects handing clients a few renderings as a favor, until every client expected them. Giving away what technology makes easy turns it into the baseline.",
      prompt: "What did you add for free last year that is now expected?",
      cite: { ts: "2:28:10", who: "Campbell Yule" },
    },
    {
      title: "Taking out the in-between",
      body: "Theodoros Galanos hopes AI removes intermediation: the friction in between that exists because someone extracts value from it. That would change how services are commercialized and how clients work with firms.",
      prompt: "Which step in your process exists mainly because it always has?",
      cite: { ts: "2:15:10", who: "Theodoros Galanos" },
    },
  ],

  bottomLine:
    "Almost everyone agreed the stamp stays with a person today. The disagreement was over what it costs to stand behind one now: checking that stays real as the output improves, a number for your own error rate, someone on staff who knows where the water goes, and a fee that doesn't hand the gain away. Most of those are choices a firm makes before any new tool shows up.",

  closingQuote:
    "Somewhere there has to be a person who is going to have a disincentive to do things poorly, and a machine won't. AI doesn't care. It may seem very human, but it does not care.",
  closingQuoteAttribution: "Roderick Bates, Chaos",
  closingQuoteCite: { ts: "1:58:50", who: "Roderick Bates" },
};
