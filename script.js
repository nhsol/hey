

document.getElementById("li").onmouseover = function() {mouseOver()};
document.getElementById("li").onmouseout = function() {mouseOut()};

function mouseOver() {

  document.getElementById("germanium").style.opacity = '1';
}

function mouseOut() {
  document.getElementById("germanium").style.opacity = '0';
}


function openAbout() {

  document.getElementById("about-us").classList.toggle('active');
  document.getElementById("li").classList.toggle('active');
  document.getElementById("germanium").classList.toggle('active');
  return mouseOver();

}


function closeAbout() {

  document.getElementById("about-us").classList.remove('active');
  document.getElementById("li").classList.remove('active');
  document.getElementById("germanium").classList.remove('active')

}
