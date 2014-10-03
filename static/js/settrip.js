
/*
 *	sun-tab
 *	made by sunpengfei 2014-9-21
 *	作者：孙鹏飞  2014-9-21
 * http://ririlvxing.com
 */
 //添加-删除天数
 $(document).ready(function() {

$("img.add").bind("click",function(){
	var i = $("ul.sidebar li").length+1;
 	$("ul.sidebar").append("<li id="+i+"><div  class='item'><a href='#'>第"+i+"天 (0)</a></div><div class='num'>"+i+"</div><div class='arrow'></div></li>");
});
$("img.minus").bind("click",function(){
	var i = $("ul.sidebar li").length-1;
 	$("ul.sidebar li:last").replaceWith();
});
$(".right-list a").bind("click",function(){
	var o = this.id;
	if(o=="tab1")
		{
			$("#tab1").addClass("hov");$("#div-1").css("display","block");
			$("#tab2").removeClass("hov");$("#div-2").css("display","none");
			$("#tab3").removeClass("hov");$("#div-3").css("display","none");

		}
	else if(o=="tab2")
	{
		$("#tab2").addClass("hov");$("#div-2").css("display","block");
			$("#tab1").removeClass("hov");$("#div-1").css("display","none");
			$("#tab3").removeClass("hov");$("#div-3").css("display","none");
	}
	else if(o=="tab3")
	{
		$("#tab3").addClass("hov");$("#div-3").css("display","block");
			$("#tab1").removeClass("hov");$("#div-1").css("display","none");
			$("#tab2").removeClass("hov");$("#div-2").css("display","none");
	}
});
var l = $(".h2").html().length;
if(l>20)
	$(".h2").html($(".h2").html().substring(0,50)+"...");

});

