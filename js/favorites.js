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
    $('.follow__button').click(function() {
        $(this).parents('.follow__item').toggleClass('unfollow');
        if($(this).text() == 'Follow'){
            $(this).text('Unfollow')
        } else {
            $(this).text('Follow')
        }
    })   
})

