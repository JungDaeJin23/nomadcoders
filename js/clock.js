const clock = document.querySelector("h2#clock");

function getClock() {
	const date = new Date();
	clock.innerText =
		`${timeRule(date.getHours())}:` +
		`${timeRule(date.getMinutes())}:` +
		`${timeRule(date.getSeconds())}`;
}

function timeRule(time) {
	return String(time).padStart(2, "0");
}

getClock();
setInterval(() => {
	getClock();
}, 1000);
