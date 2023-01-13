//ハンバーガースクリプト//
$(function() {
    $('.btn-gNav').on("click", function(){
      $(this).toggleClass('open');
      $('#gNav').toggleClass('open');
      });
  });
  //ハンバーガースクロール固定//
  $(function() {
  $('.btn-gNav').on("click", function(){
      $(this).toggleClass('is-fixed');
      $('html').toggleClass('is-fixed');
      });
  });
  $(function() {
      $('.gNav-menu li a').on("click", function(){
      $('#gNav').removeClass('is-fixed');
      });
  });