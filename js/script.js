const box = document.querySelector('.box');
const colorBtns = document.querySelectorAll('.colorBtn');
const saturation = document.querySelector('.slider');
const saturationVal = document.querySelector('.saturationValue');
const fadeSpeed = document.querySelectorAll('.speedBtn');
let currColor;
let currSpeed;
currSpeed = 'Normal';
currColor = 'mix';

const fillBox = () => {
	for (let i = 0; i < 729; i++) {
		const square = document.createElement('div');
		square.classList.add('square');
		box.appendChild(square);
	}
};

fillBox();

const generateColor = () => {
	let x = Math.floor(Math.random() * 225 + 30);
	let z = Math.floor(Math.random() * 225 + 30);
	let y = Math.floor(Math.random() * 225 + 30);
	choosedColor = `rgb(${z},${y},${x}, .${saturation.value})`;

	switch (currColor.textContent) {
		case 'Red':
			choosedColor = `rgb(${x},0,0, .${saturation.value})`;
			break;
		case 'Green':
			choosedColor = `rgb(0,${x},0, .${saturation.value})`;
			break;
		case 'Blue':
			choosedColor = `rgb(0,0,${x}, .${saturation.value})`;
			break;
		case 'Mix':
			choosedColor = `rgb(${z},${y},${x}, .${saturation.value})`;
			break;
	}
};

const fadingSquare = el => {
	switch (currSpeed) {
		case 'Fast':
        setTimeout(()=>{
            el.target.classList.contains('square') ? el.target.style.backgroundColor = '#333' : ''
        },1000)
			break;
		case 'Normal':
            setTimeout(()=>{
                el.target.classList.contains('square') ? el.target.style.backgroundColor = '#333' : ''
            },3000)
			break;
		case 'Slow':
            setTimeout(()=>{
                el.target.classList.contains('square') ? el.target.style.backgroundColor = '#333' : ''
            },10000)
			break;
	}
};
saturation.oninput = function () {
	saturationVal.innerHTML = `${this.value}%`;
};

fadeSpeed.forEach(el =>
	el.addEventListener('click', () => {
		currSpeed = el.textContent;
	})
);

colorBtns.forEach(el =>
	el.addEventListener('click', () => {
		currColor = el;
	})
);
box.addEventListener('mousemove', e => {
	generateColor();
	fadingSquare(e);
	e.target.classList.contains('square') ? (e.target.style.backgroundColor = `${choosedColor}`) : '';
});
