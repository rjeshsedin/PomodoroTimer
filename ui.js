
export default class UI {
  constructor() {
    this.timeDisplay = document.getElementById("time");
    this.modeDisplay = document.getElementById("mode");
  }

  formatTime(seconds) {
    const m = String(Math.floor(seconds / 60)).padStart(2, "0");
    const s = String(seconds % 60).padStart(2, "0");
    return `${m}:${s}`;
  }

  updateTime(seconds) {
    this.timeDisplay.textContent = this.formatTime(seconds);
  }

  updateMode(mode) {
    this.modeDisplay.textContent = mode;
  }
}
