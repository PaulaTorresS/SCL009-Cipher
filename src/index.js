//Boton Cifrar
document.getElementById("botonCifrar").addEventListener("click", function(){  //evento que hara que pueda darse el click
  let palabra = document.getElementById("intext").value; //variable para atraer el valor de el texto que se ingrese
  let offsetnum = parseInt(document.getElementById("offset").value); // variable para el numero del offset que se ingresa
  let resultadofinal=cipher.encode(palabra,offsetnum)
  document.getElementById("resultado").value=resultadofinal;
});

//boton Descifrar
document.getElementById("botonDescifrar").addEventListener("click", function(){
  let palabra = document.getElementById("intext").value;
  let offsetnum = parseInt(document.getElementById("offset").value);
  let resultadofinal=cipher.decode(palabra,offsetnum)
  //console.console.log(offset);
document.getElementById("resultado").value=resultadofinal;
})
