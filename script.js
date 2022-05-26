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
let currentScrollPosition = 0;
let scrollAmount = 400;
const  sCont = document.querySelector(".storys-container");
const hScroll = document.querySelector(".horizontal-scroll");
const btnScrollLeft = document.querySelector("#btn-scroll-left");
const btnScrollRight = document.querySelector("#btn-scroll-right");
let maxScroll = -sCont.offsetWidth + hScroll.offsetWidth;
 function scrollHorizontally(val){
     currentScrollPosition += (val * scrollAmount);
     sCont.style.left = currentScrollPosition + "px";
     if(currentScrollPosition >= 0){
          currentScrollPosition = 0
          
     }
     
     if(currentScrollPosition <= maxScroll){
         currentScrollPosition = maxScroll;

     }
     
     sCont.style.left=currentScrollPosition + "px"; 
 }
 let previewContainer=document.querySelector(".product-prev");
 let previewBox= previewContainer.querySelectorAll('.preview');
 document.querySelectorAll('.product-container .produt').forEach(produt=>{
     produt.onclick =() =>{
         previewContainer.style.display="flex";
         let name=produt.getAttribute("data-name");
         previewBox.forEach(preview=>{
            let target= preview.getAttribute("data-target");
            if (name==target){
                preview.classList.add('active') 
            }

         });
     };

 });
 previewBox.forEach(close=>{
     close.querySelector(".fa-times").onclick=()=>{
         close.classList.remove('active');
         previewContainer.style.display="none";
     }

 });
 let btn=document.querySelector('.mainBtn');
 let mbtn=document.querySelector('.minusBtn');
 let pbtn=document.querySelector('.plusBtn');
 let dbtn=document.querySelector('.doneBtn')
 btn.addEventListener("click",()=>{
     if( btn.innerText=="ADD TO CART")
     btn.innerText =1;
     pbtn.style.display='inline-block';
     mbtn.style.display='inline-block';
     dbtn.style.display='inline-block';

 })
 mbtn.addEventListener("click",()=>{
     btn.innerText=btn.innerText -1;
     pbtn.style.display='inline-block';
     if( btn.innerText<=1){
       mbtn.style.display='none';
     }
   
     dbtn.style.display='inline-block';
 })
 pbtn.addEventListener('click',()=>{
   btn.innerText=+(btn.innerText) + +1;
   pbtn.style.display='inline-block';
     mbtn.style.display='inline-block';
     dbtn.style.display='inline-block';
 })
 let btnn=document.querySelector('.mainBtn2');
 let mbtnn=document.querySelector('.minusBtn2');
 let pbtnn=document.querySelector('.plusBtn2');
 let dbtnn=document.querySelector('.doneBtn2')
 btnn.addEventListener("click",()=>{
     btnn.innerText =1;
     pbtnn.style.display='inline-block';
     mbtnn.style.display='inline-block';
     dbtnn.style.display='inline-block';

 })
 mbtnn.addEventListener("click",()=>{
     btnn.innerText=btnn.innerText -1;
     pbtnn.style.display='inline-block';
     if( btnn.innerText<=1){
       mbtnn.style.display='none';
     }
     
     dbtnn.style.display='inline-block';
 })
 pbtnn.addEventListener('click',()=>{
   btnn.innerText=+(btnn.innerText) + +1;
   pbtnn.style.display='inline-block';
     mbtnn.style.display='inline-block';
     dbtnn.style.display='inline-block';
 })
 let btnn1=document.querySelector('.mainBtn3');
 let mbtnn1=document.querySelector('.minusBtn3');
 let pbtnn1=document.querySelector('.plusBtn3');
 let dbtnn1=document.querySelector('.doneBtn3')
 btnn1.addEventListener("click",()=>{
     btnn1.innerText =1;
     pbtnn1.style.display='inline-block';
     mbtnn1.style.display='inline-block';
     dbtnn1.style.display='inline-block';

 })
 mbtnn1.addEventListener("click",()=>{
     btnn1.innerText=btnn1.innerText -1;
     pbtnn1.style.display='inline-block';
     if( btnn1.innerText<=1){
       mbtnn1.style.display='none';
     }
     dbtnn1.style.display='inline-block';
 })
 pbtnn1.addEventListener('click',()=>{
   btnn1.innerText=+(btnn1.innerText) + +1;
   pbtnn1.style.display='inline-block';
     mbtnn1.style.display='inline-block';
     dbtnn1.style.display='inline-block';
 })
 let btnn2=document.querySelector('.mainBtn4');
 let mbtnn2=document.querySelector('.minusBtn4');
 let pbtnn2=document.querySelector('.plusBtn4');
 let dbtnn2=document.querySelector('.doneBtn4')
 btnn2.addEventListener("click",()=>{
     btnn2.innerText =1;
     pbtnn2.style.display='inline-block';
     mbtnn2.style.display='inline-block';
     dbtnn2.style.display='inline-block';

 })
 mbtnn2.addEventListener("click",()=>{
     btnn2.innerText=btnn2.innerText -1;
     pbtnn2.style.display='inline-block';
     if( btnn2.innerText<=1){
       mbtnn2.style.display='none';
     }
     dbtnn2.style.display='inline-block';
 })
 pbtnn2.addEventListener('click',()=>{
   btnn2.innerText=+(btnn2.innerText) + +1;
   pbtnn2.style.display='inline-block';
     mbtnn2.style.display='inline-block';
     dbtnn2.style.display='inline-block';
 })
 let btnn3=document.querySelector('.mainBtn5');
 let mbtnn3=document.querySelector('.minusBtn5');
 let pbtnn3=document.querySelector('.plusBtn5');
 let dbtnn3=document.querySelector('.doneBtn5')
 btnn3.addEventListener("click",()=>{
     btnn3.innerText =1;
     pbtnn3.style.display='inline-block';
     mbtnn3.style.display='inline-block';
     dbtnn3.style.display='inline-block';

 })
 mbtnn3.addEventListener("click",()=>{
     btnn3.innerText=btnn3.innerText -1;
     pbtnn3.style.display='inline-block';
     if( btnn3.innerText<=1){
       mbtnn3.style.display='none';
     }
     dbtnn3.style.display='inline-block';
 })
 pbtnn3.addEventListener('click',()=>{
   btnn3.innerText=+(btnn3.innerText) + +1;
   pbtnn3.style.display='inline-block';
     mbtnn3.style.display='inline-block';
     dbtnn3.style.display='inline-block';
 })
