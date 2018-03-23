const { HueController } = require('./src/hueController');
const { LightScheduler } = require('./src/lightScheduler');

const hueController = new HueController('', '');
const lightScheduler = new LightScheduler(hueController);

lightScheduler.schedule(25);
