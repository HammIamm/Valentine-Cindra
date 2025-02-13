// Typing Effect
const text = `First of all, aku mau bilang ini, makasih yaa sayang udah nerima aku yang ke sekian kali, walaupun mungkin buat kamu itu nggak gampang. Akhir-akhir ini aku mikir, dengan semua naik turunnya hubungan kita, dengan aku yang pengen selalu sama kamu dan nggak mau udahan, tapi justru karena itu kita masih bisa bareng terus. Dan yang aku lihat, kita tuh bahagia yaa, kaya makin bisa saling nerima satu sama lain. Terus juga aku ngerasa kalau bercanda tuh kayanya bahagia banget gitu, dan kita juga sama-sama saling butuh gitu lhoo. Jadi kaya, ih gemes banget gitu mwehehehe.

Sama kamu itu gregetan tauu, wkwkwk. Dengan sifat kamu yang gengsian itu, yaa walaupun di balik sifat itu ada orang yang sebenernya sayang dan peduli banget sama aku. Cuma yaa gengsian aja orangnya 😗😗. Makasih yaa, sudah selalu ada buat aku dan buat kita. Makasih juga sudah bertahan sama aku di sini sampai sejauh ini. Makasih sudah membuat aku merasa disayang. Semoga kita selalu bareng yaa, sayangg 😖❤.

Walaupun kita sekarang jauh, dan itu terkadang nggak gampang buat jalaninnya, tapi semoga kita selalu punya alasan buat mau berusaha dan bertahan dengan segala masalah yang bakal ada nanti. Pasti kita bisaa yaaa, sayangg‼

There’s one thing you should know: I’m so happy with you. I met the happiest version of myself when I’m with you, and I hope you feel the same ❤🧸.

Walaupun kadang kamu nyebelin, tapi aku tetep sayang sama kamu 😚.

Aku juga minta maaf yaa sayangg, untuk semua hal yang mungkin kurang aku usahakan, dan semua dari diri aku yang masih banyak kekurangannya. Maaf aku juga kadang nyebelin, terlalu pengen tau tentang kamu, terlalu banyak nuntut kamu. Aku minta maaf yaa sayang, maaf sekalii. Tapi sekarang aku sedang ubah pelan-pelan supaya lebih baik untuk kita yaaa‼ Makasih yaa sayangg, sudah nerima akuu ☹❤.

Dan yang terakhir, I hope we can always be happy together. Semoga kita selalu bareng yaa sayangg, dan semoga kita selalu bisa lewatin semua hal yang bakal kita hadapin di depan kita.

I lovee youu sayangg😖😖❤❤‼

Sayangg sekalii samaa kamuu hihiii~ Kamu bakal selalu jadi Cindra yang lucuu itu di mata akuu 😚😚🤏🏻🤏🏻❤❤🫂🫂🧸🧸🤍🤍`;

let index = 0;
const speed = 50; // Kecepatan ngetik (ms)

// Fungsi untuk efek ketik
function typeWriter() {
    if (index < text.length) {
        const typingElement = document.getElementById("typing-text");
        typingElement.innerHTML += text.charAt(index);
        index++;
        setTimeout(typeWriter, speed);
    }
}

document.addEventListener("DOMContentLoaded", () => {
    // Memulai efek ketik
    const typingElement = document.getElementById("typing-text");
    if (typingElement) {
        setTimeout(typeWriter, 500);
    }

    // Slideshow / Carousel Foto
    const swiper = new Swiper(".swiper-container", {
        loop: true,
        autoplay: {
            delay: 3000, // 3 detik per slide
            disableOnInteraction: false
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev"
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: true
        }
    });

    // Pemutar Musik (MP3)
    const audioElement = new Audio('Fearless MP3.mp3');  // Pastikan nama file dan ekstensi benar
    audioElement.autoplay = true; // Mengatur autoplay agar musik langsung diputar
    audioElement.loop = true; // Agar musik berulang terus
    audioElement.play(); // Memulai pemutaran musik
});
