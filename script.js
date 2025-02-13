document.addEventListener("DOMContentLoaded", function () {
    const paragraphs = document.querySelectorAll(".typing");
    let delay = 0;

    paragraphs.forEach((p) => {
        const text = p.innerHTML.trim(); // Ambil teks tanpa spasi berantakan
        p.innerHTML = ""; // Kosongkan teks dulu
        p.style.display = "block";

        setTimeout(() => {
            let i = 0;
            const typingEffect = setInterval(() => {
                p.innerHTML += text[i];
                i++;
                if (i === text.length) {
                    clearInterval(typingEffect);
                }
            }, 30); // Kecepatan mengetik
        }, delay);

        delay += text.length * 30 + 500; // Jeda antar paragraf
    });
});
