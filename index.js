"use strict";

var _templateObject = _taggedTemplateLiteral(["title"], ["title"]),
    _templateObject2 = _taggedTemplateLiteral(["toggleTitle"], ["toggleTitle"]);

var _cerebral = require("cerebral");

var _cerebral2 = _interopRequireDefault(_cerebral);

var _main = require("./main");

var _main2 = _interopRequireDefault(_main);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var app = (0, _cerebral2.default)(_main2.default);

/*
    A little demo showing how Cerebral works
    manually updating a view. Please install
    the view package of your choice to get
    an integrated API for updating the UI
*/
var h1 = document.querySelector("h1");

function update() {
  h1.innerHTML = app.get((0, _cerebral.state)(_templateObject));
}

app.on("flush", update);

update();

h1.addEventListener("click", function () {
  var toggleTitle = app.get((0, _cerebral.sequences)(_templateObject2));

  toggleTitle();
});