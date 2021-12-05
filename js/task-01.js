//Напиши скрипт который:
//1 Посчитает и выведет в консоль количество категорий в ul#categories, то есть элементов li.item.
//2 Для каждого элемента li.item в списке ul#categories, найдет и выведет в консоль текст заголовка элемента (тега <h2>) и количество элементов в категории (всех вложенных в него <li>).
//В результате, в консоли будут выведены такие сообщения.
//            Number of categories: 3
//            Category: Animals
//            Elements: 4

//            Category: Products
//            Elements: 3

//            Category: Technologies
//            Elements: 5

const cathegoryCounting = document.querySelectorAll(`li.item`);
console.log(`Number of categories: ` + cathegoryCounting.length);

const cathegoryHeading = document.querySelectorAll(`li.item h2`);
const elementsCounting = document.querySelectorAll('.item');


for (let i = 0; i < cathegoryHeading.length; i += 1) {
    console.log(`Category: ` + cathegoryHeading[i].textContent);
    console.log(`Elements: ` + elementsCounting[i].querySelectorAll('li').length);
}