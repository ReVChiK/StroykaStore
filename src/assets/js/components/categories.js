// Main Page
import shower from '../../img/categories_img/shower.png';
import lumber from '../../img/categories_img/lumber.png';
import linoleum from '../../img/categories_img/linoleum.png';
import wallpapers from '../../img/categories_img/wallpaper.png';
import tools from '../../img/categories_img/tools.png';
import gfc from '../../img/categories_img/gfc.png';
import windows from '../../img/categories_img/windows.png';
import doors from '../../img/categories_img/doors.png';
import plumbing from '../../img/categories_img/plumbing.png';
import paints from '../../img/categories_img/paints.png';
import eg from '../../img/categories_img/eg.png';
import interior from '../../img/categories_img/interior.png';
// Main Page

// catalog_categories
import catalogCategories_putty from '../../img/catalog/catalog_categories/categories_putty.png';
import catalogCategories_plaster from '../../img/catalog/catalog_categories/categories_plaster.png';
import catalogCategories_plaster2 from '../../img/catalog/catalog_categories/categories_plaster_2.png';
import catalogCategories_glue from '../../img/catalog/catalog_categories/categories_glue.png';
import catalogCategories_glue2 from '../../img/catalog/catalog_categories/categories_glue_2.png';
import catalogCategories_knauf from '../../img/catalog/catalog_categories/categories_knauf.png';
import catalogCategories_plaster3 from '../../img/catalog/catalog_categories/categories_plaster_3.png';
import catalogCategories_grout from '../../img/catalog/catalog_categories/categories_grout.png';
import catalogCategories_osnovit from '../../img/catalog/catalog_categories/categories_osnovit.png';
import catalogCategories_glue3 from '../../img/catalog/catalog_categories/categories_glue_3.png';
import catalogCategories_plaster4 from '../../img/catalog/catalog_categories/categories_plaster_4.png';
import catalogCategories_knauf2 from '../../img/catalog/catalog_categories/categories_knauf_2.png';
import catalogCategories_plaster5 from '../../img/catalog/catalog_categories/categories_plaster_5.png';
import catalogCategories_putty2 from '../../img/catalog/catalog_categories/categories_putty_2.png';
import catalogCategories_plaster6 from '../../img/catalog/catalog_categories/categories_plaster_6.png';
import catalogCategories_plaster7 from '../../img/catalog/catalog_categories/categories_plaster_7.png';
import catalogCategories_mixture from '../../img/catalog/catalog_categories/categories_mixture.png';
import catalogCategories_glue4 from '../../img/catalog/catalog_categories/categories_glue_4.png';
// catalog_categories

// catalog_categories Check box icons
import categList_BrandIcon from '../../img/catalog/catalog_categories/brands/brand_checked.png';;
import categList_BrandIcon2 from '../../img/catalog/catalog_categories/brands/brand_not_checked.png';
import { toDivide } from '../abstract_components/number';
// catalog_categories Check box icons

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
    508, 2555, 969, 315, 976, 502, 265, 289, 302
]

const catalogcategories_id = [
    116, 117, 118, 119, 120, 121, 122, 123, 124, 125, 126, 127, 128, 129, 130, 131, 132, 133
]

const categoriesBrands_List = [
    'bever', 'braer', 'leonardo_stone', 'euro_block',
    'perfekta', 'mstera', 'lcp', 'galen', 'recke', 
    'mod_format', 'decra', 'engles'
]

const categoriesBrands_attributes = [
    'bever', 'braer', 'leonardo_stone', 'euro_block',
    'perfekta', 'mstera', 'lcp', 'galen', 'recke', 
    'mod_format', 'decra', 'engles', 'bever', 'lcp',
    'galen', 'recke', 'mod_format', 'euro_block'
]

const categoriesProviders_List = [
    'Аксон', 'A-progress.ru', 'Дешево-Строй', 'ГдеМатериал', 'ГлавСнаб', 
    'Гермес Групп', 'Маркет-Строй', 'МосДоброСтрой', 'Сатурн', 'Ремонт 3000', 'Roof&Facade', 'Строительный двор', 'Skladom.ru', 'Smart Complect', 'Конструктор', 'RDS Строй', 'Строительный Онлайн', 'Стройкомплект', 'Строительный Мир', 'Stroimaterial Moskva', 'Стройландия', 'Stroy Shopper'
]

const tab_img_array = [
    shower, lumber, linoleum, wallpapers, tools,
    gfc, windows, doors, plumbing, paints, eg, interior
];

const catalogCategories_previews_img = [
    catalogCategories_putty, catalogCategories_plaster, catalogCategories_plaster2, catalogCategories_glue, catalogCategories_glue2, catalogCategories_knauf, catalogCategories_plaster3, catalogCategories_grout, catalogCategories_osnovit, catalogCategories_glue3, catalogCategories_plaster4, catalogCategories_knauf2, catalogCategories_plaster5, catalogCategories_putty2, catalogCategories_plaster6, catalogCategories_plaster7, catalogCategories_mixture, catalogCategories_glue4
]

export async function Add_Category(parentSelector){
    for(let i = 0; i < tab_img_array.length; i++){

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
            categoryImg_image.src = tab_img_array[i];
            categoryImg_image.alt = categories_title[i];

            categoryTitle.append(categoryTitle_text);
            categoryImg_Item.append(categoryImg_image);

            categoryItem.append(categoryTitle, categoryImg_Item);

            selector.appendChild(categoryItem);

        });
    }
}

// Categories from Catalog
export async function Catalog_Categories_Component(parentSelector){
    for(let i = 0; i < catalogCategories_previews_img.length; i++){
        parentSelector.forEach(selector=>{

            const categoriesItem = document.createElement('div');
            categoriesItem.classList.add('categories__item');
            categoriesItem.setAttribute('categItem-brand', categoriesBrands_attributes[i]);
            categoriesItem.setAttribute('categItem-price', catalogCategories_Price[i]);

            const categoriesItem_image = document.createElement('div');
            categoriesItem_image.classList.add('categories__item_image');

            const categoriesItem_img = document.createElement('img');
            categoriesItem_img.classList.add('categories__item_img');
            categoriesItem_img.src = catalogCategories_previews_img[i];
            categoriesItem_img.alt = 'Продукт';

            const categoriesItem_data = document.createElement('div');
            categoriesItem_data.classList.add('categories__item_data');

            const categories__item_dataContent = document.createElement('div');
            categories__item_dataContent.classList.add('categories__item_data-content');

            const categoriesContent_text = document.createElement('div');
            categoriesContent_text.classList.add('categories__data_text');

            const categoriesContent_link = document.createElement('a');
            categoriesContent_link.classList.add('categories__link', 'data__link_product');
            if(i == 5){
                categoriesContent_link.setAttribute('data-id', 110);
            }else if(i == 7){
                categoriesContent_link.setAttribute('data-id', 105);
            }else if(i == 9){
                categoriesContent_link.setAttribute('data-id', 112);
            }else if(i == 10){
                categoriesContent_link.setAttribute('data-id', 114);
            }else{
                categoriesContent_link.setAttribute('data-id', catalogcategories_id[i]);
            }
            categoriesContent_link.href = '#';
            categoriesContent_link.textContent = catalogcategories_Link_text[i];

            const categoriesContent_price = document.createElement('div');
            categoriesContent_price.classList.add('categories__data_price');

            const categPrice_text = document.createElement('h6');
            categPrice_text.textContent = toDivide(catalogCategories_Price[i]);

            const categPrice_textVallet = document.createElement('span');
            categPrice_textVallet.textContent = '₽';

            const categories__itemButton = document.createElement('div');
            categories__itemButton.classList.add('categories__item_button');

            const categories__itemButton_content = document.createElement('div');
            categories__itemButton_content.classList.add('categories__item_button-content');

            const categ_itemButton_btn = document.createElement('button');
            categ_itemButton_btn.classList.add('categories-btn__buy', 'basket-btn');
            if(i == 5){
                categ_itemButton_btn.setAttribute('basket-id', 110);
            }else if(i == 7){
                categ_itemButton_btn.setAttribute('basket-id', 105);
            }else if(i == 9){
                categ_itemButton_btn.setAttribute('basket-id', 112);
            }else if(i == 10){
                categ_itemButton_btn.setAttribute('basket-id', 114);
            }else{
                categ_itemButton_btn.setAttribute('basket-id', catalogcategories_id[i])
            }
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
            brandItem_input.setAttribute('input-brand', categoriesBrands_List[i]);

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

let brands = [];
export function Categories_Panel_Manipulation(){

    let checkBoxs_input = document.querySelectorAll('.brands__list_chbox');

    let btn_accept = document.querySelector('.options__buttons_btn-accept');
    let btn_reset = document.querySelector('.options__buttons_btn-reset');

    let mobileModal_options = document.querySelector('.categories-list__options-modal');
    let btn_accept_mobile = document.querySelector('.options__buttons_btn-accept__mobile');
    let btn_reset_mobile = document.querySelector('.options__buttons_btn-reset__mobile');

    checkBoxs_input.forEach(input=>{
        if(!input.checked){
            input.style.background = `url(${categList_BrandIcon2})`;
        }

        input.onclick = ()=>{
            if(!input.checked){
                input.style.background = `url(${categList_BrandIcon2})`;
                
            }else{
                input.style.background = `url(${categList_BrandIcon})`;
                brands.push(input.getAttribute('input-brand'));
                brands = [...new Set(brands)];
                console.log(brands);
            }
        }
    })


    if(btn_accept !== null){
        btn_accept.onclick = ()=>{
            Calculations();
        }
    }

    if(btn_accept_mobile !== null){
        btn_accept_mobile.onclick = ()=>{
            Calculations_Mobile();
            mobileModal_options.style.display = 'none';
        }
    }else{
        return;
    }

    if(btn_reset !== null){
        btn_reset.onclick = ()=>{
            if(localStorage.getItem('provider') !== null){
                localStorage.removeItem('provider');
                window.location.reload();
            }else{
                window.location.reload();
                return;
            }
        }
    }else{
        return;
    }

    if(btn_reset_mobile !== null){
        btn_reset_mobile.onclick = ()=>{
            if(localStorage.getItem('provider') !== null){
                localStorage.removeItem('provider');
                window.location.reload();
            }else{
                window.location.reload();
                return;
            }
        }
    }else{
        return;
    }
}

function Calculations(){
    let categItems = document.querySelectorAll('.categories__item');

    let price_value_1 = document.querySelector('.option__price_1');
    let price_value_2 = document.querySelector('.option__price_2');

    let minPrice = 0;
    let maxPrice = 0;

    let providers = document.querySelector('#categ__providers');

    minPrice = parseInt(price_value_1.value);
    maxPrice = parseInt(price_value_2.value);

    for(let j = 0; j < categItems.length; j++){
        if(parseInt(categItems[j].getAttribute('categitem-price')) >= minPrice && parseInt(categItems[j].getAttribute('categitem-price')) <= maxPrice){
            categItems[j].style.display = 'block';
        }else{
            categItems[j].style.display = 'none';
        }
    }

    localStorage.setItem('provider', providers.value);
}

function Calculations_Mobile(){
    let categItems = document.querySelectorAll('.categories__item');

    let price_value_1_mobile = document.querySelector('.option__price_mobile1');
    let price_value_2_mobile = document.querySelector('.option__price_mobile2');

    let minPrice = 0;
    let maxPrice = 0;

    let providers = document.querySelector('#categ__providers_mobile');

    minPrice = parseInt(price_value_1_mobile.value);
    maxPrice = parseInt(price_value_2_mobile.value);

    for(let j = 0; j < categItems.length; j++){
        if(parseInt(categItems[j].getAttribute('categitem-price')) >= minPrice && parseInt(categItems[j].getAttribute('categitem-price')) <= maxPrice){
            categItems[j].style.display = 'block';
        }else{
            categItems[j].style.display = 'none';
        }
    }

    localStorage.setItem('provider', providers.value);
}

export function Categories_Filters_Modal(){
    let categFilters_Modal = document.querySelectorAll('.categories-list__options-modal');

    let categFilters_Modal_BtnClose = document.querySelectorAll('.categories-list__options-modal__btnClose');

    let categFilters_Button = document.querySelectorAll('.categFilters');

    categFilters_Button.forEach((btn, index)=>{
        btn.onclick = ()=>{
            categFilters_Modal[index].style.display = 'block';
        }
    })

    categFilters_Modal_BtnClose.forEach((closeBtn, i)=>{
        closeBtn.onclick = ()=>{
            categFilters_Modal[i].style.display = 'none';
        }
    })
}
