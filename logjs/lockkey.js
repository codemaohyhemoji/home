document.onkeydown = function(){

      if(window.event && window.event.keyCode == 123) {
          alert("F12被禁用");
          event.keyCode=0;
          event.returnValue=false;
      }
      if(window.event && window.event.keyCode == 13) {
          window.event.keyCode = 505;
      }
      if(window.event && window.event.keyCode == 8) {
          alert(str+"\n请使用Del键进行字符的删除操作！");
          window.event.returnValue=false;
      }
  
  }
function checkCookie()
{
  var username=getCookie("username");
  if (username!="")
  {
    document.getElementById("login").innerHTML = "编程猫后援会表情部，您好，"+username;
  }
  else 
  {
    window.location.href 1 window.location.href="https://codemaohyhemoji.github.io/home/work.html"
    }
  }
}
