// مثال بسيط لتأثير تفاعلي عند التمرير على الفيديوهات
document.addEventListener("DOMContentLoaded", () => {
    const videos = document.querySelectorAll(".videos iframe");
    videos.forEach(video => {
        video.addEventListener("mouseover", () => {
            video.style.transform = "scale(1.05)";
            video.style.transition = "transform 0.3s";
        });
        video.addEventListener("mouseout", () => {
            video.style.transform = "scale(1)";
        });
    });
});
