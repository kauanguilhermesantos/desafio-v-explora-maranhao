document.addEventListener('DOMContentLoaded', () => {
    // const slider = document.querySelector('.slider');
    // const slides = document.querySelectorAll('.cardDestinosMaisProcurados');
    // const dots = document.querySelectorAll('.pontinhosDestinosMaisProcurado li');
    // const prevBtn = document.getElementById('anterior');
    // const nextBtn = document.getElementById('proximo');

    let index = 0;
    const totalSlides = slides.length;

    function showSlide(n) {
        if (n >= totalSlides) index = 0;
        if (n < 0) index = totalSlides - 1;

        slider.style.transform = `translateX(-${index * 100}%)`;
        updateDots();
    }

    function updateDots() {
        dots.forEach((dot, i) => {
            dot.classList.toggle('ativo', i === index);
        });
    }

    function nextSlide() {
        index = (index + 1) % totalSlides;
        showSlide(index);
    }

    function prevSlide() {
        index = (index - 1 + totalSlides) % totalSlides;
        showSlide(index);
    }

    function dotNavigation(e) {
        index = parseInt(e.target.getAttribute('data-index'));
        showSlide(index);
    }

    prevBtn.addEventListener('click', prevSlide);
    nextBtn.addEventListener('click', nextSlide);

    dots.forEach(dot => {
        dot.addEventListener('click', dotNavigation);
    });

    let autoSlide = setInterval(nextSlide, 3000);

    const sliderContainer = document.querySelector('.slider-container');
    sliderContainer.addEventListener('mouseover', () => clearInterval(autoSlide));
    sliderContainer.addEventListener('mouseout', () => {
        autoSlide = setInterval(nextSlide, 3000);
    });
});
