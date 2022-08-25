
let btnConsultation = document.getElementById("btnConsultation");
const formRegistration3 = document.getElementById('formRegistration3');
let userName3 = document.getElementById("userName3");
let email2 = document.getElementById("email2");
let userEdu = document.getElementById("userEdu");

//Запрет отправки формы 1

// Запрет отправки формы 3
formRegistration3.addEventListener('submit', function(evt) {
  evt.preventDefault();
  if(!userName3.value || !email2.value || !userEdu.value) {
    document.getElementById("message7").style.display = "block";
    document.getElementById("message8").style.display = "block";
    document.getElementById("message9").style.display = "block";
    return;
  }
  this.submit();
});

// События onfocus и onblur у элементов

//имя 2
userName3.onfocus = function() {
    document.getElementById("message7").style.display = "block";
}
userName3.onblur = function() {
    document.getElementById("message7").style.display = "none";
}

// Почта2
email2.onfocus = function() {
    document.getElementById("message8").style.display = "block";
}
email2.onblur = function() {
    document.getElementById("message8").style.display = "none";
}

//Образование
userEdu.onfocus = function() {
    document.getElementById("message9").style.display = "block";
}
userEdu.onblur = function() {
    document.getElementById("message9").style.display = "none";
}


//Событие onkeyup в момент отпускания нажатой клавиши
// Имя 3
userName3.onkeyup = function() {
   var regName = /^[A-zА-яЁё]{1,20}$/;
   if(userName3.value.match(regName)) {
      nameTitle3.classList.remove("invalid");
      nameTitle3.classList.add("valid");
   } else {
      nameTitle3.classList.remove("valid");
      nameTitle3.classList.add("invalid");
   }
}

// Почта 2
email2.onkeyup = function() {
   var regEmail = /[a-zA-Z]+@\S+\.\S/;  // [A-Za-z]{3,}
   if(email2.value.match(regEmail)) {
      adress2.classList.remove("invalid");
      adress2.classList.add("valid");
   } else {
      adress2.classList.remove("valid");
      adress2.classList.add("invalid");
   }
}

// Имя
userEdu.onkeyup = function() {
   var regName = /^[A-zА-яЁё]{1,20}$/;
   if(userEdu.value.match(regName)) {
      nameTitle4.classList.remove("invalid");
      nameTitle4.classList.add("valid");
   } else {
      nameTitle4.classList.remove("valid");
      nameTitle4.classList.add("invalid");
   }
}
