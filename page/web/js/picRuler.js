window.onload=()=>{
    Size();    
  }
  function Size(){
   var Width=document.body.clientWidth;    
   document.getElementById("Size").setAttribute("width",Width);
   document.getElementById("Size").getElementsByTagName("text")[0].innerHTML=(Width+"px");
   document.getElementById("Size").getElementsByTagName("path")[2].setAttribute("d","M"+Width+" 10 L "+(Width-50)+" 0 L "+(Width-50)+" 20")
   document.getElementById("Size").getElementsByTagName("path")[1].setAttribute("d","M0 10 L "+Width+" 10 ")
    
  }