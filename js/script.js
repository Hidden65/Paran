const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");
const links = document.querySelectorAll(".nav-links li");

hamburger.addEventListener('click', ()=>{
   //Animate Links
    navLinks.classList.toggle("open");
    links.forEach(link => {
        link.classList.toggle("fade");
    });

    //Hamburger Animation
    hamburger.classList.toggle("toggle");
});

const button = document.querySelector(".dropdown button");

button.addEventListener("click", async (e) => {
  let overlay;

  let left = e.clientX - button.getBoundingClientRect().left;
  let top = e.clientY - button.getBoundingClientRect().y;
  overlay = document.createElement("span");
  overlay.style.cssText = `
  height: 450px;
	width: 450px;
	position: absolute;
	top: ${top}px;
	left: ${left}px;
	transform: translate(-50%, -50%) scale(0);
	background-color: rgba(220, 20, 60, 0.377);
	border-radius: 50%;
  z-index: -1;
  animation: button_animation 1s ease;
	animation-iteration-count: 1;
  `;
  overlay.addEventListener("animationend", (e) => {
    e.target.remove();
  });
  button.appendChild(overlay);
  console.log(left);
});

