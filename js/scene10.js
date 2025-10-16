const scene10 = document.querySelector(".scene10");

const scene10Timeline = gsap.timeline({
  scrollTrigger: {
    trigger: scene10,
    scrub: 0.3,
    pin: true,
  },
});

scene10Timeline
  .to(
    ".scene10 .layer-content",
    {
      duration: 1,
      opacity: 1,
      ease: "power2.out",
    },
    0
  )

  .to(
    ".scene10 .layer-ground",
    {
      duration: 1,
      opacity: 1,
      ease: "power2.out",
    },
    0
  )
  .to(
    [".scene10 .layer-all"],
    {
      duration: 1,
      opacity: 1,
      transform: "translate(0, 0) rotate(-10.165deg) scale(1.5)",
      ease: "power2.out",
    },
    0
  )
  .to(
    ".scene10 .layer-text",
    {
      duration: 1,
      opacity: 1,
      transform: "translate(0, 0)",
      ease: "power2.out",
    },
    ">"
  );
