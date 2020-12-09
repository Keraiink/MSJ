const navSlide = () => {
  const burger = document.querySelector('.burger');
  const nav = document.querySelector('.nav-links');
  const navlinks = document.querySelectorAll('.nav-links li');

  //toggle item
  burger.addEventListener('click', () => {
    nav.classList.toggle('nav-active');

    //Animste links
      navlinks.forEach((link, index) => {
        if(link.style.animation){
                 link.style.animation = '';
               } else {
                 link.style.animation = `navLinkFade 0.5s ease forwards ${index/5+0.5}s`;
               }
    });
    //Burger animation
    burger.classList.toggle('toggle');
    });

}

navSlide();
