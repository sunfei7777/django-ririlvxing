/*
 * 自己写一个标注类MMarker，继承自BMap.Marker，采用的是原型链继承方式
 * no-标注编号,这个编号是跟从后台传过来的数据解析成的数组d的下标示一致的
 */
function f(data) {
 	// var map = new BMap.Map("allmap",{mapType: BMAP_HYBRID_MAP});
    map = new BMap.Map("allmap");
	// 百度地图API功能
	map.centerAndZoom(new BMap.Point(116.404, 39.915), 12);
	map.addControl(new BMap.MapTypeControl()); //卫星转换
	map.addControl(new BMap.NavigationControl());//地图平移缩放控件
	map.addControl(new BMap.OverviewMapControl());//缩略图
	map.addControl(new BMap.ScaleControl()); //比例尺
	map.enableScrollWheelZoom();//鼠标滑轮缩放
	// var local = new BMap.LocalSearch(map, {
	// 	renderOptions:{map: map}
	// });
	// local.search("景点");
}


function makeMarkAndInfoWindow(point,title,sContent,id,map)  
{   var markerImg="./img/icon.png"; 
    var icon=new BMap.Icon(markerImg,new BMap.Size(30, 30),{imageOffset:{width:0,height:0}});  
    var marker = new BMap.Marker(point,{icon:icon});  
    var infoWindow = new BMap.InfoWindow(sContent,{title:title});  // 创建信息窗口对象  
      
    marker.addEventListener("click", function(){            
       this.openInfoWindow(infoWindow);  
    });  
    map.addOverlay(marker);  
}  




function search()
{

	var place = $("#search-place").val();
	map = new BMap.Map("allmap");          
	map.centerAndZoom(11);
	map.addControl(new BMap.MapTypeControl()); //卫星转换
	map.addControl(new BMap.NavigationControl());//地图平移缩放控件
	map.addControl(new BMap.OverviewMapControl());//缩略图
	map.addControl(new BMap.ScaleControl()); //比例尺
	map.enableScrollWheelZoom();//鼠标滑轮缩放
	var options = {
		onSearchComplete: function(results){
			// 判断状态是否正确
			if (local.getStatus() == BMAP_STATUS_SUCCESS){
				var s = [];
				for (var i = 0; i < results.getCurrentNumPois(); i ++){
					var obj=results.getPoi(i);  
            		var point = obj.point;  
					if(i==0) {map.centerAndZoom(point, 15);}
					makeMarkAndInfoWindow(point,"<b id='title'>"+obj.title+"</b>","地址:" + obj.address+"<br/>类型:" + obj.tags.join("，")
						+"<br/>添加到：第<input type='text' id='day' style='width:15px;'>天<button type='button' onclick='javascript:addhtml((document.getElementById(\"day\").value),(document.getElementById(\"title\").innerHTML));'>确定</button>",i,map); 
					s.push(results.getPoi(i).title + ", " + results.getPoi(i).address);
				}
				// search1(place,s);
			}else{
					alert("未检索到该关键字的地理位置信息");
					local.search("北京");
				}
		}
	};
	var local = new BMap.LocalSearch(map, options);
	// var local = new BMap.LocalSearch(map, {
	// 	renderOptions:{map: map}
	// });
	local.search(place);

}
function addhtml(day,title)
{
	if(day>$("ul.sidebar li").length)
	{
		alert("输入天数不存在，请确认后再输入！");
	}
	$("#"+day).append("<div class='jingdiandiv'><img src='img/icon.png'><p class='jingdianp'>"+title+"</p></div>");
}
