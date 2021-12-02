const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
function createList(spacecrafts){

  let listView = document.createElement('div');
  listView.classList.add('item');

for(let i=0;i<spacecrafts.length;i++)
{
    let listViewItem=document.createElement('li');
    listViewItem.appendChild(document.createTextNode(spacecrafts[i]));
    listView.appendChild(listViewItem);
}

return listView;
}

const a = document.querySelector('#ingredients');
const x=createList(ingredients);
a.append(x);

