function renderCarDetail(car) {
    const appContainer = document.getElementById('app');
    appContainer.innerHTML = `
        <div class="card mb-4">
            <img src="${car.image}" class="card-img-top" alt="${car.make} ${car.model}">
            <div class="card-body">
                <h5 class="card-title">${car.make} ${car.model}</h5>
                <p class="card-text">Año: ${car.year}</p>
                <p class="card-text">Precio: $${car.price}</p>
                <p class="card-text">${car.description}</p>
                <a href="#/cars" class="btn btn-primary">Volver a la lista</a>
            </div>
        </div>
    `;
}

export default renderCarDetail;