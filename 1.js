// Apenas um exemplo simples de interatividade com JS
document.addEventListener('DOMContentLoaded', () => {
    const subscribeBtn = document.querySelector('.subscribe-btn');

    if (subscribeBtn) {
        subscribeBtn.addEventListener('click', () => {
            // Alterna o estado de inscrito
            const isSubscribed = subscribeBtn.classList.toggle('subscribed');
            
            // Altera o texto do botão
            if (isSubscribed) {
                subscribeBtn.textContent = '✅ Inscrito';
            } else {
                subscribeBtn.textContent = 'Inscrever-se';
            }
        });
    }
});