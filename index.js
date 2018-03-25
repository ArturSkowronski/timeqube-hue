const { TimequbeHue } = require('./src/timequbeHue');
const config = require('./config/default.json');

const timequbeHue = new TimequbeHue(config.host, config.username);
timequbeHue.schedule(25);
