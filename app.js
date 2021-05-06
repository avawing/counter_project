let counterNum = Number(document.getElementById("counter").textContent);

function increase() {
  document.getElementById("counter").textContent = counterNum += 1;
}

function decrease() {
  document.getElementById("counter").textContent = counterNum -= 1;
}

document
  .getElementsByClassName("prevBtn")[0]
  .addEventListener("click", decrease);
document
  .getElementsByClassName("nextBtn")[0]
  .addEventListener("click", increase);
