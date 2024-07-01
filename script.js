document.addEventListener("DOMContentLoaded", () => {
    const text = document.getElementById("input-text");
    const encryptButton = document.getElementById("encrypt-button");
    const decryptButton = document.getElementById("decrypt-button");
    const textEncrypted = document.getElementById("text-encrypted");
    const textDecrypted = document.getElementById("text-decrypted");



    encryptButton.addEventListener("click", () => {
        let textToEncrypt = text.value;
        let encryptedText = textToEncrypt
            .replace(/e/g, "enter")
            .replace(/i/g, "imes")
            .replace(/a/g, "ai")
            .replace(/o/g, "ober")
            .replace(/u/g, "ufat");
        textEncrypted.innerHTML = encryptedText;

        text.value = "";
    });

    decryptButton.addEventListener("click", () => {
        let textToDecrypt = text.value;
        let decryptedText = textToDecrypt
            .replace(/enter/g, "e")
            .replace(/imes/g, "i")
            .replace(/ai/g, "a")
            .replace(/ober/g, "o")
            .replace(/ufat/g, "u");
            textEncrypted.innerHTML = decryptedText;
            text.value = "";
})

});


document.getElementById("input-text").addEventListener("focus", function(){
    this.setAttribute("placeholder", "");
});
document.getElementById("input-text").addEventListener("blur", function(){
    this.setAttribute("placeholder", "Ingresa el texto a encriptar aquí...");
});