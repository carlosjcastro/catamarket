const params = new URLSearchParams(window.location.search);
const tipo = params.get("tipo");
const id = parseInt(params.get("id"));

const data = tipo === "producto" ? productos : servicios;
const item = data.find((i) => i.id === id);

if (item) {
  const emprendedor = emprendedores.find(
    (e) => e.id === item.emprendedorId
  ) || { nombre: "Desconocido", id: "" };

  const imagenesHTML =
    Array.isArray(item.imagenes) && item.imagenes.length > 0
      ? item.imagenes
          .map(
            (img) =>
              `<img src="${img}" alt="${item.titulo}" class="w-full h-60 object-cover rounded-lg border">`
          )
          .join("")
      : `<img src="${
          item.imagen || "https://via.placeholder.com/300x200"
        }" alt="${
          item.titulo
        }" class="w-full h-60 object-cover rounded-lg border">`;

  const tieneOferta =
    typeof item.precioOferta === "number" && item.precioOferta > 0;

  const precioHTML = tieneOferta
    ? `
      <p class="text-lg text-gray-500 line-through">
        ${item.precio.toLocaleString("es-AR", {
          style: "currency",
          currency: "ARS",
        })}
      </p>
      <p class="text-2xl text-[#7e8d48] font-extrabold">
        ${item.precioOferta.toLocaleString("es-AR", {
          style: "currency",
          currency: "ARS",
        })}
      </p>
    `
    : `
      <p class="text-2xl text-[#7e8d48] font-extrabold">
        ${item.precio.toLocaleString("es-AR", {
          style: "currency",
          currency: "ARS",
        })}
      </p>
    `;

  const caracteristicasHTML =
    Array.isArray(item.caracteristicas) && item.caracteristicas.length > 0
      ? `
      <div>
        <h2 class="text-xl font-semibold mb-2">Características</h2>
        <ul class="list-disc list-inside text-gray-700">
          ${item.caracteristicas.map((c) => `<li>${c}</li>`).join("")}
        </ul>
      </div>
    `
      : "";

  document.getElementById("detalle").innerHTML = `
    <div class="flex flex-col lg:flex-row gap-8">
      <!-- Columna principal -->
      <div class="w-full lg:w-2/3 space-y-6">
        <!-- Galería de imágenes -->
        <div class="grid grid-cols-1 sm:grid-cols-3 gap-4">
          ${imagenesHTML}
        </div>

        <!-- Título y precio -->
        <div class="border-b pb-4">
          <h1 class="text-3xl font-bold">${item.titulo}</h1>
          <div class="mt-2">
            ${precioHTML}
          </div>
        </div>

        <!-- Descripción -->
        <div>
          <h2 class="text-xl font-semibold mb-2">Descripción</h2>
          <p class="text-gray-700">${
            item.descripcion || "Sin descripción disponible."
          }</p>
        </div>

        <!-- Características -->
        ${caracteristicasHTML}
      </div>

      <!-- Sección aside: Emprendedor -->
      <aside class="w-full lg:w-1/3 bg-[#FFF3E4] border border-[#4F4538] shadow-md p-6 rounded-2xl h-fit">
        <h2 class="text-lg font-semibold mb-2 text-[#4F4538]">Emprendedor</h2>
        <img src="${emprendedor.imagen || "default-image.jpg"}" alt="Foto de ${
    emprendedor.nombre
  }" class="w-24 h-24 object-cover rounded-full mb-4 border">
        <p class="text-gray-800 font-medium text-xl mb-2"><i class='bx bx-user'></i> ${
          emprendedor.nombre
        }</p>
      <a href="../pages/perfil-emprendedor.html?id=${
        emprendedor.id
      }" class="text-[#c96c3a] text-sm inline-flex items-center gap-1 group">
        <span>Ver perfil del emprendedor</span>
        <i class='text-xl bx bx-arrow-right-stroke text-base transition-transform duration-200 group-hover:translate-x-1'></i>
      </a>
      </aside>
    </div>
  `;
} else {
  document.getElementById(
    "detalle"
  ).innerHTML = `<p class="text-red-600">Producto o servicio no encontrado.</p>`;
}

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
