//Abertura e fechamento do menu slide
const $menu = document.querySelector('.menuDiv');  //const da div do menu slide
const $btnMenuOpenAndClose = document.getElementById('btn-open-menu');  //cosntante do botão que abre e fecha a div
$btnMenuOpenAndClose.addEventListener('click',function() {      //quando $btnMenuOpenAndClose for clicado a função sera executada
    $menu.classList.toggle("menuDiv-open");                     //a div $menu vai trocar de classe a cada clique;
})

//funcionamento dos botoes das notas
var textarea = document.getElementById('textarea')
var contentNote = [];
//button salvar
function salvar() {
    contentNote = textarea.value;
    console.log(contentNote)
}


//button excluir
function reset() {
    textarea.value = "";
}