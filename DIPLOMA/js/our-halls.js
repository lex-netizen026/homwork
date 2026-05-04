export function initOurHalls() {
	const section = document.querySelector(".our-halls");
	if (!section) return;

	//swiper---- desktop version >992px */

	var swiperDV = new Swiper(".our-halls .mySwiperDV", {
		spaceBetween: 10,
		slidesPerView: 6,
		freeMode: true,
		watchSlidesProgress: true,
	});

	var swiper2DV = new Swiper(".our-halls .mySwiper2DV", {
		loop: true,
		spaceBetween: 10,
		navigation: {
			nextEl: ".our-halls-dv .swiper-button-next",
			prevEl: ".our-halls-dv .swiper-button-prev",
		},
		thumbs: {
			swiper: swiperDV,
		},
	});

	/*swiper---- mobile version <=992px */

	var swiperMV = new Swiper(".our-halls .mySwiperMV", {
		spaceBetween: 10,
		slidesPerView: 4,
		freeMode: true,
		watchSlidesProgress: true,
	});

	var swiper2MV = new Swiper(".our-halls .mySwiper2MV", {
		loop: true,
		spaceBetween: 10,
		navigation: {
			nextEl: ".our-halls-mv .swiper-button-next",
			prevEl: ".our-halls-mv .swiper-button-prev",
		},
		thumbs: {
			swiper: swiperMV,
		},
	});

	// tabulation

	function getActiveSwiper() {
		return window.innerWidth > 992 ? swiper2DV : swiper2MV;
	}

	const mvSection = document.querySelector(".our-halls-mv");
	const mvItems = mvSection.querySelectorAll(".choose__item");

	const dvSection = document.querySelector(".our-halls-dv");
	const dvItems = dvSection.querySelectorAll(".choose__item");

	// clicks

	function handleClick(items, index) {
		const swiper = getActiveSwiper();

		items.forEach((el) => el.classList.remove("choose__item--active"));
		items[index].classList.add("choose__item--active");

		swiper.slideToLoop(index);
	}

	mvItems.forEach((item, index) => {
		item.addEventListener("click", () => handleClick(mvItems, index));
	});

	dvItems.forEach((item, index) => {
		item.addEventListener("click", () => handleClick(dvItems, index));
	});

	// synchronization

	[swiper2DV, swiper2MV].forEach((swiper) => {
		if (!swiper) return;

		swiper.on("slideChange", () => {
			const index = swiper.realIndex;

			// MV
			mvItems.forEach((el) => el.classList.remove("choose__item--active"));
			if (mvItems[index]) {
				mvItems[index].classList.add("choose__item--active");
			}

			// DV
			dvItems.forEach((el) => el.classList.remove("choose__item--active"));
			if (dvItems[index]) {
				dvItems[index].classList.add("choose__item--active");
			}
		});
	});

	// buttons----prev <-> next

	const prevBtns = document.querySelectorAll(".hall-prev");
	const nextBtns = document.querySelectorAll(".hall-next");

	prevBtns.forEach((btn) => {
		btn.addEventListener("click", () => {
			getActiveSwiper().slidePrev();
		});
	});

	nextBtns.forEach((btn) => {
		btn.addEventListener("click", () => {
			getActiveSwiper().slideNext();
		});
	});

	[swiper2DV, swiper2MV].forEach((swiper) => {
		if (!swiper) return;

		swiper.on("slideNextTransitionStart", () => {
			nextBtns.forEach((btn) => btn.classList.add("is-active"));
			prevBtns.forEach((btn) => btn.classList.remove("is-active"));
		});

		swiper.on("slidePrevTransitionStart", () => {
			prevBtns.forEach((btn) => btn.classList.add("is-active"));
			nextBtns.forEach((btn) => btn.classList.remove("is-active"));
		});
	});

	// buttons ---- counter

	const counters = document.querySelectorAll(".our-halls__counter");

	const totalSlides = Math.max(
		swiper2DV?.slides.length || 0,
		swiper2MV?.slides.length || 0,
	);

	counters.forEach((counter) => {
		const total = counter.querySelector(".span-total");
		if (total) total.textContent = totalSlides;
	});

	[swiper2DV, swiper2MV].forEach((swiper) => {
		if (!swiper) return;

		swiper.on("slideChange", () => {
			const index = swiper.realIndex + 1;

			counters.forEach((counter) => {
				const current = counter.querySelector(".span-current");
				if (current) current.textContent = index;
			});
		});
	});

	// descriptions of halls

	const hallData = [
		{ number: "№ 1", size: "20 м2", capacity: "до 5-ти человек" },
		{ number: "№ 2", size: "25 м2", capacity: "до 8-ти человек" },
		{ number: "№ 3", size: "30 м2", capacity: "до 10-ти человек" },
		{ number: "№ 4", size: "45 м2", capacity: "до 15-ти человек" },
		{ number: "№ 5", size: "50 м2", capacity: "до 20-ти человек" },
		{ number: "№ 6", size: "60 м2", capacity: "до 30-ти человек" },
	];

	const descriptions = document.querySelectorAll(".our-halls__description");

	function updateDescription(index) {
		const data = hallData[index];
		if (!data) return;

		descriptions.forEach((desc) => {
			const items = desc.querySelectorAll("li");

			if (items[0]) items[0].textContent = data.number;
			if (items[1]) items[1].textContent = data.size;
			if (items[2]) items[2].textContent = data.capacity;
		});
	}

	[swiper2DV, swiper2MV].forEach((swiper) => {
		if (!swiper) return;

		swiper.on("slideChange", () => {
			const index = swiper.realIndex; 
			updateDescription(index);
		});
	});

	updateDescription(0);
}

