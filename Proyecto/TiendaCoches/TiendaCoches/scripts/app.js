// Fetch the cars data from the JSON file
fetch('./data/cars.json')
  .then(response => response.json())
  .then(cars => {
    const modelosContainer = document.querySelector('#modelos .row.g-4'); // Target the "Modelos" section
    const categoriaFiltro = document.getElementById('categoriaFiltro'); // Dropdown for filtering by category

    // Function to render cars based on the selected category
    function renderCars(categoria) {
      modelosContainer.innerHTML = ''; // Clear existing content
      const filteredCars = categoria === 'all' ? cars : cars.filter(car => car.categoria === categoria);

      if (filteredCars.length === 0) {
        modelosContainer.innerHTML = '<p class="text-center">No hay coches disponibles en esta categoría.</p>';
        return;
      }

      filteredCars.forEach(car => {
        const carCard = document.createElement('div');
        carCard.className = 'col-lg-4 col-md-6';
        carCard.innerHTML = `
          <div class="card modelo-card h-100"
               data-bs-toggle="modal"
               data-bs-target="#modalDetalle"
               data-titulo="${car.make} ${car.model}"
               data-img="${car.image}"
               data-precio="$${car.price}"
               data-info="Año: ${car.year} | Precio: $${car.price} | Categoría: ${car.categoria}">
            <img src="${car.image}" class="card-img-top" alt="${car.make} ${car.model}">
            <div class="card-body text-center">
              <h5 class="card-title">${car.make} ${car.model}</h5>
              <p class="text-muted">Desde $${car.price}</p>
              <ul class="list-unstyled">
                <li><i class="bi bi-calendar"></i> Año: ${car.year}</li>
                <li><i class="bi bi-currency-dollar"></i> Precio: $${car.price}</li>
                <li><i class="bi bi-tags"></i> Categoría: ${car.categoria}</li>
              </ul>
            </div>
          </div>
        `;
        modelosContainer.appendChild(carCard);
      });
    }

    // Initial render with all cars
    renderCars('all');

    // Event listener for category filter
    categoriaFiltro.addEventListener('change', (e) => {
      renderCars(e.target.value);
    });

    // Function to render cars based on the search query
    function searchCars(query) {
      const modelosContainer = document.querySelector('#modelos .row.g-4');
      modelosContainer.innerHTML = ''; // Clear existing content
      const filteredCars = cars.filter(car => 
        car.model.toLowerCase().includes(query.toLowerCase()) ||
        car.categoria.toLowerCase().includes(query.toLowerCase()) // Include category in search
      );

      if (filteredCars.length === 0) {
        modelosContainer.innerHTML = '<p class="text-center">No se encontraron resultados para tu búsqueda.</p>';
        return;
      }

      filteredCars.forEach(car => {
        const carCard = document.createElement('div');
        carCard.className = 'col-lg-4 col-md-6';
        carCard.innerHTML = `
          <div class="card modelo-card h-100"
               data-bs-toggle="modal"
               data-bs-target="#modalDetalle"
               data-titulo="${car.make} ${car.model}"
               data-img="${car.image}"
               data-precio="$${car.price}"
               data-info="Año: ${car.year} | Precio: $${car.price} | Categoría: ${car.categoria}">
            <img src="${car.image}" class="card-img-top" alt="${car.make} ${car.model}">
            <div class="card-body text-center">
              <h5 class="card-title">${car.make} ${car.model}</h5>
              <p class="text-muted">Desde $${car.price}</p>
              <ul class="list-unstyled">
                <li><i class="bi bi-calendar"></i> Año: ${car.year}</li>
                <li><i class="bi bi-currency-dollar"></i> Precio: $${car.price}</li>
                <li><i class="bi bi-tags"></i> Categoría: ${car.categoria}</li>
              </ul>
            </div>
          </div>
        `;
        modelosContainer.appendChild(carCard);
      });
    }

    // Event listener for the search form
    const searchForm = document.getElementById('searchForm');
    searchForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const query = document.getElementById('searchInput').value.trim();
      searchCars(query);
    });

    // Ensure modal details are updated correctly in dark mode
    const modalDetalle = document.getElementById('modalDetalle');
    modalDetalle.addEventListener('show.bs.modal', event => {
      const card = event.relatedTarget;
      const titulo = card.getAttribute('data-titulo');
      const img = card.getAttribute('data-img');
      const precio = card.getAttribute('data-precio');
      const info = card.getAttribute('data-info');

      document.getElementById('detalleTitulo').textContent = titulo;
      document.getElementById('detalleImg').src = img;
      document.getElementById('detallePrecio').textContent = precio;
      document.getElementById('detalleInfo').textContent = info;

      // Ensure modal content is styled for dark mode
      const modalContent = modalDetalle.querySelector('.modal-content');
      const isDarkMode = document.body.classList.contains('bg-dark');
      modalContent.classList.toggle('bg-dark', isDarkMode);
      modalContent.classList.toggle('text-light', isDarkMode);
    });
  })
  .catch(error => console.error('Error loading cars data:', error));

// Theme toggle functionality
const themeToggle = document.getElementById('themeToggle');
if (themeToggle) {
  themeToggle.addEventListener('click', () => {
    const isDarkMode = document.body.classList.toggle('bg-dark');
    document.body.classList.toggle('text-light', isDarkMode);
    themeToggle.textContent = isDarkMode ? 'Modo Claro' : 'Modo Oscuro';

    // Update modal content for dark mode
    const modalContent = modalDetalle.querySelector('.modal-content');
    modalContent.classList.toggle('bg-dark', isDarkMode);
    modalContent.classList.toggle('text-light', isDarkMode);
  });
} else {
  console.error('Theme toggle button not found.');
}
