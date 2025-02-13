document.addEventListener("DOMContentLoaded", function () {
    let paragraphs = document.querySelectorAll(".typing");
    let delay = 0;

    paragraphs.forEach((p) => {
        let text = p.innerHTML.trim(); // Ambil teks asli (bukan textContent)
        p.innerHTML = ""; // Kosongkan dulu biar efek mengetik jalan
        p.style.opacity = "1";

        setTimeout(() => {
            typeText(p, text, 0);
        }, delay);
        delay += text.length * 50 + 500; // Jeda antar paragraf
    });

    function typeText(element, text, i) {
        if (i < text.length) {
            if (text[i] === " ") {
                element.innerHTML += "&nbsp;"; // Fix spasi biar nggak hilang
            } else {
                element.innerHTML += text[i];
            }
            setTimeout(() => typeText(element, text, i + 1), 50);
        }
    }
});
