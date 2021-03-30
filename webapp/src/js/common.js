// import $ from 'jquery';
// global.jQuery = $;
// global.$ = $;
$(document).ready(function () {
    $(".stopPropagation").click(function (e) {
        e.stopPropagation();
    });

    // close on window
    $(window).click(function () {
        $("#collapseDiscipline").removeClass("show");
        $("[href='collapseDiscipline']").addClass("collapsed");
    });

    $(".s-Topbar_b-Location").click(function () {
        $("#collapseCity").addClass("active");
    });
    // tabs switching in menu
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

    $(".popup_l-btn").click(function () {
        let index = $(this).index(),
            dataAutocomplete = $(this).data("autocomplete");

        $(this).addClass("isActive").siblings().removeClass("isActive");
        $(".popup_l-cities").eq(index).addClass("isActive").siblings().removeClass("isActive");
        $(".input_city").attr("id",dataAutocomplete);
        
        $("#js-easyAutocomplete1").easyAutocomplete(optionsRu);
        $("#js-easyAutocomplete2").easyAutocomplete(optionsUk);
        $("#js-easyAutocomplete3").easyAutocomplete(optionsB);

    });

    let optionsRu = {
        url: "russia.json",
        getValue: "city",
        list: {
            maxNumberOfElements: 4,
            match: {
                enabled: true
            }
        }
    };
    let optionsB = {
        url: "belarus.json",
        getValue: "city",
        list: {
            maxNumberOfElements: 4,
            match: {
                enabled: true
            }
        }
    };
    let optionsUk = {
        url: "ukraine.json",
        getValue: "city",
        list: {
            maxNumberOfElements: 4,
            match: {
                enabled: true
            }
        }
    };

    $("#js-easyAutocomplete1").easyAutocomplete(optionsRu);

});
