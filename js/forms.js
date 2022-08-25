let userEmail = document.getElementById("email");
let userPass = document.getElementById("psw");
let pswRepeat = document.getElementById("pswRepeat");
let letter = document.getElementById("letter");
let capital = document.getElementById("capital");
let number = document.getElementById("number");
let length = document.getElementById("length");
let adress = document.getElementById("adress");
let pass2 = document.getElementById("pass2");
let btnSubmit = document.getElementById("btnSubmit");
let btnSubmit2 = document.getElementById("btnSubmit2");

let userName = document.getElementById("userName");
let userName2 = document.getElementById("userName2");
let userPhone = document.getElementById("userPhone");
const formRegistration = document.getElementById('formRegistration');
const email = document.getElementById('email');
const formRegistration2 = document.getElementById('formRegistration2');


//Запрет отправки формы 1

formRegistration.addEventListener('submit', function(evt) {
  evt.preventDefault();
  if(!userName.value || !email.value) {
    document.getElementById("message4").style.display = "block";
    document.getElementById("message1").style.display = "block";
    return;
  }
  this.submit();
});

//Запрет отправки формы 2
formRegistration2.addEventListener('submit', function(evt) {
  evt.preventDefault();
  if(!userName2.value || !userPhone.value) {
    document.getElementById("message5").style.display = "block";
    document.getElementById("message6").style.display = "block";
    return;
  }
  this.submit();
});


// События onfocus и onblur у элементов

//имя
userName.onfocus = function() {
    document.getElementById("message4").style.display = "block";
}
userName.onblur = function() {
    document.getElementById("message4").style.display = "none";
}
//имя 2
userName2.onfocus = function() {
    document.getElementById("message5").style.display = "block";
}
userName2.onblur = function() {
    document.getElementById("message5").style.display = "none";
}

// Почта
userEmail.onfocus = function() {
    document.getElementById("message1").style.display = "block";
}
userEmail.onblur = function() {
    document.getElementById("message1").style.display = "none";
}

//Телефон
userPhone.onfocus = function() {
    document.getElementById("message6").style.display = "block";
}
userPhone.onblur = function() {
    document.getElementById("message6").style.display = "none";
}

//Событие onkeyup в момент отпускания нажатой клавиши

// Имя
userName.onkeyup = function() {
   var regName = /^[A-zА-яЁё]{1,20}$/;
   if(userName.value.match(regName)) {
      nameTitle.classList.remove("invalid");
      nameTitle.classList.add("valid");
   } else {
      nameTitle.classList.remove("valid");
      nameTitle.classList.add("invalid");
   }
}
// Имя 2
userName2.onkeyup = function() {
   var regName = /^[A-zА-яЁё]{1,20}$/;
   if(userName2.value.match(regName)) {
      nameTitle2.classList.remove("invalid");
      nameTitle2.classList.add("valid");
   } else {
      nameTitle2.classList.remove("valid");
      nameTitle2.classList.add("invalid");
   }
}

//Телефон
userPhone.onkeyup = function() {
   var regPhone = /^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){10,12}(\s*)?$/;
   if(userPhone.value.match(regPhone)) {
      phoneTitle.classList.remove("invalid");
      phoneTitle.classList.add("valid");
   } else {
      phoneTitle.classList.remove("valid");
      phoneTitle.classList.add("invalid");
   }
}
// Почта
userEmail.onkeyup = function() {
   var regEmail = /\S+@\S+\.\S+/;  // [A-Za-z]{3,}
   if(userEmail.value.match(regEmail)) {
      adress.classList.remove("invalid");
      adress.classList.add("valid");
   } else {
      adress.classList.remove("valid");
      adress.classList.add("invalid");
   }
}
