(function ($) {
    'use strict';

    $(function () {
        $('.choose-progress-item__bar span[data-progress]').each(function () {
            var progress = parseFloat($(this).attr('data-progress'));

            if (Number.isNaN(progress)) {
                progress = 0;
            }

            progress = Math.min(100, Math.max(0, progress));
            $(this).css('width', progress + '%');
        });

        $('.acc__title').on('click', function (e) {
            var dropDown = $(this)
                .closest('.acc__card')
                .find('.acc__panel');

            $(this)
                .closest('.acc')
                .find('.acc__panel')
                .not(dropDown)
                .slideUp();

            if ($(this).hasClass('active')) {
                $(this).removeClass('active');
            } else {
                $(this)
                    .closest('.acc')
                    .find('.acc__title.active')
                    .removeClass('active');

                $(this).addClass('active');
            }

            dropDown.stop(false, true).slideToggle();

            e.preventDefault();
        });
    });
})(jQuery);
