// document.getElementById("count-el").innerText = 5

// let firstBatch = 5
// let secondBatch = 7

// let count = firstBatch + secondBatch

// console.log(count);

// intialize the count as 0 
// listen to the click on the incremnt button
// increment the count variable when the button is clicked 
// change count-el in the HTML to reflect the new count 

let countEl =  document.getElementById("count-el")

let saveEl =  document.getElementById("save-el")

console.log(countEl)

let count = 0

function increment(){
    count =count+1
    countEl.innerText = count
    console.log("count") 

}

function save(){
    let countStr = count + " - "
    saveEl.textContent +=  countStr
    countEl.textContent = 0
    count = 0

}



