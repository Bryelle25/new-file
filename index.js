// let board = document.getElementById("duster")
// console.log(board)
// board.innerText = "byee"
// board.style.color="yellow"
// board.style.backgroundColor="pink"

let body = document.body;
let btn = document.getElementById("toogle");
let on = true;
function change() {
  if (on) {
    body.style.backgroundColor = "black";
    body.style.color = "white";
    on = false;
    btn.innerText = "down Nepa";
  } else {
    body.style.backgroundColor = "white";
    body.style.color = "black";
    on = true;
    btn.innerText = "Up Nepa";
  }
}
btn.addEventListener("click", change);

// let x = document.getElementsByClassName("hello");
// console.log(x);
// letbtn = document.getElementById(" abc");
let items = document.getElementsByClassName("hello");
items[0].style.color = "red";
for (let i = 0; i < items.length; i++) {
  items[i].style.color = "pink";
  items[i].innerText = "how are you";
}
