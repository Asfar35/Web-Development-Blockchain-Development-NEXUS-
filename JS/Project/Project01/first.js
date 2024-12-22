let day = document.getElementById('day');

let hour = document.getElementById('first');
let minute = document.getElementById('second');
let second = document.getElementById('third');

const remTime = function(){
    const target = new Date('2028-7-21');
    const now = new Date();
    const dt=(target-now);
    const days = Math.floor(dt / (1000*60*60*24));
    const hours = Math.floor(dt / (1000*60*60)%24);
    const min = Math.floor(dt / (1000*60)%60);
    const sec = Math.floor(dt / (1000)%60);

    day.innerText = `${days}`;
    hour.innerText = `${hours}`;
    minute.innerText =`${min}`;
    second.innerText = `${sec}`;
}
setInterval(remTime,1000);