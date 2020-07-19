
let is-about = document.querySelector('is-about')

is-about.onclick = openAbout

function openAbout() {
  document.getElementById("about").classList.toggle('active');
}
