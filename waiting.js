
$(document).ready(function () {

    waiting(1);

    /*---------------------------------------
      FUNCIÓN PARA MOSTRAR U OCULTAR WAITING
    ----------------------------------------*/
    function waiting(on_off) {
        if (on_off == 0) { //Apaga el waiting
            $('.overlay').fadeOut('fast');
                $('body').css({'overflow': 'visible'});
            
        } else if (on_off == 1) {//Enciende el waiting
            $('.overlay').fadeIn('fast');
            $('body').css({'overflow': 'hidden'});
        }
    }
});

