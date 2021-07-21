//to resize icons
let icon = document.querySelector('.fab fa-linkedin fa-2x');


window.onResize = function() {
  if (window.innerWidth >= 1600)
  {
    icon.classList.remove('.fa-2x');
    icon.classList.add('.fa-2xl');
  } 
  else 
  {
    icon.classList.remove('.fa-2xl');
  }
};
