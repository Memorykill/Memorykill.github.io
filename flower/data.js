var qq={stu:[         
    {qq:"2272981437",name:"郭思琪",job:"会长"},
    {qq:"2601322362",name:"王悦",job:"副会长兼团支书"},
    {qq:"1909028552",name:"丁梦婷",job:"技术部长"},
    {qq:"2305093168",name:"李钰",job:"外联部部长"},
    {qq:"3086448026",name:"郑欣",job:"外联部部长"},
    {qq:"2738618768",name:"刘凤琳",job:"办公室主任"},
    {qq:"3183941913",name:"柯楠",job:"宣传部部长"},
    {qq:"2151057013",name:"申振升",job:"财务部长",href:"http://520you.club"}, 
    {qq:"2827154090",name:"周芊",job:"组织部长"},
    {qq:"2913098113",name:"待发掘"},
   
],
tea:[
    {qq:"3613116",name:"雷晶老师",nick:"指导老师"},
    // {qq:"2913098113",name:"焦巧老师",nick:"指导老师"},
    // {qq:"2913098113",name:"刘芳老师",nick:"指导老师"},

]
};

var href="http://qlogo4.store.qq.com/qzone/";
var end="/100";
var student=document.getElementById("member").getElementsByClassName("student")[0];
var teacher=document.getElementById("member").getElementsByClassName("teacher")[0];
for(var i=0;i<qq.stu.length;i++){
//console.log(qq.stu[i].name)
var mem=document.createElement("a");
mem.className="mem";
mem.name=qq.stu[i].name;
mem.href=qq.stu[i].href||"https://user.qzone.qq.com/"+qq.stu[i].qq;

var img=document.createElement("img")
img.src=href+qq.stu[i].qq+"/"+qq.stu[i].qq+end;
mem.appendChild(img);

var p=document.createElement("p");
//p.href=qq.stu[i].href||"https://user.qzone.qq.com/"+qq.stu[i].qq;
p.innerHTML=qq.stu[i].name;
mem.appendChild(p);

if(qq.stu[i].job!=undefined){
    var next=document.createElement("p");
    next.innerHTML=qq.stu[i].job;
    next.className="nick";
    mem.appendChild(next);
}

student.appendChild(mem);
}
//console.log(qq.stu.length)
for(var i=0;i<qq.tea.length;i++){
//console.log(qq.tea[i].name)
var mem=document.createElement("a");
mem.className="mem";
mem.href=qq.tea[i].href||"https://user.qzone.qq.com/"+qq.tea[i].qq;
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
