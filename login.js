function validate(){  
    var name=document.f1.name.value;  
    var passwordlength=document.f1.password.value.length;  
    var status=false;  
    if(name==""){  
    document.getElementById("namelocation").innerHTML=
    " Please enter your email id !!";  
    status=false;
    }else{  
    document.getElementById("namelocation") ;
    status=true;
    }  
      
    if(passwordlength<8){  
    document.getElementById("passwordlocation").innerHTML=  
    "Password must be 8 characters !!";  
    status=false; 
    }else{  
    document.getElementById("passwordlocation");
    status=true;
    }  
      
    return status;  
    }