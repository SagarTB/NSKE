//same as document.addEventListener("DOMContentLoaded")
$(function(){
  //same as document.querySelector("#navbarToggle").addEventListener("blur")
  $("#navbarToggle").blur(function(event){
    var screenwidth = window.innerWidth;
    if (screenwidth<768) {
      $("#collapsable-nav").collapse('hide');
    }
  });
});
