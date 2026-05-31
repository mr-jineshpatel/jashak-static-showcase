var $ = jQuery.noConflict();

var a = 0;

$(window).scroll(function () {

    var oTop = $("#counter-box").offset().top - window.innerHeight;

    if (a == 0 && $(window).scrollTop() > oTop) {

        $(".counter").each(function () {

            var $this = $(this);

            var countTo = $this.attr("data-number");

            $({ countNum: $this.text() }).animate({

                countNum: countTo

            },

            {

                duration: 850,

                easing: "swing",

                step: function () {

                    $this.text(
                        Math.ceil(this.countNum).toLocaleString("en")
                    );

                },

                complete: function () {

                    $this.text(
                        Math.ceil(this.countNum).toLocaleString("en")
                    );

                }

            });

        });

        a = 1;

    }

});