const scrollBtn = document.querySelector(".scroll-top");

window.addEventListener("scroll", () => {
	const scrollY = window.scrollY;
	const pageHeight = document.documentElement.scrollHeight;
	const viewport = window.innerHeight;

	const halfPage = (pageHeight - viewport) / 2;

	if (scrollY > halfPage) {
		scrollBtn.classList.add("scroll-top--visible");
	} else {
		scrollBtn.classList.remove("scroll-top--visible");
	}
});

// клик — плавно вверх
scrollBtn.addEventListener("click", () => {
	window.scrollTo({
		top: 0,
		behavior: "smooth",
	});
});
