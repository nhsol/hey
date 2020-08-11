
var content = document.getElementById("rotate");
var elementsArray = document.querySelectorAll("#li-about, #li-germanium, #li-germanium-granules, #li-germanium-optics, #li-germanium-dioxide, #li-polycrystalline-germanium, #li-silicon, #li-zinc-salenide, #li-zinc-sulfide, #li-recycling");
var rot = 360;
elementsArray.forEach(function(elem){
  elem.addEventListener("click", function() {
    content.style = 'transform: rotate(' + rot + 'deg)';
    rot += 360;
  });
});


let eye = document.getElementById("eye");
 if(window.screen.width>=1024){
   window.addEventListener("mousemove", function (event) {
     let x = (event.clientX / (window.innerWidth * 2)) * 100;
     let y = (event.clientY / (window.innerHeight * 2)) * 100;
     x = Number(x.toFixed(1));
     y = Number(y.toFixed(1));

     console.log(x, y);

     eye.style.left = `${x}%`;
     eye.style.top = `${y}%`;
   });
 }


function openAbout() {
  document.getElementById("about-us").classList.toggle('active');
  document.getElementById("li-about").classList.toggle('active');
  if(window.screen.width<=768){
    document.body.style.overflow = "hidden";
  };




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
  document.getElementById("contact-us").classList.remove('active');
  document.getElementById("li-contact-us").classList.remove('active');


}

function closeAbout() {

  document.getElementById("about-us").classList.remove('active');
  document.getElementById("li-about").classList.remove('active');
  if(window.screen.width<=768){
    document.body.style.overflow = "visible";
  };

}



function openGermanium() {

  document.getElementById("germanium").classList.toggle('active');
  document.getElementById("li-germanium").classList.toggle('active');
  if(window.screen.width<=768){
    document.body.style.overflow = "hidden";
  };


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
  document.getElementById("contact-us").classList.remove('active');
  document.getElementById("li-contact-us").classList.remove('active');

}

function closeGermanium() {

  document.getElementById("germanium").classList.remove('active');
  document.getElementById("li-germanium").classList.remove('active');
  if(window.screen.width<=768){
    document.body.style.overflow = "visible";
  };

}



function openGermaniumGranules() {

  document.getElementById("germanium-granules").classList.toggle('active');
  document.getElementById("li-germanium-granules").classList.toggle('active');
  if(window.screen.width<=768){
    document.body.style.overflow = "hidden";
  };

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
  document.getElementById("contact-us").classList.remove('active');
  document.getElementById("li-contact-us").classList.remove('active');

}

function closeGermaniumGranules() {

  document.getElementById("germanium-granules").classList.remove('active');
  document.getElementById("li-germanium-granules").classList.remove('active');
  if(window.screen.width<=768){
    document.body.style.overflow = "visible";
  };

}


function openGermaniumOptics() {

  document.getElementById("germanium-optics").classList.toggle('active');
  document.getElementById("li-germanium-optics").classList.toggle('active');


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
  document.getElementById("contact-us").classList.remove('active');
  document.getElementById("li-contact-us").classList.remove('active');



}

function closeGermaniumOptics() {

  document.getElementById("germanium-optics").classList.remove('active');
  document.getElementById("li-germanium-optics").classList.remove('active');
  if(window.screen.width<=768){
    document.body.style.overflow = "visible";
  };

}


function openGermaniumDioxide() {

  document.getElementById("germanium-dioxide").classList.toggle('active');
  document.getElementById("li-germanium-dioxide").classList.toggle('active');
  if(window.screen.width<=768){
    document.body.style.overflow = "hidden";
  };


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
  document.getElementById("contact-us").classList.remove('active');
  document.getElementById("li-contact-us").classList.remove('active');

}

function closeGermaniumDioxide() {

  document.getElementById("germanium-dioxide").classList.remove('active');
  document.getElementById("li-germanium-dioxide").classList.remove('active');
  if(window.screen.width<=768){
    document.body.style.overflow = "visible";
  };

}



function openPolycrystallineGermanium() {

  document.getElementById("polycrystalline-germanium").classList.toggle('active');
  document.getElementById("li-polycrystalline-germanium").classList.toggle('active');
  if(window.screen.width<=768){
    document.body.style.overflow = "hidden";
  };

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
  document.getElementById("contact-us").classList.remove('active');
  document.getElementById("li-contact-us").classList.remove('active');

}

function closePolycrystallineGermanium() {

  document.getElementById("polycrystalline-germanium").classList.remove('active');
  document.getElementById("li-polycrystalline-germanium").classList.remove('active');
  if(window.screen.width<=768){
    document.body.style.overflow = "visible";
  };

}


function openSilicon() {

  document.getElementById("silicon").classList.toggle('active');
  document.getElementById("li-silicon").classList.toggle('active');
  if(window.screen.width<=768){
    document.body.style.overflow = "hidden";
  };

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
  document.getElementById("contact-us").classList.remove('active');
  document.getElementById("li-contact-us").classList.remove('active');

}

function closeSilicon() {

  document.getElementById("silicon").classList.remove('active');
  document.getElementById("li-silicon").classList.remove('active');
  if(window.screen.width<=768){
    document.body.style.overflow = "visible";
  };

}



function openZincSalenide() {

  document.getElementById("zinc-selenide").classList.toggle('active');
  document.getElementById("li-zinc-salenide").classList.toggle('active');
  if(window.screen.width<=768){
    document.body.style.overflow = "hidden";
  };

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
  document.getElementById("contact-us").classList.remove('active');
  document.getElementById("li-contact-us").classList.remove('active');

}

function closeZincSalenide() {

  document.getElementById("zinc-selenide").classList.remove('active');
  document.getElementById("li-zinc-salenide").classList.remove('active');
  if(window.screen.width<=768){
    document.body.style.overflow = "visible";
  };

}



function openZincSulfide() {

  document.getElementById("zinc-sulfide").classList.toggle('active');
  document.getElementById("li-zinc-sulfide").classList.toggle('active');
  if(window.screen.width<=768){
    document.body.style.overflow = "hidden";
  };

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
  document.getElementById("contact-us").classList.remove('active');
  document.getElementById("li-contact-us").classList.remove('active');

}

function closeZincSulfide() {

  document.getElementById("zinc-sulfide").classList.remove('active');
  document.getElementById("li-zinc-sulfide").classList.remove('active');
  if(window.screen.width<=768){
    document.body.style.overflow = "visible";
  };

}



function openRecycling() {

  document.getElementById("recycling").classList.toggle('active');
  document.getElementById("li-recycling").classList.toggle('active');
  if(window.screen.width<=768){
    document.body.style.overflow = "hidden";
  };


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
  document.getElementById("contact-us").classList.remove('active');
  document.getElementById("li-contact-us").classList.remove('active');

}

function closeRecycling() {

  document.getElementById("recycling").classList.remove('active');
  document.getElementById("li-recycling").classList.remove('active');
  if(window.screen.width<=768){
    document.body.style.overflow = "visible";
  };

}





function openContactUs() {

  document.getElementById("contact-us").classList.toggle('active');
  document.getElementById("li-contact-us").classList.toggle('active');
  if(window.screen.width<=768){
    document.body.style.overflow = "hidden";
  };


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
  document.getElementById("recycling").classList.remove('active');
  document.getElementById("li-recycling").classList.remove('active');

}

function closeContactUs() {

  document.getElementById("contact-us").classList.remove('active');
  document.getElementById("li-contact-us").classList.remove('active');
  if(window.screen.width<=768){
    document.body.style.overflow = "visible";
  };

}
