var qq={stu:[         

    {qq:"2151057013",name:"申振升"},            
   
],
tea:[
    {qq:"3122486916",name:"龙老师",nick:"“指导老师”"},
    

]
};

var href="https://qlogo4.store.qq.com/qzone/";
var end="/100?1567337770";
var student=document.getElementById("member").getElementsByClassName("student")[0];
var teacher=document.getElementById("member").getElementsByClassName("teacher")[0];
for(var i=0;i<qq.stu.length;i++){
//console.log(qq.stu[i].name)
var mem=document.createElement("div");
mem.className="mem";

var img=document.createElement("img")
img.src=href+qq.stu[i].qq+"/"+qq.stu[i].qq+end;
mem.appendChild(img);

var p=document.createElement("p");
p.innerHTML=qq.stu[i].name;
mem.appendChild(p);


student.appendChild(mem);
}
//console.log(qq.stu.length)
for(var i=0;i<qq.tea.length;i++){
//console.log(qq.tea[i].name)
var mem=document.createElement("div");
mem.className="mem";

var img=document.createElement("img")
img.src=href+qq.tea[i].qq+"/"+qq.tea[i].qq+end;
mem.appendChild(img);

var p=document.createElement("p");
p.innerHTML=qq.tea[i].name;
mem.appendChild(p);

if(qq.tea[i].nick!=undefined){
    var next=document.createElement("p");
    next.innerHTML=qq.tea[i].nick;
    next.className="nick";
    mem.appendChild(next);
}

teacher.appendChild(mem);
}

//roundpic
const change=document.getElementById("change").getElementsByTagName("a");
var changeF=0;

function chang(){
//change[changeF].className="on";
for(var i=0;i<change.length;i++) {
    //console.log(change[i]);
    change[i].className="none";
}
change[changeF].className="on";
changeF+1>=change.length?changeF=0:changeF++;
}
chang()
setInterval("chang()", 2500);

//playmusci
function playPause()
{
var music=document.getElementById("mymusic");
var pic=document.getElementById("musicPIC");      
if(music.paused)
   {
       music.play();
       pic.className="on";
      
   }
else
   {
       music.pause();//停止音乐
       pic.className="none";             
       
   }
}
