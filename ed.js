const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");
const links = document.querySelectorAll(".nav-links li");

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("open");
  links.forEach(link => {
    link.classList.toggle("fade");
  });
});

window.addEventListener("scroll", () =>{
  const top = document.getElementById("move");
  const ypos = window.pageYOffset;

  if(ypos > 10){
    top.classList.add("nav-colored");
    top.classList.add("yes");
    top.classList.remove("nav-transparent");

  }
  else{
    top.classList.add("nav-transparent");
    top.classList.remove("nav-colored");
    top.classList.remove("yes");

  }
});


