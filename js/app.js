// --- Selección de elementos ---
const menu = document.querySelector("#menu");
const menuLinks = document.querySelectorAll(".nav-button");
const sections = document.querySelectorAll("section");
const hamburger = document.querySelector(".hamburger");
const sidebar = document.querySelector(".side-bar");

// --- Función para cambiar visibilidad de botones activos ---
function changeVisibility(entries) {
  entries.forEach(entry => {
    const id = entry.target.id;
    const buttonActive = document.querySelector(`a[href="#${id}"]`);

    if (entry.isIntersecting) {
      buttonActive.classList.add("active");
    } else {
      buttonActive.classList.remove("active");
    }
  });
}

// --- Intersection Observer para detectar secciones visibles ---
const observer = new IntersectionObserver(changeVisibility, {
  threshold: 0.5
});

sections.forEach(section => {
  observer.observe(section);
});

// --- Evento para menú hamburguesa ---
hamburger.addEventListener("click", () => {
  sidebar.classList.toggle("active");
  hamburger.classList.toggle("active"); // cambia color e ícono
});
