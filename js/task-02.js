/* Напиши скрипт, который для каждого элемента массива ingredients:

1 Создаст отдельный элемент <li>. Обзательно используй метод document.createElement().
2 Добавит название ингредиента как его текстовое содержимое.
3 Добавит элементу класс item.
4 После чего вставит все <li> за одну операцию в список ul.ingredients.
 */
const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

function createList(elementsForLi){
  let listView = document.createElement('div');
  listView.classList.add('item');

  for(let i=0;i<elementsForLi.length;i++)
  {
    let listViewItem=document.createElement('li');
    listViewItem.appendChild(document.createTextNode(elementsForLi[i]));
    listView.appendChild(listViewItem);
  }

  return listView;
}

const ingredientsList = document.querySelector('#ingredients');
ingredientsList.append(createList(ingredients));

