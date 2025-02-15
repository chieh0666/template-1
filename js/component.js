// 網頁預載入js
$(document).ready(function(){
  $('.search-input').focus(function(){
    $('.search-form').removeClass('border-secondary-subtle').addClass('border-primary');
    $('.search-btn').removeClass('border-secondary-subtle').addClass('border-primary');
  })

  $('.search-input').blur(function(){
    $('.search-form').removeClass('border-primary').addClass('border-secondary-subtle');
    $('.search-btn').removeClass('border-primary').addClass('border-secondary-subtle');
  })

  /* 首頁商品分類選單 */
  for (let i = 1; i <= 5; i++) {
    $('.cat-' + i).hover(
      function() {
        $('.cat-' + i + '-ls').removeClass('d-none');
      },
      function() {
        $('.cat-' + i + '-ls').addClass('d-none');
      }
    );
    $('.cat-' + i + '-ls').hover(
      function() {
      $('.cat-' + i + '-ls').removeClass('d-none');
    },
      function() {
        $('.cat-' + i + '-ls').addClass('d-none');
      }
    );
    const catLists = document.querySelectorAll('.cat-' + i + '-ls');
    catLists.forEach(list => {
      list.style.left = 'calc(0px + 15.625rem)';
      const spans = list.querySelectorAll('span');
      const lastSpan = spans[spans.length - 1];
      if (lastSpan) {
        lastSpan.style.display = 'none';
      }
    });
  }
  
  // 首頁論播圖
  const container = document.getElementById("bannerCarousel");
  const options = { infinite: true, Autoplay: {timeout: 3000} };
  new Carousel(container, options, { Autoplay });
});