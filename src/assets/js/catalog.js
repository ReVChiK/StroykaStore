import { TextContent } from "./abstract_components/text";

let catalogProviders = [
    'Аксон', 'A-progress.ru', 'Дешево-Строй', 'ГдеМатериал', 'ГлавСнаб', 
    'Гермес Групп', 'Маркет-Строй', 'МосДоброСтрой', 'Сатурн', 'Ремонт 3000', 'Roof&Facade', 'Строительный двор', 'Skladom.ru', 'Smart Complect', 'Конструктор', 'RDS Строй', 'Строительный Онлайн', 'Стройкомплект', 'Строительный Мир', 'Stroimaterial Moskva', 'Стройландия', 'Stroy Shopper'
]

let catalogPreview_Title = [
    'Сантехника', 'Стройматериалы', 'Напольные покрытия', 'Отделка стен и потолка', 'Керамическая плитка', 'Двери и окна', 'Лакокрасочные материалы',
    'Климат и отопление', 'Инструменты', 'Крепеж и фурнитура', 'Освещение', 'Электротовары'
]

let catalogProduct_Name = [
    'Ванны', 'Комплектующие для ванн', 'Душевые', 'Унитазы и биде', 'Смесители',
    'Душевое оборудование', 'Раковины', 'Пьедесталы для раковин', 'Сухие смеси',
    'Пиломатериалы', 'Гипсокартон', 'Профиль для гипсокартона', 'Изоляционные материалы', 'Армирующие материалы', 'Кровля', 'Ленты строительные', 'Линолеум', 'Ламинат', 'Ковролин', 'Плинтус напольный', 'Пороги', 'Подложки',
    'Ковровые дорожки', 'Плитка ПВХ, виниловый ламинат', 'Обои', 'Стеновые панели', 'Плинтус потолочный', 'Углы к потолочному плинтусу', 'Потолочная плитка', 'Профили алюминиевые', 'Декоративные молдинги, багеты', 'Пленки самоклеящиеся', 'Настенная плитка', 'Напольная плитка', 'Керамогранит', 'Декоративная плитка', 'Системы выравнивания плитки', 'Уголки и профили для плитки', 'Керамический плинтус', 'Мозаика', 'Межкомнатные двери', 'Входные двери', 'Дверные коробки', 'Арки', 'Дверные наличники', 'Дверные доборы', 'Раздвижные двери', 'Скобяные изделия', 'Краски', 'Эмали', 'Грунтовки', 'Монтажные пены', 'Герметики', 'Клеи', 'Покрытия для дерева', 'Лаки', 'Радиаторы отопления', 'Теплый пол', 'Электрические камины', 'Вентиляция',
    'Тепловое оборудование', 'Котлы отопительные', 'Расширительные баки', 'Насосы циркуляционные', 'Электроинструмент', 'Расходные материалы', 'Малярный инструмент', 'Штукатурный инструмент', 'Шлифовальный инструмент', 'Измерительный инструмент', 'Шпатели', 'Спецодежда и средства защиты', 'Саморезы', 'Дюбель', 'Гвозди', 'Анкер', 'Болты', 'Гайки', 'Шуруп', 'Шайбы', 'Лампы', 'Люстры', 'Потолочные светильники', 'Светодиодные светильники', 'Подвесные светильники', 'Светодиодные панели', 'Бра', 'Настольные лампы', 'Розетки и выключатели', 'Кабели и комплектующие', 'Телекоммуникации', 'Счетчики электроэнергии', 'Автоматические выключатели', 'Электрические щитки', 'Тройники для розетки', 'Удлинители электрические'
]

export function RedirectCatalog(){
    const catalogBtn = document.querySelectorAll('#btn-catalog');

    catalogBtn.forEach(btn => {
        btn.onclick = ()=>{
            window.open('../../catalog/catalog.html', '_self')
        }
    });
}

export function Catalog_Providers_Component(parentSelector){
    for(let i = 0; i < catalogProviders.length; i++){
        parentSelector.forEach(selector=>{

            const providerItem = document.createElement('div');

            if(i == 0){
                providerItem.classList.add('provider__item', 'active')
            }else{
                providerItem.classList.add('provider__item')
            }

            const providerItem_link = document.createElement('a');
            providerItem_link.classList.add('provider__item_link');
            providerItem_link.href = '#';
            providerItem_link.textContent = catalogProviders[i];

            providerItem.append(providerItem_link);

            selector.appendChild(providerItem);

        })
    }
}

export function Choose_Provider(provider_selectors){
    for(let i = 0; i < provider_selectors.length; i++){
        provider_selectors[i].onclick = ()=>{
            provider_selectors.forEach(element => {
                element.classList.remove('active');
            });
            provider_selectors[i].classList.add('active');
        }
    }
}

function Set_href_Product(){
    let porductItem = document.querySelectorAll('.product__link');

    for(let i = 0; i < porductItem.length; i++){
        if(i == 8){
            porductItem[i].href = '../../catalog/categories/categories.html';
        }
    }
}

export function Catalog_Product(parentSelector, imgs, icon){
    for(let i = 0; i < imgs.length; i++){
        parentSelector.forEach(selector => {
            
            const catalogProduct_Item = document.createElement('div');
            catalogProduct_Item.classList.add('catalog__product_item');

            const catalogProduct_preview = document.createElement('div');
            catalogProduct_preview.classList.add('catalog__product_item-preview');

            const catalogPreview_title = document.createElement('div');
            catalogPreview_title.classList.add('item__preview_title');

            const catalogPreview_title_text = document.createElement('h6');
            catalogPreview_title_text.textContent = catalogPreview_Title[i];

            const catalogPreview_Image = document.createElement('div');
            catalogPreview_Image.classList.add('item__preview_image');

            const catalogImage_img = document.createElement('img');
            catalogImage_img.classList.add('product__item_img');
            catalogImage_img.src = imgs[i];
            catalogImage_img.alt = 'Обложка продукта';

            catalogPreview_title.append(catalogPreview_title_text);

            catalogPreview_Image.append(catalogImage_img);

            catalogProduct_preview.append(catalogPreview_title, catalogPreview_Image);

            const catalogProduct_List = document.createElement('ul');
            catalogProduct_List.classList.add('catalog__product_item-list');

            for(let j = 0; j < 8; j++){
                const catalogList_item = document.createElement('li');
                catalogList_item.classList.add('catalog__list_item');

                const catalogList_item_Arrow = document.createElement('div');
                catalogList_item_Arrow.classList.add('catalog__list_item-arrow');
                catalogList_item_Arrow.innerHTML = icon;

                const catalogList_item_product = document.createElement('div');
                catalogList_item_product.classList.add('catalog__list_item-product');

                const catalogItem_product_link = document.createElement('a');
                catalogItem_product_link.classList.add('product__link');
                catalogItem_product_link.href = '#';

                catalogList_item_product.append(catalogItem_product_link);

                catalogList_item.append(catalogList_item_Arrow, catalogList_item_product);

                catalogProduct_List.append(catalogList_item);
            }

            catalogProduct_Item.append(catalogProduct_preview, catalogProduct_List);

            selector.appendChild(catalogProduct_Item);

        });
    }

    Set_href_Product();
}

export function Catalog_Product_Name(products_selectors){
    TextContent(products_selectors, catalogProduct_Name)
}