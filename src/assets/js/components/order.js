
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

export async function Order_Component(parsenSelector){

    if(localStorage.getItem('order_products') !== null){
        let order_products_arr = JSON.parse(localStorage.getItem('order_products'));

        for(let i = 0; i < order_products_arr.length; i++){
            parsenSelector.forEach(selector => {
                
                // Order Item -> selector
                const Order_Item = document.createElement('div');
                Order_Item.classList.add('order-list__container_content-item');
                // Order Item -> selector
    
                // Order Item content -> Order Item
                const Order_Item_content = document.createElement('div');
                Order_Item_content.classList.add('item__content');
                // Order Item content -> Order Item
    
                //----------//
    
                // Order Item content Image Layer -> Order Item content
                const OrderContent_ImageLayer = document.createElement('div');
                OrderContent_ImageLayer.classList.add('item__content_img');
                // Order Item content Image Layer -> Order Item content
    
                // Order Image -> Order Item content Image Layer
                const Order_image = document.createElement('img');
                Order_image.src = imageFull_Size[order_products_arr[i].id - 100].image;
                Order_image.alt = 'Изображение заказа';
                // Order Image -> Order Item content Image Layer
    
                //----------//
    
                // Order Data -> Order Item content
                const OrderContent_Data = document.createElement('div');
                OrderContent_Data.classList.add('item__content_data');
                // Order Data -> Order Item content
    
                // Order Data Content -> Order Data
                const OrderData_content = document.createElement('div');
                OrderData_content.classList.add('data__content');
                // Order Data Content -> Order Data
    
                //----------//
    
                // Order Data Content Name -> Order Data Content
                const OrderData_content_name = document.createElement('div');
                OrderData_content_name.classList.add('data__content_name');
                // Order Data Content Name -> Order Data Content
    
                // Order Data Name text -> Order Data Content Name
                const OrderName_text = document.createElement('p');
                OrderName_text.textContent = order_products_arr[i].description;
                // Order Data Name text -> Order Data Content Name
    
                //----------//
    
                // Order Data Content Price -> Order Data Content
                const OrderData_content_price = document.createElement('div');
                OrderData_content_price.classList.add('data__content_price');
                // Order Data Content Price -> Order Data Content
    
                // Order Data Price text -> Order Data Content Price
                const OrderPrice_text = document.createElement('h4');
                OrderPrice_text.textContent = toDivide(order_products_arr[i].price * order_products_arr[i].amount);
                // Order Data Price text -> Order Data Content Price
    
                // Order Price Vallet -> Order Data Content Price
                const OrderPrice_vallet = document.createElement('span');
                OrderPrice_vallet.textContent = '₽';
                // Order Price Vallet -> Order Data Content Price
    
                //----------//
    
                // Order Data Content Amount -> Order Data Content
                const OrderData_content_amount = document.createElement('div');
                OrderData_content_amount.classList.add('data__content_amount');
                // Order Data Content Amount -> Order Data Content
    
                // Order Data Amount text -> Order Data Content Amount
                const OrderAmount_text = document.createElement('p');
                OrderAmount_text.textContent = order_products_arr[i].amount;
                // Order Data Amount text -> Order Data Content Amount
    
                // Order Price textAmount -> Order Data Content Amount
                const OrderAmount_textAmount = document.createElement('span');
                OrderAmount_textAmount.textContent = 'шт.';
                // Order Price textAmount -> Order Data Content Amount
    
                //----------//
    
                // Order Content Info -> Order Item content
                const OrderContent_Info = document.createElement('div');
                OrderContent_Info.classList.add('item__content_info');
                // Order Content Info -> Order Item content
    
                // Order Info Content -> Order Content Info
                const OrderInfo_content = document.createElement('div');
                OrderInfo_content.classList.add('info__content');
                // Order Info Content -> Order Content Info
    
                //----------//
    
                // Order Info Content DateCode -> Order Info Content
                const OrderInfo_content_DateCode = document.createElement('div');
                OrderInfo_content_DateCode.classList.add('info__content_item', 'info__content_dateCode')
                // Order Info Content DateCode -> Order Info Content
    
                //----------//
    
                // Order Info DateCode Info Upper -> Order Info Content DateCode
                const OrderInfo_content_DateCode_Infoupper = document.createElement('div');
                OrderInfo_content_DateCode_Infoupper.classList.add('info__content_item-data', 'info__upper');
                // Order Info DateCode Info Upper -> Order Info Content DateCode
    
                // Order Info Upper text -> Order Info DateCode Info Upper
                const OrderInfo_upper_text = document.createElement('p');
                OrderInfo_upper_text.textContent = `Заказ от ${new Date().getUTCDate()} ${Validate_Date_Month(new Date().getMonth() + 1)}`;
                // Order Info Upper text -> Order Info DateCode Info Upper
    
                // Order Info DateCode Info Bottom -> Order Info Content DateCode
                const OrderInfo_content_DateCode_Infobottom = document.createElement('div');
                OrderInfo_content_DateCode_Infobottom.classList.add('info__content_item-key', 'info__bottom');
                // Order Info DateCode Info Bottom -> Order Info Content DateCode
    
                // Order Info Bottom text -> Order Info DateCode Info Bottom
                const OrderInfo_bottom_text = document.createElement('p');
                OrderInfo_bottom_text.textContent = order_products_arr[i].key;
                // Order Info Bottom text -> Order Info DateCode Info Bottom
    
                //----------//
    
                // Order Info Status -> Order Info Content DateCode
                const OrderInfo_content_StatusLayer = document.createElement('div');
                OrderInfo_content_StatusLayer.classList.add('info__content_item', 'info__content_status');
                // Order Info Status -> Order Info Content DateCode
    
                // Order Info Status title -> Order Info Status
                const OrderInfo_Status_title = document.createElement('div');
                OrderInfo_Status_title.classList.add('info__content_item-title', 'info__upper');
                // Order Info Status title -> Order Info Status
    
                // Order Status title Text -> Order Info Status title
                const OrderStatus_title_text = document.createElement('p');
                OrderStatus_title_text.textContent = 'Статус';
                // Order Status title Text -> Order Info Status title
    
                // Order Info Status status -> Order Info Status
                const OrderInfo_Status_status = document.createElement('div');
                OrderInfo_Status_status.classList.add('info__content_item-status', 'info__bottom');
                // Order Info Status status -> Order Info Status
    
                // Order Status status Text -> Order Info Status status
                const OrderStatus_statusText = document.createElement('p');
                OrderStatus_statusText.textContent = 'Оплачен';
                // Order Status status Text -> Order Info Status status
                
                OrderContent_ImageLayer.append(Order_image);
    
                OrderData_content_name.append(OrderName_text);
                OrderData_content_price.append(OrderPrice_text, OrderPrice_vallet);
                OrderData_content_amount.append(OrderAmount_text, OrderAmount_textAmount);
    
                OrderData_content.append(OrderData_content_name, OrderData_content_price, OrderData_content_amount);
                OrderContent_Data.append(OrderData_content);
    
                OrderInfo_content_DateCode_Infoupper.append(OrderInfo_upper_text);
                OrderInfo_content_DateCode_Infobottom.append(OrderInfo_bottom_text);
    
                OrderInfo_content_DateCode.append(OrderInfo_content_DateCode_Infoupper, OrderInfo_content_DateCode_Infobottom);
    
                OrderInfo_Status_title.append(OrderStatus_title_text);
                OrderInfo_Status_status.append(OrderStatus_statusText);
    
                OrderInfo_content_StatusLayer.append(OrderInfo_Status_title, OrderInfo_Status_status);
    
                OrderInfo_content.append(OrderInfo_content_DateCode, OrderInfo_content_StatusLayer);
                OrderContent_Info.append(OrderInfo_content);
    
                Order_Item_content.append(OrderContent_ImageLayer, OrderContent_Data, OrderContent_Info);
                Order_Item.append(Order_Item_content);
                selector.appendChild(Order_Item);
            });
        }
    }else{
        return;
    }

    
}

function Validate_Date_Month(value){
    switch(value){
        case 1:
            return 'января';
            break;
        case 2:
            return 'февраля';
            break;
        case 3:
            return 'марта';
            break;
        case 4:
            return 'апреля';
            break;
        case 5:
            return 'мая';
            break;
        case 6:
            return 'июня';
            break;
        case 7:
            return 'июля';
            break;
        case 8:
            return 'августа';
            break;
        case 9:
            return 'сентября';
            break;
        case 10:
            return 'октября';
            break;
        case 11:
            return 'ноября';
            break;
        case 12:
            return 'декабря';
            break;
    }
}