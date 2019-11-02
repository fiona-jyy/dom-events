
 let li_clickme=document.getElementById("clickme")


 clickme.addEventListener("click", (event) => {
    li_clickme.classList.add("disabled")
    li_clickme.innerText = "Bingo"
    let li_audio=document.querySelector("#music")
    li_audio.play()
})// TODO: React to a click on the button!
