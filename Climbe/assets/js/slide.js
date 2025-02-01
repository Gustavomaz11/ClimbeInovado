document.addEventListener('DOMContentLoaded', () => {
    const progressCircle = document.querySelector(".autoplay-progress svg");
    const progressContent = document.querySelector(".autoplay-progress span");
    const starsContainer = document.getElementById('stars-container');

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
    const heading = document.querySelector('.contat-heading h3');
    if (heading) {
        heading.addEventListener('click', () => {
            const numero = '5579996701239';
            const mensagem = encodeURIComponent('Olá, gostaria de mais informações');
            const wpp = `https://wa.me/${numero}?text=${mensagem}`;

            window.location.href = wpp;
        });
    } else {
        console.error("Elemento .contat-heading h3 não encontrado no DOM.");
    }
});
