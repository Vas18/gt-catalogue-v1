$(document).ready(function () {
    $(".s-Navbar_b-Tab").click(function () {
        $(".s-Navbar_b-Root").removeClass("isActive");
        $(".s-Navbar_b-Nav_wrapper").addClass("isActive");
    });

    $(".s-Navbar_b-NavItem_link").click(function () {
        // $(this).hide();
        // $(".s-Navbar_b-Level").removeClass("__currentLevel");
        // $(this).closest(".s-Navbar_b-Level").removeClass("__currentLevel");
        // $(".__currentLevel").removeClass("__root");
        $(this).siblings().addClass("__currentLevel");
    });

    // back menu
    $(".s-Navbar_b-Level_controls").click(function () {
        $(this).closest(".s-Navbar_b-Level").removeClass("__currentLevel");
    });

   
});