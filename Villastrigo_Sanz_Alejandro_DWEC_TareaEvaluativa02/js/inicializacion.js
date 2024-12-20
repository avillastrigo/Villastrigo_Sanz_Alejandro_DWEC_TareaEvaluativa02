function redirigir(pagina) {
    window.location.href = `${pagina}.html`;
  }

// Inicialización según la página
document.addEventListener("DOMContentLoaded", () => {
    const bodyClass = document.body.className;
  
    switch (bodyClass) {
      case "registro":
        initRegistro();
        break;
      case "bienvenida":
        initBienvenida();
        break;
      case "instrucciones":
        initInstrucciones();
        break;
      case "seleccion_nivel":
        initSeleccionNivel();
        break;
    }
  });