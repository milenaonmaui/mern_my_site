"use strict";

var continents = ['Africa', 'America', 'Australia', 'New Zealand', 'Europe', 'Asia'];
var helloContinents = Array.from(continents, function (c) {
  return "Hello, ".concat(c, "!");
});
var message = helloContinents.join(' ');
var element = React.createElement("div", {
  title: "Outer div"
}, "\xA0\xA0\xA0\xA0", React.createElement("h1", null, message), "\xA0\xA0");
ReactDOM.render(element, document.getElementById('contents'));