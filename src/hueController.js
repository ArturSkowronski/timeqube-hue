const { HueApi, lightState } = require('node-hue-api');

exports.HueController = class HueController {
  constructor(host, username) {
    this.api = new HueApi(host, username);
  }

  setLight(color) {
    const state = lightState
      .create()
      .hsl(color, 100, 50);

    this.api.setLightState(3, state)
      .then(() => console.log(`Light set to r:${color}`))
      .done();
  }
};

