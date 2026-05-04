import HeaderFixed from "./header.js";
import BurgerMenu from "./burger.js";
import Modal from "./modal.js";
import { initOurHalls } from "./our-halls.js";
import { initHowToBook } from "./how-to-book.js";
import "./footer.js";

document.addEventListener("DOMContentLoaded", () => {
	initOurHalls();
	initHowToBook();
});

try {
	const headerFixed = new HeaderFixed({
		HEADER: "header",
		HEADER_FIXED: "header--fixed",
	});

	new BurgerMenu(
		{
			BURGER: "burger",
			BURGER_OPEN: "burger--open",
			HEADER_CONTAINER: "header__container",
			HEADER_CONTAINER_OPEN: "header__container--open",
			lABEL: {
				OPEN: "Открыть меню",
				CLOSE: "Закрыть меню",
			},
			PAGE_BODY: "page__body",
			PAGE_BODY_NO_SCROLL: "page__body--no-scroll",
			MENU_LINK: "menu__link",
			BREAKPOINT: 1420,
			MAIN: "main",
		}
	);

	new Modal({
		PAGE_BODY: "page__body",
		PAGE_BODY_NO_SCROLL: "page__body--no-scroll",
	});

	
} catch (error) {
	console.error(error);
}
