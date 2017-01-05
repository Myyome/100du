$(function(){

	//搜素框切换
	
	(function(){
		var oSearch=$('#search');
		var aLi=oSearch.find('.switch li');
		var arr=['例如：荷棠鱼坊烤鱼 或 樱花日本料理',
				 '例如：樱花日本料理或 荷棠鱼坊烤鱼',
				 '例如：彼岸鱼坊烤鱼 或 樱花日本料理',
				 '例如：碧莲日本料理或 荷棠鱼坊烤鱼',
				 '例如：宝宝鱼坊烤鱼 或 樱花日本料理'
				]
		var oInput=oSearch.find('.form .text');
		var iNow=0;
		oInput.val(arr[iNow]);
		aLi.each(function(index){
			$(this).click(function(){
				aLi.attr('class','gradient');
				$(this).attr('class','active');
				iNow=index;
				oInput.val(arr[iNow]);
			});
		})
		//console.log(iNow);
		oInput.focus(function(){
			console.log(iNow);
		if($(this).val()==arr[iNow]){
			$(this).val('');
		}
		});
		oInput.blur(function(){
		if($(this).val()==''){
			$(this).val(arr[iNow]);
		}
		});
	})();
		//切换选项卡
		
		(function(){
			var aLi1=$('#opt1 .tab li');
			var aLi2=$('#opt2 .tab li');
			var aUl=$('.con ul');
			var aImg=$('.con .img');
			fnTab(aLi1,aUl,'click');
			fnTab(aLi2,aImg,'click');
			fnTab($('.tab_opt1 li'),$('.list1 ul'),'mouseover');
			fnTab($('.tab_opt2 li'),$('.list2 ul'),'mouseover');
			function fnTab(aLi,aCon,oEvent){
					aLi.each(function(index){
						$(this).on(oEvent, function(){
							$(this).addClass('active');
							$(this).siblings('li').removeClass('active');
							$(this).find('a').attr('class','down_red');
							//console.log($(this).find('a'));
							$(this).siblings('li').find('a').attr('class','down_gray');
							aCon.hide();
							aCon.eq(index).show();
					});
				})
			}
		})();

		//update
		
		(function(){
			var oUl=$('.warp ul');
			var arrData = [
			{ 'name':'萱萱', 'time':4, 'title':'那些灿烂华美的瞬间', 'url':'http://www.miaov.com/2013/' },
			{ 'name':'畅畅', 'time':5, 'title':'广东3天抓获涉黄疑犯', 'url':'http://www.miaov.com/2013/#curriculum' },
			{ 'name':'萱萱', 'time':6, 'title':'国台办回应王郁琦', 'url':'http://www.miaov.com/2013/#about' },
			{ 'name':'畅畅', 'time':7, 'title':'那些灿烂华美的瞬间', 'url':'http://www.miaov.com/2013/#message' },
			{ 'name':'萱萱', 'time':8, 'title':'那些灿烂华美的瞬间', 'url':'http://www.miaov.com/2013/' },
			{ 'name':'畅畅', 'time':9, 'title':'广东3天抓获涉黄疑犯', 'url':'http://www.miaov.com/2013/#curriculum' },
			{ 'name':'萱萱', 'time':10, 'title':'国台办回应王郁琦', 'url':'http://www.miaov.com/2013/#about' },
			{ 'name':'畅畅', 'time':11, 'title':'那些灿烂华美的瞬间', 'url':'http://www.miaov.com/2013/#message' }
		];
			var str='';
			for(var i=0;i<arrData.length;i++)
			{
				str+='<li><a href="'+arrData[i].url+'"><strong>'+arrData[i].name+'</strong><span class="time">'+arrData[i].time+'分钟前</span><span class="cont">'+arrData[i].title+'</span></a></li>'
			}
			oUl.html(str);
			//console.log(oUl.children().innerHeight());
			var iH=oUl.children().innerHeight();
			var aLinkup=$('.warp').siblings('.up');
			var aLinkdown=$('.warp').siblings('.down_red');
			var iNow=0;
			var timer=null;
			aLinkup.click(function(){
				Move(-1);
			});
			aLinkdown.click(function(){
				Move(1);
			});
			autoPlay();
			$('.warp').hover(function() {
				clearInterval(timer);
			}, autoPlay);
			function autoPlay()
			{
				timer=setInterval(function(){
					Move(-1);
				},2000)
			}
			function Move(number){
				iNow=iNow+number;
				if(iNow>0)
				{
					iNow=0;
				}
				if(Math.abs(iNow)>arrData.length-1)
				{
					iNow=0;
				}
				oUl.stop().animate({'top':iH*iNow}, 2000,'elasticOut');
			}
		})();

		//图片切换
		
		(function(){
			var oUl=$('.recommend .img_list');
			var aLi=oUl.find('li');
			var iNow=0;
			var timer=null;
			var aOlLi=$('.recommend ol li');
			var oP=$('.recommend p');
			aOlLi.click(function(){
				iNow=$(this).index();
				list();
			})
			list();
			autoPlay();
			function autoPlay(){
				timer=setInterval(function(){
					if(iNow>=2){
						iNow=0;
					}
					else{
						iNow++;
					}
					list();
				},2000)
			}
			function list()
			{
				aLi.each(function(index) {

				if(index==iNow)
				{
					console.log();
					aLi.eq(index).fadeIn().css('zIndex',2);
					aOlLi.eq(index).attr('class','active');
				}
				else
				{
					aLi.eq(index).fadeOut() .css('zIndex',1);
					aOlLi.eq(index).removeClass('active');
				}
			});
			}
		})();

		//BBS 切换
		
		(function(){
			var aLi=$('.bbs ul li');
			aLi.mouseover(function(){
				$(this).attr('class','active');
				$(this).siblings('li').removeClass('active');
			})
		})();
		
		//日历
		
		(function(){
			var oRili=$('.rili');
			var aLi=oRili.find('li');
			var oDiv=oRili.find('.today_menu');
			var oSpan=oRili.find('h3 span');
			var timer=null;
				aLi.find('img').hover(function() {
				oDiv.show();
				//console.log($(this).parents('li').position().top);
				var oTop=$(this).parents('li').position().top-30;
				var oLeft=$(this).parents('li').position().left+50;
				oDiv.css('top',oTop);
				oDiv.css('left',oLeft);
				oDiv.html('<em></em><img src="'+$(this).attr('src')+'" alt="" /><h4><span>'+oSpan.eq($(this).parents('li').index()%oSpan.length).text()+'</span><strong>本日主题XXXXXXX</strong><p>'+$(this).attr('info')+'</p><input class="com_btn" type="button" value=""></h4>');
				//console.log($(this).parents('li').index()%7);
			}, function () {
				timer=setTimeout(function(){
					console.log(2);
					oDiv.hide();
				},1000)
			});
				oDiv.hover(function() {
					console.log(1);
					clearTimeout(timer);
				}, function() {
					timer=setTimeout(function(){
					oDiv.hide();
				},500)
				});
		})();

		//p
		
		(function(){
			var arr = [
			'',
			'用户1<br />人气1',
			'用户名：性感宝贝<br />区域：朝阳CBD<br />人气：124987',
			'用户3<br />人气3',
			'用户4<br />人气4',
			'用户5<br />人气5',
			'用户6<br />人气6',
			'用户7<br />人气7',
			'用户8<br />人气8',
			'用户9<br />人气9',
			'用户10<br />人气10'
		];
			var aLi=$('.hong li');
			aLi.each(function(index){
				$(this).hover(function() {
					if(index==0) return;
					$(this).addClass('active');
					$(this).siblings('li').removeClass('active')
					var oP=$('<p style="width:'+($(this).find('img').width()-12)+'px;height:'+($(this).find('img').height()-12)+'px;">'+arr[index]+'</p>');
					$(this).append(oP);		

				}, function() {
					aLi.find('p').remove();
					aLi.removeClass('active');
				});
			})
		})()
});