/*===================
    Preloader
=====================*/
$(window).on('load', function () {
    $('#preloader').delay(350).fadeOut('slow');
    $('#status').fadeOut();
});

/*===================
    Arrow-Down
=====================*/
$(function () {
    $("a.smooth-scroll").on('click', function(event) {
        if (this.hash !== "") {
            event.preventDefault();
            var hash = this.hash;
            $('html, body').animate({
                scrollTop: $(hash).offset().top - 64
            }, 1000, function(){
                window.location.hash = hash;
            });
        }
    });
})
/*===================
    Team
=====================*/
$(function () {
    $("#team-members").owlCarousel({
        items: 2,
        autoplay: true,
        smartSpeed: 700,
        loop: true,
        autoplayHoverPause: true,
        nav: true,
        dots: false,
        navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>']
    });
});
/*===================
    Progress Bar
=====================*/
$(function () {
    $("#progress-elements").waypoint(function () {
        $(".progress-bar").each(function () {
            $(this).animate({
                width: $(this).attr("aria-valuenow") + "%"
            }, 1000);
        });
        this.destroy();

    }, {
        offset: 'bottom-in-view'
    });
});

/*===================
    Responsive Tabs
=====================*/
$(function () {
    $('#services-tabs').responsiveTabs({
        animation: 'slide'
    });

});

/*======================
    Portfolio
=====================*/
$(window).on('load', function () {
    $('.isotope-container').isotope({});
    $(".isotope-filters").on("click", "button", function () {
        var filterValue = $(this).attr("data-filter");
        $('.isotope-container').isotope({
            filter: filterValue
        });
        //Active Button
        $(".isotope-filters").find(".active").removeClass("active");
        $(this).addClass("active");

    });

});

/*======================
    Magnific POP Up
=====================*/
$(function () {
    $('#portfolio-wrapper').magnificPopup({
        delegate: 'a', // child items selector, by clicking on it popup will open
        type: 'image',
        gallery: {
            enabled: true
        }
        // other options
    });
});
/*======================
    Testimonials
=====================*/
$(function () {
    $("#testimonial-slider").owlCarousel({
        items: 1,
        autoplay: true,
        smartSpeed: 700,
        loop: true,
        autoplayHoverPause: true,
        nav: true,
        dots: false,
        navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>']
    });
});

/*======================
    Counter Up
=====================*/
$(function () {
    $('.counter').counterUp({
        delay: 10,
        time: 2000
    });
});

/*======================
    Client Section
=====================*/
$(function () {
    $("#clients-list").owlCarousel({
        items: 6,
        autoplay: true,
        smartSpeed: 700,
        loop: true,
        autoplayHoverPause: true,
        nav: true,
        dots: false,
        navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>']
    });
});
/*======================
    Navbar
=====================*/
$(function () {
    showHideNavBar()
    $(window).scroll(function () {
        showHideNavBar()
    });
    function showHideNavBar(){
        if($(window).scrollTop()>50){
            $('nav').addClass('white-top-nav');
            $('.navbar-brand img').attr('src','img/logo/logo-dark.png');
            $('.btn-back-to-top').fadeIn()
        }else{
            $('nav').removeClass('white-top-nav');
            $('.navbar-brand img').attr('src','img/logo/logo.png');
            $('.btn-back-to-top').fadeOut()
        }
    }
});

/*======================
    Mobile Navbar
=====================*/
$(function () {
    $('#mobile-nav-open-btn').click(function () {
        $("#mobile-nav").css("height","100%");
    })
    $("#mobile-nav-close-btn,.mobile-nav-content a").click(function () {
        $("#mobile-nav").css("height","0%");
    })
});

/*======================
    Mobile Navbar
=====================*/
