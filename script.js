const paragraphs = document.querySelectorAll(".typing");
let delay = 0;

paragraphs.forEach((p, index) => {
    let text = p.innerText;
    p.innerText = "";
    p.style.display = "block"; // Pastikan paragraf muncul satu per satu

    text.split("").forEach((char, i) => {
        setTimeout(() => {
            p.innerText += char;
        }, delay + i * 50); // Kecepatan ngetik (50ms per karakter)
    });

    delay += text.length * 50 + 500; // Tambah delay antar paragraf (500ms)
});
