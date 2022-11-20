let convertedContainer = document.querySelector(".converted-container"),
  main = document.querySelector("main"),
  h4 = document.querySelectorAll("h4"),
  p = document.querySelectorAll("p"),
  converted = document.querySelectorAll(".converted"),
  valueInput = document.getElementById("value-input"),
  mp = document.getElementById("m-p"),
  lp = document.getElementById("l-p"),
  kp = document.getElementById("k-p"),
  ctaBtn = document.getElementById("cta-btn");

function toggleDarkMode() {
  convertedContainer.classList.toggle("light-mode");
  main.classList.toggle("light-mode");
  h4.forEach((element) => {
    element.classList.toggle("light-mode");
  });
  p.forEach((element) => {
    element.classList.toggle("light-mode");
  });
  converted.forEach((element) => {
    element.classList.toggle("light-mode");
  });
}

ctaBtn.addEventListener("click", () => convert());
valueInput.addEventListener("keypress", function (event) {
  if (event.key == "Enter") convert();
});

function convert() {
  const value = valueInput.value;
  mp.textContent = `${value} meters = ${(value * 3.28083).toFixed(
    2
  )} feet | ${value} feet = ${(value * 0.30479).toFixed(2)} meters`;
  lp.textContent = `${value} liters = ${(value * 0.26417).toFixed(
    2
  )} gallons | ${value} gallons = ${(value * 3.78541).toFixed(2)} liters`;
  kp.textContent = `${value} kilos = ${(value * 2.20462).toFixed(
    2
  )} pounds | ${value} pounds = ${(value * 0.45359).toFixed(2)} kilos`;
}
