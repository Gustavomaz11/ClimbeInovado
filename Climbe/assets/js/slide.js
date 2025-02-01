document.addEventListener('DOMContentLoaded', () => {
    const progressCircle = document.querySelector(".autoplay-progress svg");
    const progressContent = document.querySelector(".autoplay-progress span");
    const starsContainer = document.getElementById('stars-container');
    const wpp2 = document.querySelector('#back-to-top')

    // Verifica se o elemento existe antes de manipular
    if (starsContainer) {
        const stars = `
            <div class="stars">
                <span class="star">★</span>
                <span class="star">★</span>
                <span class="star">★</span>
                <span class="star">★</span>
                <span class="star">★</span>
            </div>
        `;
        starsContainer.innerHTML = stars;
    } else {
        console.error("Elemento #stars-container não encontrado no DOM.");
    }

    // Inicializando o Swiper
    if (typeof Swiper !== "undefined") {
        var swiper = new Swiper(".mySwiper", {
            spaceBetween: 30,
            centeredSlides: true,
            autoplay: {
                delay: 9000,
                disableOnInteraction: false
            },
            pagination: {
                el: ".swiper-pagination",
                clickable: true
            },
            navigation: {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev"
            },
            on: {
                autoplayTimeLeft(s, time, progress) {
                    if (progressCircle) {
                        progressCircle.style.setProperty("--progress", progress);
                    }
                    if (progressContent) {
                        progressContent.textContent = `${Math.ceil(time / 1000)}s`;
                    }
                }
            }
        });
    } else {
        console.error("Swiper não está definido. Verifique a importação do script.");
    }

    // Redirecionamento para o WhatsApp
    const heading = document.querySelectorAll('.wpp');
    wpp2.addEventListener('click', () => {
        const numero = '5579991063816';
        const mensagem = encodeURIComponent('Olá, gostaria de mais informações');
        const wpp = `https://wa.me/${numero}?text=${mensagem}`;

        window.open(wpp, '_blank')
    })
    if (heading) {
        heading.forEach(h => h.addEventListener('click', () => {
            const numero = '5579991063816';
            const mensagem = encodeURIComponent('Olá, gostaria de mais informações');
            const wpp = `https://wa.me/${numero}?text=${mensagem}`;

            window.location.href = wpp;
        }))
    } else {
        console.error("Elemento .wpp não encontrado no DOM.");
    }
});
