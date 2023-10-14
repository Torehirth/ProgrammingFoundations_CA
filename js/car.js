// The object below consists of nested objects, arrays of objects and a method/function.
// The object has different property values (string, number and bolean).

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
      name: "park",
      ratio: NaN,
    },
    {
      name: "reverse",
      ratio: 3.88,
    },
    {
      name: "neutral",
      ratio: NaN,
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
  ignition: function () {
    if (this.on) {
      this.on = false;
    } else {
      this.on = true;
    }
    // same as
    // ignition: function () {
    // this.on = !this.on;}

    // This method/function inverts/toggle the bolean value of the object property "on".
    // Calling the function turns the ignition on when it's off and vice versa.
  },
};

// Calling the ignition function to change the bolean value of the "on" property of the "car" object.
// Below is an example that calling the function shifts the bolean value(view in console).
car.ignition();
console.log("ignition status: " + car.on); //true
car.ignition();
console.log("ignition status: " + car.on); //false

// -------------------------------------------------------------------------------

// Transfer different property values to html sheet.

// Transfering brand and model to html.
const brandHeadline = document.querySelector("#brand");
const modelHeadline = document.querySelector("#model");

brandHeadline.innerHTML = car.type.brand;
modelHeadline.innerHTML = car.type.model;

console.log("Car brand and model: " + car.type.brand, car.type.model);

// Transfer object values to HUD in html.
const engineSpecs = document.querySelector("#engine");

engineSpecs.innerHTML += " " + car.engine.cc + "<p>CC</p>" + " , " + car.engine.hp + "<p>HP</p>" + " , " + car.engine.fuel;

console.log("Engine property values: " + car.engine.cc, car.engine.hp, car.engine.fuel);
console.log("Engine fuel value type: " + typeof car.engine.fuel);

//inital values.
const revolutions = document.querySelector("#revs");
const speed = document.querySelector("#speed");

revolutions.innerHTML += " " + car.revs + "<p>RPM</p>";
speed.innerHTML += " " + car.speed + "<p>Km/h</p>";

console.log("engine revs: " + car.revs);

const odometer = document.querySelector("#km");
odometer.innerHTML += " " + car.odometer + "<p>Km</p>";

console.log("car travel: " + car.odometer + "km");

// ------------------------------------------------------------------------------

// "Start" button toggle function.
// When "start" button is toggled the values of html elements below is simultaneous changed.

// Elements in html sheet I want to change by toggle/clicking "start" button.
const toggleIgnition = document.getElementById("ignitionbtn");
const ignitionStatus = document.getElementById("ignitionstatus");
const engineRevs = document.getElementById("revs");

console.log(typeof toggleIgnition);

// Adding event listener "click" to the "start" button and calling the car ignition function to toggle it's ignition value, and the functions for updating the elements/displayed values on ingition status and revs simultaneous.
toggleIgnition.addEventListener("click", function () {
  car.ignition();
  changeIgnitionStatus();
  changeEngineRevs();
});

function changeIgnitionStatus() {
  if (car.on === true) {
    // same as (car.on).
    ignitionStatus.textContent = "Ignition ON";
    console.log("Ignition ON");
  } else {
    ignitionStatus.textContent = "Ignition OFF";
    console.log("Ignition OFF");
  }
}

function changeEngineRevs() {
  if (car.on) {
    // same as (car.on === true).
    engineRevs.innerHTML = "Revs: 800RPM";
  } else {
    engineRevs.textContent = "Revs: 0RPM";
  }
}

console.log(typeof car.ignition);

//--------------------------------------------------------------------------------

// Transfering gear and gear ratio to html when buttons on page is clicked.

const currentGear = document.getElementById("currentgear");
const gearRatio = document.getElementById("gearratio");

function changeGear(i) {
  const gear = car.gears[i];

  if (car.on && i >= 0 && i < car.gears.length) {
    currentGear.textContent = "Current Gear: " + gear.name;
    gearRatio.textContent = "Gear Ratio: " + gear.ratio;

    console.log("Current gear: " + gear.name);
    console.log("Current gear ratio: " + gear.ratio);
  } else {
    if (car.on === false) {
      console.log("car is not running");
      alert("car is NOT running!");
    }
    if (i <= 0 || i >= car.gears.length) {
      console.log("invalid gear");
    }
  }
}

const parkButton = document.getElementById("park");
parkButton.addEventListener("click", function () {
  changeGear(0);
});

const reversButton = document.getElementById("revers");
reversButton.addEventListener("click", function () {
  changeGear(1);
});

const neutralButton = document.getElementById("neutral");
neutralButton.addEventListener("click", function () {
  changeGear(2);
});

const gear1Button = document.getElementById("gear1");
gear1Button.addEventListener("click", function () {
  changeGear(3);
});

const gear2Button = document.getElementById("gear2");
gear2Button.addEventListener("click", function () {
  changeGear(4);
});

const gear3Button = document.getElementById("gear3");
gear3Button.addEventListener("click", function () {
  changeGear(5);
});

const gear4Button = document.getElementById("gear4");
gear4Button.addEventListener("click", function () {
  changeGear(6);
});

const gear5Button = document.getElementById("gear5");
gear5Button.addEventListener("click", function () {
  changeGear(7);
});

const gear6Button = document.getElementById("gear6");
gear6Button.addEventListener("click", function () {
  changeGear(8);
});

// Transfer/displaying "park" gear values on page as text.
currentGear.innerHTML += " " + car.gears[0].name;
gearRatio.textContent = "Gear Ratio: " + car.gears[0].ratio;
