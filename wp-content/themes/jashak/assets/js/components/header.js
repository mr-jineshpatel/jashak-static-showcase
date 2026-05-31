document.addEventListener("DOMContentLoaded", function () {

	/* =========================
	STICKY HEADER
	========================= */

	const header = document.querySelector(".main-header");

	window.addEventListener("scroll", function () {

		if (window.scrollY > 120) {
			header.classList.add("sticky");
		} else {
			header.classList.remove("sticky");
		}

	});

	/* =========================
	MOBILE MENU
	========================= */

	const toggleBtn = document.querySelector(".menu-toggle");
	const navbar = document.querySelector(".navbar");

	if (toggleBtn && navbar) {

		toggleBtn.addEventListener("click", function () {

			navbar.classList.toggle("active");

		});

	}

	/* =========================
	QUOTE POPUP
	========================= */

	const quotePopup = document.querySelector(".quote-popup");
	const quotePopupTriggers = document.querySelectorAll('.header-quote-popup-trigger, a[href="#quote-popup"]');
	const quotePopupCloseButtons = document.querySelectorAll("[data-quote-popup-close]");

	function openQuotePopup(event) {

		if (event) {
			event.preventDefault();
		}

		if (!quotePopup) {
			return;
		}

		quotePopup.classList.add("is-open");
		quotePopup.setAttribute("aria-hidden", "false");
		document.body.classList.add("quote-popup-open");

	}

	function closeQuotePopup() {

		if (!quotePopup) {
			return;
		}

		quotePopup.classList.remove("is-open");
		quotePopup.setAttribute("aria-hidden", "true");
		document.body.classList.remove("quote-popup-open");

	}

	quotePopupTriggers.forEach(function (trigger) {
		trigger.addEventListener("click", openQuotePopup);
	});

	quotePopupCloseButtons.forEach(function (button) {
		button.addEventListener("click", closeQuotePopup);
	});

	document.addEventListener("keydown", function (event) {
		if (event.key === "Escape") {
			closeQuotePopup();
		}
	});

/* =========================
MOBILE SUBMENU
========================= */

const menuParents = document.querySelectorAll(
	"#primary-menu .menu-item-has-children"
);

menuParents.forEach(function(menuItem){

	const directLink = menuItem.querySelector(":scope > a");

	if(directLink){

		directLink.addEventListener("click", function(e){

			if(window.innerWidth <= 991){

				e.preventDefault();

				menuItem.classList.toggle("active");

			}

		});

	}

});

});
