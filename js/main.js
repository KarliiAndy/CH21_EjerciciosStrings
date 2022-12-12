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




//--------------------------Voltear la cadena------------------------


let nombre1 = "Laura Aline";
    nombre1 = nombre1.toUpperCase();

    function invertircadena(nombre1) {

         let letrasinvertidas = "";
        
        for (let i = nombre1.length;  i >= 0; i++) {
    
         letrasinvertidas+= nombre1.charAT(i);
        }
        
       return console.log(letrasinvertidas);

}