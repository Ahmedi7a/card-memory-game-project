/*-------------------------------- Constants --------------------------------*/
let hasFlippedCard = false;
let lockBoard = false;
let firstCard, secondCard;
/*-------------------------------- Variables --------------------------------*/

/*------------------------ Cached Element References ------------------------*/
const cardElement= document.querySelectorAll('.memory-card');
const frontFaces = document.querySelectorAll('.front-face');
/*----------------------------- Event Listeners -----------------------------*/
for (let i = 0; i < cardElement.length; i++) {
    cardElement[i].addEventListener('click',toggleImageVisibility);
}

/*-------------------------------- Functions --------------------------------*/

function toggleImageVisibility(event){
    event.target.classList.add('hide');
}



