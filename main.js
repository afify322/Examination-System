//I didn't use HTML Validation because use can open inspect Element and change html elements 
//in this case we don't server exception handler so i implemented 
//validation in background

var regform=document.getElementById('regform');
var loginform=document.getElementById('Loginform')
regform.addEventListener('submit',(e)=>{
    e.preventDefault()
    validateName('fname')
    validateName('lname')
    validateEmail()
    validatePassword()
    validateConfirmPassword()
    if(
    validateName('fname')&&
    validateName('lname')&&
    validateEmail()&&
    validatePassword()&&
    validateConfirmPassword())
    {
        document.cookie=`${validateEmail()}=${validatePassword()};`
        window.location.replace('index.html') 
    }
})

loginform.addEventListener('submit',(e)=>{
e.preventDefault()
var password=document.getElementById('lpassword').value;
var email=document.getElementById('lemail').value;
var wlpassword=document.getElementsByClassName('wlpassword')[0];
var wlemail=document.getElementsByClassName('wlemail')[0];


console.log();
if(typeof getCookie(email)=='undefined' ){
    appendMsg(wlemail,'Invalid Email')
}
else if(password!==getCookie(email)[1]){
    appendMsg(wlemail)
    appendMsg(wlpassword,'Invalid password')
}
else{
    appendMsg(wlpassword)
  window.location.replace('exam.html')
}

})

function validateName(target) {
    var name=document.getElementById(target).value
var wname=document.getElementsByClassName('w'+target)[0]
if(!name){
    appendMsg(wname,'Name is Required')
     return false
}
else{    
     if(!name.split('').every((e)=>{ return !isFinite(e)} )) {
         appendMsg(wname,'Name should be a series of alphabetical characters')
        return false
     }
    else{

        appendMsg(wname)
        return name
    }
}
}


function validateEmail() {
    var email=document.getElementById('email').value
    var wemail=document.getElementsByClassName('wemail')[0]
    var reg= /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    if(!email||!reg.test(email)){
        appendMsg(wemail,'Invalid Email')
        return false
    }
    else{
        appendMsg(wemail)
        return email

    }
}

function validatePassword() {
    var password=document.getElementById('password').value
    var wpassword=document.getElementsByClassName('wpassword')[0]
    if(!password){
        appendMsg(wpassword,'Password required');
        return false
    }
    else{
        if(password.length<8){
            appendMsg(wpassword,'Password must be  more than or equal 8')
           
             return false
            }  
            else{
                appendMsg(wpassword)
                return password
            }
    }
}

 function validateConfirmPassword(form) {
     var cpassword=document.getElementById('password2').value
     var wpassword2=document.getElementsByClassName('wpassword2')[0]
   if(validatePassword())
   {
    if(cpassword!==validatePassword()){
        appendMsg(wpassword2,'Passwords must be  identical');
        return false;
    }
    else{
        appendMsg(wpassword2);

        return true;
    }
   } 
  else{
    appendMsg(wpassword2,'Password Required')
 
    return false;
  }
   
} 


function appendMsg(element,msg) {
    if(arguments.length==1){
        element.style='display:none;'   
       
    }
    else{
        console.log(element);
        element.style='display:block;'   
        element.textContent=msg;
    }
}


function getCookie(name) {
    var cookie=document.cookie.split('; ').map((e)=>{
        return e.split('=')
    })
    return cookie.find((e)=>{
      
        if(e[0]==name){
            return e
        }
    })  
}