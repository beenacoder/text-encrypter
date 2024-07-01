document.addEventListener("DOMContentLoaded", () => {
    const text = document.getElementById("textarea");
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
        console.log(textToEncrypt)
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
        console.log(textToDecrypt)
})

});
