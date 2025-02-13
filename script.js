document.addEventListener("DOMContentLoaded", function () {
    const textElement = document.getElementById("text");
    const text = First of all aku mau bilang ini, makasih yaa sayangg udah nerima akuu yang ke sekian kali walaupun mungkin untuk kamu itu ga gampang. Akhir-akhir ini aku mikir dengan semua naik turunnya hubungan kita dengan aku yang pengen selalu sama kamu dan gamau kehilangan kamu.;

    let index = 0;

    function typeWriter() {
        if (index < text.length) {
            textElement.innerHTML += text[index];
            index++;
            setTimeout(typeWriter, 40); // Lebih cepat tapi masih smooth
        }
    }

    textElement.style.opacity = 1;
    typeWriter();
});
