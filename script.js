const imgSlider = document.querySelector('.img-slider')

const imgFruits = document.querySelectorAll('.img-item.fruit')

const nextBtn = document.querySelector('.next-btn')

const prevBtn = document.querySelector('.prev-btn')

let indexSlider = 0;

let index = 0;

nextBtn.addEventListener('click', () => {
    indexSlider++;
    imgSlider.style.transform = `rotate(${indexSlider * -90}deg)`;

    index++;

    document.querySelector('.fruit.active').classList.remove('active');

    imgFruits[index].classList.add('active');
});

prevBtn.addEventListener('click', () => {
    indexSlider--;
    imgSlider.style.transform = `rotate(${indexSlider * -90}deg)`;
});