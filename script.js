document.addEventListener("DOMContentLoaded", function () {
    const textElement = document.getElementById("text");
    const text = First of all aku mau bilang ini, makasih yaa sayangg udah nerima akuu yang ke sekian kali walaupun mungkin untuk kamu itu ga gampang. Akhir-akhir ini aku mikir dengan semua naik turunnya hubungan kita dengan aku yang pengen selalu sama kamu dan gamau kehilangan kamu.;
    
    const words = text.split(" "); // Pecah jadi kata, bukan huruf
    let index = 0;

    function typeWriter() {
        if (index < words.length) {
            textElement.innerHTML += words[index] + " "; // Tambahin kata per kata
            index++;
            setTimeout(typeWriter, 200); // Lebih smooth
        }
    }

    textElement.style.opacity = 1;
    typeWriter();
});
