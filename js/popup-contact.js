$(document).ready(function() {
    $('.btn-attach').click(function(e) {
        e.preventDefault();
        $('.select-card').toggleClass("hidden");
    });
    $('.select-card__item').click(function() {
        $(this).children().children().toggleClass("opa");
        $(this).children('.platform-card__item-invite').toggleClass("hidden");
    });
    $('.select-card__button').click(function() {
        $('.select-card').addClass("hidden");
    });
    $(function() {
        $("ul.tabs__caption").on("click", "li:not(.active)", function() {
            $(this)
                .addClass("active")
                .siblings()
                .removeClass("active")
                .closest("div.tabs")
                .find("div.tabs__content")
                .removeClass("active")
                .eq($(this).index())
                .addClass("active");
        });
    });
    $('.meeting-platform__button-copy').click(function() {
        $('#code')[0].select(); 
        document.execCommand('copy');
        $('#code').append(' ');
        $('#code').val().slice(0, -1);
    });
    $('.platform__generate').click(function() {
        $('.platform__generate-link').toggleClass("hidden");
        $(this).toggleClass("platform__generate--disable");
    });
    $('.platform__title .popup__closeX').click(function() {
        $('.popup__meetings-platform').addClass("hidden");
        $('.popup-background--lounge').addClass("hidden");

    });
    $('.popup__chat-invite').click(function() {
        $("html, body").animate({ scrollTop: 0 }, 500);
        $('.popup__meetings-platform').toggleClass("hidden");
        $('.popup-background--lounge').toggleClass("hidden");
    });
    $('.popup-contact .popup__closeX').click(function(e) {
        e.preventDefault();
        $('.popup-contact').addClass("hidden");
        $('.popup__meetings-platform').addClass("hidden");
        $('.popup-background--lounge').addClass("hidden");
        $('.select-card').addClass("hidden");
    });
    $('.for-step-1').click(function() {
        $("html, body").animate({ scrollTop: 1250 }, 1000);
        $('.popup-contact').removeClass(" step-1 step-2 step-3 step-4");
        $('.popup-contact').addClass("step-1");
        $('.popup-contact').removeClass("hidden");
    });
    $('.for-step-2').click(function() {
        $("html, body").animate({ scrollTop: 1250 }, 1000);
        $('.popup-contact').removeClass(" step-1 step-2 step-3 step-4");
        $('.popup-contact').addClass("step-2");
        $('.popup-contact').removeClass("hidden");
    });
    $('.for-step-3').click(function() {
        $("html, body").animate({ scrollTop: 1250 }, 1000);
        $('.popup-contact').removeClass("step-1 step-2 step-3 step-4");
        $('.popup-contact').addClass("step-3");
        $('.popup-contact').removeClass("hidden");
    });
    $('.for-step-4').click(function() {
        $("html, body").animate({ scrollTop: 1250 }, 1000);
        $('.popup-contact').removeClass("step-1 step-2 step-3 step-4");
        $('.popup-contact').addClass("step-4");
        $('.popup-contact').removeClass("hidden");
    });
    $('.lounge-contact-1').click(function() {
        $('.popup-contact').removeClass(" step-1 step-2 step-3 step-4");
        $('.popup-contact').addClass("step-1");
        $('.popup-contact').removeClass("hidden");
    });
    $('.lounge-contact-2').click(function() {
        $('.popup-contact').removeClass(" step-1 step-2 step-3 step-4");
        $('.popup-contact').addClass("step-2");
        $('.popup-contact').removeClass("hidden");
    });
    $('.lounge-contact-3').click(function() {
        $('.popup-contact').removeClass("step-1 step-2 step-3 step-4");
        $('.popup-contact').addClass("step-3");
        $('.popup-contact').removeClass("hidden");
    });
    $('.lounge-contact-4').click(function() {
        $('.popup-contact').removeClass("step-1 step-2 step-3 step-4");
        $('.popup-contact').addClass("step-4");
        $('.popup-contact').removeClass("hidden");
    });
})
