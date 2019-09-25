"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(["title"], ["title"]);

var _cerebral = require("cerebral");

var _factories = require("cerebral/factories");

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

exports.default = {
  state: {
    title: "Hello from Cerebral"
  },
  sequences: {
    toggleTitle: [(0, _factories.set)((0, _cerebral.state)(_templateObject), "You toggled me!")]
  }
};