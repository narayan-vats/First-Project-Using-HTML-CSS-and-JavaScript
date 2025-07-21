function handlelogin(){
  const username=document.getElementById("username").value;
  const password=document.getElementById("password").value;
  const errormessage=document.getElementById("error-message").value;




  if(username ==="admin" && password ==="12345") {
    alert("login successful");
    errormessage.textcontent ="";// clear error message 
  }

  else{
    errormessage.textcontent =alert("invalid username or password");
  }
}