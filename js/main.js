// //--------------------Ejercicio Recorrer cadena y conocer cuantas se repiten---------------------------------------

//     // let nombre = "Abraham";
//     // nombre = nombre.toUpperCase();

//     //     let letra= "";
//     //     let contFinal = 0;
        
//     //     for (let i = 0; i < nombre.length; i++) {
//     //     console.log (nombre.charAt(i));
//     //     let contTemp = 1;
//     //     for(let cont = i+1 ; cont< nombre.length; cont ++){
//     //     if (nombre.charAt(i) == nombre.charAt (cont))
//     //         contTemp ++;
//     //     }

//     //     if (contTemp> contFinal){
//     //         contFinal=contTemp;
//     //         letra= nombre.charAt(i);
//     //     }
//     // }

//     // console.log(letra, contFinal)




// //--------------------------Voltear letras en una  cadena------------------------




//     function invertircadena(str) {

//          let letrasinvertidas = "";
        
//         for (let i = str.length-1;  i >= 0; i--) {
    
//          letrasinvertidas += str.charAt(i);
//         }
        
//        return letrasinvertidas;
// }

// //--------------Ejercicio3--------------------

//             function palin(str) {

//                 str = str.toLowerCase();

//                 if (invertircadena(str) == str){
//                 return true;
//             }
            
//             return false;
//             }






let btnEnviar = document.getElementById("btnEnviar");
btnEnviar.addEventListener ("click" , function(event) {
    event.preventDefault()
    let emailRegex=/
    
    let exampleFormControlInput1 = document.getElementById("exampleFormControlInput1");
    let exampleFormControlTextarea1= document.getElementById("exampleFormControlTextarea1");
    let alertError = document.getElementById("alertError");

    exampleFormControlTextarea1.value = exampleFormControlTextarea1.value.trim();

    alertError.style.display="none" //Quitar mensaje de error
    alertError.innerHTML="";
    // console.log (exampleFormControlTextarea1.value.length);
    // console.log ("[" +  
    // exampleFormControlTextarea1.value.replaceAll("" , "")
    // + "]");

    if(exampleFormControlTextarea1.value.trim().replaceAll("", "").length < 20){
        alertError.innerHTML = "El mensaje debe contener 20 caracteres o más"
        alertError.style.display = "block";
        exampleFormControlTextarea1.focus();
        exampleFormControlTextarea1.ariaSelected();
    }
    if (exampleFormControlInput1.value.match(emailRegex) == null){
        alertError.style.display="block";
        alertError.innerHTML += "<br/> El correo electronico no es válido";
    }
    
});