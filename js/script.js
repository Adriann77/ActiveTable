const box = document.querySelector('.box');
const redBtn = document.querySelector('.red');
const greenBtn = document.querySelector('.green');
const blueBtn = document.querySelector('.blue');
const mixBtn = document.querySelector('.mix');
const colorBtns = document.querySelectorAll('.colorBtn');
const saturation = document.querySelector('.slider');
const saturationVal = document.querySelector('.saturationValue');
let currColor


const fillBox = () => {
	for (let i = 0; i < 729; i++) {
		const square = document.createElement('div');
		square.classList.add('square');
		box.appendChild(square);
	}
};

colorBtns.forEach(el => el.addEventListener('click', ()=>{
    currColor = el
}))

fillBox();

const generateColor = params => {
    let x = Math.floor(Math.random()*225 + 30)
	
    switch(currColor.textContent){
        case 'Red':
            console.log('tak');
            choosedColor = `rgb(${x},0,0, .${saturation.value})`;
        break;
        }
    
};

box.addEventListener('mousemove', e => {
    generateColor()
	e.target.classList.contains('square') ? (e.target.style.backgroundColor = `${choosedColor}`) : '';
});
saturation.oninput = function () {
	saturationVal.innerHTML = `${this.value}%`;
};
