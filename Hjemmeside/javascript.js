const navSlide = () => {
  const burger = document.querySelector('.burger');
  const nav = document.querySelector('.nav-links');
  const navlinks = document.querySelectorAll('.nav-links li');

  //toggle item
  burger.addEventListener('click', () => {
    nav.classList.toggle('nav-active');

    //Animste links
      navlinks.forEach((link, index) => {
        link.style.animation = `navLinkFade 0.5s ease forward ${index/7}s`;
        console.log{index/7}
    });
    //Burger animation
    burger.classList.toggle('toggle');
    });

}

navSlide();
