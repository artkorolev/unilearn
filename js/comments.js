
function testResults (form) {
   var articleDiv = document.querySelector("div.articleBox");
   var testVar = form.inputbox.value; // testVar присваиваю значение inputbox
   var text = form.textUser.value; // text присваиваю значение textarea

   var elem = document.createElement("div");
   setTimeout(function() {
      elem.classList.add('commentBox'); // добавляю класс commentBox
   }, 50) //интервал появления commentBox

   var elemUser = document.createElement("h4");
   elemUser.classList.add('userName');
   elemUser.innerHTML = testVar // вывод имени

   var elemDate = document.createElement("span");
   elemDate.classList.add('date');
   elemDate.innerHTML = formatDate(commentDate); // вывод даты

   var elemComm = document.createElement("p");
   elemComm.classList.add('comment');
   elemComm.innerHTML = text; //вывод текста комментария

   // добавляю узел в конец списка дочерних элементов родительского узла
   elem.appendChild(elemUser);
   elem.appendChild(elemDate);
   elem.appendChild(elemComm);
   articleDiv.appendChild(elem);

   document.getElementById('name').value=""; //очистка input name
   document.getElementById('textAreaID').value=""; //очистка textarea
}

// Получение даты
var commentDate = new Date();
function formatDate(date) {
  var dd = date.getDate(); // возвращает день месяца
  if (dd < 10) dd = '0' + dd;
  var mm = date.getMonth() + 1; // возвращает месяц
  if (mm < 10) mm = '0' + mm;
  var yy = date.getFullYear() % 100; // возвращает год
  if (yy < 10) yy = '0' + yy;
  return dd + '.' + mm + '.' + yy;
}
