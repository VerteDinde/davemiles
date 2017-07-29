'use strict';

var form = document.querySelector('form');
form.addEventListener('submit', function processFormData(){
  event.preventDefault();
  var response = '';
  var miles = event.target;

  if (miles <= 3) {
    response = 'You\'re probably hiking 3 miles today. Dave\'s pretty reliable with that distance.';
  } else if (3.1 <= miles <= 9) {
    response = 'You\'re probably hiking closer to 12 miles today. Bring some water.';
  } else if ( 9.1 <= miles <= 13) {
    response = 'Oh geez, you\'re probably hiking around 16 miles today. Make sure you bring food.';
  } else if (13.1 <= miles) {
    response = 'Wow, you\'re a sadist. Looks like you\'re doing 20,000,000 miles today. God speed.';
  } else {
    response = 'Did you enter a number of miles? I don\'t think those are miles.';
  }

  //print response to DOM
  var feedback = document.getElementById('feedback');
  feedback.textContent = response;
});