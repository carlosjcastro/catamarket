document.addEventListener("DOMContentLoaded", () => {
  const contenedor = document.getElementById("ofertas");
  const filtroTipo = document.getElementById("filtro-tipo");
  const ordenPrecio = document.getElementById("orden-precio");

  if (!contenedor) {
    console.error('No se encontró el contenedor con id "ofertas".');
    return;
  }

  if (
    !Array.isArray(productos) ||
    !Array.isArray(servicios) ||
    !Array.isArray(emprendedores)
  ) {
    contenedor.innerHTML =
      "<p class='text-center text-red-600'>Error cargando los datos.</p>";
    return;
  }

  const emprendedoresMap = {};
  emprendedores.forEach((e) => (emprendedoresMap[e.id] = e));

  const filtrarConOferta = (items) =>
    items.filter((item) => {
      const precio = Number(item.precio);
      const precioOferta = Number(item.precioOferta);
      return (
        !isNaN(precio) &&
        !isNaN(precioOferta) &&
        precioOferta > 0 &&
        precioOferta < precio
      );
    });

  const productosConOferta = filtrarConOferta(productos);
  const serviciosConOferta = filtrarConOferta(servicios);

  function crearCard(item, tipo) {
    const emprendedor = emprendedoresMap[item.emprendedorId] || {
      nombre: "Desconocido",
      id: "",
    };

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
          <div class="flex flex-col">
            <del class="text-sm text-gray-500">
              ${item.precio.toLocaleString("es-AR", {
                style: "currency",
                currency: "ARS",
              })}
            </del>
            <span class="text-xl font-extrabold text-[#7e8d48]">
              ${item.precioOferta.toLocaleString("es-AR", {
                style: "currency",
                currency: "ARS",
              })}
            </span>
          </div>
          <div class="flex gap-2">
            <button class="bg-white text-gray-700 border border-gray-400 px-4 py-2 rounded-xl text-sm hover:bg-gray-100 transition duration-300 flex items-center gap-1">
              <i class='bx bx-plus'></i>
              Guardar
            </button>
            <a href="../pages/detalle.html?tipo=${tipo}&id=${
      item.id
    }" class="bg-[#7e8d48] text-white px-4 py-2 rounded-xl text-sm hover:bg-[#657a3b] transition duration-300">
                    Ver ${tipo === "producto" ? "Producto" : "Servicio"}
            </a>
          </div>
        </div>
      </div>
    `;

    return card;
  }

  function renderCards(tipoFiltro, orden = "default") {
    contenedor.innerHTML = "";
    contenedor.className =
      "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6";

    let itemsMostrados = [];

    if (tipoFiltro === "producto") {
      itemsMostrados = productosConOferta.map((p) => ({
        ...p,
        tipo: "producto",
      }));
    } else if (tipoFiltro === "servicio") {
      itemsMostrados = serviciosConOferta.map((s) => ({
        ...s,
        tipo: "servicio",
      }));
    } else {
      // Se muestran todos los items con oferta
      itemsMostrados = [
        ...productosConOferta.map((p) => ({ ...p, tipo: "producto" })),
        ...serviciosConOferta.map((s) => ({ ...s, tipo: "servicio" })),
      ];
    }

    if (itemsMostrados.length === 0) {
      contenedor.innerHTML =
        "<p class='text-center text-gray-600'>No hay ofertas disponibles para este tipo.</p>";
      return;
    }

    if (orden === "asc") {
      itemsMostrados.sort((a, b) => a.precioOferta - b.precioOferta);
    } else if (orden === "desc") {
      itemsMostrados.sort((a, b) => b.precioOferta - a.precioOferta);
    }

    itemsMostrados.forEach((item) => {
      contenedor.appendChild(crearCard(item, item.tipo));
    });
  }

  renderCards("");

  // Se aplica un filtro cuando cambia el select
  function aplicarFiltros() {
    const tipoSeleccionado = filtroTipo.value;
    const ordenSeleccionado = ordenPrecio.value;
    renderCards(tipoSeleccionado, ordenSeleccionado);
  }

  filtroTipo.addEventListener("change", aplicarFiltros);
  ordenPrecio.addEventListener("change", aplicarFiltros);

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
});
