export default class Timer {
  #workTime = 25 * 60; // session time 25minutes=1500 seconds
  #breakTime = 5 * 60; //300 seconds
  #seconds = this.#workTime;
  #interval = null;
  #isWork = true;

  constructor(updateCallback, modeCallback) {
    this.updateCallback = updateCallback;
    this.modeCallback = modeCallback;
  }

  start() {
    if (this.#interval) return;

    this.#interval = setInterval(() => {
      this.#seconds--;

      if (this.#seconds < 0) {
        this.#switchMode();
      }

      this.updateCallback(this.#seconds);
    }, 1000);
  }
   pause() {
    clearInterval(this.#interval);// stops the interval
    this.#interval = null;
  }
   reset() {
    this.pause();
    this.#isWork = true;
    this.#seconds = this.#workTime;
    this.modeCallback("Work");
    this.updateCallback(this.#seconds);
  }
  #switchMode() {
    this.#isWork = !this.#isWork;
    this.#seconds = this.#isWork ? this.#workTime : this.#breakTime;

    this.modeCallback(this.#isWork ? "Work" : "Break");
  }
}



//Ui handling:

export class UI {
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