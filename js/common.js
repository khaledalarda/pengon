// Common GSAP functionality and general scene animations
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
