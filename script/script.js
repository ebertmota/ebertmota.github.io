//Abertura e fechamento do menu slide
const $menu = document.querySelector('.menuDiv');  //const da div do menu slide
const $btnMenuOpenAndClose = document.getElementById('btn-open-menu');  //cosntante do botão que abre e fecha a div
$btnMenuOpenAndClose.addEventListener('click',function() {      //quando $btnMenuOpenAndClose for clicado a função sera executada
    $menu.classList.toggle("menuDiv-open");                     //a div $menu vai trocar de classe a cada clique;
})

document.addEventListener('keydown', (event) => {
    const keyName = event.key;
    console.log('key: '+ keyName);
    console.log('keyCode: ' + event.which)
}); 


    //AQUI ACONTECE A MAGICA 
var TRange = null

function findString (str)
 {
  if (parseInt(navigator.appVersion) < 4) return

  let strFound

  if (window.find)
   {
    strFound = self.find(str)

    if (!strFound)
     {
      strFound = self.find(str, 0, 1)
      while (self.find(str, 0, 1)) continue
     }
   }

  else if (navigator.appName.indexOf("Microsoft") != -1)

   {
    if (TRange != null)
     {
      TRange.collapse(false)
      strFound = TRange.findText(str)
      if (strFound) TRange.select()
     }

    if (TRange == null || strFound == 0)
     {
      TRange = self.document.body.createTextRange()
      strFound=TRange.findText(str)
      if (strFound) TRange.select()
     }
   }

  else if (navigator.appName == "Opera")

   {
    return 'Opera não suportado'
   }

  if (!strFound) return ("Não foi encontrado '" + str)
  return
 }