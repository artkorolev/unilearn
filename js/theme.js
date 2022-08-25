/* СМЕНА ТЕМЫ */
const themeButton = document.getElementById("btn_theme");
const darkTheme = "dark-theme";
const iconTheme = "moon_yellow";
const activeMoon = document.getElementById("moon_active");

const selectedTheme = localStorage.getItem("selected_theme");
const selectedIcon = localStorage.getItem("selected_icon");

const getCurrentTheme =() => document.body.classList.contains(darkTheme) ? 'dark-theme':'light-theme';
const getCurrentIcon =() => activeMoon.classList.contains(iconTheme) ? 'moon_active':'moon-active';

if (selectedTheme) {
   document.body.classList[selectedTheme === 'dark-theme' ? 'add' : 'remove'](darkTheme);
   activeMoon.classList[selectedIcon === 'moon_active' ? 'add' : 'remove'](iconTheme);
}

themeButton.addEventListener('click', ()=>{
   document.body.classList.toggle(darkTheme);
   activeMoon.classList.toggle(iconTheme);

   localStorage.setItem('selected_theme', getCurrentTheme());
   localStorage.setItem('selected_icon', getCurrentIcon());
})
