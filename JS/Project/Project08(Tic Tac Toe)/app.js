const board = document.getElementById('board');
const reset = document.getElementById('reset-btn');
const res = document.getElementById('result');
const msg = document.querySelector('.message');

let turn = 'O';
let count = 0;
const win = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8],
    [0, 3, 6], [1, 4, 7], [2, 5, 8],
    [0, 4, 8], [2, 4, 6]
]
let arr = new Array('E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E');

function checkWinningCondition() {
    for (let [idx0, idx1, idx2] of win) {
        if (arr[idx0] != 'E' && arr[idx0] === arr[idx1] && arr[idx1] === arr[idx2]) return true;
    }
    return false;
}
const fun = (e) => {
    let idx = Number(e.target.id);
    if (arr[idx] == 'E') {
        if (turn === 'O') {
            e.target.style.color = 'blue';
            e.target.innerText = 'O';
            arr[idx] = 'O';
            if (checkWinningCondition()) {
                res.innerText = 'O is Win';
                msg.classList.remove('hide');
                board.removeEventListener('click', fun);
                return;
            }
            turn = 'X';
            count++;
        }
        else {
            e.target.style.color = 'red';
            e.target.innerText = 'X';
            arr[idx] = 'X';
            if (checkWinningCondition()) {
                res.innerText = 'X is win';
                msg.classList.remove('hide');
                board.removeEventListener('click', fun);
                return;
            }
            turn = 'O';
            count++;
        }
        if (count === 9) {
            res.innerText = 'Match Draw';
            msg.classList.remove('hide');
        }
    }
}
board.addEventListener('click', fun);
reset.addEventListener('click', (e) => {
    arr = new Array('E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E');
    for (let ele = 0; ele < 9; ele++) {
        document.getElementById(String(ele)).innerText = '';
    }
    board.addEventListener('click', fun);
    msg.classList.add('hide');
    res.innerText = '';
    turn = 'O';
    count = 0;
});

document.getElementById('start-btn').addEventListener('click', () => {
    msg.classList.add('hide');
    arr = new Array('E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E');
    for (let ele = 0; ele < 9; ele++) {
        document.getElementById(String(ele)).innerText = '';
    }
    res.innerText = '';
    turn = 'O';
    count = 0;
    board.addEventListener('click', fun);
})
