$(document).ready(function() {
    $(".procurement__item-span").click(function() {
        $(this).parent().next().addClass('avatars-open');
        $(this).parent().text('Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce aenean dolor arcu tempus. At semper nascetur eu, pretium suspendisse lacus donec sed. Sit convallis aenean in amet egestas aliquet consectetur sagittis. Purus ac adipiscing eget mattis. Feugiat id ut suspendisse libero et tellus eu ut adipiscing. Felis sagittis pharetra, at mauris cras elementum varius. Sit erat nisl.');
    });
    $(".procurement__item-avatar").click(function(e) {
        e.preventDefault();
        $('.procurement__popup-stop').toggleClass("hidden");
        $('.popup-background--procurement').toggleClass("hidden");
    });
    $(".popup__closeX").click(function() {
        $('.procurement__popup-stop').addClass("hidden");
        $('.popup-background--procurement').addClass("hidden");
    });
});