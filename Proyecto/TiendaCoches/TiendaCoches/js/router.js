function navigateTo(view) {
    const appContainer = document.getElementById('app');
    appContainer.innerHTML = ''; // Clear the current view

    switch(view) {
        case 'home':
            import('./views/home.js').then(module => {
                module.default();
            });
            break;
        case 'carList':
            import('./views/carList.js').then(module => {
                module.default();
            });
            break;
        case 'carDetail':
            const carId = getCarIdFromUrl(); // Function to extract car ID from URL
            import('./views/carDetail.js').then(module => {
                module.default(carId);
            });
            break;
        default:
            console.error('View not found');
            break;
    }
}

function getCarIdFromUrl() {
    const urlParams = new URLSearchParams(window.location.hash.substring(1));
    return urlParams.get('id');
}

// Event listener for hash changes
window.addEventListener('hashchange', () => {
    const view = window.location.hash.substring(1) || 'home';
    navigateTo(view);
});

// Initial navigation
window.addEventListener('load', () => {
    const view = window.location.hash.substring(1) || 'home';
    navigateTo(view);
});