// Common GSAP functionality and general scene animations
gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(MotionPathPlugin);
gsap.registerPlugin(MotionPathHelper);

// Animate each section as it enters the viewport
const scenes = gsap.utils.toArray(".scene");
scenes.forEach((panel) => {
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
