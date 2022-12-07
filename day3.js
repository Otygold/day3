// alert("working!")
let screen = document.querySelector(".screen")
let submitBtn = document.querySelector("button")
let message = document.querySelector("#yourMessage")
let popup = document.querySelector(".modal")
let blurt = document.querySelector(".overlay")


const showModal = ()=>{
    popup.classList.remove("hidden")
    blurt.classList.remove("hidden")
}

const hideModal = ()=>{
    popup.classList.add("hidden")
    blurt.classList.add("hidden")

}

submitBtn.addEventListener("click", () => {
    if (message.value !== "") {
        screen.textContent = message.value
        message.value = ""
    } else {
        showModal()
        setTimeout(hideModal, 2000)
    }

        
})
// blurt.addEventListener("click", hideModal)