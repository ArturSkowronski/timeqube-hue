const { host, username } = require('./config/default.json');
const { hueLight } = require('./src/hueController');
const { lightScheduler, intervalLight } = require('./src/lightScheduler');
const { HueApi, lightState } = require('node-hue-api');
const { compose } = require('lodash/fp');

const scheduler = compose(
  lightScheduler,
  intervalLight,
  () => hueLight({ hueApi: new HueApi(host, username), lightState }),
);

scheduler()(25);
