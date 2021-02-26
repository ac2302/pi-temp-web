const socket = io();


function setTemp(temp) {
	document.getElementById('temp').innerText = temp;
}


socket.on('temp', (temp) => setTemp(temp));

socket.emit('temp-req');
setInterval(() => socket.emit('temp-req'), 5000);

