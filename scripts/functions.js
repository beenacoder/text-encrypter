const text = document.getElementById("input-text");
const alert = document.getElementById("alert-msg");
const encryptButton = document.getElementById("encrypt-button");
const decryptButton = document.getElementById("decrypt-button");
const textEncrypted = document.getElementById("text-encrypted");
const textDecrypted = document.getElementById("text-decrypted");




const encrypt = () => {
    
    let textToEncrypt = text.value;
    if(!textToEncrypt){
        alert.innerHTML = "Por favor ingresa un texto para encriptar";
        return
    } else {
        let encryptedText = textToEncrypt
            .replace(/e/g, "enter")
            .replace(/i/g, "imes")
            .replace(/a/g, "ai")
            .replace(/o/g, "ober")
            .replace(/u/g, "ufat");
        textEncrypted.innerHTML = encryptedText;
        text.value = "";
        alert.innerHTML="";
    }

}

const decrypt = () => {
    let textToDecrypt = text.value;
    if(!textToDecrypt){
        alert.innerHTML = "Por favor ingresa un texto para desencriptar";
        return
    } else {
        let decryptedText = textToDecrypt
            .replace(/enter/g, "e")
            .replace(/imes/g, "i")
            .replace(/ai/g, "a")
            .replace(/ober/g, "o")
            .replace(/ufat/g, "u");
            textEncrypted.innerHTML = decryptedText;
            text.value = "";
            alert.innerHTML="";
    }
}