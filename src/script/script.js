//Abertura e fechamento do menu slide
const $menu = document.querySelector('.menuDiv');  //const da div do menu slide
const $btnMenuOpenAndClose = document.getElementById('btn-open-menu');  //cosntante do botão que abre e fecha a div
$btnMenuOpenAndClose.addEventListener('click',function() {      //quando $btnMenuOpenAndClose for clicado a função sera executada
    $menu.classList.toggle("menuDiv-open");     //a div $menu vai trocar de classe a cada clique;              
  });


    function* idGene() {
      let index = 0;
      while(true) {
        yield index;
        index++
      }
    } 
    const idd = idGene();
    console.log(idd.next().value)
    console.log(idd.next().value)
    console.log(idd.next().value)

    
    function findString (str)
    {
     let TRange = null
     let strFound
   
     if (parseInt(navigator.appVersion) < 4) return //descobre a versão do navegador
   
     if (window.find) //funcao de encontrar
      {
       strFound = self.find(str);
   
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
         strFound = TRange.findText(str)
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
