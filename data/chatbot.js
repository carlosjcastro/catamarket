const chatBox = document.getElementById("chat-box");
const optionsContainer = document.getElementById("options-container");
const closeBtn = document.getElementById("close-chat");
const resetBtn = document.getElementById("reset-chat");

const respuestas = {
  bienvenida:
    "¡Hola! Soy Caty, el asistente de Catamarket, ¿en qué te puedo ayudar hoy? 😊",
  emprender:
    "¡Qué emocionante que estés emprendiendo! ¿Te gustaría saber más sobre cómo empezar tu negocio en Catamarket?",
  productos:
    "En Catamarket puedes vender productos de diferentes categorías. ¿Te gustaría más información sobre:\n1. Ropa\n2. Tecnología\n3. Accesorios?",
  ropa: "¡La ropa es una excelente categoría! Puedes vender ropa casual, de temporada, deportiva, y mucho más. ¿Te gustaría saber cómo crear tu tienda de ropa?",
  tecnologia:
    "La tecnología siempre es popular. Desde teléfonos hasta laptops, pasando por accesorios. ¿Te gustaría obtener más detalles sobre cómo vender productos tecnológicos?",
  accesorios:
    "Los accesorios como joyería, carteras, mochilas, entre otros, son muy demandados. ¿Te gustaría saber cómo iniciar con esta categoría?",
  venta:
    "Para vender en Catamarket solo necesitas registrarte y crear tu tienda. ¿Te gustaría aprender más sobre cómo configurar tu tienda o cómo subir productos?",
  soporte:
    "¡Estamos aquí para ayudarte! ¿En qué te podemos asistir? ¿Necesitas ayuda con:\n1. Productos\n2. Registro\n3. Tu tienda?",
  ayuda_productos:
    "Si necesitas ayuda con productos, te podemos explicar cómo cargarlos en tu tienda, cómo organizar tu inventario, y más. ¿Te gustaría saber algo más específico?",
  ayuda_registro:
    "El registro en Catamarket es sencillo. Solo necesitas llenar tus datos y crear una tienda. ¿Te gustaría saber más sobre cómo completar tu registro?",
  ayuda_tienda:
    "En Catamarket puedes personalizar tu tienda, añadir productos y gestionar tus ventas. ¿Te gustaría aprender cómo mejorar tu tienda?",
  general:
    "¡Hola! Soy Caty, asistente virtual de Catamarket. ¿Cómo puedo ayudarte hoy? Si tienes dudas sobre vender, productos, o categorías, solo pregúntame.",
};

function showMessage(message, isUser = false) {
  const messageDiv = document.createElement("div");
  messageDiv.classList.add("p-3", "mb-2", "rounded-xl");
  if (isUser) {
    messageDiv.classList.add("bg-[#c96c3a]", "text-white", "self-end");
  } else {
    messageDiv.classList.add("bg-gray-200", "text-gray-700");
  }
  messageDiv.textContent = message;
  messageDiv.classList.add("message-enter");
  chatBox.appendChild(messageDiv);
  chatBox.scrollTop = chatBox.scrollHeight;
}

function createCards(options) {
  optionsContainer.innerHTML = "";
  options.forEach((option) => {
    const card = document.createElement("div");
    card.classList.add(
      "bg-[#7e8d48]",
      "text-white",
      "rounded-2xl",
      "p-6",
      "text-center",
      "hover:bg-[#657a3b]",
      "cursor-pointer",
      "transition-all",
      "shadow-lg",
      "flex",
      "flex-col",
      "items-center",
      "justify-center",
      "space-y-3",
    );
    card.innerHTML = `
            <h2 class="text-lg font-semibold">${option.title}</h2>
        `;
    card.onclick = () => {
      showMessage(option.title, true);
      const response = getResponse(option.title);
      setTimeout(() => showMessage(response), 500);
    };
    optionsContainer.appendChild(card);
  });
}

function getResponse(userMessage) {
  const messageLower = userMessage.toLowerCase();

  if (/emprend(er|edor)/.test(messageLower)) {
    return respuestas["emprender"];
  } else if (/producto|productos/.test(messageLower)) {
    return respuestas["productos"];
  } else if (/ropa/.test(messageLower)) {
    return respuestas["ropa"];
  } else if (/tecnología|tecnologia/.test(messageLower)) {
    return respuestas["tecnologia"];
  } else if (/accesorios/.test(messageLower)) {
    return respuestas["accesorios"];
  } else if (/vender|venta/.test(messageLower)) {
    return respuestas["venta"];
  } else if (/soporte|ayuda/.test(messageLower)) {
    return respuestas["soporte"];
  } else if (/registro/.test(messageLower)) {
    return respuestas["ayuda_registro"];
  } else if (/tienda/.test(messageLower)) {
    return respuestas["ayuda_tienda"];
  } else {
    return respuestas["general"];
  }
}

function resetChat() {
  chatBox.innerHTML = "";
  optionsContainer.innerHTML = "";
  bienvenida();
}

resetBtn.addEventListener("click", () => {
  resetChat();
});

function bienvenida() {
  setTimeout(() => {
    showMessage(respuestas["bienvenida"]);
    createCards([
      { title: "¿Cómo empezar a vender?" },
      { title: "¿Qué productos puedo vender?" },
      { title: "¿Cómo crear mi tienda?" },
      { title: "¿Necesitas soporte?" },
    ]);
  }, 500);
}

bienvenida();
