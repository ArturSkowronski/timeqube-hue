exports.LightScheduler = class LightScheduler {
  constructor(hueController) {
    this.hueController = hueController;
    this.counter = 0.0;
  }

  schedule(time) {
    const period = 1 / (time * 60);
    const intervalObj = setInterval(() => {
      const color = (1 - this.counter) * 120;

      this.hueController.setLight(color);
      this.counter += period;

      if (this.counter > 1) {
        clearInterval(intervalObj);
        console.log("I'm off");
      }
    }, 1000);
  }
};
