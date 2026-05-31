var $ = jQuery.noConflict();

$(document).ready(function () {

    $('.wpcf7')
        .find("input.autocomplete_map")
        .each(function () {

            if (!$(this).val()) {

                $(this).attr("placeholder", "Enter Address");

            }

        });

    $("input[type='tel']").on("input", function () {

        this.value = this.value.replace(/[^0-9]/g, '');

    });

});