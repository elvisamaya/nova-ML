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
