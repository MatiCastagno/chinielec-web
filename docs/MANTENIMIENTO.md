# Guía de Mantenimiento - CHINIELEC

## 📋 Índice
1. [Tareas de mantenimiento](#tareas-de-mantenimiento)
2. [Cómo actualizar contenido](#cómo-actualizar-contenido)
3. [Agregar/modificar productos](#agregarmodificar-productos)
4. [Actualizar información de contacto](#actualizar-información-de-contacto)
5. [Optimización de imágenes](#optimización-de-imágenes)
6. [Backup y seguridad](#backup-y-seguridad)
7. [SEO básico](#seo-básico)

---

## Tareas de mantenimiento

### Frecuencia recomendada

| Tarea | Frecuencia | Importancia |
|-------|------------|-------------|
| Verificar que el sitio carga | Semanal | Alta |
| Actualizar productos | Según necesidad | Media |
| Revisar formulario de contacto | Mensual | Alta |
| Renovar dominio | Anual | Crítica |
| Revisar analytics | Mensual | Baja |
| Actualizar textos/info | Según necesidad | Media |
| Backup del código | Después de cambios | Alta |

### Checklist mensual
- [ ] El sitio carga correctamente en desktop y móvil
- [ ] WhatsApp button funciona
- [ ] Mapa de Google se ve
- [ ] Información de contacto actualizada
- [ ] Sin enlaces rotos
- [ ] Dominio no está por vencer

---

## Cómo actualizar contenido

### Flujo de trabajo básico

```
1. Clonar/actualizar repositorio local
2. Hacer cambios en los archivos
3. Probar localmente
4. Commit y push a GitHub
5. Verificar en el sitio en vivo
```

### Comandos Git necesarios

```bash
# Descargar últimos cambios (si trabajás desde otra PC)
git pull origin main

# Ver qué archivos cambiaron
git status

# Agregar cambios
git add .

# Crear commit con descripción
git commit -m "Descripción del cambio"

# Subir cambios
git push origin main
```

### Estructura de archivos a modificar

| Qué cambiar | Archivo |
|-------------|---------|
| Texto de inicio | `index.html` (sección hero) |
| Texto "Nosotros" | `index.html` (sección about) |
| Productos | `productos.html` y `assets/js/productos.js` |
| Información de contacto | `index.html` (sección contact) |
| Estilos/colores | `assets/css/styles.css` |
| Imágenes | Carpeta `assets/images/` |

---

## Agregar/modificar productos

### Estructura de un producto en productos.js

```javascript
{
    id: 1,
    nombre: "Cable Unipolar 2.5mm",
    categoria: "cables",
    descripcion: "Cable unipolar de cobre, ideal para instalaciones domiciliarias.",
    imagen: "assets/images/productos/cable-unipolar.jpg",
    caracteristicas: [
        "Material: Cobre electrolítico",
        "Sección: 2.5mm²",
        "Aislación: PVC",
        "Norma: IRAM 2183"
    ]
}
```

### Para agregar un nuevo producto:

1. **Agregar imagen** en `assets/images/productos/`
   - Formato: JPG o PNG
   - Tamaño recomendado: 600x600px
   - Nombre sin espacios: `nombre-producto.jpg`

2. **Editar** `assets/js/productos.js`
   - Copiar estructura de producto existente
   - Cambiar `id` (número único)
   - Completar datos

3. **Commit y push**

### Para modificar un producto existente:

1. Buscar el producto por `id` en `productos.js`
2. Modificar los campos necesarios
3. Si cambiás la imagen, reemplazar el archivo en `assets/images/productos/`
4. Commit y push

### Para eliminar un producto:

1. Eliminar el objeto del array en `productos.js`
2. Opcionalmente eliminar la imagen de `assets/images/productos/`
3. Commit y push

---

## Actualizar información de contacto

### Ubicaciones en el código

**index.html** - Sección de contacto:
```html
<!-- Buscar y modificar estas líneas -->
<a href="tel:03413232946">0341-3232946</a>
<a href="mailto:chinielec@gmail.com">chinielec@gmail.com</a>
```

**index.html** - WhatsApp button:
```html
<!-- El número debe estar en formato internacional sin + -->
<a href="https://wa.me/5493413232946">
```

**index.html** - Google Maps embed:
```html
<!-- Reemplazar el src del iframe con el nuevo embed -->
<iframe src="https://www.google.com/maps/embed?..."></iframe>
```

### Cómo obtener nuevo embed de Google Maps

1. Ir a Google Maps
2. Buscar la dirección
3. Click en "Compartir"
4. Click en "Incorporar un mapa"
5. Copiar el código del iframe
6. Pegar en index.html reemplazando el existente

---

## Optimización de imágenes

### Antes de subir imágenes

1. **Redimensionar** al tamaño necesario (no subir fotos de 4000px)
2. **Comprimir** usando herramientas online
3. **Nombrar** correctamente (sin espacios, minúsculas)

### Herramientas gratuitas de compresión

| Herramienta | URL | Mejor para |
|-------------|-----|------------|
| TinyPNG | https://tinypng.com | PNG y JPG |
| Squoosh | https://squoosh.app | Control avanzado |
| Compressor.io | https://compressor.io | Uso rápido |

### Tamaños recomendados

| Uso | Ancho máximo | Formato |
|-----|--------------|---------|
| Hero/Banner | 1920px | JPG (calidad 80%) |
| Productos | 600px | JPG o PNG |
| Logo | 300px | PNG (transparente) |
| Favicon | 32x32px | ICO o PNG |

### Impacto en velocidad

| Tamaño imagen | Tiempo de carga |
|---------------|-----------------|
| 100KB | ~0.1s |
| 500KB | ~0.5s |
| 1MB | ~1s |
| 5MB | ~5s ❌ |

**Regla**: Ninguna imagen debería superar 200KB para web.

---

## Backup y seguridad

### El código ya está respaldado en GitHub

Cada `git push` crea una copia en GitHub. Para restaurar versiones anteriores:

```bash
# Ver historial de commits
git log --oneline

# Volver a un commit anterior (temporal)
git checkout [hash-del-commit]

# Volver al estado actual
git checkout main
```

### Backup de imágenes

Las imágenes en `assets/images/` también se guardan en GitHub, pero es buena práctica tener una copia local organizada.

### Seguridad básica

1. **No publicar** información sensible en el código
2. **Usar contraseñas fuertes** en GitHub y hosting
3. **Activar 2FA** en GitHub
4. **Mantener privado** el email de administrador del dominio

---

## SEO básico

### Meta tags importantes (en index.html)

```html
<head>
    <!-- Título - Aparece en Google y pestaña del navegador -->
    <title>CHINIELEC | Materiales Eléctricos en Rosario</title>
    
    <!-- Descripción - Aparece en resultados de Google -->
    <meta name="description" content="Venta mayorista de materiales eléctricos y electrónicos en Rosario. Proveemos a constructoras, retail y hotelería desde 2018.">
    
    <!-- Keywords (menos importante hoy, pero no molesta) -->
    <meta name="keywords" content="materiales eléctricos, rosario, mayorista, cables, iluminación, tableros">
</head>
```

### Para mejorar SEO

1. **Título único** en cada página (index, productos, etc.)
2. **Descripciones** diferentes para cada página
3. **Texto alternativo** en todas las imágenes (`alt="descripción"`)
4. **URLs amigables** (chinielec.com/productos vs chinielec.com/page?id=2)
5. **Sitio rápido** (imágenes optimizadas)
6. **Móvil-friendly** (responsive design)

### Verificar en Google Search Console

1. Ir a https://search.google.com/search-console
2. Agregar propiedad (tu dominio)
3. Verificar con DNS o archivo HTML
4. Enviar sitemap (opcional para sitio pequeño)
5. Monitorear indexación y errores

### Google My Business

Para aparecer en Google Maps y búsquedas locales:

1. Ir a https://business.google.com
2. Reclamar o crear el perfil de CHINIELEC
3. Completar toda la información
4. Agregar fotos del local
5. Responder reseñas

---

## 📞 Soporte técnico

### Si algo no funciona:

1. **Verificar** que los cambios se subieron (`git status`)
2. **Revisar** la consola del navegador (F12 → Console)
3. **Limpiar caché** (Ctrl+Shift+R)
4. **Esperar** 1-2 minutos para que GitHub Pages actualice
5. **Revisar** el historial de Actions en GitHub

### Errores comunes

| Error | Causa | Solución |
|-------|-------|----------|
| 404 | Archivo no encontrado | Verificar nombre/ubicación |
| Imagen no carga | Ruta incorrecta | Revisar path en src |
| Cambios no se ven | No se hizo push | `git push origin main` |
| Estilos rotos | Error de CSS | Revisar consola F12 |

---

## 📊 Métricas a monitorear

### Google Analytics (si se implementa)

- **Usuarios**: Cuántas personas visitan el sitio
- **Sesiones**: Cuántas visitas totales
- **Tasa de rebote**: % que se va sin interactuar
- **Páginas más vistas**: Qué contenido interesa
- **Dispositivos**: Desktop vs móvil
- **Ubicación**: De dónde son los visitantes

### Métricas de rendimiento

- **PageSpeed Insights**: https://pagespeed.web.dev
  - Objetivo: Score > 90 en móvil y desktop
  
- **GTmetrix**: https://gtmetrix.com
  - Tiempo de carga < 3 segundos

---

## 🗓️ Calendario de mantenimiento sugerido

### Semanal (5 min)
- Verificar que el sitio carga

### Mensual (30 min)
- Revisar formulario/WhatsApp
- Actualizar productos si hay cambios
- Ver analytics básico

### Trimestral (1 hora)
- Revisar velocidad del sitio
- Actualizar textos si es necesario
- Verificar enlaces externos

### Anual
- Renovar dominio (CRÍTICO)
- Revisar y actualizar contenido general
- Evaluar si necesita rediseño

---

**¿Necesitás hacer un cambio y no sabés cómo? Consultá con el desarrollador.**
