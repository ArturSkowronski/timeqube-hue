var hue = require("node-hue-api"),
    HueApi = hue.HueApi,
    lightState = hue.lightState;

var displayResult = function(result) {
    console.log("green" + green + ":red" + red);
};

var host = "192.168.1.55",
    username = "FILL",
    api;

api = new HueApi(host, username);

let brightness = 100;
let green = 255;
let red = 0;

const intervalObj = setInterval(setLight, 1000);

function setLight(arg) {
    if(red == 255){
        green=green - 5
    } else {
        red=red + 5
    }    

    const state = lightState
        .create()
        .on()
        .ct(500)	
        .rgb(255, 255, 255)
        .brightness(100);

    api.setLightState(3, state)
        .then(displayResult)
        .done();
    brightness--;

    if (!green) {
        clearInterval(intervalObj);
        console.log("I'm off");
    }
}
    
