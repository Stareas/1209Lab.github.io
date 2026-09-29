document.addEventListener('DOMContentLoaded', function () {
  var text = {
    '/archives': '按时间浏览文章',
    '/categories': '按主题浏览文章',
    '/link': '赛事官网 资源地址 友情链接',
    '/about': '济南大学 自动化与电气工程学院 1209实验室',
    '/tags': '按标签浏览文章'
  }[location.pathname.replace(/\/+$/, '')];
  if (!text) return;
  var title = document.querySelector('#page-header h1');
  if (!title || document.querySelector('.page-subtitle')) return;
  var div = document.createElement('div');
  div.className = 'page-subtitle';
  div.textContent = text;
  title.parentNode.insertBefore(div, title.nextSibling);
});