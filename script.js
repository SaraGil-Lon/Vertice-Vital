// Selección de elementos
const welcomeScreen = document.getElementById('welcome-screen');
const mainScreen = document.getElementById('main-screen');
const welcomeForm = document.getElementById('welcome-form');

// Manejo del formulario
welcomeForm.addEventListener('submit', function (e) {
    e.preventDefault(); // Evita que el formulario recargue la página

    const nombre = document.getElementById('nombre').value.trim();
    const apellido = document.getElementById('apellido').value.trim();

    if (nombre && apellido) {
        alert(`¡Bienvenido, ${nombre} ${apellido}!`);
        welcomeScreen.style.display = 'none'; // Oculta la pantalla de bienvenida
        mainScreen.style.display = 'block'; // Muestra la página principal
    } else {
        alert('Por favor, ingresa ambos campos para continuar.');
    }
});
