const daysElement = document.getElementById('days');
const hoursElement = document.getElementById('hours');
const minutesElement = document.getElementById('minutes');
const secondsElement = document.getElementById('seconds');
const tickSound = new Audio('tick.mp3'); // Replace 'tick.mp3' with the path to your tick sound file

const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const date = urlParams.get('date');
const time = urlParams.get('time');

const targetDate = new Date(date + ' ' + time);
const updateInterval = setInterval(() => {
	const now = new Date();
	const diffMs = (targetDate - now);
	const diffDays = Math.floor(diffMs / 86400000); // days
	const diffHrs = Math.floor((diffMs % 86400000) / 3600000); // hours
	const diffMins = Math.round(((diffMs % 86400000) % 3600000) / 60000); // minutes
	const diffSecs = Math.round((((diffMs % 86400000) % 3600000) % 60000) / 1000); // seconds

	daysElement.innerText = diffDays.toString().padStart(2, '0');
	hoursElement.innerText = diffHrs.toString().padStart(2, '0');
	minutesElement.innerText = diffMins.toString().padStart(2, '0');
	secondsElement.innerText = diffSecs.toString().padStart(2, '0');

	if (diffMs <= 0) {
		clearInterval(updateInterval);
		daysElement.innerText = '00';
		hoursElement.innerTexthoursElement.innerText = '00';
		min = 'utesElement.innerText = 00';
		secondsElement.innerText = '00';
	}

	if (diffSecs !== secondsElement.innerText) {
		tickSound.play();
	}
}, 1000);