var qq={stu:[
            
    {qq:"906083028",name:"何骜嘉"},
    {qq:"2839535119",name:"鄂聪"},
    {qq:"1748956358",name:"吴迪"},
    {qq:"2725799457",name:"史可"},            
    {qq:"3082890147",name:"易搏恒"},
    {qq:"1433417088",name:"朱亚非"},
    {qq:"592432060",name:"李家唯"},
    {qq:"940532970",name:"潘宇航"},
    {qq:"1098180153",name:"李文骏"},
    {qq:"1252977933",name:"朱常宇"},
    {qq:"1471823742",name:"辛建"},
    {qq:"1487703933",name:"梁嘉君"},
    {qq:"1493669423",name:"赵广源"},
    {qq:"1537430947",name:"谢闯"},
    {qq:"1539687521",name:"任天宇"},
    {qq:"1732533201",name:"潘浩"},            
    {qq:"1946366895",name:"陶智宇"},
    {qq:"1976229744",name:"王怀科"},
    {qq:"1977992196",name:"王思蒙"},
    {qq:"2155954240",name:"桂泽诚"},
    {qq:"2249813625",name:"胡逢骏"},
    {qq:"2285199302",name:"蔡家盛"},
    {qq:"2294075488",name:"罗旭东"},
    {qq:"2573139993",name:"张佳祺"},
    {qq:"2823371692",name:"李迈鑫"},           
    {qq:"2979044691",name:"黄文杰"},
    {qq:"3026588490",name:"刘宏宇"},
    {qq:"2151057013",name:"申振升"},
    {qq:"3090572781",name:"桂天睿"},
    {qq:"3138387527",name:"李家康"},           
    {qq:"3197848688",name:"王义辉"},
    {qq:"3209664835",name:"明思聪"},
    {qq:"3249873758",name:"董霄扬"},
    {qq:"1208359838",name:"汪宇"},
    {qq:"2607885177",name:"赵佳兵"},
    {qq:"2723648385",name:"黄旺"},
    {qq:"1183749388",name:"阮志晟"},          
   
],
tea:[
    {qq:"3122486916",name:"厚老师",nick:"“厚妈”"},
    {qq:"575807706",name:"李老师",nick:"冲压模具设计"},
    {qq:"2637756802",name:"高老师",nick:"CAD"},
    {qq:"463602247",name:"姜老师",nick:"语文"},
    {qq:"591716534",name:"姜老师",nick:"钳工车工"},
    {qq:"406782271",name:"李真老师",nick:"工业机器人操作"},
    {qq:"1050586948",name:"杨小平老师",nick:"数学"},
    {qq:"495614138",name:"周老师",nick:"互换性"},

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