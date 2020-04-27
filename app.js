//$(document).ready(function (){
//	$('body').html('<h1>Hello jQuery!</h1>');
//});

//↓↓紐付けコード、jQueryを使うには、HTMLと紐づけする必要があります
//$(document).ready(function () {
//   jQueryプログラムの内容
//});

//↓↓省略形
//$(function(){
//　 jQueryプログラムの内容
//});

//↓↓cssを上書きする
//$(function(){
//	$('.box1').css({
//		'background-color': '#0000FF',
//		'height': '100px'
//	});
//});

//上から下へスライド
//$(function(){
//	$('.box1').slideDown();
//});

//下から上へスライド
//$(function(){
//	$('.box1').slideUp();
//});

// 非表示をjqueryで表示させる
// $(function(){
	// $('.box1').show();
	// $('.box1').css({'background-color': '#0000FF'});
// });

// 表示をjqueryで非表示させる
$(function(){
    $('.box1').hide();
});