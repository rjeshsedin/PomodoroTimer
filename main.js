import Timer from "./timer.js";
import UI from "./ui.js";

const ui = new UI();

const timer = new Timer(
  (seconds) => ui.updateTime(seconds),
  (mode) => ui.updateMode(mode)
);

// Buttons
document.getElementById("start").addEventListener("click", () => {
  timer.start();
});

document.getElementById("pause").addEventListener("click", () => {
  timer.pause();
});

document.getElementById("reset").addEventListener("click", () => {
  timer.reset();
});

// Initial UI
ui.updateMode("Work");
ui.updateTime(25 * 60);