# Banco Universitario - Rediseño Vue 3

Este proyecto es una recreación modular y moderna de la interfaz del **Banco Universitario**, construida con **Vue 3**, **Bootstrap 5** y una arquitectura "No-Build" para máxima portabilidad.

## 🚀 Cómo iniciar el proyecto

Este proyecto utiliza **Vue 3 SFC** (Single File Components) compilados directamente en el navegador. Debido a restricciones de seguridad de los navegadores (CORS), **debe ser servido a través de un servidor web local**.

### Paso 1: Clonar el repositorio
```bash
git clone https://github.com/Alva-SJAC/Design-Banco-Universitario
cd Design-Banco-Universitario
```

### Paso 2: Instalación de dependencias (Si es necesario)
Si la carpeta `lib/` está vacía o te faltan archivos, tienes dos opciones:

**Opción A: Sin Node.js / NPM (Recomendado para este entorno)**
Simplemente ejecuta nuestro script de instalación:
```bash
./install-libs.sh
```

**Opción B: Con NPM**
Si tienes Node instalado, puedes ver los scripts disponibles en el `package.json`.

### Paso 3: Iniciar el servidor local
Puedes usar el servidor integrado de **Python**:

**En Linux/Mac/Windows:**
```bash
python3 -m http.server 8765
```

### Paso 4: ¡Listo!
Abre tu navegador y entra a:
[http://127.0.0.1:8765](http://127.0.0.1:8765)

---

## 🛠️ Tecnologías utilizadas
- **Vue 3 (Global Build)**: Lógica y reactividad del frontend.
- **vue3-sfc-loader**: Compilación de componentes `.vue` en tiempo real sin Webpack/Vite.
- **Bootstrap 5.3**: Sistema de diseño y componentes responsivos.
- **Vanilla CSS**: Estilos personalizados de marca y animaciones premium.

## 📂 Estructura del Proyecto
- `src/components/`: Componentes modulares reutilizables.
- `src/styles/`: CSS global, variables de marca y animaciones.
- `src/data/`: Datos estáticos (textos, links, stats) centralizados.
- `lib/`: Dependencias core instaladas localmente para soporte offline.
- `install-libs.sh`: Script para descargar dependencias sin NPM.

---
Desarrollado con fines académicos y profesionales.
