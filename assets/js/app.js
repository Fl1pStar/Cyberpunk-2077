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

// Анимация текст
{function onEntry(entry) {
  entry.forEach(change => {
    if (change.isIntersecting) {
      change.target.classList.add('element-show-1');
    }
  });
}
let options = { threshold: [0.5] };
let observer = new IntersectionObserver(onEntry, options);
let elements = document.querySelectorAll('.element-animation-1');
for (let elm of elements) {
  observer.observe(elm);
}
}

//  текст c лева
{function onEntry(entry) {
  entry.forEach(change => {
    if (change.isIntersecting) {
      change.target.classList.add('element-show-text');
    }
  });
}
let options = { threshold: [0.5] };
let observer = new IntersectionObserver(onEntry, options);
let elements = document.querySelectorAll('.element-animation-text');
for (let elm of elements) {
  observer.observe(elm);
}
}

//  текст c права

{function onEntry(entry) {
  entry.forEach(change => {
    if (change.isIntersecting) {
      change.target.classList.add('element-show-text-1');
    }
  });
}
let options = { threshold: [0.5] };
let observer = new IntersectionObserver(onEntry, options);
let elements = document.querySelectorAll('.element-animation-text-1');
for (let elm of elements) {
  observer.observe(elm);
}
}

// Лого-1
{function onEntry(entry) {
  entry.forEach(change => {
    if (change.isIntersecting) {
      change.target.classList.add('element-show-logo1');
    }
  });
}
let options = { threshold: [0.5] };
let observer = new IntersectionObserver(onEntry, options);
let elements = document.querySelectorAll('.element-animation-logo1');
for (let elm of elements) {
  observer.observe(elm);
}
}
// Лого2
{function onEntry(entry) {
  entry.forEach(change => {
    if (change.isIntersecting) {
      change.target.classList.add('element-show-logo2');
    }
  });
}
let options = { threshold: [0.5] };
let observer = new IntersectionObserver(onEntry, options);
let elements = document.querySelectorAll('.element-animation-logo2');
for (let elm of elements) {
  observer.observe(elm);
}
}

