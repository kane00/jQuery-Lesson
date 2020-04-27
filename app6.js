// こう書いてもいいけど、毎回書くのは面倒
// $(function(){
    // $('.box1').mouseover(function(){
    	// $('.box1').css({'background-color': '#0000FF'});
    // });
    // $('.box1').mouseout(function(){
    	// $('.box1').css({'background-color': '#FF0000'});
    // });
// });

// マウスオーバー時のCSS（class）を定義しておき（今回は.box1-ext）、
// マウスカーソルの状況に応じて、そのCSSを追加（または解除）するように設定
// $(function(){
    // $('.box1').mouseover(function(){
    	// addClass( )では、対象のHTML要素にclass属性を追加
    	// $('.box1').addClass('box1-ext');
    // });
    // $('.box1').mouseout(function(){
    	// removeClass( )では、要素に設定されているclass属性が解除
    	// $('.box1').removeClass('box1-ext');
    // });
// });

// マウスクリック」のイベントも設定できます
// クリック後に複数のイベントが行われるようにしたいので、onを付けた以下のような書き方をします
$(function(){
    $('.box1').on('click', function(){
    	// addClass( )では、対象のHTML要素にclass属性を追加
    	$('.box1').addClass('box1-ext');
    });
    $('.box1').mouseout(function(){
    	// removeClass( )では、要素に設定されているclass属性が解除
    	$('.box1').removeClass('box1-ext');
    });
});