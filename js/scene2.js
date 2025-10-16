const scene2 = document.querySelector(".scene2");

const scene2Timeline = gsap.timeline({
  scrollTrigger: {
    trigger: scene2,
    scrub: 0.3,
    pin: true,
  },
});

scene2Timeline
  .to(
    [".scene2 .layer-right-wall", ".scene2 .layer-gate"],
    {
      duration: 2,
      transform: "translateX(0) translateY(0)",
      opacity: 1,
      ease: "none",
    },
    0
  )
  .to(
    ".scene2 .layer-left-wall",
    {
      duration: 1,
      transform: "translateX(0) translateY(0)",
      opacity: 1,
      ease: "none",
    },
    0
  )
  .to(
    ".scene2 .layer-sun",
    {
      duration: 1,
      transform: "translateX(0) translateY(0)",
      ease: "none",
    },
    0
  );

gsap.to(".scene2 .layer-smoke", {
  x: "10%",
  duration: 8,
  ease: "linear",
  repeatDelay: 1,
  repeat: -1,
  delay: 1.5,
});

scene2Timeline
  .to(
    ".scene2 .truck-1",
    {
      motionPath: {
        path: "#wallTruckPath",
        autoRotate: false,
        alignOrigin: [0.5, 0.5],
        align: "#wallTruckPath",
      },
      duration: 4,
      scale: 0.3,
      ease: "none",
    },
    "<+=1"
  )
  .to(
    ".scene2 .truck-2",
    {
      motionPath: {
        path: "#wallTruckPath",
        autoRotate: false,
        alignOrigin: [0.5, 0.5],
        align: "#wallTruckPath",
        end: 0.88,
      },
      duration: 4,
      scale: 0.3,
      ease: "none",
    },
    ">-=3.7"
  )
  .to(
    ".scene2 .truck-3",
    {
      motionPath: {
        path: "#wallTruckPath",
        autoRotate: false,
        alignOrigin: [0.5, 0.5],
        align: "#wallTruckPath",
        end: 0.75,
      },
      duration: 4,
      scale: 0.3,
      ease: "none",
    },
    ">-=3.7"
  )
  .to(
    ".scene2 .truck-4",
    {
      motionPath: {
        path: "#wallTruckPath",
        autoRotate: false,
        alignOrigin: [0.5, 0.5],
        align: "#wallTruckPath",
        end: 0.62,
      },
      duration: 4,
      scale: 0.3,
      ease: "none",
    },
    ">-=3.7"
  )
  .to(
    ".scene2 .truck-5",
    {
      motionPath: {
        path: "#wallTruckPath",
        autoRotate: false,
        alignOrigin: [0.5, 0.5],
        align: "#wallTruckPath",
        end: 0.49,
      },
      duration: 4,
      scale: 0.3,
      ease: "none",
    },
    ">-=3.7"
  )
  .to(
    ".scene2 .truck-6",
    {
      motionPath: {
        path: "#wallTruckPath",
        autoRotate: false,
        alignOrigin: [0.5, 0.5],
        align: "#wallTruckPath",
        end: 0.36,
      },
      duration: 4,
      scale: 0.3,
      ease: "none",
    },
    ">-=3.7"
  )
  .to(
    ".scene2 .layer-text",
    {
      duration: 2,
      opacity: 1,
      transform: "translateX(0) translateY(0)",
      ease: "none",
    },
    ">"
  );

const scene2_1 = document.querySelector(".scene2-1");

const scene2_1Timeline = gsap.timeline({
  scrollTrigger: {
    trigger: scene2_1,
    scrub: 0.3,
    pin: true,
  },
});

scene2_1Timeline
  .to(
    ".scene2-1 .layer-text",
    {
      duration: 2,
      opacity: 1,
      transform: "translateY(0)",
      ease: "power2.out",
    },
    0
  )
  .to(
    ".scene2-1 .layer-video",
    {
      duration: 2,
      opacity: 1,
      transform: "translateY(0)",
      ease: "power2.out",
    },
    ">"
  );

const scene2_2 = document.querySelector(".scene2-2");

const scene2_2Timeline = gsap.timeline({
  scrollTrigger: {
    trigger: scene2_2,
    scrub: 0.3,
    pin: true,
  },
});

scene2_2Timeline
  .to(
    ".scene2-2 .text-1",
    {
      duration: 2,
      opacity: 1,
      transform: "translateY(0)",
      ease: "power2.out",
    },
    0
  )
  .to(
    ".scene2-2 .text-2",
    {
      duration: 2,
      opacity: 1,
      transform: "translateY(0)",
      ease: "power2.out",
    },
    "<+=1"
  )
  .to(
    ".scene2-2 .layer-video",
    {
      duration: 2,
      opacity: 1,
      transform: "translateY(0)",
      ease: "power2.out",
    },
    "<+=1"
  );

const scene2_3 = document.querySelector(".scene2-3");

const scene2_3Timeline = gsap.timeline({
  scrollTrigger: {
    trigger: scene2_3,
    pin: true,
    onEnter: () => scene2_3Timeline.play(),
  },
  paused: true,
});

scene2_3Timeline
  .to(
    ".scene2-3 .layer-text",
    {
      transform: "translateY(-12%)",
      duration: 1,
      opacity: 1,
      ease: "power2.out",
    },
    0
  )
  .to(
    ".scene2-3 .layer-text-2",
    {
      duration: 1,
      transform: "translateY(0)",
      opacity: 1,
      ease: "power2.out",
    },
    0
  );

const scene2_4 = document.querySelector(".scene2-4");

const scene2_4Timeline = gsap.timeline({
  scrollTrigger: {
    trigger: scene2_4,
    scrub: 0.3,
    pin: true,
  },
});

scene2_4Timeline.to(
  ".scene2-4 .layer-text",
  {
    duration: 2,
    opacity: 1,
    ease: "power2.out",
  },
  0
);

const scene2GalleryItems = document.querySelectorAll(".scene2-4 .gallery-item");

scene2GalleryItems.forEach((item) => {
  item.addEventListener("click", function () {
    const currentExpanded = document.querySelector(
      ".scene2-4 .gallery-item-expanded"
    );

    if (currentExpanded && currentExpanded !== this) {
      currentExpanded.classList.remove("gallery-item-expanded");
    }

    if (!this.classList.contains("gallery-item-expanded")) {
      this.classList.add("gallery-item-expanded");
    }
  });
});
