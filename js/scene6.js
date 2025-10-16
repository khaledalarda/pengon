// Scene6-specific animations and effects
const scene6 = document.querySelector(".scene6");

// Create a timeline for the entire scene animation
const scene6Timeline = gsap.timeline({
  scrollTrigger: {
    trigger: scene6,
    scrub: 0.3,
    pin: true,
  },
});

// Animate the layers on scroll
scene6Timeline
  .to(
    ".scene6 .layer-smoke",
    {
      duration: 1,
      opacity: 1,
      transform: "translateY(0)",
      ease: "power2.out",
    },
    0
  )
  .to(
    ".scene6 .layer-ground",
    {
      duration: 1,
      opacity: 1,
      transform: "translateY(0)",
      ease: "power2.out",
    },
    0
  );

gsap.to(".scene6 .layer-smoke", {
  x: "10%",
  duration: 8,
  ease: "linear",
  repeatDelay: 1,
  repeat: -1,
  delay: 1.5,
});

scene6Timeline
  .to(
    ".scene6 .layer-barrel",
    {
      duration: 1,
      opacity: 1,
      ease: "power2.out",
    },
    ">"
  )
  .to(
    ".scene6 .layer-squeezer",
    {
      duration: 1,
      opacity: 1,
      transform: "translateX(0) translateY(0)",
      scale: 1,
      ease: "power2.out",
    },
    ">"
  )
  .to(
    [
      ".scene6 .layer-pipe-1",
      ".scene6 .layer-pipe-2",
      ".scene6 .layer-pipe-4",
      ".scene6 .layer-pipe-5",
      ".scene6 .layer-pipe-7",
    ],
    {
      duration: 1,
      opacity: 1,
      transform: "translateX(0) translateY(0)",
      ease: "power2.out",
    },
    ">"
  )
  .to(
    ".scene6 .layer-pipe-6",
    {
      duration: 1,
      opacity: 1,
      scale: 0.2,
      left: "-7%",
      top: "7%",
      width: "50%",
      ease: "power2.out",
    },
    ">"
  )
  .to(
    ".scene6 .layer-left-hand",
    {
      duration: 1,
      opacity: 1,
      scale: 0.2,
      left: "-40%",
      top: "10%",
      ease: "power2.out",
    },
    "<"
  )
  .to(
    ".scene6 .layer-pipe-3",
    {
      duration: 1,
      opacity: 1,
      scale: 0.2,
      left: "2%",
      top: "7%",
      width: "50%",
      ease: "power2.out",
    },
    ">"
  )
  .to(
    ".scene6 .layer-right-hand",
    {
      duration: 1,
      opacity: 1,
      scale: 0.2,
      left: "-16%",
      top: "10%",
      ease: "power2.out",
    },
    "<"
  )
  .to(
    [".scene6 .layer-pipe-3", ".scene6 .layer-right-hand"],
    {
      duration: 3,
      transform: "translateX(0) translateY(8%) scale(0.2)",
      ease: "power2.out",
    },
    ">"
  )
  .to(
    [".scene6 .layer-pipe-6", ".scene6 .layer-left-hand"],
    {
      duration: 3,
      transform: "translateX(0) translateY(-8%) scale(0.2)",
      ease: "power2.out",
    },
    "<"
  )
  .to(
    [".scene6 .layer-pipe-3", ".scene6 .layer-right-hand"],
    {
      duration: 3,
      transform: "translateX(0) translateY(-8%) scale(0.2)",
      ease: "power2.out",
    },
    ">"
  )
  .to(
    [".scene6 .layer-pipe-6", ".scene6 .layer-left-hand"],
    {
      duration: 3,
      transform: "translateX(0) translateY(8%) scale(0.2)",
      ease: "power2.out",
    },
    "<"
  )
  .to(
    [
      ".scene6 .layer-pipe-6",
      ".scene6 .layer-left-hand",
      ".scene6 .layer-pipe-3",
      ".scene6 .layer-right-hand",
    ],
    {
      duration: 3,
      transform: "translateX(0) translateY(0%) scale(0.2)",
      ease: "power2.out",
    },
    ">"
  )
  .to(
    [".scene6 .layer-left-hand", ".scene6 .layer-right-hand"],
    {
      duration: 3,
      transform: "translateX(0) translateY(15%) scale(0.2)",
      ease: "power2.out",
    },
    ">"
  )
  .to(
    ".scene6 .layer-plant",
    {
      duration: 3,
      opacity: 1,
      transform: "scale(0.1)",
      scale: 0.1,
      ease: "power2.out",
    },
    ">"
  )
  .to(
    ".scene6 .layer-sign",
    {
      duration: 3,
      opacity: 1,
      transform: "scale(0.15)",
      scale: 0.15,
      ease: "power2.out",
    },
    "<"
  )
  .to(
    ".scene6 .layer-sign",
    {
      duration: 3,
      opacity: 1,
      transform: "rotate(30deg) scale(0.15)",
      scale: 0.15,
      ease: "power2.out",
    },
    ">"
  )
  .to(
    ".scene6 .layer-text",
    {
      duration: 3,
      transform: "translateX(0) translateY(0)",
      opacity: 1,
      ease: "power2.out",
    },
    "<"
  );
