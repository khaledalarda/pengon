// Scene2-specific animations and parallax effects
const scene3 = document.querySelector(".scene3");

// // Create a timeline for the entire scene animation
const scene3Timeline = gsap.timeline({
  scrollTrigger: {
    trigger: scene3,
    scrub: 0.3,
    pin: true,
  },
});

scene3Timeline
  .to(
    ".scene3 .layer-land",
    {
      duration: 1,
      transform: "translateX(0) translateY(0)",
      opacity: 1,
      ease: "none",
    },
    0
  )
  .to(
    ".scene3 .layer-smoke",
    {
      duration: 1,
      transform: "translateX(0) translateY(0)",
      opacity: 1,
      ease: "none",
    },
    0
  );

gsap.to(".scene3 .layer-smoke", {
  x: "10%",
  duration: 8,
  ease: "linear",
  repeatDelay: 1,
  repeat: -1,
  delay: 1.5,
});

scene3Timeline
  .to(
    ".scene3 .layer-truck",
    {
      duration: 6,
      opacity: 1,
      scale: 0.9,
      transform: "translateX(0) translateY(0)",
      ease: "power2.out",
    },
    ">"
  )
  .to(
    ".scene3 .layer-truck-container",
    {
      duration: 3,
      transform: "translateX(0) translateY(-10%) rotate(-5deg)",
      ease: "power2.out",
    },
    ">"
  )
  .to(
    ".scene3 .layer-truck",
    {
      duration: 3,
      transform: "translate(28%, 32%) scale(1.66)",
      ease: "power2.out",
    },
    ">"
  )
  .to(
    ".scene3 .layer-text",
    {
      duration: 1,
      opacity: 1,
      ease: "power2.out",
    },
    ">"
  )
  .to(
    ".scene3 .layer-text-container-item:nth-child(3)",
    {
      duration: 1,
      opacity: 1,
      ease: "power2.out",
    },
    "<"
  )
  .to(
    ".scene3 .layer-text-bottom",
    {
      duration: 1,
      opacity: 1,
      ease: "power2.out",
    },
    ">"
  )
  .to(
    ".scene3 .layer-text-container-item:nth-child(2)",
    {
      duration: 1,
      opacity: 1,
      ease: "power2.out",
    },
    ">"
  )
  .to(
    ".scene3 .layer-text-container-item:nth-child(1)",
    {
      duration: 1,
      opacity: 1,
      ease: "power2.out",
    },
    ">"
  )
  .to(
    ".scene3 .layer-text-bottom",
    {
      duration: 1,
      opacity: 0,
      ease: "power2.out",
    },
    ">"
  )
  .to(
    ".scene3 .layer-truck",
    {
      duration: 3,
      transform: "translate(0, 0) scale(1)",
      ease: "power2.out",
    },
    ">"
  )
  .to(
    ".scene3 .layer-text",
    {
      duration: 3,
      transform: "translate(-16%, -19%) scale(0.6) rotate(-8deg)",
      ease: "power2.out",
    },
    "<"
  )
  .to(
    ".scene3 .layer-text",
    {
      duration: 4,
      transform: "translate(-16%, -19%) scale(0.6) rotate(0deg)",
      ease: "power2.out",
    },
    ">"
  )
  .to(
    ".scene3 .layer-truck-container",
    {
      duration: 4,
      transform: "translate(0, 0) scale(1)",
      ease: "power2.out",
    },
    ">"
  )
  .to(
    ".scene3 .layer-truck",
    {
      duration: 6,
      scale: 0.9,
      transform: "translateX(95%) translateY(0)",
      ease: "power2.out",
    },
    ">"
  );

// Scene3-1-specific animations and parallax effects
const scene3_1 = document.querySelector(".scene3-1");

// // Create a timeline for the entire scene animation
const scene3_1Timeline = gsap.timeline({
  scrollTrigger: {
    trigger: scene3_1,
    scrub: 0.3,
    pin: true,
  },
});

scene3_1Timeline
  .to(
    [".scene3-1 .layer-text .text-1", ".scene3-1 .layer-text .text-2"],
    {
      duration: 1,
      transform: "translateX(0) translateY(0)",
      opacity: 1,
      ease: "power2.out",
    },
    0
  )
  .to(
    ".scene3-1 .layer-text .chart",
    {
      duration: 2,
      transform: "translateX(0) translateY(0)",
      opacity: 1,
      ease: "power2.out",
    },
    "<"
  );

const scene3_2 = document.querySelector(".scene3-2");

const scene3_2Timeline = gsap.timeline({
  scrollTrigger: {
    trigger: scene3_2,
    scrub: 0.3,
    pin: true,
  },
});

scene3_2Timeline
  .to(
    ".scene3-2 .content-container",
    {
      duration: 1,
      opacity: 1,
      transform: "translateY(0)",
      ease: "power2.out",
    },
    0
  )
  .to(
    ".scene3-2 .chart-container",
    {
      duration: 1.5,
      opacity: 1,
      transform: "translateY(0)",
      ease: "power2.out",
    },
    0.3
  )
  .to(
    ".scene3-2 .text-container",
    {
      duration: 1.5,
      opacity: 1,
      transform: "translateY(0)",
      ease: "power2.out",
    },
    0.5
  );

const scene3_3 = document.querySelector(".scene3-3");

const scene3_3Timeline = gsap.timeline({
  scrollTrigger: {
    trigger: scene3_3,
    scrub: 0.3,
    pin: true,
  },
});

scene3_3Timeline.to(
  ".scene3-3 .layer-video",
  {
    duration: 1,
    transform: "translateX(0) translateY(0)",
    opacity: 1,
    ease: "power2.out",
  },
  0
);

const scene3_4 = document.querySelector(".scene3-4");

const scene3_4Timeline = gsap.timeline({
  scrollTrigger: {
    trigger: scene3_4,
    scrub: 0.3,
    pin: true,
  },
});

scene3_4Timeline
  .to(
    ".scene3-4 .layer-text",
    {
      duration: 1,
      transform: "translateX(0) translateY(0)",
      opacity: 1,
      ease: "power2.out",
    },
    0
  )
  .to(
    ".scene3-4 .layer-box",
    {
      duration: 1,
      transform: "translateX(0) translateY(0)",
      opacity: 1,
      ease: "power2.out",
    },
    ">"
  )
  .to(
    ".scene3-4 .layer-line",
    {
      duration: 3,
      transform: "translateX(0) translateY(2vh)",
      ease: "power2.out",
    },
    ">"
  )
  .to(
    ".scene3-4 .layer-circle",
    {
      duration: 1,
      transform: "translateX(0) translateY(0)",
      ease: "power2.out",
    },
    ">"
  )
  .to(
    ".scene3-4 .layer-line",
    {
      duration: 2,
      opacity: 1,
      ease: "power2.out",
    },
    ">"
  )
  .to(
    ".scene3-4 .layer-line > img",
    {
      duration: 2,
      clipPath: "inset(0 0% 0 0)",
      ease: "power2.out",
    },
    ">"
  )
  .to(
    ".scene3-4 .layer-line .v-line",
    {
      duration: 2,
      opacity: 1,
      ease: "power2.out",
    },
    ">"
  )
  .to(
    ".scene3-4 .layer-line .layer-circle-text",
    {
      duration: 2,
      opacity: 1,
      ease: "power2.out",
    },
    ">"
  );
