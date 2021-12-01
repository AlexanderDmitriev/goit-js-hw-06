const cathegoryCounting = document.querySelectorAll(`li.item`);
console.log(`Number of categories: ` + cathegoryCounting.length);

const cathegoryHeading = document.querySelectorAll(`li.item h2`);
const elementsCounting = document.querySelectorAll('.item');


for (let i = 0; i < cathegoryHeading.length; i += 1) {
    console.log(`Category: ` + cathegoryHeading[i].textContent);
    console.log(`Elements: ` + elementsCounting[i].querySelectorAll('li').length);
}