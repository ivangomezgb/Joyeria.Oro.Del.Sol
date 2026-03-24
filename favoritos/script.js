

function quitarFavorito(btn) {
            const card = btn.closest('.card');
            card.style.transition = 'opacity 0.4s ease, transform 0.4s ease';
            card.style.opacity = '0';
            card.style.transform = 'scale(0.85)';
            setTimeout(() => {
                card.remove();
                actualizarContador();
            }, 400);
        }

        function actualizarContador() {
            const cards = document.querySelectorAll('#favoritosList .card');
            const contador = document.getElementById('contadorFav');
            const emptyState = document.getElementById('emptyState');
            const footer = document.getElementById('favoritosFooter');

            if (cards.length === 0) {
                emptyState.style.display = 'flex';
                footer.style.display = 'none';
            } else {
                contador.textContent = `${cards.length} producto${cards.length !== 1 ? 's' : ''} guardado${cards.length !== 1 ? 's' : ''}`;
            }
        }

        function limpiarTodo() {
            const cards = document.querySelectorAll('#favoritosList .card');
            cards.forEach((card, i) => {
                setTimeout(() => {
                    card.style.transition = 'opacity 0.3s ease, transform 0.3s ease';
                    card.style.opacity = '0';
                    card.style.transform = 'scale(0.85)';
                    setTimeout(() => {
                        card.remove();
                        actualizarContador();
                    }, 300);
                }, i * 80);
            });
        }
    //texto que cambia parte superior favoritos//
    
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