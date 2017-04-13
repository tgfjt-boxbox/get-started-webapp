console.log('client.js start');

document.addEventListener('DOMContentLoaded', function () {
  console.log('DOMContentloaded start');

  console.log('DOMContentloaded end');
}, false);

console.log('client.js end');

// 上の DOMContentLoaded と同じことをやってる jQueryが提供してるready関数
$(function() {
  console.log('jQuery ready start');
  console.log('$ は window.$ であり、window.jQuery である。');

  // $('a.page-scroll') = class="page-scroll" であり、a要素を取得するセレクタ
  $('a.page-scroll').on('click', function(event) {
    console.info('a.page-scroll click');
    var $anchor = $(this);

    // #about が行き先だとすると、id="about" を見つけてきて top 座標を取得して、
    // そこにアニメーションしながらスクロールしていく、500ms かけて。
    $('html, body').animate({
      scrollTop: $($anchor.attr('href')).offset().top
    }, 500, 'swing');

    // a要素がクリックされたときの、デフォルトの挙動を止める（URLが#aboutにならない）
    event.preventDefault();
  });
  console.log('jQuery ready end');
});
