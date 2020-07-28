// 
//
//
// document.getElementById("li-germanium-dioxide").onmouseover = function() {mouseOver()};
// document.getElementById("li-germanium-dioxide").onmouseout = function() {mouseOut()};
//
// function mouseOver() {
//   return document.getElementById("img-dioxide").classList.toggle('active');
// }
//
// function mouseOut() {
//   document.getElementById("img-dioxide").classList.remove('active');
// };
//
//
//
// document.getElementById("li-germanium").onmouseover = function() {mouseOver()};
// document.getElementById("li-germanium").onmouseout = function() {mouseOut()};
//
// function mouseOver() {
//   return document.getElementById("img-germanium").classList.toggle('active');
// }
//
// function mouseOut() {
//   document.getElementById("img-germanium").classList.remove('active');
// }


let eye = document.getElementById("eye");

window.addEventListener("mousemove", function (event) {
  let x = (event.clientX / (window.innerWidth * 2)) * 100;
  let y = (event.clientY / (window.innerHeight * 2)) * 100;
  x = Number(x.toFixed(1));
  y = Number(y.toFixed(1));

  console.log(x, y);

  eye.style.left = `${x}%`;
  eye.style.top = `${y}%`;
});



function makeRotate(){
  document.getElementById('rotate').style.animation = "rotate-center 0.5s forwards";
}

function openAbout() {

  document.getElementById("about-us").classList.toggle('active');
  document.getElementById("li-about").classList.toggle('active');


  document.getElementById("germanium").classList.remove('active');
  document.getElementById("li-germanium").classList.remove('active');
  document.getElementById("germanium-granules").classList.remove('active');
  document.getElementById("li-germanium-granules").classList.remove('active');
  document.getElementById("germanium-optics").classList.remove('active');
  document.getElementById("li-germanium-optics").classList.remove('active');
  document.getElementById("germanium-dioxide").classList.remove('active');
  document.getElementById("li-germanium-dioxide").classList.remove('active');
  document.getElementById("polycrystalline-germanium").classList.remove('active');
  document.getElementById("li-polycrystalline-germanium").classList.remove('active');
  document.getElementById("silicon").classList.remove('active');
  document.getElementById("li-silicon").classList.remove('active');
  document.getElementById("zinc-selenide").classList.remove('active');
  document.getElementById("li-zinc-salenide").classList.remove('active');
  document.getElementById("zinc-sulfide").classList.remove('active');
  document.getElementById("li-zinc-sulfide").classList.remove('active');
  document.getElementById("recycling").classList.remove('active');
  document.getElementById("li-recycling").classList.remove('active');





}

function closeAbout() {

  document.getElementById("about-us").classList.remove('active');
  document.getElementById("li-about").classList.remove('active');
  document.getElementById('rotate').classList.toggle('back');

}



function openGermanium() {

  document.getElementById("germanium").classList.toggle('active');
  document.getElementById("li-germanium").classList.toggle('active');


  document.getElementById("about-us").classList.remove('active');
  document.getElementById("li-about").classList.remove('active');
  document.getElementById("germanium-granules").classList.remove('active');
  document.getElementById("li-germanium-granules").classList.remove('active');
  document.getElementById("germanium-optics").classList.remove('active');
  document.getElementById("li-germanium-optics").classList.remove('active');
  document.getElementById("germanium-dioxide").classList.remove('active');
  document.getElementById("li-germanium-dioxide").classList.remove('active');
  document.getElementById("polycrystalline-germanium").classList.remove('active');
  document.getElementById("li-polycrystalline-germanium").classList.remove('active');
  document.getElementById("silicon").classList.remove('active');
  document.getElementById("li-silicon").classList.remove('active');
  document.getElementById("zinc-selenide").classList.remove('active');
  document.getElementById("li-zinc-salenide").classList.remove('active');
  document.getElementById("zinc-sulfide").classList.remove('active');
  document.getElementById("li-zinc-sulfide").classList.remove('active');
  document.getElementById("recycling").classList.remove('active');
  document.getElementById("li-recycling").classList.remove('active');

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

  document.getElementById("about-us").classList.remove('active');
  document.getElementById("li-about").classList.remove('active');
  document.getElementById("germanium").classList.remove('active');
  document.getElementById("li-germanium").classList.remove('active');
  document.getElementById("germanium-optics").classList.remove('active');
  document.getElementById("li-germanium-optics").classList.remove('active');
  document.getElementById("germanium-dioxide").classList.remove('active');
  document.getElementById("li-germanium-dioxide").classList.remove('active');
  document.getElementById("polycrystalline-germanium").classList.remove('active');
  document.getElementById("li-polycrystalline-germanium").classList.remove('active');
  document.getElementById("silicon").classList.remove('active');
  document.getElementById("li-silicon").classList.remove('active');
  document.getElementById("zinc-selenide").classList.remove('active');
  document.getElementById("li-zinc-salenide").classList.remove('active');
  document.getElementById("zinc-sulfide").classList.remove('active');
  document.getElementById("li-zinc-sulfide").classList.remove('active');
  document.getElementById("recycling").classList.remove('active');
  document.getElementById("li-recycling").classList.remove('active');


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

  document.getElementById("about-us").classList.remove('active');
  document.getElementById("li-about").classList.remove('active');
  document.getElementById("germanium").classList.remove('active');
  document.getElementById("li-germanium").classList.remove('active');
  document.getElementById("germanium-granules").classList.remove('active');
  document.getElementById("li-germanium-granules").classList.remove('active');
  document.getElementById("germanium-dioxide").classList.remove('active');
  document.getElementById("li-germanium-dioxide").classList.remove('active');
  document.getElementById("polycrystalline-germanium").classList.remove('active');
  document.getElementById("li-polycrystalline-germanium").classList.remove('active');
  document.getElementById("silicon").classList.remove('active');
  document.getElementById("li-silicon").classList.remove('active');
  document.getElementById("zinc-selenide").classList.remove('active');
  document.getElementById("li-zinc-salenide").classList.remove('active');
  document.getElementById("zinc-sulfide").classList.remove('active');
  document.getElementById("li-zinc-sulfide").classList.remove('active');
  document.getElementById("recycling").classList.remove('active');
  document.getElementById("li-recycling").classList.remove('active');



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

  document.getElementById("about-us").classList.remove('active');
  document.getElementById("li-about").classList.remove('active');
  document.getElementById("germanium").classList.remove('active');
  document.getElementById("li-germanium").classList.remove('active');
  document.getElementById("germanium-granules").classList.remove('active');
  document.getElementById("li-germanium-granules").classList.remove('active');
  document.getElementById("germanium-optics").classList.remove('active');
  document.getElementById("li-germanium-optics").classList.remove('active');
  document.getElementById("polycrystalline-germanium").classList.remove('active');
  document.getElementById("li-polycrystalline-germanium").classList.remove('active');
  document.getElementById("silicon").classList.remove('active');
  document.getElementById("li-silicon").classList.remove('active');
  document.getElementById("zinc-selenide").classList.remove('active');
  document.getElementById("li-zinc-salenide").classList.remove('active');
  document.getElementById("zinc-sulfide").classList.remove('active');
  document.getElementById("li-zinc-sulfide").classList.remove('active');
  document.getElementById("recycling").classList.remove('active');
  document.getElementById("li-recycling").classList.remove('active');

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

  document.getElementById("about-us").classList.remove('active');
  document.getElementById("li-about").classList.remove('active');
  document.getElementById("germanium").classList.remove('active');
  document.getElementById("li-germanium").classList.remove('active');
  document.getElementById("germanium-granules").classList.remove('active');
  document.getElementById("li-germanium-granules").classList.remove('active');
  document.getElementById("germanium-optics").classList.remove('active');
  document.getElementById("li-germanium-optics").classList.remove('active');
  document.getElementById("germanium-dioxide").classList.remove('active');
  document.getElementById("li-germanium-dioxide").classList.remove('active');
  document.getElementById("silicon").classList.remove('active');
  document.getElementById("li-silicon").classList.remove('active');
  document.getElementById("zinc-selenide").classList.remove('active');
  document.getElementById("li-zinc-salenide").classList.remove('active');
  document.getElementById("zinc-sulfide").classList.remove('active');
  document.getElementById("li-zinc-sulfide").classList.remove('active');
  document.getElementById("recycling").classList.remove('active');
  document.getElementById("li-recycling").classList.remove('active');

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

  document.getElementById("about-us").classList.remove('active');
  document.getElementById("li-about").classList.remove('active');
  document.getElementById("germanium").classList.remove('active');
  document.getElementById("li-germanium").classList.remove('active');
  document.getElementById("germanium-granules").classList.remove('active');
  document.getElementById("li-germanium-granules").classList.remove('active');
  document.getElementById("germanium-optics").classList.remove('active');
  document.getElementById("li-germanium-optics").classList.remove('active');
  document.getElementById("germanium-dioxide").classList.remove('active');
  document.getElementById("li-germanium-dioxide").classList.remove('active');
  document.getElementById("polycrystalline-germanium").classList.remove('active');
  document.getElementById("li-polycrystalline-germanium").classList.remove('active');
  document.getElementById("zinc-selenide").classList.remove('active');
  document.getElementById("li-zinc-salenide").classList.remove('active');
  document.getElementById("zinc-sulfide").classList.remove('active');
  document.getElementById("li-zinc-sulfide").classList.remove('active');
  document.getElementById("recycling").classList.remove('active');
  document.getElementById("li-recycling").classList.remove('active');

}

function closeSilicon() {

  document.getElementById("silicon").classList.remove('active');
  document.getElementById("li-silicon").classList.remove('active');
  document.getElementById('rotate').classList.remove('forward');

}



function openZincSalenide() {

  document.getElementById("zinc-selenide").classList.toggle('active');
  document.getElementById("li-zinc-salenide").classList.toggle('active');
  document.getElementById('rotate').classList.toggle('forward');

  document.getElementById("about-us").classList.remove('active');
  document.getElementById("li-about").classList.remove('active');
  document.getElementById("germanium").classList.remove('active');
  document.getElementById("li-germanium").classList.remove('active');
  document.getElementById("germanium-granules").classList.remove('active');
  document.getElementById("li-germanium-granules").classList.remove('active');
  document.getElementById("germanium-optics").classList.remove('active');
  document.getElementById("li-germanium-optics").classList.remove('active');
  document.getElementById("germanium-dioxide").classList.remove('active');
  document.getElementById("li-germanium-dioxide").classList.remove('active');
  document.getElementById("polycrystalline-germanium").classList.remove('active');
  document.getElementById("li-polycrystalline-germanium").classList.remove('active');
  document.getElementById("silicon").classList.remove('active');
  document.getElementById("li-silicon").classList.remove('active');
  document.getElementById("zinc-sulfide").classList.remove('active');
  document.getElementById("li-zinc-sulfide").classList.remove('active');
  document.getElementById("recycling").classList.remove('active');
  document.getElementById("li-recycling").classList.remove('active');

}

function closeZincSalenide() {

  document.getElementById("zinc-selenide").classList.remove('active');
  document.getElementById("li-zinc-salenide").classList.remove('active');
  document.getElementById('rotate').classList.remove('forward');

}



function openZincSulfide() {

  document.getElementById("zinc-sulfide").classList.toggle('active');
  document.getElementById("li-zinc-sulfide").classList.toggle('active');
  document.getElementById('rotate').classList.toggle('forward');

  document.getElementById("about-us").classList.remove('active');
  document.getElementById("li-about").classList.remove('active');
  document.getElementById("germanium").classList.remove('active');
  document.getElementById("li-germanium").classList.remove('active');
  document.getElementById("germanium-granules").classList.remove('active');
  document.getElementById("li-germanium-granules").classList.remove('active');
  document.getElementById("germanium-optics").classList.remove('active');
  document.getElementById("li-germanium-optics").classList.remove('active');
  document.getElementById("germanium-dioxide").classList.remove('active');
  document.getElementById("li-germanium-dioxide").classList.remove('active');
  document.getElementById("polycrystalline-germanium").classList.remove('active');
  document.getElementById("li-polycrystalline-germanium").classList.remove('active');
  document.getElementById("silicon").classList.remove('active');
  document.getElementById("li-silicon").classList.remove('active');
  document.getElementById("zinc-selenide").classList.remove('active');
  document.getElementById("li-zinc-salenide").classList.remove('active');
  document.getElementById("recycling").classList.remove('active');
  document.getElementById("li-recycling").classList.remove('active');

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

  document.getElementById("about-us").classList.remove('active');
  document.getElementById("li-about").classList.remove('active');
  document.getElementById("germanium").classList.remove('active');
  document.getElementById("li-germanium").classList.remove('active');
  document.getElementById("germanium-granules").classList.remove('active');
  document.getElementById("li-germanium-granules").classList.remove('active');
  document.getElementById("germanium-optics").classList.remove('active');
  document.getElementById("li-germanium-optics").classList.remove('active');
  document.getElementById("germanium-dioxide").classList.remove('active');
  document.getElementById("li-germanium-dioxide").classList.remove('active');
  document.getElementById("polycrystalline-germanium").classList.remove('active');
  document.getElementById("li-polycrystalline-germanium").classList.remove('active');
  document.getElementById("silicon").classList.remove('active');
  document.getElementById("li-silicon").classList.remove('active');
  document.getElementById("zinc-selenide").classList.remove('active');
  document.getElementById("li-zinc-salenide").classList.remove('active');
  document.getElementById("zinc-sulfide").classList.remove('active');
  document.getElementById("li-zinc-sulfide").classList.remove('active');

}

function closeRecycling() {

  document.getElementById("recycling").classList.remove('active');
  document.getElementById("li-recycling").classList.remove('active');
  document.getElementById('rotate').classList.remove('forward');

}
