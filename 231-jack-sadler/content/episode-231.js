/* =========================================================================
   TRXL Episode Content — 231
   Swap these values to re-skin the infographic for any new episode.
   The same schema powers both the web infographic and the slide deck.
   ------------------------------------------------------------------------- */

window.TRXL_EPISODE = {
  number: 231,
  date: "June 2026",
  title: "Realized or Negotiated Away",   // second-to-last word ("Negotiated") gets gradient emphasis
  subtitle: "Jack Sadler, co-founder of Part3, on why architects keep running construction administration inside the contractor's software — and how to take back the phase where design intent is realized or negotiated away.",

  // Hero visual concept — the clean record (Step 0)
  hero: {
    concept: "A single luminous vertical spine of time-stamped decision nodes — the clean, discoverable record — rising through the dark, while faint email and spreadsheet fragments dissolve in the surrounding gloom. The ordered, lit record is what the architect controls; the scattered fragments are the inbox you'd otherwise reconstruct from.",
    elements: ["deep charcoal field with a soft accent vignette", "bright vertical spine with a traveling glow", "four time-stamped nodes lighting in sequence top to bottom", "faint scattered email/spreadsheet fragments drifting and fading in the background"],
    cssNotes: "ep231-record (frame), ep231-spine (vertical gradient line with a travel keyframe), ep231-node (pulsing dots staggered via --i), ep231-frag / -mail / -cell (dim drifting fragments positioned via --x/--y and delayed via --d); spine travels, nodes stagger in, fragments drift and fade",
  },

  guest: {
    name: "Jack Sadler",
    role: "Co-founder & CEO",
    firm: "Part3",
    portrait: "assets/jack-sadler.png",
  },

  links: {
    listen: "https://trxl.co/231",
    newsletter: "https://www.trxl.co/leadership-edge-trxl-231/",
  },

  centralArgument: "Construction administration is the phase where a project gets built the way it was designed — or it doesn't. Architects didn't lose control of it because they chose to. They lost it by default, by letting someone else's software decide the workflows, the team responsibilities, and whose version of events becomes the record. Taking it back isn't about working more hours. It's about owning where the information lives.",

  pullQuote: {
    text: "I think of CA as the phase where design intent is realized or negotiated away. And too often, the negotiation's happening and you're not at the table.",
    attribution: "Jack Sadler, co-founder and CEO of Part3",
  },

  stats: [
    { value: "~20%", label: "of architectural fees ride on the CA phase" },
    { value: "4×", label: "projects one senior architect can run when the admin is automated" },
    { value: "10%", label: "focus tax every time the work switches context" },
  ],

  question: "If you had to defend your firm's last difficult project in front of a lawyer tomorrow, could you produce a clean, time-stamped record of every decision — or would you be reconstructing it from your inbox?",

  analysis: [
    {
      title: "Whose software, whose story",
      body: "The contractor's side of CA has every tool; the architect's side has spreadsheets and email. Move into the contractor's environment by default and you inherit their workflows, their version of responsibilities, and their record of what happened. That's fine until something goes wrong — and your side of the story lives somewhere undiscoverable.",
    },
    {
      title: "The most expensive people, the least valuable work",
      body: "Firms staff CA with senior people because the phase needs judgment, then those people spend their hours logging documents and chasing consultants inside someone else's system. The bill goes out at the same rate for judgment and data entry. Multiply that senior person across three or four projects and CA stops being a cost center.",
    },
    {
      title: "Controlled transparency, and the line AI shouldn't cross",
      body: "Nobody wants to work in public while the thinking is still in flight, so fully transparent tools just push the real work back into private email. The fix is to share when you decide it's ready. The same line governs AI: automate the administration, never the professional judgment.",
    },
  ],

  takeaways: [
    "Run Jack's diagnostic on one active project — start by asking whether you control where the information lives.",
    "Prove the trail: can you say when each submittal and RFI was reviewed, and why?",
    "Dictate how your sub-consultants work with you instead of adapting to everyone else's process.",
    "Point AI at the admin — naming, routing, scanning for missing data — and keep the judgment human.",
  ],

  insights: [
    {
      title: "Control lost by default",
      body: "Architects didn't choose to give up CA — they let decisions about tools and workflows get made without them.",
    },
    {
      title: "The record is the defense",
      body: "Most CA claims aren't about bad design; they're about inadequate documentation of what was reviewed, by whom, and when.",
    },
    {
      title: "Multiply, don't replace",
      body: "Enable one senior architect to run three or four projects instead of one and CA is no longer a cost center.",
    },
    {
      title: "Controlled transparency",
      body: "Work privately with your consultants, then share with the contractor and client when you decide it's ready.",
    },
    {
      title: "Automate admin, not judgment",
      body: "AI should categorize, route, and flag the gaps — it should never make the professional call.",
    },
  ],

  bottomLine: "The thread running through the whole conversation is ownership — not more responsibility, just deliberate control of the phase you're already on the hook for: where the information lives, the source of truth for every decision, the workflow of your consultant team. With the administrative weight automated and the judgment kept human, CA stops being where firms quietly bleed margin and lose their version of events. It becomes the proof that you don't just design well — you execute when something goes wrong.",

  closingQuote: "Not replace the person. Multiply them.",
};
