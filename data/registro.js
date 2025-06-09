document.addEventListener("DOMContentLoaded", () => {
  const passwordInput = document.getElementById("password");
  const passwordCriteria = document.getElementById("passwordCriteria");

  // Son los requisitos de la contraseña que se mostrarán al usuario siguiendo lo trabajado en UX
  const lengthCriteria = document.getElementById("lengthCriteria");
  const uppercaseCriteria = document.getElementById("uppercaseCriteria");
  const numberCriteria = document.getElementById("numberCriteria");
  const specialCharCriteria = document.getElementById("specialCharCriteria");

  // Esto permite validar la contraseña
  passwordInput.addEventListener("input", function() {
    const passwordValue = passwordInput.value;

    if (passwordValue.trim()) {
      passwordCriteria.classList.remove("hidden");
    }

    const hasMinLength = passwordValue.length >= 8;
    const hasUppercase = /[A-Z]/.test(passwordValue);
    const hasNumber = /\d/.test(passwordValue);
    const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(passwordValue);

    toggleCriteria(lengthCriteria, hasMinLength);
    toggleCriteria(uppercaseCriteria, hasUppercase);
    toggleCriteria(numberCriteria, hasNumber);
    toggleCriteria(specialCharCriteria, hasSpecialChar);
  });

  // Permite mostrar u ocultar los criterios de la contraseña con un icono y texto
  function toggleCriteria(element, isValid) {
    const icon = element.querySelector('i');
    const text = element.querySelector('span');
    const isChecked = element.classList.contains("line-through");

    if (isValid) {
      if (!isChecked) {
        if (!icon.classList.contains("bx-check")) {
          icon.classList.remove("bx-x-circle");
          icon.classList.add("bx-check");
        }
        
        element.classList.remove("text-red-500");
        element.classList.add("text-green-500");
        
        element.classList.add("line-through");
      }
    } else {
      if (isChecked) {
        element.classList.remove("line-through");
      }
      
      if (!icon.classList.contains("bx-x-circle")) {
        icon.classList.remove("bx-check");
        icon.classList.add("bx-x-circle");
      }
      
      element.classList.remove("text-green-500");
      element.classList.add("text-red-500");
    }
  }

  let isEntrepreneur = false;

  const form = document.getElementById("registerForm");
  const toastSuccess = document.getElementById("toastSuccess");
  const toggleRole = document.getElementById("toggleRole");
  const formTitle = document.getElementById("formTitle");
  const formSubtext = document.getElementById("formSubtext");
  const sideImage = document.getElementById("sideImage");
  const extraFields = document.getElementById("extraFields");

  toggleRole.addEventListener("click", () => {
    isEntrepreneur = !isEntrepreneur;

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
    } else {
      // Se valida si la contraseña cumple con los requisitos
      const hasMinLength = password.value.length >= 8;
      const hasUppercase = /[A-Z]/.test(password.value);
      const hasNumber = /\d/.test(password.value);
      const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(password.value);

      if (!(hasMinLength && hasUppercase && hasNumber && hasSpecialChar)) {
        showError("password", "La contraseña no cumple con los requisitos.");
        isValid = false;
      }
    }

    // Validación adicional para los campos de emprendedores
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

    // Si todos los campos son válidos, se muestra el toast de éxito
    if (isValid) {
      toastSuccess.classList.remove("hidden");
      setTimeout(() => {
        toastSuccess.classList.add("hidden");
      }, 3000);
      form.reset();
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