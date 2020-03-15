
$(function () {
        window.login= function () {
          var name=document.getElementById("name").value;
   var pass=document.getElementById("pass").value;
   var md5password = hex_md5(pass); 
   if(name=="laowuzi" && md5password=="fe061ccc834dc8e95a77dec3c775961d"){
   alert("登入成功，您好，"+name);
   document.cookie="username="+name;
           window.location.href="index.html";
   }else{
      if(name=="leohan" && md5password=="f7494587326f4d5aa38b0e5aef831a26"){
         alert("登入成功，您好，"+name);
         document.cookie="username="+name;
              window.location.href="index.html";
         }else{
            if(name=="zhengkaize" && md5password=="fdb4f48b7f0eac4d89e0fea426b3aed4"){
               alert("登入成功，您好，"+name);
               document.cookie="username="+name;
                    window.location.href="index.html";
               }else{
                  if(name=="dongdangfamily" && md5password=="c9bbab898ddd46890c0286d6fceb988f"){
                     alert("登入成功，您好，"+name);
                     document.cookie="username="+name;
                          window.location.href="index.html";
                     }else{
                        if(name=="tianlang" && md5password=="7456d9e119e13d91d0a4c143e8b81e18"){
                           alert("登入成功，您好，"+name);
                           document.cookie="username="+name;
                                window.location.href="index.html";
                           }else{
                              if(name=="huzhiyu" && md5password=="f8e51a923d741c585273e9268a1baff3"){
                                 alert("登入成功，您好，"+name);
                                 document.cookie="username="+name;
                                      window.location.href="index.html";
                                 }else{
                                    if(name=="mahaoran" && md5password=="20dc1ae59719f76601452a906c66f479"){
                                       alert("登入成功，您好，"+name);
                                       document.cookie="username="+name;
                                            window.location.href="index.html";
                                       }else{
                                          if(name=="feifanxiaowang" && md5password=="75f985333abac4f434ba6d099be73e51"){
                                             alert("登入成功，您好，"+name);
                                             document.cookie="username="+name;
                                                  window.location.href="index.html";
                                             }else{
                                                if(name=="haozi" && md5password=="e9fcd0f8ffec3e040e8fe2142026921f"){
                                                   alert("登入成功，您好，"+name);
                                                  document.cookie="username="+name;
                                                        window.location.href="index.html";
                                                   }else{
                                                      if(name=="caocaogege" && md5password=="9925950014f7e62f790e03bc54ed5808"){
                                                         alert("登入成功，您好，"+name);
                                                         document.cookie="username="+name;
                                                              window.location.href="index.html";
                                                         }else{
                                                            if(name=="chunfengshiwanli" && md5password=="06ad526f8069909296f841596d107349"){
                                                               alert("登入成功，您好，"+name);
                                                               document.cookie="username="+name;
                                                                    window.location.href="index.html";
                                                               }else{
                                                                  if(name=="binggankong" && md5password=="83eccc1f49738924e402a0ba2160d923"){
                                                                     alert("登入成功，您好，"+name);
                                                                     document.cookie="username="+name;
                                                                          window.location.href="index.html";
                                                                     }else{
                                                                      if(name=="lkadmin" && md5password=="c647b9a5ec66ee1f6e19e39025a0f99c"){
                                                                     alert("登入成功，您好，"+name);
                                                                     document.cookie="username="+name;
                                                                              window.location.href="index.html";
                                                                     }else{
                                                                       alert("错了")
                                                                     
                                                                     }
                                                               
                                                               }
                                                         
                                                         }
                                                   
                                                   }
                                             
                                             }
                                       
                                       }
                                 
                                 }
                           
                           }
                     
                     }
               
               }
         
         }
   
   }
   }
  
        }
    })
