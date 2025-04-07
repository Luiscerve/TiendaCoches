function renderHome() {
    const appContainer = document.getElementById('app');
    appContainer.innerHTML = `
        <div class="text-center">
            <h1>Bienvenido a AutoPremium</h1>
            <p>Tu tienda de coches en línea.</p>
            <a href="#/car-list" class="btn btn-primary">Ver coches disponibles</a>
        </div>
    `;
}

export default renderHome;