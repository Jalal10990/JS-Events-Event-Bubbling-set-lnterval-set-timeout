let button = document.getElementById("btn")

button.addEventListener("click", ()=>{
    // alert("I was clicked. opps")
    document.querySelector(".box").innerHTML = "<b> Yahh you were clicked<b/> Enjoy your clicked!"
    
})
// mouse event list  
button.addEventListener("contextmenu", ()=>{
    alert("Dont hack us by Right click please")
})
document.addEventListener("keydown", (e)=>{
    console.log(e, e.key, e.keyCode)
})

