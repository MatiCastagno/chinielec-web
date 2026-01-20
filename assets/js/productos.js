/* ========================================
   CHINIELEC - Catálogo de Productos
   ======================================== */

// Base de datos de productos
// INSTRUCCIONES: Para agregar un producto nuevo, copiar la estructura y modificar los datos
// Los IDs deben ser únicos
const productos = [
    {
        id: 1,
        nombre: "Cables Unipolares",
        categoria: "cables",
        descripcion: "Cables de cobre de alta calidad para instalaciones eléctricas domiciliarias e industriales.",
        imagen: "assets/images/productos/cables-unipolares.jpg",
        caracteristicas: [
            "Material: Cobre electrolítico",
            "Diversas secciones disponibles",
            "Aislación de PVC",
            "Normas IRAM"
        ]
    },
    {
        id: 2,
        nombre: "Cables Subterráneos",
        categoria: "cables",
        descripcion: "Cables especiales para tendido subterráneo, resistentes a la humedad y condiciones adversas.",
        imagen: "assets/images/productos/cables-subterraneos.jpg",
        caracteristicas: [
            "Armadura de acero",
            "Doble aislación",
            "Resistente a la humedad",
            "Certificación vigente"
        ]
    },
    {
        id: 3,
        nombre: "Tableros Eléctricos",
        categoria: "tableros",
        descripcion: "Tableros para distribución eléctrica, disponibles en diferentes capacidades y configuraciones.",
        imagen: "assets/images/productos/tableros.jpg",
        caracteristicas: [
            "Gabinete metálico o PVC",
            "Diferentes módulos",
            "Barras de cobre",
            "Certificados"
        ]
    },
    {
        id: 4,
        nombre: "Interruptores Termomagnéticos",
        categoria: "proteccion",
        descripcion: "Protección térmica y magnética para circuitos eléctricos residenciales e industriales.",
        imagen: "assets/images/productos/termomagneticos.jpg",
        caracteristicas: [
            "Diversas capacidades",
            "Curva C y D",
            "Montaje riel DIN",
            "Primeras marcas"
        ]
    },
    {
        id: 5,
        nombre: "Disyuntores Diferenciales",
        categoria: "proteccion",
        descripcion: "Protección diferencial contra fugas de corriente y electrocución.",
        imagen: "assets/images/productos/diferenciales.jpg",
        caracteristicas: [
            "Sensibilidad 30mA",
            "Bipolar y tetrapolar",
            "Clase AC y A",
            "Rearme manual"
        ]
    },
    {
        id: 6,
        nombre: "Luminarias LED",
        categoria: "iluminacion",
        descripcion: "Soluciones de iluminación LED de alta eficiencia para todo tipo de espacios.",
        imagen: "assets/images/productos/luminarias-led.jpg",
        caracteristicas: [
            "Alta eficiencia lumínica",
            "Bajo consumo",
            "Larga vida útil",
            "Diversas potencias"
        ]
    },
    {
        id: 7,
        nombre: "Tubos LED",
        categoria: "iluminacion",
        descripcion: "Tubos LED para reemplazo de fluorescentes tradicionales.",
        imagen: "assets/images/productos/tubos-led.jpg",
        caracteristicas: [
            "60cm, 120cm, 150cm",
            "Luz fría y cálida",
            "Conexión directa",
            "Ahorro energético"
        ]
    },
    {
        id: 8,
        nombre: "Caños y Ductos",
        categoria: "canalizacion",
        descripcion: "Caños de PVC y metálicos para canalización de cables.",
        imagen: "assets/images/productos/canos.jpg",
        caracteristicas: [
            "PVC y metálicos",
            "Diversos diámetros",
            "Accesorios incluidos",
            "Normas vigentes"
        ]
    },
    {
        id: 9,
        nombre: "Bandejas Portacables",
        categoria: "canalizacion",
        descripcion: "Bandejas metálicas para tendido de cables en instalaciones industriales.",
        imagen: "assets/images/productos/bandejas.jpg",
        caracteristicas: [
            "Acero galvanizado",
            "Diversos anchos",
            "Perforadas y cerradas",
            "Soportes y accesorios"
        ]
    },
    {
        id: 10,
        nombre: "Tomacorrientes Industriales",
        categoria: "accesorios",
        descripcion: "Tomacorrientes y fichas industriales para uso intensivo.",
        imagen: "assets/images/productos/tomacorrientes.jpg",
        caracteristicas: [
            "IP44 / IP67",
            "16A a 125A",
            "Monofásicos y trifásicos",
            "Norma IEC 60309"
        ]
    },
    {
        id: 11,
        nombre: "Contactores",
        categoria: "control",
        descripcion: "Contactores para control de motores y cargas industriales.",
        imagen: "assets/images/productos/contactores.jpg",
        caracteristicas: [
            "Diversas capacidades",
            "Bobinas 220V y 380V",
            "Auxiliares incluidos",
            "Primeras marcas"
        ]
    },
    {
        id: 12,
        nombre: "Guardamotores",
        categoria: "control",
        descripcion: "Protección integral para motores eléctricos.",
        imagen: "assets/images/productos/guardamotores.jpg",
        caracteristicas: [
            "Regulación de corriente",
            "Protección térmica",
            "Protección magnética",
            "Reset manual"
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
    { id: 'canalizacion', nombre: 'Canalización', icono: 'fa-route' },
    { id: 'accesorios', nombre: 'Accesorios', icono: 'fa-tools' },
    { id: 'control', nombre: 'Control', icono: 'fa-sliders-h' }
];

// Variables globales
let categoriaActiva = 'todos';

// Inicializar cuando cargue el DOM
document.addEventListener('DOMContentLoaded', function() {
    if (document.querySelector('.productos-page')) {
        initProductosPage();
    }
    
    // Para la página principal (productos destacados)
    if (document.querySelector('.products-grid-home')) {
        renderProductosDestacados();
    }
});

/* === PÁGINA DE PRODUCTOS === */
function initProductosPage() {
    renderCategorias();
    renderProductos(productos);
    initFiltros();
}

// Renderizar filtros de categorías
function renderCategorias() {
    const container = document.querySelector('.categorias-filter');
    if (!container) return;

    let html = '';
    categorias.forEach(function(cat) {
        html += '<button class="categoria-btn ' + (cat.id === 'todos' ? 'active' : '') + '" data-categoria="' + cat.id + '">' +
                '<i class="fas ' + cat.icono + '"></i>' +
                '<span>' + cat.nombre + '</span>' +
                '</button>';
    });

    container.innerHTML = html;
}

// Renderizar productos
function renderProductos(productosArray) {
    const container = document.querySelector('.productos-grid');
    if (!container) return;

    if (productosArray.length === 0) {
        container.innerHTML = '<div class="no-products">' +
            '<i class="fas fa-box-open"></i>' +
            '<p>No hay productos en esta categoría</p>' +
            '</div>';
        return;
    }

    let html = '';
    productosArray.forEach(function(producto, index) {
        html += '<article class="product-card reveal" style="animation-delay: ' + (index * 0.1) + 's">' +
            '<div class="product-image">' +
            '<img src="' + producto.imagen + '" alt="' + producto.nombre + '" onerror="this.src=\'assets/images/productos/placeholder.jpg\'">' +
            '<span class="product-category">' + getCategoryName(producto.categoria) + '</span>' +
            '</div>' +
            '<div class="product-content">' +
            '<h3 class="product-name">' + producto.nombre + '</h3>' +
            '<p class="product-description">' + producto.descripcion + '</p>' +
            '<a href="producto-detalle.html?id=' + producto.id + '" class="product-link">' +
            'Ver detalles <i class="fas fa-arrow-right"></i>' +
            '</a>' +
            '</div>' +
            '</article>';
    });

    container.innerHTML = html;
    initScrollReveal();
}

// Inicializar filtros
function initFiltros() {
    const botones = document.querySelectorAll('.categoria-btn');

    botones.forEach(function(btn) {
        btn.addEventListener('click', function() {
            botones.forEach(function(b) { b.classList.remove('active'); });
            this.classList.add('active');

            const categoria = this.dataset.categoria;
            categoriaActiva = categoria;

            let productosFiltrados;
            if (categoria === 'todos') {
                productosFiltrados = productos;
            } else {
                productosFiltrados = productos.filter(function(p) {
                    return p.categoria === categoria;
                });
            }

            renderProductos(productosFiltrados);
        });
    });
}

// Obtener nombre de categoría
function getCategoryName(catId) {
    const categoria = categorias.find(function(c) { return c.id === catId; });
    return categoria ? categoria.nombre : catId;
}

/* === PRODUCTOS DESTACADOS (HOME) === */
function renderProductosDestacados() {
    const container = document.querySelector('.products-grid-home');
    if (!container) return;

    const destacados = productos.slice(0, 6);

    let html = '';
    destacados.forEach(function(producto, index) {
        html += '<article class="product-card reveal" style="animation-delay: ' + (index * 0.1) + 's">' +
            '<div class="product-image">' +
            '<img src="' + producto.imagen + '" alt="' + producto.nombre + '" onerror="this.src=\'assets/images/productos/placeholder.jpg\'">' +
            '<span class="product-category">' + getCategoryName(producto.categoria) + '</span>' +
            '</div>' +
            '<div class="product-content">' +
            '<h3 class="product-name">' + producto.nombre + '</h3>' +
            '<p class="product-description">' + producto.descripcion + '</p>' +
            '<a href="producto-detalle.html?id=' + producto.id + '" class="product-link">' +
            'Ver detalles <i class="fas fa-arrow-right"></i>' +
            '</a>' +
            '</div>' +
            '</article>';
    });

    container.innerHTML = html;
}

/* === SCROLL REVEAL === */
function initScrollReveal() {
    const revealElements = document.querySelectorAll('.reveal:not(.active)');

    function checkReveal() {
        const windowHeight = window.innerHeight;
        const revealPoint = 150;

        revealElements.forEach(function(element) {
            const elementTop = element.getBoundingClientRect().top;
            if (elementTop < windowHeight - revealPoint) {
                element.classList.add('active');
            }
        });
    }

    checkReveal();
    window.addEventListener('scroll', checkReveal);
}

/* === EXPORTAR PARA USO GLOBAL === */
window.CHINIELEC = {
    productos: productos,
    categorias: categorias,
    renderProductos: renderProductos,
    getCategoryName: getCategoryName
};
