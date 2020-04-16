$(document).ready(function () {
  

  //Dati
  var todoList = [
    "Sistemare il sito Inps",
    "Assicurarsi che la terra non sia piatta",
    "Scoprire dov'è Bugo",
    "Cercare molte più Gif"
  ];

  var list = $(".todo");


  for(var i = 0; i < todoList.length; i++){

    //cloniamo la x
    var elementList = $(".template li").clone();

    //aggiungere del testo al template
    elementList.prepend(todoList[i]);

    //aggiungere il clone alla lista de
    list.append(elementList);
  }
















  
});//fine ready
