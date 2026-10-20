window.TRXL_EPISODE = {
  number: 247,
  date: "October 2026",
  title: "It's on the Server Somewhere",
  titleEm: "Server",
  subtitle:
    "Why a firm can't use its own project data. Fifteen voices on shared meaning, scattered files, and what AI-ready asks of you.",

  youtube: "https://youtu.be/d0jOs39FaQw",

  access:
    "Every edition of this series goes out in full to everyone on the list, free accounts included, because the partners paid for it. Sign up free at trxl.co and the rest of the series comes to you.",

  hero: {
    concept:
      "One project, three names, and a rack of servers. Three small chips (Revit, Deltek, ACC) each hold a different-length name for the same project. A coral 'where?' tag leaves the chips, crosses the floor toward a server rack with blinking lights, backs up, and tries again.",
    elements: [
      "three stacked chips labeled Revit / Deltek / ACC, each with a name bar of a different length",
      "a floor line and a dashed path across it",
      "a server rack outline with five units and out-of-sync LEDs",
      "a coral pill tag reading 'where?' that travels toward the rack, backs up and travels again",
      "mono labels: same project, three names / somewhere",
    ],
    cssNotes:
      "ep247-frame, ep247-sky, ep247-row, ep247-floor, ep247-names, ep247-chip, ep247-trail, ep247-where, ep247-rack, ep247-unit, ep247-label, ep247-grain; CSS-only on a 12s cycle. [data-motion=\"off\"] parks the tag mid-floor, lights the rack and hides the labels for the og.png capture.",
  },

  roster: {
    badge: "15 voices · 11 companies · 1 server",
    line: "The Next AEC Tech Stack · Arc 3: The AEC Data Play · Episode 2 of 3",
    // `avatar` is the hedcut, never the headshot.
    people: [
      { name: "Ariel Cooke-Zamora", firm: "Bimbeats", avatar: "assets/hedcuts/ariel-cooke-zamora.webp" },
      { name: "Matt Wash", firm: "Bimbeats", avatar: "assets/hedcuts/matt-wash.webp" },
      { name: "Randall Stevens", firm: "AVAIL", avatar: "assets/hedcuts/randall-stevens.webp" },
      { name: "Aaron Vorwerk", firm: "Egnyte", avatar: "assets/hedcuts/aaron-vorwerk.webp" },
      { name: "Mike Soldan", firm: "Egnyte", avatar: "assets/hedcuts/mike-soldan.webp" },
      { name: "Ross Wagner", firm: "Pirros", avatar: "assets/hedcuts/ross-wagner.webp" },
      { name: "Sasha Crotty", firm: "Autodesk", avatar: "assets/hedcuts/sasha-crotty.webp" },
      { name: "Andy Rahden", firm: "Bentley Systems", avatar: "assets/hedcuts/andy-rahden.webp" },
      { name: "Dimitrie Stefanescu", firm: "Speckle", avatar: "assets/hedcuts/dimitrie-stefanescu.webp" },
      { name: "Chris Razzell", firm: "dRofus", avatar: "assets/hedcuts/chris-razzell.webp" },
      { name: "Marty Rozmanith", firm: "Skema", avatar: "assets/hedcuts/marty-rozmanith.webp" },
      { name: "Jesper Wallgren", firm: "Finch", avatar: "assets/hedcuts/jesper-wallgren.webp" },
      { name: "Scott Reynolds", firm: "UpCodes", avatar: "assets/hedcuts/scott-reynolds.webp" },
      { name: "Campbell Yule", firm: "AEC Tech Analyst", avatar: "assets/hedcuts/campbell-yule.webp" },
      { name: "Theodoros Galanos", firm: "Generative AI Leader", avatar: "assets/hedcuts/theodoros-galanos.webp" },
    ],
  },

  links: {
    listen: "https://trxl.co/247",
    newsletter: "https://www.trxl.co/leadership-edge-trxl-247/",
  },

  centralArgument:
    "I asked fifteen people why a firm can't use its own project data. Two reasons kept coming up: the data means different things to different systems and different people, and it's scattered across far more places than anyone planned for. Ariel Cooke-Zamora wrote a data dictionary so an LLM would stop misreading Revit warnings. Marty Rozmanith said your data is a cluttered garage and the AI doesn't care. Aaron Vorwerk heard from customers that up to 80% of a project's data never sits in the delivery tools. Scott Reynolds said the real gap is the decision nobody wrote down. Mike Soldan said governance has to come before the AI pipeline, and one customer's request for a nine-digit number found about ten Social Security numbers in two seconds.",

  pullQuote: {
    text: "It doesn't have to be perfect. It just needs to be written down.",
    attribution: "Scott Reynolds, UpCodes",
    cite: { ts: "1:17:24", who: "Scott Reynolds" },
  },

  stats: [
    { value: "80%", label: "of a project's data doesn't sit in the delivery tools, customers told Aaron Vorwerk. That's where the reasons for decisions live", cite: { ts: "8:33", who: "Aaron Vorwerk" } },
    { value: "180", label: "applications at one firm, a customer reminded Randall Stevens when he said to go to yet another web page for analytics", cite: { ts: "4:16", who: "Randall Stevens" } },
    { value: "10", label: "Social Security numbers found in two seconds when a customer that hadn't classified its data asked an AI tool for a nine-digit number, Mike Soldan says", cite: { ts: "1:23:17", who: "Mike Soldan" } },
  ],

  question:
    "If a colleague asked your firm's AI tool for something they shouldn't see, such as compensation figures or a nine-digit number, who would find out what came back, and who owns fixing it?",

  analysis: [
    {
      title: "Structure first, or start with the mess",
      body: "Ariel Cooke-Zamora made the case for a data dictionary after an LLM read the warnings already in a Revit model as warnings a user had just created. I added a caveat: models keep improving, so plan to prune what you wrote. Aaron Vorwerk said Egnyte's own testing showed 77% faster responses, 94% more accuracy and 97% fewer tokens once files were classified first. Marty Rozmanith said the AI doesn't care and your data is a cluttered garage. Dimitrie Stefanescu said an agent can now whiz through inconsistent naming. Sasha Crotty asked how confident you are in the mapping, and said to define the standard for projects going forward.",
      cites: [
        { ts: "1:27", who: "Ariel Cooke-Zamora" },
        { ts: "13:43", who: "Aaron Vorwerk" },
        { ts: "34:27", who: "Marty Rozmanith" },
        { ts: "22:29", who: "Dimitrie Stefanescu" },
        { ts: "29:13", who: "Sasha Crotty" },
      ],
    },
    {
      title: "The why lives outside the tools",
      body: "Aaron Vorwerk said the reasons for a change sit in emails, Slack threads, Teams chats and whiteboards, the places where things go to die. Randall Stevens described a customer with 180 applications and a project name that can differ across Revit, Deltek and Autodesk Construction Cloud. Ross Wagner said every firm has one person who knows everything, and the work is deciding which of their skills to capture. Then Mike Soldan got to governance. The pipeline should have no access to anything you couldn't find in the folder tree, and once content is indexed, what was buried safely isn't.",
      cites: [
        { ts: "8:33", who: "Aaron Vorwerk" },
        { ts: "6:05", who: "Randall Stevens" },
        { ts: "15:28", who: "Ross Wagner" },
        { ts: "1:04:39", who: "Randall Stevens" },
        { ts: "1:23:17", who: "Mike Soldan" },
      ],
    },
    {
      title: "Where the data should live",
      body: "Chris Razzell pulled apart documents, files and data, called a common data environment a misnomer, and said most project data belongs in a federated layer, not the model. Sasha Crotty described Autodesk's version: think about the information first, with the model as one derived representation. Campbell Yule said a digital twin needs spaces, volumes and location more than wall construction. Theodoros Galanos said RAG works in only two situations, and that an agent paired with a simple SQL database gives the same answer every time.",
      cites: [
        { ts: "45:25", who: "Chris Razzell" },
        { ts: "53:34", who: "Sasha Crotty" },
        { ts: "57:35", who: "Campbell Yule" },
        { ts: "1:26:52", who: "Theodoros Galanos" },
      ],
    },
  ],

  takeaways: [
    "Write down the one thing you can't easily answer today because it takes looking in several places, then list every place the answer would have to come from.",
    "Pick the five fields people argue about most, project name and number first, and write one sentence each on what it means and which system wins.",
    "Put a review date on that page. A data dictionary needs pruning as the models improve.",
    "Ask IT to run Mike's check as an ordinary staff account, not an admin: ask your AI tool for something it shouldn't return, like salary figures or a nine-digit number.",
  ],

  // One moment from each voice, none of them the lines cited above.
  insightsKicker: "Additional key insights",
  insightsNote: "Fifteen more moments worth your time, one from every voice in the episode. Each card jumps to that point in the tape.",
  insights: [
    {
      title: "Start before you know how",
      body: "Ariel Cooke-Zamora cautions firms that won't start until they know exactly how to structure their data. The answer reveals itself as you work and ask your own data questions.",
      prompt: "What are you waiting to be sure of before you start?",
      cite: { ts: "3:24", who: "Ariel Cooke-Zamora" },
    },
    {
      title: "A back catalog is your IP",
      body: "Marty Rozmanith says a reusable back catalog of past work is yours, and the time to think about who can train on it, and what it costs you to ask questions of it, is now.",
      prompt: "Do your platform terms say who can train on your project data?",
      cite: { ts: "32:08", who: "Marty Rozmanith" },
    },
    {
      title: "Tag it as it arrives",
      body: "Aaron Vorwerk says drawings, specs, RFIs, submittals and photos can be classified as they enter the project record, so you find them by project and document type instead of guessing a file name.",
      prompt: "Could you find last year's RFIs without knowing a file name?",
      cite: { ts: "1:18:49", who: "Aaron Vorwerk" },
    },
    {
      title: "Put the project in the subject line",
      body: "Matt Wash adds the project name or number to every email subject and names instant Teams meetings after the topic. At the end of the week the LLM can sort his time without guessing.",
      prompt: "What does your email subject line tell a machine?",
      cite: { ts: "1:13:48", who: "Matt Wash" },
    },
    {
      title: "Never too late on a project",
      body: "Chris Razzell used to think dRofus belonged only in early design. A customer already in construction told him they felt the pain every day without it. His revised view: it's never too late.",
      prompt: "Which live project would gain from a data layer this month?",
      cite: { ts: "1:36:33", who: "Chris Razzell" },
    },
    {
      title: "Similar language, not the same",
      body: "Andy Rahden says disciplines need enough shared meaning for data to move across them. Force one monolithic standard on everyone and you get workarounds, and data that stops following the baseline.",
      prompt: "Where did a standard you mandated produce workarounds?",
      cite: { ts: "21:21", who: "Andy Rahden" },
    },
    {
      title: "The project is the entity",
      body: "Mike Soldan says the most valuable graph for an AEC firm is the project graph: user behavior, where files live, which files were opened together. With it, answers get relevant and accurate.",
      prompt: "What ties your project's files together besides the folder?",
      cite: { ts: "19:42", who: "Mike Soldan" },
    },
    {
      title: "Start with the last five hospitals",
      body: "Randall Stevens says don't go back to the twenty-fifth one. The last five give you a corpus, and he bets returns fall off quickly. Time probably reaches back further than the number of projects you need.",
      prompt: "How many projects of one type does your firm need to learn from?",
      cite: { ts: "1:33:18", who: "Randall Stevens" },
    },
    {
      title: "Design linked to numbers",
      body: "As an architect, Dimitrie Stefanescu was hobbled by design that wasn't linked to numbers: a client asks whether the scheme costs more and you lose half an hour proving it.",
      prompt: "How long does a cost question take in your client meetings?",
      cite: { ts: "1:00:20", who: "Dimitrie Stefanescu" },
    },
    {
      title: "Make the right way the fast way",
      body: "Sasha Crotty says validation has to happen while the person is taking the action. People do things because it's fast, so using the correct standard has to be faster.",
      prompt: "Is following your standard faster or slower than skipping it?",
      cite: { ts: "1:12:05", who: "Sasha Crotty" },
    },
    {
      title: "Read the plan without labels",
      body: "Jesper Wallgren was sure he could predict a room's type from sizes and relationships alone. His AI team wanted more data. A graph model did it with very high certainty.",
      prompt: "What can your most experienced person infer that your software can't?",
      cite: { ts: "41:20", who: "Jesper Wallgren" },
    },
    {
      title: "Another format, another translation",
      body: "Campbell Yule says a fast new format like Fragments can work well in the browser, but getting back to IFC is still a translation process.",
      prompt: "How many format translations sit between your model and your owner's system?",
      cite: { ts: "43:13", who: "Campbell Yule" },
    },
    {
      title: "Make the standard executable",
      body: "Theodoros Galanos says standards can become predicates, like a spacing that has to be larger than five. Then an agent checks them the same way every time.",
      prompt: "Which requirement in your standards could be a yes or no check?",
      cite: { ts: "1:31:23", who: "Theodoros Galanos" },
    },
    {
      title: "Look for the systemic problem",
      body: "Ross Wagner says firms should stop only asking what went wrong on one product and look for the deeper systemic problem, with junior staff in the conversation.",
      prompt: "Who below partner level gets heard in your project reviews?",
      cite: { ts: "1:41:46", who: "Ross Wagner" },
    },
    {
      title: "Test it on your own work",
      body: "Scott Reynolds says stop taking people's word for what works. Compare your past results with what AI produces on the same task. It might be a no today and a yes in three months.",
      prompt: "What did you last test an AI tool against?",
      cite: { ts: "1:42:59", who: "Scott Reynolds" },
    },
  ],

  bottomLine:
    "Nobody argued that scattered data is fine. They disagreed on the order of operations. Ariel and Sasha said define what the data means now and keep refining it. Marty and Dimitrie said an agent can cope with the clutter, so start. Scott said neither helps if the decision was never written down. Mike's warning applies whichever camp you join: before an AI reads anything, someone should have decided it was allowed to.",

  closingQuote:
    "It's figuring out what's the most pressing problem that you have that you cannot easily answer.",
  closingQuoteAttribution: "Sasha Crotty",
  closingQuoteCite: { ts: "1:44:13", who: "Sasha Crotty" },
};
