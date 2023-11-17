import Typed from "typed.js";
import confetti from "canvas-confetti";

const typed = new Typed("#intro", {
  strings: ["Welcome.", "Thank you for visiting.", "Have a wonderful day."],
  typeSpeed: 50,
  loop: true,
});

const appreciateBtn = document.getElementById("appreciate");
appreciateBtn.addEventListener("click", () => {
  const myCanvas = document.createElement("canvas");
  myCanvas.style.position = "fixed";
  myCanvas.style.inset = 0;
  myCanvas.style.width = "100vw";
  myCanvas.style.height = "100vh";
  myCanvas.style.zIndex = 1;
  document.body.appendChild(myCanvas);

  const myConfetti = confetti.create(myCanvas, {
    resize: true,
    useWorker: true,
  });
  myConfetti({
    particleCount: 100,
    startVelocity: 30,
    spread: 360,
    origin: {
      x: Math.random(),
      // since they fall down, start a bit higher than random
      y: Math.random() - 0.2
    }
  });
});

// do this for 1 seconds
var duration = 1 * 1000;
var end = Date.now() + duration;

// setTimeout(function() {
  (function frame() {
    // launch a few confetti from the left edge
    confetti({
      particleCount: 7,
      angle: 60,
      spread: 55,
      origin: { x: 0 }
    });
    // and launch a few from the right edge
    confetti({
      particleCount: 7,
      angle: 120,
      spread: 55,
      origin: { x: 1 }
    });

    // keep going until we are out of time
    if (Date.now() < end) {
        requestAnimationFrame(frame);
      }
  }
  ());
// }, duration);

