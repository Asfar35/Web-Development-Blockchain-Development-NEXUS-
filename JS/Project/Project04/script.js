const colors = ["Red", "Blue", "Green", "Yellow", "Orange", "Purple", "Pink", "Brown", "Gray", "White", "Cyan", "Magenta", "Lime", "Teal", "Indigo", "Violet", "Gold", "Silver", "Beige"];
const texts = ["Hi","Hey","Hello"];

document.body.addEventListener('mousemove',(event)=>{
    let ele = document.createElement('div');
    ele.id = 'circle';
    ele.style.backgroundColor = colors[Math.floor(Math.random()*colors.length)];
    ele.innerText = texts[Math.floor(Math.random()*texts.length)];
    const x = event.clientX;
    ele.style.left = `${x-50}px`;
    const y = event.clientY;
    ele.style.top = `${y-50}px`;

    document.body.appendChild(ele);

    setTimeout(()=>{
        ele.remove();
    },5000)
});