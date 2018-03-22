const { HueController } = require('./src/hueController');

const hueController = new HueController('', '');

let counter = 0.0;

const intervalObj = setInterval(() => {
  const color = (1 - counter) * 120;

  hueController.setLight(color);
  counter += 0.01;
  if (counter > 1) {
    clearInterval(intervalObj);
    console.log("I'm off");
  }
}, 1000);
