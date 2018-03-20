const { HueController } = require('./src/hueController');

const hueController = new HueController('', '');

let red = 0;
let green = 255;

const intervalObj = setInterval(() => {
  if (red === 255) {
    green -= 5;
  } else {
    red += 5;
  }

  hueController.setLight(red, green);

  if (!green) {
    clearInterval(intervalObj);
    console.log("I'm off");
  }
}, 1000);
