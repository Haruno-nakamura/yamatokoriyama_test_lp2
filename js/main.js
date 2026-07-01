// スクロールで .jsFadeIn 要素をフェードイン表示
(function () {
  var targets = document.querySelectorAll(".jsFadeIn");

  function checkFade() {
    var windowH = window.innerHeight;
    targets.forEach(function (el) {
      var top = el.getBoundingClientRect().top;
      if (top < windowH * 0.9) {
        el.classList.add("isEnable");
      }
    });
  }

  window.addEventListener("scroll", checkFade);
  window.addEventListener("resize", checkFade);
  window.addEventListener("load", checkFade);
  checkFade();
})();

// 巡れるおすすめスポット：矢印ボタンで横スクロール
(function () {
  var track = document.getElementById("spotsTrack");
  if (!track) return;
  var cardWidth = 246; // .spot-card flex-basis(230) + gap(16)
  var prevBtn = document.getElementById("spotPrev");
  var nextBtn = document.getElementById("spotNext");
  prevBtn.addEventListener("click", function () {
    track.scrollBy({ left: -cardWidth * 2, behavior: "smooth" });
  });
  nextBtn.addEventListener("click", function () {
    track.scrollBy({ left: cardWidth * 2, behavior: "smooth" });
  });
})();
