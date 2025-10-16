// Scene5-specific animations and effects
const scene5 = document.querySelector(".scene5");

// Create a timeline for the entire scene animation
const scene5Timeline = gsap.timeline({
  scrollTrigger: {
    trigger: scene5,
    scrub: 0.3,
    pin: true,
  },
});

// Animate the layers on scroll
scene5Timeline
  .to(
    ".scene5 .layer-city",
    {
      duration: 1,
      opacity: 1,
      transform: "translateX(0) translateY(0)",
      ease: "power2.out",
    },
    0
  )
  .to(
    ".scene5 .layer-trash",
    {
      duration: 1,
      opacity: 1,
      ease: "power2.out",
    },
    ">"
  )
  .to(
    ".scene5 .layer-colored-bags",
    {
      duration: 1,
      opacity: 1,
      ease: "power2.out",
    },
    "<+=0.5"
  )
  .to(
    ".scene5 .layer-barrel",
    {
      duration: 1,
      opacity: 1,
      ease: "power2.out",
    },
    "<+=0.5"
  )
  .to(
    ".scene5 .layer-fire",
    {
      duration: 1,
      opacity: 1,
      ease: "power2.out",
    },
    "<+=0.5"
  )
  .to(
    ".scene5 .layer-fire2",
    {
      duration: 1,
      opacity: 1,
      ease: "power2.out",
    },
    "<+=0.5"
  )
  .to(
    ".scene5 .layer-fire3",
    {
      duration: 1,
      opacity: 1,
      ease: "power2.out",
    },
    "<+=0.5"
  )
  .to(
    ".scene5 .layer-fire4",
    {
      duration: 1,
      opacity: 1,
      ease: "power2.out",
    },
    "<+=0.5"
  )
  .to(
    ".scene5 .layer-houses-fire",
    {
      duration: 1,
      opacity: 1,
      ease: "power2.out",
    },
    "<+=0.5"
  )
  .to(
    ".scene5 .layer-fire-smoke",
    {
      duration: 1,
      opacity: 1,
      ease: "power2.out",
    },
    "<"
  )
  .to(
    ".scene5 .layer-smoke",
    {
      duration: 1,
      opacity: 1,
      ease: "power2.out",
    },
    "<"
  )
  .to(
    ".scene5 .layer-text",
    {
      duration: 1,
      opacity: 1,
      transform: "translateX(0) translateY(0)",
      ease: "power2.out",
    },
    ">"
  );

gsap.to(".scene5 .layer-smoke", {
  x: "10%",
  duration: 8,
  ease: "linear",
  repeat: -1,
  yoyo: true,
  repeatDelay: 1,
  delay: 1.5,
});

const scene5_1 = document.querySelector(".scene5-1");

const scene5_1Timeline = gsap.timeline({
  scrollTrigger: {
    trigger: scene5_1,
    scrub: 0.3,
    pin: true,
  },
});

scene5_1Timeline
  .to(
    ".scene5-1 .main-heading",
    {
      duration: 1,
      opacity: 1,
      transform: "translateY(0)",
      ease: "none",
    },
    0
  )
  .to(
    ".scene5-1 .highlight-text",
    {
      duration: 1,
      opacity: 1,
      transform: "translateY(0)",
      ease: "none",
    },
    "<+=0.5"
  )
  .to(
    ".scene5-1 .body-text",
    {
      duration: 1,
      opacity: 1,
      transform: "translateY(0)",
      ease: "none",
    },
    "<+=0.5"
  )
  .to(
    ".scene5-1 .quote-text",
    {
      duration: 1,
      opacity: 1,
      transform: "translateY(0)",
      ease: "none",
    },
    "<+=0.5"
  )
  .to(
    ".scene5-1 .eye-badge",
    {
      duration: 1,
      opacity: 1,
      transform: "translateY(0)",
      ease: "none",
    },
    "<"
  )
  .to(
    ".scene5-1 .audio-player",
    {
      duration: 1,
      opacity: 1,
      transform: "translateY(0)",
      ease: "none",
    },
    "<"
  );

const scene5_2 = document.querySelector(".scene5-2");

const scene5_2Timeline = gsap.timeline({
  scrollTrigger: {
    trigger: scene5_2,
    scrub: 0.2,
    pin: true,
  },
});

scene5_2Timeline
  .to(
    ".scene5-2 .video-container",
    {
      duration: 1,
      opacity: 1,
      transform: "translateY(0)",
      ease: "none",
    },
    0
  )
  .to(
    ".scene5-2 .text-content",
    {
      duration: 1,
      opacity: 1,
      transform: "translateY(0)",
      ease: "none",
    },
    "<+=0.5"
  );

const scene5_3 = document.querySelector(".scene5-3");

const scene5_3Timeline = gsap.timeline({
  scrollTrigger: {
    trigger: scene5_3,
    scrub: 0.3,
    pin: true,
  },
});

scene5_3Timeline.to(
  ".scene5-3 .layer-text",
  {
    duration: 2,
    opacity: 1,
    transform: "translateY(0)",
    ease: "power2.out",
  },
  0
);

const scene5_4 = document.querySelector(".scene5-4");

const scene5_4Timeline = gsap.timeline({
  scrollTrigger: {
    trigger: scene5_4,
    scrub: 0.3,
    pin: true,
  },
});

scene5_4Timeline.to(
  ".scene5-4 .layer-text",
  {
    duration: 2,
    opacity: 1,
    transform: "translateY(0)",
    ease: "power2.out",
  },
  0
);

const scene5_5 = document.querySelector(".scene5-5");

const scene5_5Timeline = gsap.timeline({
  scrollTrigger: {
    trigger: scene5_5,
    scrub: 0.3,
    pin: true,
  },
});

scene5_5Timeline.to(
  ".scene5-5 .layer-text",
  {
    duration: 2,
    opacity: 1,
    transform: "translateY(0)",
    ease: "power2.out",
  },
  0
);

const scene5_6 = document.querySelector(".scene5-6");

const scene5_6Timeline = gsap.timeline({
  scrollTrigger: {
    trigger: scene5_6,
    scrub: 0.3,
    pin: true,
  },
});

scene5_6Timeline.to(
  ".scene5-6 .layer-text",
  {
    duration: 2,
    opacity: 1,
    transform: "translateY(0)",
    ease: "power2.out",
  },
  0
);

const scene5_7 = document.querySelector(".scene5-7");

const scene5_7Timeline = gsap.timeline({
  scrollTrigger: {
    trigger: scene5_7,
    scrub: 0.3,
    pin: true,
  },
});

scene5_7Timeline.to(
  ".scene5-7 .layer-text",
  {
    duration: 2,
    opacity: 1,
    transform: "translateY(0)",
    ease: "power2.out",
  },
  0
);

const scene5GalleryItems = document.querySelectorAll(".scene5-3 .gallery-item");

scene5GalleryItems.forEach((item) => {
  item.addEventListener("click", () => {
    const isExpanded = item.classList.contains("gallery-item-expanded");

    scene5GalleryItems.forEach((otherItem) => {
      otherItem.classList.remove("gallery-item-expanded");
    });

    if (!isExpanded) {
      item.classList.add("gallery-item-expanded");
    }
  });
});
