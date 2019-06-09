// get video dom element
const video = document.querySelector('video');

// request access to webcam
navigator.mediaDevices.getUserMedia({video: {
    width: { min: 480, ideal: 720, max: 1080 },
    height: { min: 480, ideal: 720, max: 1080 }
  }}).then((stream) => video.srcObject = stream);

