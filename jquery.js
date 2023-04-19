var expr = /^[a-zA-Z0-9_\.\-]+@[a-zA-Z0-9\-]+\.[a-zA-Z0-9\-\.]+$/;

$(document).ready(function(){
    $("#bEnviar").click(function(){

        var nombre = $("#itNombre").val(); //para obtener el valor de una caja de texto se coloca .val
        var correo = $("#itMail").val();
        var asunto = $("#itAsunto").val();

        if(nombre == ""){

            $("#mensaje1").fadeIn(); //fadeIn lo que hace es hacer un tipo de animación en que estando en opacidad 0, como se puso display none vaya a estar en opacidad 100, animado como aparece el mensaje
        
            return false;
       
        }else{
            $("#mensaje1").fadeOut(); //fadeOut es para desvanacer el mensaje, es lo contrario al fadeIn

            if(correo == "" || !expr.test(correo)){ //el signo ! indica que si no se cumpla esa función muestre el mensaje2
                $("#mensaje2").fadeIn();

                return false;
            
            }else{
                $("#mensaje2").fadeOut();

                if(asunto == ""){
                    $("#mensaje3").fadeIn();

                    return false;


                }
            }

        }

    })


})