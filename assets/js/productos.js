/* ========================================
   CHINIELEC - Catálogo de Productos
   ======================================== */

// Base de datos de productos
// INSTRUCCIONES: Para agregar un producto nuevo, copiar la estructura y modificar los datos
// Los IDs deben ser únicos
const productos = [
    {
        id: 1,
        nombre: "Contactor SK1 25A",
        categoria: "control",
        descripcion: "Contactor tripolar 25A para control de motores y cargas industriales.",
        imagen: "assets/images/productos/producto001.png",
        caracteristicas: [
            "25A / 10HP",
            "Tripolar",
            "Montaje riel DIN",
            "1 NO + 1 NC auxiliar"
        ]
    },
    {
        id: 2,
        nombre: "Lámpara LED Bulb Sybyd",
        categoria: "iluminacion",
        descripcion: "Lámpara LED de alta potencia tipo bulb para iluminación industrial y comercial.",
        imagen: "assets/images/productos/producto002.png",
        caracteristicas: [
            "Alta potencia",
            "Bajo consumo",
            "Larga vida útil",
            "Rosca E27"
        ]
    },
    {
        id: 3,
        nombre: "Termomagnética Schneider Easy9 1P",
        categoria: "proteccion",
        descripcion: "Interruptor termomagnético unipolar Schneider Electric línea Easy9.",
        imagen: "assets/images/productos/producto003.png",
        caracteristicas: [
            "1 polo",
            "Curva C",
            "4500A de poder de corte",
            "Montaje riel DIN"
        ]
    },
    {
        id: 4,
        nombre: "Cable Unipolar WTK 2.5mm Verde/Amarillo",
        categoria: "cables",
        descripcion: "Cable unipolar flexible WTK 2.5mm color verde/amarillo para instalaciones eléctricas.",
        imagen: "assets/images/productos/producto004.png",
        caracteristicas: [
            "Sección: 2.5mm²",
            "Color: Verde/Amarillo",
            "100 metros",
            "Normas IRAM"
        ]
    },
    {
        id: 5,
        nombre: "Contactor Schneider TeSys",
        categoria: "control",
        descripcion: "Contactor tripolar Schneider Electric línea TeSys para control industrial.",
        imagen: "assets/images/productos/producto005.png",
        caracteristicas: [
            "Línea TeSys",
            "Tripolar",
            "1 NO + 1 NC auxiliar",
            "Bobina 220V"
        ]
    },
    {
        id: 6,
        nombre: "Diferencial TBCin 2P",
        categoria: "proteccion",
        descripcion: "Disyuntor diferencial bipolar TBCin para protección contra fugas de corriente.",
        imagen: "assets/images/productos/producto006.png",
        caracteristicas: [
            "Bipolar",
            "Sensibilidad 30mA",
            "Tipo AC",
            "Montaje riel DIN"
        ]
    },
    {
        id: 7,
        nombre: "Termomagnética Steck SDX 2P",
        categoria: "proteccion",
        descripcion: "Interruptor termomagnético bipolar Steck línea SDX.",
        imagen: "assets/images/productos/producto007.png",
        caracteristicas: [
            "2 polos",
            "25A",
            "4500A de poder de corte",
            "Montaje riel DIN"
        ]
    },
    {
        id: 8,
        nombre: "Spot LED AR111 Negro",
        categoria: "iluminacion",
        descripcion: "Lámpara LED tipo AR111 en cuerpo negro para artefactos de iluminación decorativa.",
        imagen: "assets/images/productos/producto008.png",
        caracteristicas: [
            "Tipo AR111",
            "Cuerpo negro",
            "Base GU10/G53",
            "Bajo consumo"
        ]
    },
    {
        id: 9,
        nombre: "Termomagnética Steck SD 1P",
        categoria: "proteccion",
        descripcion: "Interruptor termomagnético unipolar Steck línea SD.",
        imagen: "assets/images/productos/producto009.png",
        caracteristicas: [
            "1 polo",
            "50A",
            "3000A de poder de corte",
            "Montaje riel DIN"
        ]
    },
    {
        id: 10,
        nombre: "Downlight LED Redondo Negro",
        categoria: "iluminacion",
        descripcion: "Panel LED circular de superficie en cuerpo negro para iluminación de interiores.",
        imagen: "assets/images/productos/producto010.png",
        caracteristicas: [
            "Superficie",
            "Cuerpo negro",
            "Luz cálida",
            "Bajo consumo"
        ]
    },
    {
        id: 11,
        nombre: "Lámpara LED Bulb Sybyd Grande",
        categoria: "iluminacion",
        descripcion: "Lámpara LED de alta potencia tipo bulb grande para galpones e industrias.",
        imagen: "assets/images/productos/producto011.png",
        caracteristicas: [
            "Alta potencia",
            "Uso industrial",
            "Larga vida útil",
            "Rosca E27"
        ]
    },
    {
        id: 12,
        nombre: "Cable Unipolar Baudmol 2.5mm Celeste",
        categoria: "cables",
        descripcion: "Cable unipolar de cobre con aislación PVC Baudmol 2.5mm color celeste.",
        imagen: "assets/images/productos/producto012.png",
        caracteristicas: [
            "Sección: 2.5mm²",
            "Color: Celeste",
            "100 metros",
            "No propagador de llama"
        ]
    },
    {
        id: 13,
        nombre: "Cable Unipolar Baudmol 2.5mm Verde",
        categoria: "cables",
        descripcion: "Cable unipolar de cobre con aislación PVC Baudmol 2.5mm color verde.",
        imagen: "assets/images/productos/producto013.png",
        caracteristicas: [
            "Sección: 2.5mm²",
            "Color: Verde",
            "100 metros",
            "No propagador de llama"
        ]
    },
    {
        id: 14,
        nombre: "Diferencial Schneider Easy9 2P",
        categoria: "proteccion",
        descripcion: "Disyuntor diferencial bipolar Schneider Electric línea Easy9.",
        imagen: "assets/images/productos/producto014.png",
        caracteristicas: [
            "Bipolar",
            "Sensibilidad 30mA",
            "Clase AC",
            "Montaje riel DIN"
        ]
    },
    {
        id: 15,
        nombre: "Spot LED AR111 Blanco",
        categoria: "iluminacion",
        descripcion: "Lámpara LED tipo AR111 en cuerpo blanco para artefactos de iluminación.",
        imagen: "assets/images/productos/producto015.png",
        caracteristicas: [
            "Tipo AR111",
            "Cuerpo blanco",
            "Base GU10/G53",
            "Bajo consumo"
        ]
    },
    {
        id: 16,
        nombre: "Cable Unipolar WTK 2.5mm Celeste",
        categoria: "cables",
        descripcion: "Cable unipolar flexible WTK 2.5mm color celeste para instalaciones eléctricas.",
        imagen: "assets/images/productos/producto016.png",
        caracteristicas: [
            "Sección: 2.5mm²",
            "Color: Celeste",
            "100 metros",
            "Normas IRAM"
        ]
    },
    {
        id: 17,
        nombre: "Cable Unipolar WTK 2.5mm Marrón",
        categoria: "cables",
        descripcion: "Cable unipolar flexible WTK 2.5mm color marrón para instalaciones eléctricas.",
        imagen: "assets/images/productos/producto017.png",
        caracteristicas: [
            "Sección: 2.5mm²",
            "Color: Marrón",
            "100 metros",
            "Normas IRAM"
        ]
    },
    {
        id: 18,
        nombre: "Cable Unipolar Baudmol 2.5mm Marrón",
        categoria: "cables",
        descripcion: "Cable unipolar de cobre con aislación PVC Baudmol 2.5mm color marrón.",
        imagen: "assets/images/productos/producto018.png",
        caracteristicas: [
            "Sección: 2.5mm²",
            "Color: Marrón",
            "100 metros",
            "No propagador de llama"
        ]
    },
    {
        id: 19,
        nombre: "Spot LED AR111 Espejado",
        categoria: "iluminacion",
        descripcion: "Lámpara LED tipo AR111 con reflector espejado para iluminación direccional.",
        imagen: "assets/images/productos/producto019.png",
        caracteristicas: [
            "Tipo AR111",
            "Reflector espejado",
            "Iluminación dirigida",
            "Base G53"
        ]
    },
    {
        id: 20,
        nombre: "Borneras de Riel DIN",
        categoria: "accesorios",
        descripcion: "Borneras de conexión para montaje en riel DIN, ideales para tableros eléctricos.",
        imagen: "assets/images/productos/producto020.png",
        caracteristicas: [
            "Montaje riel DIN",
            "Conexión a tornillo",
            "Para tableros",
            "Diversas secciones"
        ]
    },
    {
        id: 21,
        nombre: "Downlight LED Redondo Blanco",
        categoria: "iluminacion",
        descripcion: "Panel LED circular de superficie en cuerpo blanco para iluminación de interiores.",
        imagen: "assets/images/productos/producto021.png",
        caracteristicas: [
            "Superficie",
            "Cuerpo blanco",
            "Luz cálida",
            "Bajo consumo"
        ]
    },
    {
        id: 22,
        nombre: "Diferencial Schneider Easy9 4P",
        categoria: "proteccion",
        descripcion: "Disyuntor diferencial tetrapolar Schneider Electric línea Easy9.",
        imagen: "assets/images/productos/producto022.png",
        caracteristicas: [
            "4 polos",
            "Sensibilidad 30mA",
            "Clase AC",
            "Montaje riel DIN"
        ]
    },
    {
        id: 23,
        nombre: "Reflector LED 50W Peytrod IP65",
        categoria: "iluminacion",
        descripcion: "Reflector LED 50W Peytrod resistente a la intemperie, ideal para exteriores.",
        imagen: "assets/images/productos/producto023.png",
        caracteristicas: [
            "50W",
            "IP65",
            "Para exteriores",
            "Alta eficiencia"
        ]
    },
    {
        id: 24,
        nombre: "Termomagnética Schneider Easy9 2P",
        categoria: "proteccion",
        descripcion: "Interruptor termomagnético bipolar Schneider Electric línea Easy9.",
        imagen: "assets/images/productos/producto024.png",
        caracteristicas: [
            "2 polos",
            "25A",
            "4500A de poder de corte",
            "Montaje riel DIN"
        ]
    },
    {
        id: 25,
        nombre: "Diferencial Steck SDR 4P",
        categoria: "proteccion",
        descripcion: "Disyuntor diferencial tetrapolar Steck línea SDR.",
        imagen: "assets/images/productos/producto025.png",
        caracteristicas: [
            "4 polos",
            "25A",
            "Sensibilidad 30mA",
            "Montaje riel DIN"
        ]
    },
    {
        id: 26,
        nombre: "Diferencial Zoloda RCCB 2P",
        categoria: "proteccion",
        descripcion: "Disyuntor diferencial bipolar Zoloda para protección contra corrientes de fuga.",
        imagen: "assets/images/productos/producto026.png",
        caracteristicas: [
            "Bipolar",
            "40A",
            "Sensibilidad 30mA",
            "Montaje riel DIN"
        ]
    }
];

// Categorías disponibles
const categorias = [
    { id: 'todos', nombre: 'Todos', icono: 'fa-th-large' },
    { id: 'cables', nombre: 'Cables', icono: 'fa-plug' },
    { id: 'proteccion', nombre: 'Protección', icono: 'fa-shield-alt' },
    { id: 'iluminacion', nombre: 'Iluminación', icono: 'fa-lightbulb' },
    { id: 'control', nombre: 'Control', icono: 'fa-sliders-h' },
    { id: 'accesorios', nombre: 'Accesorios', icono: 'fa-tools' }
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
            '<img src="' + producto.imagen + '" alt="' + producto.nombre + '" onerror="handleImageError(this)">' +
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

// Manejar error de imagen sin loop infinito
function handleImageError(img) {
    img.onerror = null; // Evita loop infinito
    img.src = 'assets/images/productos/placeholder.svg';
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
            '<img src="' + producto.imagen + '" alt="' + producto.nombre + '" onerror="handleImageError(this)">' +
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
