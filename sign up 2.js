const indicator = document.querySelector(".indicator");
const input = document.querySelector("input");
const weak = document.querySelector(".weak");
const medium = document.querySelector(".medium");
const strong = document.querySelector(".strong");
const text = document.querySelector(".text");

const pswrd_1 = document.querySelector("#psw");
const pswrd_2 = document.querySelector("#cpsw");
const errorText = document.querySelector(".error-text");
const btn = document.querySelector("button");

let regExpWeak = /[a-z][A-z]/;
let regExpMedium = /\d+/;
let regExpStrong = /.[!,@,#,$,%,^,&,*,?,_,~,-,(,)]/;

function trigger(){
  if(pswrd_1.value.length >= 8){
    btn.removeAttribute("disabled", "");
    btn.classList.add("active");
    pswrd_2.removeAttribute("disabled", "");
  }else{
    btn.setAttribute("disabled", "");
    btn.classList.remove("active");
    pswrd_2.setAttribute("disabled", "");
  }
  btn.onclick = function(){
    if(pswrd_1.value != pswrd_2.value){
      errorText.style.display = "block";
      errorText.classList.remove("matched");
      errorText.textContent = "Error! Confirm Password Not Match";
      return false;
    }else{
      errorText.style.display = "block";
      errorText.classList.add("matched");
      errorText.textContent = "Nice! Confirm Password Matched";
      return true;
    }
  }
  function trigger2(){
    if(pswrd_2.value != ""){
      showBtn.style.display = "block";
      showBtn.onclick = function(){
        if((pswrd_1.type == "password") && (pswrd_2.type == "password")){
          pswrd_1.type = "text";
          pswrd_2.type = "text";
          this.textContent = "Hide";
          this.classList.add("active");
        }else{
          pswrd_1.type = "password";
          pswrd_2.type = "password";
          this.textContent = "Show";
          this.classList.remove("active");
        }
      }
    }else{
      showBtn.style.display = "none";
    }
  }
 if(input.value != ""){
    indicator.style.display = "block";
    indicator.style.display = "flex";
    if(input.value.length >= 3 && (input.value.match(regExpWeak) || input.value.match(regExpMedium) || input.value.match(regExpStrong)))no=1;
    if(input.value.length >= 6 && ((input.value.match(regExpWeak) && input.value.match(regExpMedium)) || (input.value.match(regExpMedium) && input.value.match(regExpStrong)) || (input.value.match(regExpWeak) && input.value.match(regExpStrong))))no=2;
    if(input.value.length >= 8 && input.value.match(regExpWeak) && input.value.match(regExpMedium) && input.value.match(regExpStrong))no=3;
    if(no==1){
      weak.classList.add("active");
      text.style.display = "block";
      text.textContent = "Your password is too week";
      text.classList.add("weak");
    }
    if(no==2){
      medium.classList.add("active");
      text.textContent = "Your password is medium";
      text.classList.add("medium");
    }else{
      medium.classList.remove("active");
      text.classList.remove("medium");
    }
    if(no==3){
      weak.classList.add("active");
      medium.classList.add("active");
      strong.classList.add("active");
      text.textContent = "Your password is strong";
      text.classList.add("strong");
     
    }else{
      strong.classList.remove("active");
      text.classList.remove("strong");
    
    }
 
}
}


