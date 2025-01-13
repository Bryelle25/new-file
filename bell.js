let h2 = document.querySelector("h2")
let p1= document.querySelector (".greet")
let h4 = document.getElementsByTagName("h4")[0]
let p2 =document.getElementById("code")
let btn= document.querySelector("button")
let btn2= document.getElementById("rest")

function yam (){
    h4.innerText=("congratulations")
    p2.style.visibility= "visible"
    btn.innerText=" you won!!"
    btn.style.backgroundColor= "yellow"
    
}
function cassava(){
h4.innerText="try your luck"
p2.style.visibility= "hidden"
btn.innerText="play"
btn.style.backgroundColor= black
}
btn.addEventListener("click, yam")
btn2.addEventListener(" click cassava")





