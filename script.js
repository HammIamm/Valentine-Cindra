document.addEventListener("DOMContentLoaded", function () {
    let texts = [
        "text2", "text3", "text4", "text5", "text6", "text7", "text8", "text9",
        "text10", "text11", "text12", "text13", "text14", "text15", "text16", 
        "text17", "text18", "text19", "text20", "text21", "text22", "text23",
        "text24", "text25", "text26", "text27", "text28", "text29", "text30"
    ];
    
    let delay = 1000;
    
    texts.forEach((id, index) => {
        setTimeout(() => {
            document.getElementById(id).classList.remove("hidden");
        }, delay * (index + 1));
    });

    setTimeout(() => {
        document.getElementById("image").classList.remove("hidden");
    }, delay * (texts.length + 1));

    document.getElementById("showMessage").addEventListener("click", function () {
        document.getElementById("finalMessage").classList.remove("hidden");
        this.style.display = "none";
    });
});