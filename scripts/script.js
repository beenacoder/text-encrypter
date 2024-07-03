document.addEventListener("DOMContentLoaded", () => {

    text.addEventListener('keydown', validateText);
    text.addEventListener('change', () => {
        validateText(e)
    });
    encryptButton.addEventListener("click", encrypt);
    decryptButton.addEventListener("click", decrypt);
    copyButton.addEventListener("click", copyText);
    resetButton.addEventListener("click", resetText);

    document.getElementById("input-text").addEventListener("focus", function () {
        this.setAttribute("placeholder", "");
    });
    document.getElementById("input-text").addEventListener("blur", function () {
        this.setAttribute("placeholder", "Ingresa el texto aquí...");
    });

});

