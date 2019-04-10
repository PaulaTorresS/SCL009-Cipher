window.cipher = {
  encode: (palabra, offsetnum) => {
    let resultadofinal="";
    let resultadoFormula="";


  //para poder cifrar
    for (let i=0; i < palabra.length; i++){ //aca hay un ciclo
      let ascii=palabra.charCodeAt(i); //variable = igual a la posicion de la primera letra
    

      if (ascii >= 65 && ascii <=90){ //una condicion, aqui se da un rango de letras de 65 al 90 en mayuscula de la A a la Z
        resultadoFormula= String.fromCharCode((ascii - 65 + offsetnum)% 26 + 65); // da el resultado formula , la letra en la nuevas posicion ya ingresada
      }
      resultadofinal+=resultadoFormula;
    }
    return resultadofinal

  },
  decode: (palabra,offsetnum) => {
    let resultadofinal="";
    let resultadoFormula="";
    //console.console.log(offset);
    //para poder Descifrar
   for (let i=0; i < palabra.length; i++){
     let ascii=palabra.charCodeAt(i);
     //console.log(ascii);

     if (ascii >= 65 && ascii <=90){
       resultadoFormula= String.fromCharCode((ascii + 65 - offsetnum)% 26 + 65);

     }
     resultadofinal+=resultadoFormula;
   }
   return resultadofinal
  }
};
