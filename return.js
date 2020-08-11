function mouseOverThermal(){

  document.querySelector("*").classList.toggle('thermal');

};

function mouseOutThermal() {

  document.querySelector("*").classList.remove('thermal');
};

function mouseOverNight(){

  document.querySelector("*").classList.toggle('night');

};

function mouseOutNight() {

  document.querySelector("*").classList.remove('night');
};

function mouseOverLight(){

  document.querySelector("*").classList.toggle('other');

};

function mouseOutLight() {

  document.querySelector("*").classList.remove('other');
};





document.getElementById("li-germanium").onmouseover = function() {mouseOverGermanium()};
document.getElementById("li-germanium").onmouseout = function() {mouseOutGermanium()};

function mouseOverGermanium() {
  if(window.screen.width>=1024){
    document.getElementById("staff").classList.toggle('germanium');
  }
};

function mouseOutGermanium() {
  if(window.screen.width>=1024){
    document.getElementById("staff").classList.remove('germanium');
  }
};


function mouseOverDioxide() {
  if(window.screen.width>=1024){
    document.getElementById("staff").classList.toggle('dioxide');
  }
};

function mouseOutDioxide() {
  if(window.screen.width>=1024){
    document.getElementById("staff").classList.remove('dioxide');
  }
};


function mouseOverGranules() {
  if(window.screen.width>=1024){
    document.getElementById("staff").classList.toggle('granules');
  }
};

function mouseOutGranules() {
  if(window.screen.width>=1024){
    document.getElementById("staff").classList.remove('granules');
  }
};


function mouseOverSilicon() {
  if(window.screen.width>=1024){
    document.getElementById("staff").classList.toggle('silicon');
  }
};

function mouseOutSilicon() {
  if(window.screen.width>=1024){
    document.getElementById("staff").classList.remove('silicon');
  }
};


function mouseOverSelenide() {
  if(window.screen.width>=1024){
    document.getElementById("staff").classList.toggle('selenide');
  }
};

function mouseOutSelenide() {
  if(window.screen.width>=1024){
    document.getElementById("staff").classList.remove('selenide');
  }
};


function mouseOverGpz() {
  if(window.screen.width>=1024){
    document.getElementById("staff").classList.toggle('gpz');
  }
};

function mouseOutGpz() {
  if(window.screen.width>=1024){
    document.getElementById("staff").classList.remove('gpz');
  }
};



// var eye = document.getElementById('eye');
//   if(window.screen.width>=1024){
//     document.addEventListener('mousemove', function(e){
//       var x = e.clientY;
//       var y = e.clientX;
//       eye.style.left = x + "px";
//       eye.style.top = y + "px";
//     });
// };
