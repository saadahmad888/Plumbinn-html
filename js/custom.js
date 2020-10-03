window.onscroll = function() {myFunction()};
        
var navbar = document.getElementById("navbar2");
var setwidth = document.getElementById('setwidth')
var sticky = navbar.offsetTop;

function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
    setwidth.classList.add('container-fluid')
    setwidth.classList.remove('container')

  } else {
    navbar.classList.remove("sticky")
    setwidth.classList.add('container');

  }
}

