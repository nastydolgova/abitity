$(document).ready(function() {
    $('.popup-reguser__button-add').click(function() {
        $('.add-to-call').toggleClass("hidden");
    });
    $('.add-to-call__item').click(function() {
        $('.add-to-call__item').css("background","#fff");
        $(this).css("background","#F7FEFA")
    });
    $('.add-to-call__button').click(function() {
        $('.add-to-call').addClass("hidden");
    });
    $('.btn-attach').click(function(e) {
        e.preventDefault();
        $('.select-card').toggleClass("hidden");
    });
    $('.select-card__item').click(function() {
        $(this).children().children().toggleClass("opa");
        $(this).parent().prev('.platform-card__item-invite').toggleClass("hidden");
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
    });
    $('.popup__chat-invite').click(function() {
        $('.popup__meetings-platform').toggleClass("hidden");
    });
})
