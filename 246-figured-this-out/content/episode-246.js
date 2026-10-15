window.TRXL_EPISODE = {
  number: 246,
  date: "October 2026",
  title: "Someone Already Figured This Out",
  titleEm: "Figured",
  subtitle:
    "What a firm's project history is worth, and why so little of it gets used again. Thirteen voices on the pile, the why, and where to start.",

  youtube: "https://youtu.be/dsPNXMeNv5k",

  access:
    "Every edition of this series goes out in full to everyone on the list, free accounts included, because the partners paid for it. Sign up free at trxl.co and the rest of the series comes to you.",

  hero: {
    concept:
      "A pile of drawing sheets on the left, a doorway on the right. A small tag marked 'why' lifts off the pile, crosses the floor and walks out the door.",
    elements: [
      "five stacked, slightly rotated sheet outlines with drawing lines and a title block",
      "a floor line and a dashed path across it",
      "a doorway outline with an open leaf and a faint coral glow",
      "a coral pill tag reading 'why' that travels along the path and fades at the door",
      "mono labels: what got done / walks out",
    ],
    cssNotes:
      "ep246-frame, ep246-sky, ep246-row, ep246-pile, ep246-sheet, ep246-door, ep246-trail, ep246-why, ep246-label, ep246-grain; CSS-only on a 12s cycle. [data-motion=\"off\"] parks the tag at the door for the og.png capture.",
  },

  roster: {
    badge: "13 voices · 10 companies · 1 archive",
    line: "The Next AEC Tech Stack · Arc 3: The AEC Data Play · Episode 1 of 3",
    // `avatar` is the hedcut, never the headshot.
    people: [
      { name: "Marty Rozmanith", firm: "Skema", avatar: "assets/hedcuts/marty-rozmanith.webp" },
      { name: "Randall Stevens", firm: "AVAIL", avatar: "assets/hedcuts/randall-stevens.webp" },
      { name: "Aaron Vorwerk", firm: "Egnyte", avatar: "assets/hedcuts/aaron-vorwerk.webp" },
      { name: "Mike Soldan", firm: "Egnyte", avatar: "assets/hedcuts/mike-soldan.webp" },
      { name: "Ross Wagner", firm: "Pirros", avatar: "assets/hedcuts/ross-wagner.webp" },
      { name: "Ariel Cooke-Zamora", firm: "Bimbeats", avatar: "assets/hedcuts/ariel-cooke-zamora.webp" },
      { name: "Matt Wash", firm: "Bimbeats", avatar: "assets/hedcuts/matt-wash.webp" },
      { name: "Dimitrie Stefanescu", firm: "Speckle", avatar: "assets/hedcuts/dimitrie-stefanescu.webp" },
      { name: "Sasha Crotty", firm: "Autodesk", avatar: "assets/hedcuts/sasha-crotty.webp" },
      { name: "Chris Razzell", firm: "dRofus", avatar: "assets/hedcuts/chris-razzell.webp" },
      { name: "Roderick Bates", firm: "Chaos", avatar: "assets/hedcuts/roderick-bates.webp" },
      { name: "Scott Reynolds", firm: "UpCodes", avatar: "assets/hedcuts/scott-reynolds.webp" },
      { name: "Theodoros Galanos", firm: "Generative AI Leader", avatar: "assets/hedcuts/theodoros-galanos.webp" },
    ],
  },

  links: {
    listen: "https://trxl.co/246",
    newsletter: "https://www.trxl.co/leadership-edge-trxl-246/",
  },

  centralArgument:
    "I asked thirteen people what a firm's project history is worth and why so little of it gets used again. Marty Rozmanith pointed to lawyers, whose old cases keep their value for a whole career, and said architects never had a practical way to do the same. Aaron Vorwerk called what most firms have a pile of stuff that's not well understood. Randall Stevens said firms keep a record of what got done and lose why it was decided, and the people who hold the why are the ones closest to retirement. Sasha Crotty said to skip the 15-year data dump and start with one question. Theodoros Galanos said getting your data right is a war you can't win, and that you should change the engine, not clean the exhaust.",

  pullQuote: {
    text: "We have plenty of information about what got done. What we don't have very good information about is why the decisions were made about what got done.",
    attribution: "Randall Stevens, AVAIL",
    cite: { ts: "21:50", who: "Randall Stevens" },
  },

  stats: [
    { value: "27,000", label: "standard details in one library. Thrown on the floor they're worthless, Randall Stevens says. With metadata, you can find the one you need", cite: { ts: "36:51", who: "Randall Stevens" } },
    { value: "90%", label: "of projects, Chris Razzell says, don't have the common data structure, validation and completeness that would make data worth more than the fee", cite: { ts: "48:50", who: "Chris Razzell" } },
    { value: "15 → 5", label: "years of files versus the last five good projects. Sasha Crotty's customers said that's all they need to learn from", cite: { ts: "27:30", who: "Sasha Crotty" } },
  ],

  question:
    "Think back over your last week. How many hours went to redoing something your firm had already done on another job, and how many went to finding the one person who remembers how it got solved?",

  analysis: [
    {
      title: "A pile, not an asset",
      body: "Marty Rozmanith opened with lawyers: their case backlog almost never goes invalid, and a lawyer with 50 years of practice is worth more than one with two. Architects never had a way to reuse their past work. Randall Stevens called the project archive a capital resource, but Aaron Vorwerk was less sure firms have one yet. Mike Soldan said firms have been told for 15 years that their unstructured content is a goldmine, and the problem was that nobody could turn it into something structured enough to use. Small language models can now read 10,000 documents and tag each one. Ariel Cooke-Zamora put the test plainly: if your people can't find it or learn from it, you're sitting on a mountain of books you're not reading.",
      cites: [
        { ts: "1:33", who: "Marty Rozmanith" },
        { ts: "5:12", who: "Aaron Vorwerk" },
        { ts: "7:01", who: "Mike Soldan" },
        { ts: "12:46", who: "Ariel Cooke-Zamora" },
      ],
    },
    {
      title: "The why walks out the door",
      body: "Dimitrie Stefanescu called it an access problem and named Joe, the one who's been on top of every hospital project and is a year from retirement. I added Sally, who retired two years ago and may never talk to the firm again. Randall Stevens said the people in their 50s and 60s hold the knowledge the firm values most and have the least time to write it down. His idea was to talk through why while you annotate, because a post-process rarely gets done. Sasha Crotty added the part nobody keeps: how do you know what bad is if you never capture bad? Theodoros Galanos said you can't clean the exhaust, so change the engine.",
      cites: [
        { ts: "13:48", who: "Dimitrie Stefanescu" },
        { ts: "22:25", who: "Randall Stevens" },
        { ts: "27:30", who: "Sasha Crotty" },
        { ts: "31:54", who: "Theodoros Galanos" },
      ],
    },
    {
      title: "Where to start, and who pays",
      body: "Randall Stevens said the older material decays, so start from today's work and eat your way back into it instead of feeding the whole pile to an AI. Matt Wash showed the small version: a business case for a typical-details tool, and a Friday time sheet that takes 10 minutes instead of an hour. Roderick Bates raised the problem for small firms. Six bathroom renovations isn't a training set. Sasha Crotty said to pick the outcome first and start small. And Chris Razzell split his own answer on who pays for better data between an angel and a devil: if it's in your scope, don't charge extra, and if it's extra, don't do it free.",
      cites: [
        { ts: "28:41", who: "Randall Stevens" },
        { ts: "40:48", who: "Matt Wash" },
        { ts: "59:47", who: "Roderick Bates" },
        { ts: "1:02:38", who: "Sasha Crotty" },
        { ts: "1:09:21", who: "Chris Razzell" },
      ],
    },
  ],

  takeaways: [
    "Pick one outcome that matters to your firm, such as which project types made money or how long a given detail takes to produce.",
    "Take only your last five completed projects and find where the answer lives: model, time sheets, fee file, an email thread, someone's head.",
    "Write down how many places you had to look and how long it took. That number is the baseline for the cost of a pile.",
    "On the next project, have the person doing the redlines say out loud why they made each major call, and keep those notes next to the file.",
  ],

  // One moment from each voice, none of them the lines cited above.
  insightsKicker: "Additional key insights",
  insightsNote: "Thirteen more moments worth your time, one from every voice in the episode. Each card jumps to that point in the tape.",
  insights: [
    {
      title: "Manufacturing remembers",
      body: "Marty Rozmanith says a BMW engine isn't built for one car. The powertrain lives across many models. So why isn't a bathroom or an operating suite designed once and reused on five or ten projects, getting better each time?",
      prompt: "Which room or detail does your firm redraw on every job?",
      cite: { ts: "57:56", who: "Marty Rozmanith" },
    },
    {
      title: "New revenue, not nickels",
      body: "Randall Stevens was most excited by a customer who wasn't squeezing production efficiency. They were using AI to open a new business line. You can only wring so much out of production.",
      prompt: "What could your project data let you sell that you don't sell today?",
      cite: { ts: "47:05", who: "Randall Stevens" },
    },
    {
      title: "Which projects to chase",
      body: "Aaron Vorwerk says a firm's data can show which projects make money, which consultants and clients went well, and where it's bleeding a little without seeing it. Some of that is obvious and some isn't.",
      prompt: "Do you know which of your project types lose money?",
      cite: { ts: "34:28", who: "Aaron Vorwerk" },
    },
    {
      title: "Tag 10,000 documents",
      body: "Mike Soldan says small language models can read thousands of bids and contracts and tag each with what it is, who won and when. The pile starts to behave like a database, and the more you do, the better the models handle it.",
      prompt: "What would you ask 10,000 of your own documents?",
      cite: { ts: "7:54", who: "Mike Soldan" },
    },
    {
      title: "Let people choose",
      body: "Ross Wagner says set guardrails so risky details from the past don't get reused, then let the people on the project choose what to bring forward. Why have IT or a BIM professional decide for them?",
      prompt: "Who picks what your standards library keeps?",
      cite: { ts: "1:14:23", who: "Ross Wagner" },
    },
    {
      title: "Fudged time sheets",
      body: "Ariel Cooke-Zamora says firms that base fees on guesses end up fudging time sheets to hit the count. A firm that looked at what a project that size took last year gets more accurate fees.",
      prompt: "Where did your last fee estimate come from?",
      cite: { ts: "11:18", who: "Ariel Cooke-Zamora" },
    },
    {
      title: "The business case, built by the LLM",
      body: "Matt Wash asked an LLM, with time and billable-rate data, to build a business case for a typical-details tool. It broke down hours by category, ran 25 and 30 percent scenarios, and named alternatives he hadn't asked about.",
      prompt: "What decision at your firm still gets made without your own time data?",
      cite: { ts: "38:35", who: "Matt Wash" },
    },
    {
      title: "The 21st hospital",
      body: "Dimitrie Stefanescu asks how you convince a client you'll build their 21st hospital better than the previous 20 if you don't have the data on how those 20 were built and how they performed.",
      prompt: "Could you show a client how your last ten similar projects performed?",
      cite: { ts: "1:23:50", who: "Dimitrie Stefanescu" },
    },
    {
      title: "Catch the one that stands out",
      body: "Sasha Crotty's firm of 2030 can look at 100 of the same thing, flag the one that stands out, and ask whether it was on purpose, or an accident that will raise costs for the client.",
      prompt: "What outlier on your last project did nobody question?",
      cite: { ts: "1:26:12", who: "Sasha Crotty" },
    },
    {
      title: "A democratized intelligence layer",
      body: "Chris Razzell says a knowledge base sounds like the old library in a corner of the studio. A more modern phrase: a democratized organizational intelligence layer, readily accessible to everyone and built at the level of the organization.",
      prompt: "Can your newest hire get to what your firm already knows?",
      cite: { ts: "51:04", who: "Chris Razzell" },
    },
    {
      title: "Big firms train on their archives",
      body: "Roderick Bates says large firms are starting to train internal AI on their own project repositories, for model creation and visualization. It will be an advantage, and it will be hard on smaller firms.",
      prompt: "What is your firm's equivalent of a repository worth training on?",
      cite: { ts: "59:47", who: "Roderick Bates" },
    },
    {
      title: "The infrastructure is the advantage",
      body: "Scott Reynolds compares UpCodes to Google Maps: the data is public, but years of building the infrastructure to digest 60,000 code updates a month is what hides the complexity behind a simple interface.",
      prompt: "What public data does your team re-research every project?",
      cite: { ts: "1:01:02", who: "Scott Reynolds" },
    },
    {
      title: "The final report destroys the trail",
      body: "Theodoros Galanos says every time you send a final report you collapse the comments and revisions that explain how you got there. The client doesn't care. An agent would.",
      prompt: "What did you delete from the last deliverable that a future teammate would want?",
      cite: { ts: "31:54", who: "Theodoros Galanos" },
    },
  ],

  bottomLine:
    "Nobody in the episode argued the archive is worthless, and nobody argued that dumping all of it into an AI is the answer. The disagreements were over where to start and what counts as the valuable part. Randall said start from today's work. Sasha said start from a question. Theodoros said stop trying to clean the exhaust and change the engine. All three are choices a firm can make before it buys anything.",

  closingQuote:
    "Instead, you should be saying, ‘I need to change that engine.’",
  closingQuoteAttribution: "Theodoros Galanos",
  closingQuoteCite: { ts: "31:54", who: "Theodoros Galanos" },
};
