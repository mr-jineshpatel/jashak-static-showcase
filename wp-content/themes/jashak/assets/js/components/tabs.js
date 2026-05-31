 var $ = jQuery.noConflict();

$(document).ready(function () {

    $(".tab_content").hide();
    $(".tab_content:first").show();

    $("ul.tabs li:first").addClass("active");
    $("h3.tab_drawer_heading:first").addClass("d_active");

    $("ul.tabs li").click(function () {

        $(".tab_content").hide();

        var activeTab = $(this).attr("rel");

        $("#" + activeTab).fadeIn();

        $("ul.tabs li").removeClass("active");

        $(this).addClass("active");

        $(".tab_drawer_heading").removeClass("d_active");

        $(".tab_drawer_heading[rel^='" + activeTab + "']").addClass("d_active");

    });

    $(".tab_drawer_heading").click(function () {

        $(".tab_content").hide();

        var d_activeTab = $(this).attr("rel");

        $("#" + d_activeTab).fadeIn();

        $(".tab_drawer_heading").removeClass("d_active");

        $(this).addClass("d_active");

        $("ul.tabs li").removeClass("active");

        $("ul.tabs li[rel^='" + d_activeTab + "']").addClass("active");

    });

    $('ul.tabs li').last().addClass("tab_last");

});