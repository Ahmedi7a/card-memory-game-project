const cardsArray = [
    { alt: "watermelon", imageUrl: "./images/fruit_1.jpg" },
    { alt: "watermelon", imageUrl: "./images/fruit_1.jpg" },
    { alt: "fruit2", imageUrl: "./images/fruit_2.jpg" },
    { alt: "fruit2", imageUrl: "./images/fruit_2.jpg" },
    { alt: "fruit3", imageUrl: "./images/fruit_3.jpg" },
    { alt: "fruit3", imageUrl: "./images/fruit_3.jpg" },
    { alt: "fruit4", imageUrl: "./images/fruit_4.jpg" },
    { alt: "fruit4", imageUrl: "./images/fruit_4.jpg" },
    { alt: "fruit5", imageUrl: "./images/fruit_5.jpg" },
    { alt: "fruit5", imageUrl: "./images/fruit_5.jpg" },
    { alt: "fruit6", imageUrl: "./images/fruit_6.jpg" },
    { alt: "fruit6", imageUrl: "./images/fruit_6.jpg" },
];
// cardsArray.sort(( => Math.random() - 0.5)

// func alt, url

/*-------------------------------- Constants --------------------------------*/
let firstCard, secondCard;
/*-------------------------------- Variables --------------------------------*/

/*------------------------ Cached Element References ------------------------*/
const cardElement = document.querySelectorAll('.memory-card');
// console.log(cardElement.length)
/*----------------------------- Event Listeners -----------------------------*/
for (let i = 0; i < cardElement.length; i++) {
    cardElement[i].addEventListener('click', flipCard);
}

/*-------------------------------- Functions --------------------------------*/

//if we press it will add a class hide ehich will hide the back-side
function flipCard(event) {
    event.target.classList.add('hide');
    const clickedCard = event.target;
    if (!firstCard) {
        // If no card is flipped, set the first card
        firstCard = clickedCard;
        return;
    }

    // Otherwise, set the second card
    secondCard = clickedCard;

    checkMatch()

    console.log(firstCard)
    console.log(secondCard)

}

function checkMatch() {
    // Check if the firstCard and secondCard have the same identifying class
    const isMatch = firstCard.classList.contains('a') && secondCard.classList.contains('a') ||
        firstCard.classList.contains('b') && secondCard.classList.contains('b') ||
        firstCard.classList.contains('c') && secondCard.classList.contains('c') ||
        firstCard.classList.contains('d') && secondCard.classList.contains('d') ||
        firstCard.classList.contains('f') && secondCard.classList.contains('f') ||
        firstCard.classList.contains('g') && secondCard.classList.contains('g');

    if (isMatch) {
        // Cards match
        console.log('matched')
        disableCards();
    } else {
        // Cards do not match
        console.log('unmatched')
        unflipCards();
    }

}

function disableCards() {
    // Prevent clicks on the matched cards
    firstCard.removeEventListener('click', flipCard);
    secondCard.removeEventListener('click', flipCard);

    resetBoard();
    checkWin();
}

function unflipCards() {
    //it delays execution
    setTimeout(function () {
        // Remove the 'hide' class to show the back side of the cards
        firstCard.classList.remove('hide');
        secondCard.classList.remove('hide');

        resetBoard();
    }, 1000);
}

function resetBoard() {
    firstCard = null;
    secondCard = null;
}

function checkWin(){
    const matchedCards=document.querySelectorAll('.memory-card .hide');
    if(matchedCards.length===cardElement.length){
        console.log('win')
    }
}


