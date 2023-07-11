window.onload = function () {
  const startbtn = document.querySelector(".start-btn");
  const controls = document.querySelector(".controls");
  const trees = document.querySelector(".trees");
  const car = document.querySelector(".car");
  const track = document.querySelector(".track");
  const wheel = document.querySelectorAll(".wheel>img");
  const mobileVersion = window.matchMedia("(max-width: 600px)");
  const tabletVersion = window.matchMedia("(max-width: 992px)");
  const laptopVersion = window.matchMedia("(max-width: 1024px)");

  const audio = document.createElement("audio");
  audio.setAttribute("src", "sound.mp3");

  startbtn.addEventListener("click", function () {
    controls.style.display = "none";
    for (let i = 0; i < wheel.length; i++) {
      wheel[i].style.animation = "wheelRotation linear .16s infinite";
    }
    car.style.animation = "carShake linear 3s infinite";
    function mediaMatch(x, y, z) {
      if (x.matches) {
        car.style.left = "0";
        track.style.animation = "carMove linear 2s infinite";
        trees.style.animation = "shakebody linear 2s infinite";
      } else if (y.matches) {
        car.style.left = "200px";
        track.style.animation = "carMove linear 4s infinite";
        trees.style.animation = "shakebody linear 4s infinite";
      } else if (z.matches) {
        car.style.left = "130px";
        track.style.animation = "carMove linear 6s infinite";
        trees.style.animation = "shakebody linear 6s infinite";
      } else {
        car.style.left = "333px";
        track.style.animation = "carMove linear 6s infinite";
        trees.style.animation = "shakebody linear 6s infinite";
      }
    }
    setInterval(() => {
      mediaMatch(mobileVersion, tabletVersion, laptopVersion);
      mobileVersion.addEventListener("change", mediaMatch);
      tabletVersion.addEventListener("change", mediaMatch);
      laptopVersion.addEventListener("change", mediaMatch);
    }, 0);
    audio.loop = true;
    audio.play();
  });
};
