function validate(){
  event.preventDefault();
  var user=document.getElementById("userName").value;
  var pwd = document.getElementById("password").value;
  let wrong =document.getElementById("invalid");
  if((user==9600923846)&&(pwd=="Lingtan")){
    window.location="afterLogin.html";
  }
  else{
    wrong.style.visibility = "visible";
    
}
return;
}
//Onsubmit takes the contents of the form to the next page, 
//the onclick button does not take the values to the next page values has to taken explicitly
//The Resetbutton resets the content of the form