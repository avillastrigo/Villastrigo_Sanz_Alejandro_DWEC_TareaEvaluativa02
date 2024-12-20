
document.addEventListener("DOMContentLoaded", () => {
    // Seleccionar ambos elementos con IDs 'texto' y 'texto1'
    const elementos = document.querySelectorAll('#texto, #texto1, #texto2');
    
    elementos.forEach((texto) => {
      if (texto) {
        const children = Array.from(texto.children); // Obtener los hijos del elemento
        texto.innerHTML = ''; // Vaciar el contenido original
  
        let tiempoAcumulado = 0; // Control del tiempo de animación acumulativo
  
        children.forEach((elemento) => {
          const nuevoElemento = document.createElement(elemento.tagName.toLowerCase());
          nuevoElemento.className = elemento.className;
  
          const contenidoTexto = elemento.textContent.trim();
          const palabras = contenidoTexto.split(/\s+/); // Dividir en palabras
  
          palabras.forEach((palabra, index) => {
            const spanPalabra = document.createElement('span');
            spanPalabra.style.whiteSpace = 'nowrap'; // Evitar que se dividan palabras
            spanPalabra.className = 'palabra';
  
            [...palabra].forEach((letra, letraIndex) => {
              const spanLetra = document.createElement('span');
              spanLetra.textContent = letra;
              spanLetra.style.animationDelay = `${tiempoAcumulado + letraIndex * 0.05}s`;
              spanLetra.className = 'letra';
              spanPalabra.appendChild(spanLetra);
            });
  
            nuevoElemento.appendChild(spanPalabra);
  
            if (index < palabras.length - 1) {
              // Agregar espacio entre palabras
              const espacio = document.createElement('span');
              espacio.textContent = '\u00A0'; // Espacio no divisible
              espacio.style.animationDelay = `${tiempoAcumulado + palabra.length * 0.05}s`;
              espacio.className = 'espacio';
              nuevoElemento.appendChild(espacio);
            }
  
            tiempoAcumulado += palabra.length * 0.05;
          });
  
          tiempoAcumulado += 0.5; // Pausa entre elementos
          texto.appendChild(nuevoElemento);
        });
      }
    });
  });