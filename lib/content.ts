// All site copy lives here, so the team can edit words without touching components.

export const SITE = {
  name: "More Labs",
  legalName: "More Labs digital ",
  url: "https://morelabsdigital.com",
  description:
    "More Labs is a Lagos media and narrative engineering company. Home of MoreBranches, Broad Street, MORE100 and Nawa!",
};

export const EMAIL = {
  agency: "agency@morelabsdigital.com",
  editorial: "editorial@morelabsdigital.com",
};

export const NAV = [
  { href: "#verticals", label: "Verticals" },
  { href: "#labs", label: "The Labs" },
  { href: "#story", label: "Story" },
  { href: "#team", label: "Team" },
  { href: "#contact", label: "Contact" },
];

export type VerticalKey = "mb" | "bs" | "m100" | "nawa";

export type Vertical = {
  key: VerticalKey;
  name: string;
  short: string;
  dot: string;
  kind: string;
  tagline: string;
  body: string[];
  facts: [string, string][];
  actions: { label: string; href: string; external?: boolean }[];
  theme: { bg: string; fg: string };
};

export const VERTICALS: Record<VerticalKey, Vertical> = {
  mb: {
    key: "mb",
    name: "MoreBranches",
    short: "Publication",
    dot: "var(--white)",
    kind: "Flagship publication · Since 2017",
    tagline: "What young and smart Africans read.",
    body: [
      "Legacy media covers politics in a voice that feels far from how young Nigerians speak. Platform-native pages cover culture but rarely take public-interest news seriously. MoreBranches sits in between, reporting politics and policy in the same direct voice we use for music, fashion and nightlife.",
      "We also cover what others avoid, from sex education to the lives of people on the margins, because that is how much of our audience actually experiences Nigeria. The publication is now going social first through MoreBranchesTV, with long-form reporting feeding video, audio and newsletters.",
    ],
    facts: [
      ["Readers", "600K+ a month"],
      ["Coverage", "Culture, society, politics, tech"],
      ["Formats", "Articles, MoreBranchesTV, newsletters"],
      ["Partners", "Adidas, Martell, Budweiser, Spotify"],
    ],
    actions: [
      { label: "Visit morebranches.com ↗", href: "https://morebranches.com", external: true },
      { label: "Advertise with us", href: "#contact" },
    ],
    theme: { bg: "var(--white)", fg: "var(--ink)" },
  },
  bs: {
    key: "bs",
    name: "Broad Street",
    short: "Nightlife",
    dot: "var(--bs-sign)",
    kind: "Nightlife vertical",
    tagline: "Lagos after dark, on the record.",
    body: [
      "Broad Street documents Lagos nightlife and the subcultures that live in it. We take the camera into clubs, raves, parties and street corners and let people speak for themselves through vox pops and short-form scenes.",
      "For brands in drinks, music, fashion and lifestyle, it is a direct line into the city’s night economy, with coverage and activations made by people who are already in those rooms.",
    ],
    facts: [
      ["Format", "Vox pops, event coverage, short video"],
      ["Home", "Instagram and TikTok"],
      ["For brands", "Activations, event partnerships, sponsored series"],
    ],
    actions: [{ label: "Partner with Broad Street", href: "#contact" }],
    theme: { bg: "var(--bs)", fg: "var(--white)" },
  },
  m100: {
    key: "m100",
    name: "MORE100",
    short: "Annual list",
    dot: "var(--lime)",
    kind: "Annual honour list · Year 4",
    tagline: "One hundred Nigerians. Every year.",
    body: [
      "MORE100 honours one hundred Nigerians who did remarkable work in their fields over the year, across ten sectors. It is chosen by our newsroom and built to recognise people for what they did that year, not for how famous they already are.",
      "The Class of 2026 is the fourth edition. Sponsorship puts a brand at the centre of a list that young Nigerians share, argue about and remember.",
    ],
    facts: [
      ["Edition", "Class of 2026, the fourth"],
      ["Scope", "100 honourees across 10 sectors"],
      ["Open to", "Sponsors, partners, nominations"],
    ],
    actions: [
      { label: "Sponsor the Class of 2026", href: "#contact" },
      { label: "Nominate someone", href: "mailto:editorial@morelabsdigital.com?subject=MORE100%20nomination" },
    ],
    theme: { bg: "var(--lime)", fg: "var(--ink)" },
  },
  nawa: {
    key: "nawa",
    name: "Nawa!",
    short: "News product",
    dot: "var(--nw-yellow)",
    kind: "News product · In development",
    tagline: "Nigerian news, in the language you speak.",
    body: [
      "Nawa! brings together stories from Nigerian newsrooms, translates the full story with AI into Yorùbá, Igbo, Hausa and Nigerian Pidgin, and has human editors check every translation for accuracy and bias before it goes out. The newsroom that reported the story stays credited on every piece.",
      "It is built for people on low-cost phones and patchy data. Readers opt in on WhatsApp first, with listen-in-your-language audio on the way. Nawa! was developed as our project for the Google News Initiative Emerging News Voices 2026 cohort, and we plan to add more Nigerian and African languages over time.",
    ],
    facts: [
      ["Languages", "Yorùbá, Igbo, Hausa, Pidgin"],
      ["Delivery", "WhatsApp first, then web and app"],
      ["Partners", "Newsrooms, publishers, advertisers"],
    ],
    actions: [{ label: "Partner on Nawa!", href: "#contact" }],
    theme: { bg: "var(--nw-paper)", fg: "var(--nw-night)" },
  },
};

export const VERTICAL_ORDER: VerticalKey[] = ["mb", "bs", "m100", "nawa"];

export const MB_STATS = [
  { value: "600K+", count: 600, suffix: "K+", label: "monthly readers across web and social" },
  { value: "1 of 6", label: "Nigerian news creators in Google News Initiative’s Emerging News Voices 2026" },
  { value: "2020", label: "credited by Al Jazeera for keeping #EndSARS covered" },
  { value: "Repeat", label: "partners include Adidas, Martell, Budweiser and Spotify" },
];

export const NAWA_WORDS = ["Tori", "Labarai", "Ìròyìn", "Akụkọ", "News"];

// Brands shown as typeset names until official logo files are added to lib/logos.ts.
export const CLIENT_NAMES: { name: string; style: "" | "s" | "t" }[] = [
  { name: "Budweiser", style: "s" },
  { name: "Hennessy", style: "t" },
  { name: "Martell", style: "s" },
  { name: "MTN", style: "" },
  { name: "UNDP", style: "" },
  { name: "Al Jazeera", style: "" },
];

export const SERVICES = [
  {
    title: "Cultural & narrative audit",
    body: "Deep cultural research into how young Africans see your brand, your category and your competitors, followed by clear recommendations on positioning and voice.",
    best: "Market entry or a radical repositioning.",
  },
  {
    title: "Campaign partnership",
    body: "Full strategy through to execution. We stay with you from the first insight to the final report, with our editorial and social teams in the room.",
    best: "Youth product launches, crowded categories, and agencies that need cultural credibility on a pitch.",
  },
  {
    title: "Social engineering programmes",
    body: "We build digital and physical spaces where your brand helps the culture happen: forums, series, events and communities that people return to.",
    best: "Brands ready to invest in relationships over reach.",
  },
  {
    title: "Brand rehabilitation",
    body: "When trust breaks, a press statement rarely fixes it. We help you understand what went wrong with the community and rebuild the bridge back, in their language.",
    best: "Sensitive categories and recovery after a public misstep.",
  },
  {
    title: "Digital positioning & creative production",
    body: "Social content, video, design and editorial made by the team that runs MoreBranches, Broad Street and MORE100 every day.",
    best: "Brands that need assets made with cultural fluency, fast.",
  },
];

export const TRUST_STATS = [
  { value: "73%", label: "of African Gen Z say brands don’t understand them" },
  { value: "89%", label: "actively distrust advertising aimed at them" },
  { value: "12%", label: "average brand recall, against 47% in developed markets" },
  { value: "0.3%", label: "low end of typical engagement, where 3 to 5% is a healthy baseline" },
];

export const TIMELINE = [
  { year: "2017", tag: "MoreBranches launches", color: "var(--bs-sign)", text: "We start MoreBranches to cover young African life from the inside, without the distance of legacy media." },
  { year: "2020", tag: "#EndSARS · COVID-19", color: "var(--nw-red)", text: "Through the pandemic and #EndSARS we report in real time and help move safety information, legal aid and medical coordination. Al Jazeera names MoreBranches among the Nigerian platforms that kept the protests covered." },
  { year: "2023", tag: "MORE100 begins", color: "#5d7d00", text: "The first MORE100 class honours a hundred Nigerians for the work they did that year. Brands like Adidas, Martell, Budweiser and Spotify keep coming back to reach our readers." },
  { year: "2026", tag: "Google News Initiative", color: "var(--nw-indigo)", text: "Google News Initiative selects MoreBranches, without an application, as one of six Nigerian news creators in Emerging News Voices. We start work with FT Strategies on revenue and begin building Nawa!" },
  { year: "Now", tag: "More Labs", color: "var(--ink)", text: "One parent company for the publications, the products and the brand work. MoreBranches goes social first with MoreBranchesTV.", link: { label: "Come build the next chapter with us.", href: "#contact" } },
];

export type Person = {
  id: string;
  name: string;
  role: string;
  photo: string;
  accent: string;
  accentText: string;
  bio: string;
  links: { label: string; href: string }[];
};

export const TEAM: Person[] = [
  {
    id: "richard",
    name: "Richard Ogundiya",
    role: "Co-founder · Head of Operations",
    photo: "/images/team/richard-ogundiya.jpg",
    accent: "var(--lime)",
    accentText: "var(--ink)",
    bio: "Close to a decade in Nigerian media and communications. Journalist relations in the Office of the Vice President of Nigeria, brand strategy and PR at Atide Studios, and campaigns for Sony Music, UNDP Nigeria, Samsung, Hennessy and Spotify. He runs day-to-day operations and commercial relationships across More Labs.",
    links: [],
  },
  {
    id: "nasir",
    name: "Nasir Ahmed Achile",
    role: "Co-founder · Editor-in-Chief",
    photo: "/images/team/nasir-ahmed-achile.jpg",
    accent: "var(--nw-indigo)",
    accentText: "var(--white)",
    bio: "Has worked with international journalists and outlets including DW, VICE and Audiomack, and brings that standard to how MoreBranches reports. He sets the editorial line across our publications and his byline still runs in them.",
    links: [{ label: "Muck Rack ↗", href: "https://muckrack.com/nasirahmedachile" }],
  },
  {
    id: "adedayo",
    name: "Adedayo Laketu",
    role: "Co-founder · Creative Director & Head of People",
    photo: "/images/team/adedayo-laketu.jpg",
    accent: "var(--bs)",
    accentText: "var(--white)",
    bio: "Co-founded PITH Africa, one of Nigeria’s biggest streetwear brands, now recognised internationally. He brings that experience of scaling a cultural brand beyond Lagos, and shapes how every More Labs property looks, sounds and hires.",
    links: [{ label: "PITH on OkayAfrica ↗", href: "https://www.okayafrica.com/spotlight-pith-africa-are-for-the-young-and-free-african/284178" }],
  },
];

export const RECOGNITION = [
  { year: "2020", who: "Al Jazeera", text: "Credited MoreBranches among the Nigerian platforms that kept #EndSARS covered.", href: "https://www.aljazeera.com/" },
  { year: "2026", who: "Google News Initiative", text: "Emerging News Voices cohort. One of six Nigerian creators, twenty across Africa.", href: "https://newsinitiative.withgoogle.com/" },
  { year: "2026", who: "GNI Growth Lab", text: "Enrolled in Google’s programme for building sustainable newsrooms.", href: "https://newsinitiative.withgoogle.com/" },
  { year: "2026", who: "FT Strategies", text: "Working directly with us on monetisation and new revenue.", href: "https://www.ftstrategies.com/" },
];

export const BRIEF_CHIPS: { label: string; to: "agency" | "editorial" }[] = [
  { label: "Cultural audit", to: "agency" },
  { label: "Campaign partnership", to: "agency" },
  { label: "Content & production", to: "agency" },
  { label: "Broad Street activation", to: "agency" },
  { label: "MORE100 sponsorship", to: "agency" },
  { label: "Nawa! partnership", to: "agency" },
  { label: "Press or interview", to: "editorial" },
  { label: "Story tip", to: "editorial" },
];
