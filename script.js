document.addEventListener("DOMContentLoaded", function () {
    const paragraphs = document.querySelectorAll(".typing");
    let delay = 0;

    paragraphs.forEach((p) => {
        const text = p.textContent.trim(); // Pastikan teks tetap rapi
        p.textContent = ""; // Kosongkan teks dulu
        p.style.display = "block";

        setTimeout(() => {
            let i = 0;
            const typingEffect = setInterval(() => {
                p.textContent += text[i];
                i++;
                if (i === text.length) {
                    clearInterval(typingEffect);
                }
            }, 30); // Kecepatan mengetik
        }, delay);

        delay += text.length * 30 + 500; // Jeda antar paragraf
    });
});
