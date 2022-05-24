function login() {
  var storedName = localStorage.getItem('regMail');
  var storedPw = localStorage.getItem('regPasswordconfirm');
  var userName = document.getElementById('logEmail');
  var userPw = document.getElementById('logPassword');
  //var userRemember = document.getElementById("rememberMe");
  if (userName.value == storedName && userPw.value == storedPw) {
      alert('You are logged in, redirecting you to landing page');
      window.location.href = "./landing.html";
  } else if(userName.value != storedName && userPw.value != storedPw) {
      alert('Error on login');
     
  }
  else if(userName ==''&& userPw  =='')
  alert('username and password cant be empty');
}
function registration() {

  var firstname = document.getElementById("regFirstName").value;
  var email = document.getElementById("regMail").value;
  var pwd = document.getElementById("regPassword").value;
  var cpwd = document.getElementById("regPasswordconfirm").value;
  //console.log(firstname + ", " + email + ", " + pwd + ", " + cpwd);
  //conditions and parameters of the input data
  var pwd_expression = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-])/;
  var letters = /^[A-Za-z]+$/;
  var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
  if (firstname == '') {
      alert('Please enter your name')
  } else if (!letters.test(firstname)) {
      alert('Name field requiregitd only alphabet characters')
  } else if (email == '') {
      alert("Please enter your email")
  } else if (!filter.test(email)) {
      alert('Invalid email');
  } else if (pwd == '') {
      alert('Please enter Password');
  } else if (cpwd == '') {
      alert('Enter Confirm Password');
  } else if (!pwd_expression.test(pwd)) {
      alert('Upper case, Lower case, Special character and Numeric letter are required in Password filed');
  } else if (pwd != cpwd) {
      alert('Password not Matched');
  } else if (document.getElementById("regPassword").value.length < 6) {
      alert('Password minimum length is 6');
  } else if (document.getElementById("regPassword").value.length > 12) {
      alert('Password max length is 12');
  } else {
      localStorage.setItem('regMail', email);
      localStorage.setItem('regPasswordconfirm', cpwd);
      localStorage.setItem('name', firstname);
      alert('Your account has been created , Redirecting you to Login page');
      window.location.href = "./index.html";
  }
 
    
}

function addEvents(){
    changeName();
    changeImage();
    
}
function changeImage() {
    const img = document.getElementById("userImage");
    img.src = localStorage.getItem("image");
}
function addImageEvent() {
    const image_input = document.querySelector("#imageInput");
    image_input.addEventListener("change", encodeImage);
}


function changeName() {
    const name_Element = document.getElementById("regFirstName");
    name_Element.innerHTML = localStorage.getItem('name');
}

function encodeImage() {
    const imgPath = document.querySelector("#userImage1").files[0];
    const reader = new FileReader();
    reader.addEventListener("load", function() {
        localStorage.setItem('image', reader.result);
    }, false);
    reader.readAsDataURL(imgPath);
}