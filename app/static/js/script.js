



document.addEventListener('DOMContentLoaded', function () {
    const loginButton = document.querySelector('#loginButton');
    if (loginButton) {
        loginButton.addEventListener('click', function (event) {
            // Prevent form submission if needed for validation or other logic
            // event.preventDefault();
            console.log('Login button clicked');
        });
    }
});


// Script to toggle between dark and light themes
document.addEventListener('DOMContentLoaded', function () {
    console.log('DOM fully loaded and parsed.');
    console.log(document.body.innerHTML);  // Log the full body HTML

    const themeToggleButton = document.getElementById('theme-toggle');
    const themeIcon = document.getElementById('theme-icon');

    console.log(themeToggleButton);  // Check if this is null
    console.log(themeIcon);          // Check if this is null

    if (themeToggleButton && themeIcon) {
        console.log('Theme toggle button and icon found.');

        // Check if the current theme is light or dark
        if (document.body.classList.contains('bg-dark')) {
            themeIcon.classList.remove('fa-sun');
            themeIcon.classList.add('fa-moon');
        }

        themeToggleButton.addEventListener('click', function () {
            document.body.classList.toggle('bg-light');
            document.body.classList.toggle('bg-dark');

            if (document.body.classList.contains('bg-dark')) {
                themeIcon.classList.remove('fa-sun');
                themeIcon.classList.add('fa-moon');
            } else {
                themeIcon.classList.remove('fa-moon');
                themeIcon.classList.add('fa-sun');
            }
        });
    } else {
        console.error('Theme toggle button or icon not found.');
    }
});

  // Testimonial Slider JavaScript
  let currentSlide = 0;

  function changeSlide(index) {
    const slider = document.querySelector('.testimonial-slider');
    const dots = document.querySelectorAll('.slider-dots .dot');
    currentSlide = index;
    slider.style.transform = `translateX(-${index * 100}%)`;
    dots.forEach(dot => dot.classList.remove('active'));
    dots[index].classList.add('active');
  }

  function nextSlide() {
    const totalSlides = document.querySelectorAll('.testimonial').length;
    currentSlide = (currentSlide + 1) % totalSlides;
    changeSlide(currentSlide);
  }

  function prevSlide() {
    const totalSlides = document.querySelectorAll('.testimonial').length;
    currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
    changeSlide(currentSlide);
  }

