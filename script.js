document.getElementById("li-germanium-dioxide").onmouseover = function() {mouseOver()};
document.getElementById("li-germanium-dioxide").onmouseout = function() {mouseOut()};

function mouseOver() {
  return document.getElementById("img-dioxide").classList.toggle('active');
}

function mouseOut() {
  document.getElementById("img-dioxide").classList.remove('active');
};



document.getElementById("li-germanium").onmouseover = function() {mouseOver()};
document.getElementById("li-germanium").onmouseout = function() {mouseOut()};

function mouseOver() {
  return document.getElementById("img-germanium").classList.toggle('active');
}

function mouseOut() {
  document.getElementById("img-germanium").classList.remove('active');
}


var eye = document.getElementById('eye');
  if(window.screen.width>=1024){
    document.addEventListener('mousemove', function(e){
      var x = e.clientY;
      var y = e.clientX;
      eye.style.left = x + "px";
      eye.style.top = y + "px";
    });
}


function openAbout() {

  document.getElementById("about-us").classList.toggle('active');
  document.getElementById("li-about").classList.toggle('active');
  document.getElementById('rotate').classList.toggle('forward');


}

function closeAbout() {

  document.getElementById("about-us").classList.remove('active');
  document.getElementById("li-about").classList.remove('active');
  document.getElementById('rotate').classList.remove('forward');

}



function openGermanium() {

  document.getElementById("germanium").classList.toggle('active');
  document.getElementById("li-germanium").classList.toggle('active');
  document.getElementById('rotate').classList.toggle('forward');

}

function closeGermanium() {

  document.getElementById("germanium").classList.remove('active');
  document.getElementById("li-germanium").classList.remove('active');
  document.getElementById('rotate').classList.remove('forward');

}



function openGermaniumGranules() {

  document.getElementById("germanium-granules").classList.toggle('active');
  document.getElementById("li-germanium-granules").classList.toggle('active');
  document.getElementById('rotate').classList.toggle('forward');

}

function closeGermaniumGranules() {

  document.getElementById("germanium-granules").classList.remove('active');
  document.getElementById("li-germanium-granules").classList.remove('active');
  document.getElementById('rotate').classList.remove('forward');

}


function openGermaniumOptics() {

  document.getElementById("germanium-optics").classList.toggle('active');
  document.getElementById("li-germanium-optics").classList.toggle('active');
  document.getElementById('rotate').classList.toggle('forward');

}

function closeGermaniumOptics() {

  document.getElementById("germanium-optics").classList.remove('active');
  document.getElementById("li-germanium-optics").classList.remove('active');
  document.getElementById('rotate').classList.remove('forward');

}


function openGermaniumDioxide() {

  document.getElementById("germanium-dioxide").classList.toggle('active');
  document.getElementById("li-germanium-dioxide").classList.toggle('active');
  document.getElementById('rotate').classList.toggle('forward');

}

function closeGermaniumDioxide() {

  document.getElementById("germanium-dioxide").classList.remove('active');
  document.getElementById("li-germanium-dioxide").classList.remove('active');
  document.getElementById('rotate').classList.remove('forward');

}



function openPolycrystallineGermanium() {

  document.getElementById("polycrystalline-germanium").classList.toggle('active');
  document.getElementById("li-polycrystalline-germanium").classList.toggle('active');
  document.getElementById('rotate').classList.toggle('forward');

}

function closePolycrystallineGermanium() {

  document.getElementById("polycrystalline-germanium").classList.remove('active');
  document.getElementById("li-polycrystalline-germanium").classList.remove('active');
  document.getElementById('rotate').classList.remove('forward');

}


function openSilicon() {

  document.getElementById("silicon").classList.toggle('active');
  document.getElementById("li-silicon").classList.toggle('active');
  document.getElementById('rotate').classList.toggle('forward');

}

function closeSilicon() {

  document.getElementById("silicon").classList.remove('active');
  document.getElementById("li-silicon").classList.remove('active');
  document.getElementById('rotate').classList.remove('forward');

}



function openZincSalenide() {

  document.getElementById("zinc-selenide").classList.toggle('active');
  document.getElementById("li-zinc-selenide").classList.toggle('active');
  document.getElementById('rotate').classList.toggle('forward');

}

function closeZincSalenide() {

  document.getElementById("zinc-selenide").classList.remove('active');
  document.getElementById("li-zinc-selenide").classList.remove('active');
  document.getElementById('rotate').classList.remove('forward');

}



function openZincSulfide() {

  document.getElementById("zinc-sulfide").classList.toggle('active');
  document.getElementById("li-zinc-sulfide").classList.toggle('active');
  document.getElementById('rotate').classList.toggle('forward');

}

function closeZincSulfide() {

  document.getElementById("zinc-sulfide").classList.remove('active');
  document.getElementById("li-zinc-sulfide").classList.remove('active');
  document.getElementById('rotate').classList.remove('forward');

}



function openRecycling() {

  document.getElementById("recycling").classList.toggle('active');
  document.getElementById("li-recycling").classList.toggle('active');
  document.getElementById('rotate').classList.toggle('forward');

}

function closeRecycling() {

  document.getElementById("recycling").classList.remove('active');
  document.getElementById("li-recycling").classList.remove('active');
  document.getElementById('rotate').classList.remove('forward');

}
