//--------------------Ejercicio Recorrer cadena y conocer cuantas se repiten---------------------------------------

    // let nombre = "Abraham";
    // nombre = nombre.toUpperCase();

    //     let letra= "";
    //     let contFinal = 0;
        
    //     for (let i = 0; i < nombre.length; i++) {
    //     console.log (nombre.charAt(i));
    //     let contTemp = 1;
    //     for(let cont = i+1 ; cont< nombre.length; cont ++){
    //     if (nombre.charAt(i) == nombre.charAt (cont))
    //         contTemp ++;
    //     }

    //     if (contTemp> contFinal){
    //         contFinal=contTemp;
    //         letra= nombre.charAt(i);
    //     }
    // }

    // console.log(letra, contFinal)




//--------------------------Voltear letras en una  cadena------------------------




    function invertircadena(str) {

         let letrasinvertidas = "";
        
        for (let i = str.length-1;  i >= 0; i--) {
    
         letrasinvertidas += str.charAt(i);
        }
        
       return letrasinvertidas;
}

//--------------Ejercicio3--------------------

            function palin(str) {

                str = str.toLowerCase();

                if (invertircadena(str) == str){
                return true;
            }
            
            return false;
            }
