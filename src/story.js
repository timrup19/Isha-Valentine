// Story data for the Valentine's Day adventure
// Edit this file to change the story content

export const story = {
  S1_START: {
    id: "S1_START",
    title: "Secret Adventure",
    text: [
      "Congrats! 🎉",
      "You've stumbled into a secret little adventure.",
      "All you need to begin is a great big smile! And I mean with teeth and everything 😁"
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
      "We're discussing brunch plans for the next day.",
      "You wanted to meet at 10am.",
      "I wanted 1pm.",
      "So naturally… I suggested 11:35 (I wanted to sleep in).",
      "This somehow turned into our first real argument.",
      "And hey? Doesn't that kind of sum us up pretty well?"
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
      "Just us being stubborn… and now we get to laugh about it togehther."
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
      { text: "You make the people around you feel cared for and loved.", emphasis: true }
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
      { label: "The banana bread incident 🍌", next: "S4_BANANA" },
      { label: "Blippy 😳�", next: "S4_BLIPPY" },
      { label: "Oh govna… 😌", next: "S4_GOVNA" }
    ]
  },

  S4_BANANA: {
    id: "S4_BANANA",
    text: [
      "Correct answer.",
      "We made banana bread, offered some upstairs…",
      "and somehow spent the rest of the night imagining the ceiling collapsing.",
      "\"Oh, Aritra! You brought her down to say thank you!\"",
      "I still laugh every time I think about it.",
      "Even more when I remember this wasn't the only time our surroundings betrayed us…",
      "Like Blippy casually circling the window.",
      "Or us slipping into our political personas.",
      "Honestly… I love that we laugh like this together."
    ],
    choices: [
      { label: "Continue 💕", next: "S5_FUTURE_HINT" }
    ]
  },

  S4_BLIPPY: {
    id: "S4_BLIPPY",
    text: [
      "Blippy… of course.",
      "Just us, minding our business in the privacy of our room.",
      "And somehow the Goodyear blimp kept circling like it knew what we were doing...",
      "Every time it drifted past the window we'd panic and laugh.",
      "\"Oh my god — Blippy's coming back for us.\"",
      "And somehow it always did.",
      "Which honestly fits the pattern.",
      "Ceilings threatening to collapse during banana bread.",
      "Ridiculous political personas we commit to way too hard.",
      "Even the universe can't help but get involved in our chaos.",
      "I love that we laugh like this together."
    ],
    choices: [
      { label: "Continue 💕", next: "S5_FUTURE_HINT" }
    ]
  },

  S4_GOVNA: {
    id: "S4_GOVNA",
    text: [
      "Oh govna…",
      "Somehow we turned absolute nonsense into an entire political universe.",
      "You — the mayor.",
      "Me — the governor.",
      "Completely unserious. Completely committed.",
      "I still don't know how we keep a straight face long enough to do that.",
      "But honestly… that's kind of our thing.",
      "From imaginary politics",
      "to blimps outside the window",
      "to banana bread incidents that live rent-free in my head.",
      "I love how we make even the dumbest moments feel special."
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
      "A beautiful wedding week.",
      "A home by the water in Long Island.",
      "A family that feels full of love.",
      { text: "But most importantly… I'm excited about growing together and choosing each other through it all.", emphasis: true }
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
      "Take a selfie of your reaction and send it to me 😌💘"
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
