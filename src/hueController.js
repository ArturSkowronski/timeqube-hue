exports.hueLight = ({ hueApi, lightState }) => (color) => {
  const state = lightState
    .create()
    .hsl(color, 100, 50);

  hueApi.setLightState(3, state)
    .then(() => console.log(`Light set to r:${color}`))
    .done();
};
