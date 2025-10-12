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
  x: "20%",
  duration: 4,
  ease: "power2.out",
  yoyo: true,
  repeat: -1,
  delay: 1,
});

scene3Timeline
  .to(
    ".scene3 .layer-truck",
    {
      duration: 3,
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
      transform: "translateX(0) translateY(-10%)",
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
      transform: "translateX(0) translateY(-10%) rotate(0deg)",
      ease: "power2.out",
    },
    "<"
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
