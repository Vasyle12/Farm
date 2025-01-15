document.addEventListener("DOMContentLoaded", function() {
    const hamburger = document.getElementById("hamburger");
    const mobileMenu = document.getElementById("mobile-menu");

    hamburger.addEventListener("click", function() {
        mobileMenu.classList.toggle("open");
        hamburger.classList.toggle("open");
    });
});

// Слайдер
document.addEventListener("DOMContentLoaded", function () {
    const slider = document.getElementById("testimonial-slider");
    const slides = slider.getElementsByClassName("testimonial-slide");
    let currentIndex = 0;

    function showSlide(index) {
        for (let i = 0; i < slides.length; i++) {
            slides[i].classList.remove("active");
        }
        slides[index].classList.add("active");
    }

    function nextSlide() {
        currentIndex = (currentIndex + 1) % slides.length;
        showSlide(currentIndex);
    }

    let intervalId;

    slider.addEventListener("mouseover", function () {
        intervalId = setInterval(nextSlide, 1000);
    });

    slider.addEventListener("mouseout", function () {
        clearInterval(intervalId);
    });

    showSlide(currentIndex);
});
// Каунтер
document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.list__data h2').forEach(counter => {
        const target = +counter.getAttribute('data-target');
        counter.innerText = '0';
        
        const updateCount = () => {
            const count = +counter.innerText;
            const increment = target / 200;
            
            if (count < target) {
                counter.innerText = Math.ceil(count + increment);
                setTimeout(updateCount, 20);
            } else {
                counter.innerText = target.toLocaleString();
            }
        };

        updateCount();
    });
});


