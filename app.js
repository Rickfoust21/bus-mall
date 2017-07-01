'use strict';


function Image(name, path) {
  this.name = name;
  this.path = path;
  this.shown = 0;
  this.clicked = 0;
  images.push(this);
}

var images = [];

var bag = new Image('bag', './assets/bag.jpg');
var bathroom = new Image('bathroom', './assets/bathroom.jpg');
var breakfast = new Image('breakfast', './assets/breakfast.jpg');
var chair = new Image('chair', './assets/chair.jpg');
var dogDuck = new Image('dog-duck', './assets/dog-duck.jpg');
var pen = new Image('pen', './assets/pen.jpg');
var banana = new Image('banana', './assets/banana.jpg');
var boots = new Image('boots', './assets/boots.jpg');
var bubblegum = new Image('bubblegum', './assets/bubblegum.jpg');
var cthulhu = new Image('cthulhu', './assets/cthulhu.jpg');
var dragon = new Image('dragon', './assets/dragon.jpg');
var petSweep = new Image('pet-sweep', './assets/pet-sweep.jpg');
var scissors = new Image('scissors', './assets/scissors.jpg');
var shark = new Image('shark', './assets/shark.jpg');
var sweep = new Image('sweep', './assets/sweep.png');
var tauntaun = new Image('tauntaun', './assets/tauntaun.jpg');
var unicorn = new Image('unicorn', './assets/unicorn.jpg');
var usb = new Image('usb', './assets/usb.gif');
var watercan = new Image('watercan', './assets/water-can.jpg');
var wineGlass = new Image('wineGlass', './assets/wine-glass.jpg');

console.log(images);


//generate three numbers randomly

function picPicker() {
  var random =   Math.floor(Math.random() * (images.length - 1));
  console.log(random);
  var random2 =  Math.floor(Math.random() * (images.length - 1));
  console.log(random2);
  var random3 =   Math.floor(Math.random() * (images.length - 1));
  console.log(random3);
  return [random, random2, random3];
}
// picPicker();

//store each random number

//take randomly generated numbers and push into an array.
function randomPictures() {
  var selected = picPicker();
  console.log(selected);

  var img1 =  document.getElementById('first-image');
  img1.setAttribute('src', images[selected[0]].path);
  img1.setAttribute('name', images[selected[0]].name);
  images[selected[0]].shown++;


  var img2 =  document.getElementById('second-image');
  img2.setAttribute('src', images[selected[1]].path);
  img2.setAttribute('name', images[selected[1]].name);
  images[selected[1]].shown++;

  var img3 =  document.getElementById('third-image');
  //var img3 = document.createElement('img');
  img3.setAttribute('src', images[selected[2]].path);
  img3.setAttribute('name', images[selected[2]].name);
  images[selected[2]].shown++;
}
randomPictures();
//randomPictures should run every time any picture is clicked on
//make function to store randomPictures and a click event
function addEvent(event) {
  console.log(event.target.name);
  var targetVar = event.target.name;
  for (var i = 0; i < images.length; i++) {
    var currentImage = images[i].name;

    if (currentImage === targetVar) {
      images[i].clicked++;
      randomPictures();
      console.log(images[i]);
    }else{
    }
  }
}
var clickEl = document.getElementById('first-image');
clickEl.addEventListener('click', addEvent);

var clickEl2 = document.getElementById('second-image');
clickEl2.addEventListener('click', addEvent);

var clickEl3 = document.getElementById('third-image');
clickEl3.addEventListener('click', addEvent);



//print three pictures

//track each click

//turn off event listener after 25 clicks
