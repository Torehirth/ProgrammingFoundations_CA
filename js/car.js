const car = {
  type: {
    brand: "volkswagen",
    model: "golf",
  },
  engine: {
    fuel: "diesel",
    cc: 2000,
    hp: 150,
  },
  odometer: 200000,
  gearbox: "dsg",
  gears: [
    {
      name: "reverse",
      ratio: 3.88,
    },
    {
      name: "neutral",
      ratio: 0,
    },
    {
      name: "first",
      ratio: 4.04,
    },
    {
      name: "second",
      ratio: 2.37,
    },
    {
      name: "third",
      ratio: 1.56,
    },
    {
      name: "fourth",
      ratio: 1.16,
    },
    {
      name: "fifth",
      ratio: 0.85,
    },
    {
      name: "sixth",
      ratio: 0.76,
    },
  ],
  revs: 0,
  speed: 0,
  on: false,
  // function:
  ignition: function () {
    car.on = !car.on;
  },
};

// Transfer brand and model to html.
const brandHeadline = document.querySelector("#brand");
const modelHeadline = document.querySelector("#model");

brandHeadline.innerHTML = car.type.brand;
modelHeadline.innerHTML = car.type.model;

// Transfer gear and gear ratio to html when buttons on page is clicked.

// Transfer Km to HUD in html.

const odometer = document.querySelector("#km");
odometer.innerHTML += " " + car.odometer + "<p>km</p>";

// Transfer eninge specs to html.
engineSpecs = document.querySelector("#engine");

engineSpecs.innerHTML += " " + car.engine.cc + "<p>CC</p>" + " , " + car.engine.hp + "<p>Hp</p>" + " , " + car.engine.fuel;
