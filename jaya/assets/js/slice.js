document.addEventListener('DOMContentLoaded', () => {
    const slideRow = document.getElementById('slide-row');
    const indicators = document.querySelectorAll('.indicator .btn');
    let currentIndex = 0;
    const totalSlides = indicators.length;

    function goToSlide(index) {
        slideRow.style.transform = `translateX(-${index * 100}%)`;
        indicators.forEach((btn, i) => {
            btn.classList.toggle('active', i === index);
        });
        currentIndex = index;
    }

    function nextSlide() {
        const nextIndex = (currentIndex + 1) % totalSlides;
        goToSlide(nextIndex);
    }

    function prevSlide() {
        const prevIndex = (currentIndex - 1 + totalSlides) % totalSlides;
        goToSlide(prevIndex);
    }

    indicators.forEach((btn, index) => {
        btn.addEventListener('click', () => goToSlide(index));
    });

   
    goToSlide(0);
});
