document.addEventListener('DOMContentLoaded', function () {
    const indicator = document.getElementById('scrollIndicator');
    const indicatorContainer = document.querySelector('.indicatorContainer');

    function updateScrollIndicator() {
        const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
        const progress = (window.scrollY / totalHeight) * 100;
        indicator.style.width = `${progress}%`;
    }

    window.addEventListener('scroll', updateScrollIndicator);
});
