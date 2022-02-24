
const items = [];
const item = document.getElementById('item');
const add = document.getElementById('add');
const save = document.getElementById('save');
const quant = document.getElementById('quant');

add.addEventListener('click', addItem);
save.addEventListener('click', saveItem);

function addItem() {
    items.push(item.value);
    quant.innerText = items.length;
    item.value = '';
}

function saveItem() {
    const lists = document.getElementById('lists');
    const name = prompt('Digite o nome dessa lista: ');
    const h2 = document.createElement('h2');
    const ul = document.createElement('ul')

    h2.innerText = name;

    lists.appendChild(h2);
    lists.appendChild(ul)

    items.forEach(item => {
        const li = document.createElement('li')
        li.innerText = item
        ul.appendChild(li)
    })

    items.splice(0, items.length)
    quant.innerText = 0
}
