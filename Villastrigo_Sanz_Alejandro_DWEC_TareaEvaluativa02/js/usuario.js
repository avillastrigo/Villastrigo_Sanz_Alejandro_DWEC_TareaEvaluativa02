function initRegistro() {
  const loginButton = document.getElementById("confirmarRegistro");
  loginButton.addEventListener("click", () => {
    const username = document.getElementById("usuario").value;
    const password = document.getElementById("contrasena").value;

    // Verificar que los campos no estén vacíos
    if (!username || !password) {
      alert("Por favor, ingresa tu usuario y contraseña.");
      return;
    }

    // Validar que la contraseña sea alfanumérica
    const passwordRegex = /^[a-zA-Z0-9]+$/;
    if (!passwordRegex.test(password)) {
      alert("La contraseña debe ser alfanumérica.");
      return;
    }

    // Verificar usuario y contraseña
    const usuarioValido = usuarios.find(
      (user) => user.usuario === username && user.contraseña === password
    );

    if (usuarioValido) {
      alert("¡Bienvenido!");
      redirigir("bienvenida");
    } else {
      alert("Usuario o contraseña incorrectos.");
    }
  });
}