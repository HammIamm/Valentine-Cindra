document.addEventListener("DOMContentLoaded", function () {
    let paragraphs = document.querySelectorAll(".typing");
    let delay = 0;

    paragraphs.forEach((p) => {
        let text = p.innerHTML; // Pakai innerHTML biar spasi & enter tetap ada
        p.innerHTML = ""; 
        p.style.opacity = "1"; 

        setTimeout(() => {
            typeText(p, text);
        }, delay);
        delay += text.length * 50 + 500;
    });

    function typeText(element, text, i = 0) {
        if (i < text.length) {
            if (text.charAt(i) === " ") {
                element.innerHTML += "&nbsp;"; // Biar spasi tetap terlihat
            } else {
                element.innerHTML += text.charAt(i);
            }
            setTimeout(() => typeText(element, text, i + 1), 50);
        }
    }
});
