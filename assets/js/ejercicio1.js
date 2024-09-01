
const imagen = document.getElementById("jsimage");
let bordeActivo = false;

imagen.addEventListener("click", () => {
  
  if (bordeActivo == false) {
    imagen.style.border = "2px solid red"; // es la condición
    bordeActivo = true; // es el nuevo estado 
  } else {
    imagen.style.border = "none"; // es la condición
    bordeActivo = false; // es el nuevo estado 
  }
  // de esta forma, va alternando entre el true y el false con sus respectivas condiciones
});