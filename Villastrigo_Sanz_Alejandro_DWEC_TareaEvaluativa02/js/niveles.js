
document.addEventListener("DOMContentLoaded", () => {
    // --- Página de Bienvenida ---
    const continueButton = document.getElementById("iniciarInstrucciones");
    if (continueButton) {
      continueButton.addEventListener("click", () => {
        redirigir("instrucciones");
      });
    }
  
    // --- Página de Instrucciones ---
    const skullImage = document.getElementById("skull");
    if (skullImage) {
      skullImage.addEventListener("click", () => {
        redirigir("seleccion_nivel1");
      });
    }
  
    // Navegación cíclica de niveles
    const levels = ["Nivel 1", "Nivel 2", "Nivel 3"];
    let currentLevel = parseInt(localStorage.getItem("currentLevel")) || 0;
  
    const leftArrow = document.querySelector(".flecha-izquierda");
    const rightArrow = document.querySelector(".flecha-derecha");
  
    if (leftArrow) {
      leftArrow.addEventListener("click", () => {
        if (currentLevel === 0) {
          currentLevel = levels.length - 1;
        } else {
          currentLevel--;
        }
        localStorage.setItem("currentLevel", currentLevel);
        window.location.href = `seleccion_nivel${currentLevel + 1}.html`;
      });
    }
  
    if (rightArrow) {
      rightArrow.addEventListener("click", () => {
        if (currentLevel === levels.length - 1) {
          currentLevel = 0;
        } else {
          currentLevel++;
        }
        localStorage.setItem("currentLevel", currentLevel);
        window.location.href = `seleccion_nivel${currentLevel + 1}.html`;
      });
    }
  
    // Botones de jugar
    const playButtons = document.querySelectorAll(".boton-jugar");
    playButtons.forEach((button) => {
      button.addEventListener("click", () => {
        const nivel = button.getAttribute("data-nivel");
        if (nivel) {
          window.location.href = `Game${nivel}.html`;
        } else {
          console.error("El botón no tiene un nivel asignado.");
        }
      });
    });
  
    // Flecha de salida
    const flechaSalir = document.querySelector(".flecha-salir");
    if (flechaSalir) {
      flechaSalir.addEventListener("click", () => {
        window.location.href = "seleccion_nivel1.html";
      });
    }
  });