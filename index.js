class CountdownTimer {
	constructor({ selector, targetDate }) {
		(this.selector = selector), (this.targetDate = targetDate);
		this.start();
	}

	start() {
		setInterval(() => {
			const currentTime = Date.now();
			const deltaTime = this.targetDate - currentTime;
			const time = this.getTimeComponents(deltaTime);
			this.updateClockface(time);
		}, 1000);
	}
	getTimeComponents(time) {
		const days = this.pad(Math.floor(time / (1000 * 60 * 60 * 24)));
		const hours = this.pad(
			Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
		);
		const mins = this.pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
		const secs = this.pad(Math.floor((time % (1000 * 60)) / 1000));
		return { days, hours, mins, secs };
	}
	pad(value) {
		return String(value).padStart(2, "0");
	}
	updateClockface({ days, hours, mins, secs }) {
		const refs = {
			days: (document.querySelector(
				"[data-value='days']"
			).textContent = `${days}`),
			hours: (document.querySelector(
				"[data-value='hours']"
			).textContent = `${hours}`),
			mins: (document.querySelector(
				"[data-value='mins']"
			).textContent = `${mins}`),
			secs: (document.querySelector(
				"[data-value='secs']"
			).textContent = `${secs}`),
		};
	}
}
const timer = new CountdownTimer({
	selector: "#timer-1",
	targetDate: new Date("Nov 01, 2021"),
});
