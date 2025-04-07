// modalHandler.js

// Function to handle the display of car details in the modal
function showCarDetails(car) {
    document.getElementById('detalleTitulo').textContent = car.title;
    document.getElementById('detalleImg').src = car.image;
    document.getElementById('detallePrecio').textContent = car.price;
    document.getElementById('detalleInfo').textContent = car.info;
}

// Event listener for modal display
const modalDetalle = document.getElementById('modalDetalle');
modalDetalle.addEventListener('show.bs.modal', event => {
    const card = event.relatedTarget;
    const carId = card.getAttribute('data-id');

    // Fetch car data from the JSON file
    fetch('/src/assets/data/cars.json')
        .then(response => response.json())
        .then(data => {
            const car = data.find(c => c.id === carId);
            if (car) {
                showCarDetails(car);
            }
        })
        .catch(error => console.error('Error fetching car data:', error));
});