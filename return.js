document.getElementById("li-germanium").onmouseover = function() {mouseOverGermanium()};
document.getElementById("li-germanium").onmouseout = function() {mouseOutGermanium()};

function mouseOverGermanium() {
  document.getElementById("staff").classList.toggle('germanium');
};

function mouseOutGermanium() {
  document.getElementById("staff").classList.remove('germanium');
};


function mouseOverDioxide() {
  document.getElementById("staff").classList.toggle('dioxide');
};

function mouseOutDioxide() {
  document.getElementById("staff").classList.remove('dioxide');
};


function mouseOverGranules() {
  document.getElementById("staff").classList.toggle('granules');
};

function mouseOutGranules() {
  document.getElementById("staff").classList.remove('granules');
};


function mouseOverSilicon() {
  document.getElementById("staff").classList.toggle('silicon');
};

function mouseOutSilicon() {
  document.getElementById("staff").classList.remove('silicon');
};


function mouseOverSelenide() {
  document.getElementById("staff").classList.toggle('selenide');
};

function mouseOutSelenide() {
  document.getElementById("staff").classList.remove('selenide');
};


function mouseOverGpz() {
  document.getElementById("staff").classList.toggle('gpz');
};

function mouseOutGpz() {
  document.getElementById("staff").classList.remove('gpz');
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
