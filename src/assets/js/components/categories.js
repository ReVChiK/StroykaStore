
let categories_title = [
    'Душевые', 'Пиломатериалы', 'Линолеум', 'Обои',
    'Инструменты', 'Товары для дачи', 'Окна', 'Двери',
    'Сантехника', 'Краски', 'Электротовары', 'Интерьер'
]

export function Add_Category(parentSelector, categories_len, arr_categories_img){
    for(let i = 0; i < categories_len; i++){

        parentSelector.forEach(selector => {
            
            const categoryItem = document.createElement('div');
            categoryItem.classList.add('tab-item');
            categoryItem.setAttribute('data-category',  categories_title[i]);

            const categoryTitle = document.createElement('div');
            categoryTitle.classList.add('tab-item__title');

            const categoryTitle_text = document.createElement('h3');
            categoryTitle_text.textContent = categories_title[i];

            const categoryImg_Item = document.createElement('div');
            categoryImg_Item.classList.add('tab-item__img');

            const categoryImg_image = document.createElement('img');
            categoryImg_image.classList.add('tab-item__img_icon');
            categoryImg_image.src = `${arr_categories_img[i]}`;
            categoryImg_image.alt = `${categories_title[i]}`;

            categoryTitle.append(categoryTitle_text);
            categoryImg_Item.append(categoryImg_image);

            categoryItem.append(categoryTitle, categoryImg_Item);

            selector.appendChild(categoryItem);

        });
    }
}