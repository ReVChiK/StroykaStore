
let basketDescriptionText = [
    'Можно сделать заказ только от одного поставщика',
    'Доставка осуществляется курьерами поставщика или службой курьеров Достависта. Также товар можно забрать самостоятельно от поставщика',
    'Точная сумма доставки будет определена после после подтверждения заказа'
]

export function BasketDescription_Item(parentSelector, icons){
    for(let i = 0; i < icons.length; i++){
        parentSelector.forEach(selector => {
            const descItem = document.createElement('div');
            descItem.classList.add('description__item');

            const descItemContent = document.createElement('div');
            descItemContent.classList.add('description__item_content');

            const descItemIcon = document.createElement('div');
            descItemIcon.classList.add('description__item_content-icon');
            descItemIcon.innerHTML = icons[i];

            const descItemText = document.createElement('div');
            descItemText.classList.add('description__item_content-text');

            const descItemText_paragraph = document.createElement('p');
            descItemText_paragraph.textContent = basketDescriptionText[i];

            descItemText.append(descItemText_paragraph);

            descItemContent.append(descItemIcon, descItemText);

            descItem.append(descItemContent);

            selector.appendChild(descItem);
        });
    }
}