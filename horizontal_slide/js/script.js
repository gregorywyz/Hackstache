// doc ready function
document.addEventListener('DOMContentLoaded', function(){

  var slide1 = document.getElementById('slide-1');
  var slide2 = document.getElementById('slide-2');

  slide1.addEventListener('click', function() {
    slide1.classList.add('slide');
    slide2.classList.add('slide');
  });

  slide2.addEventListener('click', function(e) {
    slide1.classList.remove('slide');
    slide2.classList.remove('slide');
  });

}, false);