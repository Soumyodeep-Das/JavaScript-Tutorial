const username = document.getElementById("username")
const userNameDisplay = document.getElementById("userNameDisplay")
const submitBtn = document.getElementById("submitBtn")

submitBtn.addEventListener('click', () => {
    let enteredUserName = username.value 
    localStorage.setItem('username', enteredUserName)
    location.reload()
})

window.addEventListener('load', () => {
    userNameDisplay.innerText = localStorage.getItem('username')
})