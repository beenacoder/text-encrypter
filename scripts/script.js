document.addEventListener("DOMContentLoaded", () => {

    encryptButton.addEventListener("click", encrypt);
    decryptButton.addEventListener("click", decrypt);
    copyButton.addEventListener("click", copyText);

    document.getElementById("input-text").addEventListener("focus", function () {
        this.setAttribute("placeholder", "");
    });
    document.getElementById("input-text").addEventListener("blur", function () {
        this.setAttribute("placeholder", "Ingresa el texto aquí...");
    });

});

