const box = document.querySelector('.box');

const fillBox = () => {
	for (let i = 0; i < 729; i++) {
		const square = document.createElement('div');
		square.classList.add('square');
		box.appendChild(square);
	}
};

fillBox()

box.addEventListener('mousemove', (e)=>{

    let x = 0
    redR = Math.floor(Math.random()*255)
    redG = Math.floor(Math.random()*100)
    redB = Math.floor(Math.random()*100)
    e.target.classList.contains('square') ?     e.target.style.backgroundColor = `rgb(${redR},${redG},${redB})` : ''

   
   
})