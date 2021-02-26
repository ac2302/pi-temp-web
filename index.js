require('dotenv').config();

const express = require('express');
const socketio = require('socket.io');

const http = require('http');
const fs = require('fs');
const path = require('path');

const app = express();
app.use(express.static(path.join(__dirname, 'public')));
const server = http.createServer(app);
const io = socketio(server);

const PORT = process.env.PORT;
server.listen(PORT, () => {
	console.log(`server live on port ${PORT}`);
});

// just send the temperature in celcius
app.get('/temp', (req, res) => {
	const temp = getTemp();
	res.send(`${temp}`);
});

// socket stuff
io.on('connection', (socket) => {
	socket.on('temp-req', () => {
		// console.log("sending");
		socket.emit('temp', getTemp());
	});
});

// function to get cpu temp
function getTemp() {
	const fc = fs.readFileSync('/sys/class/thermal/thermal_zone0/temp', 'utf-8');
	const temp = parseFloat(fc) / 1000;
	return temp;
}

