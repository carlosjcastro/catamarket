document.addEventListener("DOMContentLoaded", () => {
  const buttons = document.querySelectorAll(".faq-btn");

  buttons.forEach((btn) => {
    btn.addEventListener("click", () => {
      const content = btn.nextElementSibling;
      const wasOpen = !content.classList.contains("hidden");

      document.querySelectorAll(".faq-answer").forEach((el) => {
        el.classList.add("hidden");
        el.previousElementSibling
          ?.querySelector("svg")
          ?.style.setProperty("transform", "rotate(0deg)");
      });

      if (!wasOpen) {
        content.classList.remove("hidden");
        btn.querySelector("svg").style.transform = "rotate(180deg)";
      }
    });
  });
});

/*
  Contribuciones del equipo:
  - Carlos José Castro Galante: Implementó la lógica funcional con JavaScript, estructuró los datos simulados y organizó las funcionalidades basadas en las historias de usuario.
  - Luciano Alexis Luna Pacheco: Participó en el diseño general del sitio y la estructura visual, utilizando HTML5 y CSS3/Tailwind.
  - Camila Fiama Reales Herbel: Diseñó interfaces en Canva, colaboró en la creación de estilos responsivos y la maquetación visual de componentes.
  - Matías Tula Sarquis: Encargado de la estructura y maquetación de secciones, aplicando estilos con CSS3/Tailwind.
  - Valentín Varas: Apoyó en la maquetación general, diseño de vistas principales y en la creación de estilos visuales adaptables.
  - Francisco David Vega Varela: Diseñó interfaces en Figma y maquetó la página de inicio y componentes reutilizables, siempre con enfoque en la experiencia de usuario.
  Fecha de creación: 13/06/2025
*/