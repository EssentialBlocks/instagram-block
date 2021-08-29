window.addEventListener("DOMContentLoaded", (event) => {
	const instagrams = document.getElementsByClassName(`eb-instagram__gallery`);

	console.log(instagrams);
	setTimeout(() => {
		for (let instagram of instagrams) {
			var iso;

			imagesLoaded(instagram, function () {
				iso = new Isotope(instagram, {
					itemSelector: ".instagram__gallery__col",
					percentPosition: true,
					resize: true,
					gutter: 10,
					masonry: {
						columnWidth: ".instagram__gallery__col",
						gutter: 0,
						horizontalOrder: true,
						fitWidth: true,
					},
				});
			});
		}
	}, 1000);
});
