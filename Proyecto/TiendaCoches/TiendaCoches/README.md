# TiendaCoches

## Descripción
TiendaCoches es una aplicación web dinámica para una tienda de coches que permite a los usuarios explorar diferentes modelos de coches, ver detalles y configuraciones, y navegar entre secciones sin recargar la página. La aplicación utiliza datos almacenados en un archivo JSON y configuraciones en un archivo YAML, todo presentado con un diseño atractivo utilizando Bootstrap.

## Estructura del Proyecto
```
TiendaCoches
├── css
│   └── styles.css
├── data
│   ├── cars.json
│   └── config.yaml
├── js
│   ├── app.js
│   ├── config.js
│   ├── router.js
│   └── views
│       ├── carDetail.js
│       ├── carList.js
│       └── home.js
├── libs
│   └── js-yaml.min.js
├── index.html
└── README.md
```

## Instalación
1. Clona este repositorio en tu máquina local.
2. Abre el archivo `index.html` en tu navegador para iniciar la aplicación.

## Características
- Visualización de coches en formato de tarjetas.
- Navegación entre diferentes vistas (inicio, lista de coches, detalle del coche) sin recargar la página.
- Configuración de la aplicación a través de un archivo YAML, permitiendo personalizar el número de elementos por página, el tema visual y más.
- Interactividad para filtrar coches por diferentes criterios.

## Uso
- Navega a la página de inicio para ver una introducción a la tienda.
- Accede a la lista de coches para explorar las opciones disponibles.
- Haz clic en un coche para ver más detalles sobre él.

## Contribuciones
Las contribuciones son bienvenidas. Si deseas contribuir, por favor abre un issue o envía un pull request.