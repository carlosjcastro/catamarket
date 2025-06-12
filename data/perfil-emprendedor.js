const params = new URLSearchParams(window.location.search);
const emprendedorId = params.get("id");

// Buscar el emprendedor por ID desde emprendedores.js
const emprendedor = emprendedores.find((e) => e.id === emprendedorId);

if (emprendedor) {
  document.getElementById("perfil-emprendedor").innerHTML = `
    <div class="flex flex-col md:flex-row items-start gap-6">
      <!-- Imagen del emprendedor -->
      <div class="w-full md:w-1/3">
        <img src="${emprendedor.imagen || "default-image.jpg"}" alt="Foto de ${
    emprendedor.nombre
  }" class="rounded-lg w-full object-cover" />
      </div>

      <!-- Información del emprendedor -->
      <div class="w-full md:w-2/3">
        <h2 class="text-2xl font-bold">${emprendedor.nombre}</h2>
        <p class="text-gray-600 mt-2">${emprendedor.descripcion}</p>

        <div class="mt-6">
          <h3 class="text-xl font-semibold">Contacto</h3>
          <p class="text-gray-700 mt-2">
            Email:
            <a href="mailto:${
              emprendedor.contacto.email
            }" class="text-blue-600 hover:underline">
              ${emprendedor.contacto.email}
            </a>
          </p>
          <p class="text-gray-700">
            Teléfono:
            <a href="tel:${
              emprendedor.contacto.telefono
            }" class="text-blue-600 hover:underline">
              ${emprendedor.contacto.telefono}
            </a>
          </p>
        </div>

        ${
          emprendedor.redes
            ? `
          <div class="mt-6">
            <h3 class="text-xl font-semibold">Redes Sociales</h3>
            <div class="flex gap-4 mt-2">
              ${
                emprendedor.redes.facebook
                  ? `<a href="${emprendedor.redes.facebook}" target="_blank" class="text-[#c96c3a] text-2xl"><i class="fab fa-facebook"></i></a>`
                  : ""
              }
              ${
                emprendedor.redes.instagram
                  ? `<a href="${emprendedor.redes.instagram}" target="_blank" class="text-[#c96c3a] text-2xl"><i class="fab fa-instagram"></i></a>`
                  : ""
              }
              ${
                emprendedor.redes.twitter
                  ? `<a href="${emprendedor.redes.twitter}" target="_blank" class="text-[#c96c3a] text-2xl"><i class="fab fa-twitter"></i></a>`
                  : ""
              }
              ${
                emprendedor.redes.linkedin
                  ? `<a href="${emprendedor.redes.linkedin}" target="_blank" class="text-[#c96c3a] text-2xl"><i class="fab fa-linkedin"></i></a>`
                  : ""
              }
            </div>
          </div>
        `
            : ""
        }
      </div>
    </div>
  `;

  // Filtrar productos y servicios por emprendedorId
  const productosDelEmprendedor = productos.filter(
    (p) => p.emprendedorId === emprendedorId
  );
  const serviciosDelEmprendedor = servicios.filter(
    (s) => s.emprendedorId === emprendedorId
  );

  let htmlProductosServicios = "";

  // Mostrar productos
  if (productosDelEmprendedor.length > 0) {
    htmlProductosServicios += `
      <h3 class="text-xl font-semibold mt-6">Lo que ofrezco</h3>
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-6">
    `;

    productosDelEmprendedor.forEach((item) => {
      htmlProductosServicios += `
        <div class="bg-[#FFF3E4] rounded-2xl border border-[#4F4538] overflow-hidden flex flex-col hover:shadow-xl hover:-translate-y-1 transition duration-300">
          <img src="${item.imagen}" alt="${
        item.titulo
      }" class="h-48 w-full object-cover">
          <div class="p-4 flex flex-col flex-grow">
            <h2 class="text-xl font-bold text-gray-900 mb-1">${item.titulo}</h2>
            <p class="text-sm text-gray-700 mb-3">${item.descripcion}</p>
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
            <div class="mt-auto flex items-center justify-between gap-2">
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
    });

    htmlProductosServicios += `</div>`;
  }

  // Se muestran los servicios
  if (serviciosDelEmprendedor.length > 0) {
    htmlProductosServicios += `
      <h3 class="text-xl font-semibold mt-6">Servicios del Emprendedor</h3>
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-6">
    `;

    serviciosDelEmprendedor.forEach((item) => {
      htmlProductosServicios += `
        <div class="bg-[#FFF3E4] rounded-2xl border border-[#4F4538] shadow-md overflow-hidden flex flex-col">
          <img src="${item.imagen}" alt="${
        item.titulo
      }" class="h-48 w-full object-cover">
          <div class="p-4 flex flex-col flex-grow">
            <h2 class="text-xl font-bold text-gray-900 mb-1">${item.titulo}</h2>
            <p class="text-sm text-gray-700 mb-3">${item.descripcion}</p>
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
            <div class="mt-auto flex items-center justify-between gap-2">
              <button class="bg-white text-gray-700 border border-gray-400 px-4 py-2 rounded-xl text-sm hover:bg-gray-100 transition duration-300">
                + Guardar
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
    });

    htmlProductosServicios += `</div>`;
  }

  document.getElementById("productos-del-emprendedor").innerHTML =
    htmlProductosServicios;
} else {
  document.getElementById("perfil-emprendedor").innerHTML =
    "<p>Emprendedor no encontrado.</p>";
}

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
