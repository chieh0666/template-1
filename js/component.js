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
  for (let i = 1; i <= 5; i++) {
    $('.cat-' + i).hover(
      function() {
        $('.cat-' + i + '-list').removeClass('d-none');
      },
      function() {
        $('.cat-' + i + '-list').addClass('d-none');
      }
    );
    $('.cat-' + i + '-list').hover(
      function() {
      $('.cat-' + i + '-list').removeClass('d-none');
    },
      function() {
        $('.cat-' + i + '-list').addClass('d-none');
      }
    );
  }
});

// 首頁論播圖
const container = document.getElementById("myCarousel");
const options = { infinite: true, Autoplay: {timeout: 3000} };
new Carousel(container, options, { Autoplay });