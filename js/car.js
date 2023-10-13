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
    this.on = !this.on;
  },
};

// Transfer brand and model to html.
const brandHeadline = document.querySelector("#brand");
const modelHeadline = document.querySelector("#model");

brandHeadline.innerHTML = car.type.brand;
modelHeadline.innerHTML = car.type.model;

// Transfer gear and gear ratio to html when buttons on page is clicked.

// Transfer object values to HUD in html.
const engineSpecs = document.querySelector("#engine");

engineSpecs.innerHTML += " " + car.engine.cc + "<p>CC</p>" + " , " + car.engine.hp + "<p>HP</p>" + " , " + car.engine.fuel;

//inital values.
const revolutions = document.querySelector("#revs");
const speed = document.querySelector("#speed");

revolutions.innerHTML += " " + car.revs + "<p>RPM</p>";
speed.innerHTML += " " + car.speed + "<p>Km/h</p>";

const odometer = document.querySelector("#km");
odometer.innerHTML += " " + car.odometer + "<p>Km</p>";

// Transfer car ignition value to HUD.
// const carIgnition = document.querySelector("#ignitionstatus");
// carIgnition.innerHTML += " " + car.on;

// Gear buttons onclick.
// Ignition button function.

const toggleIgnition = document.getElementById("ignitionbtn");
const ignitionStatus = document.getElementById("ignitionstatus");
const engineRevs = document.getElementById("revs");

toggleIgnition.addEventListener("click", function () {
  car.ignition();
  changeIgnitionStatus();
  changeEngineRevs();
});

function changeIgnitionStatus() {
  if (car.on === true) {
    ignitionStatus.textContent = "Ignition ON";
  } else {
    ignitionStatus.textContent = "Ignition OFF";
  }
}

function changeEngineRevs() {
  if (car.on === true) {
    engineRevs.innerHTML = "Revs: 800RPM";
  } else {
    engineRevs.textContent = "Revs: 0RPM";
  }
}

// function startCar(car) {
//   car.on = true;
//   car.revs = 800;
// }
