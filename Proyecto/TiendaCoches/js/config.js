// Función para cargar la configuración desde un archivo YAML con manejo de errores
async function cargarConfigYAML() {
  try {
    const response = await fetch('data/config.yaml');
    if (!response.ok) {
      throw new Error(`Error al cargar config.yaml: ${response.status} ${response.statusText}`);
    }
    const text = await response.text();
    return jsyaml.load(text); // Convierte YAML en un objeto JSON
  } catch (error) {
    console.error('Error al cargar la configuración YAML:', error);
    throw error; // Lanza el error para que pueda manejarse externamente
  }
}

  