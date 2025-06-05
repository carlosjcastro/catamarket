document.addEventListener("DOMContentLoaded", () => {
  const sendBtn = document.getElementById("sendBtn");
  const sendIcon = document.getElementById("sendIcon");
  const contactForm = document.getElementById("contactForm");

  contactForm.addEventListener("submit", (e) => {
    e.preventDefault();

    // Permite validar si todos los campos requeridos están completos
    const nombre = document.getElementById("nombre").value;
    const email = document.getElementById("email").value;
    const tipo = document.getElementById("tipo").value;
    const mensaje = document.getElementById("mensaje").value;

    if (!nombre || !email || !tipo || !mensaje) {
      alert("Por favor, completá todos los campos.");
      return;
    }

    // Si todos los campos están completos, se ejecuta la animación de envío
    sendIcon.classList.add("translate-x-[-20px]");

    setTimeout(() => {
      sendIcon.classList.remove("translate-x-[-20px]");
      sendIcon.classList.add("translate-x-[200px]");
    }, 100);

    setTimeout(() => {
      sendIcon.classList.remove("translate-x-[200px]");
      sendIcon.classList.add("translate-x-0");
    }, 1200);

    // Después de 1.5 segundos, simula el envío del formulario
    setTimeout(() => {
      alert("Tu mensaje se ha enviado correctamente."); // Se simula el envío
    }, 1500);
  });
});
