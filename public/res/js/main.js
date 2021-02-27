const socket = io();

let updateTime = 1000;

// update updateTime
document.getElementById("update-time").addEventListener("change", (e) => {
	updateTime = e.target.value;
	document.getElementById("update-time-display").innerText = updateTime;
});

function setTemp(temp) {
	document.getElementById("temp").innerText = temp + "°C";
	let color = "#FFF";
	if (temp <= 50) {
		color = "#0F0";
	} else if (temp > 80) {
		color = "#F00";
	}
	document.getElementById("temp").style.color = color;
}

socket.on("temp", (temp) => {
	setTemp(temp);
	plotTemp(temp);
});

// update request
const sleep = (milliseconds) => {
	return new Promise((resolve) => setTimeout(resolve, milliseconds));
};

async function sendUpdateRequest() {
	while (true) {
		socket.emit("temp-req");
		await sleep(updateTime); //wait 5 seconds
	}
}

sendUpdateRequest();
