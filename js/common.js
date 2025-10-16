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

  const audios = document.querySelectorAll("audio");
  audios.forEach((audio) => {
    if (!audio.paused) {
      audio.pause();
    }
  });
});

function pauseAllAudio(exceptElement = null) {
  const allAudioElements = document.querySelectorAll(".audio-player audio");
  allAudioElements.forEach((audio) => {
    if (audio !== exceptElement && !audio.paused) {
      audio.pause();
      const playerContainer = audio.closest(".audio-player");
      if (playerContainer) {
        const playBtn = playerContainer.querySelector(".audio-player__btn");
        if (playBtn) {
          playBtn.classList.remove("playing");
        }
      }
    }
  });
}

function initAudioPlayer(audioElement) {
  if (!audioElement) return;

  const playerContainer = audioElement.closest(".audio-player");
  if (!playerContainer) return;

  const playBtn = playerContainer.querySelector(".audio-player__btn");
  const progressContainer = playerContainer.querySelector(".audio-player__progress");
  const progressIndicator = playerContainer.querySelector(".audio-player__progress-indicator");
  const currentTimeEl = playerContainer.querySelector(".audio-player__time--current");
  const durationEl = playerContainer.querySelector(".audio-player__time--duration");

  function formatTime(seconds) {
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs.toString().padStart(2, "0")}`;
  }

  function updateProgress() {
    if (!audioElement.duration) return;
    const progress = audioElement.currentTime / audioElement.duration;
    const progressWidth = progressContainer.offsetWidth;
    const indicatorPosition = progress * progressWidth;
    progressIndicator.style.left = `${indicatorPosition}px`;
    currentTimeEl.textContent = formatTime(audioElement.currentTime);
  }

  audioElement.addEventListener("loadedmetadata", () => {
    durationEl.textContent = formatTime(audioElement.duration);
  });

  audioElement.addEventListener("timeupdate", updateProgress);

  audioElement.addEventListener("play", () => {
    pauseAllAudio(audioElement);
    playBtn.classList.add("playing");
  });

  audioElement.addEventListener("pause", () => {
    playBtn.classList.remove("playing");
  });

  playBtn.addEventListener("click", () => {
    if (audioElement.paused) {
      audioElement.play();
    } else {
      audioElement.pause();
    }
  });

  audioElement.addEventListener("ended", () => {
    playBtn.classList.remove("playing");
    audioElement.currentTime = 0;
  });
}

document.addEventListener("DOMContentLoaded", () => {
  const audioElements = document.querySelectorAll(".audio-player audio");
  audioElements.forEach((audio) => initAudioPlayer(audio));
});
