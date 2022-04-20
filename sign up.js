function validate()
{
var fname=document.f1.firstname.value;  
var lname=document.f1.lastname.value;
var num= document.f1.phnnum.value;
var email=document.f1.maillocation.value;
var error = document.getElementById("error");
var regEXp = /^([A-za-z0-9\.-]+)@([A-Za-z0-9\-]+).([a-z]{2,3})(.[a-z]{2,3})?$/;


if(fname==""){  
    document.getElementById("name1").innerHTML=
    " Please enter your first name !!";  
     return false;
    }
   if((fname.length <= 4) ||( fname.length >20)){
   document.getElementById("name1").innerHTML =
   "length must be between 4 to 20 character ";
    return false;
    }

if(lname==""){  
    document.getElementById("name2").innerHTML=
    " Please enter your last name !!";  
    return false;
    }else{  
    document.getElementById("name2") ;
   }

        if((lname.length <= 4) ||( lname.length >20)){
            document.getElementById("name2").innerHTML =
            "length must be between 4 to 20 character ";
             return false;
             }


if(num==""){  
    document.getElementById("phn").innerHTML=
    " Please enter your phone number !!";  
    return false;
    }
    if(isNaN(num)){
        document.getElementById("phn").innerHTML=
        "enter only digt !!";
        return false;
    }
    if(num.length!=10){
        document.getElementById("phn").innerHTML = 
        "enter 10 digt number !!";
        return false;
    }
    if(email=="")
    {
        document.getElementById("mail").innerHTML ="enter your email id";
        return false;
    }
  if(regEXp.test(email.value))
    {
        document.getElementById("mail").innerHTML="valid";
   
    return true;
       
}else{
    document.getElementById("mail");
    return true;
}

   

}