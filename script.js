const music = document.getElementById("music");
const playButton = document.getElementById("playButton");
const record = document.getElementById("record");
const volume = document.getElementById("volume");

const popup = document.getElementById("popup");

const contents = document.querySelectorAll(".content");

/* =========================
   MUSIC
========================= */

music.volume = 0.6;

function toggleMusic() {
  if (music.paused) {
    music
      .play()
      .then(function () {
        playButton.innerHTML = "❚❚";

        record.classList.add("playing");
      })
      .catch(function () {
        alert("Make sure music.mp3 is in the same folder as index.html.");
      });
  } else {
    music.pause();

    playButton.innerHTML = "▶";

    record.classList.remove("playing");
  }
}

/* Volume */

volume.addEventListener("input", function () {
  music.volume = this.value;
});

/* =========================
   OPEN SECTIONS
========================= */

function openSection(sectionName) {
  popup.classList.add("active");

  document.body.style.overflow = "hidden";

  contents.forEach(function (content) {
    content.classList.remove("active");
  });

  const selected = document.getElementById(sectionName);

  if (selected) {
    selected.classList.add("active");
  }
}

/* =========================
   CLOSE POPUP
========================= */

function closeSection() {
  popup.classList.remove("active");

  document.body.style.overflow = "auto";
}

/* Click outside popup */

popup.addEventListener("click", function (event) {
  if (event.target === popup) {
    closeSection();
  }
});

/* ESC key */

document.addEventListener("keydown", function (event) {
  if (event.key === "Escape") {
    closeSection();
  }
});
