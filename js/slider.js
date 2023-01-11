$(function() {
    $('.slider').each(function() {
        var $slides = $(this).find('img'),
            slideNum = $slides.length,
            currentIdx = 1;
        
        $(".slider img").eq(currentIdx).fadeIn();

        setTimeout(dispNextSlide, 3000);

        function dispNextSlide() {
            var nextIdx = currentIdx + 1;

            if (nextIdx > (slideNum)) {
                nextIdx = 0;
            }

            $(".slider img").eq(currentIdx).fadeOut();
            $(".slider img").eq(nextIdx).fadeIn();

            currentIdx = nextIdx;
        }
    });
});