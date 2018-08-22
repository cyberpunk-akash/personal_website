console.log("Hi,welcome");
var name ="Akash Hegde";
var mycolor = "#e8491d";
var fontsize= "32px";
var mybackground ="laptop";
var html_img=0;/*choosing the image of html*/
/*dont usually use variables for depicting font-size*/

$(".highlight").text(name);
$("footer p").text(name + " Web Design, Copyright © 2018");
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
  document.getElementsByTagName('img')[0].src="img/html2.jpeg";
  // $("img:first").attr("src","img/html2.jpeg");
  // $("img:first").width(100);
   $("img:first").height(95);

}
else {
  document.getElementsByTagName('img')[0].src="img/logo_html.png";
}
