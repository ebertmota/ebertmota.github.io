//Abertura e fechamento do menu slide
var menuSlide = document.querySelector('.menuDiv');
menuSlide.style.left = "-350px";
var btn = document.getElementById('openMenu');
btn.onclick = function () {    
    if (menuSlide.style.left = "-350px"){
        menuSlide.style.left = "0px";
    }else if (menuSlide.style.left == "0px"){
        alert('OI')
    }
}