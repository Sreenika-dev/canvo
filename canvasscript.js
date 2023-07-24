const canvas = document.getElementById("firstCanvas");
const context = canvas.getContext("2d");
const inputBox = document.getElementById("inputBox");
let clickCount = 0;

function redFill() {
  context.fillStyle = "#FF0000";
  context.fillRect(10, 20, 180, 180);
}
function greenFill() {
  context.fillStyle = "#00FF00";
  context.fillRect(280, 30, 180, 180);
}
function drawButton() {
  context.beginPath();
  context.moveTo(20, 130);
  context.lineTo(30, 40);
  context.stroke();
  context.strokeStyle = "red";
}
function clearCanvas() {
  context.clearRect(10, 20, 480, 180);
}

function triggerInputBox() {
  inputBox.style.display = "block";
  clickCount++;
  if (clickCount == 2) {
    inputBox.style.display = "none";
    clickCount = 0;
  } else {
    setTimeout(function () {
      clickCount = 0;
    }, 300);
  }

  //embedImage() implementing embedding image feature
}
