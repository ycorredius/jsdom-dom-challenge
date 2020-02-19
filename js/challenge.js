const comments = document.getElementById('list');
const commentForm = document.getElementById('comment-form');
const minusButton = document.getElementById('minus');
const plusButton = document.getElementById('plus');
const heartButton = document.getElementById('heart');
const pauseButton = document.getElementById('pause');
const submitButton = document.getElementById('submit');
const likeArray = [];
const likeCounter = 0;
let counter = document.querySelector('#counter');
let tarNumber = parseInt(document.getElementById('counter').innerText);
let timer = null;

window.onload = startTimer();
function startTimer (){
    pauseButton.innerHTML = 'pause';
    timer = setInterval(this.addTarNumber,1000);
}
function stopTimer (){
    pauseButton.innerHTML = 'resume';
    clearInterval(timer);
}

function addTarNumber (){
    tarNumber = (tarNumber + 1);
    counter.innerHTML = tarNumber;
}
document.addEventListener('DOMContentLoaded', () => {
    commentForm.addEventListener('submit', (event) => {
        event.preventDefault();
        const ul = document.createElement('ul');
        comments.appendChild(ul);
        const li = document.createElement('li');
        const commentInput = event.target.querySelector('#comment-input');
        console.log(commentInput);
        li.innerText = commentInput.value; 
        ul.appendChild(li);
    });

    minusButton.addEventListener("click",() => {
        stopTimer();
        if (tarNumber > 0 ){
            tarNumber = tarNumber - 1;
            if(likeArray.includes(tarNumber)){
                counter.innerHTML= tarNumber +" "+ heartButton.innerHTML;
            } else
            counter.innerHTML =tarNumber;
        }
    });

    plusButton.addEventListener('click', () => {
        stopTimer();
        addTarNumber();
    });

    pauseButton.addEventListener('click', () =>{
        if (pauseButton.innerText == 'pause'){
            stopTimer();
            minusButton.disabled = true;
            plusButton.disabled =true;
            heartButton.disabled = true;
        } else{
            startTimer();
            minusButton.disabled = false;
            plusButton.disabled =false;
            heartButton.disabled = false;
            submitButton.disabled = false;
            
        }
    });

    heartButton.addEventListener('click',() => {
        stopTimer();
        counter.innerHTML= tarNumber +" "+ heartButton.innerHTML;
        likeArray.push(tarNumber);
    });
});

