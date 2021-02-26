const socket = io();


function setTemp(temp) {
	document.getElementById('temp').innerText = temp;
}


socket.on('temp', (temp) => {
	setTemp(temp);
	chartTemp(temp);
});

socket.emit('temp-req');
setInterval(() => socket.emit('temp-req'), 1000);

