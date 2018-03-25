const { HueController } = require('./hueController');
const { LightScheduler } = require('./lightScheduler');

exports.TimequbeHue = class TimequbeHue {
  constructor(host, username) {
    const hueController = new HueController(host, username);
    this.lightScheduler = new LightScheduler(hueController);
  }

  schedule(time) {
      console.log("Schedule");
    this.lightScheduler.schedule(time);
  }
};
