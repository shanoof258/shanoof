// dropdown menu
$(document).ready(function(){
    // $('.navbox').hidden();
    $("#menu-icon").click(function(){
        $('.navbox').slideToggle('fast');
    }) 
});

$(document).ready(function() {
    $('.video-item').on('click', function() {
        const videoSrc = $(this).data('video');
        $('#modalVideoSource').attr('src', videoSrc);
        $('#modalVideo')[0].load();
        $('#videoModal').fadeIn();
        $('#modalVideo')[0].play();
    });

    $('.close').on('click', function() {
        $('#videoModal').fadeOut();
        $('#modalVideo')[0].pause();
    });

    $(window).on('click', function(event) {
        if ($(event.target).is('#videoModal')) {
            $('#videoModal').fadeOut();
            $('#modalVideo')[0].pause();
        }
    });
});