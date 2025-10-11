// Scene1-specific animations and parallax effects
const scene1 = document.querySelector(".scene1");

// Create a timeline for the entire scene animation
const scene1Timeline = gsap.timeline({
  scrollTrigger: {
    trigger: scene1,
    scrub: 0.3,
    pin: true,
    start: "top top",
    end: "+=300%",
  },
});

// All layers start together but with different speeds
scene1Timeline
  .to(
    ".scene1 .layer-sun",
    {
      transform: "translate(-7%, -10%)",
      duration: 2.6,
      ease: "power2.out",
    },
    0
  ) // All start at the same time
  .to(
    ".scene1 .sun-backdrop-layer",
    {
      transform: "translate(-7%, -10%)",
      duration: 2.6,
      ease: "power2.out",
      onUpdate: function () {
        // Set display to block during animation
        gsap.set(".scene1 .sun-backdrop-layer", { display: "block" });
      },
      onComplete: function () {
        // Only set to none when animation is fully complete
        gsap.set(".scene1 .sun-backdrop-layer", { display: "none" });
      },
    },
    0
  ) // All start at the same time
  .to(
    ".scene1 .backdrop-layer",
    {
      opacity: 0,
      duration: 1.5,
      ease: "power2.out",
      onUpdate: function () {
        // Set display to block during animation
        gsap.set(".scene1 .backdrop-layer", { display: "block" });
      },
      onComplete: function () {
        // Only set to none when animation is fully complete
        gsap.set(".scene1 .backdrop-layer", { display: "none" });
      },
    },
    0
  ) // All start at the same time
  .to(
    ".scene1 .layer-bank",
    {
      opacity: 1,
      y: 0,
      top: "-20%",
      duration: 2.6, // Medium-fast
      ease: "power2.out",
    },
    0
  )
  .to(
    ".scene1 .layer-flowers",
    {
      opacity: 1,
      duration: 1.4,
      width: "90%",
      height: "100%",
      top: "-1%",
      left: "-3%",
      scale: 1,
      filter: "grayscale(0%) brightness(1)",
      ease: "power2.out",
    },
    ">"
  )
  .addLabel("before-trash")
  .to(
    ".scene1 .layer-smoke",
    {
      opacity: 1,
      duration: 0.8,
      transform: "translate(0, 0)",
      ease: "power2.out",
    },
    "before-trash+=1"
  )
  .to(
    [".scene1 .layer-truck", ".scene1 .layer-trash"],
    {
      motionPath: {
        path: "#truckPath",
        autoRotate: true,
        alignOrigin: [0.5, 0.5],
        align: "#truckPath",
      },
      duration: 1.4,
      ease: "power2.out",
    },
    "before-trash+=1"
  )
  .to(
    ".scene1 .truck-trash-container",
    {
      duration: 2.5,
      top: "-25.5%",
      transform: "rotate(-20deg)",
      ease: "power2.out",
    },
    ">+=0.3"
  )
  .addLabel("trash-thrown")
  .to(
    ".scene1 .layer-smoke",
    {
      duration: 2.5,
      height: "180%",
      ease: "power2.out",
    },
    "<"
  )
  .to(
    ".scene1 .layer-flowers",
    {
      duration: 2.5,
      filter: "grayscale(80%) brightness(0)",
      ease: "power2.out",
    },
    "<"
  )
  .to(
    ".scene1 .layer-sun",
    {
      duration: 6.5,
      top: "45%",
      ease: "power2.out",
    },
    "<"
  )
  .to(
    ".scene1 .trash-wires",
    {
      duration: 3.5,
      left: "-109%",
      top: "25%",
      ease: "power2.out",
    },
    ">"
  )
  .to(
    ".scene1 .trash-wires",
    {
      duration: 6,
      left: "-159%",
      top: "55%",
      transform: "scaleX(-5) scaleY(5) rotate(-16deg)",
      ease: "power2.out",
    },
    ">"
  )
  .to(
    ".scene1 .trash-electronics",
    {
      duration: 4,
      top: "12%",
      left: "-174%",
      transform: "scaleX(-3) scaleY(3)",
      ease: "power2.out",
    },
    "<+=3"
  )
  .to(
    ".scene1 .trash-electronics",
    {
      duration: 3,
      top: "72%",
      left: "-190%",
      transform: "scaleX(-4) scaleY(4) rotate(5deg)",
      ease: "power2.out",
    },
    ">"
  )
  .to(
    ".scene1 .trash-barrel",
    {
      duration: 6,
      top: "143%",
      left: "-65%",
      transform: "scaleX(-4) scaleY(4) rotate(140deg)",
      ease: "power2.out",
    },
    ">-=6"
  )
  .to(
    ".scene1 .trash-bg2",
    {
      duration: 0.5,
      left: "-100%",
      top: "10%",
      ease: "power2.out",
    },
    "<"
  )
  .to(
    ".scene1 .trash-bg2",
    {
      duration: 3.5,
      left: "-165%",
      top: "126%",
      ease: "power2.out",
    },
    ">"
  )
  .to(
    ".scene1 .trash-bg2",
    {
      duration: 6,
      transform: "scaleX(-5) scaleY(5) rotate(-11deg)",
      ease: "power2.out",
    },
    "<"
  )
  .to(
    ".scene1 .trash-bg",
    {
      duration: 0.5,
      left: "-100%",
      top: "10%",
      ease: "power2.out",
    },
    ">-=4"
  )
  .to(
    ".scene1 .trash-bg",
    {
      duration: 3.5,
      left: "-165%",
      top: "66%",
      ease: "power2.out",
    },
    ">"
  )
  .to(
    ".scene1 .trash-bg",
    {
      duration: 4,
      transform: "scaleX(-5) scaleY(5) rotate(-11deg)",
      ease: "power2.out",
    },
    "<"
  )
  .to(
    ".scene1 .trash-blood",
    {
      duration: 2,
      top: "72%",
      left: "-110%",
      transform: "scaleX(-3.5) scaleY(3.5) rotate(5deg)",
      ease: "power2.out",
    },
    ">-=4"
  )
  .to(
    ".scene1 .layer-squeezer",
    {
      duration: 3,
      opacity: 1,
      scale: 1,
      ease: "power2.out",
    },
    "<"
  )
  .to(
    ".scene1 .layer-bank",
    {
      opacity: 1,
      top: 0,
      left: 0,
      duration: 2.6, // Medium-fast
      transform: "rotate(0) scale(1)",
      width: "100%",
      height: "100%",
      ease: "power2.out",
    },
    ">+=2"
  )
  .to(
    ".scene1 .layer-truck",
    {
      duration: 2.6,
      transform: "rotate(16deg) scale(0.8, 0.8)",
      left: "-22%",
      top: "-35%",
      ease: "power2.out",
    },
    "<"
  )
  .to(
    ".scene1 .layer-squeezer",
    {
      duration: 2.6,
      transform: "rotate(20deg) scale(0.8, 0.8)",
      opacity: 1,
      top: "-8%",
      left: "-5%",
      ease: "power2.out",
    },
    "<"
  )
  .to(
    ".scene1 .layer-trash",
    {
      duration: 2.6,
      transform: "rotate(17.9999deg) scale(0.7, 0.7)",
      top: "-38%",
      left: "-21%",
      ease: "power2.out",
    },
    "<"
  )
  .to(
    ".scene1 .layer-flowers",
    {
      duration: 2.6,
      transform: "rotate(17.9998deg) scale(0.7, 0.7)",
      left: "-3%",
      top: "-1%",
      ease: "power2.out",
    },
    "<"
  )
  .to(
    ".scene1 .layer-map",
    {
      duration: 1.6,
      opacity: 1,
      transform: "translateX(0) translateY(0) rotate(5deg) scale(1.5)",
      width: "100%",
      height: "84%",
      left: "-18%",
      top: "15%",
      ease: "power2.out",
    },
    ">"
  )
  .to(
    ".scene1 .layer-text",
    {
      duration: 1.6,
      opacity: 1,
      transform: "translateX(0) translateY(-10%)",
      ease: "power2.out",
    },
    ">"
  );

// MotionPathHelper.create(".layer-truck");
