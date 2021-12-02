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

