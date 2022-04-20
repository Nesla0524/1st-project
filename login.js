function validate(){  
    var mail=document.f1.email.value;  
    var passwordlength=document.f1.password.value;  
    var regEXp = /^([A-za-z0-9\.-]+)@([A-Za-z0-9\-]+).([a-z]{2,3})(.[a-z]{2,3})?$/;
    
    if(mail==""){  
    document.getElementById("emaillocation").innerHTML=
    " Please enter your email id !!";  
    return false;
    } 
    if(regEXp.test(mail.value))
    {
        document.getElementById("emaillocation").innerHTML="valid";
         return false;
       
}

   if(passwordlength.length <=8){  
    document.getElementById("passwordlocation").innerHTML=  
    "Password must be 8 characters !!";  
    return false ;     
   

    }}