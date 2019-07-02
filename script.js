/* Mudança de cores dos li a
var li = document.getElementById('lista');  //variavel li recebe a 'lista' que é a ul
var h = document.querySelector('li a#html');  //a variavel html recebe o li a html e assim sussetivamente
var c = document.querySelector('li a#css');
var j = document.querySelector('li a#js');
var l = document.querySelector('li a#linux');
var pre = document.querySelector('#preloader')
li.addEventListener("click", function(event) { //adicionando lista de enventos a li, evento click(ou mouseover) que chama a funcao event
    console.log(event.target); //mostrar no console o alvo de click ou seja elementos clicados
    if (event.target === h){  //se o evento for identico a variavel h 
        document.bgColor = "#FF5733"
        document.querySelector('body').classList.add('transition')
        pre.classList.add('bckg');
    }else if (event.target === c){ // se o event for identico a c e assim por diante
        document.bgColor = "#4285F4";
    }else if(event.target === j){
        document.bgColor = "#FBBC05";
    }else if (event.target === l) {
        document.bgColor = "#7B0099";
    }else {
        document.bgColor = "#fff";
    }
})
*/
