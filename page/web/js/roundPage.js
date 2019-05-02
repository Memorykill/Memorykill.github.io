var Elememt=document.getElementsByClassName("pptImg");
	for(var i=0;i<Elememt.length;i++){		
		ppt(i);
	}
	
function ppt(i){	
	var ppt=Elememt[i];
	var img=ppt.getElementsByTagName('div');//获取图片元素
	var imglength=img.length-1;

	var btn=document.getElementsByClassName("pptBtn")[i];
	var bt=btn.getElementsByTagName("div");	
	var clock=setInterval (function(){
		change(0);
	},5555);	
	
	bt[1].onclick=function (){
		change(0);
	}
	bt[0].onclick=function (){
		change(1);
	}
	
	var index=0;
	var last=0;
	function change(Bool){
		img[last].className="";
		
			if(Bool==0){			
				index++;
				if(index>imglength){
				index=0;
				}
				
			}else if(Bool==1){
				index--;
				if(index<0){
					index=4;
				}
			}else{
				index=Bool-2;
			}	
		
		img[index].className="on";
		
		last=index;
	}
}