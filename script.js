gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(MotionPathPlugin);

// Animate each section as it enters the viewport
gsap.utils.toArray(".scene").forEach((panel) => {
  gsap.from(panel, {
    opacity: 0,
    duration: 1,
    scrollTrigger: {
      trigger: panel,
      start: "top 80%",
      toggleActions: "play none none reverse",
    },
  });
});

// Parallax effect for scene1
const scene1 = document.querySelector(".scene1");

// Create a timeline for the entire scene animation
const scene1Timeline = gsap.timeline({
  scrollTrigger: {
    trigger: scene1,
    scrub: true,
    pin: true,
  },
});

// All layers start together but with different speeds
scene1Timeline
  .to(
    ".sun-layer",
    {
      transform: "translate(0, 0)",
      duration: 0.3, // Fastest - finishes first
      ease: "power2.out",
    },
    0
  ) // All start at the same time
  .to(
    ".sun-backdrop-layer",
    {
      transform: "translate(0, 0)",
      duration: 0.3, // Fastest - finishes first
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
      duration: 0.5, // Fastest - finishes first
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
    ".sky-lines-layer",
    {
      opacity: 1,
      y: 0,
      duration: 0.1, // Fast
      ease: "power2.out",
    },
    0
  )
  .to(
    ".layer-1",
    {
      opacity: 1,
      y: 0,
      duration: 0.6, // Medium-fast
      ease: "power2.out",
    },
    0
  )
  .to(
    ".layer-2",
    {
      opacity: 1,
      y: 0,
      duration: 0.6, // Medium
      ease: "power2.out",
    },
    0
  )
  .to(
    ".layer-4",
    {
      opacity: 1,
      y: 0,
      duration: 0.9, // Medium-slow
      ease: "power2.out",
    },
    0
  )
  .to(
    ".layer-5",
    {
      opacity: 1,
      y: 0,
      duration: 1.1, // Slow
      ease: "power2.out",
    },
    0
  )
  .to(
    ".layer-6",
    {
      opacity: 1,
      y: 0,
      duration: 1.3, // Slower
      ease: "power2.out",
    },
    0
  )
  .to(
    ".trees-layer",
    {
      opacity: 1,
      y: 0,
      duration: 1.5, // Slow
      ease: "power2.out",
    },
    0
  )
  .to(
    ".plant-layer",
    {
      opacity: 1,
      y: 0,
      duration: 1.7, // Slower
      ease: "power2.out",
    },
    0
  )
  .to(
    ".tree-layer",
    {
      opacity: 1,
      y: 0,
      duration: 1.7, // Slower
      ease: "power2.out",
    },
    0
  )
  .to(
    ".wall-layer",
    {
      opacity: 1,
      y: 0,
      duration: 2.1, // Slower
      ease: "power2.out",
    },
    0.5
  )
  .to(
    ".road-layer",
    {
      opacity: 1,
      y: 0,
      duration: 2.3, // Slowest - finishes last
      ease: "power2.out",
    },
    0.7
  )
  .to(
    ".truck-layer",
    {
      motionPath: {
        path: "#truckPath",
        autoRotate: true,
        alignOrigin: [0.5, 0.5],
        align: "#truckPath",
        start: 0.1,
        end: 0.9,
      },
      duration: 2.5, // Slowest - finishes last
      ease: "power2.out",
    },
    3.0
  );
