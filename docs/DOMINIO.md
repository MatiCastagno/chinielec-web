# Guía de Compra de Dominio - CHINIELEC

## 📋 Índice
1. [¿Qué es un dominio?](#qué-es-un-dominio)
2. [Opciones de dominio recomendadas](#opciones-de-dominio-recomendadas)
3. [Dónde comprar el dominio](#dónde-comprar-el-dominio)
4. [Paso a paso para comprar en NIC Argentina](#paso-a-paso-nic-argentina)
5. [Paso a paso para comprar dominio .com](#paso-a-paso-dominio-com)
6. [Configuración DNS](#configuración-dns)

---

## ¿Qué es un dominio?

Un dominio es la dirección que los usuarios escriben en el navegador para acceder a tu sitio web. Por ejemplo: `www.chinielec.com` o `www.chinielec.com.ar`

### Partes de un dominio:
```
www.chinielec.com.ar
 │      │       │
 │      │       └── Extensión (TLD)
 │      └────────── Nombre de dominio
 └──────────────── Subdominio (opcional)
```

---

## Opciones de dominio recomendadas

### Opción 1: `chinielec.com.ar` (RECOMENDADO si el mercado es Argentina)
| Aspecto | Detalle |
|---------|---------|
| **Precio** | ~$5.000 - $8.000 ARS/año |
| **Proveedor** | NIC Argentina |
| **Ventajas** | Identidad local, mayor confianza en Argentina, más barato a largo plazo |
| **Requisitos** | CUIT/CUIL argentino |

### Opción 2: `chinielec.com` (Si se quiere proyección internacional)
| Aspecto | Detalle |
|---------|---------|
| **Precio** | ~$10 - $15 USD/año |
| **Proveedor** | Cloudflare Registrar, Namecheap, Porkbun |
| **Ventajas** | Internacional, percepción más "grande" |
| **Requisitos** | Tarjeta de crédito/débito |

### Mi recomendación:
**Comprar ambos** (total ~$25 USD/año) y redirigir `.com.ar` hacia `.com`, o viceversa. Esto protege tu marca.

---

## Dónde comprar el dominio

### Para dominio .com.ar (Argentina)

#### NIC Argentina (ÚNICO registrador oficial)
- **Sitio**: https://nic.ar
- **Precio**: Variable según política estatal
- **Pago**: Mercado Pago, tarjeta, transferencia

### Para dominio .com (Internacional)

| Proveedor | Precio/año | Pros | Contras |
|-----------|------------|------|---------|
| **Cloudflare** | ~$10 USD | Sin markup, incluye protección WHOIS | Panel técnico |
| **Namecheap** | ~$11 USD | Fácil de usar, buen soporte | Renovación más cara |
| **Porkbun** | ~$10 USD | Barato, WHOIS gratis | Menos conocido |
| ~~**Google Domains**~~ | ~~$12 USD~~ | ~~Integración Google~~ | **Discontinuado** — migrado a Squarespace en 2023, no usar |
| **GoDaddy** | ~$12-20 USD | Muy conocido | Upselling agresivo |

**Mi recomendación**: **Cloudflare Registrar** (precio de costo, sin markup) o **Namecheap** (más amigable para principiantes).

---

## Paso a paso: NIC Argentina (.com.ar)

### Requisitos previos:
- CUIT o CUIL argentino
- Email válido
- Datos de facturación

### Paso 1: Crear cuenta en NIC.ar
1. Ir a https://nic.ar
2. Click en "Registrarse"
3. Completar datos personales o de empresa
4. Verificar email

### Paso 2: Buscar disponibilidad
1. En el buscador principal, escribir: `chinielec`
2. Verificar que `chinielec.com.ar` esté disponible
3. Si no está disponible, probar variaciones

### Paso 3: Registrar el dominio
1. Click en "Registrar" junto al dominio disponible
2. Completar datos de contacto (titular, administrativo, técnico)
3. Aceptar términos y condiciones

### Paso 4: Pagar
1. Seleccionar método de pago (Mercado Pago recomendado)
2. Completar el pago
3. Esperar confirmación por email (puede tomar 24-48hs)

### Paso 5: Configurar DNS (después de tener hosting)
1. Ir a "Mis dominios" en tu cuenta NIC.ar
2. Click en el dominio registrado
3. Ir a "Delegación" o "DNS"
4. Ingresar los nameservers de tu hosting

---

## Paso a paso: Dominio .com (Namecheap)

### Paso 1: Crear cuenta
1. Ir a https://namecheap.com
2. Click en "Sign Up"
3. Completar datos y verificar email

### Paso 2: Buscar y agregar al carrito
1. En el buscador, escribir: `chinielec`
2. Ver resultados (chinielec.com, chinielec.net, etc.)
3. Click en "Add to cart" en la opción deseada

### Paso 3: Configurar opciones
1. **WhoisGuard**: ACTIVAR (protege tus datos personales) - Gratis en Namecheap
2. **Auto-renew**: Recomendado activar
3. **Período**: 1 año está bien para empezar

### Paso 4: Checkout
1. Revisar el carrito
2. Aplicar cupón si tienes (buscar "Namecheap coupon" en Google)
3. Pagar con tarjeta de crédito/débito o PayPal

### Paso 5: Configurar DNS
1. Ir a "Domain List" en tu dashboard
2. Click en "Manage" junto a tu dominio
3. Ir a "Advanced DNS" o "Nameservers"
4. Configurar según tu hosting (ver sección siguiente)

---

## Configuración DNS

Una vez que tengas el hosting (ver [HOSTING.md](HOSTING.md)), necesitarás configurar los DNS.

### Si usas GitHub Pages:
```
Tipo: A
Host: @
Valor: 185.199.108.153
       185.199.109.153
       185.199.110.153
       185.199.111.153

Tipo: CNAME
Host: www
Valor: [tu-usuario].github.io
```

### Si usas Netlify:
```
Tipo: A
Host: @
Valor: 75.2.60.5

Tipo: CNAME
Host: www
Valor: [tu-sitio].netlify.app
```

### Si usas Vercel:
```
Tipo: A
Host: @
Valor: 76.76.21.21

Tipo: CNAME
Host: www
Valor: cname.vercel-dns.com
```

### Si usas hosting tradicional (ej: Hostinger):
El proveedor te dará los nameservers. Ejemplo:
```
ns1.hostinger.com
ns2.hostinger.com
```

---

## ⏰ Tiempos de propagación

Después de configurar los DNS:
- **Cambio de nameservers**: 24-48 horas
- **Cambio de registros A/CNAME**: 1-24 horas
- **Propagación completa mundial**: Hasta 72 horas

### Verificar propagación:
- https://dnschecker.org
- https://whatsmydns.net

---

## 📝 Checklist de Dominio

- [ ] Decidir extensión (.com, .com.ar, o ambos)
- [ ] Verificar disponibilidad del nombre
- [ ] Crear cuenta en el registrador
- [ ] Completar la compra
- [ ] Activar protección WHOIS
- [ ] Configurar auto-renovación
- [ ] Guardar credenciales de acceso en lugar seguro
- [ ] Configurar DNS cuando tengas hosting
- [ ] Verificar propagación

---

## 🔒 Seguridad

1. **Usa contraseña fuerte** para tu cuenta del registrador
2. **Activa 2FA** (autenticación de dos factores)
3. **Activa bloqueo de transferencia** para evitar robos de dominio
4. **Guarda los datos de acceso** en un gestor de contraseñas
5. **Renueva a tiempo** - los dominios expirados pueden ser comprados por otros

---

## 💡 Tips adicionales

1. **Registra variaciones**: Si compras `chinielec.com`, considera también `chinielec.com.ar` y `chinielec.net` para proteger la marca
2. **No uses guiones**: `chin-ielec.com` es confuso y difícil de comunicar
3. **Mantén datos actualizados**: Email y teléfono deben estar vigentes para renovaciones
4. **Renueva antes del vencimiento**: Hay un período de gracia, pero es más caro recuperar un dominio expirado

---

**Siguiente paso**: [Configurar Hosting](HOSTING.md)
