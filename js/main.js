
/*========== スクロールスパイの確認	 ==========*/
// $(window).on('activate.bs.scrollspy', function (e,obj) {
//   console.log(obj.relatedTarget);
// });

/*========== NAVBAR TRANSPARENT TO SOLID ==========*/
/* ---------------------------------------------------------
 トップ画面でナビメニューを透過。スクロールすると表示
---------------------------------------------------------- */
$(function() { //when document(DOM) loads completely.
        // Transition effect for navbar
        $(window).scroll(function() { //function is called while you scrolls
          // checks if window is scrolled more than 300px, adds/removes solid class
          if($(this).scrollTop() > 300) {
              $('.navbar').addClass('solid'); //add class 'solid' in any element which has class 'navbar'
          } else {
              $('.navbar').removeClass('solid'); //remove class 'solid' in any element which has class 'navbar'
          }
        });
});

/* ==== スムーズスクロール部分の記述 ===== */
/* --------------------------------------------
メニューをクリックした時、画面をスクロールしながら移動
-------------------------------------------- */
$(function(){
   // #で始まるアンカーをクリックした場合に処理
   $('a[href^="#"]').click(function() {
      // スクロールの速度
      var speed = 500; // ミリ秒
      // アンカーの値取得
      var href= $(this).attr("href");
      // 移動先を取得
      var target = $(href == "#" || href == "" ? 'html' : href);
      // 移動先を数値で取得
      var position = target.offset().top;
      // スムーススクロール
      $('body,html').animate({scrollTop:position}, speed, 'swing');
      return false;
   });
});

/*========== CLOSE MOBILE NAV ON CLICK ==========*/
/* ---------------------------------------------------------
 ハンバガーメニューでメニュー部分以外をクリックした時、メニューを閉じる
---------------------------------------------------------- */
$(function () { //when document loads completely.
    $(document).click(function (event) { //click anywhere
        var clickover = $(event.target); //get the target element where you clicked
        var _opened = $(".navbar-collapse").hasClass("show"); //check if element with 'navbar-collapse' class has a class called show. Returns true and false.
        if (_opened === true && !clickover.hasClass("navbar-toggler")) { // if _opened is true and clickover(element we clicked) doesn't have 'navbar-toggler' class
            $(".navbar-toggler").click(); //toggle the navbar; close the navbar menu in mobile.
        }
    });
});

/*========== BOUNCING DOWN ARROW ==========*/
/* ---------------------------------------------------------
 					矢印のアニメーション
---------------------------------------------------------- */
//down arrow at top
$(function(){
$(window).scroll(function(){ //browser scroll
    $(".arrow").css("opacity", 1 - $(window).scrollTop() / 250); //set opacity css from 1 to -(negative) infinity of element with class 'arrow'
  //250 is fade pixels
  });
});

/* ==== スライドショー機能(vegas)部分の記述 ===== */
$(function(){
  $('.home-inner').vegas({ //背景画像でスライドショーしたい場所の設定
    slides: [
     { src: 'img/vegas/thai1.jpg' }, //スライドする画像を配列で設定
     { src: 'img/vegas/thai2.jpg' },
     { src: 'img/vegas/thai3.jpg' },
     { src: 'img/vegas/thai4.jpg' }
    ],
     delay: 5000, //スライドまでの時間ををミリ秒単位で設定
     timer: true, //タイマーバーの表示/非表示を切り替え
     overlay: 'img/overlays/07.png', //オーバーレイする画像の設定
     animation: 'random', //スライドのアニメーションを設定
     transition: 'blur', //スライド間のエフェクトを設定
     transitionDuration: 1000 //エフェクト時間をミリ秒単位で設定
  });
});

/*========== TOP SCROLL BUTTON ==========*/
/* ---------------------------------------------------------
 トップへ戻る
---------------------------------------------------------- */
$(function() { //when document is ready
  $(window).scroll(function() { //when webpage is scrolled
    if ($(this).scrollTop() > 500) { //if scroll from top is more than 500
      $('.top-scroll').fadeIn(); //display element with class 'top-scroll'; opacity increases
    } else { //if not
      $('.top-scroll').fadeOut(); //hide element with class 'top-scroll'; opacity decreases
    }
  });
});











/*========== Fade in letter by letter ==========*/
/* ---------------------------------------------------------
 一文字ずつ表示する
---------------------------------------------------------- */
// $(function() {
// 			var $allMsg = $('要素');
// 			var $wordList = $('要素').html().split("");
// 			$('要素').html("");
// 			$.each($wordList, function(idx, elem) {
// 				var newEL = $("<span/>").text(elem).css({ opacity: 0 });
// 				newEL.appendTo($allMsg);
// 				newEL.delay(idx * 70);
// 				newEL.animate({ opacity: 1 }, 1100);
// 			});
// });
// https://qiita.com/Simmon/items/7ff63e61646888c8dcf3