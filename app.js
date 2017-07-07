'use strict';


function Image(name, path) {
  this.name = name;
  this.path = path;
  this.shown = 0;
  this.clicked = 0;
  images.push(this);
  //imgPathArray.push(filepath);
  //title.push(name);
  var container = document.getElementById('clickableImage');
  console.log(container);
}
var images = [];

// if(localStorage.data) {
//   allProducts = JSON.parse(localStorage.data);
// } else {
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
  var randomNumber = [];

  while (randomNumber.length < 2) {
    var random = Math.floor(Math.random() * (images.length - 1));
    if (randomNumber.indexOf(random) === -1) {
      randomNumber.push(random);
    }
  }
  return randomNumber;
}
//store each random number

//take randomly generated numbers and push into an array.
function randomPictures() {
  var selected = picPicker();
  console.log(selected);
//print three pictures
  var img1 = document.getElementById('first-image');
  img1.setAttribute('src', images[selected[0]].path);
  img1.setAttribute('name', images[selected[0]].name);
  images[selected[0]].shown++;



  var img2 =  document.getElementById('second-image');
  img2.setAttribute('src', images[selected[1]].path);
  img2.setAttribute('name', images[selected[1]].name);
  images[selected[1]].shown++;


  var img3 =  document.getElementById('third-image');
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
      container.removeEventListener('click', handleClick);
      localStorage.setItem('data', JSON.stringify(allProducts));
    }

  }
}

var clickEl = document.getElementById('first-image');
clickEl.addEventListener('click', addEvent);

var clickEl2 = document.getElementById('second-image');
clickEl2.addEventListener('click', addEvent);

var clickEl3 = document.getElementById('third-image');
clickEl3.addEventListener('click', addEvent);

//turn off event listener after 25 clicks

function handleClick (){
  randomImgGen();
  clicked++;

  var productsArray2 = this.alt;
  images[productsArray2].countClicked++;

  if (clicked >= 25) {
    img1.removeEventListener('click', handleClick);
    img2.removeEventListener('click', handleClick);
    img3.removeEventListener('click', handleClick);

    var picSection = document.getElementById('imagechoices');
    body.removeChild(picSection);
    countClickedArrayPush();
    renderChart();
  }
};

function countClickedArrayPush (){
  for (var i = 0; i < images.length; i++) {
    countClickedArray.push(images[i].countClicked);
    countShownArray.push(images[i].countShown);
  }
};

function handleDisplayListResults(){

  // console.log('inside handleDisplayResults');

  var picList = document.getElementById('pic-list');

  function displayList() {

    // console.log('inside displayList');

    picList.innerHTML = '';

    for (var i = 0; i < allProducts.length; i++) {

      var liEl = document.createElement('li');

      liEl.textContent = allProducts[i].name + ' has been clicked ' + allProducts[i].numberTimesClicked + ' times.';

      picList.appendChild(liEl);



    }

  }

  displayList();

  drawChart();

}
console.log(handleDisplayListResults());
function drawChart(){
  var chartLabel = [];
  var chartData = [];
  for (var i = 0; i < allProducts.length; i++) {
    chartData.push(allProducts[i].numberTimesClicked);
    chartLabel.push(allProducts[i].name);
  }

  var ctx = document.getElementById('myChart').getContext('2d');
  var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: chartLabel,
      datasets: [{
        label: '# of clicks',
        data: chartData,
        backgroundColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)'
        ],
        borderColor: [
          'rgba(255,99,132,1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
          'rgba(255,99,132,1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
          'rgba(255,99,132,1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)'
        ],
        borderWidth: 1
      }]
    },
    options: {
      scales: {
        yAxes: [{
          ticks: {
            beginAtZero: true
          }
        }]
      }

    }

  });
  console.log(myChart);
}


container.addEventListener('click', handleClick);
//myChart();
