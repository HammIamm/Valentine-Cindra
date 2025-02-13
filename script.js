document.addEventListener("DOMContentLoaded", function () {
    let paragraphs = document.querySelectorAll(".typing");
    let delay = 0;

    paragraphs.forEach((p) => {
        let text = p.textContent.trim(); // Ambil teks asli
        p.textContent = ""; // Kosongkan dulu biar efek mengetik kelihatan
        p.style.opacity = "1";

        setTimeout(() => {
            typeText(p, text, 0);
        }, delay);
        delay += text.length * 50 + 500; // Tambah jeda antar paragraf
    });

    function typeText(element, text, i) {
        if (i < text.length) {
            element.textContent += text[i]; // Tambahkan karakter satu per satu
            setTimeout(() => typeText(element, text, i + 1), 50);
        }
    }
});
