                    //NOTA 1
//verificar se a nota foi salva
if (localStorage.nota1) {
    document.getElementById('textarea1').value = localStorage.nota1;
}
//botão salvar
function salvarNota1() {
    const textarea1 = document.getElementById('textarea1').value;
    localStorage.setItem('nota1', textarea1);
}

//botão excluir
function excluirNota1() {
    localStorage.removeItem('nota1');
    document.getElementById('textarea1').value = "";
}

                    //NOTA 2
//verificar se a nota foi salva
if (localStorage.nota2) {
    document.getElementById('textarea2').value = localStorage.nota2;
}
//botão salvar
function salvarNota2() {
    const textarea2 = document.getElementById('textarea2').value;
    localStorage.setItem('nota2', textarea2);
}

//botão excluir
function excluirNota2() {
    localStorage.removeItem('nota2');
    document.getElementById('textarea2').value = "";
}


                    //NOTA 3 
//verificar se a nota foi salva
if (localStorage.nota3) {
    document.getElementById('textarea3').value = localStorage.nota3;
}

//botão salvar
function salvarNota3(){
    const textarea3 = document.getElementById('textarea3').value;
    localStorage.setItem('nota3', textarea3)
}
function excluirNota3() {
    localStorage.removeItem('nota3');
    document.getElementById('textarea3').value = "";
}

                    //NOTA 4

///verificar se a nota foi salva
if (localStorage.nota4){
    document.getElementById('textarea4').value = localStorage.nota4;
}

//salvar nota
function salvarNota4() {
    const textarea4 = document.getElementById('textarea4').value;
    localStorage.setItem('nota4' , textarea4)
}

//excluir nota
function excluirNota4() {
    localStorage.removeItem('nota4')
    document.getElementById('textarea4').value = "";
}

                    //NOTA 5

//verificar se a nota foi salva
if (localStorage.nota5) {
    document.getElementById('textarea5').value = localStorage.nota5;
}

//salvar a nota
function salvarNota5() {
    const textarea5 = document.getElementById('textarea5').value;
    localStorage.setItem('nota5', textarea5);
}

//excluir a nota
function excluirNota5() {
    localStorage.removeItem('nota5');
    document.getElementById('textarea5').value = "";
}

                    //NOTA 6
//verificar se a nota foi salva
if (localStorage.nota6){
    document.getElementById('textarea6').value = localStorage.nota6;
}

//salvar a nota
function salvarNota6() {
    const textarea6 = document.getElementById('textarea6').value;
    localStorage.setItem('nota6', textarea6);
}
 
//excluir nota
function excluirNota6() {
    localStorage.removeItem('nota6');
    document.getElementById('textarea6').value = "";
}
