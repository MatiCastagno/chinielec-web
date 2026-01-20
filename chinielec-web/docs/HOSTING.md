# Guía de Hosting - CHINIELEC

## 📋 Índice
1. [¿Qué es el hosting?](#qué-es-el-hosting)
2. [Opciones de hosting](#opciones-de-hosting)
3. [Comparativa de opciones](#comparativa-de-opciones)
4. [GitHub Pages (RECOMENDADO)](#github-pages-recomendado)
5. [Netlify (Alternativa)](#netlify-alternativa)
6. [Vercel (Alternativa)](#vercel-alternativa)
7. [Hosting tradicional (Pago)](#hosting-tradicional-pago)
8. [Configuración SSL/HTTPS](#configuración-sslhttps)

---

## ¿Qué es el hosting?

El hosting es el servicio que almacena los archivos de tu sitio web y los hace accesibles en internet las 24 horas del día.

### Tipos de hosting:

| Tipo | Descripción | Ideal para |
|------|-------------|------------|
| **Estático** | Solo HTML, CSS, JS | Sitios informativos, landing pages |
| **Dinámico** | Con backend (PHP, Node, etc.) | E-commerce, apps web |
| **Serverless** | Funciones bajo demanda | APIs, microservicios |

**Para CHINIELEC**: Hosting estático es perfecto (y puede ser GRATIS).

---

## Opciones de hosting

### Gratuitas (Recomendadas para este proyecto)

| Servicio | Límites | SSL | Custom Domain | Ideal para |
|----------|---------|-----|---------------|------------|
| **GitHub Pages** | 100GB/mes | ✅ Gratis | ✅ Gratis | Sitios estáticos |
| **Netlify** | 100GB/mes | ✅ Gratis | ✅ Gratis | Sitios con forms |
| **Vercel** | 100GB/mes | ✅ Gratis | ✅ Gratis | Proyectos React/Next |
| **Cloudflare Pages** | Ilimitado | ✅ Gratis | ✅ Gratis | Alto tráfico |

### De pago (Si necesitas más)

| Servicio | Precio/mes | Espacio | Ideal para |
|----------|------------|---------|------------|
| **Hostinger** | ~$3-5 USD | 50-100GB | Pequeñas empresas |
| **DonWeb** | ~$2.000 ARS | 10GB | Argentina local |
| **SiteGround** | ~$4 USD | 10GB | WordPress |

---

## Comparativa de opciones

Para el proyecto CHINIELEC (sitio estático HTML/CSS/JS):

| Criterio | GitHub Pages | Netlify | Vercel | Hostinger |
|----------|--------------|---------|--------|-----------|
| **Precio** | Gratis | Gratis | Gratis | ~$3/mes |
| **Facilidad** | ⭐⭐⭐ | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐ | ⭐⭐⭐⭐ |
| **Velocidad** | ⭐⭐⭐⭐ | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐⭐ | ⭐⭐⭐ |
| **SSL gratis** | ✅ | ✅ | ✅ | ✅ |
| **Dominio propio** | ✅ | ✅ | ✅ | ✅ |
| **Deploy automático** | ✅ | ✅ | ✅ | ❌ |
| **Formularios** | ❌ | ✅ | ❌ | ✅ |
| **Soporte español** | ❌ | ❌ | ❌ | ✅ |

**Mi recomendación**: **GitHub Pages** porque ya vas a usar GitHub para el repositorio.

---

## GitHub Pages (RECOMENDADO)

### ¿Por qué GitHub Pages?

1. ✅ **Gratis** para siempre
2. ✅ **Integrado** con tu repositorio Git
3. ✅ **SSL automático** y gratis
4. ✅ **CDN global** (carga rápido en todo el mundo)
5. ✅ **Deploy automático** al hacer push
6. ✅ **Dominio personalizado** gratis

### Requisitos previos
- Cuenta de GitHub (gratis)
- Git instalado en tu PC
- El proyecto listo para subir

### Paso 1: Crear repositorio en GitHub

1. Ir a https://github.com
2. Click en "+" → "New repository"
3. Configurar:
   - **Repository name**: `chinielec-web`
   - **Description**: "Sitio web corporativo de CHINIELEC"
   - **Public** (requerido para GitHub Pages gratis)
   - ✅ Add a README file (opcional, ya tenemos uno)
4. Click "Create repository"

### Paso 2: Subir el proyecto

Desde la terminal en la carpeta del proyecto:

```bash
# Inicializar Git (si no está inicializado)
git init

# Agregar el remote de GitHub
git remote add origin https://github.com/[TU-USUARIO]/chinielec-web.git

# Agregar todos los archivos
git add .

# Crear el primer commit
git commit -m "Initial commit - Sitio web CHINIELEC"

# Subir a GitHub
git branch -M main
git push -u origin main
```

### Paso 3: Activar GitHub Pages

1. Ir al repositorio en GitHub
2. Click en **Settings** (pestaña)
3. En el menú lateral, click en **Pages**
4. En "Source", seleccionar:
   - **Branch**: `main`
   - **Folder**: `/ (root)`
5. Click **Save**

### Paso 4: Esperar el deploy

- GitHub mostrará: "Your site is being published..."
- En 1-5 minutos estará listo
- URL temporal: `https://[tu-usuario].github.io/chinielec-web/`

### Paso 5: Configurar dominio personalizado

1. En la misma página de Settings → Pages
2. En "Custom domain", escribir: `www.chinielec.com` (o `.com.ar`)
3. Click **Save**
4. Marcar ✅ **Enforce HTTPS**

Luego, configurar DNS en tu registrador de dominio (ver [DOMINIO.md](DOMINIO.md)):

```
Tipo: A
Host: @
Valores:
  185.199.108.153
  185.199.109.153
  185.199.110.153
  185.199.111.153

Tipo: CNAME
Host: www
Valor: [tu-usuario].github.io
```

### Paso 6: Crear archivo CNAME

Crear un archivo llamado `CNAME` (sin extensión) en la raíz del proyecto:

```
www.chinielec.com
```

Hacer commit y push:
```bash
git add CNAME
git commit -m "Add custom domain"
git push
```

### Actualizar el sitio

Cada vez que hagas cambios:
```bash
git add .
git commit -m "Descripción del cambio"
git push
```

GitHub Pages se actualiza automáticamente en 1-2 minutos.

---

## Netlify (Alternativa)

### Ventajas sobre GitHub Pages:
- Formularios de contacto procesados sin backend
- Previews de cada branch
- Funciones serverless incluidas
- Redirects y headers configurables

### Paso a paso:

1. Ir a https://netlify.com
2. Click "Sign up" → "GitHub"
3. Autorizar acceso a tu cuenta
4. Click "New site from Git"
5. Seleccionar el repositorio `chinielec-web`
6. Configurar:
   - **Branch**: `main`
   - **Build command**: (dejar vacío para HTML estático)
   - **Publish directory**: `.` o `/`
7. Click "Deploy site"

### Dominio personalizado en Netlify:
1. Site settings → Domain management
2. Click "Add custom domain"
3. Escribir tu dominio
4. Configurar DNS según instrucciones de Netlify

---

## Vercel (Alternativa)

Similar a Netlify, especialmente bueno si en el futuro migrás a React.

### Paso a paso:

1. Ir a https://vercel.com
2. Click "Sign Up" → "Continue with GitHub"
3. Click "New Project"
4. Importar el repositorio `chinielec-web`
5. Framework Preset: "Other"
6. Click "Deploy"

---

## Hosting tradicional (Pago)

Si preferís un hosting tradicional argentino o con soporte en español:

### Hostinger (Internacional, económico)

1. Ir a https://hostinger.com.ar
2. Elegir plan "Hosting Web Single" (~$3 USD/mes)
3. Registrar/conectar dominio
4. Acceder al panel hPanel
5. Usar "Administrador de archivos" o FTP para subir archivos

### DonWeb (Argentina)

1. Ir a https://donweb.com
2. Elegir plan de hosting compartido
3. Pago en pesos argentinos
4. Soporte en español 24/7
5. Panel cPanel tradicional

---

## Configuración SSL/HTTPS

### ¿Qué es SSL?
SSL (HTTPS) encripta la conexión entre el navegador del usuario y tu servidor. Es **obligatorio** para:
- SEO (Google penaliza sitios sin HTTPS)
- Confianza del usuario (candadito verde)
- Formularios de contacto seguros

### SSL en cada plataforma:

| Plataforma | SSL | Configuración |
|------------|-----|---------------|
| GitHub Pages | Automático | Marcar "Enforce HTTPS" |
| Netlify | Automático | Se activa solo |
| Vercel | Automático | Se activa solo |
| Hostinger | Incluido | Activar en panel |
| DonWeb | Incluido/Let's Encrypt | Activar en cPanel |

---

## 📋 Checklist de Hosting

### Antes del deploy:
- [ ] Código funcionando localmente
- [ ] Todas las imágenes optimizadas
- [ ] Links internos funcionando
- [ ] Sin errores en consola del navegador

### Deploy:
- [ ] Repositorio en GitHub creado
- [ ] GitHub Pages activado (o alternativa elegida)
- [ ] Sitio accesible en URL temporal
- [ ] Dominio personalizado configurado
- [ ] DNS apuntando correctamente
- [ ] SSL/HTTPS activo
- [ ] Redirección www ↔ sin www funcionando

### Post-deploy:
- [ ] Testear en móvil
- [ ] Verificar velocidad (PageSpeed Insights)
- [ ] Probar formulario de contacto
- [ ] Verificar WhatsApp button
- [ ] Verificar Google Maps

---

## 🔧 Troubleshooting

### "Mi sitio no carga"
1. Verificar que el DNS se propagó (usar https://dnschecker.org)
2. Esperar 24-48 horas si cambiaste nameservers
3. Limpiar caché del navegador (Ctrl+Shift+R)

### "Error 404 en GitHub Pages"
1. Verificar que el archivo se llame `index.html` (minúsculas)
2. Verificar que esté en la raíz del repo o en `/docs`
3. Revisar la configuración de Source en Settings → Pages

### "HTTPS no funciona"
1. En GitHub Pages, marcar "Enforce HTTPS"
2. Esperar unos minutos después de configurar dominio
3. Verificar que el certificado se generó (puede tomar hasta 24hs)

### "Los cambios no se ven"
1. Verificar que hiciste `git push`
2. Ir a Actions en GitHub y ver si el deploy terminó
3. Limpiar caché del navegador
4. Esperar 1-2 minutos

---

## 📊 Monitoreo

### Google Search Console (Gratis)
- Verificar que Google indexe tu sitio
- Ver errores de rastreo
- https://search.google.com/search-console

### Google Analytics (Gratis)
- Ver cuántas visitas tiene tu sitio
- De dónde vienen los usuarios
- https://analytics.google.com

### UptimeRobot (Gratis)
- Alertas si tu sitio se cae
- Monitoreo cada 5 minutos
- https://uptimerobot.com

---

**Siguiente paso**: [Mantenimiento del sitio](MANTENIMIENTO.md)
