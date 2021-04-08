let number = ""

const button = document.querySelector("button")

const count = document.querySelector(".count")


button.onclick = function(){
    event.target.disabled = true


const interval = setInterval(function(){
    number++
    count.innerHTML = `${number}`

if(number === 7){
    clearInterval(interval)
    button.disabled = false
}

}, 1500)}




