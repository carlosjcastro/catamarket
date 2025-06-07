document.addEventListener("DOMContentLoaded", () => {
  let isEntrepreneur = false;

  const form = document.getElementById("loginForm");
  const toggleButton = document.getElementById("toggleMode");
  const formTitle = document.getElementById("formTitle");
  const formSubtext = document.getElementById("formSubtext");
  const emailLabel = document.getElementById("emailLabel");
  const sideImage = document.getElementById("sideImage");
  const successMessage = document.getElementById("successMessage");

  toggleButton.addEventListener("click", () => {
    isEntrepreneur = !isEntrepreneur;

    if (isEntrepreneur) {
      formTitle.textContent = "Portal de Emprendedores";
      formSubtext.textContent = "Conectá con tu negocio y hazlo crecer";
      emailLabel.textContent = "Correo del emprendedor";
      toggleButton.textContent = "Volver al modo usuario";
      sideImage.src = "../img/inicio-sesion/peatonal.png";
    } else {
      formTitle.textContent = "Iniciar Sesión";
      formSubtext.textContent = "Accedé a tu cuenta";
      emailLabel.textContent = "Correo Electrónico";
      toggleButton.textContent = "Iniciá sesión como emprendedor";
      sideImage.src = "../img/inicio-sesion/catedral.png";
    }
  });

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    resetErrors();

    const email = document.getElementById("email");
    const password = document.getElementById("password");

    let isValid = true;

    if (!email.value.trim() || !validateEmail(email.value)) {
      showError("email", "Por favor, ingresá un correo válido.");
      isValid = false;
    } else setValid(email);

    if (!password.value.trim()) {
      showError("password", "La contraseña es obligatoria.");
      isValid = false;
    } else setValid(password);

    if (isValid) {
      successMessage.classList.remove("hidden");
      form.reset();
      setTimeout(() => successMessage.classList.add("hidden"), 3000);
    }
  });

  function showError(fieldId, message) {
    const input = document.getElementById(fieldId);
    const error = document.getElementById(`${fieldId}Error`);
    error.textContent = message;
    error.classList.remove("hidden");
    input.classList.add("border-red-500", "shake");
    setTimeout(() => input.classList.remove("shake"), 400);
  }

  function setValid(input) {
    input.classList.remove("border-red-500");
    input.classList.add("border-green-500");
  }

  function resetErrors() {
    form
      .querySelectorAll(".text-red-500")
      .forEach((el) => el.classList.add("hidden"));
    form.querySelectorAll("input").forEach((input) => {
      input.classList.remove("border-red-500", "border-green-500", "shake");
    });
  }

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