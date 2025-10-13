// Scene5-specific animations and effects
const scene5 = document.querySelector(".scene5");

// Create a timeline for the entire scene animation
const scene5Timeline = gsap.timeline({
  scrollTrigger: {
    trigger: scene5,
    scrub: 0.3,
    pin: true,
  },
});

// Animate the layers on scroll
scene5Timeline
  .to(
    ".scene5 .layer-city",
    {
      duration: 1,
      opacity: 1,
      ease: "power2.out",
    },
    0
  )
  .to(
    ".scene5 .layer-trash",
    {
      duration: 1,
      opacity: 1,
      ease: "power2.out",
    },
    ">"
  )
  .to(
    ".scene5 .layer-colored-bags",
    {
      duration: 1,
      opacity: 1,
      ease: "power2.out",
    },
    ">"
  )
  .to(
    ".scene5 .layer-barrel",
    {
      duration: 1,
      opacity: 1,
      ease: "power2.out",
    },
    "<"
  )
  .to(
    ".scene5 .layer-fire",
    {
      duration: 1,
      opacity: 1,
      ease: "power2.out",
    },
    ">"
  )
  .to(
    ".scene5 .layer-fire2",
    {
      duration: 1,
      opacity: 1,
      ease: "power2.out",
    },
    ">"
  )
  .to(
    ".scene5 .layer-fire3",
    {
      duration: 1,
      opacity: 1,
      ease: "power2.out",
    },
    ">"
  )
  .to(
    ".scene5 .layer-fire4",
    {
      duration: 1,
      opacity: 1,
      ease: "power2.out",
    },
    ">"
  )
  .to(
    ".scene5 .layer-houses-fire",
    {
      duration: 1,
      opacity: 1,
      ease: "power2.out",
    },
    ">"
  )
  .to(
    ".scene5 .layer-fire-smoke",
    {
      duration: 1,
      opacity: 1,
      ease: "power2.out",
    },
    ">"
  )
  .to(
    ".scene5 .layer-smoke",
    {
      duration: 1,
      opacity: 1,
      ease: "power2.out",
    },
    ">"
  )
  .to(
    ".scene5 .layer-text",
    {
      duration: 1,
      opacity: 1,
      transform: "translateX(0) translateY(0)",
      ease: "power2.out",
    },
    ">"
  );

gsap.to(".scene5 .layer-smoke", {
  x: "10%",
  duration: 4,
  ease: "power2.out",
  yoyo: true,
  repeat: -1,
  delay: 1,
});
