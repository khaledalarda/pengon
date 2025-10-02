gsap.registerPlugin(ScrollTrigger);

// Animate each section as it enters the viewport
gsap.utils.toArray(".panel").forEach((panel) => {
  gsap.from(panel, {
    opacity: 0,
    y: 100,
    duration: 1,
    scrollTrigger: {
      trigger: panel,
      start: "top 80%",
      toggleActions: "play none none reverse",
    },
  });
});
