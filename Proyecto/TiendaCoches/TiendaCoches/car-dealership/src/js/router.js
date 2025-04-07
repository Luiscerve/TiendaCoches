document.addEventListener('DOMContentLoaded', () => {
    const routes = {
        '#inicio': () => loadComponent('components/carousel.html'),
        '#modelos': () => loadComponent('components/modelos.html'),
        '#testimonios': () => loadComponent('components/testimonios.html'),
        '#contacto': () => loadComponent('components/contacto.html'),
    };

    const loadComponent = (componentPath) => {
        fetch(componentPath)
            .then(response => response.text())
            .then(html => {
                document.getElementById('main-content').innerHTML = html;
            })
            .catch(error => console.error('Error loading component:', error));
    };

    const navigate = () => {
        const hash = window.location.hash || '#inicio';
        if (routes[hash]) {
            routes[hash]();
        } else {
            loadComponent('components/404.html'); // Load a 404 component if route not found
        }
    };

    window.addEventListener('hashchange', navigate);
    navigate(); // Initial load
});