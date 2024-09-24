function $(id) {
    const element = document.getElementById(id);
    if (element) return element;
    return {};
}

const main = $('main')

for (const category of data) {
    const categoryName = document.createElement('h1');
    categoryName.textContent = `• ${category.name}`;
    main.appendChild(categoryName);

    const itemsUl = document.createElement('ul');
    itemsUl.className = 'cards';
    main.appendChild(itemsUl);

    const folder = String(category.name).toLowerCase().replace(/ /g, '_');

    for (const item of category.items) {
        const itemLi = document.createElement('li');
        let itemDescription = ''
        if (item.description) {
            itemDescription = `<div class="card_text"><p>${item.description}</p><br>`
        }
        itemLi.className = 'cards_item';
        itemLi.innerHTML = `<div class="card"><div class="card_image"><a href="images/${folder}/${item.image}_big.jpg" target="_blank"><img loading="lazy" src="images/${folder}/${item.image}_small.jpg"></a></div><div class="card_content"><br><h2 class="card_title">${item.name} • $${item.price}</h2><br>${itemDescription}</div></div></div>`
        itemsUl.appendChild(itemLi);
    }
}
