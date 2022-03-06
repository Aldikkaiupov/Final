//Get the button:
mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

$(document).ready(function(){
  $(".tablinks1").mouseover(function(){
    $(".tablinks1").css("background-color", "lightcoral");
    $(".tablinks1").css("color", "darkred");
             $(".tablinks1").css("font-size", "30px",);
  });
  $(".tablinks1").mouseout(function(){
    $(".tablinks1").css("background-color", "Lavenderblush");
    $(".tablinks1").css("color", "rosybrown");
             $(".tablinks1").css("font-size", "25px",);
  });
});

$(document).ready(function(){
  $(".tablinks2").mouseover(function(){
    $(".tablinks2").css("background-color", "lightcoral");
    $(".tablinks2").css("color", "darkred");
             $(".tablinks2").css("font-size", "30px",);
  });
  $(".tablinks2").mouseout(function(){
    $(".tablinks2").css("background-color", "Lavenderblush");
    $(".tablinks2").css("color", "rosybrown");
             $(".tablinks2").css("font-size", "25px",);
  });
});
$(document).ready(function(){
  $(".tablinks3").mouseover(function(){
    $(".tablinks3").css("background-color", "lightcoral");
    $(".tablinks3").css("color", "darkred");
             $(".tablinks3").css("font-size", "30px",);
  });
  $(".tablinks3").mouseout(function(){
    $(".tablinks3").css("background-color", "Lavenderblush");
    $(".tablinks3").css("color", "rosybrown");
             $(".tablinks3").css("font-size", "25px",);
  });
});
$(document).ready(function(){
  $(".tablinks4").mouseover(function(){
    $(".tablinks4").css("background-color", "lightcoral");
    $(".tablinks4").css("color", "darkred");
             $(".tablinks4").css("font-size", "30px",);
  });
  $(".tablinks4").mouseout(function(){
    $(".tablinks4").css("background-color", "Lavenderblush");
    $(".tablinks4").css("color", "rosybrown");
             $(".tablinks4").css("font-size", "25px",);
  });
});
$(document).ready(function(){
  $(".tablinks5").mouseover(function(){
    $(".tablinks5").css("background-color", "lightcoral");
    $(".tablinks5").css("color", "darkred");
             $(".tablinks5").css("font-size", "30px",);
  });
  $(".tablinks5").mouseout(function(){
    $(".tablinks5").css("background-color", "Lavenderblush");
    $(".tablinks5").css("color", "rosybrown");
             $(".tablinks5").css("font-size", "25px",);
  });
});
 
$(document).ready(function(){
  $(".btn1").mouseover(function(){
    $(".btn1").css("background-color", "lightcoral");
    $(".btn1").css("color", "darkred");
             $(".btn1").css("font-size", "20px",);
  });
  $(".btn1").mouseout(function(){
    $(".btn1").css("background-color", "Lavenderblush");
    $(".btn1").css("color", "rosybrown");
             $(".btn1").css("font-size", "15px",);
  });
});
 
$(document).ready(function(){
  $(".btn2").mouseover(function(){
    $(".btn2").css("background-color", "lightcoral");
    $(".btn2").css("color", "darkred");
             $(".btn2").css("font-size", "20px",);
  });
  $(".btn2").mouseout(function(){
    $(".btn2").css("background-color", "Lavenderblush");
    $(".btn2").css("color", "rosybrown");
             $(".btn2").css("font-size", "15px",);
  });
});


 

$(document).ready(function(){
  $(".btn1").click(function(){
    $(".tab").slideUp();
  });
  $(".btn2").click(function(){
    $(".tab").slideDown();
  });
});

