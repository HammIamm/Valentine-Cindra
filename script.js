document.addEventListener("DOMContentLoaded", function () {
    let paragraphs = document.querySelectorAll(".typing");
    let delay = 0;

    paragraphs.forEach((p) => {
        let text = p.innerHTML.trim();
        p.innerHTML = ""; // Kosongin dulu biar efek mengetik muncul
        p.style.opacity = "1";

        setTimeout(() => {
            typeText(p, text, 0);
        }, delay);
        delay += text.length * 50 + 500; // Jeda antar paragraf
    });

    function typeText(element, text, i) {
        if (i < text.length) {
            element.innerHTML += text[i] === " " ? "&nbsp;" : text[i]; // Pastikan spasi tetap ada
            setTimeout(() => typeText(element, text, i + 1), 50);
        }
    }
});
