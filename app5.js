$(function(){
	// 引数（今回ならslideDown）の中に数字を入れると1=1ミリ秒で表示される
        $('.box1').slideDown(1000, function() {
        	// slideDownしてからさらにfunctionで次行いたい動作を記入する
            $('.box1').css({
                'background-color': '#0000FF',
                'width': '200px',
                'height': '100px'
                // 終わった後の動作でslideUpを加える
            }).slideUp(1500);
        });
    });