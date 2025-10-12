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
  )
  .to(
    ".scene7 .layer-glass-box",
    {
      duration: 4,
      scale: 0.7,
      top: "20%",
      ease: "power2.out",
    },
    ">"
  );

gsap.to(".scene7 .layer-smoke", {
  x: "10%",
  duration: 8,
  ease: "power2.out",
  yoyo: true,
  repeat: -1,
  delay: 1,
});

scene7Timeline
  .to(
    ".scene7 .swing",
    {
      rotation: 20,
      duration: 1,
      ease: "sine.inOut",
      transformOrigin: "top center",
    },
    "<"
  )
  .to(
    ".scene7 .swing",
    {
      rotation: -20,
      duration: 1,
      ease: "sine.inOut",
    },
    ">"
  )
  .to(
    ".scene7 .swing",
    {
      rotation: -10,
      duration: 1,
      ease: "sine.inOut",
    },
    ">"
  );
