
let productDescriptionTexts = [
    'Керамогранит Yasmin 598х185 коричневый C-YA4M112D',
    'Затирка для узких швов Ceresit СЕ 33, цвет белый, 2 кг',
    'Грунтовка Старатели 10л глубокого проникновения',
    'Гипсокартон Волма, 2500 х 1200 х 12,5 мм',
    'Профиль 0,55мм для гипсокартона',
    'Рулетка 3м',
    'Кнауф Мп 75 штукатурка гипсовая МН 30кг',
    'Уголок серый канализационный Д110 ГР90',
    'Knauf Ротбанд, 30 кг',
    'Саморез по металлу 3,5х25 мм для гипсокартона',
    'Шпатлевка универсальная Danogips SuperFinish 17 л',
    'Клейкая лента металлизированная Изоспан FL 5х5000 см'
]

let productPrice = [899, 275, 839, 335, 195, 100, 380, 335, 508, 340, 555, 226]

export function ProductItem(parentSelector, imgs){
    for(let i = 0; i < imgs.length; i++){
        parentSelector.forEach(selector => {
            
            const productItem = document.createElement('div');
            productItem.classList.add('product-card_item');

            const productImgLayer = document.createElement('div');
            productImgLayer.classList.add('product-card_item__img');

            const ImgLayer_img = document.createElement('img');
            ImgLayer_img.classList.add('product-img');
            ImgLayer_img.src = imgs[i];
            ImgLayer_img.alt = 'Продукт';

            productImgLayer.append(ImgLayer_img);

            const productItemData = document.createElement('div');
            productItemData.classList.add('product-card_item__data');

            const productItemData_description = document.createElement('div');
            productItemData_description.classList.add('product-description');
            productItemData_description.textContent = productDescriptionTexts[i];

            const productItemdata_price = document.createElement('div');
            productItemdata_price.classList.add('product-price');
            productItemdata_price.textContent = productPrice[i];

            const productPriceVallet = document.createElement('span');
            productPriceVallet.textContent = '₽';

            productItemdata_price.append(productPriceVallet);

            productItemData.append(productItemData_description, productItemdata_price);

            const productItemButton_Layer = document.createElement('div');
            productItemButton_Layer.classList.add('product-card_item__button');

            const productLayer_button = document.createElement('button');
            productLayer_button.classList.add('btn-product-buy');
            productLayer_button.textContent = 'В корзину';

            productItemButton_Layer.append(productLayer_button);

            productItem.append(productImgLayer, productItemData, productItemButton_Layer);

            selector.appendChild(productItem);

        });
    }
}