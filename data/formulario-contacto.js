document.addEventListener("DOMContentLoaded", () => {
  const sendBtn = document.getElementById("sendBtn");
  const sendIcon = document.getElementById("sendIcon");
  const contactForm = document.getElementById("contactForm");
  const successMessage = document.getElementById("successMessage");

  contactForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const nombre = document.getElementById("nombre");
    const email = document.getElementById("email");
    const tipo = document.getElementById("tipo");
    const mensaje = document.getElementById("mensaje");

    resetErrors();

    let isValid = true;

    if (!nombre.value) {
      showError("nombre", "Por favor, ingresá tu nombre.");
      isValid = false;
    } else {
      setValid(nombre);
    }

    if (!email.value || !validateEmail(email.value)) {
      showError("email", "Por favor, ingresá un correo electrónico válido.");
      isValid = false;
    } else {
      setValid(email);
    }

    if (!tipo.value) {
      showError("tipo", "Por favor, seleccioná un tipo de mensaje.");
      isValid = false;
    } else {
      setValid(tipo);
    }

    if (!mensaje.value) {
      showError("mensaje", "Por favor, ingresá un mensaje.");
      isValid = false;
    } else {
      setValid(mensaje);
    }

    // Si todos los campos son válidos, realizar la animación de envío
    if (isValid) {
      sendIcon.classList.add("translate-x-[-20px]");

      setTimeout(() => {
        sendIcon.classList.remove("translate-x-[-20px]");
        sendIcon.classList.add("translate-x-[200px]");
      }, 100);

      setTimeout(() => {
        sendIcon.classList.remove("translate-x-[200px]");
        sendIcon.classList.add("translate-x-0");
      }, 1200);

      // Se muestra un mensaje de éxito
      setTimeout(() => {
        successMessage.classList.remove("hidden");
        contactForm.reset();
        setTimeout(() => {
          successMessage.classList.add("hidden");
        }, 3000);
      }, 1500);
    }
  });

  // Función para mostrar un mensaje de error
  function showError(field, message) {
    const errorElement = document.getElementById(`${field}Error`);
    errorElement.textContent = message;
    errorElement.classList.remove("hidden");

    const inputElement = document.getElementById(field);
    inputElement.classList.add("border-red-500");
    inputElement.classList.remove("border-green-500");

    inputElement.classList.add("shake");

    setTimeout(() => {
      inputElement.classList.remove("shake");
    }, 500);
  }

  // Función para marcar un campo como válido
  function setValid(input) {
    input.classList.remove("border-red-500");
    input.classList.add("border-green-500");
  }

  // Función para resetear los mensajes de error
  function resetErrors() {
    const errorMessages = document.querySelectorAll(".text-red-500");
    errorMessages.forEach((error) => {
      error.classList.add("hidden");
    });

    const inputs = contactForm.querySelectorAll("input, select, textarea");
    inputs.forEach((input) => {
      input.classList.remove("border-red-500");
      input.classList.remove("border-green-500");
    });
  }

  // Función para validar email
  function validateEmail(email) {
    const re = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    return re.test(email);
  }
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
