const obj = document.getElementById("first");
obj.style.display = "flex";
obj.style.justifyContent = "center";
obj.style.marginTop = "50vh";
obj.style.color = "white";
obj.style.fontWeight = "bolder";
obj.style.fontSize = "45px";

const color = ["Red", "Blue", "Green", "Yellow", "Orange", "Purple", "Pink", "Brown", "Gray", "Black", "Cyan", "Magenta", "Lime", "Teal", "Indigo", "Violet", "Gold", "Silver", "Beige"];
const b = document.getElementById("main");
b.style.backgroundColor = "black";
let n=0;
const generateColor = () => {
    const dt = new Date();
    let hour = dt.getHours();
    let min = dt.getMinutes();
    let sec = dt.getSeconds();
    obj.innerText = `Time: ${hour} : ${min} : ${sec}`;
    b.style.backgroundColor = color[n%color.length];
    n = n + 1;
}
setInterval(generateColor, 1000);