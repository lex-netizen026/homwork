const items = document.querySelectorAll(".choose__item");
const halls = document.querySelectorAll(
	".new-wrapper__grid-sp-1, .new-wrapper__grid-sp-2, .new-wrapper__grid-sp-3, .new-wrapper__grid-sp-4, .new-wrapper__grid-sp-5",
);

// КЛИК (фиксируем)
items.forEach((item, index) => {
	item.addEventListener("click", () => {
		items.forEach((el) => el.classList.remove("choose__item--active"));
		item.classList.add("choose__item--active");

		halls.forEach((hall) => hall.classList.remove("hall--active"));
		halls[index].classList.add("hall--active");
	});
});

// HOVER (временный эффект)
items.forEach((item, index) => {
	item.addEventListener("mouseenter", () => {
		halls[index].classList.add("hall--hover");
	});

	item.addEventListener("mouseleave", () => {
		halls[index].classList.remove("hall--hover");
	});
});
