// Función para cargar la configuración desde un archivo YAML
async function cargarConfigYAML() {
  try {
    const response = await fetch('config/config.yaml');
    if (!response.ok) throw new Error('Error al cargar config.yaml');
    const yamlText = await response.text();
    return jsyaml.load(yamlText); // Convierte YAML a JSON
  } catch (error) {
    console.error(error);
    throw error;
  }
}

// Función para crear tarjetas de coches con configuraciones YAML
function crearCardCoche(coche, config) {
  const col = document.createElement('div');
  col.className = 'col-md-4 mb-4';

  const card = document.createElement('div');
  card.className = 'card h-100';

  // Condicional para mostrar imágenes según configuración YAML
  if (config.mostrarImagenes) {
    const img = document.createElement('img');
    img.src = coche.imagen;
    img.alt = `${coche.marca} ${coche.modelo}`;
    img.className = 'card-img-top';
    card.appendChild(img);
  }

  const cardBody = document.createElement('div');
  cardBody.className = 'card-body';

  const title = document.createElement('h5');
  title.className = 'card-title';
  title.textContent = `${coche.marca} ${coche.modelo}`;

  const precio = document.createElement('p');
  precio.className = 'card-text';
  const textoPrecio = config.idioma === 'en' ? 'Price' : 'Precio';
  precio.textContent = `${textoPrecio}: ${coche.precio}`;

  cardBody.appendChild(title);
  cardBody.appendChild(precio);
  card.appendChild(cardBody);
  col.appendChild(card);

  return col;
}

// Función principal para inicializar la aplicación
async function initApp() {
  const app = document.getElementById('app');
  app.innerHTML = '';

  let config = {};
  try {
    config = await cargarConfigYAML(); // Carga configuraciones
  } catch (error) {
    app.innerHTML = '<p class="text-danger">Error al cargar la configuración.</p>';
    console.error('Error al cargar config.yaml:', error);
    return;
  }

  let coches = [];
  try {
    const response = await fetch('data/coches.json'); // Carga datos de coches
    if (!response.ok) throw new Error('Respuesta no válida');
    coches = await response.json();
  } catch (error) {
    app.innerHTML = '<p class="text-danger">Error al cargar los datos de los coches.</p>';
    console.error('Error al cargar coches.json:', error);
    return;
  }

  // Creación de la fila de tarjetas
  const row = document.createElement('div');
  row.className = 'row';

  // Aplicación de animaciones desde configuración YAML
  if (config.animacion === 'fade') {
    row.style.transition = 'opacity 0.5s';
    row.style.opacity = '0';
    setTimeout(() => (row.style.opacity = '1'), 100);
  }

  // Filtrado por máximo de elementos desde configuración YAML
  coches.slice(0, config.maxElementosPorPagina).forEach(coche => {
    const card = crearCardCoche(coche, config);
    row.appendChild(card);
  });

  app.appendChild(row);
}

// Enrutamiento dinámico para secciones de la aplicación
window.addEventListener('popstate', () => {
  const section = location.hash.replace('#', '');
  if (section) cargarSeccion(section);
});

// Función para cargar una sección específica
function cargarSeccion(vista) {
  const app = document.getElementById('app');
  app.innerHTML = `<p>Cargando sección: ${vista}</p>`;
}

// Inicializa la aplicación al cargar la página
window.addEventListener('DOMContentLoaded', () => {
  initApp();
  history.pushState({ section: 'inicio' }, '', '#inicio'); // Establece sección inicial
});


  