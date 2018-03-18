var functionBasedDelay = anime({
  targets: 'article',
  translateX: 250,
  direction: 'alternate',
  loop: true,
  delay: function (el, i, l) {
    return 500 + i * 100;
  }
});

var city = [
  "Monaco",
  "Lyon",
  "Paris",
  "Nice",
  "Nantes",
  "Lille",
  "Besançon",
  "Dijon",
  "Annecy",
]

function getValue() {
  var movie = document.getElementById('city').value;
  var answer = document.getElementById('answer');
  console.log(city);
  if (movies.indexOf(city) !== -1) {
    answer.textContent = city + " : Il est génial";
  } else {
    answer.textContent = city + " : Je ne connais pas ce film";
  }

  anime({
    targets: answer,
    translateY: -100,
    opacity: 1,
    direction: 'alternate'
  });
}
