const p1 = document.getElementById('player1');
const p2 = document.getElementById('player2');
const button = document.querySelector('button');
const result = document.getElementById('res');

const arr = ['Stone','Paper','Scissor'];
button.addEventListener('click',()=>{
    let val1 = Math.floor(Math.random()*3);
    let val2 = Math.floor(Math.random()*3);
    p1.innerText = arr[val1];
    p2.innerText = arr[val2];
    if(val1==val2){
        p1.style.color = 'yellow';
        p2.style.color = 'yellow';
        result.innerText = 'Match Draw';
    }
    else if(val1===0 && val2===1){
        p1.style.color = 'red';
        p2.style.color = 'greenyellow';
        result.innerText = 'Player-2 Win';
    }
    else if(val1==0 && val2==2){
        p1.style.color = 'greenyellow';
        p2.style.color = 'red';
        result.innerText = 'Player-1 Win';
    }
    else if(val1==1 && val2==2){
        p1.style.color = 'red';
        p2.style.color = 'greenyellow';
        result.innerText = 'Player-2 Win';
    }
    else if(val1==1 && val2==0){
        p1.style.color = 'greenyellow';
        p2.style.color = 'red';
        result.innerText = 'Player-1 Win';
    }
});