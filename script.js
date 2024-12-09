// Scroll suave para enlaces
document.querySelectorAll('a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            e.preventDefault();
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// Resaltar el enlace activo del menú
const links = document.querySelectorAll('nav a');
const currentPath = window.location.pathname;

links.forEach(link => {
    if (currentPath.includes(link.getAttribute('href'))) {
        link.classList.add('active');
    }
});

// Animar tablas al hacer scroll
const tables = document.querySelectorAll('table');
const options = {
    threshold: 0.1
};

const tableObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = 1;
            entry.target.style.transform = 'translateY(0)';
            observer.unobserve(entry.target);
        }
    });
}, options);

tables.forEach(table => {
    table.style.opacity = 0;
    table.style.transform = 'translateY(50px)';
    tableObserver.observe(table);
});
// Configuración de progreso
const proyectos = [
    { nombre: "Capítulo 1054", progreso: 90 },
    { nombre: "Película 26", progreso: 100 },
    { nombre: "Manga Capítulo 1080", progreso: 15 },
    { nombre: "Ejemplo", progreso: 50 }
];

// Actualizar las barras de progreso dinámicamente
document.addEventListener("DOMContentLoaded", () => {
    const progressItems = document.querySelectorAll(".progress-item");
    proyectos.forEach((proyecto, index) => {
        if (progressItems[index]) {
            const progressBar = progressItems[index].querySelector(".progress");
            const progressText = progressItems[index].querySelector(".progress-text");

            // Actualiza el porcentaje
            progressBar.style.width = `${proyecto.progreso}%`;
            progressText.textContent = `${proyecto.progreso}%`;

            // Cambia el color según el progreso
            if (proyecto.progreso <= 30) {
                progressBar.style.backgroundColor = "#e74c3c"; // Rojo
            } else if (proyecto.progreso <= 70) {
                progressBar.style.backgroundColor = "#f1c40f"; // Amarillo
            } else {
                progressBar.style.backgroundColor = "#2ecc71"; // Verde
            }
        }
    });
});