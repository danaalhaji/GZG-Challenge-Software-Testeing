
function getRandomNuber(){
    return Math.floor(Math.random()*(11-2)+2)+1
}


let firstCard  = getRandomNuber()
let secconCard = getRandomNuber()
let cards = [firstCard, secconCard]


let sum = firstCard+secconCard

let hasBlackjack = false
let isAlive = true


let messageEl =  document.getElementById("messgae-el")
let message = " "
let sumEl =  document.getElementById("sum-el")
let cardsEl = document.querySelector("#card-el")

function startGame(){
    renderGame()
}


function renderGame(){ 
    // render out first & second card
    cardsEl.textContent = "Cards: " + cards[0] + ","+ cards[1]
    if (sum <= 20){
        sumEl.textContent = "Sum: " + sum
        message = "Do you want to draw a new card?"
        console.log("Do you want to draw a new card?")

    } else if( sum == 21){
        hasBlackjack = true
        message = "you have got a BalckJack!!!"
        console.log("you have got a BalckJack!!!")
    } else {
        isAlive = false
        message = "You're out of the game ! ;("
        console.log("You're out of the game ! ;(")
    }
    messageEl.textContent = message
}

function newCard(){
    console.log("New cards")
    let card = getRandomNuber()
    cards.push(card)
    sum += card
    renderGame()
}
console.log(firstCard , secconCard)
console.log(hasBlackjack)