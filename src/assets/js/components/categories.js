
const categories_title = [
    'Душевые', 'Пиломатериалы', 'Линолеум', 'Обои',
    'Инструменты', 'Товары для дачи', 'Окна', 'Двери',
    'Сантехника', 'Краски', 'Электротовары', 'Интерьер'
]

const catalogcategories_Link_text = [
    'Шпатлевка масляно-клеевая 3кг Л-С', 'Штукатурка цементная толстослойная PLITONIT Т1+ 25 кг', 'Штукатурка гипсовая Волма Слой, 5 кг', 'Клей плиточный Дауэр Кварц Dauer Quartz 25кг', 'Клей плиточный Dauer Maxi Дауэр Макси 25кг толстослойный', 'Кнауф МП 75 штукатурка гипсовая МН 30кг', 'Штукатурка гипсовая Основит Т-25 Гипсвэлл', 'Затирка CERESIT CE33 (ЦЕРЕЗИТ СЕ33) розовая (2 кг)', 'Основит PG 35 W (Т-35) Экосилк Шпатлевка гипсовая белая (20 кг)', 'Клей гипсовый монтажный Knauf Перлфикс 30 кг', 'Шпатлевка готовая финишная Sheetrock Danogips SuperFinish 17 л', 'Грунтовка Knauf Тифенгрунд морозостойкая 10 кг', 'Штукатурка гипсовая Megapolimer Gips Machine application 137 для машинного нанесения 30 кг', 'Шпатлевка финишная полимерная Litokol Litofinish Fine белая 20 кг', 'Штукатурка гипсовая Perfekta Гипстар серая 30 кг', 'Штукатурка цементная высокопрочная Hands Socle PRO, 24 кг', 'Смесь М-200 монтажно-кладочная, Baumax (50 кг)', 'Клей плиточный (C0) BUILDER КП-500 25 кг.'
]

const catalogCategories_Price = [
    212, 349, 229, 490, 470, 380, 295, 250, 320, 
    425, 2200, 969, 315, 976, 502, 265, 289, 302
]

const categoriesBrands_List = [
    'bever', 'braer', 'leonardo_stone', 'euro_block',
    'perfekta', 'mstera', 'lcp', 'galen', 'recke', 
    'mod_format', 'decra', 'engles'
]

const categoriesProviders_List = [
    'Аксон', 'A-progress.ru', 'Дешево-Строй', 'ГдеМатериал', 'ГлавСнаб', 
    'Гермес Групп', 'Маркет-Строй', 'МосДоброСтрой', 'Сатурн', 'Ремонт 3000', 'Roof&Facade', 'Строительный двор', 'Skladom.ru', 'Smart Complect', 'Конструктор', 'RDS Строй', 'Строительный Онлайн', 'Стройкомплект', 'Строительный Мир', 'Stroimaterial Moskva', 'Стройландия', 'Stroy Shopper'
]

export async function Add_Category(parentSelector, categories_len, arr_categories_img){
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
            categoryImg_image.src = arr_categories_img[i];
            categoryImg_image.alt = categories_title[i];

            categoryTitle.append(categoryTitle_text);
            categoryImg_Item.append(categoryImg_image);

            categoryItem.append(categoryTitle, categoryImg_Item);

            selector.appendChild(categoryItem);

        });
    }
}

// Categories from Catalog
export async function Catalog_Categories_Component(parentSelector, imgs){
    for(let i = 0; i < imgs.length; i++){
        parentSelector.forEach(selector=>{

            const categoriesItem = document.createElement('div');
            categoriesItem.classList.add('categories__item');

            const categoriesItem_image = document.createElement('div');
            categoriesItem_image.classList.add('categories__item_image');

            const categoriesItem_img = document.createElement('img');
            categoriesItem_img.classList.add('categories__item_img');
            categoriesItem_img.src = imgs[i];
            categoriesItem_img.alt = 'Продукт';

            const categoriesItem_data = document.createElement('div');
            categoriesItem_data.classList.add('categories__item_data');

            const categories__item_dataContent = document.createElement('div');
            categories__item_dataContent.classList.add('categories__item_data-content');

            const categoriesContent_text = document.createElement('div');
            categoriesContent_text.classList.add('categories__data_text');

            const categoriesContent_link = document.createElement('a');
            categoriesContent_link.classList.add('categories__link');
            categoriesContent_link.href = '#';
            categoriesContent_link.textContent = catalogcategories_Link_text[i];

            const categoriesContent_price = document.createElement('div');
            categoriesContent_price.classList.add('categories__data_price');

            const categPrice_text = document.createElement('h6');
            categPrice_text.textContent = catalogCategories_Price[i];

            const categPrice_textVallet = document.createElement('span');
            categPrice_textVallet.textContent = '₽';

            const categories__itemButton = document.createElement('div');
            categories__itemButton.classList.add('categories__item_button');

            const categories__itemButton_content = document.createElement('div');
            categories__itemButton_content.classList.add('categories__item_button-content');

            const categ_itemButton_btn = document.createElement('button');
            categ_itemButton_btn.classList.add('categories-btn__buy');
            categ_itemButton_btn.textContent = 'В корзину';

            categoriesItem_image.append(categoriesItem_img);

            categoriesContent_text.append(categoriesContent_link);

            categPrice_text.append(categPrice_textVallet);

            categoriesContent_price.append(categPrice_text);

            categories__item_dataContent.append(categoriesContent_text, categoriesContent_price);

            categoriesItem_data.append(categories__item_dataContent);

            categories__itemButton_content.append(categ_itemButton_btn);

            categories__itemButton.append(categories__itemButton_content);

            categoriesItem.append(categoriesItem_image, categoriesItem_data, categories__itemButton);

            selector.appendChild(categoriesItem);


        })
    }
}
// Categories from Catalog
export async function categoriesList_Brand_Component(parentSelector){
    for(let i = 0; i < categoriesBrands_List.length; i++){
        parentSelector.forEach(selector => {
            
            const brandItem = document.createElement('li');

            const brandItem_input = document.createElement('input');
            brandItem_input.classList.add('brands__list_chbox');
            brandItem_input.type = 'checkbox';
            brandItem_input.name = 'chbox_' + categoriesBrands_List[i];

            const brandItem_brandName = document.createElement('div');
            brandItem_brandName.classList.add('checkBox__brand_name');

            const brandItem_brandName_text = document.createElement('p');
            brandItem_brandName_text.textContent = capitalize_categ_Brand(categoriesBrands_List[i]);

            brandItem_brandName.append(brandItem_brandName_text);

            brandItem.append(brandItem_input, brandItem_brandName);

            selector.appendChild(brandItem);
        });
    }
}

export async function CategoriesList_Provider_Component(parentSelector){
    for(let i = 0; i < categoriesProviders_List.length; i++){
        parentSelector.forEach(selector=>{

            const providerItem = document.createElement('option');
            providerItem.value = categoriesProviders_List[i];
            providerItem.textContent = categoriesProviders_List[i];

            selector.appendChild(providerItem);

        })
    }
}

export function categoriesList_Brands(categCheckBoxs, img_not_checked, img_checked){

    categCheckBoxs.forEach(input => {
        if(!input.checked){
            input.style.background = `url(${img_not_checked})`;
        }
        input.onclick = ()=>{
            if(!input.checked){
                input.style.background = `url(${img_not_checked})`;
            }else{
                input.style.background = `url(${img_checked})`;
            }
        }
    });
}

function capitalize_categ_Brand(brand){
    if(brand.length == 3){
        return brand.toUpperCase();
    }else{
        return brand.charAt(0).toUpperCase() + brand.slice(1);
    }
}

export function Categories_Range_Inputs(sliderOne, sliderTwo, inputPrice1, inputPrice2, sliderTrack){

    let minGap = 8500;

    for(let i = 0; i < inputPrice1.length; i++){
        sliderOne[i].value = parseInt(inputPrice1[i].value);
        sliderTrack[i].style.background = `linear-gradient(to right, #E8E9EA ${(sliderOne[i].value / sliderOne[i].max) * 100}%, #8B8D92 ${(sliderOne[i].value / sliderOne[i].max) * 100}%, #8B8D92 ${(sliderTwo[i].value / sliderOne[i].max) * 100}%, #E8E9EA ${(sliderTwo[i].value / sliderOne[i].max) * 100}%)`
        inputPrice1[i].oninput = ()=>{
            if(parseInt(inputPrice2[i].value) - parseInt(inputPrice1[i].value) <= minGap){
                sliderOne[i].value = parseInt(sliderTwo[i].value) - minGap;
                sliderTrack[i].style.background = `linear-gradient(to right, #E8E9EA ${(sliderOne[i].value / sliderOne[i].max) * 100}%, #8B8D92 ${(sliderOne[i].value / sliderOne[i].max) * 100}%, #8B8D92 ${(sliderTwo[i].value / sliderOne[i].max) * 100}%, #E8E9EA ${(sliderTwo[i].value / sliderOne[i].max) * 100}%)`
            }else{
                sliderOne[i].value = parseInt(inputPrice1[i].value)
                sliderTrack[i].style.background = `linear-gradient(to right, #E8E9EA ${(sliderOne[i].value / sliderOne[i].max) * 100}%, #8B8D92 ${(sliderOne[i].value / sliderOne[i].max) * 100}%, #8B8D92 ${(sliderTwo[i].value / sliderOne[i].max) * 100}%, #E8E9EA ${(sliderTwo[i].value / sliderOne[i].max) * 100}%)`
            }
        }
    }
    for(let i = 0; i < inputPrice2.length; i++){
        sliderTwo[i].value = parseInt(inputPrice2[i].value);
        sliderTrack[i].style.background = `linear-gradient(to right, #E8E9EA ${(sliderOne[i].value / sliderOne[i].max) * 100}%, #8B8D92 ${(sliderOne[i].value / sliderOne[i].max) * 100}%, #8B8D92 ${(sliderTwo[i].value / sliderOne[i].max) * 100}%, #E8E9EA ${(sliderTwo[i].value / sliderOne[i].max) * 100}%)`
        inputPrice2[i].oninput = ()=>{
            if(parseInt(inputPrice2[i].value) - parseInt(inputPrice1[i].value) <= minGap){
                sliderTwo[i].value = parseInt(sliderOne[i].value) + minGap;
                sliderTrack[i].style.background = `linear-gradient(to right, #E8E9EA ${(sliderOne[i].value / sliderOne[i].max) * 100}%, #8B8D92 ${(sliderOne[i].value / sliderOne[i].max) * 100}%, #8B8D92 ${(sliderTwo[i].value / sliderOne[i].max) * 100}%, #E8E9EA ${(sliderTwo[i].value / sliderOne[i].max) * 100}%)`
            }else{
                sliderTwo[i].value = parseInt(inputPrice2[i].value)
                sliderTrack[i].style.background = `linear-gradient(to right, #E8E9EA ${(sliderOne[i].value / sliderOne[i].max) * 100}%, #8B8D92 ${(sliderOne[i].value / sliderOne[i].max) * 100}%, #8B8D92 ${(sliderTwo[i].value / sliderOne[i].max) * 100}%, #E8E9EA ${(sliderTwo[i].value / sliderOne[i].max) * 100}%)`
            }
        }
    }

    for(let j = 0; j < sliderOne.length; j++){
        sliderOne[j].oninput = ()=>{
            if(parseInt(sliderTwo[j].value) - parseInt(sliderOne[j].value) <= minGap){
                sliderOne[j].value = parseInt(sliderTwo[j].value) - minGap;
                sliderTrack[j].style.background = `linear-gradient(to right, #E8E9EA ${(sliderOne[j].value / sliderOne[j].max) * 100}%, #8B8D92 ${(sliderOne[j].value / sliderOne[j].max) * 100}%, #8B8D92 ${(sliderTwo[j].value / sliderOne[j].max) * 100}%, #E8E9EA ${(sliderTwo[j].value / sliderOne[j].max) * 100}%)`
            }else{
                inputPrice1[j].value = parseInt(sliderOne[j].value);
                sliderTrack[j].style.background = `linear-gradient(to right, #E8E9EA ${(sliderOne[j].value / sliderOne[j].max) * 100}%, #8B8D92 ${(sliderOne[j].value / sliderOne[j].max) * 100}%, #8B8D92 ${(sliderTwo[j].value / sliderOne[j].max) * 100}%, #E8E9EA ${(sliderTwo[j].value / sliderOne[j].max) * 100}%)`
            }
        }
    }
    for(let j = 0; j < sliderTwo.length; j++){
        sliderTwo[j].oninput = ()=>{
            if(parseInt(sliderTwo[j].value) - parseInt(sliderOne[j].value) <= minGap){
                sliderTwo[j].value = parseInt(sliderOne[j].value) + minGap;
                sliderTrack[j].style.background = `linear-gradient(to right, #E8E9EA ${(sliderOne[j].value / sliderOne[j].max) * 100}%, #8B8D92 ${(sliderOne[j].value / sliderOne[j].max) * 100}%, #8B8D92 ${(sliderTwo[j].value / sliderOne[j].max) * 100}%, #E8E9EA ${(sliderTwo[j].value / sliderOne[j].max) * 100}%)`
            }else{
                inputPrice2[j].value = parseInt(sliderTwo[j].value);
                sliderTrack[j].style.background = `linear-gradient(to right, #E8E9EA ${(sliderOne[j].value / sliderOne[j].max) * 100}%, #8B8D92 ${(sliderOne[j].value / sliderOne[j].max) * 100}%, #8B8D92 ${(sliderTwo[j].value / sliderOne[j].max) * 100}%, #E8E9EA ${(sliderTwo[j].value / sliderOne[j].max) * 100}%)`
            }
        }
    }
}