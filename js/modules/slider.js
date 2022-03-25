function slider({container, slide, nextArrow, prevArrow, totalCounter, currentCounter, wrapper, field}) {

    const slides = document.querySelectorAll(slide),
            slider = document.querySelector(container),
            prev = document.querySelector(prevArrow),
            next = document.querySelector(nextArrow),
            total = document.querySelector(totalCounter),
            current = document.querySelector(currentCounter),
            slidesWrapper = document.querySelector(wrapper),
            slidesField = document.querySelector(field),
            width = window.getComputedStyle(slidesWrapper).width;


    let slideIndex = 1;
    let offset = 0;

    if (slides.length < 10) {
        total.textContent = `0${slides.length}`;
    } else {
        total.textContent = slides.length;
    }
    
    function currentIndex() {
        if (slides.length < 10) {
            current.textContent = `0${slideIndex}`;
        } else {
            current.textContent = slideIndex;
        }
    }

    currentIndex();

    function dotActive() {
        dots.forEach(dot => dot.classList.remove('dot_active'));
        dots[slideIndex - 1].classList.add('dot_active');
    }

    function convertToNumbers(str) {
        return +str.replace(/\D/g, '');
    }


    slidesField.style.width = 100 * slides.length + '%';
    slidesField.style.display = 'flex';
    slidesField.style.transition = '0.5s all';

    slidesWrapper.style.overflow = 'hidden';
    
    slides.forEach(slide => {
        slide.style.width = width;
    });

    slider.style.position = 'relative';

    const indicators = document.createElement('ul'),
            dots = [];
    indicators.classList.add('carousel-indicators');
    slider.append(indicators);

    for (let i = 0; i < slides.length; i++) {
        const dot = document.createElement('li');
        dot.setAttribute('data-slide-to', i + 1);
        dot.classList.add('dot');
        indicators.append(dot);
        dots.push(dot);
        if (i == 0) {
            dots[i].classList.add('dot_active');
        }
    }

    next.addEventListener('click', () => {
        if (offset == convertToNumbers(width) * (slides.length - 1)) {
            offset = 0;
        } else {
            offset += convertToNumbers(width);
        }

        slidesField.style.transform = `translateX(-${offset}px)`;

        if (slideIndex == slides.length) {
            slideIndex = 1;
        } else {
            slideIndex++;
        }

        currentIndex();

        dotActive();
    });

    prev.addEventListener('click', () => {
        if (offset == 0) {
            offset = convertToNumbers(width) * (slides.length - 1);
        } else {
            offset -= convertToNumbers(width);
        }

        slidesField.style.transform = `translateX(-${offset}px)`;

        if (slideIndex == 1) {
            slideIndex = slides.length;
        } else {
            slideIndex--;
        }

        currentIndex();

        dotActive();
    });

    dots.forEach(dot => {
        dot.addEventListener('click', (e) => {
            const slideTo = e.target.getAttribute('data-slide-to');
            slideIndex = slideTo;
            offset = convertToNumbers(width) * (slideTo - 1);

            slidesField.style.transform = `translateX(-${offset}px)`;

            currentIndex();

            dotActive();
        });
    });

    // showSlides(slideIndex);                                                                // First variant of slider
                                                                                    
    // if (slides.length < 10) {
    //     total.textContent = `0${slides.length}`;
    // } else {
    //     total.textContent = slides.length;
    // }

    // function showSlides(n) {
    //     if (n > slides.length) {
    //         slideIndex = 1;
    //     }

    //     if (n < 1) {
    //         slideIndex = slides.length;
    //     }

    //     slides.forEach(item => item.classList.add('hide'));
    //     slides[slideIndex - 1].classList.remove('hide');
    //     slides[slideIndex - 1].classList.add('show');

    //     if (slideIndex < 10) {
    //         current.textContent = `0${slideIndex}`;
    //     } else {
    //         current.textContent = slideIndex;
    //     }
    // }

    // function plusSlides(n) {
    //     showSlides(slideIndex += n);
    // }

    // prev.addEventListener('click', () => {
    //     plusSlides(-1);
    // });

    // next.addEventListener('click', () => {
    //     plusSlides(1);
    // });



    // const sliders = document.querySelectorAll('.offer__slide'),                                        // My variant
    //     buttonPrevious = document.querySelector('.offer__slider-prev'),
    //     buttonNext = document.querySelector('.offer__slider-next'),
    //     currentPoint = document.querySelector('#current'),
    //     totalPoints = document.querySelector('#total');

    // let index = 0;

    // console.log(sliders);

    // function getNumbersPlusNull(i) {
    //     return (i < 10) ? '0' + i : i;
    // }

    // currentPoint.innerHTML = getNumbersPlusNull(index + 1);
    // totalPoints.innerHTML = getNumbersPlusNull(sliders.length);

    // function showSlider(slider) {
    //     slider.classList.remove('hide');
    //     slider.classList.add('show');
    // }

    // function hideSlider(slider) {
    //     slider.classList.remove('show');
    //     slider.classList.add('hide');
    // }

    // sliders.forEach(item => hideSlider(item));
    // showSlider(sliders[0]);

    // buttonNext.addEventListener('click', (e) => {
    //     e.preventDefault();
    //     ++index;
    //     if (index < sliders.length) {
    //         hideSlider(sliders[index-1]);
    //         showSlider(sliders[index]);
    //         currentPoint.innerHTML = getNumbersPlusNull(index + 1);
    //     }
    // });

    // buttonPrevious.addEventListener('click', (e) => {
    //     e.preventDefault();
    //     --index;
    //     if (index >= 0) {
    //         hideSlider(sliders[index + 1]);
    //         showSlider(sliders[index]);
    //         currentPoint.innerHTML = getNumbersPlusNull(index + 1);
    //     }
    // });
}

// module.exports = slider;
export default slider;