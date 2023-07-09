window.onload = function () {
  const startbtn = document.querySelector(".start-btn");
  const controls = document.querySelector(".controls");
  const trees = document.querySelector(".trees");
  const car = document.querySelector(".car");
  const track = document.querySelector(".track");
  const wheel = document.querySelectorAll(".wheel>img");

  const audio = document.createElement("audio");
  audio.setAttribute("src", "sound.mp3");

  startbtn.addEventListener("click", function () {
    controls.style.display = "none";
    for (let i = 0; i < wheel.length; i++) {
      wheel[i].style.animation = "wheelRotation linear .16s infinite";
    }
    track.style.animation = "carMove linear 6s infinite";
    trees.style.animation = "shakebody linear 6s infinite";
    car.style.animation = "carShake linear 3s infinite";
    car.style.left = "444px";
    audio.loop = true;
    audio.play();
  });
};