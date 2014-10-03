/*
 *	sun-tab
 *	made by sunpengfei 2014-9-21
 *	作者：孙鹏飞  2014-9-21
 * http://ririlvxing.com
 */
 function hasClass(obj, cls) {  
    return obj.className.match(new RegExp('(\\s|^)' + cls + '(\\s|$)'));  
}  
function removeClass(obj1, cls) {  
    obj=document.getElementById(obj1);
    if (hasClass(obj, cls)) {  
        var reg = new RegExp('(\\s|^)' + cls + '(\\s|$)');  
        obj.className = obj.className.replace(reg, ' ');  
    }  
}  
function ChangeDiv(div1,div2,o) 
{ 
    if(o.id=="tab1")
        {
            o.className="now";
            removeClass("tab2","now");
        }
    else{
            o.className="now";
            removeClass("tab1","now");
    }
document.getElementById(div2).style.display="none"; 
//将所有的层都隐藏 

document.getElementById(div1).style.display="block"; 
//显示当前层 
} 
