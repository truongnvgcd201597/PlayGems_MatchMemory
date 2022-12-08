import {getGrid} from './selectors.js'
import {cardArray} from './constants.js'

let cardChosen = [];
let cardChosenIds = [];
let cardWon = [];
function createLiList(){
    const gridElement = getGrid();
    for (let i = 0; i < cardArray.length; i++) {
        const liElement = document.createElement('img');
        liElement.setAttribute('src', 'images/blank.png');
        liElement.dataset.id = i;
        liElement.addEventListener('click', flipCardImages);
        gridElement.appendChild(liElement);
    }
}
function checkMatch(){
    const cards = document.querySelectorAll('#grid img');
    console.log(cards)
    if(cardArray[0] === cardArray[1]){
       cards[cardChosenIds[0]].setAttribute('src', 'images/white.png');
         cards[cardChosenIds[1]].setAttribute('src', 'images/white.png');
         cards[cardChosenIds[0]].removeEventListener('click', flipCardImages);
            cards[cardChosenIds[1]].removeEventListener('click', flipCardImages);
            cardWon.push(cardChosen);
    }
    cardChosenIds = [];
    cardChosen = [];
}
function flipCardImages(){
    let cardId = this.getAttribute('data-id');
    cardChosen.push(cardArray[cardId].name);
    cardChosenIds.push(cardId);
    console.log(cardChosen);
    console.log(cardChosenIds);
    this.setAttribute('src', cardArray[cardId].img);
    if(cardChosen.length === 2){
        setTimeout(checkMatch, 1000);
    }
}
(()=>{
    createLiList();
})()