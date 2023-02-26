/**FUNCIONES JS */

$(document).ready(function(){
/**Funciones para la navegacion un slide*/
  $('.sidenav').sidenav();

 /**Funciones del bton para cambiar de modo oscuro y modo claro*/
  $('.dark-mode-toggle').click(function() {
    $('body').toggleClass('dark-mode');
    if($('body').hasClass('dark-mode')){
      $(this).html('<i class="material-icons">brightness_7</i>');
    }else{
      $(this).html('<i class="material-icons">brightness_6</i>');
    }
  });

// Agrega un desplazamiento suave al hacer clic en los enlaces del navbar
$('a').on('click', function(event) {
  if (this.hash !== '') {
    event.preventDefault();

    // Almacena el hash
    var hash = this.hash;

    // Desplaza suavemente hacia la sección correspondiente
    $('html, body').animate({
      scrollTop: $(hash).offset().top
    }, 800, function() {
      // Agrega el hash (#) a la URL cuando se completa la animación de desplazamiento
      window.location.hash = hash;
    });
  }
});
  
});
