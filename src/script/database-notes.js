//durabilidade 
var durability = document.getElementById('durability');
var hideDDefinition = document.querySelector('p#durabilityDefinition');

durability.addEventListener('click', function() {
    hideDDefinition.classList.toggle("hide");
})

//isolamento
var isolation = document.getElementById('isolation');
var hideIDefinition = document.querySelector('p#isolationDefinition');

isolation.addEventListener('click', function() {
    hideIDefinition.classList.toggle("hide")
})

//consistencia
var consistency = document.getElementById('consistency')
var hideCDefinition = document.querySelector('p#consistencyDefinition')

consistency.addEventListener('click', function() {
    hideCDefinition.classList.toggle("hide");
})

//atomidade
var atomity = document.getElementById('atomity');
var hideADefinition = document.querySelector('p#atomityDefinition');

atomity.addEventListener('click', function() {
    hideADefinition.classList.toggle("hide");
})