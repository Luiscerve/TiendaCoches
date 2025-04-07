function renderCarList(cars) {
    const carListContainer = document.getElementById('car-list');
    carListContainer.innerHTML = '';

    cars.forEach(car => {
        const card = document.createElement('div');
        card.className = 'card mb-3';
        card.style.width = '18rem';

        card.innerHTML = `
            <img src="${car.image}" class="card-img-top" alt="${car.make} ${car.model}">
            <div class="card-body">
                <h5 class="card-title">${car.make} ${car.model}</h5>
                <p class="card-text">Year: ${car.year}</p>
                <p class="card-text">Price: $${car.price}</p>
                <a href="#/car/${car.id}" class="btn btn-primary">View Details</a>
            </div>
        `;

        carListContainer.appendChild(card);
    });
}

export default renderCarList;