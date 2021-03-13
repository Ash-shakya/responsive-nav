const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');


    burger.addEventListener('click', () => {
         // toggle Nav
        nav.classList.toggle('nav-active');

        // Animate links
         navLinks.forEach((link, index) => {
            // console.log(index);
            if(link.style.animation){
                link.style.animation = '';
            }else {
            link.style.animation = `navLinkFade 0.5s ease forwards ${index / 5 + 0.5}s`;
            // console.log(index/5);
            }
        });
        //burger animation
        burger.classList.toggle('toggle');
    });

}
// const app = ()=> {
// // if u have multiple functions call here
// navSlide();
// }

// app();

navSlide();