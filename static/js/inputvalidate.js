$(document).ready(function(){
	$.formValidator.initConfig({formID:"form1",debug:false,submitOnce:true,
		onError:function(msg,obj,errorlist){
			$("#errorlist").empty();
			$.map(errorlist,function(msg){
				$("#errorlist").append("<li>" + msg + "</li>")
			});
			alert(msg);
		},
		submitAfterAjaxPrompt : '有数据正在异步验证，请稍等...'
	});

	$("#us").formValidator({onShow:"请输入用户名",onFocus:"用户名至少5个字符,最多15个字符",onCorrect:"该用户名可以注册"}).inputValidator({min:5,max:15,onError:"你输入的用户名非法,请确认"})//.regexValidator({regExp:"username",dataType:"enum",onError:"用户名格式不正确"})
	    .ajaxValidator({
		dataType : "String",
		async : true,
		url : "/t/unvalidate",
		success : function(data){
            if( data.indexOf("ok") > 0 ) return true;
            if( data.indexOf("exac") > 0 ) return false;
			return false;
		},
		buttons: $("#button"),
		error: function(jqXHR, textStatus, errorThrown){alert("服务器没有返回数据，可能服务器忙，请重试"+errorThrown);},
		onError : "该用户名不可用，请更换用户名",
		onWait : "正在对用户名进行合法性校验，请稍候..."
	});
	$("#password1").formValidator({onShow:"请输入密码",onFocus:"至少输入6个字符",onCorrect:"密码合法"}).inputValidator({min:6,empty:{leftEmpty:false,rightEmpty:false,emptyError:"密码两边不能有空符号"},onError:"密码输入不合法或密码长度不够"});
	$("#password2").formValidator({onShow:"再次输入密码",onFocus:"至少输入6个字符",onCorrect:"密码一致"}).inputValidator({min:6,empty:{leftEmpty:false,rightEmpty:false,emptyError:"重复密码两边不能有空符号"},onError:"密码输入不合法或密码长度不够"}).compareValidator({desID:"password1",operateor:"=",onError:"2次密码不一致,请确认"});
	$(":radio[name='xb_one']").formValidator({tipID:"sexTip",onShow:"请选择你的性别",onFocus:"没有第三种性别了，你选一个吧",onCorrect:"输入正确"}).inputValidator({min:1,max:1,onError:"性别忘记选了,请确认"});//.defaultPassed();
	$("#nl").formValidator({autoModify:true,onShow:"请输入的年龄（1-99岁之间）",onFocus:"只能输入1-99之间的数字哦",onCorrect:"恭喜你,你输对了"}).inputValidator({min:1,max:99,type:"value",onErrorMin:"你输入的值必须大于等于1",onError:"年龄必须在1-99之间，请确认"});
	$("#csny").formValidator({onShow:"请输入的出生日期",onFocus:"请输入的出生日期，不能全部是0哦",onCorrect:"你输入的日期合法"}).inputValidator({min:"1900-01-01",max:"2010-01-01",type:"date",onError:"日期必须在\"1900-01-01\"和\"2010-01-01\"之间"});
	$("#sfzh").formValidator({onShow:"请输入15或18位的身份证",onFocus:"输入15或18位的身份证",onCorrect:"输入正确"}).functionValidator({fun:isCardID});
	$("#email").formValidator({onShow:"请输入邮箱",onFocus:"邮箱6-100个字符,输入正确了才能离开焦点",onCorrect:"恭喜你,你输对了"}).inputValidator({min:6,max:100,onError:"你输入的邮箱长度非法,请确认"}).regexValidator({regExp:"^([\\w-.]+)@(([[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}.)|(([\\w-]+.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(]?)$",onError:"你输入的邮箱格式不正确"});
	$(":radio[name='aiguo']").formValidator({tipID:"aiguoTip",onShow:"爱国的人一定要选哦",onFocus:"你得认真思考哦",onCorrect:"不知道你爱不爱，反正你是选了",defaultValue:["4"]}).inputValidator({min:1,max:1,onError:"难道你不爱国？你给我选！！！！"}).defaultPassed();
	$("#shouji").formValidator({empty:true,onShow:"请输入你的手机号码，可以为空哦",onFocus:"你要是输入了，必须输入正确",onCorrect:"谢谢你的合作",onEmpty:"你真的不想留手机号码啊？"}).inputValidator({min:11,max:11,onError:"手机号码必须是11位的,请确认"}).regexValidator({regExp:"mobile",dataType:"enum",onError:"你输入的手机号码格式不正确"});;
	
});