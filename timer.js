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



