/*
  ============================================================
  PROJECTS — edit this file to update the site.
  ============================================================
  Fields: title, summary, disciplines ("cs" | "data" | "narr"), tags,
  image (16:9, optional — otherwise a gradient with `glyph`), featured,
  year, role, details (bullets), links ({ label: url }).
*/
window.PROJECTS = [
  {
    title: "S.P.I.E.S. — Alternate Reality Game",
    summary: "A Pittsburgh-wide ARG where players crack physical and digital puzzles and talk with A.R.T.I., an AI agent guarding a secret society's archives.",
    disciplines: ["narr", "cs"],
    tags: ["JavaScript", "Firebase", "Express", "Gemini API", "Game design"],
    image: "images/spies.jpg",
    featured: true,
    year: "2026",
    role: "Implementation and Game Designer",
    details: [
      "Premise: the Secret Pittsburgh Innovation and Engineering Society was driven underground by its rival V.E.I.L. and hid its knowledge in creative spaces across the city. Players piece the society's history back together.",
      "Players sign in to an in-world database terminal and unlock FOUNDING, OPERATIONS and INTEL archives by solving puzzles that mix physical and digital pieces: postcard ciphers, a folding card, a camera-overlay color code, playlists, NFC tags and a live in-person actor.",
      "A.R.T.I., a Gemini-powered chatbot with a sassy, cryptic personality, guides players. Access codes are checked on the server, not by the model, so the chatbot can't be talked into giving away answers.",
      "Moved the standalone Express server onto Firebase Cloud Functions with Hosting rewrites, and set up hosting, Firestore player progress and pull-request preview deploys.",
      "Built several puzzles and their solution flows: the folding puzzle, the word-search reveal, the Fluxspace color-code pages and the MCG puzzle.",
      "Ran a 4-day pilot, then redesigned and rebuilt the game for its second iteration based on what we learned."
    ],
    links: {}
  },
  {
    title: "RAG Knowledge Base for Bank Ticketing",
    summary: "A retrieval-augmented knowledge base inside a support-ticket dashboard for a leading regional bank, built during my CGI internship.",
    disciplines: ["cs", "data"],
    tags: ["PostgreSQL", "pgvector", "FastAPI", "React", "Claude API", "Docker"],
    image: "images/CGI.jpg",
    featured: "true",
    glyph: "RAG",
    year: "2026",
    role: "Full Stack Software Engineering Intern, CGI",
    details: [
      "Designed a PostgreSQL + pgvector schema that stores and queries embeddings for both documents and tickets.",
      "Built an ingestion pipeline with FastAPI and Docling that parses, chunks and summarizes uploaded files using Anthropic's Claude API.",
      "Developed a React dashboard with interactive tiles and side panels that put the relevant document information next to each ticket.",
      "Containerized the full stack with Docker and Rancher Desktop so every developer ran the same local setup.",
      "Client work, so no code or screenshots can be shared."
    ],
    links: {}
  },
  {
    title: "Radium Girls — Projection Clock Show Controller",
    summary: "A Unity show-control system that drives a projection-mapped clock set piece for a live theatre production.",
    disciplines: ["cs", "narr"],
    tags: ["C#", "Unity 6", "Projection mapping", "Theatre tech"],
    image: "images/radiumgirls.jpg",
    year: "2026",
    role: "Sole developer",
    details: [
      "Every action is a text command (clock/set 11:59:50, media/play 4, calibrate/save) routed through one controller. The keyboard, the operator UI and a command line all use the same path, and the router is thread-safe so a Stream Deck can be added later.",
      "An A/B media engine preloads the next cue, then cuts or crossfades into it and holds the last frame of each video, so the clock face never goes black during the show.",
      "Calibration mode moves, scales and rotates each mapped region and shows test patterns for alignment. Settings are saved per venue, and the operator preview matches the projector output pixel for pixel.",
      "The clock keeps its own time, so it can start, stop or jump to any moment on cue. The hands tick with a slight overshoot for a mechanical feel.",
      "Built-in safeguards for live use, such as a double-confirm quit, so a stray keypress can't end the show."
    ],
    links: { "Code": "https://github.com/NatGold11/RadiumGirls_ShowController" }
  },
  {
    title: "HeritageRoots — 360° Cultural Explorer",
    summary: "An educational web experience that lets K-12 students explore Indigenous cultures through interactive 360° panoramas.",
    disciplines: ["cs", "narr"],
    tags: ["JavaScript", "Pannellum", "HTML / CSS", "Research"],
    image: "images/heritageroots.jpg",
    featured: true,
    year: "2026",
    role: "Technical design team member, University of Pittsburgh research project",
    details: [
      "Built the 360° tour: linked panoramic scenes with fade transitions and narrated voice-over.",
      "Custom hotspots on cultural objects (a bowl, manioc root, chonta bundle, blowgun dart case) open info panels with images and video, and they keep working in fullscreen.",
      "Prototyped a drag-and-drop authoring tool so non-programmers can place hotspots and rebuild scenes without editing code.",
      "Delivered weekly milestones with a team of developers and a supervising professor."
    ],
    links: { "Code": "https://github.com/NatGold11/HeritageRoot-360-Website" }
  },
  {
    title: "Hunger Games: Survive the Arena",
    summary: "A 2D top-down roguelike shooter: survive escalating waves as Katniss and choose a sponsor gift after every round.",
    disciplines: ["narr", "cs"],
    tags: ["Unity", "C#", "Game design"],
    image: "images/hungergames.jpg",
    year: "2025",
    role: "Lead programmer (team of 2): built movement, combat, enemy AI, power-ups and difficulty scaling",
    details: [
      "Core systems: movement and collision, bow combat, dash, enemy chase AI with three enemy types and attack patterns, and health bars.",
      "Run-based progression: after each round, pick one of three power-ups drawn from a pool of items from the books (Healing Ointment, Loaf of Bread, Quiver…). Parachute sponsor drops reward players who catch them.",
      "Difficulty scales each round up to a final round 16, balanced against how much the player's upgrades add.",
      "Built feature by feature on separate Git branches (dash, power-ups, difficulty scaling, health bars) and merged with a teammate."
    ],
    links: {
      "Play on itch.io": "https://natality.itch.io/hunger-games-survive-the-arena",
      "Code": "https://github.com/NatGold11/hungerGamesRougelike"
    }
  },
  {
    title: "NoMoreWhen2Meet",
    summary: "A Python tool that fills out When2Meet polls for you from your Google Calendar, because I hate filling out When2Meets.",
    disciplines: ["cs", "data"],
    tags: ["Python", "Playwright", "Google Calendar API", "BeautifulSoup"],
    image: "images/when2meet.jpg",
    glyph: "✓ 15m",
    year: "2026",
    role: "Solo developer",
    details: [
      "Scrapes the poll's time-slot grid by parsing the page's slot IDs and timestamps.",
      "Pulls events from every calendar you own through the Google Calendar API, using OAuth with a cached, auto-refreshing token.",
      "Snaps events to When2Meet's 15-minute grid, skips all-day events and converts time zones, then works out which slots you're free.",
      "Drives headless Chromium with Playwright to sign in to the poll and click every free slot, with a progress bar in the terminal.",
      "Keeps secrets (credentials, tokens, .env) out of version control."
    ],
    links: { "Code": "https://github.com/NatGold11/NoMoreWhen2Meet" }
  },
  {
    title: "CourseIQ",
    summary: "A crowdsourced hub where students compare course workload, difficulty and grading before they register. Software engineering team project.",
    disciplines: ["cs", "data"],
    tags: ["Scrum", "Requirements engineering", "Agile"],
    glyph: "IQ",
    year: "2026",
    role: "Scrum Master (team of 4)",
    details: [
      "Leads sprint ceremonies and coordination for a four-person team (developers and a product owner).",
      "Wrote the product backlog: 10 user stories across two epics (account access and dashboard, course discovery), each with acceptance criteria.",
      "Mapped each story to a functional or non-functional requirement (e.g. university SSO sign-in, dashboard loads in under 2 s) and prioritized them with MoSCoW to define the MVP.",
      "In progress: implementation begins this semester."
    ],
    links: { "Repo": "https://github.com/cjt-118/CourseIQ" }
  }
];
