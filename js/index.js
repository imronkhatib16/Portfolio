window.onscroll = function() {myFunction()};

var nav = document.getElementById("nav");
var button = document.getElementById("headerButton");
var fixedBar = nav.offsetTop;

function myFunction() {
  if (window.pageYOffset > fixedBar) {
  	// console.log('added fixed-bar')
    nav.classList.add("fixed-bar")
    button.classList.add("btn-small-light")
    button.classList.remove("btn-small-dark");
  } else {
  	// console.log('removed fixed-bar')
    nav.classList.remove("fixed-bar");
    button.classList.add("btn-small-dark")
    button.classList.remove("btn-small-light");
  }
}