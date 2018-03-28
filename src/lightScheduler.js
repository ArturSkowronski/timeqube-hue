exports.lightScheduler = intervalFn => (time) => {
  const period = 1 / (time * 60);
  setInterval(intervalFn(period).bind(this), 1000);
};

exports.intervalLight = (hueFn) => {
  let counter = 0.0;

  return period => () => {
    const color = (1 - counter) * 120;

    hueFn(color);
    counter += period;

    if (counter > 1) {
      clearInterval(this);
      console.log("I'm off");
    }
  };
};
