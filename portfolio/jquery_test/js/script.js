$(function(){

	$('.content>section:odd').css('background-color','#f3f3f3');

	/*아래 부터 스크립트시작*/

	var sectionSpot=[]

	$('nav>ul>li').hover(function(){
		$(this).css('background-color','#000').children('a').css('color','#fff')
	},function(){
		$(this).css('background-color','#ccc').children('a').css('color','#000')
	})//hover end

	$('.content>section').each(function(i,e){
		sectionSpot.push($(e).offset().top)

	})//스크롤위치값


	$('nav>ul>li').click(function(){

		var idx=$(this).index()

		$('html,body').stop().animate({
			scrollTop:sectionSpot[idx]
		})
			return false
	})//nav click end

	var ran=Math.floor(Math.random()*$('.d-type .slidebanner>ul>li').length)
	movement(0,'-100%',ran)
	movement('100%',0,ran)
	var sldidx=ran;
	sldButton()

	var inter01=setInterval(function(){
		$('.slidebanner .next').trigger('click')
	},4500)
	$('.slidebanner>ul').hover(function(){
		clearInterval(inter01)
	},function(){
		inter01=setInterval(function(){
			$('.slidebanner .next').trigger('click')
		},4500)
	})//slidebanner	inter01 end


	function movement(start,end,index){
		$('.d-type .slidebanner>ul>li').eq(index).children('img')
		.css({'display':'block',
			'left':start}).stop().animate({
				left:end
			})

		if(sldidx==$('.d-type .slidebanner>ul>li').size()){
			sldidx=0
			movement('100%',0,sldidx)
			}
			else if(sldidx<0){
			sldidx=$('.d-type .slidebanner>ul>li').size()-1
			movement('-100%',0,sldidx)
			}
			sldButton()
	}//slidebanner movement end

	function sldButton(){
	$('.d-type .slidebanner>ul>li').eq(sldidx)
	.children('a')
	.css('background','#E8B482')
	.parent().siblings().children('a')
	.css('background','#FFF')
	}//slidebanner css end

	$('.slidebanner .next').click(function(){
		movement(0,'-100%',sldidx)
		sldidx++
		movement('100%',0,sldidx)
	})//slidebanner next click end

	$('.slidebanner .prev').click(function(){
		movement(0,'100%',sldidx)
		sldidx--
		movement('-100%',0,sldidx)
	})//slidebanner prev click end


	$('.d-type .slidebanner>ul>li>a').click(function(){
		var aaa=sldidx
		sldidx=$(this).parent().index();
		movement(0,'-100%',aaa)
		movement('100%',0,sldidx)
		if(sldidx<aaa){
			movement(0,'100%',aaa)
			movement('-100%',0,sldidx)
		}
	})//slidebanner click movement end


	var fadeidx=0;
	var fadeinter=setInterval(intfn,4800)

	function intfn(){
		fadeidx+=1;
		if(fadeidx == $('.e-type .fadebanner>ul>li').size){
			fadeidx=0
			fadeBn(fadeidx)
		}else{
			fadeBn(fadeidx)
		}
	}

	$('.e-type .fadebanner>ul').mouseenter(function(){
		clearInterval(fadeinter)
	}).mouseleave(function(){
		fadeinter=setInterval(intfn,4800)
	})

	function fadeBn(index){
		$('.e-type .fadebanner>ul>li').eq(index).children('img').fadeIn().parent().siblings().children('img').fadeOut()
		$('.e-type .fadebanner>ul>li').eq(index).children('a').css('background-color','#E8B482').parent().siblings().children('a').css('background-color','#FFF')
	}


	$('.e-type .fadebanner>ul>li>a').click(function(){
		idx=$(this).parent().index()
		fadeBn(idx)
		// console.log(idx)
	})


	// var fadeidx=0
	// $('.e-type .fadebanner>ul>li').eq(fadeidx).children('img').fadeIn().parent().siblings().children('img').fadeOut()
	// $('.e-type .fadebanner>ul>li').eq(fadeidx).children('a').css('background-color','#E8B482').parents().siblings().children('a').css('background-color','#FFF')
	//
	// var fadeInter=setInterval(function(){
	// 	$('.e-type .fadebanner>ul>li').eq(fadeidx).children('img').fadeIn().parent().siblings().children('img').fadeOut()
	// 	$('.e-type .fadebanner>ul>li').eq(fadeidx).children('a').css('background-color','#E8B482').parents().siblings().children('a').css('background-color','#FFF')
	// 	fadeidx+=1;
	// 		if(fadeidx == $('.e-type .fadebanner>ul>li').length){
	// 			fadeidx=0
	// 		}
	// },4800) //fadeInter end
	//
	// $('.e-type .fadebanner>ul').hover(function(){
	// 	clearInterval(fadeInter)
	// },function(){
	// 	fadeInter=setInterval(function(){
	// 		$('.e-type .fadebanner>ul>li').eq(fadeidx).children('img').fadeIn().parent().siblings().children('img').fadeOut()
	// 		$('.e-type .fadebanner>ul>li').eq(fadeidx).children('a').css('background-color','#E8B482').parents().siblings().children('a').css('background-color','#FFF')
	// 		fadeidx+=1;
	// 			if(fadeidx == $('.e-type .fadebanner>ul>li').length){
	// 				fadeidx=0
	// 			}
	// 	},4800)
	// })//fade hover end
	//
	//
	// $('.e-type .fadebanner>ul>li>a').click(function(){
	// 	var fadebtn=$(this).parent().index();
	// 	$('.e-type .fadebanner>ul>li').eq(fadebtn).children('img').fadeIn().parent().siblings().children('img').fadeOut()
	// 	$('.e-type .fadebanner>ul>li').eq(fadebtn).children('a').css('background-color','#E8B482').parents().siblings().children('a').css('background-color','#FFF')
	// })//fade click end


	$('.movie-view>ul>li>a').click(function(){
		var movUrl=$(this).attr('href')
		var path="https://www.youtube.com/embed/"+movUrl+"?rel=0&amp;controls=0&amp;showinfo=0"
		$('iframe').attr('src',path)
		$(this).children('img').css('opacity','0.5').parents('li').siblings().children('a').find('img').css('opacity','1')
		return false
	})//movie end


	$(window).scroll(function(){
		var sct=$(this).scrollTop()
		$('.wing').stop().animate({
			top:sct
		})
	})//wing end


	function close(){
		$('.blind').fadeOut(function(){
			$(this).remove()
		})
		$('.pop').fadeOut(function () {
			$('.close').remove()
		});



	}

	function blind(){
		$('body').append('<div class="blind"></div>');
		$('.blind').css('position','fixed').fadeTo(1000,0.8);
	}


	function popup(select){
		blind()
		var popW=select.width()
		var popH=select.height()
		select.append('<button class="close">닫기</button>')

		select.css({
			'position':'fixed',

			'top':'-100%',
			'left':'50%',
			'marginTop':-popH/2,
			'marginLeft':-popW/2,
			'z-index':1
			})
			select.fadeIn().animate({top:'50%'},500,function(){
            $(this).animate({top:'35%'},500)
		})
	}

	$('.pop').on('click','.close',function(){
		close()
	})

	$('.eventBt01').click(function(){
		popup($('.event1'))
	})

	$('.eventBt02').click(function(){
		popup($('.event2'))
	})

	$('.eventBt03').click(function(){
		popup($('.event3'))
	})

	$('.eventBt04').click(function(){
		popup($('.event4'))
	})






})//document end
