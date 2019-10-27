const noteContainer = document.querySelector('.note-conteiner');

//variavel usada no gerador de Id para cada textarea
let id = 0

//procura suas notas salvas se não encontrar exibe um exemplo
var noteStorage = JSON.parse(localStorage.getItem('notes'))  || ['Anote aqui...'];


function renderNotes() {

  
  if (noteStorage == ""){
    setTimeout( () => {
      noteStorage = ["Dont live me alone baby...."];
      renderNotes()
    },4000)
  }

  //apaga todo conteudo para reconstruir
  noteContainer.innerHTML = '';
  
  //para cada item de noteStorage...
  for (notes of noteStorage){
    newNote();
    let textarea = document.getElementById(id);
    textarea.value = notes;
    
  }
}

//assim que o documento carregar chama o renderNotes
document.body.onload = renderNotes();

function newNote() {
  //chama o gerador de Id para cada Elemento ter uma primary Key
  idGenerator();

  //criaçao de elemntos/append childs 

  let divElement = document.createElement('div');
  divElement.setAttribute('class', 'note-box');
  

  let textareaElement = document.createElement('textarea');
  textareaElement.setAttribute('id', id);
  textareaElement.setAttribute('class', 'note-text');
  

  let divButton = document.createElement('div');
  divButton.setAttribute('class', 'note-buttons')


  let colorSwitch = document.createElement('button');
  colorSwitch.setAttribute('class', 'submitButton');
  let colorSwitchIcon = document.createElement('i');
  colorSwitchIcon.setAttribute('class', 'fas fa-palette')
  colorSwitch.appendChild(colorSwitchIcon)

  
  var pos = noteStorage.indexOf(notes);
  

  let saveBtn = document.createElement('button');
  saveBtn.setAttribute('onclick', `saveNote(${pos})`);
  saveBtn.setAttribute('class', 'submitButton');
  let saveI = document.createElement('i');
  saveI.setAttribute('class', 'far fa-save');
  saveBtn.appendChild(saveI);


  let deleteBtn = document.createElement('button');
  deleteBtn.setAttribute('onclick', 'deleteNote()');
  deleteBtn.setAttribute('class', 'submitButton');
  let deleteI = document.createElement('i');
  deleteI.setAttribute('class', 'far fa-trash-alt');
  deleteBtn.appendChild(deleteI);
  deleteBtn.setAttribute('onclick', `deleteNote(${pos})`);


  noteContainer.appendChild(divElement);
  divElement.appendChild(textareaElement)
  divElement.appendChild(divButton);
  divButton.appendChild(colorSwitch);
  divButton.appendChild(saveBtn);
  divButton.appendChild(deleteBtn);

}

// quando o botao 'Adicionar Nota +' for clicado

function addNote() {
  noteStorage.push('')
  saveToStorage();
  newNote();
  renderNotes();
}


function saveNote(pos) {
  let textarea = document.getElementById(id);
  //subistitue na posicao do elemento o valor antigo pelo atual EDITANDO a nota
  noteStorage.splice(pos, 1,textarea.value);
  renderNotes();
  saveToStorage();

}

function deleteNote(pos) {
  //deleta a Nota atual do deleteBtn
  noteStorage.splice(pos, 1);
  renderNotes();
  saveToStorage();
}

function saveToStorage() {
  //salva em string todo conteudo do array de notas
  localStorage.setItem('notes', JSON.stringify(noteStorage));
}


function idGenerator(){
  let timeStamp = new Date();
  id = timeStamp.getDate().toString() +
       timeStamp.getHours().toString() +
       timeStamp.getMinutes().toString() +
       timeStamp.getSeconds().toString() +
       timeStamp.getMilliseconds().toString();
} 
