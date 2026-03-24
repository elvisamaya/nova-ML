import React, { useMemo, useState } from "react";

const stages = [
  {
    id: 1,
    world: "Data World",
    color: "#59d0ff",
    title: "Meet the Training Images",
    subtitle: "Machines learn from examples.",
    iconType: "image",
    lesson:
      "Captain Nova lands on Data World, where thousands of image cards drift through orbit. Every signal, snapshot, and label becomes part of the map the machine will use to begin recognizing patterns.",
    simple:
      "The computer studies many pictures so it can start noticing what makes one thing different from another.",
    ideas: [
      "Data is the information we teach from",
      "More examples usually help learning",
      "Labels tell the computer the right answer",
    ],
    mission: {
      prompt: "Which option best describes training data?",
      options: [
        "A collection of labeled examples the computer learns from",
        "A summary of how well the model performed at the end",
        "A set of rules the computer writes before seeing any examples",
      ],
      answer: 0,
      success:
        "Checkpoint cleared. The mission log confirms that training data is the collection of examples the machine learns from.",
    },
  },
  {
    id: 2,
    world: "Augmentia",
    color: "#ff73c7",
    title: "Shape-Shifting Practice",
    subtitle: "The same image can appear in new ways.",
    iconType: "sparkle",
    lesson:
      "On Augmentia, the landscape never looks the same twice. Images flip, shift, and brighten beneath Captain Nova’s path, teaching the system how to stay steady even when the view changes.",
    simple:
      "We slightly change pictures during training so the computer does not get confused when things look different later.",
    ideas: [
      "Flip: an image can face the other way",
      "Crop: we zoom in a little",
      "Brightness changes: lighting is not always the same",
    ],
    mission: {
      prompt: "Why do we transform images during training?",
      options: [
        "To make the dataset larger without collecting all-new pictures",
        "To help the model handle variations it may see later",
        "To remove the need for testing on new examples",
      ],
      answer: 1,
      success:
        "Checkpoint cleared. The system now knows that transformed examples help it handle new situations.",
    },
  },
  {
    id: 3,
    world: "Brain Forge",
    color: "#8e7cff",
    title: "Build the AI Brain",
    subtitle: "Layers learn small things, then bigger things.",
    iconType: "brain",
    lesson:
      "Inside Brain Forge, Captain Nova watches the machine’s inner layers awaken. First they catch edges and tiny details, then shapes, then whole objects, assembling meaning piece by piece.",
    simple:
      "The computer learns small patterns first, then combines them to understand bigger patterns.",
    ideas: [
      "Early layers find edges and textures",
      "Middle layers combine shapes",
      "Later layers make a final guess",
    ],
    mission: {
      prompt: "What might an early neural network layer detect first?",
      options: [
        "Edges and simple visual patterns",
        "The full meaning of the image all at once",
        "Whether the final prediction will be correct",
      ],
      answer: 0,
      success:
        "Checkpoint cleared. Early layers are strongest at spotting simple visual patterns first.",
    },
  },
  {
    id: 4,
    world: "Training Arena",
    color: "#ffae42",
    title: "Learn Through Mistakes",
    subtitle: "Guess, check, improve, repeat.",
    iconType: "target",
    lesson:
      "In the Training Arena, the machine makes a prediction, compares it to the truth, and adjusts course. Captain Nova records each correction as part of the system’s long climb toward better decisions.",
    simple:
      "The computer guesses, checks if it was wrong, and then tries to improve the next time.",
    ideas: [
      "A prediction is the model's guess",
      "Loss tells us how wrong the guess was",
      "Training updates the model to improve future guesses",
    ],
    mission: {
      prompt: "What does loss tell us?",
      options: [
        "How far the model’s prediction was from the correct answer",
        "How many examples were used during training",
        "Whether the model has finished learning forever",
      ],
      answer: 0,
      success:
        "Checkpoint cleared. Loss measures how far the system was from the correct answer.",
    },
  },
  {
    id: 5,
    world: "Test Zone",
    color: "#6fe88b",
    title: "Try New Examples",
    subtitle: "A model must do well on things it has not seen before.",
    iconType: "check",
    lesson:
      "At Test Zone, Captain Nova leaves the training route behind and opens a new gate. The machine must now prove what it understands by facing examples it has never seen before.",
    simple:
      "We test the computer on new pictures to see whether it really learned the pattern.",
    ideas: [
      "Testing uses new examples",
      "Accuracy tells us how often the model is right",
      "Good learning means doing well on unseen data",
    ],
    mission: {
      prompt: "Why do we use a test set?",
      options: [
        "To measure how well the model works on fresh examples",
        "To give the model one more round of hidden training",
        "To replace the need for labeled training data",
      ],
      answer: 0,
      success:
        "Checkpoint cleared. A test set shows how well the system works on fresh examples.",
    },
  },
  {
    id: 6,
    world: "Insight Galaxy",
    color: "#5b8cff",
    title: "Watch the Progress",
    subtitle: "Graphs help us see learning over time.",
    iconType: "chart",
    lesson:
      "In Insight Galaxy, the mission graphs light up. Captain Nova studies how error falls and performance rises, reading the story of the machine’s progress across the stars.",
    simple:
      "We watch the machine’s scores over time to see whether it is getting better.",
    ideas: [
      "Loss usually decreases as training improves",
      "Accuracy usually increases when the model learns",
      "Charts help us spot progress and problems",
    ],
    mission: {
      prompt: "If training is going well, what usually happens?",
      options: [
        "Loss goes down while accuracy improves over time",
        "Accuracy stays flat because learning only shows up after testing",
        "Loss goes up because the model is exploring more possibilities",
      ],
      answer: 0,
      success:
        "Final checkpoint cleared. Lower loss and higher accuracy usually mean the model is learning well.",
    },
  },
];

function Stars() {
  const stars = useMemo(
    () =>
      Array.from({ length: 110 }, (_, i) => ({
        id: i,
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        size: Math.random() > 0.85 ? 6 : 4,
        plus: Math.random() > 0.7,
        opacity: 0.5 + Math.random() * 0.4,
      })),
    []
  );

  return (
    <div style={{ position: "absolute", inset: 0, pointerEvents: "none", overflow: "hidden" }}>
      {stars.map((s) =>
        s.plus ? (
          <div
            key={s.id}
            style={{
              position: "absolute",
              left: s.left,
              top: s.top,
              width: s.size,
              height: s.size,
              opacity: s.opacity,
            }}
          >
            <div
              style={{
                position: "absolute",
                left: "50%",
                top: 0,
                transform: "translateX(-50%)",
                width: 2,
                height: "100%",
                background: "#fff",
              }}
            />
            <div
              style={{
                position: "absolute",
                top: "50%",
                left: 0,
                transform: "translateY(-50%)",
                height: 2,
                width: "100%",
                background: "#fff",
              }}
            />
          </div>
        ) : (
          <div
            key={s.id}
            style={{
              position: "absolute",
              left: s.left,
              top: s.top,
              width: s.size,
              height: s.size,
              background: "#fff",
              opacity: s.opacity,
            }}
          />
        )
      )}
    </div>
  );
}

function PixelPlanet({ ocean = "#4ca8ff", land = "#6ad34d" }) {
  const planetPixels = [
    "....................",
    ".......OOOOOO.......",
    ".....OOOOOOOOOO.....",
    "...OOOOOOOOOOOOOO...",
    "..OOOOLLOOOOOOOOOO..",
    "..OOLLLLLLOOOOOOOOO.",
    ".OOOOLLLLLOOOOOOOOO.",
    ".OOOOOLLLLOOOOOOOOO.",
    ".OOOOOOOOOOOOOOOOOO.",
    ".OOOOOOOOOOOOOOOOOO.",
    ".OOOOOOOOOOOOLLLOO..",
    ".OOOOOOOOOOLLLLLOO..",
    "..OOOOOOOOOLLLLOO...",
    "..OOOOOOOOOOOLLOO...",
    "...OOOOOOOOOOOOOO...",
    ".....OOOOOOOOOO.....",
    ".......OOOOOO.......",
  ];

  const colorMap = {
    O: ocean,
    L: land,
    ".": "transparent",
  };

  const pixel = 18;
  const cols = planetPixels[0].length;

  return (
    <div
      style={{
        position: "absolute",
        left: -40,
        bottom: -70,
        width: cols * pixel,
        opacity: 0.95,
        pointerEvents: "none",
        imageRendering: "pixelated",
        zIndex: 0,
      }}
    >
      {planetPixels.map((row, r) => (
        <div key={r} style={{ display: "flex", height: pixel }}>
          {row.split("").map((cell, c) => (
            <div
              key={c}
              style={{
                width: pixel,
                height: pixel,
                background: colorMap[cell],
              }}
            />
          ))}
        </div>
      ))}
    </div>
  );
}

function PixelPanel({ children, accent = "#fff", style = {} }) {
  return (
    <div
      style={{
        background: "#050505",
        border: `4px solid ${accent}`,
        boxShadow: `8px 8px 0 rgba(255,255,255,0.08)`,
        padding: 20,
        ...style,
      }}
    >
      {children}
    </div>
  );
}

function PixelWorldIcon({ type, color }) {
  const size = 34;
  const cell = 4;

  const patterns = {
    image: [
      "..111111..",
      ".1......1.",
      ".1.2222.1.",
      ".1.2..2.1.",
      ".1.2222.1.",
      ".1......1.",
      "..111111..",
      ".....3....",
      "....333...",
      "...33333..",
    ],
    sparkle: [
      "....1.....",
      "....1.....",
      "..1.1.1...",
      "...111....",
      "111111111.",
      "...111....",
      "..1.1.1...",
      "....1.....",
      "....1.....",
      "..........",
    ],
    brain: [
      "..111111..",
      ".12222121.",
      "1222222212",
      "1221222212",
      "1222222212",
      ".12222121.",
      "..112211..",
      "..1.11.1..",
      "..1....1..",
      "..........",
    ],
    target: [
      "..111111..",
      ".12222221.",
      "1221111221",
      "1212222121",
      "1212122121",
      "1212222121",
      "1221111221",
      ".12222221.",
      "..111111..",
      ".....1....",
    ],
    check: [
      "..........",
      "........1.",
      ".......11.",
      "..1...111.",
      "..11.111..",
      "...1111...",
      "....11....",
      "..........",
      "..........",
      "..........",
    ],
    chart: [
      "..........",
      ".1......1.",
      ".1....221.",
      ".1..22221.",
      ".1222..21.",
      ".12....21.",
      ".11111111.",
      "..........",
      "..........",
      "..........",
    ],
  };

  const palette = {
    "1": color,
    "2": "#ffffff",
    "3": "#7aff9a",
    ".": "transparent",
  };

  const pattern = patterns[type] || patterns.image;

  return (
    <div
      style={{
        width: size + 8,
        height: size + 8,
        background: "#000",
        border: `3px solid ${color}`,
        display: "grid",
        placeItems: "center",
        flexShrink: 0,
      }}
    >
      <div>
        {pattern.map((row, r) => (
          <div key={r} style={{ display: "flex", height: cell }}>
            {row.split("").map((ch, c) => (
              <div
                key={c}
                style={{
                  width: cell,
                  height: cell,
                  background: palette[ch],
                }}
              />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

function PixelCaptainNova() {
  const pattern = [
    "......1111......",
    ".....122221.....",
    "....12222221....",
    "....12222221....",
    ".....133331.....",
    "....44444444....",
    "...4444554444...",
    "...4444554444...",
    "....44444444....",
    ".....66..66.....",
    "....666..666....",
    "...6666..6666...",
    "...77......77...",
    "..777......777..",
  ];

  const palette = {
    "1": "#ffffff",
    "2": "#d9b08c",
    "3": "#1e90ff",
    "4": "#ff6b6b",
    "5": "#59d0ff",
    "6": "#8e7cff",
    "7": "#ffffff",
    ".": "transparent",
  };

  const cell = 8;

  return (
    <div style={{ imageRendering: "pixelated" }}>
      {pattern.map((row, r) => (
        <div key={r} style={{ display: "flex", height: cell }}>
          {row.split("").map((ch, c) => (
            <div
              key={c}
              style={{
                width: cell,
                height: cell,
                background: palette[ch],
              }}
            />
          ))}
        </div>
      ))}
    </div>
  );
}
