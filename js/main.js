$(document).ready(function() {
  var check_width = $(window).width();
  $(function () {
      $(window).resize(function () {
          check_width = $(window).width();
      });
      $('.gnb_menu li').hover(function () {
          if (check_width > 768) {
              $('.gnb_menu_sub_wrap', this).slideDown(300, 'swing');
          }
      }, function () {
          $('.gnb_menu_sub_wrap', this).slideUp(100, 'swing');
      });
  });
    $(".left_wrap ul a li span").click(function () {
      $(this).addClass("select_btn");
      $('.left_wrap ul a li span').not(this).removeClass("select_btn")
  });
});




/** 
  sliderStart() 슬라이더 재생
  sliderStop() 슬라이더 정지
**/
$(function () {
  var img_num = 0; // 이미지 번호
  var duration = 5000; // 인터벌 시간
  var slider;   // slider 실행 객체 변수

  // 초기화
  $('.sliders > img').fadeOut();
  $('.sliders > img').eq(img_num).fadeIn();

  // 
  function changeSlider() {
    // 전체 이미지 fadeOut
    $('.sliders > img').fadeOut();
    // 현재 이미지 fadeIn
    $('.sliders > img').eq(img_num).fadeIn();
    // pager UI 업데이트
    $('.pager > a').removeClass('active');
    $('.pager > a').eq(img_num).addClass('active');
  }

  // 슬라이더 재생
  function sliderStart() {
    slider = setInterval(function () {
      // 마지막 이미지 번호이면 처음으로 
      if (img_num >= 2) { img_num = 0 } else {
        // 다음 이미지 번호로
        img_num = img_num + 1;
      }
      changeSlider(img_num);
    }, duration);
  }

  // 슬라이더 정지
  function sliderStop() {
    clearInterval(slider);
    console.log('stop');
  }

  sliderStart();

  // 마우스가 올라가면 슬라이더 정지
  $('.sliders, .first, .second, .third').hover(
    function () {
      sliderStop();
    },
    function () {
      sliderStart();
      console.log('start');
    }
  )

  // 1번째 pager 클릭
  $('.pager > .first').click(function () {
    img_num=0;
    changeSlider();

  })
  // 2번째 페이저 클릭
  $('.pager > .second').click(function () {
    img_num=1;
    changeSlider();
  })

  // 3번째 페이저 클릭
  $('.pager > .third').click(function () {
    img_num=2;
    changeSlider();
  })

})

// $(".left_wrap ul a li span").click(function () {
//   if ($(this).hasClass("select_btn")) {
//       $(this).removeClass("select_btn");
//   } else {
//       $(this).addClass("select_btn");
//   }
// });