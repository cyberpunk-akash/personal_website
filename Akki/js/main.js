/* https://www.w3schools.com/cssref/css_selectors.asp
link for CSS selectors
Dont forget to add " " in Jquery commands*/
/*Dont write html stuff in this. It's tough to do changes later*/


console.log("Hi,welcome");
var name ="Akash Hegde";
var mycolor = "#e8491d";
var fontsize= "32px";
var mybackground ="laptop";
var html_img=0;
/*if value changed to 1, images of html and css change*/
/*dont usually use variables for depicting font-size*/

$(".highlight").text(name);
$("footer p").text(name + "Web Design, Copyright © 2018");
$(".highlight").css("color",mycolor);
$(".highlight").css("font-size",fontsize);

if (mybackground=="laptop")/*to change background image*/
{
  $("#showcase").css("background","url(img/showcase.jpg)");
}
else {
  $("#showcase").css("background","url(img/cap.jpg)");
}
/*to change content(url,height and width) of image*/
if(html_img!=1)
{
  //document.getElementsByTagName('img')[0].src="img/html2.jpeg";
   $("img:first").attr("src","img/html2.jpeg");
   $("img:first").width(120);
   $("img:first").height(95);
   $("<h3>Change html_img to 1 to change images </h3>").insertAfter($("#boxes .container .box:nth-child(2) p "));
   $("#boxes .container .box:nth-child(2) img").attr("src","img/css2.png");
   $("#boxes .container .box:nth-child(2) img").height(100);
   $("#boxes .container .box:nth-child(2) img").width(120);
   //use (.box + p) selector to access the second element(para) of a particular class/id
}
else {
  document.getElementsByTagName('img')[0].src="img/logo_html.png";
}
 var skills=["HTML","CSS","Bootstrap","JavaScript", "JQuery"];

$("<p><h2>My skillsets are: </h2></p><ul class ='mySkills'></ul> ").insertAfter($("#showcase .container h1"));
for(var i=0; i < skills.length ; i++ )
{
  $("<li><h4>" + skills[i] + "</h4></li>").appendTo($('.mySkills'));
}
