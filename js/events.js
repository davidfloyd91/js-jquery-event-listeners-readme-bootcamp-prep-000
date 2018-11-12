function getIt() {
  $('p').on('click', function() {
    alert('Hey!')
  });
}

function frameIt() {
  $('img').on('load', function() {
    $('img').classList.add('tasty')
});

function pressIt() {
  $('form').on('keydown', function(key) {
    if key = 71 {
      alert('You\'ve pressed G!')
    }
  });
}



$(document).ready(function(){

// call functions here

});
