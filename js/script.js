const bars = document.querySelector(".fa-bars");
const navLogo = document.querySelector(".nav__logo");
const navAAA = document.querySelectorAll(" .nav__logo a")

bars.addEventListener("click", () =>{
    navLogo.classList.toggle ("hide");

})
navLogo.addEventListener("click", (Event) =>{
    Event.target
    navAAA.forEach((item) =>{
        if(Event.target  == item){
            setTimeout(() =>{
                navLogo.classList.add('hide');
                navLogo.classList.remove('show');

            }, 700)
        }
    })
})
const loader = document.querySelector(".loader");
setTimeout(() =>{
loader.classList.add("hide")
}, 1000)
 
