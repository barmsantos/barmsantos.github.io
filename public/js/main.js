$(document).ready(function() {

    // Your original smooth scroll
    $('.smoothscroll').on('click', function(e) {
        e.preventDefault();
        var target = $(this.hash);
        if (target.length) {
            $('html, body').animate({
                scrollTop: target.offset().top - 48
            }, 1500, 'easeInOutExpo');
        }
    });

    // Your navbar
    $(".navbar-collapse a").on('click', function() {
        $(".navbar-collapse.collapse").removeClass('in');
    });

    // === ENDLESS RIGHTWARD IMAGE REPEAT ===
    var gallery = document.getElementById('coolGallery');
    if (gallery) {

        var isPaused = false;
        var rafId;

        // CLONE IMAGES + FORCE NEW TAB ON ALL LINKS
        var originals = gallery.querySelectorAll('a');
        originals.forEach(function(link) {
            link.setAttribute('target', '_blank');  // Originals = new tab
            link.setAttribute('rel', 'noopener noreferrer'); 
        });

        for (var i = 0; i < 10; i++) {
            originals.forEach(function(original) {
                var clone = original.cloneNode(true);
                clone.setAttribute('target', '_blank');  // Clones = new tab too
                gallery.appendChild(clone);
            });
        }

        function scrollLoop() {
            if (!isPaused) {
                gallery.scrollLeft += 1;  // Perfect speed
            }
            rafId = requestAnimationFrame(scrollLoop);
        }

        scrollLoop();

        // IMAGE HOVER PAUSE
        var images = gallery.querySelectorAll('img');
        images.forEach(function(img) {
            img.addEventListener('mouseenter', function() { isPaused = true; });
            img.addEventListener('mouseleave', function() { isPaused = false; });
        });
    }




});
