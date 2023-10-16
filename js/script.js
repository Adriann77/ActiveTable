const box = document.querySelector('.box');
const redBtn = document.querySelector('.red');
const greenBtn = document.querySelector('.green');
const blueBtn = document.querySelector('.blue');
const mixBtn = document.querySelector('.mix');
const colorBtns = document.querySelectorAll('.colorBtn');
const saturation = document.querySelector('.slider');
const saturationVal = document.querySelector('.saturationValue');

let redR;
let redG;
let redB;
let choosedColor



const fillBox = () => {
	for (let i = 0; i < 729; i++) {
		const square = document.createElement('div');
		square.classList.add('square');
		box.appendChild(square);
	}
};

fillBox();


const generateRandColor = () => {

    let x = Math.floor(Math.random()*225 + 30)
    choosedColor = `rgb(${x},0,0, .${(saturation.value)})`

}




box.addEventListener('mousemove', e => {
    generateRandColor()
	e.target.classList.contains('square') ? (e.target.style.backgroundColor = `${choosedColor}`) : '';
});
saturation.oninput = function () {
	saturationVal.innerHTML = `${this.value}%`;
};
