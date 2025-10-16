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
  )
  .to(
    ".scene4 .layer-text",
    {
      duration: 2,
      opacity: 1,
      transform: "translateX(0) translateY(0)",
      ease: "power2.out",
    },
    ">"
  );

const scene4_1 = document.querySelector(".scene4-1");

const scene4_1Timeline = gsap.timeline({
  scrollTrigger: {
    trigger: scene4_1,
    scrub: 0.3,
    pin: true,
  },
});

scene4_1Timeline
  .to(
    ".scene4-1 .title",
    {
      duration: 2,
      opacity: 1,
      ease: "power2.out",
    },
    0
  )
  .to(
    ".scene4-1 .text-1",
    {
      duration: 2,
      opacity: 1,
      ease: "power2.out",
    },
    "<+=1"
  )
  .to(
    ".scene4-1 .text-2",
    {
      duration: 2,
      opacity: 1,
      ease: "power2.out",
    },
    "<+=1"
  )
  .to(
    ".scene4-1 .audio-player",
    {
      duration: 2,
      opacity: 1,
      ease: "power2.out",
    },
    "<+=1"
  )
  .to(
    ".scene4-1 .info",
    {
      duration: 2,
      opacity: 1,
      ease: "power2.out",
    },
    "<-=3"
  );

const scene4_2 = document.querySelector(".scene4-2");

const scene4_2Timeline = gsap.timeline({
  scrollTrigger: {
    trigger: scene4_2,
    scrub: 0.3,
    pin: true,
  },
});

scene4_2Timeline
  .to(
    ".scene4-2 .audio-stairs-item--1",
    {
      duration: 2,
      opacity: 1,
      ease: "power2.out",
    },
    0
  )
  .to(
    ".scene4-2 .audio-stairs-item--2",
    {
      duration: 2,
      opacity: 1,
      ease: "power2.out",
    },
    ">"
  )
  .to(
    ".scene4-2 .audio-stairs-item--3",
    {
      duration: 2,
      opacity: 1,
      ease: "power2.out",
    },
    ">"
  );

const scene4_3 = document.querySelector(".scene4-3");

const scene4_3Timeline = gsap.timeline({
  scrollTrigger: {
    trigger: scene4_3,
    scrub: 0.3,
    pin: true,
  },
});

scene4_3Timeline
  .to(
    ".scene4-3 .stat-box--top-right",
    {
      duration: 1,
      opacity: 1,
      transform: "translateY(0)",
      ease: "power2.out",
    },
    0
  )
  .to(
    ".scene4-3 .stat-box--top-left",
    {
      duration: 1,
      opacity: 1,
      transform: "translateY(0)",
      ease: "power2.out",
    },
    ">"
  )
  .to(
    ".scene4-3 .stat-box--bottom-right",
    {
      duration: 1,
      opacity: 1,
      transform: "translateY(0)",
      ease: "power2.out",
    },
    ">"
  )
  .to(
    ".scene4-3 .stat-box--bottom-left",
    {
      duration: 1,
      opacity: 1,
      transform: "translateY(0)",
      ease: "power2.out",
    },
    ">"
  );

const scene4_4 = document.querySelector(".scene4-4");

const scene4_4Timeline = gsap.timeline({
  scrollTrigger: {
    trigger: scene4_4,
    scrub: 0.3,
    pin: true,
  },
});

scene4_4Timeline
  .to(
    ".scene4-4 .title",
    {
      duration: 1,
      opacity: 1,
      ease: "power2.out",
    },
    0
  )
  .to(
    ".scene4-4 .infographic-container",
    {
      duration: 1,
      opacity: 1,
      ease: "power2.out",
    },
    "<+=0.5"
  )
  .to(
    ".scene4-4 .infographic-container",
    {
      duration: 1,
      opacity: 1,
      transform: "translateX(0)",
      ease: "power2.out",
    },
    ">"
  )
  .to(
    ".scene4-4 .text-container",
    {
      duration: 1,
      opacity: 1,
      ease: "power2.out",
    },
    "<"
  );
