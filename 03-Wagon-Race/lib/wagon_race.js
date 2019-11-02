// TODO: write your code here
const td1 = document.querySelectorAll("#player1_race td")
let position = 0;

const td2 = document.querySelectorAll("#player2_race td")
let position2 = 0;

document.addEventListener("keyup", (event)=>{
  if (event.key=='p') {
    td1[position].classList.remove("active")
    td1[position+1].classList.add("active")
    position = position+1
  }
  if (event.key=='q') {
    td2[position2].classList.remove("active")
    td2[position2+1].classList.add("active")
    position2 = position2+1
  }
  if (position == 19) {
    alert("1")
  }
  if (position2 == 19)
    alert("1")


})


