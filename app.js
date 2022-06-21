const p1Button = document.querySelector('#p1Button');
const p2Button = document.querySelector('#p2Button');
const reset = document.querySelector('#reset');
const winningScoreSelect = document.querySelector('#playTo');

let p1Score = 0;
let p2Score = 0;
let winningScore = 1;

 function resetter(){
    p1Score = 0;
    p2Score = 0;
    const scoreChange = document.querySelector('#p1Score');
    const scoreChange2 = document.querySelector('#p2Score');
    scoreChange.innerText = p1Score;
    scoreChange2.innerText = p2Score;
}

winningScoreSelect.addEventListener('change', function(){
    winningScore = parseInt(this.value);
    resetter();
});

p1Button.addEventListener('click', function(){
    if((p1Score !== winningScore) && (p2Score !== winningScore)){
    p1Score+=1;
    const scoreChange = document.querySelector('#p1Score');
    scoreChange.innerText = p1Score;
    }
    
});

p2Button.addEventListener('click', function(){
    if((p2Score !== winningScore) && (p1Score !== winningScore)){
    p2Score+=1;
    const scoreChange = document.querySelector('#p2Score');
    scoreChange.innerText = p2Score;
    }
});

reset.addEventListener('click', resetter);
