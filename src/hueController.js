const { HueApi, lightState } = require('node-hue-api');

exports.HueController = class HueController {
  constructor(host, username) {
    this.api = new HueApi(host, username);
  }

  setLight(red, green) {
    const state = lightState
      .create()
      .on()
      .ct(500)
      .rgb(red, green, 255)
      .brightness(100);

    this.api.setLightState(3, state)
      .then(() => console.log(`Light set to r:${red} g:${green}`))
      .done();
  }
};

