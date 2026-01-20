/* ========================================
   CHINIELEC - Gestión de Productos
   ======================================== */

// Base de datos de productos (editar aquí para agregar/modificar productos)
const productos = [
    {
        id: 1,
        nombre: "Cables Unipolares",
        categoria: "cables",
        descripcion: "Cables de cobre de distintas secciones para instalaciones eléctricas residenciales e industriales.",
        imagen: "assets/images/productos/cables-unipolares.jpg",
        caracteristicas: [
            "Material: Cobre electrolítico",
            "Secciones disponibles: 1.5mm² a 10mm²",
            "Aislación: PVC",
            "Norma: IRAM 2183"
        ]
    },
    {
        id: 2,
        nombre: "Cables Subterráneos",
        categoria: "cables",
        descripcion: "Cables diseñados para instalaciones bajo tierra, resistentes a la humedad y agentes externos.",
        imagen: "assets/images/productos/cables-subterraneos.jpg",
        caracteristicas: [
            "Uso exterior e interior",
            "Resistente a la humedad",
            "Doble aislación",
            "Múltiples secciones"
        ]
    },
    {
        id: 3,
        nombre: "Tableros Eléctricos",
        categoria: "tableros",
        descripcion: "Tableros de distribución para uso residencial, comercial e industrial.",
        imagen: "assets/images/productos/tableros.jpg",
        caracteristicas: [
            "Capacidad: 12 a 48 módulos",
            "Material: Chapa de acero",
            "Pintura epoxi",
            "Riel DIN incluido"
        ]
    },
    {
        id: 4,
        nombre: "Interruptores Termomagnéticos",
        categoria: "proteccion",
        descripcion: "Protección contra sobrecargas y cortocircuitos para circuitos eléctricos.",
        imagen: "assets/images/productos/termomagneticos.jpg",
        caracteristicas: [
            "Corrientes: 10A a 63A",
            "Curva C y D",
            "Poder de corte: 6kA",
            "Norma IEC 60898"
        ]
    },
    {
        id: 5,
        nombre: "Disyuntores Diferenciales",
        categoria: "proteccion",
        descripcion: "Protección contra fugas de corriente y contactos indirectos.",
        imagen: "assets/images/productos/diferenciales.jpg",
        caracteristicas: [
            "Sensibilidad: 30mA",
            "Bipolar y tetrapolar",
            "Corriente nominal: hasta 63A",
            "Tipo AC y A"
        ]
    },
    {
        id: 6,
        nombre: "Luminarias LED",
        categoria: "iluminacion",
        descripcion: "Iluminación LED de alta eficiencia para todo tipo de ambientes.",
        imagen: "assets/images/productos/luminarias-led.jpg",
        caracteristicas: [
            "Eficiencia: >100 lm/W",
            "Vida útil: 50.000 horas",
            "Temperatura: 3000K a 6500K",
            "Dimmerizables"
        ]
    },
    {
        id: 7,
        nombre: "Paneles LED",
        categoria: "iluminacion",
        descripcion: "Paneles empotrables para cielorrasos, oficinas y comercios.",
        imagen: "assets/images/productos/paneles-led.jpg",
        caracteristicas: [
            "Medidas: 60x60cm, 30x120cm",
            "Potencias: 40W y 48W",
            "Luz fría y cálida",
            "Driver incluido"
        ]
    },
    {
        id: 8,
        nombre: "Tomacorrientes e Interruptores",
        categoria: "accesorios",
        descripcion: "Línea completa de mecanismos para instalaciones eléctricas.",
        imagen: "assets/images/productos/tomacorrientes.jpg",
        caracteristicas: [
            "Múltiples líneas y colores",
            "Con y sin tierra",
            "USB integrado disponible",
            "Norma IRAM"
        ]
    },
    {
        id: 9,
        nombre: "Caños y Accesorios",
        categoria: "canalizacion",
        descripcion: "Sistema de canalización para protección de cables.",
        imagen: "assets/images/productos/canos.jpg",
        caracteristicas: [
            "PVC y metálicos",
            "Diámetros: 3/4\" a 2\"",
            "Curvas y conectores",
            "Uso interior y exterior"
        ]
    },
    {
        id: 10,
        nombre: "Bandejas Portacables",
        categoria: "canalizacion",
        descripcion: "Bandejas para distribución de cables en instalaciones industriales.",
        imagen: "assets/images/productos/bandejas.jpg",
        caracteristicas: [
            "Perforadas y lisas",
            "Galvanizadas",
            "Múltiples anchos",
            "Accesorios completos"
        ]
    },
    {
        id: 11,
        nombre: "Transformadores",
        categoria: "energia",
        descripcion: "Transformadores de tensión para diversas aplicaciones.",
        imagen: "assets/images/productos/transformadores.jpg",
        caracteristicas: [
            "Monofásicos y trifásicos",
            "Potencias variadas",
            "Secos y en aceite",
            "A pedido"
        ]
    },
    {
        id: 12,
        nombre: "Grupos Electrógenos",
        categoria: "energia",
        descripcion: "Generadores de energía para respaldo y sitios sin conexión a red.",
        imagen: "assets/images/productos/grupos-electrogenos.jpg",
        caracteristicas: [
            "Diesel y nafta",
            "Automáticos y manuales",
            "Potencias variadas",
            "Silenciados disponibles"
        ]
    }
];

// Categorías disponibles
const categorias = [
    { id: 'todos', nombre: 'Todos', icono: 'fa-th-large' },
    { id: 'cables', nombre: 'Cables', icono: 'fa-plug' },
    { id: 'tableros', nombre: 'Tableros', icono: 'fa-server' },
    { id: 'proteccion', nombre: 'Protección', icono: 'fa-shield-alt' },
    { id: 'iluminacion', nombre: 'Iluminación', icono: 'fa-lightbulb' },
    { id: 'accesorios', nombre: 'Accesorios', icono: 'fa-tools' },
    { id: 'canalizacion', nombre: 'Canalización', icono: 'fa-project-diagram' },
    { id: 'energia', nombre: 'Energía', icono: 'fa-bolt' }
];

// Estado actual
let categoriaActual = 'todos';

/* === RENDERIZAR PRODUCTOS === */
function renderProductos(filtro = 'todos') {
    const container = document.getElementById('productos-grid');
    if (!container) return;

    // Filtrar productos
    const productosFiltrados = filtro === 'todos' 
        ? productos 
        : productos.filter(p => p.categoria === filtro);

    // Generar HTML
    const html = productosFiltrados.map(producto => `
        <article class="product-card reveal" data-categoria="${producto.categoria}">
            <div class="product-image">
                <img src="${producto.imagen}" 
                     alt="${producto.nombre}"
                     onerror="this.src='assets/images/productos/placeholder.jpg'">
                <span class="product-category">${getCategoryName(producto.categoria)}</span>
            </div>
            <div class="product-content">
                <h3 class="product-name">${producto.nombre}</h3>
                <p class="product-description">${producto.descripcion}</p>
                <a href="producto-detalle.html?id=${producto.id}" class="product-link">
                    Ver detalles <i class="fas fa-arrow-right"></i>
                </a>
            </div>
        </article>
    `).join('');

    container.innerHTML = html;

    // Re-inicializar scroll reveal para los nuevos elementos
    initScrollReveal();
}

/* === RENDERIZAR CATEGORÍAS === */
function renderCategorias() {
    const container = document.getElementById('categorias-filter');
    if (!container) return;

    const html = categorias.map(cat => `
        <button class="category-btn ${cat.id === categoriaActual ? 'active' : ''}" 
                data-categoria="${cat.id}">
            <i class="fas ${cat.icono}"></i>
            <span>${cat.nombre}</span>
        </button>
    `).join('');

    container.innerHTML = html;

    // Event listeners para los botones
    container.querySelectorAll('.category-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            const categoria = this.dataset.categoria;
            
            // Actualizar estado
            categoriaActual = categoria;
            
            // Actualizar UI
            container.querySelectorAll('.category-btn').forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            
            // Re-renderizar productos
            renderProductos(categoria);
        });
    });
}

/* === OBTENER NOMBRE DE CATEGORÍA === */
function getCategoryName(id) {
    const cat = categorias.find(c => c.id === id);
    return cat ? cat.nombre : id;
}

/* === OBTENER PRODUCTO POR ID === */
function getProductById(id) {
    return productos.find(p => p.id === parseInt(id));
}

/* === RENDERIZAR DETALLE DE PRODUCTO === */
function renderProductoDetalle() {
    const container = document.getElementById('producto-detalle');
    if (!container) return;

    // Obtener ID de la URL
    const params = new URLSearchParams(window.location.search);
    const id = params.get('id');

    if (!id) {
        container.innerHTML = '<p>Producto no encontrado</p>';
        return;
    }

    const producto = getProductById(id);

    if (!producto) {
        container.innerHTML = '<p>Producto no encontrado</p>';
        return;
    }

    // Actualizar título de la página
    document.title = `${producto.nombre} | CHINIELEC`;

    const html = `
        <div class="producto-detalle-container">
            <div class="producto-detalle-image">
                <img src="${producto.imagen}" 
                     alt="${producto.nombre}"
                     onerror="this.src='assets/images/productos/placeholder.jpg'">
            </div>
            <div class="producto-detalle-info">
                <span class="product-category">${getCategoryName(producto.categoria)}</span>
                <h1>${producto.nombre}</h1>
                <p class="descripcion">${producto.descripcion}</p>
                
                <div class="caracteristicas">
                    <h3>Características</h3>
                    <ul>
                        ${producto.caracteristicas.map(c => `<li><i class="fas fa-check"></i> ${c}</li>`).join('')}
                    </ul>
                </div>

                <div class="producto-acciones">
                    <a href="https://wa.me/5493413232946?text=Hola! Me interesa el producto: ${encodeURIComponent(producto.nombre)}" 
                       class="btn btn-primary" target="_blank">
                        <i class="fab fa-whatsapp"></i> Consultar por WhatsApp
                    </a>
                    <a href="productos.html" class="btn btn-outline">
                        <i class="fas fa-arrow-left"></i> Volver al catálogo
                    </a>
                </div>
            </div>
        </div>
    `;

    container.innerHTML = html;
}

/* === PRODUCTOS DESTACADOS (para home) === */
function renderProductosDestacados() {
    const container = document.getElementById('productos-destacados');
    if (!container) return;

    // Mostrar solo 6 productos
    const destacados = productos.slice(0, 6);

    const html = destacados.map(producto => `
        <article class="product-card reveal">
            <div class="product-image">
                <img src="${producto.imagen}" 
                     alt="${producto.nombre}"
                     onerror="this.src='assets/images/productos/placeholder.jpg'">
                <span class="product-category">${getCategoryName(producto.categoria)}</span>
            </div>
            <div class="product-content">
                <h3 class="product-name">${producto.nombre}</h3>
                <p class="product-description">${producto.descripcion}</p>
                <a href="producto-detalle.html?id=${producto.id}" class="product-link">
                    Ver detalles <i class="fas fa-arrow-right"></i>
                </a>
            </div>
        </article>
    `).join('');

    container.innerHTML = html;
}

/* === INICIALIZACIÓN === */
document.addEventListener('DOMContentLoaded', function() {
    // Página de productos
    if (document.getElementById('productos-grid')) {
        renderCategorias();
        renderProductos();
    }

    // Página de detalle
    if (document.getElementById('producto-detalle')) {
        renderProductoDetalle();
    }

    // Home - productos destacados
    if (document.getElementById('productos-destacados')) {
        renderProductosDestacados();
    }
});
