# Banco Universitario - Rediseño Vue 3

Este proyecto es una recreación modular y moderna de la interfaz del **Banco Universitario**, construida con **Vue 3**, **Bootstrap 5** y una arquitectura "No-Build" para máxima portabilidad.

## 🚀 Cómo iniciar el proyecto

Este proyecto utiliza **Vue 3 SFC** (Single File Components) compilados directamente en el navegador. Debido a restricciones de seguridad de los navegadores (CORS), **no se puede abrir el archivo `index.html` directamente**. Debe ser servido a través de un servidor web local.

### Paso 1: Clonar el repositorio
```bash
git clone https://github.com/Alva-SJAC/Design-Banco-Universitario
cd Design-Banco-Universitario
```

### Paso 2: Iniciar el servidor local
No necesitas `npm` ni instalar dependencias pesadas. Puedes usar el servidor integrado de **Python**:

**En Linux/Mac/Windows:**
```bash
python3 -m http.server 8765
```

### Paso 3: ¡Listo!
Abre tu navegador y entra a:
[http://127.0.0.1:8765](http://127.0.0.1:8765)

---

## 🛠️ Tecnologías utilizadas
- **Vue 3 (Global Build)**: Lógica y reactividad.
- **vue3-sfc-loader**: Compilación de componentes `.vue` en el cliente.
- **Bootstrap 5.3**: Maquetación y grilla.
- **Vanilla CSS**: Estilos personalizados y animaciones premium.
- **Componentes Modulares**: Estructura profesional y escalable.

## 📂 Estructura del Proyecto
- `src/components/`: Componentes individuales reutilizables.
- `src/styles/`: Sistema de diseño y animaciones.
- `src/data/`: Datos estáticos del sitio centralizados.
- `lib/`: Librerías core descargadas localmente (soporte offline).

---
Desarrollado con fines académicos y profesionales.
