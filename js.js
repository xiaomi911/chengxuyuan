$(function(){

			$(".box").swipeDown(function(){

			var index=$(".move >.active").index();
			index=index<=0?0:index-1;
			intoPage(index);

		})

		$(".box").swipeUp(function(){
			var index=$(".move >.active").index();
			var len=$(".move >section").length;
			index=index>=len-1?len-1:index+1;
			intoPage(index);

		})
		function intoPage(index){
			$(".box .move").animate({
				translateY:-index*100+"%"
			},500,"ease",function(){

				$(this).children("section").eq(index).addClass("active").siblings().removeClass("active");


			})

		}

		$(".btn img").on("tap",function(){
			$(".logTip").show();
		})
		$( ".audio" ).tap(function(){
				var $audio = $(this).find("audio")[0];
				if( $( this ).hasClass( "stop" ) ){
					$audio.play()
					$( this ).removeClass("stop")
				}else{
					$( this ).addClass("stop")
					$audio.pause()
				}
			})

	})