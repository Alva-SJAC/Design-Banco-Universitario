#!/bin/bash

# Script de instalación manual para Banco Universitario
# Descarga las librerías necesarias a la carpeta lib/ sin usar NPM

echo "🚀 Iniciando descarga de dependencias locales..."

# Crear carpeta lib si no existe
mkdir -p lib

# Descargar Vue 3
echo "📦 Descargando Vue 3..."
curl -L https://cdn.jsdelivr.net/npm/vue@3.5.13/dist/vue.global.prod.js -o lib/vue.global.js

# Descargar Vue SFC Loader
echo "📦 Descargando Vue3-SFC-Loader..."
curl -L https://cdn.jsdelivr.net/npm/vue3-sfc-loader@0.9.5/dist/vue3-sfc-loader.js -o lib/vue3-sfc-loader.js

# Descargar Bootstrap 5 (CSS y JS)
echo "📦 Descargando Bootstrap 5.3..."
curl -L https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css -o lib/bootstrap.min.css
curl -L https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js -o lib/bootstrap.bundle.min.js

echo "✅ Instalación completada con éxito."
echo "Para iniciar el servidor, ejecuta: python3 -m http.server 8765"
