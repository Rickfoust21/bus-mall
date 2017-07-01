'use strict';
var firstImageEl = getElementsByClassName('first-image')[0];


function Image(name, path) {
  this.name = name;
  this.path = path;
  this.shown = 0;
  this.clicked = 0;
}

var images = [
  new Image
]

var bag = new Image('bag', './asset/bag.jpg');
