const WebSocket = require('ws');

// returns a frame encoded in base64
const getFrame = () => {
    const canvas = document.createElement('canvas');
    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;
    canvas.getContext('2d').drawImage(video, 0, 0);
    const data = canvas.toDataURL('image/png');
    return data;
}

const WS_URL = location.origin.replace(/^http/, 'ws');
const FPS = 3;
const ws = new WebSocket(WS_URL);

ws.onopen = () => {
    console.log(`Connected to ${WS_URL}`);
    setInterval(() => {
        ws.send(getFrame());
    }, 1000 / FPS);
}