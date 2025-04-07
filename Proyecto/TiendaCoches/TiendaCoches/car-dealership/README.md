# Car Dealership Web Application

## Overview
This project is a dynamic car dealership web application that utilizes JSON and YAML data sources, implements Bootstrap for design, and includes routing between sections without reloading the page.

## Project Structure
```
car-dealership
├── src
│   ├── assets
│   │   └── data
│   │       ├── cars.json
│   │       └── testimonials.yml
│   ├── js
│   │   ├── router.js
│   │   ├── carService.js
│   │   └── modalHandler.js
│   ├── css
│   │   └── styles.css
│   ├── components
│   │   ├── navbar.html
│   │   ├── carousel.html
│   │   └── modals.html
│   └── index.html
├── package.json
└── README.md
```

## Features
- **Dynamic Data Loading**: The application fetches car data from a JSON file and testimonials from a YAML file.
- **Responsive Design**: Utilizes Bootstrap for a mobile-friendly interface.
- **Single Page Application**: Implements routing to navigate between sections without reloading the page.
- **Modals for Details**: Displays detailed information about cars and allows users to schedule test drives through modals.

## Setup Instructions
1. Clone the repository:
   ```
   git clone <repository-url>
   ```
2. Navigate to the project directory:
   ```
   cd car-dealership
   ```
3. Install dependencies:
   ```
   npm install
   ```
4. Open `src/index.html` in a web browser to view the application.

## Running the Application
To run the application, simply open the `index.html` file in your preferred web browser. Ensure that you have a local server running if you are using features that require AJAX calls.

## Dependencies
- Bootstrap: For responsive design and components.
- js-yaml: For parsing YAML files.

## License
This project is licensed under the MIT License.