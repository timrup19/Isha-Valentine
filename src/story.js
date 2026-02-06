// Story data for the Valentine's Day adventure
// Edit this file to change the story content

export const story = {
  S1_START: {
    id: "S1_START",
    title: "Secret Adventure",
    text: [
      "Congrats! 🎉",
      "You've stumbled into a secret little adventure.",
      "All you need to begin is a great big smile — teeth and everything 😁"
    ],
    choices: [
      { label: "Okay fine 😄", next: "S2_FLASHBACK" },
      { label: "I'm smiling, I swear", next: "S2_FLASHBACK" }
    ]
  },

  S2_FLASHBACK: {
    id: "S2_FLASHBACK",
    text: [
      "Before we continue… a quick flashback.",
      "It's late. We're saying goodnight.",
      "Brunch plans for the next day are being discussed.",
      "You wanted to meet at 10am.",
      "I wanted 1pm.",
      "So naturally… I suggested 11:35.",
      "This somehow turned into our first real argument.",
      "And honestly? That kind of sums us up pretty well."
    ],
    choices: [
      { label: "11:35 was still valid 😌", next: "S2_CONVERGE" },
      { label: "I will defend 10am forever 😤", next: "S2_CONVERGE" }
    ]
  },

  S2_CONVERGE: {
    id: "S2_CONVERGE",
    text: [
      "No winners. No losers.",
      "Just two people being stubborn… and somehow laughing about it later."
    ],
    choices: [
      { label: "Continue 💕", next: "S3_SOFT_TURN" }
    ]
  },

  S3_SOFT_TURN: {
    id: "S3_SOFT_TURN",
    text: [
      "Jokes aside for a second…",
      { text: "There's something I really love about you.", emphasis: true },
      "You care about every little detail.",
      "Sometimes that means you notice everything I do.",
      "Even the things I wish you wouldn't notice.",
      "But it also means you remember things deeply.",
      "You pick up on emotions other people miss.",
      "You always seem to know the right thing to say.",
      { text: "You make the people around you feel cared for — and loved.", emphasis: true }
    ],
    choices: [
      { label: "Okay… continue 🥺", next: "S4_PICK_MEMORY" }
    ]
  },

  S4_PICK_MEMORY: {
    id: "S4_PICK_MEMORY",
    text: [
      "Okay, your turn.",
      "Pick the moment that still makes you laugh."
    ],
    choices: [
      { label: "The 11:35 debate 😌", next: "S4_1135" },
      { label: "The banana bread incident 🍌", next: "S4_BANANA" },
      { label: "There are too many", next: "S4_TOOMANY" }
    ]
  },

  S4_BANANA: {
    id: "S4_BANANA",
    text: [
      "Correct answer.",
      "We made banana bread, offered some upstairs…",
      "and somehow ended up imagining the ceiling collapsing.",
      "\"Oh, Aritra! You brought her down to say thank you!\"",
      "Honestly… I love that we laugh like this together."
    ],
    choices: [
      { label: "Continue 💕", next: "S5_FUTURE_HINT" }
    ]
  },

  S4_1135: {
    id: "S4_1135",
    text: [
      "Also valid.",
      "But let's be honest — banana bread chaos deserves its own category.",
      "\"Oh, Aritra! You brought her down to say thank you!\"",
      "Honestly… I love that we laugh like this together."
    ],
    choices: [
      { label: "Continue 💕", next: "S5_FUTURE_HINT" }
    ]
  },

  S4_TOOMANY: {
    id: "S4_TOOMANY",
    text: [
      "Fair.",
      "But some moments deserve to be immortalized.",
      "\"Oh, Aritra! You brought her down to say thank you!\"",
      "Honestly… I love that we laugh like this together."
    ],
    choices: [
      { label: "Continue 💕", next: "S5_FUTURE_HINT" }
    ]
  },

  S5_FUTURE_HINT: {
    id: "S5_FUTURE_HINT",
    text: [
      "What I'm most excited about…",
      "is going through life together.",
      "The highs.",
      "The lows.",
      "The late nights.",
      "The moments we didn't plan for.",
      "Watching you get through med school.",
      "Chasing my dream job.",
      "Growing, learning, figuring things out — side by side."
    ],
    choices: [
      { label: "Keep going 🤍", next: "S6_SINCERE_PAUSE" }
    ]
  },

  S6_SINCERE_PAUSE: {
    id: "S6_SINCERE_PAUSE",
    text: [
      { text: "I see a future where we build something real.", emphasis: true },
      "A life we're proud of.",
      "A home by the water.",
      "A chaotic, beautiful wedding week.",
      "A family that feels full of love.",
      { text: "Mostly… I'm excited about growing together — and choosing each other through it all.", emphasis: true }
    ],
    choices: [
      { label: "Okay… 🥺", next: "S7_QUESTION" }
    ]
  },

  S7_QUESTION: {
    id: "S7_QUESTION",
    text: [
      "So…",
      "I guess this brings me to the obvious question.",
      "",
      { text: "Will you be my Valentine?", emphasis: true }
    ],
    choices: [
      { label: "Yes 💖", next: "S8_YES" },
      { label: "Obviously 💕", next: "S8_YES" }
    ]
  },

  S8_YES: {
    id: "S8_YES",
    text: [
      "Best decision ever.",
      "Screenshot this and send it to me 😌💘"
    ],
    choices: [
      { label: "Restart 🔁", next: "S1_START" }
    ]
  }
};

// Get total number of scenes for progress tracking
export const getTotalScenes = () => {
  return Object.keys(story).length;
};

// Get scene number (for progress display)
export const getSceneNumber = (sceneId) => {
  const sceneIds = Object.keys(story);
  return sceneIds.indexOf(sceneId) + 1;
};
