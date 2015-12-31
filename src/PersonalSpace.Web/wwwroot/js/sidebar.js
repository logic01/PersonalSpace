/* site.js */

(function () {

    var $sidebar = $("#sidebar");
    var $icon = $("#sidebartoggle i.fa");

    $("#sidebartoggle").on("click", function () {

        $sidebar.toggleClass("hide-sidebar");

        if ($sidebar.hasClass("hide-sidebar")) {
            $icon.removeClass("fa-angle-left");
            $icon.addClass("fa-angle-right");
        } else {
            $icon.removeClass("fa-angle-right");
            $icon.addClass("fa-angle-left");
        }
    });

})();