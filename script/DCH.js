$(function(){

  //주메뉴 마우스오버 -> 서브메뉴
  $(".mainmenu li").on({
    mouseover:function(){
      $(".submenu",this).stop().slideDown();
    },
    mouseout:function(){
      $(".submenu",this).stop().slideUp();
    }
  });

  // 모바일 메뉴: 메뉴바 클릭시 나오게, X버튼 클릭시 다시 들어가게 = animate
  $(".menuB").click(function(){
    $(".m_menu").animate({right:'0'})
  });

  $(".closeB").click(function(){
    $(".m_menu").animate({right:'-100%'})
  });

  //슬라이드
  let slide = setInterval(function(){

    $(".slidebox").delay("2500")
    $(".slidebox").animate({left:'-100%'},function(){
      $(".slidebox").append($(".box:eq(0)")).css({left:'0'})
    })
  });

  //hover시 이미지 전환
  $(".sec2 .onover .top .on").on({
    mouseover:function(){
      $(".sec2 .onover .top .over").animate({opacity:'1'})
      $(".sec2 .onover .top .on").animate({opacity:'0'})
    },
    mouseout:function(){
      // $(".sec2 .onover .top .over").animate({opacity:'0'})
      $(".sec2 .onover .top .on").animate({opacity:'1'})
    }
  });


  // 실험적 프로젝트 마우스 오버시 전시 정보 아래에서 위로 올라오게 + 슬라이드
  $(".sec3 .sec3_slidebox .slide img").on({
    mouseover:function(){
      $(".sec3 .sec3_slidebox .slide .text").stop().fadeIn();
    },
    mouseout:function(){
      $(".sec3 .sec3_slidebox .slide .text").stop().fadeOut();
    }
  });


  // 프로그램 신청 / 클릭시 카드 뒤집어 지기
  // $(".sec6 .cardbox .card").click(function(){
  //   $(".sec6 .cardbox .card .text").css({ 
  //     display:'block',
  //     transformRotate:'1800deg'
  //   })
  //   // $(".sec6 .cardbox .card figure").css({display:'none'})
  // });

  $(".item").colorbox();


//////////////////////////////////////////////////////
});