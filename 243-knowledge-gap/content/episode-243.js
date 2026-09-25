window.TRXL_EPISODE = {
  number: 243,
  date: "October 2026",
  title: "BIM Didn't Solve the Knowledge Gap",
  subtitle: "A panel on getting hospital knowledge out of a few senior heads and into room data the whole firm can reuse.",

  // Hero visual concept
  hero: {
    concept: "A plan grid of 150 hospital rooms. One room flashes (an equipment change) and a ripple runs through every room in the grid; as it passes, 90% of the rooms settle solid (already known, templated) and the last 10% stay as dashed outlines, the part still left to design.",
    elements: ["15×10 grid of room cells behind the title", "origin cell flash", "ripple fill timed by distance from the origin", "15 cells that stay dashed outlines", "ambient radial bloom"],
    cssNotes: "ep243-plan / .ep243-bloom / .ep243-grid / .ep243-room (.is-open for the 10%); cells built by a small inline script, --d custom property drives animation-delay from distance to the origin cell",
  },

  guests: [
    { name: "Espy Harper",   role: "Innovation Leader & Associate Principal", firm: "LS3P",   portrait: "assets/espy-harper.png" },
    { name: "David Spehar",  role: "Regional Sales Manager, Americas",       firm: "dRofus", portrait: "assets/david-spehar.png" },
    { name: "Anthony Hauck", role: "Co-founder & CPO",                      firm: "Hypar",  portrait: "assets/anthony-hauck.png" },
  ],
  guestLine: "LS3P · dRofus · Hypar",

  youtube: "https://youtu.be/pjR1RULUk5s",

  links: {
    listen: "https://trxl.co/243",
    newsletter: "https://www.trxl.co/leadership-edge-trxl-243/",
  },

  centralArgument:
    "Hospitals force architects to hold the macro and the micro at once, which floor the OR goes on in the same week someone finds out a med-dispensing drawer needs more than three feet to open. Most of that knowledge lives in thirty Excel files and the head of one senior planner who just knows. Espy Harper and David Spehar both put the reusable share of healthcare room data at 80 to 90 percent once standards live in a structured database, which leaves the time for design and for the operational questions clients care about. Anthony Hauck's point is that none of this happens unless someone treats the firm as an institution that keeps its knowledge on purpose.",

  pullQuote: {
    text: "Please don't wait until you're three years from when you want to retire to start thinking of your firm as an institution that has institutional knowledge.",
    attribution: "Anthony Hauck, co-founder and CPO, Hypar",
    cite: { ts: "1:10:10", who: "Anthony Hauck" },
  },

  stats: [
    { value: "90%",    label: "of healthcare room data Espy and David say is already predefined and templated", cite: { ts: "14:30", who: "David Spehar" } },
    { value: "150",    label: "rooms one equipment swap in dRofus updates, flagging every conflict in the model", cite: { ts: "34:00", who: "David Spehar" } },
    { value: "10,000", label: "hours to fix in construction what takes one hour to fix in the meeting", cite: { ts: "41:20", who: "Anthony Hauck" } },
  ],

  question:
    "If your best healthcare planner walked out tomorrow, how many projects would restart from zero, and who in your firm is <em>paid</em> to make sure that doesn't happen?",

  analysis: [
    {
      title: "“It's in the model” is not an answer",
      body: "David described the traditional stack without dressing it up: about thirty Excel files, a couple of Revit models, SketchUp, a roll of trace, and someone with thirty years of planning experience who knows where things won't fit. His harder claim is that BIM widened the gap, because the people with the knowledge avoided the tools and the people fluent in the tools didn't have the knowledge. A data-rich model is a poor substitute for structured requirements you can query, template, and hand to the next project.",
    },
    {
      title: "Ninety percent already known",
      body: "Asked how much room information carries from job to job, David said 80 to 90 percent and Espy went as high as 90. The room is still the room. That frees time for the operational conversation, and Anthony described when it starts: department heads nod through plans and elevations, then see a room in 3D and ask whether that thing is really going to be there. Planning with gross square footage built into live department blocks also ties geometry directly to cost.",
    },
    {
      title: "Trash cans, change logs, and two kinds of owners",
      body: "A nurse keeps bumping into a trash can and brings it up in schematic design. Without a place to capture it, you either lose the meeting or lose her trust. Espy's answer is to say it's documented and point back to it three months later, which is why she calls the change log one of the most underrated features. On making this normal, David put the mandate on building owners, the way owners once mandated BIM. Anthony put it on the owners of design firms.",
    },
  ],

  takeaways: [
    "Pick one room type your firm has designed at least ten times, and put the requirements that matter in one shared place.",
    "Assign that template an owner by name, not “whoever remembers.”",
    "Start the next project from the template and only debate the differences.",
    "Log every client request when it's made, even the trash can, so you can point back to it later.",
  ],

  insights: [
    { title: "Thirty spreadsheets and one planner", body: "Without a structured database, the real system is one senior person who just knows.", cite: { ts: "8:00", who: "David Spehar" } },
    { title: "BIM widened the divide",             body: "Experts avoided the new tools, and the people fluent in them lacked the expertise.", cite: { ts: "9:20", who: "David Spehar" } },
    { title: "Show the room in 3D",               body: "Clients nod at plans, then see the room and start the operational conversation.", cite: { ts: "17:40", who: "Anthony Hauck" } },
    { title: "Documented, not just heard",        body: "Capturing a small request early builds the trust that keeps the next meeting on track.", cite: { ts: "37:50", who: "Espy Harper" } },
    { title: "One change, every room",            body: "Swap one piece of equipment in the database and every room that uses it gets flagged.", cite: { ts: "34:10", who: "David Spehar" } },
  ],

  bottomLine:
    "Data-driven healthcare design has less to do with a better model than with refusing to lose what your people already know. Espy and David put a number on the reusable layer. Anthony put a deadline on when firm leadership has to care, and David put a second one on owners who still hand consultants a PDF and hope for consistency. None of it takes away the bespoke part of design. In Espy's words, data opens your eyes to things you could not see before.",

  closingQuote:
    "The blank page is a choice, and it is usually an expensive one.",
};
