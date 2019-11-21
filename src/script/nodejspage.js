const header = document.querySelector('header#header');

// document.body.onscroll = function headerToWhite() {
//   header.classList.remove('node-background')
// }

document.body.onscroll = () => {
  if (window.pageYOffset > 100) {
    header.classList.remove('node-background')
  }
  if (window.pageYOffset < 100) {
    header.classList.add('node-background')
  }
}

let menu = document.getElementById('btn-open-menu');
menu.onclick = () => {
  header.classList.remove('node-background')
}