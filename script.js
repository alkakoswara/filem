function toggleVideo() {
    const trailer = document.querySelector('.trailer');
    const video = document.querySelector('.trailer video');
    trailer.classList.toggle('active');
    
    if (trailer.classList.contains('active')) {
        video.play();
    } else {
        video.pause();
        video.currentTime = 0; // Reset video to the start when closed
    }
}


function changeBg() {
    const banner = document.querySelector('.banner');
    const contents = document.querySelectorAll('.content');
    banner.style.background = `url("../img/${bg}")`;
    banner.style.backgroundSize = 'cover';
    banner.style.backgroundPosition = 'center';

    contents.forEach(content => {
        content.classList.remove('active');
        if (content.classList.contains(title)) {

        }
    });
}