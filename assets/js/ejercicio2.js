const cantidad1 = document.querySelector("#Face");
const cantidad2 = document.querySelector("#Tik");
const cantidad3 = document.querySelector("#Wsp");
const message = document.querySelector("#resultado");
const button = document.querySelector("#button");

button.addEventListener("click", () => {
  if (cantidad1.value >= 0 && cantidad2.value >= 0 && cantidad3.value >= 0) {
    const summation =
      parseInt(cantidad1.value) +
      parseInt(cantidad2.value) +
      parseInt(cantidad3.value);
    if (summation == 1) {
      message.textContent = `llevas 1 sticker`;
    } else if (summation <= 10) {
      message.textContent = `Llevas ${summation} stickers!`;
    } else {
      message.textContent = `Llevas demasiados stickers!`;
    }
  } else {
    message.textContent =
      "Debes Selecionar solo valores mayores o iguales a 0 ";
  }
});
