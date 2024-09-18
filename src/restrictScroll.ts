document.addEventListener("DOMContentLoaded", function() {
    // Disable scrolling
    document.body.style.overflow = 'hidden';

    // Enable scrolling after 6 seconds
    setTimeout(function() {
        document.body.style.overflow = 'auto';
    }, 6000);
});