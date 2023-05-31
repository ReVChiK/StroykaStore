import VanillaToasts from 'vanillatoasts';
import Swal from "sweetalert2";

import data from '../../../resources/resource.json5';

import basketInfoIcon from '../../icons/basket/info.svg';
import basketCarIcon from '../../icons/basket/car.svg';
import basketBoxIcon from '../../icons/basket/box.svg';

import Notifiaction_Image from '../../img/notification/notification.png';

import btn_add_card from '../../img/cards_socks/Add.svg';
import btn_remove_card from '../../img/cards_socks/Remove.svg';

// Basket Preview Images
import Ruberoid from '../../img/catalog/catalog_categories/products/product_fullSize/ruberoid.png';
import Pena from '../../img/catalog/catalog_categories/products/product_fullSize/pena.png';
import Grid from '../../img/catalog/catalog_categories/products/product_fullSize/grid.png';
import Metalocherepicha from '../../img/catalog/catalog_categories/products/product_fullSize/metalchezeticha.png';
import Keramogranit from '../../img/catalog/catalog_categories/products/product_fullSize/keramogranit.png';
import Zatirka from '../../img/catalog/catalog_categories/products/product_fullSize/zatirka.png';
import Gruntovka from '../../img/catalog/catalog_categories/products/product_fullSize/Gruntovka.png';
import Gipsokarton from '../../img/catalog/catalog_categories/products/product_fullSize/Gipsokarton.png';
import Profile from '../../img/catalog/catalog_categories/products/product_fullSize/Profile.png';
import Ruletka from '../../img/catalog/catalog_categories/products/product_fullSize/Ruletka.png';
import Knauf_Blue from '../../img/catalog/catalog_categories/products/product_fullSize/knauf_Blue.png';
import Angle_grey from '../../img/catalog/catalog_categories/products/product_fullSize/Angle_gray.png';
import Knauf_White from '../../img/catalog/catalog_categories/products/product_fullSize/knauf_White.png';
import Samorez from '../../img/catalog/catalog_categories/products/product_fullSize/Samorez.png';
import Shatlovka from '../../img/catalog/catalog_categories/products/product_fullSize/Shatlovka.png';
import Lenta from '../../img/catalog/catalog_categories/products/product_fullSize/Lenta.png';
//-------------------------//
import categProduct_Putty from '../../img/catalog/catalog_categories/products/product_putty.png';
import categProduct_Putty2 from '../../img/catalog/catalog_categories/products/product_putty2.png';
import categProduct_Shtukaturka from '../../img/catalog/catalog_categories/products/product_Shtukaturka.png';
import categProduct_Shtukaturka2 from '../../img/catalog/catalog_categories/products/product_Shtukaturka2.png';
import categProduct_Shtukaturka3 from '../../img/catalog/catalog_categories/products/product_Shtukaturka3.png';
import categProduct_Shtukaturka4 from '../../img/catalog/catalog_categories/products/product_Shtukaturka4.png';
import categProduct_Shtukaturka5 from '../../img/catalog/catalog_categories/products/product_Shtukaturka5.png';
import categProduct_Shtukaturka6 from '../../img/catalog/catalog_categories/products/product_Shtukaturka6.png';
import categProduct_Kley from '../../img/catalog/catalog_categories/products/product_kley.png';
import categProduct_Kley2 from '../../img/catalog/catalog_categories/products/product_kley2.png';
import categProduct_Kley3 from '../../img/catalog/catalog_categories/products/product_kley3.png';
import categProduct_Osnovit from '../../img/catalog/catalog_categories/products/product_osnovit.png';
import categProduct_Gruntovka from '../../img/catalog/catalog_categories/products/product_gruntovka.png';
import categProduct_Smes from '../../img/catalog/catalog_categories/products/product_smes.png';

import { toDivide } from '../abstract_components/number';
// Basket Preview Images

const basket_icons_array = [ basketInfoIcon, basketCarIcon, basketBoxIcon ];

let basketDescriptionText = [
    'Можно сделать заказ только от одного поставщика',
    'Доставка осуществляется курьерами поставщика или службой курьеров Достависта. Также товар можно забрать самостоятельно от поставщика',
    'Точная сумма доставки будет определена после после подтверждения заказа'
]

const imageFull_Size = [
    {id: 100, image: Ruberoid},
    {id: 101, image: Pena},
    {id: 102, image: Grid},
    {id: 103, image: Metalocherepicha},
    {id: 104, image: Keramogranit},
    {id: 105, image: Zatirka},
    {id: 106, image: Gruntovka},
    {id: 107, image: Gipsokarton},
    {id: 108, image: Profile},
    {id: 109, image: Ruletka},
    {id: 110, image: Knauf_Blue},
    {id: 111, image: Angle_grey},
    {id: 112, image: Knauf_White},
    {id: 113, image: Samorez},
    {id: 114, image: Shatlovka},
    {id: 115, image: Lenta},
    {id: 116, image: categProduct_Putty},
    {id: 117, image: categProduct_Shtukaturka},
    {id: 118, image: categProduct_Shtukaturka2},
    {id: 119, image: categProduct_Kley},
    {id: 120, image: categProduct_Kley2},
    {id: 122, image: categProduct_Shtukaturka3},
    {id: 124, image: categProduct_Osnovit},
    {id: 127, image: categProduct_Gruntovka},
    {id: 128, image: categProduct_Shtukaturka4},
    {id: 129, image: categProduct_Putty2},
    {id: 130, image: categProduct_Shtukaturka5},
    {id: 131, image: categProduct_Shtukaturka6},
    {id: 132, image: categProduct_Smes},
    {id: 133, image: categProduct_Kley3}
]

const deploy_path = 'https://revchik.github.io/StroykaStore';

export function BasketDescription_Item(parentSelector){
    for(let i = 0; i < basket_icons_array.length; i++){
        parentSelector.forEach(selector => {
            const descItem = document.createElement('div');
            descItem.classList.add('description__item');

            const descItemContent = document.createElement('div');
            descItemContent.classList.add('description__item_content');

            const descItemIcon = document.createElement('div');
            descItemIcon.classList.add('description__item_content-icon');
            descItemIcon.innerHTML = basket_icons_array[i];

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

export function Add_to_Basket(basket_btns, basket_count){
    
    let basket_products = {};
    let sorting_products = [];

    for(let i = 0; i < basket_btns.length; i++){
        basket_btns[i].onclick = ()=>{

            if(localStorage.getItem('basket_products')){
                basket_products_arr = JSON.parse(localStorage.getItem('basket_products'))
            }else{
                var basket_products_arr = [];
            }

            data.products.findIndex(product=>{
                if(product.id === parseInt(basket_btns[i].getAttribute('basket-id'))){
                    basket_products.id = product.id;
                    basket_products.description = product.description;
                    basket_products.price = product.price;
                    basket_products.amount = product.amount + 1;
                    basket_products.key = product.key;

                    basket_products_arr.push(basket_products);
                    sorting_products = basket_products_arr.reduce((r, i)=> 
                    !r.some(j=> Object.keys(i).length === Object.keys(j).length && !Object.keys(i).some(k => i[k] !== j[k])) ? [...r, i] : r, []);
                    localStorage.setItem('basket_products', JSON.stringify(sorting_products));

                    VanillaToasts.create({
                        title: product.description,
                        text: 'Добавлен в корзину',
                        type: 'success', // success, info, warning, error
                        icon: Notifiaction_Image,
                        positionClass: 'topRight',
                        timeout: 2500,
                        callback: function(){}
                    })
                }
            })

            for(let j = 0; j < basket_count.length; j++){

                if(localStorage.getItem('basket_products') === null){
                    basket_count[j].style.display = 'none';
                }else if(JSON.parse(localStorage.getItem('basket_products')).length < 1){
                    basket_count[j].style.display = 'none';
                }
                else{
                    basket_count[j].style.display = 'flex';
                    basket_count[j].children[0].textContent = JSON.parse(localStorage.getItem('basket_products')).length;
                }
        
            }
        }
    }

    for(let j = 0; j < basket_count.length; j++){

        if(localStorage.getItem('basket_products') === null){
            basket_count[j].style.display = 'none';
        }else if(JSON.parse(localStorage.getItem('basket_products')).length < 1){
            basket_count[j].style.display = 'none';
        }else{
            basket_count[j].style.display = 'flex';
            basket_count[j].children[0].textContent = JSON.parse(localStorage.getItem('basket_products')).length;
        }

    }
}

export async function Basket_Item_Component(parentSelector, products_count, products_price){

    if(localStorage.getItem('basket_products') !== null){
        var basket_product_items = JSON.parse(localStorage.getItem('basket_products'));

        let summ = 0;

        for(let i = 0; i < basket_product_items.length; i++){
            parentSelector.forEach(selector => {
            
                // Basket Item -> Selector
                const Basket_Item = document.createElement('div');
                Basket_Item.classList.add('basket__item');
                // Basket Item -> Selector
    
                // Basket Item content -> Basket Item
                const Basket_Item_content = document.createElement('div');
                Basket_Item_content.classList.add('basket__item_content');
                // Basket Item content -> Basket Item
    
                // Basket Item Preview -> Basket Item content
                const Basket_Item_preview = document.createElement('div');
                Basket_Item_preview.classList.add('basket__item_content-preview');
                // Basket Item Preview -> Basket Item content
    
                // Basket Preview Image -> Basket Item Preview
                const Basket_Preview_Image = document.createElement('img');
                for(let j = 0; j < imageFull_Size.length; j++){
                    if(imageFull_Size[j].id == basket_product_items[i].id){
                        Basket_Preview_Image.src = imageFull_Size[j].image;
                    }
                }
                Basket_Preview_Image.alt = 'Товар';
                // Basket Preview Image -> Basket Item Preview
    
                // Basket Item Data -> Basket Item content
                const Basket_Item_data = document.createElement('div');
                Basket_Item_data.classList.add('basket__item_content-data');
                // Basket Item Data -> Basket Item content
    
                // Basket Item data container -> Basket Item Data
                const Basket_Item_data_Container = document.createElement('div');
                Basket_Item_data_Container.classList.add    ('basket__item_content-data__container');
                // Basket Item data container -> Basket Item Data
    
                // Basket Data title -> Basket Item data container
                const BasketData_container_title = document.createElement('div');
                BasketData_container_title.classList.add    ('basket__item_content-data__container_title');
                // Basket Data title -> Basket Item data container
    
                // Basket Data title Text -> Basket Data title
                const BasketData_title_text = document.createElement('a');
                BasketData_title_text.classList.add('data__link_product');
                BasketData_title_text.setAttribute('data-id', basket_product_items[i].id);
                BasketData_title_text.href = '#'
                BasketData_title_text.textContent = basket_product_items[i].description;
                // Basket Data title Text -> Basket Data title
    
                // Basket Data price -> Basket Item data container
                const BasketData_container_price = document.createElement('div');
                BasketData_container_price.classList.add    ('basket__item_content-data__container_price');
                // Basket Data price -> Basket Item data container
    
                // Basket Data price Text -> Basket Data price
                const BasketData_price_text = document.createElement('p');
                BasketData_price_text.textContent = basket_product_items[i].price;
                // Basket Data price Text -> Basket Data price
    
                // Basket Data Price vallet -> Basket Data price
                const BasketData_price_vallet = document.createElement('span');
                BasketData_price_vallet.textContent = '₽';
                // Basket Data Price vallet -> Basket Data price
    
                // Basket Data quantity -> Basket Item data container
                const BasketData_container_quantity = document.createElement('div');
                BasketData_container_quantity.classList.add ('basket__item_content-data__container_quantity');
                // Basket Data quantity -> Basket Item data container
    
                // Basket Quantity Content -> Basket Data quantity
                const BasketQuantity_content = document.createElement('div');
                BasketQuantity_content.classList.add('quantity__content');
                // Basket Quantity Content -> Basket Data quantity
    
                // Basket Quantity Btn add -> Basket Quantity Content
                const BasketQuantity_btn_add = document.createElement('button');
                BasketQuantity_btn_add.classList.add('basket__btn_add');
                BasketQuantity_btn_add.setAttribute('basket_btn_id', basket_product_items[i].id);
                BasketQuantity_btn_add.innerHTML = btn_add_card;
                // Basket Quantity Btn add -> Basket Quantity Content
    
                // Basket Quantity Layer Input -> Basket Quantity Content
                const BasketQuantity_LayerInput = document.createElement('div');
                BasketQuantity_LayerInput.classList.add('basket-quantity');
                // Basket Quantity Layer Input -> Basket Quantity Content
    
                // Basket Quantity Input -> Basket Quantity Layer Input
                const BasketQuantity_input = document.createElement('input');
                BasketQuantity_input.classList.add('quantity');
                BasketQuantity_input.type = 'number';
                BasketQuantity_input.setAttribute('value', basket_product_items[i].amount);
                BasketQuantity_input.value = basket_product_items[i].amount;
                BasketQuantity_input.placeholder = '...';
                // Basket Quantity Input -> Basket Quantity Layer Input
    
                // Basket Quantity Btn remove -> Basket Quantity Content
                const BasketQuantity_btn_remove = document.createElement('button');
                BasketQuantity_btn_remove.classList.add('basket__btn_remove');
                BasketQuantity_btn_remove.setAttribute('basket_btn_id', basket_product_items[i].id);
                BasketQuantity_btn_remove.innerHTML = btn_remove_card;
                // Basket Quantity Btn remove -> Basket Quantity Content
    
                // Basket Item Code -> Basket Item content
                const Basket_Item_code = document.createElement('div');
                Basket_Item_code.classList.add('basket__item_content-code');
                // Basket Item Code -> Basket Item content
    
                // Basket Code Container -> Basket Item Code
                const BasketCode_container = document.createElement('div');
                BasketCode_container.classList.add  ('basket__item_content-code__container');
                // Basket Code Container -> Basket Item Code
    
                // Basket Product Code -> Basket Code Container
                const BasketCode_containerProduct_Code = document.createElement('div');
                BasketCode_containerProduct_Code.classList.add('basket__product_code');
                // Basket Product Code -> Basket Code Container
    
                // Basket Product Code text -> Basket Product Code
                const Basket_ProductCode_text = document.createElement('p');
                Basket_ProductCode_text.textContent = 'Код товара:';
                // Basket Product Code text -> Basket Product Code
    
                // Basket Product Code code -> Basket Product Code
                const Basket_ProductCode_code = document.createElement('div');
                Basket_ProductCode_code.classList.add('code');
                Basket_ProductCode_code.textContent = basket_product_items[i].key;
                // Basket Product Code code -> Basket Product Code
    
                // Basket Product Code Layer Button -> Basket Code Container
                const BasketCode_container_LayerButton = document.createElement('div');
                BasketCode_container_LayerButton.classList.add('basket__product_button');
                // Basket Product Code Layer Button -> Basket Code Container
    
                // Basket Code Button btn -> Basket Product Code Layer Button
                const BasketCode_Button_btn = document.createElement('button');
                BasketCode_Button_btn.classList.add('basket__code_btn-remove');
                BasketCode_Button_btn.setAttribute('basket_product_id', basket_product_items[i].id)
                BasketCode_Button_btn.textContent = 'Удалить товар';
                // Basket Code Button btn -> Basket Product Code Layer Button
    
                Basket_Item_preview.append(Basket_Preview_Image);
    
                BasketData_container_title.append(BasketData_title_text);
                BasketData_container_price.append(BasketData_price_text, BasketData_price_vallet);
    
                BasketQuantity_LayerInput.append(BasketQuantity_input);
                BasketQuantity_content.append(BasketQuantity_btn_add, BasketQuantity_LayerInput,BasketQuantity_btn_remove)
                BasketData_container_quantity.append(BasketQuantity_content);
                Basket_Item_data_Container.append(BasketData_container_title, BasketData_container_price, BasketData_container_quantity);
                Basket_Item_data.append(Basket_Item_data_Container);
    
                BasketCode_containerProduct_Code.append(Basket_ProductCode_text, Basket_ProductCode_code);
                BasketCode_container_LayerButton.append(BasketCode_Button_btn);
                BasketCode_container.append(BasketCode_containerProduct_Code, BasketCode_container_LayerButton);
                Basket_Item_code.append(BasketCode_container);
    
                Basket_Item_content.append(Basket_Item_preview, Basket_Item_data, Basket_Item_code);
                Basket_Item.append(Basket_Item_content);
    
                selector.appendChild(Basket_Item);
            });

            products_price.forEach(price => {
                summ += basket_product_items[i].price;
                price.textContent = summ;
            });
        }

        products_count.forEach(count => {
           count.textContent = basket_product_items.length;
        });

    }else{
        return;
    }

    Get_Provider();
}

function Get_Provider(){
    let basket_provider = document.querySelectorAll('.summary__provider_content-provider p');
    if(localStorage.getItem('provider')!== null){
        basket_provider.forEach(element => {
            element.textContent = localStorage.getItem('provider');
        });
    }else{
        basket_provider.forEach(element => {
            element.textContent = 'Аксон';
        });
    }
}

export function Basket_Item_Maipulation(btnAdd, btnRemove, Input, btnDelete){

    let productSelf_price = document.querySelectorAll('.basket__item_content-data__container_price p');
    let ModifyPrice = 0;

    let productAmount = document.querySelector('.summary__amount_content-amount p');

    let productAll_Price = document.querySelector('.summary__price_content-price p');

    let updateBasket_products = {};
    let updateSorting_products = [];

    for(let i = 0; i < btnAdd.length; i++){

        const currentPrice = parseInt(productSelf_price[i].textContent);

        btnAdd[i].onclick = ()=>{

            if(localStorage.getItem('basket_products')){
                basket_products_arrAmount = JSON.parse(localStorage.getItem('basket_products'))
            }else{
                var basket_products_arrAmount = [];
            }

            basket_products_arrAmount.findIndex(product=>{
                if(product.id === parseInt(btnAdd[i].getAttribute('basket_btn_id'))){
                    
                    product.amount = parseInt(Input[i].value) + 1;

                    updateBasket_products.id = product.id;
                    updateBasket_products.description = product.description;
                    updateBasket_products.price = product.price;
                    updateBasket_products.amount = product.amount;
                    updateBasket_products.key = product.key;

                    basket_products_arrAmount.push(updateBasket_products);
                    updateSorting_products = basket_products_arrAmount.reduce((r, i)=> 
                    !r.some(j=> Object.keys(i).length === Object.keys(j).length && !Object.keys(i).some(k => i[k] !== j[k])) ? [...r, i] : r, []);

                    localStorage.setItem('basket_products', JSON.stringify(updateSorting_products));

                }
            })

            var currentAmount = parseInt(productAmount.textContent);

            let currentProduct_AllPrice = parseInt(productAll_Price.textContent);

            Input[i].setAttribute('value', (parseInt(Input[i].getAttribute('value')) + 1).toString());
            Input[i].value = Input[i].getAttribute('value');

            // Price
            ModifyPrice = (currentPrice * parseInt(Input[i].getAttribute('value')))
            productSelf_price[i].textContent  = toDivide(ModifyPrice);
            // Price

            productAmount.textContent = currentAmount += 1;
            productAll_Price.textContent = currentProduct_AllPrice + currentPrice;
        }
    }

    for(let j = 0; j < btnRemove.length; j++){

        const currentPrice = parseInt(productSelf_price[j].textContent);

        btnRemove[j].onclick = ()=>{

            if(localStorage.getItem('basket_products')){
                basket_products_arrAmount = JSON.parse(localStorage.getItem('basket_products'))
            }else{
                var basket_products_arrAmount = [];
            }

            basket_products_arrAmount.findIndex(product=>{
                if(product.id === parseInt(btnRemove[j].getAttribute('basket_btn_id'))){
                    
                    product.amount = parseInt(Input[j].value) - 1;

                    updateBasket_products.id = product.id;
                    updateBasket_products.description = product.description;
                    updateBasket_products.price = product.price;
                    updateBasket_products.amount = product.amount;
                    updateBasket_products.key = product.key;

                    basket_products_arrAmount.push(updateBasket_products);
                    updateSorting_products = basket_products_arrAmount.reduce((r, i)=> 
                    !r.some(j=> Object.keys(i).length === Object.keys(j).length && !Object.keys(i).some(k => i[k] !== j[k])) ? [...r, i] : r, []);

                    localStorage.setItem('basket_products', JSON.stringify(updateSorting_products));

                }
            })

            var currentAmount = parseInt(productAmount.textContent);

            let currentProduct_AllPrice = parseInt(productAll_Price.textContent);

            Input[j].setAttribute('value', (parseInt(Input[j].getAttribute('value')) - 1).toString());
            Input[j].value = Input[j].getAttribute('value');

            // Price
            ModifyPrice = (currentPrice * parseInt(Input[j].getAttribute('value')))
            productSelf_price[j].textContent  = toDivide(ModifyPrice);
            // Price

            productAmount.textContent = currentAmount -= 1;
            productAll_Price.textContent = currentProduct_AllPrice - currentPrice;

            if(parseInt(Input[j].getAttribute('value')) < 2){
                Input[j].setAttribute('value', 1);
                Input[j].value = Input[j].getAttribute('value');

                productSelf_price[j].textContent = currentPrice;
            }
        }
    }

    for(let n = 0; n < Input.length; n++){

        const currentPrice = parseInt(productSelf_price[n].textContent);

        Input[n].onchange = ()=>{

            var currentAmount = parseInt(productAmount.textContent);

            Input[n].setAttribute('value', Input[n].value);

            // Price
            ModifyPrice = (currentPrice * parseInt(Input[n].getAttribute('value')))
            productSelf_price[n].textContent  = toDivide(ModifyPrice);
            // Price

            productAmount.textContent = currentAmount += parseInt(Input[n].value - 1)

            if(parseInt(Input[n].value) < 2){
                Input[n].setAttribute('value', 1);
                Input[n].value = Input[n].getAttribute('value');
            }
        }
    }

    for(let k = 0; k < btnDelete.length; k++){
        btnDelete[k].onclick = ()=>{

            let products_item = JSON.parse(localStorage.getItem('basket_products'));

            products_item.findIndex((product, index)=>{
                if(product.id === parseInt(btnDelete[k].getAttribute('basket_product_id'))){
                    products_item.splice(index, 1);
                    localStorage.setItem('basket_products', JSON.stringify(products_item));
                    window.location.reload()
                }
            })
        }
    }
}

export function Place_an_Order(order_btn){
    order_btn.forEach(btn => {
        
        btn.onclick = ()=>{

            if(localStorage.getItem('user') !== null){

                if(localStorage.getItem('basket_products') === null){
                    Swal.fire({
                        icon: 'error',
                        title: 'Ошибка.',
                        text: 'В вашей корзине не найдено ни одного товара, пожалуйста добавьте, интересующие вас товары.'
                    })
                }else{
                    if(JSON.parse(localStorage.getItem('basket_products')).length !== 0){
                    
                        let basket_products_arr = JSON.parse(localStorage.getItem('basket_products'));
                        
                        if(localStorage.getItem('order_products')){
                            order_products_arr = JSON.parse(localStorage.getItem('order_products'));
                        }else{
                            var order_products_arr = [];
                        }
    
                        for(let i = 0; i < basket_products_arr.length; i++){
                            order_products_arr.push(basket_products_arr[i]);
                        }
        
                        localStorage.setItem('order_products', JSON.stringify(order_products_arr));
        
                        localStorage.removeItem('basket_products');
        
                        Swal.fire({
                            title: 'Товар добавлен на страницу заказов!',
                            text: 'Желаете перейти к заказу?',
                            icon: 'warning',
                            showCancelButton: true,
                            confirmButtonColor: '#008cf0',
                            confirmButtonText: 'Да',
                            cancelButtonText: 'Нет',
                            cancelButtonColor: '#d33'
                        }).then(result=>{
                            if(result.isConfirmed){
                                window.open(`${deploy_path}/pages/order.html`, '_self');
                                // window.open('../../../pages/order.html', '_self');
                            }else{
                                window.location.reload();
                            }
                        })
        
                    }else{
                        Swal.fire({
                            icon: 'error',
                            title: 'Ошибка.',
                            text: 'В вашей корзине не найдено ни одного товара, пожалуйста добавьте, интересующие вас товары.'
                        })
                    }
                }

            }else{
                Swal.fire({
                    icon: 'error',
                    title: 'Аккаунт не найден!',
                    text: 'Пожалуйста, зарегистрируйтесь, чтобы совершать покупки.'
                })
            }

            

        }

    });
}

export function Redirect_Mobile_Basket(basket_icon){
    if(window.screen.width < 768){
        basket_icon.forEach(icon=>{
            icon.onclick = ()=>{
                // window.open('../../../pages/basket.html', '_self');
                // for deploy
                window.open(`${deploy_path}/pages/basket.html`, '_self');
            }
        })
    }
}