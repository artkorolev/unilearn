/* ПРЕЛОАДЕР */
$(function(){
   setTimeout(function() {
      $('body').addClass('loaded'); //добавляю класс loaded
   }, 1400)
})

/* ПОИСК */
$(document).ready(function() {
   $(".search").click(function() {
      $(".search_box").slideToggle();
   });
});

/* КНОПКА НАВЕРХ */
var top_show = 200; // В каком положении полосы прокрутки начинать показ кнопки "Наверх"
var delay = 1000; // Задержка прокрутки
$(document).ready(function() {
  $(window).scroll(function () { // При прокрутке попадаем в эту функцию
    /* В зависимости от положения полосы прокрукти и значения top_show, скрываем или открываем кнопку "Наверх" */
    if ($(this).scrollTop() > top_show) $('#top_btn').fadeIn();
    else $('#top_btn').fadeOut();
  });
  $('#top_btn').click(function () { // При клике по кнопке "Наверх" попадаем в эту функцию
    /* Плавная прокрутка наверх */
    $('body, html').animate({
      scrollTop: 0
    }, delay);
  });
});

/* ПЕРЕХОД МЕЖДУ СТРАНИЦАМИ */
$(document).ready(function() {
   $("body").css("display", "none");
   $("body").fadeIn(500);
	$("a.transition").click(function(event){
	   event.preventDefault();
		linkLocation = this.href;
	   $("body").fadeOut(500, redirectPage);
	});
	function redirectPage() {
		window.location = linkLocation;
	}
});


/* СКРЫТЬ HEADER */
// let lastScroll = 0;
// const defaultOffset = 100;
// const header = document.querySelector('.header');
// const scrollPosition = () => window.pageYOffset || document.documentElement.scrollTop;
// const containHide = () => header.classList.contains('hide');
//
// window.addEventListener('scroll', () => {
//     if(scrollPosition() > lastScroll && !containHide() && scrollPosition() > defaultOffset) {
//         //scroll down
//         header.classList.add('hide');
//     }
//     else if(scrollPosition() < lastScroll && containHide()){
//         //scroll up
//         header.classList.remove('hide');
//     }
//     lastScroll = scrollPosition();
// })







var menuBtn = document.getElementById('menuBtn');
var menuContainer = document.getElementById('menuContainer');

var menuIconClosed = "menu-icon closed"; //class name for closed button
var menuIconOpened = "menu-icon opened"; //class name for opened button
var menuContClosed = "menu-container closed"; //class name for closed menu
var menuContOpened = "menu-container opened"; //class name for opened menu

menuBtn.onclick = function() {
  if (menuBtn.className == menuIconClosed) {
    menuBtn.className = menuIconOpened;
    menuContainer.className = menuContOpened;
  } else if (menuBtn.className == menuIconOpened) {
    menuBtn.className = menuIconClosed;
    menuContainer.className = menuContClosed;
  }
}
