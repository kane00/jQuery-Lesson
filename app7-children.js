$(function(){
	// 「button要素がクリックされたときに、処理を実行してください」の意味
    $('button').on('click', function(){
    	// childrenは「ul要素の子要素」、つまり、li要素が対象になります
        $('ul').children().css('color','red');
    });
});
