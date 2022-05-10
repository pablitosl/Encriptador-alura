const inputTexto = document.querySelector("#textoUno");
const btnEncriptar = document.querySelector("#encriptar");
const btnDesencriptar = document.querySelector("#desencriptar");

const outputTexto = document.querySelector("#textoDos");
const btnCopiar = document.querySelector("#copiar");



function encriptar(){
    var texto = inputTexto.value;
    var textoEncriptado = texto
        .replaceAll("e", "enter")
        .replaceAll("i", "imes")
        .replaceAll("o", "ober")
        .replaceAll("a", "ai")
        .replaceAll("u", "ufat");
        
        outputTexto.value = textoEncriptado;
  }
  
function desencriptar(){
    var textoEncriptado = inputTexto.value;
    var texto = textoEncriptado
        .replaceAll("enter", "e")
        .replaceAll("imes", "i")
        .replaceAll("ober", "o")
        .replaceAll("ai", "a")
        .replaceAll("ufat", "u");
        
        outputTexto.value = texto;
  }
  
function copiar() {
   var mensajeEncriptado = outputTexto.value;
   navigator.clipboard.writeText(mensajeEncriptado);
    inputTexto.value = "";
    inputTexto.focus();
}


  btnEncriptar.onclick = encriptar;
  
  btnDesencriptar.onclick = desencriptar;
  
  btnCopiar.onclick = copiar;