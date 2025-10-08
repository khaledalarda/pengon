// Scene2-specific animations and parallax effects
const scene2 = document.querySelector(".scene2");

// Create a timeline for the entire scene animation
const scene2Timeline = gsap.timeline({
  scrollTrigger: {
    trigger: scene2,
    scrub: 0.3,
    pin: true,
    start: "top top",
    end: "+=300%",
  },
});

// All layers start together but with different speeds
scene2Timeline
  .to(
    ".layer-sun",
    {
      transform: "translate(-7%, -10%)",
      duration: 2.6,
      ease: "power2.out",
    },
    0
  ) // All start at the same time
  .to(
    ".sun-backdrop-layer",
    {
      transform: "translate(-7%, -10%)",
      duration: 2.6,
      ease: "power2.out",
      onUpdate: function () {
        // Set display to block during animation
        gsap.set(".sun-backdrop-layer", { display: "block" });
      },
      onComplete: function () {
        // Only set to none when animation is fully complete
        gsap.set(".sun-backdrop-layer", { display: "none" });
      },
    },
    0
  ) // All start at the same time
  .to(
    ".backdrop-layer",
    {
      opacity: 0,
      duration: 1.5,
      ease: "power2.out",
      onUpdate: function () {
        // Set display to block during animation
        gsap.set(".backdrop-layer", { display: "block" });
      },
      onComplete: function () {
        // Only set to none when animation is fully complete
        gsap.set(".backdrop-layer", { display: "none" });
      },
    },
    0
  ) // All start at the same time
  .to(
    ".layer-bank",
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
    ".layer-flowers",
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
    ".layer-smoke",
    {
      opacity: 1,
      duration: 0.8,
      transform: "translate(0, 0)",
      ease: "power2.out",
    },
    "before-trash+=1"
  )
  .to(
    ".layer-truck",
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
    ".truck-trash-container",
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
    ".layer-smoke",
    {
      duration: 2.5,
      height: "180%",
      ease: "power2.out",
    },
    "<"
  )
  .to(
    ".layer-flowers",
    {
      duration: 2.5,
      filter: "grayscale(80%) brightness(0)",
      ease: "power2.out",
    },
    "<"
  )
  .to(
    ".layer-sun",
    {
      duration: 6.5,
      top: "45%",
      ease: "power2.out",
    },
    "<"
  )
  .to(
    ".trash-wires",
    {
      duration: 3.5,
      left: "-109%",
      top: "25%",
      ease: "power2.out",
    },
    ">"
  )
  .to(
    ".trash-wires",
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
    ".trash-electronics",
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
    ".trash-electronics",
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
    ".trash-barrel",
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
    ".trash-bg2",
    {
      duration: 0.5,
      left: "-100%",
      top: "10%",
      ease: "power2.out",
    },
    "<"
  )
  .to(
    ".trash-bg2",
    {
      duration: 3.5,
      left: "-165%",
      top: "126%",
      ease: "power2.out",
    },
    ">"
  )
  .to(
    ".trash-bg2",
    {
      duration: 6,
      transform: "scaleX(-5) scaleY(5) rotate(-11deg)",
      ease: "power2.out",
    },
    "<"
  )
  .to(
    ".trash-bg",
    {
      duration: 0.5,
      left: "-100%",
      top: "10%",
      ease: "power2.out",
    },
    ">-=4"
  )
  .to(
    ".trash-bg",
    {
      duration: 3.5,
      left: "-165%",
      top: "66%",
      ease: "power2.out",
    },
    ">"
  )
  .to(
    ".trash-bg",
    {
      duration: 4,
      transform: "scaleX(-5) scaleY(5) rotate(-11deg)",
      ease: "power2.out",
    },
    "<"
  )
  .to(
    ".trash-blood",
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
    ".layer-squeezer",
    {
      duration: 3,
      opacity: 1,
      scale: 1,
      ease: "power2.out",
    },
    "<"
  );

// MotionPathHelper.create(".layer-truck");
