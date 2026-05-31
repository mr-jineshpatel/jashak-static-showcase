document.addEventListener("DOMContentLoaded", function () {

    const header = document.querySelector(".main-header");

    window.addEventListener("scroll", function () {

        if (window.scrollY > 120) {

            header.classList.add("sticky");

        } else {

            header.classList.remove("sticky");

        }

    });

});