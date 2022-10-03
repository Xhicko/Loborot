let navigation = document.querySelector(".nav")
let ham = document.querySelector(".ham")
ham.addEventListener('click', ()=>{
    navigation.classList.toggle("active")
    ham.classList.toggle("active")
})