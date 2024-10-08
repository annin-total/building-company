// マウスストーカー
const stalker = document.querySelector(".mouse-stalker");
document.addEventListener("mousemove", function (e) {
  if (e.clientX < 290) {
    stalker.style.opacity = "0";
  } else {
    stalker.style.opacity = "1";
    stalker.style.transform =
      "translate(" + e.clientX + "px, " + e.clientY + "px)";
  }
});

const stalkerLinkObj = document.querySelectorAll("a, button, .ms-plus");
for (let i = 0; i < stalkerLinkObj.length; i++) {
  stalkerLinkObj[i].addEventListener("mouseover", function () {
    // stalker.style.transform = 'translate(' + e.clientX + 'px, ' + e.clientY + 'px) scale(3)';
    stalker.classList.add("g-ms-hover");
  });
  stalkerLinkObj[i].addEventListener("mouseout", function () {
    // stalker.style.transform = 'translate(' + e.clientX + 'px, ' + e.clientY + 'px) scale(1)';
    stalker.classList.remove("g-ms-hover");
  });
}

// Youtube埋め込み
$(function () {
  $("#videoPlay").YTPlayer(); //動画の呼び出し部分に指定したID
});

// フッタースクロール
window.addEventListener("scroll", function () {
  const item = document.querySelector(".footer-container");
  const cover = this.document.querySelector(".footer-cover");
  const targetTop = item.offsetTop;

  if (window.scrollY + 800 > targetTop) {
    cover.classList.add("show");
  } else {
    cover.classList.remove("show");
  }
});
