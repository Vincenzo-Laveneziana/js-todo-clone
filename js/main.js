$(document).ready(function () {
  

  //Dati
  var todoList = [
    "Sistemare il sito dell'Inps ",
    "Assicurarsi che la terra non sia piatta",
    "Scoprire dov'è Bugo",
    "Cercare molte più Gif"
  ];

  var list = $(".todo");
  var newInput = $(".add_element")

  for(var i = 0; i < todoList.length; i++){

    //cloniamo la x
    var elementList = $(".template li").clone();

    //aggiungere del testo al template
    elementList.prepend('<span> ' + todoList[i] + '</span>');

    //aggiungere il clone alla lista de
    list.append(elementList);
  }


  //rimozione todo item
  $("main").on("click", ".todo li i", function(){
    $(this).parent().remove();
  });


  //immissione elemento in lista
  newInput.keyup(function(event){
    //console.log(event.which);
    
    if(event.which == 13) {
      var text = newInput.val().trim();
      //console.log(text);
      

      if(text !== "") {
        addElement(text);

        newInput.val("");
      }
    }
  })

  $("main").on("mouseenter", ".todo li", function(){
    $(this).toggleClass("line-through");
  });

  $("main").on("mouseleave", ".todo li", function(){
    $(this).not("i").toggleClass("line-through");
  });




  //funzione per aggiungere alla lista
function addElement (word){
    var elementNew = $(".template li").clone();
    elementNew.prepend('<span> ' + word + '</span>');
    list.append(elementNew);
  }
  /*  */








  
});//fine ready
