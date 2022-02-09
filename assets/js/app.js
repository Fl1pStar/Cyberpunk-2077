(() => {
  document.addEventListener('DOMContentLoaded', () => {
    // ищем кнопку бургер
    const burger = document.querySelector('#burger');
    // ищем бургер меню
    const burgerMenu = document.querySelector('#burgerMenu');
    // добавили событие на кнопку бургер
    burger.addEventListener("click", burgerClick);
    // функция для события
    function burgerClick() {
      // при клике на кнопку бургер JS добавит класс open для кнопки
      burger.classList.toggle("open");
      // также класс open для меню
      burgerMenu.classList.toggle("open");
    }
  });
})();