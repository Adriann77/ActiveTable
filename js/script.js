const box = document.querySelector('.box');
const colorBtns = document.querySelectorAll('.colorBtn');
const saturation = document.querySelector('.slider');
const saturationVal = document.querySelector('.saturationValue');
const fadeSpeed = document.querySelectorAll('.speedBtn');
let currColor;

let h = 360;
let currSpeed = '200';

const fillBox = () => {
	for (let i = 0; i < 722; i++) {
		const square = document.createElement('div');
		square.classList.add('square');
		box.appendChild(square);
	}

	box.addEventListener('mouseover', e => {
		e.target.classList.contains('square') ? generateColor(e.target) : '';
	});

	fadeSpeed.forEach(el =>
		el.addEventListener('click', () => {
			currSpeed = el.value;
		})
	);

	colorBtns.forEach(el =>
		el.addEventListener('click', () => {
			h = el.value;
		})
	);
};

const generateColor = square => {
	saturation.oninput = function () {
		saturationVal.innerHTML = `${this.value}%`;
	};
	let s = saturation.value + '%';

	if (h === '360' || h === 360) {
		square.style.backgroundColor = `hsl(${Math.floor(Math.random() * 360)},${s}, 50%)`;
	} else {
		square.style.backgroundColor = `hsl(${Math.floor(Math.random() * 55 + parseInt(h))},${s}, 50%)`;
	}

	if (currSpeed === '100') {
		setTimeout(() => {
			square.style.transition = 'background-Color .5s';
			square.style.backgroundColor = 'transparent';
		}, 1000);
	} else if (currSpeed === '200') {
		setTimeout(() => {
			square.style.transition = 'background-Color 1.5s';
			square.style.backgroundColor = 'transparent';
		}, 3000);
	} else if (currSpeed === '300') {
		setTimeout(() => {
			square.style.transition = 'background-Color 3.0s';
			square.style.backgroundColor = 'transparent';
		}, 9000);
	}
};

fillBox();
