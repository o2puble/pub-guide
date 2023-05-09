/*
    window load
*/ 
$(window).on('load',function(){	
	inputFunc.init();     
});


/*
    input function
*/ 
var inputIsClear = false;

var inputFunc = function(){
    return {
        init: function(){
            this.size();                          
        },
        size: function(){ // input size
            var $oInput = $('.o-input');              
            
            $oInput.each(function(){            
                var $this = $(this),
                    $input = $this.find('input'),
                    $inputBack = $this.find('.input-back'),
                    $inputFront = $this.find('.input-front');                

                var inputBackW = Math.floor($inputBack.outerWidth()),
                    inputFrontW = Math.floor($inputFront.outerWidth()),
                    paddingX = 14; 
                
                $input.css({
                    'padding-right': Number(inputBackW) + (paddingX),
                    'padding-left': Number(inputFrontW) + (paddingX),
                })
            })
        },        
        clearCtrl: function(target){ // input clear
            var $target = $(target),
                $targetP = $target.closest('.o-input'),
                $clearBtn = $targetP.find('.btn-input-clear'),
                $inputBack = $targetP.find('.input-back');

            var backHtml = '<div class="input-back"></div>',
                clearBtnHtml = '<button type="button" class="o-btn btn-input-clear"><span class="text-hide">문구삭제</span></button>';

            if (inputIsClear == true){				
                if ( $target.prop('readonly') || $target.prop('disabled')) return;

                if( $target.val() == '' ){ // input 값 없을 경우
                    $clearBtn.remove();
                }else { // input 값 있을 경우		                    
                    if(  $clearBtn.length !== 0 ) return;
                    
                    if( $inputBack.length == 0 ){
                        $targetP.append(backHtml);                        
                        $targetP.find('.input-back').prepend(clearBtnHtml);
                        
                    }else {
                        $targetP.find('.input-back').prepend(clearBtnHtml);
                    };
                    
                    this.size();
                };

            }else {				
                $clearBtn.remove();	

                this.size();
            }
        },
        clearDel: function(target){		
            var $target = $(target);

            $target.closest('.o-input').find('input').val('');			
        },
    }
}

var inputFunc = inputFunc();


/*
    input event
*/ 
$(document).on('focus keyup', '.o-input input', function(){
    inputIsClear = true;

    inputFunc.clearCtrl($(this));				
});	
$(document).on('focusout', '.o-input input', function(){
    inputIsClear = false;

    inputFunc.clearCtrl($(this));				
});	
$(document).on('mousedown', '.btn-input-clear', function(){	
    inputIsClear = true;

    inputFunc.clearDel($(this));	
    
    inputIsClear = false;	
});	