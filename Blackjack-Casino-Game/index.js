
function getRandomNuber(){
    let randomNum =  Math.floor(Math.random()*13)+1
    if ( randomNum > 10){
        return 10
    }
    else if(randomNum ===1){
        return 11
    }
    else{
        return randomNum
    }
}

let cards = []

let sum = 0

let hasBlackjack = false
let isAlive = false

let messageEl =  document.getElementById("messgae-el")
let message = " "
let sumEl =  document.getElementById("sum-el")
let cardsEl = document.querySelector("#card-el")


let player = {
    name : "per",
    chips : 200

}


playerEl = document.getElementById("player-el")
playerEl.textContent = player.name + ": $" + player.chips

function startGame(){
    isAlive = true
    cards = []
    cards.push(getRandomNuber(),getRandomNuber())
    sum = 0
    sum = cards[0]+cards[1]
    renderGame()
}


function renderGame(){ 
    // render out first & second card
    cardsEl.textContent = "Cards: " 
    sumEl.textContent = "Sum: " + sum
    for (let i = 0 ; i < cards.length ; i++){
        cardsEl.textContent += cards[i] +" "
    }
    if (sum <= 20){
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
    if(isAlive === true && hasBlackjack === false){
    console.log("New cards")
    let card = getRandomNuber()
    sum += card
    cards.push(card)
    renderGame()
    }
    else{
        messageEl.textContent = "Your out of the game , No new cards!"
    }
}
console.log(firstCard , secconCard)
console.log(hasBlackjack)