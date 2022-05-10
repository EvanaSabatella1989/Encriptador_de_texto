const inputTexto = document.querySelector(".input-text");
const mensaje = document.querySelector(".input-text-area");


function btnencriptar(){
    const textoEncriptado = encriptar(inputTexto.value);
    mensaje.value = textoEncriptado;
    
    
}

function btndesencriptar(){
    const textoDesencriptado = desencriptar(inputTexto.value);
    mensaje.value = textoDesencriptado;
    
}

function btncopiar(){
    const texto = copiar(mensaje.value);
}

function encriptar(StringParaEncriptar){
    let matrizCodigo = [["e", "enter"],["i", "imes"],["a", "ai"],["o", "ober"],["u", "ufat"]]
    StringParaEncriptar = StringParaEncriptar.toLowerCase();
    
    for(let i=0; i< matrizCodigo.length; i++){
        if(StringParaEncriptar.includes(matrizCodigo[i][0])){
            StringParaEncriptar = StringParaEncriptar.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1])

        }
       
    }
    
    return StringParaEncriptar;
}

function desencriptar(StringParaDesencriptar){
    let matrizCodigo = [["enter", "e"],["imes", "i"],["ai", "a"],["ober", "o"],["ufat", "u"]]
    StringParaDesencriptar = StringParaDesencriptar.toLowerCase();
    for(let i=0; i< matrizCodigo.length; i++){
        if(StringParaDesencriptar.includes(matrizCodigo[i][0])){
            StringParaDesencriptar = StringParaDesencriptar.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1])

        }
    }
    return StringParaDesencriptar;
}

function copiar(texto){
    
    mensaje.select();
    document.execCommand("copy");
}