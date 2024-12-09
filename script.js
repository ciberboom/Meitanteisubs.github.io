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