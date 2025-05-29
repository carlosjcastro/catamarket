const emprendedores = [
  // Productos
  {
    id: "dulce-catamarca",
    nombre: "Dulce Catamarca",
    descripcion:
      "Dulce Catamarca es una pequeña empresa familiar que se dedica a la producción artesanal de mermeladas y productos regionales en la provincia de Catamarca.",
    contacto: {
      telefono: "+54 9 383 4567890",
      email: "correo@correo.com",
    },
    tipo: "producto",
    imagen: "../img/perfil/Catamarket_Logo_3.png",
    redes: {
      facebook: "https://facebook.com/dulcecatamarca",
      instagram: "https://instagram.com/dulcecatamarca",
    },
  },
  {
    id: "sabores-rurales",
    nombre: "Sabores Rurales",
    descripcion:
      "Sabores Rurales se dedica a la elaboración de pan de campo con recetas tradicionales utilizando masa madre.",
    contacto: {
      telefono: "+54 9 383 5678901",
      email: "correo@correo.com",
    },
    tipo: "producto",
    imagen: "../img/perfil/Catamarket_Logo_3.png",
    redes: {
      facebook: "https://facebook.com/saboresrurales",
      instagram: "https://instagram.com/saboresrurales",
    },
  },
  {
    id: "olivar-norte",
    nombre: "Olivar Norte",
    descripcion:
      "Olivar Norte es un aceite de oliva virgen extra de primera prensada en frío, elaborado en pequeñas partidas a partir de olivos centenarios ubicados en las sierras del norte argentino. Su sabor intenso y afrutado refleja la pureza del entorno natural y la dedicación artesanal de cada cosecha. Ideal para realzar ensaladas, pastas y platos gourmet.",
    contacto: {
      telefono: "+54 9 383 5678901",
      email: "correo@correo.com",
    },
    tipo: "producto",
    imagen: "../img/perfil/Catamarket_Logo_3.png",
    redes: {
      facebook: "https://facebook.com/olivarnorte",
      instagram: "https://instagram.com/olivarnorte",
    },
  },
  {
    id: "arte-ancestral",
    nombre: "Arte Ancestral",
    descripcion:
      "Arte Ancestral es un emprendimiento dedicado a la creación de piezas únicas de cerámica artesanal, elaboradas a mano por artistas locales que combinan técnicas tradicionales con una mirada contemporánea. Cada obra refleja la riqueza cultural de nuestras raíces y busca dar valor al trabajo manual, auténtico y consciente.",
    contacto: {
      telefono: "+54 9 383 5678901",
      email: "correo@correo.com",
    },
    tipo: "producto",
    imagen: "../img/perfil/Catamarket_Logo_3.png",
    redes: {
      facebook: "https://facebook.com/arteancestral",
      instagram: "https://instagram.com/arteancestral",
    },
  },
  {
    id: "pacha-infusiones",
    nombre: "Pacha Infusiones",
    descripcion:
      "Pacha Infusiones nace del respeto por la tierra y el saber ancestral. Elaboramos infusiones naturales a base de hierbas recolectadas en forma sustentable en la puna y las sierras del noroeste argentino. Nuestros blends buscan reconectar con lo esencial: el sabor puro, los aromas nativos y el equilibrio interior.",
    contacto: {
      telefono: "+54 9 383 5678901",
      email: "correo@correo.com",
    },
    tipo: "producto",
    imagen: "../img/perfil/Catamarket_Logo_3.png",
    redes: {
      facebook: "https://facebook.com/pachainfusiones",
      instagram: "https://instagram.com/pachainfusiones",
    },
  },
  {
    id: "tejidos-inti",
    nombre: "Tejidos Inti",
    descripcion:
      "Emprendimiento familiar que elabora prendas artesanales con fibras naturales como lana de llama y oveja, rescatando diseños ancestrales del noroeste argentino.",
    contacto: {
      telefono: "+54 9 383 6789123",
      email: "tejidosinti@gmail.com",
    },
    imagen: "../img/perfil/Catamarket_Logo_3.png",
    redes: {
      instagram: "https://instagram.com/tejidosinti",
      facebook: "https://facebook.com/tejidosinti",
    },
    tipo: "producto",
  },
  {
    id: "arte-ceramico",
    nombre: "Arte Cerámico",
    descripcion:
      "Taller artesanal dedicado a la creación de piezas únicas de cerámica utilitaria y decorativa, inspiradas en la flora, fauna y cultura del noroeste argentino.",
    contacto: {
      telefono: "+54 9 383 7890123",
      email: "contacto@arteceramico.com",
    },
    imagen: "/img/perfil/Catamarket_Logo_3.png",
    redes: {
      instagram: "https://instagram.com/arteceramico",
      facebook: "https://facebook.com/arteceramico",
    },
    tipo: "producto",
  },

  // Servicios
  {
    id: "bienestar-total",
    nombre: "Bienestar Total",
    descripcion:
      "Empresa especializada en terapias manuales y bienestar integral.",
    contacto: {
      telefono: "+54 9 383 1234567",
      email: "contacto@bienestartotal.com",
    },
    tipo: "servicio",
    imagen: "../img/perfil/Catamarket_Logo_3.png",
    redes: {
      facebook: "https://facebook.com/bienestartotal",
      instagram: "https://instagram.com/bienestartotal",
    },
  },
  {
    id: "namaste-catamarca",
    nombre: "Namaste Catamarca",
    descripcion:
      "Clases de yoga y meditación para una vida equilibrada y saludable.",
    contacto: {
      telefono: "+54 9 383 2345678",
      email: "hola@namastecatamarca.com",
    },
    tipo: "servicio",
    imagen: "../img/perfil/Catamarket_Logo_3.png",
    redes: {
      facebook: "https://facebook.com/namastcatamarca",
      instagram: "https://instagram.com/namastecatamarca",
    },
  },
  {
    id: "contabilidad-simple",
    nombre: "Contabilidad Simple",
    descripcion:
      "Servicios de asesoría contable profesional para emprendedores y pymes.",
    contacto: {
      telefono: "+54 9 383 3456789",
      email: "info@contabilidadsimple.com",
    },
    tipo: "servicio",
    imagen: "../img/perfil/Catamarket_Logo_3.png",
    redes: {
      facebook: "https://facebook.com/contabilidadsimple",
      instagram: "https://instagram.com/contabilidadsimple",
    },
  },
  {
    id: "focus-studio",
    nombre: "Focus Studio",
    descripcion:
      "Fotografía profesional para potenciar la imagen de tus productos.",
    contacto: {
      telefono: "+54 9 383 4567891",
      email: "contacto@focusstudio.com",
    },
    tipo: "servicio",
    imagen: "../img/perfil/Catamarket_Logo_3.png",
    redes: {
      facebook: "https://facebook.com/focusstudio",
      instagram: "https://instagram.com/focusstudio",
    },
  },
  {
    id: "pixel-creativo",
    nombre: "Pixel Creativo",
    descripcion:
      "Diseño gráfico especializado en contenido visual para redes sociales.",
    contacto: {
      telefono: "+54 9 383 5678912",
      email: "pixel@creativo.com",
    },
    tipo: "servicio",
    imagen: "../img/perfil/Catamarket_Logo_3.png",
    redes: {
      facebook: "https://facebook.com/pixelcreativo",
      instagram: "https://instagram.com/pixelcreativo",
    },
  },
];

// Esto permite filtrar los emprendedores por tipo (producto o servicio)
const container = document.getElementById("emprendedores-container");
const filtroTipo = document.getElementById("filtro-tipo");

// Esto permite mostrar todas las tarjetas según el tipo seleccionado
const mostrarTarjetas = (tipoSeleccionado) => {
  container.innerHTML = "";

  emprendedores.forEach((emprendedor) => {
    // Si no hay filtro o el tipo seleccionado coincide con el tipo del emprendedor
    if (!tipoSeleccionado || tipoSeleccionado === emprendedor.tipo) {
      const tarjeta = document.createElement("div");
      tarjeta.classList.add(
        "bg-[#FFF3E4]",
        "border",
        "border-[#4F4538]",
        "rounded-2xl",
        "shadow-lg",
        "overflow-hidden",
        "flex",
        "flex-col",
        "items-center",
        "p-4",
        "card"
      );

      // Se crea un enlace para cada tarjeta
      const link = document.createElement("a");
      link.href = `/pages/perfil-emprendedor.html?id=${emprendedor.id}`;
      link.classList.add("block");

      // Se crea una etiqueta según el tipo de emprendedor
      const etiqueta =
        emprendedor.tipo === "producto"
          ? '<span class="bg-green-100 text-green-800 text-xs font-semibold px-2 py-1 rounded-full mb-3">Producto</span>'
          : '<span class="bg-blue-100 text-blue-800 text-xs font-semibold px-2 py-1 rounded-full mb-3">Servicio</span>';

      // Se crea el contenido de la tarjeta
      tarjeta.innerHTML = `
        ${etiqueta} 
        <img src="${emprendedor.imagen || "default-image.jpg"}" alt="${
        emprendedor.nombre
      }" class="w-32 h-32 object-cover rounded-full mb-4 card-img">
        <div class="card-content">
          <h2 class="text-xl font-semibold mb-2">${emprendedor.nombre}</h2>
          <p class="text-gray-700 mb-4">${emprendedor.descripcion}</p>
          <p class="text-sm text-gray-500 mb-2"><strong>Teléfono:</strong> ${
            emprendedor.contacto.telefono
          }</p>
          <p class="text-sm text-gray-500"><strong>Email:</strong> ${
            emprendedor.contacto.email
          }</p>
        </div>
      `;
      link.appendChild(tarjeta);
      container.appendChild(link);
    }
  });
};

// Se añade un evento al filtro para mostrar las tarjetas según el tipo seleccionado
filtroTipo.addEventListener("change", (event) => {
  mostrarTarjetas(event.target.value);
});

mostrarTarjetas();

/*
  Contribuciones del equipo:
  - Carlos José Castro Galante: Implementó la lógica funcional con JavaScript, estructuró los datos simulados y organizó las funcionalidades basadas en las historias de usuario.
  - Luciano Alexis Luna Pacheco: Participó en el diseño general del sitio y la estructura visual, utilizando HTML5 y CSS3/Tailwind.
  - Camila Fiama Reales Herbel: Diseñó interfaces en Canva, colaboró en la creación de estilos responsivos y la maquetación visual de componentes.
  - Matías Tula Sarquis: Encargado de la estructura y maquetación de secciones, aplicando estilos con CSS3/Tailwind.
  - Valentín Varas: Apoyó en la maquetación general, diseño de vistas principales y en la creación de estilos visuales adaptables.
  - Francisco David Vega Varela: Diseñó interfaces en Figma y maquetó la página de inicio y componentes reutilizables, siempre con enfoque en la experiencia de usuario.
  Fecha de creación: 29/05/2025
*/
