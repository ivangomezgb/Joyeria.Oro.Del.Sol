
        const mensajes = [
    "🚚 Envío gratis en compras mayores a $50.000",
    "☕ Nuevos sabores de temporada disponibles",
    "🎁 Descuento del 10% en tu primera compra",
    "⭐ Más de 500 clientes satisfechos nos respaldan",
    "🌿 Productos 100% naturales y sostenibles"
];

let index = 0;
const topBar = document.querySelector('.top-bar');

setInterval(() => {
    topBar.style.opacity = '0';
    setTimeout(() => {
        index = (index + 1) % mensajes.length;
        topBar.textContent = mensajes[index];
        topBar.style.opacity = '1';
    }, 400);
}, 3000);