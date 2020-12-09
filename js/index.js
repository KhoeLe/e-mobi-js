const navOpen = document.querySelector(".nav__hamburger")
const navClose = document.querySelector(".close__toggle")
const menu = document.querySelector(".nav__menu")
const navContainer = document.querySelector(".nav__menu")


navOpen.addEventListener("click",function () {
    menu.classList.add("open");
    document.body.classList.add('active');
    navContainer.style.left = '0'
    navContainer.style.width = '30rem'
})

navClose.addEventListener("click",function () {
    menu.classList.remove("open");
    document.body.classList.remove('active');
    navContainer.style.left = '-30rem'
    navContainer.style.width = '0'
})




// pop up

const popup = document.querySelector(".popup")
const popupClose = document.querySelector(".popup__close")

if(popup){
    popupClose.addEventListener('click', (e) =>{
        popup.classList.add('hide__popup') // add style css hide__popup
        console.log(e.target)
    })

    window.addEventListener('load',  () =>{
        popup.classList.remove('hide__popup') // remove style css hide__popup
    })
}


//fixed navigation

// const scrollLink = document.querySelectorAll('.scroll-link');
const gotoTop = document.querySelector('.goto-top')
