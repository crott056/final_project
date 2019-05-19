$(document).ready(function() {
  var audio1 = document.createElement('audio');
      audio1.setAttribute('src', 'sounds/altruism_pronounciation.mp3');
  $('.sound').click(function() {
      audio1.play();
  });
  $('.sound').dblclick(function() {
      audio1.pause();
  });
});
