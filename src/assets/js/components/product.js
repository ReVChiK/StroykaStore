
import data from '../../../resources/resource.json5';

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
const product_id = [104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114, 115]

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

            const productItemData_description_link = document.createElement('a');
            productItemData_description_link.classList.add('data__link_product');
            productItemData_description_link.setAttribute('data-id', product_id[i]);
            productItemData_description_link.href = '#';
            productItemData_description_link.textContent = productDescriptionTexts[i];

            const productItemdata_price = document.createElement('div');
            productItemdata_price.classList.add('product-price');
            productItemdata_price.textContent = productPrice[i];

            const productPriceVallet = document.createElement('span');
            productPriceVallet.textContent = '₽';

            productItemdata_price.append(productPriceVallet);

            productItemData_description.append(productItemData_description_link);

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

export function Redirect_Product(){
    let product_links = document.querySelectorAll('.data__link_product');

    let product_data = {};

    for(let i = 0; i<product_links.length; i++){
        product_links[i].onclick = ()=>{
            if(parseInt(product_links[i].getAttribute('data-id')) == data.products[i].id){
                // if(localStorage.getItem('product')){
                //     products_array = JSON.parse(localStorage.getItem('product'))
                // }else{
                //     var products_array = [];
                // }

                product_data.id = data.products[i].id;
                product_data.description = data.products[i].description;
                product_data.category = data.products[i].category;
                product_data.category_kind = data.products[i].category_kind;
                product_data.price = data.products[i].price;

                // products_array.push(product_data);

                localStorage.setItem('product', JSON.stringify(product_data));
                product_links[i].href = '../../../catalog/categories/product/product.html'
            }
        }
    }
}

