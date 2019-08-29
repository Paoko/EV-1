function cambia(){
  var nombre = document.getElementById("nombre").value;
  var edad = document.getElementById("edad").value;
  var signo = document.getElementById("signo").value;
  var tamano;
  if (edad < 12 || edad > 60){
      tamano = "xx-large";
   } else {
      tamano = "large"
    }
  document.getElementById("pie").innerText=nombre + "," + signo + "," + edad + "years";
  document.getElementById("frase").style.fontSize= tamano;
  document.body.style.backgroundColor = signo;
}
