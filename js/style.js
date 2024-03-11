/* //-----------------ローディング画面でのlogoの表示---------------------------------------------------------------*/

$(document).ready(function () {
	$("#splash").delay(1500).fadeOut('slow');//ローディング画面を1.5秒（1500ms）待機してからフェードアウト
	$("#splash_logo").delay(1200).fadeOut('slow');//ロゴを1.2秒（1200ms）待機してからフェードアウト
});

$(document).ready(function () {
	// ローカルストレージに"visited"というキーでアクセスしたかどうかを保存
	var visited = localStorage.getItem("visited");

	// 初回訪問時のみローディング画面を表示
	if (!visited) {
		$("#splash").delay(1500).fadeOut('slow');
		$("#splash_logo").delay(1200).fadeOut('slow');

		// "visited"をtrueに設定して、次回からはローディング画面が表示されないようにする
		localStorage.setItem("visited", true);
	} else {
		// 2回目以降の訪問ではローディング画面を表示しない
		$("#splash").hide();
		$("#splash_logo").hide();
	}
});


//-----------------画面上部固定----------------------------------------------------------------------------

$(function () {
	var pos = $("#header").offset().top;
	var height = $("#header").outerHeight();
	$(window).on("scroll touchstart touchmove touchend", function () {
		console.log("Scroll event fired!");  // この行を追加
		if ($(this).scrollTop() > pos) {
			$("#header").addClass("fixed");
		} else {
			$("#header").removeClass("fixed");
		}
	});
});




//-----------------リンク先に移動----------------------------------------------------------------------------*/

$('#g-navi a[href*="#"]').click(function () {
	var elmHash = $(this).attr('href'); //ページ内リンクのHTMLタグhrefから、リンクされているエリアidの値を取得
	var pos = $(elmHash).offset().top;  //idの上部の距離を取得
	var headerHeight = $('#header').outerHeight(); // ヘッダーの高さを取得
	$('body,html').animate({ scrollTop: pos - headerHeight }, 500); //取得した位置にスクロール（ヘッダーの高さを引く）。500の数値が大きくなるほどゆっくりスクロール
	return false;
});

//-----------------他ページからリンク先に移動----------------------------------------------------------------------------
$(document).ready(function () {
	var url = window.location.href;
	var id = url.substring(url.indexOf("#") + 1);

	if (url.indexOf("#") > -1) {
		var pos = $("#" + id).offset().top;
		var headerHeight = $('#header').outerHeight();
		$('body,html').animate({ scrollTop: pos - headerHeight }, 500);
	}
});

//---------------下からスライドイン-------------------------------------------------------------------------------------------------------

// 動きのきっかけとなるアニメーションの名前を定義
function fadeAnime() {

	// ふわっ
	$('.fadeUpTrigger').each(function () { //fadeUpTriggerというクラス名が
		var elemPos = $(this).offset().top - 50;//要素より、50px上の
		var scroll = $(window).scrollTop();
		var windowHeight = $(window).height();
		if (scroll >= elemPos - windowHeight) {
			$(this).addClass('fadeUp');// 画面内に入ったらfadeUpというクラス名を追記
		} else {
			$(this).removeClass('fadeUp');// 画面外に出たらfadeUpというクラス名を外す
		}
	});
}

// 画面をスクロールをしたら動かしたい場合の記述
$(window).scroll(function () {
	fadeAnime();/* アニメーション用の関数を呼ぶ*/
});// ここまで画面をスクロールをしたら動かしたい場合の記述

// 画面が読み込まれたらすぐに動かしたい場合の記述
$(window).on('load', function () {
	fadeAnime();/* アニメーション用の関数を呼ぶ*/
});// ここまで画面が読み込まれたらすぐに動かしたい場合の記述


//------------スマートフォン用-------------------------------------------------------------------------------

$(".openbtn1").click(function () {//ボタンがクリックされたら
	$(this).toggleClass('active');//ボタン自身に activeクラスを付与し
	$("#g-navi").toggleClass('panelactive');//ナビゲーションにpanelactiveクラスを付与
});

$("#g-navi a").click(function () {//ナビゲーションのリンクがクリックされたら
	$(".openbtn1").removeClass('active');//ボタンの activeクラスを除去し
	$("#g-navi").removeClass('panelactive');//ナビゲーションのpanelactiveクラスも除去
});















