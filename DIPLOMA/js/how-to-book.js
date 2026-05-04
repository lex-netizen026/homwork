export function initHowToBook() {
	const section = document.querySelector(".htbn");
	if (!section) return;

	const htbnSwiper = new Swiper(".htbn .swiper", {
		grabCursor: true,
		initialSlide: 0,
		centeredSlides: true,
		slidesPerView: "auto",
		spaceBetween: 106,
		freeMode: false,
		on: {
			click() {
				this.slideTo(this.clickedIndex);
			},
			init() {
				updateSlideNumber(this);
			},
			slideChange() {
				updateSlideNumber(this);
			},
		},
	});

	// Подстраховка: сразу после создания
	updateSlideNumber(htbnSwiper);

	// номер слайда
	function updateSlideNumber(swiper) {
		const index = swiper.realIndex + 1;

		// удалить старые бейджи
		document.querySelectorAll(".slide-badge").forEach((el) => el.remove());

		// найти активный слайд
		const activeSlide = swiper.slides[swiper.activeIndex];
		if (!activeSlide) return;

		// создать элемент
		const badge = document.createElement("div");
		badge.className = "slide-badge";
		badge.textContent = index;

		activeSlide.appendChild(badge);
	}

	// buttons----prev <-> next

	const prevMob = section.querySelectorAll(".mobile-prev");
	const nextMob = section.querySelectorAll(".mobile-next");

	prevMob.forEach((mob) => {
		mob.addEventListener("click", () => {
			htbnSwiper.slidePrev();
		});
	});

	nextMob.forEach((mob) => {
		mob.addEventListener("click", () => {
			htbnSwiper.slideNext();
		});
	});

	[htbnSwiper].forEach((swiper) => {
		if (!swiper) return;

		swiper.on("slideNextTransitionStart", () => {
			nextMob.forEach((mob) => mob.classList.add("is-active"));
			prevMob.forEach((mob) => mob.classList.remove("is-active"));
		});

		swiper.on("slidePrevTransitionStart", () => {
			prevMob.forEach((mob) => mob.classList.add("is-active"));
			nextMob.forEach((mob) => mob.classList.remove("is-active"));
		});
	});

	// buttons ---- counter

	function initCounter(swiper) {
		const counters = document.querySelectorAll(".htbn-wrapper__counter");

		const totalSlides = swiper.slides.length;

		counters.forEach((counter) => {
			const total = counter.querySelector(".htbn-span-total");
			const current = counter.querySelector(".htbn-span-current");

			if (total) total.textContent = totalSlides;
			if (current) current.textContent = swiper.realIndex + 1;
		});

		swiper.on("slideChange", () => {
			const index = swiper.realIndex + 1;

			counters.forEach((counter) => {
				const current = counter.querySelector(".htbn-span-current");
				if (current) current.textContent = index;
			});
		});
	}

	initCounter(htbnSwiper);
}

