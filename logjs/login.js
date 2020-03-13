 function check(){
      var name=document.getElementById("name").value;
   var pass=document.getElementById("pass").value;
   var md5password = hex_md5(pass); 
   if(name=="codemaohyhemoji" && md5password=="9a91f47c9d2ed710718c67f8c64bc765"){
   alert("登入成功");
   var iframe = document.createElement('iframe'); 
   iframe.src="https://codemaohyhemoji.github.io/home/index.html"; 
   iframe.height=768
   iframe.width=1024
   document.body.appendChild(iframe);
   }else{
   alert("用户名或密码错误");
   
   }
   
   }