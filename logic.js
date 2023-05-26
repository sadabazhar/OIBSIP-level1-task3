let celciusValue = document.getElementById("Celcius");
let fahrenheitValue = document.getElementById("Fahrenheit");
let kelvinValue = document.getElementById("Kelvin");

let btn = document.querySelector(".clean button");

function roundNumber(number) {
  return Math.round(number * 100) / 100;
}

// Converting Celcius to Fahrenheit and Kelvin
celciusValue.addEventListener("input", function () {
  let celTemp = parseFloat(celciusValue.value);
  let fahTemp = celTemp * (9 / 5) + 32;
  let kelTemp = celTemp + 273.15;

  fahrenheitValue.value = roundNumber(fahTemp);
  kelvinValue.value = roundNumber(kelTemp);
});

// Converting Fahrenheit to Celcius and Kelvin
fahrenheitValue.addEventListener("input", function () {
  let fahTemp = parseFloat(fahrenheitValue.value);
  let celTemp = (fahTemp - 32) * (5 / 9);
  let kelTemp = (fahTemp - 32) * (5 / 9) + 273.15;

  celciusValue.value = roundNumber(celTemp);
  kelvinValue.value = roundNumber(kelTemp);
});

// Converting Kelvin to Celcius and fahrenheit
kelvinValue.addEventListener("input", function () {
  let kelTemp = parseFloat(kelvinValue.value);
  let celTemp = kelTemp - 273.15;
  let fahTemp = (kelTemp - 273.15) * (9 / 5) + 32;

  celciusValue.value = roundNumber(celTemp);
  fahrenheitValue.value = roundNumber(fahTemp);
});

// For erase all input value
btn.addEventListener("click", () => {
  celciusValue.value = "";
  fahrenheitValue.value = "";
  kelvinValue.value = "";
});
