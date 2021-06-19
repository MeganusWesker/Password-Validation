function _id(name){
    return document.getElementById(name);
  }
  function _class(name){
    return document.getElementsByClassName(name);
  }
  _class("toggle")[0].addEventListener("click",function(){
    _class("toggle")[0].classList.toggle("active");
    if(_id("password-area").getAttribute("type") == "password"){
      _id("password-area").setAttribute("type","text");
    } else {
      _id("password-area").setAttribute("type","password");
    }
  });
  
  
  _id("password-area").addEventListener("keyup",function(){
    let password = _id("password-area").value;
    
    if(/[A-Z]/.test(password)){
      _class("policy-uppercase")[0].classList.add("active");
    } else {
      _class("policy-uppercase")[0].classList.remove("active");
    }
    
    if(/[0-9]/.test(password)){
      _class("policy-number")[0].classList.add("active");
    } else {
      _class("policy-number")[0].classList.remove("active");
    }
    
    if(/[^A-Za-z0-9]/.test(password)){
      _class("policy-special")[0].classList.add("active");
    } else {
      _class("policy-special")[0].classList.remove("active");
    }
    
    if(password.length > 7){
      _class("policy-length")[0].classList.add("active");
    } else {
      _class("policy-length")[0].classList.remove("active");
    }
    if(password.length < 30){
      _class("policy-maxlength")[0].classList.add("active");
    } else {
      _class("policy-maxlength")[0].classList.remove("active");
    }
  });