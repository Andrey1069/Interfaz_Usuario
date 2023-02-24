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
});