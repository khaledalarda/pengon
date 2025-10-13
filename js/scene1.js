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
      transform: "translate(8%, -10%)",
      duration: 2.6,
      ease: "power2.out",
    },
    0
  ) // All start at the same time
  .to(
    ".scene1 .sun-backdrop-layer",
    {
      transform: "translate(8%, -10%)",
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
  )
  .to(
    ".scene1 .layer-bank",
    {
      opacity: 1,
      duration: 2,
      transform: "translate(0, 0)",
      ease: "power2.out",
    },
    0
  )
  .to(
    ".scene1 .layer-flower img",
    {
      opacity: 1,
      transform: "translate(0, 0) scale(0.6)",
      duration: 2,
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
    [
      ".scene1 .layer-truck .layer-truck-container",
      ".scene1 .layer-trash .layer-truck-container",
    ],
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
      transform: "translateY(-20%) rotate(20deg)",
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
    ".scene1 .layer-sun",
    {
      duration: 6.5,
      top: "45%",
      ease: "power2.out",
    },
    "<"
  )
  .to(
    ".scene1 .layer-trash .wires",
    {
      duration: 2.5,
      motionPath: {
        path: "#trashWiresPath",
        autoRotate: true,
        alignOrigin: [0.5, 0.5],
        align: "#trashWiresPath",
      },
      scale: 2,
      ease: "power2.out",
    },
    ">"
  )
  .to(
    ".scene1 .layer-flower",
    {
      duration: 2.5,
      filter: "grayscale(80%) brightness(0)",
      ease: "power2.out",
    },
    "<"
  )
  .to(
    ".scene1 .layer-trash .bg",
    {
      duration: 2.5,
      motionPath: {
        path: "#trashBgPath",
        autoRotate: true,
        alignOrigin: [0.5, 0.5],
        align: "#trashBgPath",
      },
      scale: 1.4,
      ease: "power2.out",
    },
    "<"
  )
  .to(
    ".scene1 .layer-trash .barrel-1",
    {
      duration: 2.5,
      motionPath: {
        path: "#trashBarrelPath",
        autoRotate: true,
        alignOrigin: [0.5, 0.5],
        align: "#trashBarrelPath",
      },
      scale: 0.3,
      ease: "power2.out",
    },
    ">"
  )
  .to(
    ".scene1 .layer-trash .barrel-2",
    {
      duration: 2.5,
      motionPath: {
        path: "#trashBarrel2Path",
        autoRotate: true,
        alignOrigin: [0.5, 0.5],
        align: "#trashBarrel2Path",
      },
      scale: 0.3,
      ease: "power2.out",
    },
    ">"
  )
  .to(
    ".scene1 .layer-trash .bg2",
    {
      duration: 2.5,
      motionPath: {
        path: "#trashBg2Path",
        autoRotate: false,
        alignOrigin: [0.5, 0.5],
        align: "#trashBg2Path",
      },
      ease: "power2.out",
    },
    ">"
  )
  .to(
    ".scene1 .layer-trash .bg1",
    {
      duration: 2.5,
      motionPath: {
        path: "#trashBg2Path",
        autoRotate: false,
        alignOrigin: [0.5, 0.5],
        align: "#trashBg2Path",
      },
      ease: "power2.out",
    },
    "<"
  )
  .to(
    ".scene1 .layer-trash .colored-bags",
    {
      duration: 2.5,
      motionPath: {
        path: "#trashColoredBagsPath",
        autoRotate: false,
        alignOrigin: [0.5, 0.5],
        align: "#trashColoredBagsPath",
      },
      scale: 0.4,
      ease: "power2.out",
    },
    ">"
  )
  .to(
    ".scene1 .layer-trash .electronics",
    {
      duration: 2.5,
      motionPath: {
        path: "#trashElectronicsPath",
        autoRotate: false,
        alignOrigin: [0.5, 0.5],
        align: "#trashElectronicsPath",
      },
      scale: 0.4,
      ease: "power2.out",
    },
    ">"
  )
  .to(
    ".scene1 .layer-trash .blood",
    {
      duration: 2.5,
      motionPath: {
        path: "#trashBloodPath",
        autoRotate: false,
        alignOrigin: [0.5, 0.5],
        align: "#trashBloodPath",
      },
      scale: 0.4,
      ease: "power2.out",
    },
    ">"
  )
  .to(
    ".scene1 .layer-trash .squeezer",
    {
      duration: 1,
      opacity: 0,
      top: "6%",
      ease: "power2.out",
    },
    ">"
  )
  .to(
    ".scene1 .layer-trash .squeezer",
    {
      duration: 2.5,
      top: "185%",
      left: "60%",
      scale: 1,
      opacity: 1,
      ease: "power2.out",
    },
    ">"
  )
  .to(
    ".scene1 .layer-all",
    {
      duration: 2.6,
      ease: "power2.out",
      transform: "rotate(0)",
      width: "100%",
      height: "100%",
      left: 0,
      top: 0,
    },
    ">"
  )
  .to(
    ".scene1 .layer-map",
    {
      duration: 1.6,
      opacity: 1,
      transform: "translateX(0) translateY(0) rotate(-1deg) scale(1.5)",
      width: "74%",
      height: "65%",
      left: "12%",
      top: "23%",
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

gsap.to(".scene1 .layer-smoke", {
  x: "10%",
  duration: 8,
  ease: "power2.out",
  yoyo: true,
  repeat: -1,
  delay: 1,
});

// MotionPathHelper.create(".scene1 .layer-trash .wires");
