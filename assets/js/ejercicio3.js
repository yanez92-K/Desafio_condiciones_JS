const digit1 = document.querySelector("#digit-1");
const digit2 = document.querySelector("#digit-2");
const digit3 = document.querySelector("#digit-3");
const message2 = document.querySelector("#message2");
const button2 = document.querySelector("#button2");

button2.addEventListener("click", () => {
  if (
    Number(digit1.value) === 9 &&
    Number(digit2.value) === 1 &&
    Number(digit3.value) === 1
  ) {
    message2.textContent = "Pasword 1 correcto";
  } else if (
    Number(digit1.value) === 7 &&
    Number(digit2.value) === 1 &&
    Number(digit3.value) === 4
  ) {
    message2.textContent = "Pasword 2 correcto";
  } else {
    message2.textContent = "Pasword Incorrecto";
  }
});
