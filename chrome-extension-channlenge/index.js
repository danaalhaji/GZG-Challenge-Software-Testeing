
let myLeads = []
const inputEl = document.getElementById("input-el")

const inputBtn = document.getElementById("input-btn")
const ulEl = document.getElementById("ul-el")

inputBtn.addEventListener("click" , function(){
    myLeads.push(inputEl.value)
    renderUlLead()
    inputEl.value = ""
})


let listItem = ""
function renderUlLead(){
    for(let i=0 ; i < myLeads.length ; i++){
        listItem += `
        <li>
            <a target='_blank' href='${myLeads[i]}'>" 
            ${myLeads[i]} 
            "</a>
        </li>`
        //const li =  document.createElement("li")
        //li.textContent = myLeads[i]
        ulEl.innerHTML =  listItem
    }}

