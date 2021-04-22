$(document).ready(function() {
    $(".resume__table-td--job").click(function() {
        $('.popup--job').toggleClass("hidden");
        $('.popup__background').toggleClass("hidden");
    });
    $(".resume__table-td--meet").click(function() {
        $('.popup--meet').toggleClass("hidden");
        $('.popup__background').toggleClass("hidden");
    });
    $(".resume__table-td--com").click(function() {
        $('.popup--com').toggleClass("hidden");
        $('.popup__background').toggleClass("hidden");
    });
    $(".popup__closeX").click(function() {
        $('.popup').addClass("hidden");
        $('.popup__background').addClass("hidden");
    });
    $(".popup__table-open-info").click(function() {
        let par = $(this).parent().parent()
        par.next('.popup__table-str--job-info').toggleClass("hidden").toggleClass("bg__str");
        par.toggleClass("bg__str");
    });
    $(".resume__table-td--circles svg").click(function(evt) {
        $(this).next().toggleClass("hidden");
    });
})
