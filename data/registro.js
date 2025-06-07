document.addEventListener("DOMContentLoaded", () => {
  let isEntrepreneur = false;

  const form = document.getElementById("registerForm");
  const successMessage = document.getElementById("successMessage");
  const toggleRole = document.getElementById("toggleRole");
  const formTitle = document.getElementById("formTitle");
  const formSubtext = document.getElementById("formSubtext");
  const sideImage = document.getElementById("sideImage");
  const extraFields = document.getElementById("extraFields");

  toggleRole.addEventListener("click", () => {
    isEntrepreneur = !isEntrepreneur;

    // Cambia el texto del botón y los campos del formulario según el rol. Además, cambia la imagen
    if (isEntrepreneur) {
      formTitle.textContent = "Registro de Emprendedor";
      formSubtext.textContent = "Conecta tu empresa con oportunidades";
      toggleRole.textContent = "¿Sos cliente? Regístrate aquí";
      extraFields.classList.remove("hidden");
      sideImage.src = "../img/registro/jumeal.png";
    } else {
      formTitle.textContent = "Registro de Cliente";
      formSubtext.textContent = "Crea tu cuenta personal";
      toggleRole.textContent = "¿Sos emprendedor? Regístrate aquí";
      extraFields.classList.add("hidden");
      sideImage.src = "../img/registro/virgendelvalle.png";
    }
  });

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    resetErrors();

    let isValid = true;

    // Se validan los campos comunes para ambos tipos de usuario
    const nombre = document.getElementById("nombre");
    const email = document.getElementById("email");
    const password = document.getElementById("password");

    if (!nombre.value.trim()) {
      showError("nombre", "Por favor, ingresá tu nombre.");
      isValid = false;
    } else setValid(nombre);

    if (!email.value.trim() || !validateEmail(email.value)) {
      showError("email", "Por favor, ingresá un correo electrónico válido.");
      isValid = false;
    } else setValid(email);

    if (!password.value.trim()) {
      showError("password", "La contraseña es obligatoria.");
      isValid = false;
    } else setValid(password);

    // Se validan los campos adicionales si es emprendedor
    if (isEntrepreneur) {
      const empresa = document.getElementById("empresa");
      const rubro = document.getElementById("rubro");
      const web = document.getElementById("web");
      const telefono = document.getElementById("telefono");

      if (!empresa.value.trim()) {
        showError("empresa", "Por favor, ingresá el nombre de la empresa.");
        isValid = false;
      } else setValid(empresa);

      if (!rubro.value.trim()) {
        showError("rubro", "Por favor, ingresá el rubro de la empresa.");
        isValid = false;
      } else setValid(rubro);

      if (web.value && !/^https?:\/\/.+\..+/.test(web.value)) {
        showError("web", "Ingresá una URL válida.");
        isValid = false;
      } else setValid(web);

      if (!telefono.value.trim()) {
        showError("telefono", "Por favor, ingresá un teléfono.");
        isValid = false;
      } else setValid(telefono);
    }

    // Si todos los campos son válidos, se muestra el mensaje de éxito
    if (isValid) {
      successMessage.classList.remove("hidden");
      form.reset();
      setTimeout(() => {
        successMessage.classList.add("hidden");
      }, 3000);
    }
  });

  function showError(fieldId, message) {
    const input = document.getElementById(fieldId);
    const error = document.getElementById(`${fieldId}Error`);
    error.textContent = message;
    error.classList.remove("hidden");
    input.classList.add("border-red-500", "shake");
    setTimeout(() => input.classList.remove("shake"), 500);
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

  // Permite validar el formato del email
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