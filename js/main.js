$(document).ready(function () {
  

  //Dati
  var todoList = [
    "Sistemare il sito dell'Inps",
    "Assicurarsi che la terra non sia piatta",
    "Scoprire dov'è Bugo",
    "Cercare molte più Gif"
  ];

  var list = $(".todo");
  var newInput = $(".add_element");
  var boolean = false;

  for(var i = 0; i < todoList.length; i++){

    //cloniamo la x
    var elementList = $(".template li").clone();

    //aggiungere del testo al template
    elementList.prepend('<span>' + todoList[i] + '</span>');

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

  //quando entro dentro alla x seleziona elemento che vuoi eliminare
  $("main").on("mouseenter", ".todo li i", function(){
    $(this).parent().toggleClass("line-through");

    if ($(this).parent().hasClass("completed")){
      
      boolean = true;
      $(this).parent().toggleClass('completed');
    }
  });

  //quando esco ritorna alla normalità
  $("main").on("mouseleave", ".todo li i", function(){
    $(this).parent().toggleClass("line-through");

    if (boolean == true){
      
      boolean = false;
      $(this).parent().toggleClass('completed');
    }
  });


  //seleziono un evento completato
  $("main").on("click", ".todo li", function(){
    $(this).toggleClass('completed');
  });




  //funzione per aggiungere alla lista
function addElement (word){
    var elementNew = $(".template li").clone();
    elementNew.prepend('<span> ' + word + '</span>');
    list.append(elementNew);
  }
  /*  */








  
});//fine ready
