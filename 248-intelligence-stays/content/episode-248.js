window.TRXL_EPISODE = {
  number: 248,
  date: "October 2026",
  title: "The Intelligence Stays",
  titleEm: "Intelligence",
  subtitle:
    "Who owns your data once it lives in someone else's platform, what it costs to leave, and what AI-ready asks of a firm. Sixteen voices on the series finale.",

  youtube: "https://youtu.be/ticEkh2fMFo",

  access:
    "Every edition of this series goes out in full to everyone on the list, free accounts included, because the partners paid for it. Sign up free at trxl.co and future editions come to you.",

  hero: {
    concept:
      "The files leave through the door and the intelligence stays. Three file chips cross the floor from a platform (a turning gear above a small graph of linked records) to an open door with light spilling out. The gear and the graph stay where they are.",
    elements: [
      "a platform box holding a dashed gear that turns slowly and a three-node graph joined by a line",
      "an open door with a skewed panel and a coral glow",
      "three coral file chips that leave the platform on a staggered 12s cycle, cross the floor and fade at the door",
      "mono labels: the intelligence stays / out the door",
    ],
    cssNotes:
      "ep248-frame, ep248-sky, ep248-row, ep248-floor, ep248-platform, ep248-graph, ep248-gear, ep248-door, ep248-ajar, ep248-file, ep248-label, ep248-grain; CSS-only on a 12s cycle. [data-motion=\"off\"] parks the three files mid-floor, stops the gear and hides the labels for the og.png capture.",
  },

  roster: {
    badge: "16 voices · 13 companies · 1 question",
    line: "The Next AEC Tech Stack · Arc 3: The AEC Data Play · Episode 3 of 3",
    // `avatar` is the hedcut, never the headshot.
    people: [
      { name: "Randall Stevens", firm: "AVAIL", avatar: "assets/hedcuts/randall-stevens.webp" },
      { name: "Sasha Crotty", firm: "Autodesk", avatar: "assets/hedcuts/sasha-crotty.webp" },
      { name: "Marty Rozmanith", firm: "Skema", avatar: "assets/hedcuts/marty-rozmanith.webp" },
      { name: "Andy Rahden", firm: "Bentley Systems", avatar: "assets/hedcuts/andy-rahden.webp" },
      { name: "Scott Reynolds", firm: "UpCodes", avatar: "assets/hedcuts/scott-reynolds.webp" },
      { name: "Chris Razzell", firm: "dRofus", avatar: "assets/hedcuts/chris-razzell.webp" },
      { name: "Ross Wagner", firm: "Pirros", avatar: "assets/hedcuts/ross-wagner.webp" },
      { name: "Aaron Vorwerk", firm: "Egnyte", avatar: "assets/hedcuts/aaron-vorwerk.webp" },
      { name: "Mike Soldan", firm: "Egnyte", avatar: "assets/hedcuts/mike-soldan.webp" },
      { name: "Dimitrie Stefanescu", firm: "Speckle", avatar: "assets/hedcuts/dimitrie-stefanescu.webp" },
      { name: "Matt Wash", firm: "Bimbeats", avatar: "assets/hedcuts/matt-wash.webp" },
      { name: "Ariel Cooke-Zamora", firm: "Bimbeats", avatar: "assets/hedcuts/ariel-cooke-zamora.webp" },
      { name: "Jesper Wallgren", firm: "Finch", avatar: "assets/hedcuts/jesper-wallgren.webp" },
      { name: "Holger Kreienbrink", firm: "Graphisoft", avatar: "assets/hedcuts/holger-kreienbrink.webp" },
      { name: "Clifton Harness", firm: "TestFit", avatar: "assets/hedcuts/clifton-harness.webp" },
      { name: "Campbell Yule", firm: "AEC Tech Analyst", avatar: "assets/hedcuts/campbell-yule.webp" },
    ],
  },

  links: {
    listen: "https://trxl.co/248",
    newsletter: "https://www.trxl.co/leadership-edge-trxl-248/",
  },

  centralArgument:
    "I put one question to sixteen people: whose data is it once it lives in someone else's platform? The vendors gave nearly the same first answer, that the customer owns it. They parted ways on what a platform adds on top. Randall Stevens called an AI-generated tag an open question. Sasha Crotty said what's hard to pull out is the relationships, because that's the system. Aaron Vorwerk said a firm that leaves Egnyte loses the machinery, not the work. Andy Rahden said that if you built the agent and you house the data, there's only one direction to point. Matt Wash showed what usage data told one firm about 90 AutoCAD engineers. Campbell Yule and Clifton Harness said the record keeps the output and loses the intent.",

  pullQuote: {
    text: "The BIM model is the final result of the intent, but there's no capture of what the intent was.",
    attribution: "Campbell Yule",
    cite: { ts: "1:30:18", who: "Campbell Yule" },
  },

  stats: [
    { value: "1,200", label: "plumbing sheets reached the owner at handover after design and construction fell out. It took staff a couple of years to type the information into the facility's systems, Aaron Vorwerk says", cite: { ts: "48:29", who: "Aaron Vorwerk" } },
    { value: "$90K", label: "a year on token-based AutoCAD for 90 engineers who opened drawings for five to 15 minutes at a time. Concurrent BricsCAD licenses cut it to $15,000, Matt Wash says", cite: { ts: "1:24:28", who: "Matt Wash" } },
    { value: "59%", label: "of AEC firms hit by a cyber attack in the last two years, Aaron Vorwerk said, citing a Dodge study from memory", cite: { ts: "46:25", who: "Aaron Vorwerk" } },
  ],

  question:
    "If you left your largest software vendor next year, could you write down what you'd keep, what you'd have to rebuild, and what it would cost to get it out?",

  analysis: [
    {
      title: "What you own, what you rent, and what walks out",
      body: "Every vendor started in the same place: the customer owns the data. Randall Stevens said AVAIL is an index and doesn't take possession of a firm's content, and called a tag generated by AI an open question. Sasha Crotty said what's hard to pull out is the relationships, because that's the system. Chris Razzell said on a shared project the data belongs to the building owner, and that dRofus doesn't train LLMs on it. Aaron Vorwerk said leaving Egnyte costs you the machinery, not your work. Campbell Yule said the cloud lock-in now has nothing to do with file formats.",
      cites: [
        { ts: "2:24", who: "Randall Stevens" },
        { ts: "10:02", who: "Sasha Crotty" },
        { ts: "24:12", who: "Chris Razzell" },
        { ts: "31:38", who: "Aaron Vorwerk" },
        { ts: "34:45", who: "Campbell Yule" },
      ],
    },
    {
      title: "Who pays when it goes wrong",
      body: "Andy Rahden said a record of who changed which parameter, and when, works like an insurance policy, and that if you built the agent and you house the data, there's only one direction to point. Mike Soldan said the perfect folder structure cost firms insane hours and that classifying each piece of content matters more now. Aaron Vorwerk gave the security math, with his Dodge figure from memory, and then the owner's side: 1,200 plumbing sheets at handover and years of staff typing them back in.",
      cites: [
        { ts: "39:54", who: "Andy Rahden" },
        { ts: "43:07", who: "Mike Soldan" },
        { ts: "46:25", who: "Aaron Vorwerk" },
        { ts: "48:29", who: "Aaron Vorwerk" },
      ],
    },
    {
      title: "AI-ready, marketing and otherwise",
      body: "Andy Rahden's test: if a partner can't show a complete record of every model version, every change and every human approval, AI-ready is a marketing line. Chris Razzell added safe, lawful and reproducible. Ariel Cooke-Zamora described feeding a crash's timestamp, machine metrics and journal log to an LLM so IT doesn't have to guess. Matt Wash showed where usage data pays off, and Scott Reynolds said to run any tool against your historical projects and see what it catches.",
      cites: [
        { ts: "52:10", who: "Andy Rahden" },
        { ts: "59:05", who: "Chris Razzell" },
        { ts: "1:19:30", who: "Ariel Cooke-Zamora" },
        { ts: "1:24:28", who: "Matt Wash" },
        { ts: "1:27:02", who: "Scott Reynolds" },
      ],
    },
  ],

  takeaways: [
    "Read your biggest platform contract with five questions: who owns your data and work product, what you can export and what it costs beyond the included amount, how much notice you get before pricing changes, whether the vendor can train AI on your data and whether that is opt-in, and what happens to tags and relationships when you leave.",
    "Run an exit drill on one finished project. Export everything you can into a folder you control, time it, and list what didn't come across: comments, history, tags, links between records.",
    "Ask a vendor for Andy Rahden's test: a complete historical record of every model version, every change and every human approval. If they can't show it, treat AI-ready as marketing.",
    "Compare the licenses you pay for with how many people have the software open and for how long, starting with your three most expensive tools.",
  ],

  // One moment from each voice, none of them the lines cited above.
  insightsKicker: "Additional key insights",
  insightsNote: "Sixteen more moments worth your time, one from every voice in the episode. Each card jumps to that point in the tape.",
  insights: [
    {
      title: "Play, and find out what it costs",
      body: "Randall Stevens says play with the new tools as much as you can stomach, and go in knowing a reckoning is coming on token costs. Nobody knows yet whether the value created is more than the cost.",
      prompt: "Do you know what your team's AI experiments cost last quarter?",
      cite: { ts: "1:36:57", who: "Randall Stevens" },
    },
    {
      title: "Know where it is and how it connects",
      body: "Sasha Crotty says AI can change formats for you in a couple of days. What matters is that you know where your data is and how it's connected between different pieces.",
      prompt: "Could you draw the connections between your project systems?",
      cite: { ts: "15:18", who: "Sasha Crotty" },
    },
    {
      title: "Think about it before you're lined up",
      body: "Marty Rozmanith says people aren't aware of the future scenario they're being lined up for, and that the time to think about it is right now.",
      prompt: "Which platform terms have you not reread since you signed?",
      cite: { ts: "19:04", who: "Marty Rozmanith" },
    },
    {
      title: "Document what lives in heads",
      body: "Andy Rahden says to start documenting institutional knowledge: standards, precedents and judgment calls. AI can't amplify what's still locked in people's file cabinets or heads.",
      prompt: "What would leave with your next retirement?",
      cite: { ts: "1:33:56", who: "Andy Rahden" },
    },
    {
      title: "Rent the intelligence, keep the knowledge",
      body: "Scott Reynolds says what you rent from UpCodes is the checking layers and code data. What stays yours is your decisions, your data and your projects.",
      prompt: "Which of your firm's decisions would a vendor's system never see?",
      cite: { ts: "22:44", who: "Scott Reynolds" },
    },
    {
      title: "Be AI savvy, not an expert",
      body: "Chris Razzell says arm yourself with knowledge. You don't have to be an AI expert, but you do have to know what it can and can't do, and what it can help you with.",
      prompt: "Who on your team can say what AI can't do?",
      cite: { ts: "1:42:57", who: "Chris Razzell" },
    },
    {
      title: "Put someone in charge of change",
      body: "Ross Wagner says to form a committee of forward-thinking people and involve everyone at the firm. The ship is moving, and firms that sit out over internal egos fall behind.",
      prompt: "Who owns how new tools get adopted at your firm?",
      cite: { ts: "1:44:46", who: "Ross Wagner" },
    },
    {
      title: "Your AI should only see what you can",
      body: "Aaron Vorwerk says Egnyte's AI works only on data an individual has access to, and you can whitelist an outside source such as a code site you subscribe to. He wants inline citations so he can click and check.",
      prompt: "Would your AI tool answer a question the asker isn't allowed to see?",
      cite: { ts: "53:59", who: "Aaron Vorwerk" },
    },
    {
      title: "Start now or catch up later",
      body: "Mike Soldan says the longer you wait, the more painful it is to catch up. He points at how much further the people who started with generative AI in 2023 are than those who started in 2025.",
      prompt: "What did the early starters learn that you haven't?",
      cite: { ts: "1:35:08", who: "Mike Soldan" },
    },
    {
      title: "Don't wait for the PDF",
      body: "Dimitrie Stefanescu says AI extracting quantities from PDFs of plans drives him crazy. Before the plan was a PDF it was a model with precise quantities and rich metadata, so go to where the data lives.",
      prompt: "Which of your AI experiments reads a PDF of something that was once a model?",
      cite: { ts: "1:16:00", who: "Dimitrie Stefanescu" },
    },
    {
      title: "Same crash, two fixes",
      body: "Matt Wash describes two crashes from the same week, both RAM. One user had four models open for a Revizto export. The other was on a 90-story tower and needed 64 or 128 GB.",
      prompt: "Does your IT team know why each machine crashed?",
      cite: { ts: "1:22:18", who: "Matt Wash" },
    },
    {
      title: "Measure before you buy",
      body: "Ariel Cooke-Zamora says a firm that understands its bottlenecks can judge new tools instead of chasing the next shiny thing. You go for the tool that targets a workflow costing you time.",
      prompt: "Which workflow costs you the most time, and do you have numbers?",
      cite: { ts: "1:07:28", who: "Ariel Cooke-Zamora" },
    },
    {
      title: "Structuring teaches you something",
      body: "Jesper Wallgren says you can wait for the technology to catch up or structure your data now and benefit sooner. A client told him that choosing representative old drawings taught them what they think good architecture is.",
      prompt: "What would picking your best old projects teach your firm?",
      cite: { ts: "1:12:42", who: "Jesper Wallgren" },
    },
    {
      title: "Let an agent flag what's missing",
      body: "Holger Kreienbrink says a firm shouldn't have to do anything. An agent can tell you your data is okay-ish and suggest what to add, like fire resistance, and you decide.",
      prompt: "Who tells you what your model is missing, and when?",
      cite: { ts: "1:14:09", who: "Holger Kreienbrink" },
    },
    {
      title: "The intent is the missing data",
      body: "Clifton Harness says drawings and sheets are derivatives of what the building was for. The intent needs to be attached to every piece of data for an AI to use it without hallucinating.",
      prompt: "Where does your firm write down why a decision was made?",
      cite: { ts: "1:30:46", who: "Clifton Harness" },
    },
    {
      title: "It will always give an answer",
      body: "Campbell Yule says AI will always try to do something and never says sorry, I can't. With a broader dataset it might answer that the last five similar projects found this option very expensive.",
      prompt: "When did your AI tool last tell you no?",
      cite: { ts: "1:28:34", who: "Campbell Yule" },
    },
  ],

  bottomLine:
    "The vendors agreed on ownership and parted ways on what a platform adds. Randall called the AI-generated layer an open question. Sasha pointed to the relationships, Aaron to the machinery and Campbell to the exit fee. Andy and Chris said the same thing about trust from two angles: you should be able to see who changed what, and a person should sign off before it leaves the building. Clifton and Campbell added what none of the records capture, which is why anyone decided anything.",

  closingQuote:
    "Start thinking about the value you produce and the value of the knowledge of all the work you've done.",
  closingQuoteAttribution: "Aaron Vorwerk",
  closingQuoteCite: { ts: "1:45:48", who: "Aaron Vorwerk" },
};
