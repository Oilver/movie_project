
		var scroll = document.getElementById("scroll");
		var pic = document.getElementById("pic");
		var lists = document.getElementById("list").getElementsByTagName('li');
		var hotAs = document.querySelectorAll(".showing ul>li>a:first-child");
		var hotNames = document.querySelectorAll(".showing ul>li>a:first-child div p");
		var comingShowImg = document.querySelectorAll("#coming_showing ul>li>a:first-child");
		var comingShowNames = document.querySelectorAll("#coming_showing ul>li>a:first-child div p");
		var index = 0;
		var timer = null;
		// 定义并调用自动播放函数  
        if(timer){  
			  clearInterval(timer);  
			  timer=null;  
		  }  
	    timer=setInterval(autoplay,5000);  
		  // 定义图片切换函数  
	    function autoplay(){  
		   index++;  
		   (index >= lists.length) && (index = 0);  
		   changeoptions(index);  	
	   }  
		// 鼠标划过整个容器时停止自动播放  
	   scroll.onmouseover=function(){  
		clearInterval(timer);  
	   }  
	   //鼠标离开整个容器时继续播放至下一张  
		scroll.onmouseout=function(){  
		timer=setInterval(autoplay,5000);  
	   }  
		// 遍历所有数字导航实现划过切换至对应的图片  
		 for(var i=0;i<lists.length;i++){  
			 lists[i].id=i;  
			 lists[i].onmouseover=function(){  
				 clearInterval(timer);  
				 changeoptions(this.id);  
				 }  
			 }  
		function changeoptions(count){  
			for(var j=0;j<lists.length;j++){  
			  lists[j].className='';  
			
		    }  
		    lists[count].className='active';  
		    pic.style.top = -count * 450 + "px"; 
		    index=count;  
		}   
		for(var i = 0; i < hotAs.length; i++){
			hotAs[i].style.backgroundImage = "url(Image/index/" + hotNames[i].innerHTML +".jpg)";	
		}
		for(var i = 0; i < comingShowImg.length; i++){
			comingShowImg[i].style.backgroundImage = "url(Image/index/" + comingShowNames[i].innerHTML +".png)";
		}

	