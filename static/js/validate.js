		 $(document).ready(function () {
            $('#aOpen').leanModal({ top: 100, closeButton: ".modal_close" });
             });
       
		var touch = 1;
		var spring = 0;
		var summer = 0;
		var autumn = 0;
		var winter = 0;
		var first = false;
		var second = false;
		function changeStyle () {
			if (touch < 4) {
				touch++;
			} else {
				touch = 1;
			}
			spring = 0;
			summer = 0;
			autumn = 0;
			winter = 0;
			first = false;
			second = false;
			f("txt1").style.color = "#FF0000";
			f("txt2").style.color = "#FF0000";
			// Spring
			if (touch == 1) {
				f("season").src = "http://127.0.0.1:8000/static/img/spring.jpg";
				f("season").useMap = "#springMap";
				f("txt1").innerText = "春";
				f("txt2").innerText = "桃";
			}
			// Summer
			if (touch == 2) {
				f("season").src = "http://127.0.0.1:8000/static/img/summer.jpg";
				f("season").useMap = "#summerMap";
				f("txt1").innerText = "夏";
				f("txt2").innerText = "荷";
			}
			// Autumn
			if (touch == 3) {
				f("season").src = "http://127.0.0.1:8000/static/img/autumn.jpg";
				f("season").useMap = "#autumnMap";
				f("txt1").innerText = "秋";
				f("txt2").innerText = "菊";
			}
			// Winter
			if (touch == 4) {
				f("season").src = "http://127.0.0.1:8000/static/img/winter.jpg";
				f("season").useMap = "#winterMap";
				f("txt1").innerText = "冬";
				f("txt2").innerText = "梅";
			}
		}

		// Spring
		function springClick (txt) {
			if (spring == 0) {
				if (txt == "春") {
					first = true;
					f("txt1").style.color = "#008040";
				}
			}
			if (spring == 1) {
				if (txt == "桃") {
					second = true;
					f("txt2").style.color = "#008040";
				}
			}
			if (spring >= 1) {
				if (first && second) {
					f('form').submit();
				} else {
					alert("验证失败!");
					changeStyle ();
				}
			}
			spring++;
		}

		// Summer
		function summerClick (txt) {
			if (summer == 0) {
				if (txt == "夏") {
					first = true;
					f("txt1").style.color = "#008040";
				}
			}
			if (summer == 1) {
				if (txt == "荷") {
					second = true;
					f("txt2").style.color = "#008040";
				}
			}
			if (summer >= 1) {
				if (first && second) {
					location.href = "/t/index";
				} else {
					alert("验证失败!");
					changeStyle ();
				}
			}
			summer++;
		}

		// Autumn
		function autumnClick (txt) {
			if (autumn == 0) {
				if (txt == "秋") {
					first = true;
					f("txt1").style.color = "#008040";
				}
			}
			if (autumn == 1) {
				if (txt == "菊") {
					second = true;
					f("txt2").style.color = "#008040";
				}
			}
			if (autumn >= 1) {
				if (first && second) {
				location.href = "/t/index";
				} else {
					alert("验证失败!");
					changeStyle ();
				}
			}
			autumn++;
		}

		// Winter
		function winterClick (txt) {
			if (winter == 0) {
				if (txt == "冬") {
					first = true;
					f("txt1").style.color = "#008040";
				}
			}
			if (winter == 1) {
				if (txt == "梅") {
					second = true;
					f("txt2").style.color = "#008040";
				}
			}
			if (winter >= 1) {
				if (first && second) {
				location.href = "/t/index";
				} else {
					alert("验证失败!");
					changeStyle ();
				}
			}
			winter++;
		}
		
		// 图片抖动脚本
		var typ = ["marginTop", "marginLeft"], rangeN=10, timeout=20;
		function shake(o, end){
			var range = Math.floor(Math.random() * rangeN);
			var typN = Math.floor(Math.random() * typ.length);
			o["style"][typ[typN]] = "" + range + "px";
			var shakeTimer = setTimeout(function(){shake(o, end)}, timeout);
			o[end] = function(){
				clearTimeout(shakeTimer)
			};
		}

		function f(id){
			return document.getElementById(id);
		}