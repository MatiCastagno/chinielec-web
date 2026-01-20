# CHINIELEC - Sitio Web Corporativo

![CHINIELEC Logo](assets/images/logo.png)

## 📋 Descripción del Proyecto

Sitio web corporativo para **CHINIELEC**, empresa de Rosario dedicada a la comercialización mayorista de materiales eléctricos y electrónicos. Fundada en 2018, provee soluciones a empresas constructoras, retail, hotelería y más.

## 🎯 Objetivo

Crear una presencia web profesional que permita a potenciales clientes conocer la empresa, explorar su catálogo de productos y contactarlos fácilmente.

## 🛠️ Stack Tecnológico

| Tecnología | Uso |
|------------|-----|
| HTML5 | Estructura y semántica |
| CSS3 | Estilos, animaciones y responsive design |
| JavaScript (Vanilla) | Interactividad y funcionalidades |
| Google Maps API | Mapa de ubicación |
| Font Awesome | Iconografía |
| Google Fonts | Tipografías |

## 📁 Estructura del Proyecto

```
chinielec-web/
├── index.html              # Página principal (SPA-like con secciones)
├── productos.html          # Página de catálogo de productos
├── producto-detalle.html   # Template para detalle de producto
├── assets/
│   ├── css/
│   │   ├── styles.css      # Estilos principales
│   │   ├── responsive.css  # Media queries
│   │   └── animations.css  # Animaciones
│   ├── js/
│   │   ├── main.js         # Lógica principal
│   │   ├── productos.js    # Lógica del catálogo
│   │   └── contacto.js     # Validación de formulario
│   ├── images/
│   │   ├── logo.png        # Logo principal
│   │   ├── logo-white.png  # Logo versión blanca
│   │   ├── hero/           # Imágenes del hero
│   │   └── productos/      # Imágenes de productos
│   └── icons/
│       └── favicon.ico     # Favicon
├── docs/
│   ├── HOSTING.md          # Guía de hosting
│   ├── DOMINIO.md          # Guía de compra de dominio
│   └── MANTENIMIENTO.md    # Guía de mantenimiento
└── README.md               # Este archivo
```

## 🎨 Identidad Visual

### Colores de Marca
```css
:root {
  --primary-dark: #1a3a5c;     /* Azul oscuro principal */
  --primary-light: #00b4d8;    /* Celeste/Cyan */
  --accent: #0077b6;           /* Azul intermedio */
  --white: #ffffff;
  --light-gray: #f8f9fa;
  --dark-gray: #333333;
}
```

### Tipografías
- **Títulos**: Montserrat (Bold, Semi-Bold)
- **Cuerpo**: Open Sans (Regular, Light)

## 📄 Secciones del Sitio

### 1. **Inicio (Hero)**
- Banner principal con imagen de fondo
- Slogan de la empresa (pendiente de confirmar)
- Call-to-action hacia productos y contacto

### 2. **Nosotros**
- Historia de la empresa
- Valores y misión
- Por qué elegirnos

### 3. **Productos**
- Vista general de categorías/productos destacados
- Grilla de productos con imagen y nombre
- Página de detalle por producto
- Sin precios (solo consultar)

### 4. **Contacto**
- Información de contacto (teléfono, emails)
- Mapa con ubicación
- Horarios de atención
- Botón de WhatsApp flotante

## 📞 Información de Contacto

| Dato | Valor |
|------|-------|
| **Teléfono** | 0341-3232946 |
| **Email Principal** | chinielec@gmail.com |
| **Email Ventas 1** | ventas.chinielec@gmail.com |
| **Email Ventas 2** | ventas2.chinielec@gmail.com |
| **Dirección** | Juan Pablo II 459, Rosario, Santa Fe |
| **Horarios** | Lunes a Viernes de 8:00 a 17:00 |

## 🚀 Instalación y Desarrollo

### Requisitos Previos
- Navegador web moderno
- Editor de código (VS Code recomendado)
- Git instalado

### Clonar el Repositorio
```bash
git clone https://github.com/[usuario]/chinielec-web.git
cd chinielec-web
```

### Desarrollo Local
Simplemente abre `index.html` en tu navegador, o usa un servidor local:

```bash
# Con Python 3
python -m http.server 8000

# Con Node.js (si tienes live-server instalado)
npx live-server

# Con VS Code
# Instala la extensión "Live Server" y haz clic derecho -> Open with Live Server
```

## 📱 Responsive Design

El sitio está optimizado para:
- 📱 Móviles (320px - 480px)
- 📱 Tablets (481px - 768px)
- 💻 Laptops (769px - 1024px)
- 🖥️ Desktop (1025px+)

## ✅ Checklist de Lanzamiento

- [ ] Contenido final revisado y aprobado
- [ ] Imágenes de productos cargadas
- [ ] Colores de marca confirmados
- [ ] Slogan definido
- [ ] Formulario de contacto testeado
- [ ] WhatsApp Business configurado
- [ ] Google Maps funcionando
- [ ] SEO básico implementado
- [ ] Favicon agregado
- [ ] Testeado en móviles
- [ ] Dominio comprado y configurado
- [ ] Hosting configurado
- [ ] SSL activo (HTTPS)

## 📚 Documentación Adicional

- [Guía de Compra de Dominio](docs/DOMINIO.md)
- [Guía de Hosting](docs/HOSTING.md)
- [Guía de Mantenimiento](docs/MANTENIMIENTO.md)

## 👥 Créditos

- **Desarrollo**: [Tu nombre]
- **Cliente**: CHINIELEC - Materiales Eléctricos
- **Año**: 2025

## 📄 Licencia

Este proyecto es propiedad de CHINIELEC. Todos los derechos reservados.

---

**CHINIELEC** - Materiales Eléctricos | Rosario, Santa Fe, Argentina
