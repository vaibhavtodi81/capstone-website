document.addEventListener("DOMContentLoaded", function () {

  var features = document.getElementsByClassName("feature-box");

  for (var i = 0; i < features.length; i++) {
    features[i].onclick = function () {
      alert("You clicked on: " + this.innerText);
    };
  }

  var cards = document.getElementsByClassName("property-card");

  for (var j = 0; j < cards.length; j++) {
    cards[j].onclick = function () {
      var h3 = this.getElementsByTagName("h3")[0];
      if (h3) {
        alert("Property selected: " + h3.innerText);
      } else {
        alert("Property selected");
      }
    };
  }

  var buttons = document.getElementsByClassName("btn");

  for (var k = 0; k < buttons.length; k++) {
    buttons[k].onclick = function (event) {
      event.stopPropagation();
      alert("Button clicked!");
    };
  }

});
