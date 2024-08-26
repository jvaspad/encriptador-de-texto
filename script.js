const areaDeTexto = document.querySelector(".area-de-texto");
const mensaje = document.querySelector(".mensaje");

// La letra "a" es convertida para "ai"
// La letra "e" es convertida para "enter"
// La letra "i" es convertida para "imes"
// La letra "o" es convertida para "ober"
// La letra "u" es convertida para "ufat"

function botonEncriptar(){
    const texto = areaDeTexto.value;
    if (!validarTexto(texto)) {
        alert("Por favor, ingrese solo letras minúsculas sin acentos ni caracteres especiales.");
        return;
    }

    const textoEncriptado = encriptar(texto)
    mensaje.value = textoEncriptado
    areaDeTexto.value = "";
    mensaje.style.backgroundImage = "none"
}


function encriptar(stringEncriptado){
    let matrizCodigo = [["a", "ai"], ["e", "enter"], ["i", "imes"], ["o", "ober"], ["u", "ufat"]]
    stringEncriptado = stringEncriptado.toLowerCase()

    for(let i = 0; i < matrizCodigo.length; i++){
        if(stringEncriptado.includes(matrizCodigo[i][0])){
            stringEncriptado = stringEncriptado.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1])
        }

    }
    return stringEncriptado
}

function botonDesencriptar(){
    const texto = areaDeTexto.value;
    if (!validarTexto(texto)) {
        alert("Por favor, ingrese solo letras minúsculas sin acentos ni caracteres especiales.");
        return;
    }

    const textoDesencriptado = desencriptar(texto)
    mensaje.value = textoDesencriptado
    areaDeTexto.value = "";
}

function desencriptar(stringDesencriptado){
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]]
    stringDesencriptado = stringDesencriptado.toLowerCase()

    for(let i = 0; i < matrizCodigo.length; i++){
        if(stringDesencriptado.includes(matrizCodigo[i][1])){
            stringDesencriptado = stringDesencriptado.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0])
        }

    }
    return stringDesencriptado
}

function botonCopiar(){
    let textoCopiar = mensaje.value;
    navigator.clipboard.writeText(textoCopiar);

    return;
}

function validarTexto(texto) {
    const regex = /^[a-z\s!]*$/;
    return regex.test(texto);
}