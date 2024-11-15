// Cuando el usuario hace scroll, se ejecuta la función scrollFunction
window.onscroll = function() {
    scrollFunction();
  };
  
  function scrollFunction() {
    var BotonArriba = document.getElementById("BotonArriba");
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
      BotonArriba.style.display = "block";
    } else {
      BotonArriba.style.display = "none";
    }
  }
  
  // Al hacer clic en el botón, se vuelve al inicio de la página
  document.addEventListener("DOMContentLoaded", function() {
    var BotonArriba = document.getElementById("BotonArriba");
    BotonArriba.addEventListener("click", function() {
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    });
  });
  