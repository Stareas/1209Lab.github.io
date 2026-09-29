(function () {
  /* 轮播图片列表,改成你的图片路径 */
  var imgs = [
    '/img/banner1.jpg',
    '/img/banner2.jpg',
    '/img/banner3.jpg',
    '/img/banner4.jpg'
  ];
  var header = document.getElementById('page-header');
  if (!header) return;
  /* 隐藏原横幅背景 */
  header.style.backgroundImage = 'none';
  /* 加遮罩 */
  var overlay = document.createElement('div');
  overlay.className = 'banner-overlay';
  header.insertBefore(overlay, header.firstChild);
  /* 生成轮播图:外层淡入淡出,内层缩放 */
  imgs.forEach(function (src, i) {
    var slide = document.createElement('div');
    slide.className = 'banner-slide';
    var inner = document.createElement('div');
    inner.className = 'banner-slide-inner';
    inner.style.backgroundImage = 'url("' + src + '")';
    slide.appendChild(inner);
    slide.style.animationDelay = (i * 5) + 's';
    header.insertBefore(slide, header.firstChild);
  });
})();

/* ========== 视差:滚动时背景以 35% 速度下移,与前景错位 ========== */
(function () {
  var headerEl = document.getElementById('page-header');
  if (!headerEl) return;
  window.addEventListener('scroll', function () {
    var y = window.scrollY;
    var h = headerEl.offsetHeight;
    if (y >= h) return;
    var ty = y * 0.35;   /* 视差强度:越大错位越明显,最大别超 0.4 */
    var slides = headerEl.querySelectorAll('.banner-slide');
    for (var i = 0; i < slides.length; i++) {
      slides[i].style.transform = 'translateY(' + ty + 'px)';
    }
  }, { passive: true });
})();