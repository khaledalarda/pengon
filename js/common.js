gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(MotionPathPlugin);
gsap.registerPlugin(MotionPathHelper);

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

const modal = document.getElementById("infoModal");
const infoButton = document.getElementById("infoButton");
const modalClose = document.getElementById("modalClose");

infoButton.addEventListener("click", () => {
  modal.classList.add("show");
});

modalClose.addEventListener("click", () => {
  modal.classList.remove("show");
});

modal.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.classList.remove("show");
  }
});

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && modal.classList.contains("show")) {
    modal.classList.remove("show");
  }
});

window.addEventListener("scroll", () => {
  const videos = document.querySelectorAll("video");
  videos.forEach((video) => {
    if (!video.paused) {
      video.pause();
    }
  });
});
