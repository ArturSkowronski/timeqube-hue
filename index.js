const { schedule } = require('./src/timequbeHue');
const config = require('./config/default.json');
const { hueLight } = require('./src/hueController');
const { lightScheduler, intervalLight } = require('./src/lightScheduler');
const { HueApi, lightState } = require('node-hue-api');

const api = new HueApi(config.host, config.username);

schedule(25, lightScheduler(intervalLight(hueLight(api, lightState))));
