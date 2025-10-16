// Scene4-specific animations and effects
const scene4 = document.querySelector(".scene4");

// Create a timeline for the entire scene animation
const scene4Timeline = gsap.timeline({
  scrollTrigger: {
    trigger: scene4,
    scrub: 0.3,
    pin: true,
  },
});

// Animate the content on scroll
scene4Timeline
  .to(
    ".scene4 .layer-tree",
    {
      duration: 4,
      opacity: 1,
      ease: "power2.out",
    },
    ">"
  )
  .to(
    [".scene4 .layer-barrel", ".scene4 .layer-trash-bag"],
    {
      duration: 4,
      opacity: 1,
      ease: "power2.out",
    },
    ">"
  )
  .to(
    ".scene4 .layer-eyes-3",
    {
      duration: 4,
      opacity: 1,
      ease: "power2.out",
    },
    ">"
  )
  .to(
    ".scene4 .layer-eyes-1",
    {
      duration: 4,
      opacity: 1,
      ease: "power2.out",
    },
    ">"
  )
  .to(
    ".scene4 .layer-eyes-4",
    {
      duration: 4,
      opacity: 1,
      ease: "power2.out",
    },
    ">"
  )
  .to(
    ".scene4 .layer-eyes-2",
    {
      duration: 4,
      opacity: 1,
      ease: "power2.out",
    },
    ">"
  )
  .to(
    [
      ".scene4 .layer-body-1",
      ".scene4 .layer-body-2",
      ".scene4 .layer-body-3",
      ".scene4 .layer-body-4",
      ".scene4 .layer-trash-1",
      ".scene4 .layer-trash-3",
      ".scene4 .layer-trash-5",
      ".scene4 .layer-trash-6",
      ".scene4 .layer-trash-7",
      ".scene4 .layer-ground",
    ],
    {
      duration: 8,
      opacity: 1,
      ease: "power2.out",
    },
    ">"
  );
