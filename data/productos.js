const productos = [
  {
    id: 1,
    tipo: "producto",
    titulo: "Mermelada artesanal de durazno",
    precio: 1500,
    precioOferta: 900,
    descripcion: "Mermelada casera hecha con duraznos frescos de Catamarca.",
    imagen: "img/productos/mermeladadurazno.jpg",
    imagenes: [
      "../img/productos/mermeladadurazno2.jpg",
      "../img/productos/mermeladadurazno3.jpg",
    ],
    caracteristicas: [
      "Hecho con fruta 100% natural",
      "Sin conservantes",
      "Frasco de 250g",
    ],
    emprendedorId: "dulce-catamarca",
    categoria: "gastronomia",
  },
  {
    id: 2,
    tipo: "producto",
    titulo: "Pan de campo artesanal",
    precio: 1200,
    precioOferta: 720,
    descripcion: "Pan elaborado con masa madre y cocido en horno de barro.",
    imagen: "img/productos/pandecampo.jpg",
    imagenes: ["../img/productos/pandecampo2.jpg"],
    caracteristicas: [
      "Masa madre natural",
      "Horneado en horno de barro",
      "Peso aproximado: 500g",
    ],
    emprendedorId: "sabores-rurales",
    categoria: "gastronomia",
  },
  {
    id: 3,
    tipo: "producto",
    titulo: "Aceite de oliva extra virgen",
    precio: 2500,
    precioOferta: 1500,
    descripcion: "Aceite premium producido en los valles catamarqueños.",
    imagen: "img/productos/aceiteoliva.jpeg",
    imagenes: ["../img/productos/aceiteoliva.jpeg"],
    caracteristicas: [
      "Primera presión en frío",
      "Botella de 500ml",
      "Sabor suave y afrutado",
    ],
    emprendedorId: "olivar-norte",
    categoria: "gastronomia",
  },
  {
    id: 4,
    tipo: "producto",
    titulo: "Artesanía en cerámica",
    precio: 3500,
    precioOferta: 2100,
    descripcion: "Piezas decorativas hechas a mano por artistas locales.",
    imagen: "img/productos/artesaniaceramica.jpg",
    imagenes: ["../img/productos/artesaniaceramica2.jpg"],
    caracteristicas: [
      "Hecho a mano",
      "Diseño exclusivo",
      "Material: cerámica esmaltada",
    ],
    emprendedorId: "arte-ancestral",
    categoria: "artesanias",
  },
  {
    id: 5,
    tipo: "producto",
    titulo: "Té de hierbas andinas",
    precio: 800,
    descripcion: "Infusión natural con hierbas recolectadas en la puna.",
    imagen: "img/productos/tehierbas.jpg",
    imagenes: ["../img/productos/tehierbas.jpg"],
    caracteristicas: [
      "Mezcla de hierbas naturales",
      "Sin cafeína",
      "Bolsa de 50g",
    ],
    emprendedorId: "pacha-infusiones",
    categoria: "gastronomia",
  },
  {
    id: 6,
    tipo: "producto",
    titulo: "Poncho de lana artesanal",
    precio: 14500,
    descripcion:
      "Poncho tejido a mano con lana de llama, ideal para el invierno.",
    imagen: "img/productos/poncholana.webp",
    imagenes: ["../img/productos/poncholana.webp"],
    caracteristicas: [
      "100% lana de llama",
      "Tejido a mano",
      "Diseño tradicional andino",
    ],
    emprendedorId: "tejidos-inti",
    categoria: "indumentaria",
  },
  {
    id: 7,
    tipo: "producto",
    titulo: "Maceta decorativa de cerámica",
    precio: 3200,
    descripcion: "Maceta pintada a mano con motivos tradicionales del Valle.",
    imagen: "img/productos/macetadecorativa.jpg",
    imagenes: ["../img/productos/macetadecorativa.jpg"],
    caracteristicas: [
      "Cerámica artesanal",
      "Pintada a mano",
      "Apta para interiores y exteriores",
    ],
    emprendedorId: "arte-ceramico",
    categoria: "decoracion",
  },
];

const contenedorProductos = document.getElementById("productos");

function getCategoria() {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get("categoria");
}

// Se realiza un mapeo para encontrar emprendedor por id rápido
const emprendedoresMap = {};
emprendedores.forEach((e) => (emprendedoresMap[e.id] = e));

// Filtrar productos por categoría
const categoriaSeleccionada = getCategoria();
const productosFiltrados = categoriaSeleccionada
  ? productos.filter((item) => item.categoria === categoriaSeleccionada)
  : productos;

console.log("Categoría seleccionada:", categoriaSeleccionada);
console.log("Productos filtrados:", productosFiltrados);
// Mostrar los productos filtrados
productosFiltrados.forEach((item) => {
  // Buscar el emprendedor según el ID
  const emprendedor = emprendedoresMap[item.emprendedorId] || {
    nombre: "Desconocido",
    id: "",
  };

  // Crear el elemento card para cada producto
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
          <a href="../pages/detalle.html?tipo=producto&id=${
            item.id
          }" class="bg-[#7e8d48] text-white px-4 py-2 rounded-xl text-sm hover:bg-[#657a3b] transition duration-300">
            Ver Producto
          </a>
        </div>
      </div>
    </div>
  `;

  contenedorProductos.appendChild(card);

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
