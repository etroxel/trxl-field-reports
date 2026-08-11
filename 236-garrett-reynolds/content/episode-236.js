/* =========================================================================
   TRXL Episode Content — 236
   Garrett Reynolds, UpCodes — "No One Can Own the Law"
   ------------------------------------------------------------------------- */

window.TRXL_EPISODE = {
  number: 236,
  date: "August 2026",
  title: "No One Can Own the Law",
  titleEm: "Own", // gradient word (default is second-to-last, which lands on "the")
  subtitle: "A decade of lawsuits over the building code, and the bill that would undo every win.",

  // Hero visual concept
  hero: {
    concept: "A page of adopted code — plain ruled lines of statute — with a padlock that keeps trying to close over it and springing back open. The law is public; the lock never quite catches, but it never stops trying either.",
    elements: ["ruled statute lines with § markers", "CSS padlock whose shackle closes and springs open on a loop", "accent bloom behind the locked line"],
    cssNotes: "ep236-page, ep236-lines, ep236-line, ep236-lock, ep236-bloom; lines generated in the page script like Ep 235's grid",
  },

  guest: {
    name: "Garrett Reynolds",
    role: "Co-founder & President",
    firm: "UpCodes",
    portrait: "assets/garrett-reynolds.png",
  },

  links: {
    listen: "https://trxl.co/236",
    newsletter: "https://www.trxl.co/leadership-edge-trxl-236/",
  },

  centralArgument:
    "UpCodes put the adopted building codes online and has been sued more or less continuously ever since — by the International Code Council in 2017, again nine days after it lost, again in 2023, by the Facility Guidelines Institute, by ASTM over four letters already printed in the law. UpCodes has never lost. No court has ever ordered them to take the law down. And none of that ended anything: having failed with judges, the publishers went to Congress with a bill whose name promises public access to the law and whose text would hand them copyright over it.",

  pullQuote: {
    text: "You need to be able to speak the words of the law without a license. You should never have to license the law from a private party.",
    attribution: "Garrett Reynolds, co-founder and president, UpCodes",
  },

  stats: [
    { value: "$10M+", label: "spent defending the right to post the law" },
    { value: "41%",   label: "of UpCodes’ total expenses last year: litigation" },
    { value: "10",    label: "constituent letters that got a congressional office’s attention" },
  ],

  question:
    "If access to adopted codes became restricted tomorrow — licensed per seat, unquotable without permission — how many of your firm’s current workflows, checklists, and internal tools would break?",

  analysis: [
    {
      title: "The case was won. The lawsuits didn’t stop.",
      body: "In 2002 the Fifth Circuit held that a model code entering law enters the public domain. In 2020 the Supreme Court decided Georgia v. Public.Resource.Org, and UpCodes’ judge — who had been waiting on it — ruled three separate ways at once: public domain, then fair use anyway, then merger doctrine even if fair use failed. There is only one way to say the law; UpCodes cannot paraphrase it. Nine days after that win, the ICC filed again on different grounds.",
    },
    {
      title: "The real product was staying solvent",
      body: "Putting codes online and making them searchable is not the hard part. Surviving the response is. Under the American rule, the loser doesn’t pay the winner’s fees, so a well-funded incumbent can sue a startup it expects to lose against and still win by making the defense unaffordable. When UpCodes hired litigators, revenue was $70,000 a year — the firm assumed $70,000 a month. The ICC sought $6 million, from the company and from the brothers personally, and copyright debts survive bankruptcy.",
    },
    {
      title: "When you lose in court, you go to Congress",
      body: "The Pro Codes Act — full name, Protecting and Enhancing Public Access to the Law — would grant publishers copyright over adopted codes. It reached the House floor under suspension of the rules, the fast-track procedure built for renaming post offices, where debate is skipped and more than 98% of bills pass. UpCodes had no lobbyists; the publishers have a former House Judiciary chairman. An email to the user base killed it, narrowly. Co-sponsorship has since fallen from twenty to five.",
    },
  ],

  takeaways: [
    "Spend ten minutes at <a href=\"https://up.codes/pro-codes-act\" target=\"_blank\" rel=\"noopener\">up.codes/pro-codes-act</a> — the widget identifies your representatives and drafts the message. Ten letters registered as a signal.",
    "Pull the list of codes your jurisdictions have adopted and mark which ones your checklists, standards, and AI tools quote directly.",
    "Decide now what the fallback is if quoting code text requires a license — 'we’d deal with it later' is the posture that got this bill one floor vote from passing.",
    "Read the publishers’ own IRS 990s before accepting the argument that free access is destroying them.",
  ],

  insights: [
    { title: "Winning isn’t ending",        body: "Three courts agreed and the suits kept coming, because the publishers only have to win once." },
    { title: "The American rule",           body: "Losers don’t pay fees, so litigation works as a business strategy even without a case." },
    { title: "Escape velocity",             body: "UpCodes’ first innovation wasn’t search — it was growing revenue faster than the legal bills." },
    { title: "Record revenue, same crisis", body: "ICC revenue has set records every year since UpCodes launched, with a CEO paid north of $1.4M." },
    { title: "The post office procedure",   body: "A contested copyright bill nearly passed under a rule designed for uncontroversial housekeeping." },
  ],

  bottomLine:
    "Very little of this has to do with technology. UpCodes didn’t win by building a better product, though they did that too. They won by finding a way to keep paying lawyers long enough for the law to catch up with them. Free access to the code isn’t infrastructure that’s simply there — it’s two brothers who decided in their twenties that they’d rather risk personal bankruptcy than let it go, and who have spent more than ten million dollars making a point three courts already agreed with.",

  closingQuote:
    "The publishers only have to win once. UpCodes has to win every time, forever, and pay for the privilege at roughly half their operating budget.",
};
