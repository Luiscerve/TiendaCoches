const fs = require('fs');
const yaml = require('js-yaml');

let config = {};

// Load the YAML configuration file
try {
    const yamlContent = fs.readFileSync('data/config.yaml', 'utf8');
    config = yaml.load(yamlContent);
} catch (e) {
    console.error('Error loading YAML configuration:', e);
}

// Apply configuration settings
const applyConfig = () => {
    document.body.classList.toggle('dark-theme', config.theme === 'dark');
    document.body.lang = config.language;

    // Set maximum items per page
    const maxItems = config.maxItems || 10;

    // Show or hide images based on configuration
    const showImages = config.showImages !== false;

    // Set up animations
    const animationType = config.animation || 'fade';
    document.body.classList.add(animationType);
};

// Initialize configuration on app load
applyConfig();