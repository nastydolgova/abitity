$(document).ready(function() {
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
    $(".open-cancel").click(function() {
        $('.popup-cancel').toggleClass("hidden");
        $('.popup__background').toggleClass("hidden");
    });
    $(".popup__closeX").click(function() {
        $('.popup-cancel').addClass("hidden");
        $('.popup__background').addClass("hidden");
    });
})
