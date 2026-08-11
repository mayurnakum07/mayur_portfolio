/**
 * Single source of truth for every project on the site.
 *
 * The homepage featured grid, the /projects showcase and every /projects/[slug]
 * case study read from this file. No project literals belong in JSX.
 */

export type Platform = "Web" | "iOS" | "Android" | "macOS" | "Admin Dashboard";
export type Category = "AI" | "Web" | "Mobile" | "Platform";
export type Status = "Production" | "In Development" | "Completed";

export interface CaseStudySection {
  heading: string;
  /** Paragraphs. A section with no body and no bullets is not rendered. */
  body: string[];
  bullets?: string[];
}

export interface ProjectMetric {
  value: string;
  label: string;
  /** Where the number came from, e.g. "App Store, Aug 2026". Rendered as a caption. */
  source?: string;
}

export interface CaseStudy {
  context?: CaseStudySection;
  problem?: CaseStudySection;
  contribution?: CaseStudySection;
  challenges?: CaseStudySection;
  outcome?: CaseStudySection;
}

export interface Project {
  slug: string;
  name: string;
  tagline: string;
  summary: string;
  category: Category;
  featured: boolean;
  order: number;

  role?: string;
  platforms: Platform[];
  year: string;
  status: Status;
  client?: string;

  stack: string[];
  highlights: string[];

  links: {
    live?: string;
    appStore?: string;
    playStore?: string;
    source?: string;
  };

  metrics?: ProjectMetric[];

  caseStudy?: CaseStudy;

  images: {
    card: string;
    hero: string;
    gallery?: { src: string; alt: string; caption: string }[];
    /** Absolute-from-root path, falls back to the shared projects OG image. */
    ogImage: string;
  };
  /** Alt text for the card and hero image. */
  imageAlt: string;
}

const DEFAULT_OG = "/og/projects.png";

const allProjects: Project[] = [
  {
    slug: "bydesign",
    name: "ByDesign",
    tagline: "AI productivity workspace with Model Context Protocol",
    summary:
      "A productivity workspace that keeps tasks, notes, calendar events, habits and sharing in one place instead of scattered across four apps. It runs on web, iOS, Android and macOS from a largely shared codebase, with Model Context Protocol support that exposes the workspace as a tool surface an AI assistant can act on.",
    category: "AI",
    featured: true,
    order: 1,
    role: "Frontend & Mobile Engineer",
    platforms: ["Web", "iOS", "Android", "macOS"],
    year: "2025 – Present",
    status: "Production",
    stack: [
      "React Native",
      "React",
      "TypeScript",
      "Expo",
      "Firebase",
      "MCP",
      "OpenAI",
      "Claude",
      "Google Calendar API",
      "Apple Calendar (EventKit)",
      "Microsoft Graph",
      "REST APIs",
    ],
    highlights: [
      "AI assistant",
      "Model Context Protocol",
      "Two-way calendar sync",
      "Cross-platform widgets",
    ],
    links: {
      live: "https://www.bydesign.io/",
      appStore:
        "https://apps.apple.com/in/app/bydesign-todo-list-calendar/id1554933824",
      playStore:
        "https://play.google.com/store/apps/details?id=com.idealist.whiteboard",
    },
    caseStudy: {
      context: {
        heading: "Context",
        body: [
          "ByDesign is a productivity workspace that keeps tasks, notes, calendar events, habits, folders and sharing in one place instead of scattered across four apps. It runs on web, iOS, Android and macOS from a largely shared codebase, and it is the product I have spent the most time on.",
        ],
      },
      problem: {
        heading: "The problem",
        body: [
          "Productivity tools force a choice: a calendar that cannot hold a note, or a note app that cannot schedule anything. ByDesign's premise is that these are the same data viewed differently — a task on a page and a task on Tuesday at 3pm should be one object.",
          "That premise is easy to state and hard to build, because it means every surface has to agree about scheduling, timezones, recurrence and ownership at all times.",
        ],
      },
      contribution: {
        heading: "What I built",
        body: [],
        bullets: [
          "Built cross-platform UI in React Native and React covering tasks, pages/notes, calendar views, habits and the inbox",
          "Implemented Model Context Protocol support, exposing the workspace as a tool surface an AI assistant can act on — reading the day's schedule, creating and rescheduling tasks, logging habits and editing notes through structured tool calls rather than screen-scraping",
          "Built two-way calendar sync against Google Calendar, Apple/iCloud Calendar and Microsoft Outlook, including event creation, attendee handling and RSVP",
          "Shipped home and lock screen widgets on iOS and Android",
          "Implemented multilingual support and timezone-aware scheduling across every surface",
          "Built collaboration features: page sharing with per-person permissions, and real-time sync between devices",
        ],
      },
      challenges: {
        heading: "Engineering challenges",
        body: [
          "Making the workspace legible to an AI assistant. An MCP integration is not a chatbot bolted onto a sidebar. Each capability has to be a tool with a strict schema, a clear description and predictable failure behaviour, because a model choosing between tools is only as good as the boundaries between them. The hard design work was granularity — one overloaded update_item tool makes the model guess, while fifty tiny tools bury the right one. I settled on tools scoped to what a user would recognise as a single intention: check today, add to inbox, reschedule, log a habit, share a page.",
          "Two-way sync across three calendar providers. Google, Apple and Microsoft disagree about recurrence rules, timezone representation and what “deleted” means for one instance of a repeating event. Sync had to be idempotent — a device coming back online after hours offline cannot produce duplicates — and conflicts had to resolve without ever silently dropping something the user typed.",
          "One codebase, four platforms. Widgets, notifications and calendar permissions are genuinely native on each platform. The work was drawing the line correctly: shared logic and shared UI where it holds, native modules where the platform demands it, and no leaky abstraction in between.",
        ],
      },
      outcome: {
        heading: "Outcome",
        body: [
          "ByDesign is live on the App Store, Google Play, web and macOS.",
        ],
      },
    },
    images: {
      card: "/assets/projects/bydesign.png",
      hero: "/assets/projects/bydesign.png",
      ogImage: DEFAULT_OG,
    },
    imageAlt:
      "ByDesign workspace showing tasks, notes and calendar events in a single unified view",
  },

  {
    slug: "shivansh-luxe",
    name: "Shivansh Luxe",
    tagline: "Enquiry-led luxury jewellery commerce",
    summary:
      "The storefront for a Surat jewellery house — over 100 pieces across curated collections, with an enquiry and consultation flow instead of a checkout. Behind it is an admin dashboard where the client manages products, categories and incoming enquiries.",
    category: "Web",
    featured: false,
    order: 2,
    role: "Full Stack Developer",
    platforms: ["Web", "Admin Dashboard"],
    year: "2026",
    status: "Production",
    client: "Shivansh Gems & Jewellery, Surat",
    stack: [
      "Next.js",
      "React",
      "TypeScript",
      "Firebase",
      "Tailwind CSS",
      "Framer Motion",
      "Vercel",
    ],
    highlights: [
      "100+ piece catalogue",
      "Enquiry & consultation flow",
      "Wishlist",
      "Custom admin dashboard",
    ],
    links: {
      live: "https://www.shivanshluxe.com/",
    },
    caseStudy: {
      context: {
        heading: "Context",
        body: [
          "Shivansh Luxe is the storefront for a Surat jewellery house. Over 100 pieces across rings, necklaces, earrings, bracelets, bangles, pendants, bridal and men's jewellery, organised into curated collections — Bridal Heritage, Forever Love, Diamond Classics, Timeless Elegance, Royal Collection.",
          "Behind it is an admin dashboard where the client manages products, categories and incoming enquiries.",
        ],
      },
      problem: {
        heading: "The problem",
        body: [
          "Fine jewellery does not sell through a checkout button. A bridal set is a consultation, a negotiation and a trust relationship — the transaction happens in a room, or over WhatsApp, not in a payment modal.",
          "So the site's job is not conversion-to-purchase, it is conversion-to-conversation: make someone want a piece enough to enquire, and get that enquiry to the client's phone fast. That inverts the usual e-commerce build. The product page is a pitch, not a cart step, and the admin dashboard is a CRM, not an order queue.",
        ],
      },
      contribution: {
        heading: "What I built",
        body: [],
        bullets: [
          "Built the storefront in Next.js and TypeScript: category and collection browsing, product detail pages, curated editorial collections, wishlist and new arrivals",
          "Built the enquiry flow — per-product enquiry, consultation booking and WhatsApp hand-off with a prefilled message",
          "Built the admin dashboard: product and category management, collection curation and enquiry management",
          "Implemented the visual layer — video hero, scroll-driven editorial sections and Framer Motion transitions in service of a premium feel",
          "Handled performance and SEO: image optimisation across a heavy image catalogue, structured metadata and Vercel deployment",
        ],
      },
      challenges: {
        heading: "Engineering challenges",
        body: [
          "A luxury feel that still loads fast. This category demands large, beautiful photography and a hero video, and the audience is largely on mobile data in India. Everything hinges on aggressive image optimisation, correct sizing and lazy loading — the visual ambition and the performance budget pull directly against each other, and the resolution is technical, not aesthetic.",
          "Enquiries are the product. If an enquiry is slow to reach the client, the sale is gone. The flow had to be short on mobile, capture the specific piece, and land reliably in the dashboard and on the client's phone.",
          "A catalogue a non-technical owner can run. Categories, collections, tags like “New” and “Featured,” and 100+ pieces — all editable by a jeweller, not a developer.",
        ],
      },
      outcome: {
        heading: "Outcome",
        body: [
          "Shivansh Luxe is live on its own domain with a 100+ piece catalogue, running the client's enquiry pipeline.",
        ],
      },
    },
    images: {
      card: "/assets/projects/shivansh.png",
      hero: "/assets/projects/shivansh.png",
      ogImage: DEFAULT_OG,
    },
    imageAlt:
      "Shivansh Luxe storefront showing a curated luxury jewellery collection",
  },

  {
    slug: "waves-bible-verse",
    name: "Waves: Bible Verse",
    tagline: "AI scripture companion with mood-based curation",
    summary:
      "An iOS app that delivers Bible verses curated to what someone is actually going through. A daily mood check-in shapes which scripture surfaces, widgets refresh through the day, and an AI chat explains verses and generates devotionals in context.",
    category: "Mobile",
    featured: true,
    order: 3,
    role: "React Native Developer",
    platforms: ["iOS"],
    year: "2025 – 2026",
    status: "Production",
    client: "Waves Studio LLC",
    stack: [
      "React Native",
      "TypeScript",
      "Firebase",
      "OpenAI",
      "WidgetKit",
      "In-App Purchase",
    ],
    highlights: [
      "Mood-based verse curation",
      "AI scripture chat",
      "Lock screen widgets",
      "Devotional streaks",
    ],
    links: {
      live: "https://wavesbibleapp.com/",
      appStore: "https://apps.apple.com/us/app/waves-bible-verse/id6742439914",
    },
    metrics: [
      { value: "4.8★", label: "App Store rating", source: "App Store, Aug 2026" },
      { value: "246", label: "Ratings", source: "App Store, Aug 2026" },
      {
        value: "7",
        label: "Releases shipped",
        source: "v1.0 Apr 2025 → v1.7 Aug 2026",
      },
    ],
    caseStudy: {
      context: {
        heading: "Context",
        body: [
          "Waves delivers Bible verses curated to what someone is actually going through. A daily mood check-in shapes which scripture surfaces; lock and home screen widgets refresh through the day; and an AI chat explains verses, generates devotionals and answers faith questions in context. It runs on a subscription with a free trial.",
        ],
      },
      problem: {
        heading: "The problem",
        body: [
          "Devotional apps have a retention problem shaped like a calendar: a verse-of-the-day is the same verse for everyone, so it stops feeling addressed to you by roughly day four.",
          "The product bet is that relevance beats volume — that a verse chosen for how you feel today outperforms a larger library served generically. That makes personalisation the product, not a feature of it.",
        ],
      },
      contribution: {
        heading: "What I built",
        body: [],
        bullets: [
          "Built the iOS app in React Native and TypeScript",
          "Implemented the mood check-in slider that drives verse curation from a user's daily emotional state",
          "Built Waves Chat on OpenAI — verse explanations, personalised devotionals and open faith-based questions, with prompting tuned to stay grounded in scripture rather than freelancing",
          "Built lock screen and home screen widgets that refresh on a schedule, keeping content present without requiring the app to be opened",
          "Implemented customisable reminder notifications and devotional streak tracking",
          "Integrated in-app purchases and subscription management across weekly, monthly, six-month and annual tiers with a free trial",
        ],
      },
      challenges: {
        heading: "Engineering challenges",
        body: [
          "Widgets are a different execution environment. Lock and home screen widgets refresh on a schedule the OS controls, not on demand. Getting fresh, personalised content into a widget means pre-computing what it will need and respecting a tight memory and time budget — you cannot call an API when the widget wakes.",
          "An AI that has to stay in bounds. A faith chatbot answering “what does this verse mean” has an obvious failure mode. The work was prompt design and grounding — keeping responses anchored in scripture and appropriate to a devotional context rather than free-associating, in a domain where getting it wrong genuinely matters to the person reading it.",
          "Subscriptions across six price points. Weekly, monthly, six-month and annual tiers plus a three-day trial, with receipt validation, restore-purchase, and state that stays correct through cancellation and re-subscription.",
        ],
      },
      outcome: {
        heading: "Outcome",
        body: [
          "Waves holds a 4.8 star rating from 246 ratings on the US App Store and has shipped seven releases since launching in April 2025, including a mood check-in feature added in 2026. It is a paid product with a real subscriber base.",
        ],
      },
    },
    images: {
      card: "/assets/projects/waveBibleApp.png",
      hero: "/assets/projects/waveBibleApp.png",
      ogImage: DEFAULT_OG,
    },
    imageAlt:
      "Waves: Bible Verse app showing a curated scripture screen and mood check-in",
  },

  {
    slug: "bbpatrol",
    name: "BBpatrol 黑箱糾察隊",
    tagline: "Crowd-sourced speed trap reporting for Taiwan",
    summary:
      "A driving safety app used in Taiwan. Drivers report mobile speed cameras and road conditions in real time; other drivers get voice alerts as they approach, delivered through a floating window that stays visible over their navigation app.",
    category: "Mobile",
    featured: true,
    order: 4,
    role: "React Native Developer",
    platforms: ["Android"],
    year: "2024 – 2026",
    status: "Production",
    client: "微碩有限公司 (Weishuo Co., Taiwan)",
    stack: [
      "React Native",
      "GPS / Geolocation",
      "Voice Services",
      "Floating Window Overlay",
      "Line Login",
    ],
    highlights: [
      "Real-time speed trap reports",
      "Floating window overlay",
      "Voice pack alerts",
      "One-handed operation",
    ],
    links: {
      live: "https://bbpatrol.com.tw/",
      playStore:
        "https://play.google.com/store/apps/details?id=com.timer_swift",
    },
    metrics: [
      { value: "5,000+", label: "Downloads", source: "Google Play, Aug 2026" },
      {
        value: "4.3★",
        label: "Play Store rating",
        source: "49 reviews, Aug 2026",
      },
    ],
    caseStudy: {
      context: {
        heading: "Context",
        body: [
          "BBpatrol is a driving safety app used in Taiwan. Drivers report mobile speed cameras and road conditions in real time; other drivers get voice alerts as they approach. It sits in Google Play's Maps & Navigation category and has crossed 5,000 downloads with a 4.3 star rating.",
        ],
      },
      problem: {
        heading: "The problem",
        body: [
          "A driver watching the road cannot also watch a speedometer, and mobile speed traps move — a static database is out of date the day it ships. The only source that keeps up is other drivers.",
          "That makes this a crowd-sourcing problem with a hard constraint: every interaction happens at speed, one-handed, with eyes that belong on the road. Anything requiring two taps and a look down is not just bad UX, it is dangerous.",
        ],
      },
      contribution: {
        heading: "What I built",
        body: [],
        bullets: [
          "Built the app in React Native for Taiwan's driving market",
          "Implemented real-time GPS tracking with per-second position updates against reported speed trap locations",
          "Built the floating window overlay, so alerts stay visible over a navigation app rather than requiring BBpatrol to be foregrounded",
          "Implemented the voice alert system with multiple selectable voice packs",
          "Built the crowd-sourced reporting flow — one-handed submission of speed traps and road conditions while driving",
          "Integrated Line Login, the dominant auth method in Taiwan",
        ],
      },
      challenges: {
        heading: "Engineering challenges",
        body: [
          "Battery versus accuracy. Per-second GPS updates plus a persistent overlay is close to a worst case for battery. Tuning location accuracy, update frequency and background behaviour to stay useful on a long drive without draining the phone was the central constraint.",
          "A UI you use without looking. Reporting has to be a single large target, confirmable by feel, with audio confirmation instead of visual. The voice packs are not a novelty feature — audio is the primary output channel, because the screen is not one.",
          "Android overlay permissions. System overlay windows sit behind a special permission and behave differently across manufacturers' Android skins. Making the floating window reliable across real Taiwanese Android devices was ongoing compatibility work.",
          "Localisation. The entire product is in Traditional Chinese for a Taiwanese market — a market I was building for without being in it.",
        ],
      },
      outcome: {
        heading: "Outcome",
        body: [
          "BBpatrol has passed 5,000 downloads on Google Play with a 4.3 star rating across 49 reviews, and is still receiving updates as of mid-2026.",
        ],
      },
    },
    images: {
      card: "/assets/projects/speedApp.png",
      hero: "/assets/projects/speedApp.png",
      ogImage: DEFAULT_OG,
    },
    imageAlt:
      "BBpatrol app showing real-time speed trap reports on a map of Taiwan",
  },

  {
    slug: "getnetworked",
    name: "GetNetworked",
    tagline: "AI-powered event and professional networking platform",
    summary:
      "An event platform for people who host professional communities. It covers the full lifecycle — create the event, sell tickets, promote it, check guests in, and keep the room connected afterwards — shipped to web, iOS and Android from a shared React and Ionic codebase.",
    category: "AI",
    featured: true,
    order: 5,
    role: "Frontend & Mobile Developer",
    platforms: ["Web", "iOS", "Android"],
    year: "2025",
    status: "Production",
    client: "Networked LLC",
    stack: ["React", "Ionic", "TypeScript", "Firebase", "Stripe", "Apple Pay"],
    highlights: [
      "AI networking suggestions",
      "Digital business cards",
      "QR check-in",
      "Stripe & Apple Pay ticketing",
    ],
    links: {
      live: "https://app.getnetworked.com/",
      appStore: "https://apps.apple.com/us/app/networked-ai/id6471849642",
      playStore:
        "https://play.google.com/store/apps/details?id=app.networked.ai",
    },
    caseStudy: {
      context: {
        heading: "Context",
        body: [
          "GetNetworked is an event platform for people who host professional communities — founders, operators, membership organisations. It covers the full lifecycle: create the event, sell tickets, promote it, check guests in, and keep the room connected afterwards. The company sells it in tiers from free through $159/month, with a custom enterprise tier.",
        ],
      },
      problem: {
        heading: "The problem",
        body: [
          "Event tooling splits at the door. One product sells the ticket, another handles check-in, a third is where attendees try to find each other afterwards — usually LinkedIn, badly.",
          "Hosts lose the thread between “who bought a ticket,” “who actually showed up,” and “who should meet whom,” which is the only part that produces a repeat attendee.",
        ],
      },
      contribution: {
        heading: "What I built",
        body: [],
        bullets: [
          "Built the attendee and host-facing app in React and Ionic, shipping to web, iOS and Android from a shared codebase",
          "Implemented ticketing checkout with Stripe, including card and Apple Pay, across free, paid and tiered ticket types with early-bird and promotional pricing",
          "Built digital business cards with tap and QR exchange",
          "Built QR-code guest check-in for the live event flow",
          "Implemented the AI networking suggestion surface, recommending connections from shared interests and proximity with a user-adjustable radius",
          "Built the post-event feed: attendee messaging, photo sharing and embedded event posts",
        ],
      },
      challenges: {
        heading: "Engineering challenges",
        body: [
          "Payments in a hybrid app. Apple Pay plus Stripe inside an Ionic shell means native payment sheets, webhook-driven order state, and a checkout that cannot double-charge when the network drops mid-confirmation. Ticket state has to be authoritative server-side; the client is a view of it, never the source.",
          "Check-in at the door. Scanning happens in a crowded room on hotel wifi. The scan flow had to stay responsive and tolerate poor connectivity without ever letting the same ticket in twice.",
          "Proximity-based suggestions that stay private. Location-driven recommendations mean handling real location data carefully — radius filtering that is useful without exposing precise position to other attendees.",
        ],
      },
      outcome: {
        heading: "Outcome",
        body: [
          "GetNetworked is live on iOS, Android and web, in use by event hosts across multiple US cities.",
        ],
      },
    },
    images: {
      card: "/assets/projects/networked.png",
      hero: "/assets/projects/networked.png",
      ogImage: DEFAULT_OG,
    },
    imageAlt:
      "GetNetworked event platform showing an event page with ticketing and attendee networking",
  },

  {
    slug: "basil-pos",
    name: "Basil POS",
    tagline: "Restaurant point-of-sale platform and back office",
    summary:
      "A point-of-sale platform for restaurants spanning counter service, table service, retail and a back office. Its commercial hook is dual pricing — a cash/card price split that lets an operator run at effectively zero card processing fees.",
    category: "Web",
    featured: false,
    order: 6,
    role: "Frontend Developer",
    platforms: ["Web", "Admin Dashboard"],
    year: "2025 – 2026",
    status: "Production",
    client: "The Credit Wholesale Company / Wholesale Payments",
    stack: ["React", "Next.js", "TypeScript"],
    highlights: [
      "Counter service & table service",
      "Kitchen display system",
      "Dual pricing",
      "Back office reporting",
    ],
    links: {
      live: "https://posbasil.com/",
      playStore: "https://play.google.com/store/apps/details?id=com.basilPOS",
    },
    caseStudy: {
      context: {
        heading: "Context",
        body: [
          "Basil POS is a point-of-sale platform for restaurants, spanning counter service, table service, retail and a back office. Its commercial hook is dual pricing — a cash/card price split that lets an operator run at effectively zero card processing fees. It ships as an Android POS app plus a web back office where owners manage menus, staff and reporting.",
        ],
      },
      problem: {
        heading: "The problem",
        body: [
          "Restaurant POS software fails in a specific way: it is fast in a demo and slow at 7pm on a Friday. Every second between a cashier's tap and the screen responding is a second a customer is standing there.",
          "On top of that, restaurant configuration is genuinely complex — modifier groups, seat-based ordering, tip rules, auto gratuity tiers, drive-thru flows — and all of it has to be editable by an owner who is not technical, at 2am, from their phone.",
        ],
      },
      challenges: {
        heading: "Engineering challenges",
        body: [
          "Speed is the feature. Menu loading and order entry cannot show a spinner. That pushes toward aggressive local caching, optimistic UI, and rendering that stays smooth on the low-end Android hardware restaurants actually buy.",
          "Configuration without a manual. Auto gratuity with configurable tiers, applied either manually or by seat count, is a genuinely hard interface problem: enormous flexibility underneath, and an owner who needs to set it up in two minutes.",
        ],
      },
      outcome: {
        heading: "Outcome",
        body: [
          "Basil POS is live in restaurants, distributed on Google Play, with an active release cadence.",
        ],
      },
    },
    images: {
      card: "/assets/projects/basilMerchant.png",
      hero: "/assets/projects/basilMerchant.png",
      ogImage: DEFAULT_OG,
    },
    imageAlt:
      "Basil POS back office showing restaurant menu management and reporting",
  },

  {
    slug: "medicestry",
    name: "Medicestry",
    tagline: "Family medical history, mapped across generations",
    summary:
      "A mobile app that lets a family record, visualise and pass down its medical history. Health events, diagnoses and milestones map onto an interactive family tree, and a structured summary can be shared with relatives or a doctor.",
    category: "Mobile",
    featured: false,
    order: 7,
    role: "React Native Developer",
    platforms: ["iOS", "Android"],
    year: "2026",
    status: "Production",
    client: "Medicestry LLC",
    stack: ["React Native", "TypeScript", "Firebase"],
    highlights: [
      "Interactive family health tree",
      "Encrypted health storage",
      "Share & export to doctors",
      "Screening reminders",
    ],
    links: {
      live: "https://www.medicestryllc.com/",
      appStore: "https://apps.apple.com/us/app/medicestry/id1590585468",
      playStore:
        "https://play.google.com/store/apps/details?id=com.medicestry.app",
    },
    caseStudy: {
      context: {
        heading: "Context",
        body: [
          "Medicestry lets a family record, visualise and pass down its medical history. You capture health events, diagnoses and milestones, map them onto an interactive family tree, and share a structured summary with relatives or a doctor.",
          "The company's stated mission centres underserved communities, where generational health history is most often lost and preventive care gaps are widest.",
        ],
      },
      problem: {
        heading: "The problem",
        body: [
          "Almost everyone has sat in a doctor's office and guessed at the answer to “does this run in your family?” That information exists — it is in a grandmother's memory, an aunt's recollection, a diagnosis nobody wrote down — and it disappears one funeral at a time.",
          "It is also the single cheapest input into preventive care. The problem is not medical, it is a data-capture problem wearing a medical coat: how do you get a family to record something that only pays off decades later?",
        ],
      },
      contribution: {
        heading: "What I built",
        body: [],
        bullets: [
          "Built the interactive family tree builder — mapping relationships, attaching health conditions to individual members, and updating as new information arrives",
          "Implemented an interactive health timeline for events, diagnoses and milestones",
          "Built sharing and export: structured health summaries sent to doctors or caregivers, PDF and digital chart export, and per-person view/edit permissions",
          "Implemented preventative screening alerts tied to age milestones, for example mammogram and colonoscopy reminders at the relevant ages",
          "Integrated encrypted, HIPAA-conscious storage so sensitive records stay protected while remaining easy to reach",
        ],
      },
      challenges: {
        heading: "Engineering challenges",
        body: [
          "A family tree is a graph, not a tree. Real families have step-parents, half-siblings, adoption and remarriage. A naive parent-child hierarchy breaks on the second real user. Rendering that graph legibly on a phone screen, and letting someone edit it with a thumb, is the core UI problem in the product.",
          "Sensitive data raises the floor. Health records mean encryption, careful permission boundaries, and being deliberate about what leaves the device. Every sharing feature had to start from “who can see this, exactly” rather than adding permissions afterwards.",
          "Export that a doctor will actually read. A PDF of a family health history is only useful if it is scannable in the thirty seconds a physician has. That is a typography and information-hierarchy problem as much as a rendering one.",
        ],
      },
      outcome: {
        heading: "Outcome",
        body: ["Medicestry is live on the App Store and Google Play."],
      },
    },
    images: {
      card: "/assets/projects/medicestry.png",
      hero: "/assets/projects/medicestry.png",
      ogImage: DEFAULT_OG,
    },
    imageAlt: "Medicestry — family medical history app for iOS and Android",
  },

  {
    slug: "techifuze",
    name: "Techifuze",
    tagline: "Enterprise contract intelligence and vendor execution platform",
    summary:
      "A platform enterprises use to run outsourced services end to end — match a project to the right vendor, track it against milestones, catch schedule risk before it becomes a slipped deadline, and release payment when the work is signed off. A public marketing site fronts an authenticated product with separate client and admin applications behind it, kept live by a websocket layer.",
    category: "Platform",
    featured: false,
    order: 8,
    role: "Frontend Developer",
    platforms: ["Web", "Admin Dashboard"],
    year: "2026",
    status: "Production",
    stack: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "shadcn/ui",
      "TanStack Query",
      "Socket.IO",
      "Stripe",
      "JWT Auth",
      "REST APIs",
    ],
    highlights: [
      "Vendor matching & milestone tracking",
      "AI risk alerts on live projects",
      "Role-based client and admin dashboards",
      "Stripe subscription billing",
    ],
    links: {
      live: "https://techifuze.com/",
    },
    caseStudy: {
      context: {
        heading: "Context",
        body: [
          "Techifuze positions itself as an enterprise contract intelligence platform — its own framing is “the source of truth for execution, spend and accountability.” An enterprise scopes a project, is matched to vendors, tracks delivery against milestones, and pays out as work is signed off, all inside one system.",
          "The product has two halves. A public marketing site sells it — feature, platform, how-it-works and enterprise sections, a fourteen-day trial with no card required, and a SOC 2 badge in the trust row. Behind the sign-in are two separate applications: a client dashboard showing active projects, active vendors, total spend and on-time rate, and an admin console with its own routes and permissions.",
        ],
      },
      problem: {
        heading: "The problem",
        body: [
          "When a large company buys services, the truth about that work is split across three places that never agree. The contract says what was promised. Email, calls and spreadsheets hold what actually happened. Invoices move money on a schedule that reconciles to neither. By the time anyone notices a project is late, it has been late for weeks.",
          "So the platform's job is not project management — that market is full. It is closing the gap between the contract and reality fast enough to act on: surfacing a timeline deviation while there is still time to fix it, and tying payment release to a milestone actually being met rather than to an invoice date.",
          "That premise sets the frontend brief. If the dashboard is stale, the product is a spreadsheet with better typography. Freshness is not a nice-to-have here, it is the entire value proposition rendered on screen.",
        ],
      },
      contribution: {
        heading: "What I built",
        body: [],
        bullets: [
          "Built the product frontend in Next.js App Router and TypeScript, with Tailwind and a shadcn/ui component layer shared across the marketing site and both authenticated applications",
          "Implemented the real-time layer — a Socket.IO provider at the app root feeding live project state, milestone completions, payment releases and AI risk alerts into the dashboard without a refresh",
          "Built the authentication and routing guard: JWT-backed sessions restored from storage, role resolution, and a guard that routes admins and clients to their own dashboards and keeps each out of the other's routes before anything renders",
          "Wired server state through TanStack Query against the REST API, so the websocket feed and fetched data stay coherent instead of fighting each other",
          "Integrated Stripe subscription billing for the trial-to-paid conversion path",
          "Built the marketing site: animated hero with rotating headline, a live dashboard mock-up as the product shot, trust row, feature, platform, how-it-works and enterprise sections, and a full light/dark theme",
        ],
      },
      challenges: {
        heading: "Engineering challenges",
        body: [
          "Two sources of truth for the same screen. Every dashboard value arrives twice — once from a fetch, once from a socket event — and the two disagree constantly, because a payment can be released between the request and the response. Getting this right means treating the socket as an invalidation signal into the query cache rather than as a second store writing to the same UI. Get it wrong and the number on screen flickers between two values, which on a spend dashboard is worse than being slow.",
          "An auth guard is a rendering problem, not just a security one. Clients and admins share a codebase and a domain but must never see each other's routes. The check has to resolve the stored session, decode the token, read the role and redirect before the protected view paints — otherwise a client sees an admin screen for one frame, which is both a leak and a bug report. Doing that without a loading spinner on every navigation is the actual work.",
          "A marketing site that has to look expensive and load like it does not. The audience is enterprise procurement, so the front page carries an animated gradient headline, blurred ambient lighting and a full dashboard mock — and it is also the first thing a buyer judges the product's competence by. The resolution is keeping the heavy sections below the fold and out of the initial payload, so the hero is interactive long before the rest of the page has arrived.",
          "Shipping a trial that has to convert. Fourteen days, no card up front, then a Stripe subscription at the end of it. Subscription state has to stay correct through trial expiry, payment failure and re-subscription, because every one of those states changes what a logged-in user is allowed to see.",
        ],
      },
      outcome: {
        heading: "Outcome",
        body: [
          "Techifuze is live at techifuze.com with the marketing site, the free-trial signup path and both authenticated dashboards in production.",
        ],
      },
    },
    images: {
      card: "/assets/projects/techifuze.png",
      hero: "/assets/projects/techifuze.png",
      ogImage: DEFAULT_OG,
    },
    imageAlt:
      "Techifuze enterprise platform dashboard showing active projects, vendor spend and live risk alerts",
  },

  {
    slug: "athlete-to-mogul",
    name: "Athlete to Mogul",
    tagline: "Career transition platform for professional athletes",
    summary:
      "The front door for a program that helps professional athletes move from a sports career into business. It explains the programs, tells success stories, publishes insights, and routes visitors into either a booked call or the course platform.",
    category: "Web",
    featured: false,
    order: 9,
    role: "Frontend Developer",
    platforms: ["Web"],
    year: "2025 – 2026",
    status: "Production",
    stack: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
    highlights: [
      "Mentorship & program pages",
      "Blog / insights system",
      "Calendly booking flow",
      "LMS hand-off",
    ],
    links: {
      live: "https://athletetomogul.com/",
    },
    caseStudy: {
      context: {
        heading: "Context",
        body: [
          "Athlete to Mogul helps professional athletes move from a sports career into business — mentorship with former athletes who made the same jump, a business playbook of courses and workshops, private networking events and career placement support.",
          "The site is the front door: it explains the programs, tells success stories, publishes insights, and routes people into either a booked call or the course platform.",
        ],
      },
      problem: {
        heading: "The problem",
        body: [
          "The audience is unusual. Athletes at a career turning point are not browsing at a desk — they are on a phone, they are skeptical of anything that smells like a course-seller, and they respond to people rather than feature lists.",
          "The site had to feel credible to someone whose whole career has been managed by people selling them something, and it had to move a visitor to a booked conversation quickly, since the actual product is human.",
        ],
      },
      contribution: {
        heading: "What I built",
        body: [],
        bullets: [
          "Built the marketing and program site in Next.js: services, sponsors and partners, success stories, about, community and FAQ",
          "Built the blog and insights system with listing and article pages",
          "Implemented the conversion path — Calendly booking integration for registrations and consultations, and hand-off to the external course platform for existing members",
          "Built the team section, sponsor marquee, newsletter subscription, FAQ accordion and video hero",
        ],
      },
      challenges: {
        heading: "Engineering challenges",
        body: [
          "Two audiences, one homepage. A prospective member and an enrolled member need different things from the same page. The navigation had to serve “convince me” and “let me in” without either one cluttering the other.",
          "Handing off to systems you do not control. Login goes to an external LMS, registration goes to Calendly, and the privacy policy is hosted elsewhere. Making three third-party surfaces feel like one product is mostly a consistency problem — and a fragility problem, since none of them are yours.",
        ],
      },
      outcome: {
        heading: "Outcome",
        body: [
          "The site is live and in use as the program's primary acquisition channel.",
        ],
      },
    },
    images: {
      card: "/assets/projects/athlete-to-mogul.png",
      hero: "/assets/projects/athlete-to-mogul.png",
      ogImage: DEFAULT_OG,
    },
    imageAlt:
      "Athlete to Mogul — career transition platform for professional athletes",
  },
];

/** Display order everywhere on the site. */
export const projects: Project[] = [...allProjects].sort(
  (a, b) => a.order - b.order
);

export const featuredProjects = projects.filter((p) => p.featured);

export function getProject(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

/** Prev/next in display order, wrapping at both ends. */
export function getProjectNeighbours(slug: string) {
  const index = projects.findIndex((p) => p.slug === slug);
  if (index === -1) return { prev: undefined, next: undefined };

  return {
    prev: projects[(index - 1 + projects.length) % projects.length],
    next: projects[(index + 1) % projects.length],
  };
}

export function hasCaseStudyContent(project: Project): boolean {
  if (!project.caseStudy) return false;
  return Object.values(project.caseStudy).some(
    (section) =>
      section && (section.body.length > 0 || (section.bullets?.length ?? 0) > 0)
  );
}

export const caseStudySectionOrder = [
  "context",
  "problem",
  "contribution",
  "challenges",
  "outcome",
] as const;
