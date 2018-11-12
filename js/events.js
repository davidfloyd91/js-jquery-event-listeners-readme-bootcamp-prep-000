function getIt() {
  $('p').on('click', function() {
    alert('Hey!');
    return;
  });
}

function frameIt() {
  $('img').on('load', function() {
    $('img').classList.add('tasty')
});

function pressIt() {
  $('form').on('keydown', function(key) {
    if (key.which == 71) {
      alert('You\'ve pressed G!')
    }
  });
}

function submitIt() {
  $('form').on('submit', function() {
    alert('Your form is going to be submitted now.')
  });
}

$(document).ready(function(){
  return window.getIt();
  frameIt();
  pressIt();
  submitIt();
});
