let arr=document.querySelectorAll("a")
let l=arr.length;
let i=0;
document.getElementById("apple").addEventListener("click",apple)
document.getElementById("Pixar").addEventListener("click",Pixar)
document.getElementById("Next").addEventListener("click",Next)
document.getElementById("home").addEventListener("click",home)
document.getElementById("abhim").addEventListener("click",display)
for(i=0;i<l;i++)
{
    document.querySelectorAll("a")[i].addEventListener("click",load
    )
}
function load()
{
    document.getElementById("me").style.display="flex";
}
function apple()
{
    window.open("https://www.apple.com/","_self");
    document.getElementById("apple").style.color="grey";
   
}
function Pixar()
{
    window.open("https://www.pixar.com/our-story-pixar","_self");
    document.getElementById("Pixar").style.color="grey";
}

function Next()
{
    window.open("https://www.next15.com/","_self");
    document.getElementById("Next").style.color="grey";
}
function home()
{
    document.getElementById("/index.html").style.display="blue";
    window.open("/","_self");
    
}
function display()
{
    document.getElementById("abhim").style.display="grey";
    document.getElementById("timeline").style.display="flex";
}
