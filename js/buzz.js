BUZZWORDS = [
  "full-stack developer",
  "front-end developer",
  "ruby developer",
  "rails developer",
  "javascript developer",
  "node.js developer",
  "infrastructure developer",
  "test-driven developer",
  "back-end developer",
  "devops developer",
  "python developer",
  "api developer",
  "web developer",
  "go developer",
]

var id = 0;

var init = function() {
  shuffle(BUZZWORDS);
  buzz();
}

var shuffle = function(array) {
  var m = array.length, t, i;
  while (m) {
    i = Math.floor(Math.random() * m--);
    t = array[m];
    array[m] = array[i];
    array[i] = t;
  }
}

var buzz = function() {
  var grey = "<span style=\"color: grey;\">",
      span = "</span>";
  document.getElementById("tag").innerHTML = grey + BUZZWORDS[id] + span;

  if (id === BUZZWORDS.length - 1) {
    shuffle(BUZZWORDS);
    id = 0;
  } else {
    id++;
  }
}
