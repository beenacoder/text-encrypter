const text = document.getElementById("input-text");
const alertMsg = document.getElementById("alert-msg");
const alertCopiedMsg = document.getElementById("alert-msg-copied");
const encryptButton = document.getElementById("encrypt-button");
const decryptButton = document.getElementById("decrypt-button");
const textEncrypted = document.getElementById("text-encrypted");
const textDecrypted = document.getElementById("text-decrypted");
const copyButton = document.getElementById("btn-copy");



//Encrypt Function
const encrypt = () => {
    const textToEncrypt = text.value;
    if (!textToEncrypt) {
        alertMsg.innerHTML = "Por favor ingresa un texto para encriptar";
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
        alertMsg.innerHTML = "";
    }
}


//Decrypt Function
const decrypt = () => {
    const textToDecrypt = text.value;
    if (!textToDecrypt) {
        alertMsg.innerHTML = "Por favor ingresa un texto para desencriptar";
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
        alertMsg.innerHTML = "";
    }
}

//Function to clipboard copy
const copyText = async () => {
    try {
        const textToCopy = document.getElementById('text-encrypted').innerHTML;
        await navigator.clipboard.writeText(textToCopy);
        alertCopiedMsg.innerHTML = "Texto copiado";

        //The message will dissapear after 1 second showed
        setTimeout(() => {
            alertCopiedMsg.innerHTML = "";
        }, 1000);
    } catch (err) {
        console.error('Error al copiar el texto: ', err);
    }
};
