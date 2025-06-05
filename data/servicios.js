const servicios = [
  {
    id: 1,
    tipo: "servicio",
    titulo: "Sesión de masajes relajantes",
    precio: 5000,
    precioOferta: 3000,
    descripcion:
      "Terapia manual para reducir el estrés y mejorar el bienestar.",
    imagen: "../img/servicios/spa.webp",
    imagenes: ["../img/servicios/spa.webp"],
    caracteristicas: [
      "Duración: 60 minutos",
      "Aromaterapia incluida",
      "Ambiente climatizado",
    ],
    emprendedorId: "bienestar-total",
    categoria: "servicios",
  },
  {
    id: 2,
    tipo: "servicio",
    titulo: "Clases de yoga al aire libre",
    precio: 4000,
    precioOferta: 2400,
    descripcion:
      "Sesiones de yoga en la naturaleza para conectar cuerpo y mente.",
    imagen: "../img/servicios/yoga.jpg",
    imagenes: ["../img/servicios/yoga.jpg"],
    caracteristicas: [
      "Duración: 90 minutos",
      "Espacios naturales",
      "Apto para todos los niveles",
    ],
    emprendedorId: "namaste-catamarca",
    categoria: "servicios",
  },
  {
    id: 3,
    tipo: "servicio",
    titulo: "Asesoría contable para emprendedores",
    precio: 8000,
    precioOferta: 4800,
    descripcion: "Servicio profesional para organizar tus finanzas y trámites.",
    imagen: "../img/servicios/asesoriacontable.webp",
    imagenes: ["../img/servicios/asesoriacontable.webp"],
    caracteristicas: [
      "Consultas personalizadas",
      "Asesoramiento impositivo",
      "Optimización de costos",
    ],
    emprendedorId: "contabilidad-simple",
    categoria: "servicios",
  },
  {
    id: 4,
    tipo: "servicio",
    titulo: "Fotografía profesional de productos",
    precio: 6000,
    descripcion: "Fotos de alta calidad para tu catálogo o tienda online.",
    imagen: "../img/servicios/fotografiaproductos.jpg",
    imagenes: ["../img/servicios/fotografiaproductos.jpg"],
    caracteristicas: [
      "Entrega digital en alta resolución",
      "Edición profesional",
      "Estilismo de producto incluido",
    ],
    emprendedorId: "focus-studio",
    categoria: "servicios",
  },
  {
    id: 5,
    tipo: "servicio",
    titulo: "Diseño gráfico para redes sociales",
    precio: 7000,
    descripcion: "Creación de contenido visual para impulsar tu marca.",
    imagen: "../img/servicios/diseñograficopararedes.jpg",
    imagenes: ["../img/servicios/diseñograficopararedes.jpg"],
    caracteristicas: [
      "Diseños personalizados",
      "Formato adaptable a redes",
      "Entrega en formatos editables",
    ],
    emprendedorId: "pixel-creativo",
    categoria: "servicios",
  },
];

const contenedorServicios = document.getElementById("servicios");

servicios.forEach((item) => {
  // Se busca el emprendedor según el ID que tiene el servicio
  const emprendedor = emprendedores.find(
    (e) => e.id === item.emprendedorId
  ) || { nombre: "Desconocido", id: "" };

  // Se crea el elemento card para cada servicio
  const card = document.createElement("div");
  card.className =
    "bg-[#FFF3E4] rounded-2xl border border-[#4F4538] overflow-hidden flex flex-col hover:shadow-xl hover:-translate-y-1 transition duration-300";

  const ofertaTag = item.precioOferta
    ? `<span class="bg-[#ffb703] text-black border-2 font-bold border-white py-1 px-3 text-xs rounded-full absolute top-2 right-2 z-10">Oferta</span>`
    : "";

  card.innerHTML = `
    <div class="relative">
      ${ofertaTag}
      <img src="${item.imagen}" alt="${
    item.titulo
  }" class="h-48 w-full object-cover" />
    </div>
    <div class="p-4 flex flex-col flex-grow">
      <h2 class="text-xl font-bold text-gray-900 mb-1">${item.titulo}</h2>
      <a href="../pages/perfil-emprendedor.html?id=${
        emprendedor.id
      }" class="text-sm text-gray-700 mb-1 hover:underline">
        <i class='bx bx-user'></i> ${emprendedor.nombre}
      </a>
      <p class="text-sm text-gray-700 mb-3">${item.descripcion}</p>
      <div class="mt-auto flex items-center justify-between">
        <span class="text-xl font-extrabold text-[#7e8d48]">
          ${
            item.precioOferta
              ? `<del class="text-sm font-normal text-gray-500 mr-2">${item.precio.toLocaleString(
                  "es-AR",
                  { style: "currency", currency: "ARS" }
                )}</del>
                ${item.precioOferta.toLocaleString("es-AR", {
                  style: "currency",
                  currency: "ARS",
                })}`
              : item.precio.toLocaleString("es-AR", {
                  style: "currency",
                  currency: "ARS",
                })
          }
        </span>
        <div class="flex gap-2">
          <button class="bg-white text-gray-700 border border-gray-400 px-4 py-2 rounded-xl text-sm hover:bg-gray-100 transition duration-300 flex items-center gap-1">
            <i class='bx bx-plus'></i>
            Guardar
          </button>
          <a href="../pages/detalle.html?tipo=servicio&id=${
            item.id
          }" class="bg-[#7e8d48] text-white px-4 py-2 rounded-xl text-sm hover:bg-[#657a3b] transition duration-300">
            Ver Servicio
          </a>
        </div>
      </div>
    </div>
  `;

  contenedorServicios.appendChild(card);

  console.log("Producto mostrado:", item);
});

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
