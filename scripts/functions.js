const text = document.getElementById("input-text");
const encryptButton = document.getElementById("encrypt-button");
const decryptButton = document.getElementById("decrypt-button");
const textEncrypted = document.getElementById("text-encrypted");
const textDecrypted = document.getElementById("text-decrypted");


const encrypt = () => {
    let textToEncrypt = text.value;
    let encryptedText = textToEncrypt
        .replace(/e/g, "enter")
        .replace(/i/g, "imes")
        .replace(/a/g, "ai")
        .replace(/o/g, "ober")
        .replace(/u/g, "ufat");
    textEncrypted.innerHTML = encryptedText;
    text.value = "";
}

const decrypt = () => {
    let textToDecrypt = text.value;
    let decryptedText = textToDecrypt
        .replace(/enter/g, "e")
        .replace(/imes/g, "i")
        .replace(/ai/g, "a")
        .replace(/ober/g, "o")
        .replace(/ufat/g, "u");
        textEncrypted.innerHTML = decryptedText;
        text.value = "";
}