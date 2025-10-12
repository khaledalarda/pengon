// Scene7-specific animations and effects
const scene7 = document.querySelector(".scene7");

// Create a timeline for the entire scene animation
const scene7Timeline = gsap.timeline({
  scrollTrigger: {
    trigger: scene7,
    scrub: 0.3,
    pin: true,
  },
});

// Animate the layers on scroll
scene7Timeline
  .to(
    ".scene7 .layer-smoke",
    {
      duration: 1,
      opacity: 1,
      transform: "translateY(0)",
      ease: "power2.out",
    },
    0
  )
  .to(
    ".scene7 .layer-ground",
    {
      duration: 1,
      opacity: 1,
      transform: "translateY(0)",
      ease: "power2.out",
    },
    0
  );

gsap.to(".scene7 .layer-smoke", {
  x: "10%",
  duration: 4,
  ease: "power2.out",
  yoyo: true,
  repeat: -1,
  delay: 1,
});
