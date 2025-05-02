const btn = document.querySelector("#audio-btn");
const audioEl = document.querySelector("#audio-play");

const handleClick = (e) => {
  audioEl.play();
};

btn.addEventListener("click", handleClick);
