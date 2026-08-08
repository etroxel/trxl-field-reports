/* =========================================================================
   TRXL Episode Content — 235
   Swap these values to re-skin the infographic for any new episode.
   The same schema powers both the web infographic and the slide deck.
   ------------------------------------------------------------------------- */

window.TRXL_EPISODE = {
  number: 235,
  date: "July 2026",
  title: "What 300 People Say When You Finally Ask",   // "Finally" gets gradient
  subtitle: "Marlene Chen and Blair Payson on the office-wide crit they refused to call an AI meeting, a visualization team of three becoming 150, and why the fix for enthusiasm is bumpers rather than brakes.",

  // Hero visual concept (Step 0) — a pinned wall of note cards, a third of them
  // lit coral: the friction list, and the share of it the firm could already solve.
  // Distinct from 224 (descending asteroid), 232 (concentric rings),
  // 233 (dawn horizon), 234 (round-hole grid with one square peg).
  hero: {
    concept: "A dark wall pinned with irregular note cards, each tilted a degree or two off true. They pin up in a scattered cascade, and once the wall fills, roughly a third of them warm to a coral glow — the friction points that already had an answer sitting somewhere in the building. Physical cards, not a Miro board.",
    elements: ["dark wall field", "scattered grid of tilted note cards with pin dots", "coral-lit subset that warms after the cascade", "soft bloom behind the lit cluster"],
    cssNotes: "ep235-wall (field), ep235-card (tilted card + pin), ep235-card.is-solved (coral warm-up, delayed), ep235-bloom (radial glow), --i stagger + per-card --rot/--x/--y jitter set inline",
  },

  // Two guests, two different titles — the computed join reads badly, so state it
  guestLine: "Principals, Olson Kundig",

  guests: [
    {
      name: "Marlene Chen",
      role: "Principal & COO",
      firm: "Olson Kundig",
      portrait: "assets/marlene-chen.png",
    },
    {
      name: "Blair Payson",
      role: "Principal",
      firm: "Olson Kundig",
      portrait: "assets/blair-payson.png",
    },
  ],

  links: {
    listen: "https://trxl.co/235",
    newsletter: "https://www.trxl.co/leadership-edge-trxl-235/",
  },

  centralArgument:
    "Most firms pick an AI tool and then look for somewhere to put it. Olson Kundig ran the sequence backwards. They used a ritual they already had — the Thursday crit — for an office-wide session on friction, and told the organizers not to call it an AI meeting, because a tool conversation produces tool answers from the people already comfortable with tools. Then they split the room by role and kept the owners out. The lists came back on note cards, and a large share of what hurt was already solvable with something the firm owned and had never shared. The technology conversation only got easy once there was an honest list to point it at.",

  pullQuote: {
    text: "Hey, principals, owners, we have to talk now. My job is gone. It's changing, and we need to rethink about how we look at both my role, my focus, and what I can do to adjust things.",
    attribution: "Blair Payson, recounting what his director of visualization told firm leadership",
  },

  stats: [
    { value: "300",  label: "people across Seattle, New York, and Chicago whose friction the crit was designed to surface" },
    { value: "150",  label: "people now producing visualization work that used to route through a team of three" },
    { value: "8%",   label: "of firms have actually implemented AI into practice, per the AIA's 2025 study of 500+ architects" },
  ],

  question:
    "If you ran that crit at your firm tomorrow, how much of the list would already have a solution sitting somewhere in the building — and what does that tell you about where to spend the next six months?",

  analysis: [
    {
      title: "The crit that wasn't about AI",
      body: "Olson Kundig has critiqued projects every Thursday for years, so the format was already trusted. What changed was the subject and the framing: Marlene's instruction to the organizers was not to introduce it as an AI crit, but to ask what people were actually experiencing. Then they split the room by role and experience level, and the range across groups was extraordinary. Business development principals wanted firm knowledge at their fingertips in front of clients. Entry-level architects wanted to stop hunting for things. Managers said meetings, notes, scheduling. Nobody's list looked like anybody else's, and Blair was direct about why they were honest: in a room of your own peers, without the owner sitting there, you say something different.",
    },
    {
      title: "Three people, then 150",
      body: "Greg Rogers, the firm's director of visualization, asked the principals and owners for a meeting and told them his job was going away. Then he built the thing that replaced it — an aggregator for the graphic tools the office already had plus the new ones it could reach, so any team could produce work that used to require his group. A team of three became something closer to 150. Blair's reframe is capacity rather than threat: in a firm of many very small teams, a team of one needs compelling visuals as much as a team of fifteen, and only some teams happen to have a strong graphics person. Neither of them pretended it was painless. It is a real loss of position for people whose value was being the one who could run the machine.",
    },
    {
      title: "Bumpers, not brakes",
      body: "Blair showed the office a genuinely good AI proposal video and said nothing about budget. Within days people were expensing their own licenses and tokens, and the office had an unforeseen surge in expenses. The correction was not a ban. It was a frame around the enthusiasm — share the example, but give people brackets for how to steer it — plus a sanctioned sandbox. Marlene's read on why that matters is the sharpest governance line in the episode: people are hungry to use these tools and worried they are doing it wrong, so they either freeze or they go around you. Underneath it is a philosophy Blair traces to Tom Kundig. The firm has never had an R&D department; everything is applied research, tested where you only have to convince one or two people, then scaled when it earns its way.",
    },
  ],

  takeaways: [
    "Book 90 minutes and ask one question — what part of your week feels like a waste of your time — without putting AI anywhere in the invitation.",
    "Split the room by role and experience level rather than by studio, and keep principals out of the rooms so the lists come back honest.",
    "Capture on physical cards, one friction point each, because nobody edits themselves for a shared screen the way they do for a Miro board.",
    "Sort the pile into already-solved, small fix, and real project — then publish the already-solved stack within a week.",
  ],

  insights: [
    {
      title: "Name the pain, not the tool",
      body: "Framing the session as an AI conversation would have produced tool answers from the people already comfortable with tools, instead of the whole building's real friction.",
    },
    {
      title: "The owner in the room changes the list",
      body: "People name what is broken only among peers at their own level, which makes who is absent a governance decision disguised as a facilitation choice.",
    },
    {
      title: "Most of the list is distribution",
      body: "A large share of the complaints already had a fix sitting somewhere in the building, so the adoption gap is mostly a knowledge transfer gap.",
    },
    {
      title: "Spreading a skill is a force multiplier",
      body: "Moving visualization from three specialists to the whole office did not dilute the specialists — it let every project, including the one-person teams, tell its story.",
    },
    {
      title: "Enthusiasm needs brackets",
      body: "Show the office a beautiful result with no frame around it and you get a credit card surge, which is why the answer is a sandbox rather than a ban.",
    },
  ],

  bottomLine:
    "The through line is sequence. Olson Kundig asked what hurts before asking what to buy, and a large share of the answers turned out to be things the firm already owned and had never shared. That ordering is what made the technology conversation tractable — there was something specific to point it at, rather than a tool looking for a problem. The part that is hardest to copy is not the exercise. It is the restraint: the owners stayed out of the small groups, and the leadership that showed the office an exciting result learned to put a frame around it rather than a ban on it. Plenty of firms will run the friction crit and quietly ruin it by having the principal sit in on every table. You cannot ask people to name what is broken and also be the person they are worried about naming.",

  closingQuote:
    "Ask what hurts before you ask what to buy — and be ready for how much of the answer is already sitting in the building, unshared.",
};
