
export default class BurgerMenu {
	constructor() {
		this.button = document.querySelector(".info__burger");
		this.menu = document.querySelector(".header__container");
		this.body = document.body;
		this.overlay = document.querySelector(".overlay");

		this.button.addEventListener("click", (e) => {
			e.stopPropagation();
			this.toggleMenu();
		});

		document.addEventListener("click", (e) => {
			if (
				!e.target.closest(".header__container") &&
				!e.target.closest(".info__burger")
			) {
				this.closeMenu();
			}
		});

		this.overlay.addEventListener("click", () => {
			this.closeMenu();
		});
	}

	toggleMenu() {
		this.button.classList.toggle("burger--open");
		this.menu.classList.toggle("header__container--open");
		this.body.classList.toggle("no-scroll");
		this.overlay.classList.toggle("overlay--open");
	}

	closeMenu() {
		this.button.classList.remove("burger--open");
		this.menu.classList.remove("header__container--open");
		this.body.classList.remove("no-scroll");
		this.overlay.classList.remove("overlay--open");
	}
}


document.addEventListener("click", (e) => {
	const link = e.target.closest("[data-modal-link]");

	if (link) {
		// закрываем бургер
		document
			.querySelector(".header__container")
			.classList.remove("header__container--open");
	}
});