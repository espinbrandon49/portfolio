export const projects = [
  {
    name: "Beaconry",
    description:
      "Real-time broadcast system for delivering one-way announcements to subscribed users with strict access control.",
    stack: ["React", "Node.js", "Express", "MongoDB", "Mongoose", "Socket.io"],
    highlights: [
      "Session-based authentication with role-gated broadcaster actions",
      "Subscription-scoped feed ensures users only receive relevant channel updates",
      "Real-time delivery via Socket.io with per-channel room isolation",
      "REST API with clear separation of auth, channels, subscriptions, and broadcasts",
      "MongoDB schema design with indexed queries for fast feed retrieval"
    ],
    demo: "https://beaconry-5423965f3fe8.herokuapp.com/",
    github: "https://github.com/espinbrandon49/Beaconry"
  },
  {
    name: "Narratorium",
    description:
      "Real-time collaborative storytelling app with tokenized state and server-controlled write windows.",
    stack: ["Node.js", "Express", "Socket.io", "Sequelize", "MySQL", "Express Session"],
    highlights: [
      "Token-based story state with ordered, immutable positions",
      "Real-time updates via Socket.io with room-based broadcasting",
      "Session-based authentication shared between HTTP and sockets",
      "Server-authoritative time window ('The Opening') controls write access",
      "Append-only event model with bounded story window for performance"
    ],
    demo: "https://narratorium-e41b5a6a7718.herokuapp.com/",
    github: "https://github.com/espinbrandon49/narratorium-enchanted"
  },
  {
    name: "Hack-A-Thought",
    description:
      "Full-stack blogging platform with authentication, post creation, and comment system built on a structured API layer.",
    stack: ["React", "Node.js", "Express", "Sequelize", "MySQL", "Axios"],
    highlights: [
      "Session-based authentication with protected routes and persistent login state",
      "REST API with standardized success/error response contract",
      "Relational data model linking users, blogs, and comments",
      "Centralized HTTP client layer with normalized API error handling",
      "CRUD operations for blogs with ownership enforcement and comment system"
    ],
    demo: "https://hack-a-thought-473618422e58.herokuapp.com/",
    github: "https://github.com/espinbrandon49/Hack-A-Thought"
  },
  {
    name: "GlobeMaster",
    description:
      "Geography quiz app with session persistence, backend answer validation, and leaderboard tracking.",
    stack: ["React", "Flask", "PostgreSQL", "SQLAlchemy", "Vite"],
    highlights: [
      "End-to-end question-answer loop with backend validation (no correct answers exposed to frontend)",
      "Session persistence using localStorage with resume capability",
      "Player profiles with difficulty preferences and category-based question selection",
      "Leaderboard API for top session scores",
      "RESTful backend with modular route structure (players, sessions, questions, metadata)"
    ],
    demo: "https://globemaster-bcaf42abf3ef.herokuapp.com/",
    github: "https://github.com/espinbrandon49/globemaster"
  },
  {
    name: "SwapMeetReact",
    description:
      "Multi-user marketplace API supporting categories, products, tags, and cart management with relational data modeling.",
    stack: ["Node.js", "Express", "MySQL", "Sequelize", "JWT"],
    highlights: [
      "Relational data model with users, categories, products, tags, and carts using Sequelize ORM",
      "RESTful API with modular route structure for users, products, categories, tags, and cart operations",
      "JWT-based authentication middleware for protected routes",
      "MySQL database connection managed via environment configuration and Sequelize instance",
      "Seeded multi-user dataset demonstrating cross-user cart functionality"
    ],
    demo: "https://swapmeetreact-ad48473e0ba5.herokuapp.com/",
    github: "https://github.com/espinbrandon49/Swap-Meet-React"
  }
];