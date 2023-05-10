/*----------------------------------------
	window load
 ----------------------------------------*/
$(window).on('load',function(){
	sourceBtnAppend()
	popupSource(); //소스보기 팝업
})



/*----------------------------------------
	popupSource		소스보기 팝업
 ----------------------------------------*/
function sourceBtnAppend(){
	$('.guide-grid-box > .item > .ex').each(function(){
		$(this).before('<div class="source-wrap"><button type="button" class="btn-source">HTML View</button></div>')
	})	
}

var popupSource = function(){
    let $sourceDim = '<div class="source-dim"></div>',
        $sourceWindow ='<div class="source-window"><div class="source-window-close">X</div><textarea class="source-view" rows="" cols="" readonly></textarea></div>';

 	$(document).on('click','.btn-source', function(){
        var tempSource = $(this).closest('.source-wrap').next().html();

		console.log($(this).parents('.source-wrap').next())
		
		$('body').append($sourceDim,$sourceWindow);		
		$('.source-window .source-view').text(tempSource);
	});
    
	$(document).on('click','.source-window .source-window-close, .source-dim', function(){
		$('.source-window, .source-dim').remove();
	});
 };



	
	



