document.addEventListener('DOMContentLoaded', () => {

    addEventListener('animationend', event => {
        let images = document.getElementsByClassName('full-viewport-image');
        let texts = document.getElementsByClassName('overlay-text');
        if (images.length == 0 || texts.length == 0) {
            return
        }
        let parent = document.getElementById('animation-overlay');
        parent.removeChild(images[0]);
        parent.removeChild(texts[0]);
    })
})