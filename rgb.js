var ns=6,sl=2,mark=true,pckcolor;
var color=[];
var square=document.querySelectorAll(".square");
var nav=document.querySelector(".A1");
var msg=document.querySelector(".message");
var easy=document.querySelector("#easybtn");
var hard=document.querySelector("#hardbtn");
var pick=document.querySelector("#pick");
var rst=document.querySelector("#reset");
init(ns);sqlist();
hard.addEventListener("click",function(){
	if(sl===1 && mark)
	{
	ns=6;
    init(ns);sqlist();
    hard.classList.add("selected");
    easy.classList.remove("selected");
    sl=2;
   }
});

easy.addEventListener("click",function(){
	if(sl===2 && mark)
	{
	ns=3;
    init(ns);sqlist();
    easy.classList.add("selected");
    hard.classList.remove("selected");
    sl=1;
    }
});
rst.addEventListener("click",function(){
    if(sl==2)
     {ns=6;hard.classList.add("selected");
    easy.classList.remove("selected");}
    else
     {ns=3;
       easy.classList.add("selected");
    hard.classList.remove("selected");
    } 	
    rst.textContent="NEW COLOR";
     init(ns); sqlist();mark=true;
});
rst.addEventListener("mouseover",function(){
	rst.classList.add("selected");
});
rst.addEventListener("mouseout",function(){
	rst.classList.remove("selected");
});

function init(x)
{
color=randomcolor(x);
fillcolor();
 message.textContent="";
pckcolor=colorpicker(ns);
nav.style.background="#75BBFE";
pick.textContent=pckcolor;
}
function randomcolor(x)
{
   var y=[];
  for(var i=0;i<x;i++)
   {
   	  var r=Math.floor(Math.random()*256);
   	  var g=Math.floor(Math.random()*256);
   	  var b=Math.floor(Math.random()*256);
      y.push("rgb("+r+", "+g+", "+b+")" );	  
   }
   return y;
}
function fillcolor()
{
	for(var i=0;i<square.length;i++)
	{
		if(color[i])
		{
			square[i].style.background=color[i];
			square[i].style.display="block";
		}
		else
		square[i].style.display="none";
	}
}
function colorpicker()
{
	return color[Math.floor(Math.random()*ns)];
}

function sqlist()
{
	for(var i=0;i<square.length;i++)
	 if(color[i])
      {
      	  if(color[i]===pckcolor)
          {
          square[i].onclick=function(){
             message.textContent="You Won!!";
             rst.textContent="Play Again?";

             for(var j=0;j<square.length;j++)
              square[j].style.background=pckcolor;

             nav.style.background=pckcolor;
             mark=false;
          }
          }
          else
           {
           square[i].onclick=function(){
           	  if(mark)
               {
               	this.style.background="#232323";
            	message.textContent="Try Again";
               }
            }
           }
          
		}
	  
}