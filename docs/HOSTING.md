# HOSTING — Tutorial Definitivo
## Cloudflare Pages + GitHub (cuenta empresa)

---

## Resumen del plan

| Qué | Quién | Costo |
|-----|-------|-------|
| Cuenta GitHub de la empresa | Cliente | Gratis |
| Transferencia del repo | Casti | Gratis |
| Cuenta Cloudflare | Casti | Gratis |
| Hosting en Cloudflare Pages | Casti | Gratis |
| Dominio `chinielec.com.ar` | Cliente (con CUIT) | ~$5.000-8.000 ARS/año |
| Conectar dominio a Cloudflare | Casti | Gratis |

---

## PASO 1 — El cliente crea su cuenta de GitHub
**Quién lo hace: el cliente**

1. Ir a https://github.com
2. Click en **"Sign up"**
3. Completar:
   - **Username**: `chinielec` (o `chinielec-materiales`)
   - **Email**: el email de la empresa (ej: `chinielec@gmail.com`)
   - **Password**: una contraseña segura
4. Verificar el email que llega
5. **El cliente le pasa a Casti el nombre de usuario creado**

---

## PASO 2 — Casti transfiere el repositorio
**Quién lo hace: Casti**

1. Ir a https://github.com/maticastagno/chinielec-web/settings
2. Bajar hasta la sección **"Danger Zone"**
3. Click en **"Transfer"**
4. Escribir el nombre del repo (`chinielec-web`) para confirmar
5. Ingresar el nombre de usuario del cliente (ej: `chinielec`)
6. Confirmar la transferencia
7. El repo queda en `github.com/chinielec/chinielec-web`

---

## PASO 3 — Casti crea la cuenta de Cloudflare
**Quién lo hace: Casti** *(puede usar su propio email o el de la empresa)*

1. Ir a https://cloudflare.com
2. Click en **"Sign Up"**
3. Crear cuenta con email
4. Verificar el email

---

## PASO 4 — Casti conecta el repo a Cloudflare Pages
**Quién lo hace: Casti**

1. En el panel de Cloudflare, ir a **Workers & Pages** → **Pages**
2. Click en **"Create a project"** → **"Connect to Git"**
3. Conectar con GitHub → autorizar acceso
4. Seleccionar el repo `chinielec/chinielec-web`
5. Configurar el proyecto:
   - **Project name**: `chinielec-web`
   - **Framework preset**: `None`
   - **Build command**: *(dejar vacío)*
   - **Build output directory**: `/`
6. Click en **"Save and Deploy"**
7. En 1-2 minutos el sitio está en línea en una URL tipo `chinielec-web.pages.dev`
8. **Verificar que el sitio se ve correctamente**

---

## PASO 5 — El cliente compra el dominio en NIC.ar
**Quién lo hace: el cliente** *(requiere CUIT argentino)*

1. Ir a https://nic.ar
2. Click en **"Registrar dominio"**
3. Buscar `chinielec.com.ar` → verificar disponibilidad
4. Iniciar sesión o crear cuenta con CUIT
5. Completar los datos del titular (nombre, CUIT, dirección)
6. Pagar (débito, crédito o transferencia)
7. **El cliente le avisa a Casti cuando el dominio esté activo**

> ⚠️ El dominio puede tardar unos minutos en activarse tras el pago.

---

## PASO 6 — Casti agrega el dominio a Cloudflare
**Quién lo hace: Casti**

1. En el panel de Cloudflare, ir a **"Add a domain"** (sección principal)
2. Ingresar `chinielec.com.ar`
3. Seleccionar el plan **Free**
4. Cloudflare va a mostrar **dos nameservers** propios, algo como:
   - `alexa.ns.cloudflare.com`
   - `bob.ns.cloudflare.com`
5. **Copiar esos dos nameservers** — los necesitamos en el paso siguiente

---

## PASO 7 — El cliente cambia los nameservers en NIC.ar
**Quién lo hace: el cliente** *(Casti puede guiarlo por teléfono/WhatsApp)*

1. Ir a https://nic.ar → iniciar sesión
2. Ir a **"Mis dominios"** → click en `chinielec.com.ar`
3. Buscar la sección **"Servidores DNS"** o **"Nameservers"**
4. Reemplazar los DNS actuales por los dos que dio Cloudflare:
   - DNS 1: `alexa.ns.cloudflare.com` *(el que corresponda)*
   - DNS 2: `bob.ns.cloudflare.com` *(el que corresponda)*
5. Guardar cambios

> ⏳ La propagación DNS puede tardar entre 1 y 24 horas. Es normal.

---

## PASO 8 — Casti conecta el dominio al sitio en Cloudflare Pages
**Quién lo hace: Casti** *(una vez que Cloudflare confirma que los DNS propagaron)*

1. En Cloudflare, ir a **Workers & Pages** → proyecto `chinielec-web`
2. Ir a la pestaña **"Custom domains"**
3. Click en **"Set up a custom domain"**
4. Ingresar `chinielec.com.ar` y también `www.chinielec.com.ar`
5. Cloudflare configura los registros DNS automáticamente
6. Esperar unos minutos → el SSL se activa solo (candado HTTPS)

---

## PASO 9 — Verificación final
**Quién lo hace: Casti**

- [ ] Abrir `https://chinielec.com.ar` → se ve el sitio
- [ ] Abrir `https://www.chinielec.com.ar` → redirige correctamente
- [ ] Verificar candado HTTPS en el navegador
- [ ] Probar desde el celular
- [ ] Probar que los productos, carrusel y formulario de contacto funcionan

---

## Actualizaciones futuras del sitio

Cada vez que Casti haga cambios y ejecute:
```bash
git push
```
Cloudflare detecta el cambio automáticamente y redespliega el sitio en 1-2 minutos. No hace falta hacer nada más.
