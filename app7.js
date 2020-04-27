// 正方形をクリックしたときに、その正方形のみslideUpして消えるアニメーション
// class名のみ異なるイベントを4つも記述しなければならず、少し面倒
// $(function(){
	// $('.bg1').on('click', function(){
		// $('.bg1').slideUp();
	// });
	// $('.bg2').on('click', function(){
		// $('.bg2').slideUp();
	// });
	// $('.bg3').on('click', function(){
		// $('.bg3').slideUp();
	// });
	// $('.bg4').on('click', function(){
		// $('.bg4').slideUp();
	// });
// })

// thisを利用するとコードをまとめられる.「クリックされた要素」を指しています。
// 「box1クラスの正方形がクリックされたとき、this（クリックされた要素）のみslideUpさせる」という設定
$(function(){
	$('.box1').on('click', function(){
		$(this).slideUp();
	});
});