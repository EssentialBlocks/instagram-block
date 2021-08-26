window.addEventListener("DOMContentLoaded", (event) => {
	const wrappers = document.getElementsByClassName(`eb-instagram__gallery`);

	console.log(wrappers);
	for (let wrapper of wrappers) {
		console.log(wrappers);
		let leftImage = wrapper.getAttribute("data-hudai");
		console.log(leftImage);
	}
});
