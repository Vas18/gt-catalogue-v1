import $ from 'jquery';
global.jQuery = $;
global.$ = $;
$(document).ready(function () {
    $(".s-Navbar_b-Tab").click(function () {
        $(".s-Navbar_b-Root").removeClass("isActive");
        $(".s-Navbar_b-Nav_wrapper").addClass("isActive");
    });

    $(".s-Navbar_b-NavItem_link").click(function () {
        $(this).siblings().addClass("__currentLevel");
    });

    // back menu
    $(".s-Navbar_b-Level_controls").click(function () {
        $(this).closest(".s-Navbar_b-Level").removeClass("__currentLevel");
    });

    // show/hide menu on scroll
    var CurrentScroll = 100;
    $(window).scroll(function(){
        var NextScroll = $(this).scrollTop();
        if (window.matchMedia("(max-width: 991px)").matches) {
            if (NextScroll > CurrentScroll){
                setTimeout( function () {
                    $(".s-Tapbar").removeClass("isActive");
                }, 500);
            }
            else {
                $(".s-Tapbar").addClass("isActive");

            }
        } 
        CurrentScroll = NextScroll;


    });


});
