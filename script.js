function enterSite() {
    document.getElementById("welcomeScreen").style.display = "none";
    document.getElementById("mainContent").classList.remove("hidden");
}

function showWithAnimation(htmlContent) {
    const content = document.getElementById("content");
    content.classList.remove("show");
    setTimeout(() => {
        content.innerHTML = htmlContent;
        content.classList.add("show");
    }, 200);
}

function showInfo() {
    showWithAnimation(`
        <h2>معلومات المصمم</h2>
        <p>الاسم: بكر</p>
        <p>السن: 16</p>
        <p>محل الإقامة: الجيزة</p>
    `);
}

function showImage() {
    showWithAnimation(`
        <h2>الصورة</h2>
        <img src="assets/image.jpg">
    `);
}

function showVideo() {
    showWithAnimation(`
        <h2>الفيديو</h2>
        <video controls>
            <source src="assets/video.mp4" type="video/mp4">
        </video>
    `);
}

function showAudio() {
    showWithAnimation(`
        <h2>المفاجأة</h2>
        <audio controls>
            <source src="assets/audio.mp3" type="audio/mpeg">
        </audio>
    `);
}
