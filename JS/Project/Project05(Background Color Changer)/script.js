// process 1
// const red = document.getElementById('red');
// const blue = document.getElementById('blue');
// const green = document.getElementById('green');
// const orange = document.getElementById('orange');
// const pink = document.getElementById('pink');

// red.addEventListener('click', () => {
//     document.body.style.background = 'red';
// });

// blue.addEventListener('click', () => {
//     document.body.style.background = 'blue';
// });

// green.addEventListener('click', () => {
//     document.body.style.background = 'green';
// });

// orange.addEventListener('click', () => {
//     document.body.style.background = 'orange';
// });

// pink.addEventListener('click', () => {
//     document.body.style.background = 'pink';
// });

//Process 2
/*const buttons = document.querySelectorAll('button');
buttons.forEach((button)=>{
    button.addEventListener('click',()=>{
        document.body.style.backgroundColor = button.id;
    })
}) */

//Process 3(Event Deligation)
const root = document.getElementById('root');
root.addEventListener('click',(e)=>{
    if(e.target.tagName === 'BUTTON'){
        document.body.style.backgroundColor = e.target.id;
    }
});