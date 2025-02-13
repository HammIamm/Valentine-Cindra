document.addEventListener("DOMContentLoaded", function() {
    const messageElement = document.getElementById("message");

    const text = `First of all aku mau bilang ini, makasih yaa sayangg udah nerima akuu yang ke sekian kali walaupun mungkin untuk kamu itu ga gampang.
    
    Akhir-akhir ini aku mikir dengan semua naik turunnya hubungan kita, dengan aku yang pengen selalu sama kamu dan gamau kehilangan kamu, kadang kita bisa saling nyaman tapi juga bisa ada konflik kecil yang ganggu.
    
    Tapi karena itu yaa kita masih bisa bareng terus dan nyoba buat lebih ngerti satu sama lain. Aku seneng karena kita bisa tetap bertahan meskipun kadang gengsi dan keras kepala masih suka muncul.
    
    Terus juga aku ngerasa kalo bercandaan tuh kayaknya banyak yang cuma bisa aku lakuin sama kamu doang. Makanya aku pengen kita tetap kayak gini terus.
    
    Pokoknya intinya aku sayang banget sama kamu, dan aku berharap kita bisa terus bareng tanpa harus mikirin hal-hal yang bisa bikin kita jauh. Happy Valentine’s Day, Cindra! 💖`;

    let index = 0;
    function typeText() {
        if (index < text.length) {
            messageElement.innerHTML += text[index] === "\n" ? "<br><br>" : text[index];
            index++;
            setTimeout(typeText, 30);
        }
    }

    typeText();
});
