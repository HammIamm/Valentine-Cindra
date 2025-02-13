document.addEventListener("DOMContentLoaded", function () {
    let paragraphs = document.querySelectorAll(".typing");
    let delay = 0;

    paragraphs.forEach((p, index) => {
        let text = p.innerText;
        p.innerText = "";
        p.style.opacity = "1"; // Biar tetap terlihat
        setTimeout(() => {
            typeText(p, text);
        }, delay);
        delay += text.length * 50 + 500; // Delay antar paragraf
    });

    function typeText(element, text, i = 0) {
        if (i < text.length) {
            element.innerText += text.charAt(i);
            setTimeout(() => typeText(element, text, i + 1), 50); // Kecepatan ketik
        }
    }
});
