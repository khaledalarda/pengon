// Scene9-specific animations and effects
const scene9 = document.querySelector(".scene9");

// Create a timeline for the entire scene animation
const scene9Timeline = gsap.timeline({
  scrollTrigger: {
    trigger: scene9,
    scrub: 0.3,
    pin: true,
  },
});

// Animate the layers on scroll
scene9Timeline
  .to(
    ".scene9 .layer-smoke",
    {
      duration: 1,
      opacity: 1,
      transform: "translateY(0)",
      ease: "power2.out",
    },
    0
  )
  .to(
    ".scene9 .layer-ground",
    {
      duration: 1,
      opacity: 1,
      transform: "translateY(0)",
      ease: "power2.out",
    },
    0
  );

gsap.to(".scene9 .layer-smoke", {
  x: "10%",
  duration: 8,
  ease: "linear",
  yoyo: true,
  repeatDelay: 1,
  repeat: -1,
  delay: 1.5,
});

scene9Timeline
  .to(
    ".scene9 .layer-tree",
    {
      duration: 1,
      opacity: 1,
      transform: "translateX(0) translateY(0) scale(1)",
      ease: "power2.out",
    },
    ">"
  )
  .to(
    ".scene9 .layer-text",
    {
      duration: 3,
      transform: "translateX(0) translateY(0)",
      opacity: 1,
      ease: "power2.out",
    },
    ">"
  );
