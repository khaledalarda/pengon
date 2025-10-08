// Scene2-specific animations and parallax effects
const scene2 = document.querySelector(".scene2");

// Create a timeline for the entire scene animation
const scene2Timeline = gsap.timeline({
  scrollTrigger: {
    trigger: scene2,
    scrub: 0.3,
    pin: true,
  },
});

// All layers start together but with different speeds
scene2Timeline
  .to(
    ".layer-sun",
    {
      transform: "translate(-7%, -10%)",
      duration: 1.6, // Fastest - finishes first
      ease: "power2.out",
    },
    0
  ) // All start at the same time
  .to(
    ".sun-backdrop-layer",
    {
      transform: "translate(-7%, -10%)",
      duration: 1.6, // Fastest - finishes first
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
      duration: 1.5, // Fastest - finishes first
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
      duration: 1.6, // Medium-fast
      ease: "power2.out",
    },
    0
  )
  .to(
    ".layer-flowers",
    {
      opacity: 1,
      duration: 0.4,
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
  );

// MotionPathHelper.create(".layer-truck");
