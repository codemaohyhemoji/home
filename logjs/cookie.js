var username=getCookie("username");
  if (username!="")
  {
    document.getElementById("login").innerHTML = "编程猫后援会表情部，您好，"+username;
  }
  else 
  {
    window.location.href="https://codemaohyhemoji.github.io/home/work.html"
    }

function getCookie(cname)
{
  var name = cname + "=";
  var ca = document.cookie.split(';');
  for(var i=0; i<ca.length; i++) 
  {
    var c = ca[i].trim();
    if (c.indexOf(name)==0) return c.substring(name.length,c.length);
  }
  return "";
}
