const scene8 = document.querySelector(".scene8");

const scene8Timeline = gsap.timeline({
  scrollTrigger: {
    trigger: scene8,
    scrub: 0.3,
    pin: true,
  },
});

const audioPlayers8 = document.querySelectorAll('.scene8 .audio-player');
audioPlayers8.forEach((player) => {
  initAudioPlayer(player);
});

// Animate the layers on scroll
scene8Timeline
  .to(
    ".scene8 .layer-smoke",
    {
      duration: 1,
      opacity: 1,
      transform: "translateY(0)",
      ease: "power2.out",
    },
    0
  )
  .to(
    ".scene8 .layer-ground",
    {
      duration: 1,
      opacity: 1,
      transform: "translateY(0)",
      ease: "power2.out",
    },
    0
  );

gsap.to(".scene8 .layer-smoke", {
  x: "10%",
  duration: 8,
  ease: "linear",
  yoyo: true,
  repeatDelay: 1,
  repeat: -1,
  delay: 1.5,
});

scene8Timeline
  .to(
    ".scene8 .layer-lion",
    {
      duration: 3,
      transform: "translateX(0) translateY(0)",
      ease: "power2.out",
    },
    ">"
  )
  .to(
    ".scene8 .layer-lion-open",
    {
      duration: 0.5,
      opacity: 1,
      ease: "power2.out",
    },
    ">"
  )
  .to(
    ".scene8 .layer-lion",
    {
      duration: 1,
      opacity: 0,
      ease: "power2.out",
    },
    "<"
  )
  .to(
    ".scene8 .layer-tooth-1",
    {
      duration: 1,
      opacity: 1,
      ease: "power2.out",
    },
    "<"
  )
  .to(
    ".scene8 .layer-tooth-2",
    {
      duration: 1,
      opacity: 1,
      ease: "power2.out",
    },
    "<"
  )
  .to(
    ".scene8 .layer-tooth-3",
    {
      duration: 1,
      opacity: 1,
      ease: "power2.out",
    },
    "<"
  )
  .to(
    ".scene8 .layer-tooth-4",
    {
      duration: 1,
      opacity: 1,
      ease: "power2.out",
    },
    "<"
  )
  .to(
    ".scene8 .layer-tooth-1-container",
    {
      duration: 6,
      ease: "power2.out",
      motionPath: {
        path: "#tooth1Path",
        autoRotate: true,
        alignOrigin: [0.5, 0.5],
        align: "#tooth1Path",
      },
    },
    ">"
  )
  .to(
    ".scene8 .layer-tooth-2-container",
    {
      duration: 4,
      ease: "power2.out",
      motionPath: {
        path: "#tooth2Path",
        autoRotate: true,
        alignOrigin: [0.5, 0.5],
        align: "#tooth2Path",
      },
    },
    "<"
  )
  .to(
    ".scene8 .layer-tooth-3-container",
    {
      duration: 4,
      ease: "power2.out",
      motionPath: {
        path: "#tooth3Path",
        autoRotate: true,
        alignOrigin: [0.5, 0.5],
        align: "#tooth3Path",
      },
    },
    "<"
  )
  .to(
    ".scene8 .layer-tooth-4-container",
    {
      duration: 4,
      ease: "power2.out",
      motionPath: {
        path: "#tooth4Path",
        autoRotate: true,
        alignOrigin: [0.5, 0.5],
        align: "#tooth4Path",
      },
    },
    "<"
  )
  .to(
    ".scene8 .audio-container",
    {
      duration: 2,
      opacity: 1,
      stagger: 0.2,
      ease: "power2.out",
    },
    ">"
  );
