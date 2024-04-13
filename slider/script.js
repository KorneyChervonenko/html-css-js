'use strict';
console.clear();

const slider = document.querySelector('section.slider');
const slides = slider.querySelectorAll('.slide');
const sliderLeftBtn = slider.querySelector('button[aria-label="left arrow"]');
const sliderRightBtn = slider.querySelector('button[aria-label="right arrow"]');
const dotsArea = slider.querySelector('.dots');
const dots = dotsArea.getElementsByClassName('dot');
let currentSlideIndex = 0;

// dotsArea.style.backgroundColor='aqua';
// dotsArea.insertAdjacentHTML('beforeend', '<span class="dot">●</span>');

// adding navigation dots in quantity equals to quantity of slides
// slides.forEach((slide, i) => dotsArea.insertAdjacentHTML('beforeend', '<span class="dot" role="button">●</span>'));  data-index='${i}'
slides.forEach((slide, i) =>
	dotsArea.insertAdjacentHTML('beforeend', `<span class="dot" role="button" data-index='${i}'>○</span>`)
);
// [...dots].forEach((dot) => dot.addEventListener('click', (event) => console.log(event.currentTarget, event.target)));
dotsArea.addEventListener('click', (event) => {
	event.preventDefault();
	// console.log(event.target.classList.contains('dot'));
	if (!event.target.classList.contains('dot')) return;
	// console.log(event.target.dataset);
	currentSlideIndex = Number(event.target.dataset.index);
	redrawSlider();
	// console.log(event.target.dataset.index);
});

// dots.forEach((dot) => console.log(dot));
// console.log(dots.length);

function redrawSlider() {
	slides.forEach((slide, i) => {
		slide.style.transform = `translateX(${100 * (i - currentSlideIndex)}%)`;
	});

	if (currentSlideIndex === 0) sliderLeftBtn.disabled = true;
	else sliderLeftBtn.disabled = false;
	if (currentSlideIndex === slides.length - 1) sliderRightBtn.disabled = true;
	else sliderRightBtn.disabled = false;

	[...dots].forEach((dot) => (dot.textContent = '○'));
	const currentDot = dotsArea.querySelector(`.dot:nth-of-type(${currentSlideIndex + 1})`);
	currentDot.textContent = '●';
}

redrawSlider();

// sliderLeftBtn.classList.add('hidden');

sliderLeftBtn.addEventListener('click', (event) => {
	event.preventDefault();
	currentSlideIndex = Math.max(currentSlideIndex - 1, 0);
	redrawSlider();
});

sliderRightBtn.addEventListener('click', (event) => {
	event.preventDefault();
	currentSlideIndex = Math.min(currentSlideIndex + 1, slides.length - 1);
	redrawSlider();
});
