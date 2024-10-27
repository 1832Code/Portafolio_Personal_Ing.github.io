// JavaScript
// Configuración del observador
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      // Si el elemento entra en el viewport, agrega la clase 'visible'
      entry.target.classList.add("visible");
    } else {
      // Opcional: Si quieres que el elemento desaparezca al salir del viewport
      entry.target.classList.remove("visible");
    }
  });
});

// Selecciona todos los elementos que quieres que tengan el efecto
document
  .querySelectorAll(".fade-in-section")
  .forEach((el) => observer.observe(el));
