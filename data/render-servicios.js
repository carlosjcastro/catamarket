document.addEventListener("DOMContentLoaded", () => {
  const params = new URLSearchParams(window.location.search);
  const categoria = params.get("categoria");

  const menu = document.querySelector("#menu");

  let main = document.querySelector("main#main-productos");
  if (!main) {
    main = document.createElement("main");
    main.id = "main-productos";
    main.className = "max-w-7xl mx-auto p-6";

    if (menu) {
      menu.after(main);
    } else {
      document.body.prepend(main);
    }
  }

  main.innerHTML = "";

  if (categoria) {
    const titulo = document.createElement("h1");
    titulo.className = "text-3xl font-bold text-gray-800 mb-6 capitalize mt-10";
    titulo.textContent = categoria.replace(/-/g, " ").trim();
    main.appendChild(titulo);
  }

  // Permite buscar servicios por nombre con un buscador de filtro
  const buscadorContainer = document.createElement("div");
  buscadorContainer.className = "flex justify-center mb-6";

  const buscadorWrapper = document.createElement("div");
  buscadorWrapper.className =
    "flex items-center gap-2 border border-gray-300 rounded-2xl px-6 py-2 bg-white shadow-sm w-full max-w-sm";

  const icono = document.createElement("i");
  icono.className = "bx bx-search text-gray-500 text-xl";

  const buscador = document.createElement("input");
  buscador.type = "text";
  buscador.placeholder = "Buscá tu servicio preferido";
  buscador.className =
    "flex-grow outline-none text-sm text-gray-800 bg-transparent placeholder-gray-400";

  buscadorWrapper.appendChild(icono);
  buscadorWrapper.appendChild(buscador);
  buscadorContainer.appendChild(buscadorWrapper);
  main.appendChild(buscadorContainer);

  const contenedor = document.createElement("div");
  contenedor.id = "productos";
  contenedor.className = "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6";
  main.appendChild(contenedor);

  if (!Array.isArray(servicios) || !Array.isArray(emprendedores)) {
    contenedor.innerHTML =
      "<p class='text-center text-red-600'>Error cargando los datos.</p>";
    return;
  }

  const emprendedoresMap = {};
  emprendedores.forEach((e) => (emprendedoresMap[e.id] = e));

  if (!categoria) {
    contenedor.innerHTML =
      "<p class='text-center text-gray-600'>No se especificó una categoría.</p>";
    return;
  }

  const categoriaNormalizada = categoria.toLowerCase().trim();
  const serviciosFiltrados = servicios.filter(
    (s) => s.categoria.toLowerCase().trim() === categoriaNormalizada
  );

  if (serviciosFiltrados.length === 0) {
    contenedor.innerHTML =
      "<p class='text-center text-gray-600'>No hay servicios en esta categoría.</p>";
    return;
  }

  function normalizarTexto(texto) {
    return texto
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .toLowerCase();
  }

  function renderizarServicios(lista) {
    contenedor.innerHTML = "";

    if (lista.length === 0) {
      contenedor.innerHTML =
        "<p class='text-center text-gray-600'>No se encontraron servicios.</p>";
      return;
    }

    lista.forEach((item) => {
      const emprendedor = emprendedoresMap[item.emprendedorId] || {
        nombre: "Desconocido",
        id: "",
      };

      const card = document.createElement("div");
      card.className =
        "bg-[#FFF3E4] rounded-2xl border-2 border-[#4F4538] overflow-hidden flex flex-col hover:shadow-xl hover:border-[#c96c3a] hover:-translate-y-1 transition duration-300";

      card.innerHTML = `
        <img src="${item.imagen}" loading="lazy" alt="${
        item.titulo
      }" class="h-48 w-full object-cover" />
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
                      {
                        style: "currency",
                        currency: "ARS",
                      }
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
              <button class="bg-white text-gray-700 border border-gray-400 px-2 py-2 rounded-xl text-sm hover:bg-gray-100 transition duration-300 flex items-center gap-1">
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

      contenedor.appendChild(card);
    });
  }

  renderizarServicios(serviciosFiltrados);

  buscador.addEventListener("input", (e) => {
    const texto = normalizarTexto(e.target.value);
    const filtrados = serviciosFiltrados.filter(
      (servicio) =>
        normalizarTexto(servicio.titulo).includes(texto) ||
        normalizarTexto(servicio.descripcion).includes(texto)
    );
    renderizarServicios(filtrados);
  });
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
