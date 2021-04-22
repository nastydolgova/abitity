$(document).ready(function() {
  $(".js-menu").click(function() {
    $('.top__line_menu').slideToggle();
  });
  $(".js-sidebar").click(function() {
    $('.stand-sidebar').toggleClass("active");
  });
  $(".btn-sidebar").click(function(e) {
    e.preventDefault;
    $('.dashboard-sidebar').toggleClass("close");
    $('.dashboard-sidebar').toggleClass("move");
    $(".dashboard-content").toggleClass("active");
    $(this).parent().toggleClass("active");
  });
  $(".js-dashboard-nav").click(function() {
    $('.dashboard-sidebar').toggleClass("active");
    $('body').toggleClass("overflow");
  });
  $(".icon-arr").click(function() {
    $(this).next().slideToggle("active");
    $(this).toggleClass("active");
  });
  $(".account-link").click(function() {
    $(this).next().slideToggle();
    $(this).toggleClass("active");
  });
  $(".nav-link").click(function() {
    $(this).next().slideToggle();
    $(this).toggleClass("active");
  });
  $(".btn-favorite, .js-favorite").click(function(e) {
    e.preventDefault()
    $(this).toggleClass("active");
  });
  $(".game__question_item-title").click(function(e) {
    if ($(this).parent().hasClass("current")) {} else {
      $('.game__question_item-content').slideUp();
      $(this).next().slideDown();
      $('.game__question_item').removeClass("current");
      $(this).parent().addClass("current");
    }
  });
  $('.question-input input').keyup(function() {
    checkInput($(this));
  });

  function checkInput(event) {
    if (event.val() == "") {
      event.parent().parent().parent().parent().removeClass("prev");
    } else {
      console.log(event.val());
      event.parent().parent().parent().parent().addClass("prev");
    }
  };
  $(".game__question_item").first().find(".game__question_item-content").show();
  $(".next").click(function(e) {
    e.preventDefault();
    let currentQuestions = $(this).parent().parent().parent().parent();
    let currentQuestionsContent = $(this).parent().parent().parent();
    let nextQuestions = $(this).parent().parent().parent().parent().next();
    let nextQuestionsContent = nextQuestions.find(".game__question_item-content");
    currentQuestions.removeClass("current");
    currentQuestionsContent.slideUp();
    nextQuestions.addClass("current");
    nextQuestionsContent.slideDown();
  });
  $(".icon-user").click(function() {
    $(".panel_dropdown").toggleClass("active");
    $(this).toggleClass("active");
  });
  $('.pop').magnificPopup({
    type: 'inline',
    removalDelay: 500,
    callbacks: {
      beforeOpen: function() {
        this.st.mainClass = this.st.el.attr('data-effect');
      }
    },
    midClick: true
  });
  $('.m-close').on("click", function() {
    $.magnificPopup.close();
  });
  // scroll element on note
  $('.notes__message-content').slimScroll({
    height: 'auto',
    railVisible: 'true',
    touchScrollStep: 50,
    alwaysVisible: 'true',
    disableFadeOut: 'true'
  });
  $('.chats__items').slimScroll({
    height: 'auto',
    railVisible: 'true',
    touchScrollStep: 50,
    alwaysVisible: 'true',
    disableFadeOut: 'true'
  });
  $('.all__agenda').slimScroll({
    height: 'auto',
    railVisible: 'true',
    touchScrollStep: 50,
    alwaysVisible: 'true',
    disableFadeOut: 'true'
  });
  $('.my__agenda').slimScroll({
    height: 'auto',
    railVisible: 'true',
    touchScrollStep: 50,
    alwaysVisible: 'true',
    disableFadeOut: 'true'
  });
  $('[data-gallery]').lightGallery({
    selector: 'a',
    download: false,
    thumbnail: false,
    fullScreen: false,
    share: false,
    hash: false
  });
  $('.tab-nav a').click(function(e) {
    e.preventDefault();
    var click_id = $(this).attr('id');
    if (click_id != $('.tab-nav a.active').attr('class')) {
      $('.tab-nav a').removeClass('active');
      $(this).addClass('active');
      $('.tabs  div').removeClass('active');
      $('.con_' + click_id).addClass('active');
    };
    $(".grid").masonry('reload');
  });
  $('.tab-nav-info a').click(function(e) {
    e.preventDefault();
    var click_id = $(this).attr('id');
    if (click_id != $('.tab-nav-info a.active').attr('class')) {
      $('.tab-nav-info a').removeClass('active');
      $(this).addClass('active');
      $('.full_info-content  div').removeClass('active');
      $('.con_' + click_id).addClass('active');
    };
    $(".grid").masonry('reload');
  });
  $('.tab-nav a').click(function(e) {
    e.preventDefault();
    var click_id = $(this).attr('id');
    if (click_id != $('.tab-nav a.active').attr('class')) {
      $('.tab-nav a').removeClass('active');
      $(this).addClass('active');
      $('.build__item').removeClass('active');
      $('.con_' + click_id).addClass('active');
    };
    massonryReload();
  });
  $('.nav-gallery a').click(function(e) {
    e.preventDefault();
    var click_id = $(this).attr('id');
    if (click_id != $('.nav-gallery a.active').attr('class')) {
      $('.nav-gallery a').removeClass('active');
      $(this).addClass('active');
      $('.gallery-items  div').removeClass('active');
      $('.con_' + click_id).addClass('active');
    };
    massonryReload();
  });
  $('.nav-gallery-me a').click(function(e) {
    e.preventDefault();
    var click_id = $(this).attr('id');
    if (click_id != $('.nav-gallery-me a.active').attr('class')) {
      $('.nav-gallery-me a').removeClass('active');
      $(this).addClass('active');
      $('.gallery-items-me  div').removeClass('active');
      $('.con_' + click_id).addClass('active');
    };
    massonryReload();
  });
  (function() {
    "use strict";
    var toggles = document.querySelectorAll(".c-hamburger");
    for (var i = toggles.length - 1; i >= 0; i--) {
      var toggle = toggles[i];
      toggleHandler(toggle);
    };

    function toggleHandler(toggle) {
      toggle.addEventListener("click", function(e) {
        e.preventDefault();
        (this.classList.contains("is-active") === true) ? this.classList.remove("is-active"): this
          .classList.add("is-active");
      });
    }
  })();
  $('.conference-slider').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    infinite: true,
    arrows: true,
    autoplay: true,
    dots: false,
    responsive: [{
      breakpoint: 1200,
      settings: {
        fade: false,
        slidesToShow: 3
      }
    }, {
      breakpoint: 980,
      settings: {
        fade: false,
        slidesToShow: 2
      }
    }, {
      breakpoint: 768,
      settings: {
        fade: false,
        slidesToShow: 1
      }
    }, {
      breakpoint: 560,
      settings: {
        fade: false,
        slidesToShow: 1
      }
    }]
  });
  $('.sponsors-slider').slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    infinite: true,
    arrows: true,
    autoplay: true,
    dots: false,
    responsive: [{
      breakpoint: 1200,
      settings: {
        fade: false,
        slidesToShow: 4
      }
    }, {
      breakpoint: 980,
      settings: {
        fade: false,
        slidesToShow: 3
      }
    }, {
      breakpoint: 768,
      settings: {
        fade: false,
        slidesToShow: 2
      }
    }, {
      breakpoint: 420,
      settings: {
        fade: false,
        slidesToShow: 1
      }
    }]
  });
  $('.dashboard__conference-slider').slick({
    slidesToShow: 2,
    slidesToScroll: 1,
    infinite: true,
    arrows: true,
    autoplay: true,
    dots: false,
    responsive: [{
      breakpoint: 1390,
      settings: {
        fade: false,
        slidesToShow: 1
      }
    }, {
      breakpoint: 980,
      settings: {
        fade: false,
        slidesToShow: 2
      }
    }, {
      breakpoint: 768,
      settings: {
        fade: false,
        slidesToShow: 1
      }
    }, {
      breakpoint: 420,
      settings: {
        fade: false,
        slidesToShow: 1
      }
    }]
  });
  $('.dashboard__job-slider').slick({
    slidesToShow: 2,
    slidesToScroll: 1,
    infinite: true,
    arrows: true,
    autoplay: true,
    dots: false,
    responsive: [{
      breakpoint: 1390,
      settings: {
        fade: false,
        slidesToShow: 1
      }
    }, {
      breakpoint: 980,
      settings: {
        fade: false,
        slidesToShow: 2
      }
    }, {
      breakpoint: 768,
      settings: {
        fade: false,
        slidesToShow: 1
      }
    }, {
      breakpoint: 420,
      settings: {
        fade: false,
        slidesToShow: 1
      }
    }]
  });

  function massonryReload() {
    var $grid = $('.grid').masonry({
      itemSelector: '.grid-item',
      percentPosition: true,
      columnWidth: '.grid-sizer'
    });
    // layout Masonry after each image loads
    $grid.imagesLoaded().progress(function() {
      $grid.masonry();
    });
  }
});
$(document).ready(function() {
  $('.js-edit, .js-save, .js-cancel').on('click', function(e) {
    e.preventDefault();
    var $form = $(this).closest('.message__item-c');
    $form.toggleClass('is-readonly is-editing');
    var isReadonly = $form.hasClass('is-readonly');
    $form.find('input,textarea').prop('disabled', isReadonly);
  });
  var tx = document.getElementsByClassName('field-msg');
  for (var i = 0; i < tx.length; i++) {
    tx[i].setAttribute('style', 'height:' + (tx[i].scrollHeight + 22) + 'px;overflow-y:hidden;');
    tx[i].addEventListener("input", OnInput, false);
  }

  function OnInput() {
    this.style.height = '1px';
    this.style.height = (this.scrollHeight + 6) + 'px';
  }
  var txMsg = document.getElementsByClassName('msgs');
  for (var i = 0; i < txMsg.length; i++) {
    txMsg[i].setAttribute('style', 'height:' + (txMsg[i].scrollHeight + 28) +
      'px;overflow-y:hidden;');
    txMsg[i].addEventListener("input", OnInputMsg, false);
  }

  function OnInputMsg() {
    this.style.height = '1px';
    this.style.height = (this.scrollHeight + 6) + 'px';
  }
});
$(window).on('load resize', function(e) {
  if (window.innerWidth < 992) {
    $(".dashboard-sidebar").removeClass("close");
    $(".dashboard-content,.btn_sidebar-item").removeClass("active");
  } else {}
}).trigger('resize');
$(document).ready(function() {
  $('select').not('.chat-content__files-select').each(function() {
    var $this = $(this),
      numberOfOptions = $(this).children('option').length;
    $this.addClass('select-hidden');
    $this.wrap('<div class="select"></div>');
    $this.after('<div class="select-styled"></div>');
    var $styledSelect = $this.next('div.select-styled');
    $styledSelect.text($this.children('option').eq(0).text());
    var $list = $('<ul />', {
      'class': 'select-options'
    }).insertAfter($styledSelect);
    for (var i = 0; i < numberOfOptions; i++) {
      $('<li />', {
        text: $this.children('option').eq(i).text(),
        rel: $this.children('option').eq(i).val()
      }).appendTo($list);
    }
    var $listItems = $list.children('li');
    $styledSelect.click(function(e) {
      e.stopPropagation();
      $('div.select-styled.active').not(this).each(function() {
        $(this).removeClass('active').next('ul.select-options').hide();
      });
      $(this).toggleClass('active').next('ul.select-options').toggle();
    });
    $listItems.click(function(e) {
      e.stopPropagation();
      $styledSelect.text($(this).text()).removeClass('active');
      $this.val($(this).attr('rel'));
      $list.hide();
      //console.log($this.val());
    });
    $(document).click(function() {
      $styledSelect.removeClass('active');
      $list.hide();
    });
  });
  $('.accord-title').click(function() {
    $(this).toggleClass("active");
    $(".accord-txt").slideToggle();
  });
});
$(document).ready(function() {
  var vcode = (function() {
    //cache dom
    var $inputs = $(".vcode").find("input");
    //bind events
    $inputs.on('keyup', processInput);
    //define methods
    function processInput(e) {
      var x = e.charCode || e.keyCode;
      if ((x == 8 || x == 46) && this.value.length == 0) {
        var indexNum = $inputs.index(this);
        if (indexNum != 0) {
          $inputs.eq($inputs.index(this) - 1).focus();
        }
      }
      if (ignoreChar(e)) return false;
      else if (this.value.length == this.maxLength) {
        $(this).next('input').focus();
      }
    }

    function ignoreChar(e) {
      var x = e.charCode || e.keyCode;
      if (x == 37 || x == 38 || x == 39 || x == 40) return true;
      else return false
    }
  })();
});