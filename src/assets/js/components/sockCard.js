
import foarm from '../../img/cards_socks/foam.png';
import grid from '../../img/cards_socks/grid.png';
import metal_tile from '../../img/cards_socks/metal_tile.png';
import paint from '../../img/cards_socks/paint.png';
import { toDivide } from '../abstract_components/number';

const stocks_data = [
    'Рубероид РКП-350 ТУ, размер материала 1 х 10 м (10м2, 1 рулон)',
    'Пена монтажная ТЕХНОНИКОЛЬ MASTER 65 профессиональная всесезонная',
    'Сетка "Рабица" яч. 50х50/1,5х10 м-ОЦ',
    'Металлочерепица, цвет коричневый, 1.18 х 1.15 м'
]

const stock_icons_array = [paint, foarm, grid, metal_tile];

const stocks_id = [100, 101, 102, 103]

const stocks_newPrice = [449, 495, 1499, 769]
const stocks_oldPrice = [499, 660, 1890, 999]

export async function Stocks_Component(parentSelector, imgs){
    for(let i = 0; i < stock_icons_array.length; i++){
        parentSelector.forEach(selector => {
            
            // Stock Item
            const StocksItem = document.createElement('div');
            StocksItem.classList.add('card-item');
            // Stock Item

            // Stocks Content
            const StocksItem__content = document.createElement('div');
            StocksItem__content.classList.add('card-item__content');
            // Stocks Content

            // Stocks Discount -> Stocks Content
            const StocksItem__content_discount = document.createElement('div');
            StocksItem__content_discount.classList.add('card-item__content_discount');
            // Stocks Discount -> Stocks Content

            // Stocks Discount Price -> Stocks Discount
            const Stocks_Discount_Price = document.createElement('div');
            Stocks_Discount_Price.classList.add('price-discount');
            Stocks_Discount_Price.textContent = '-25%';
            // Stocks Discount Price -> Stocks Discount

            // Stocks Image Layer -> Stocks Content
            const StocksItem__content_imgLayer = document.createElement('div');
            StocksItem__content_imgLayer.classList.add('card-item__content_img');
            // Stocks Image Layer -> Stocks Content

            // Stocks Image Layer img -> Stocks Image Layer
            const Stocks_imgLayer_Image = document.createElement('img');
            Stocks_imgLayer_Image.classList.add('card-img');
            Stocks_imgLayer_Image.src = stock_icons_array[i];
            Stocks_imgLayer_Image.alt = 'Товар';
            // Stocks Image Layer img -> Stocks Image Layer

            // Stocks Data ->Stocks Content
            const StocksItem__content_data = document.createElement('div');
            StocksItem__content_data.classList.add('card-item__content_data');
            // Stocks Data ->Stocks Content

            // Stocks Data Container -> Stocks Data
            const Stocks_Data_container = document.createElement('div');
            Stocks_Data_container.classList.add('card-item__content_data-container');
            // Stocks Data Container -> Stocks Data

            // Stocks Data Description -> Stocks Data Container
            const Data_description = document.createElement('div');
            Data_description.classList.add('data-description');
            // Stocks Data Description -> Stocks Data Container

            // Stocks Data Description Link -> Stocks Data Description
            const Data_description_link = document.createElement('a');
            Data_description_link.classList.add('data__link_product');
            Data_description_link.setAttribute('data-id', stocks_id[i]);
            Data_description_link.href = '#';
            Data_description_link.textContent = stocks_data[i];
            // Stocks Data Description Link -> Stocks Data Description

            // Stocks Data Price -> Stocks Data Container
            const Data_Price = document.createElement('div');
            Data_Price.classList.add('data-price');
            // Stocks Data Price -> Stocks Data Container

            // Stocks Data Price Content -> Stocks Data Price
            const Data_Price_content = document.createElement('div');
            Data_Price_content.classList.add('data-price__content');
            // Stocks Data Price Content -> Stocks Data Price

            /*Only Price Data*/

            // Stocks new Price -> Stocks Data Price Content
            const Data_newPrice = document.createElement('div');
            Data_newPrice.classList.add('data-price__content_new-price');
            // Stocks new Price -> Stocks Data Price Content

            // Stocks new Price text -> Stocks new Price
            const Data_newPrice_text = document.createElement('h4');
            Data_newPrice_text.textContent = toDivide(stocks_newPrice[i]);
            // Stocks new Price text -> Stocks new Price

            // Stocks new Price Vallet -> Stocks new Price text
            const Data_newPrice_vallet = document.createElement('span');
            Data_newPrice_vallet.textContent = '₽';
            // Stocks new Price Vallet -> Stocks new Price text

            /*------------*/

            // Stocks old Price -> Stocks Data Price Content
            const Data_oldPrice = document.createElement('div');
            Data_oldPrice.classList.add('data-price__content_old-price');
            // Stocks old Price -> Stocks Data Price Content

            // Stocks old Price text -> Stocks old Price
            const Data_oldPrice_text = document.createElement('h4');
            Data_oldPrice_text.textContent = stocks_oldPrice[i];
            // Stocks old Price text -> Stocks old Price

            // Stocks old Price Vallet -> Stocks old Price text
            const Data_oldPrice_vallet = document.createElement('span');
            Data_oldPrice_vallet.textContent = '₽';
            // Stocks old Price Vallet -> Stocks old Price text

            /*Only Price Data*/

            // Stocks Data Button -> Stocks Data Container
            const Data_buttonLayer = document.createElement('div');
            Data_buttonLayer.classList.add('data-button');
            // Stocks Data Button -> Stocks Data Container

            // Stocks Data Button btn -> Stocks Data Button
            const buttonLayer_btn = document.createElement('button');
            buttonLayer_btn.classList.add('card-buy', 'basket-btn');
            buttonLayer_btn.setAttribute('basket-id', stocks_id[i]);
            buttonLayer_btn.textContent = 'В корзину';
            // Stocks Data Button btn -> Stocks Data Button

            StocksItem__content_discount.append(Stocks_Discount_Price);
            StocksItem__content_imgLayer.append(Stocks_imgLayer_Image);


            Data_description.append(Data_description_link);

            Data_oldPrice_text.append(Data_oldPrice_vallet);
            Data_oldPrice.append(Data_oldPrice_text);

            Data_newPrice_text.append(Data_newPrice_vallet);
            Data_newPrice.append(Data_newPrice_text);

            Data_Price_content.append(Data_newPrice, Data_oldPrice);
            Data_Price.append(Data_Price_content);

            Data_buttonLayer.append(buttonLayer_btn);

            Stocks_Data_container.append(Data_description, Data_Price, Data_buttonLayer);
            StocksItem__content_data.append(Stocks_Data_container);

            StocksItem__content.append(StocksItem__content_discount, StocksItem__content_imgLayer, StocksItem__content_data);
            StocksItem.append(StocksItem__content);

            selector.appendChild(StocksItem);
        });
    }
}

export function Socks_Card_Quantity(card_btns_buy, panel_card_quantity, btn_add, btn_remove, input_quantity){

    for(let i = 0; i < card_btns_buy.length; i++){
        input_quantity[i].value = parseInt(input_quantity[i].getAttribute('value')).toString();

        card_btns_buy[i].addEventListener('click', ()=>{
            card_btns_buy[i].parentElement.style.display = 'none';
            panel_card_quantity[i].style.display = 'block';
        })
    }

    for(let j = 0; j < btn_add.length; j++){
        input_quantity[j].value = parseInt(input_quantity[j].getAttribute('value')).toString();

        btn_add[j].addEventListener('click', ()=>{
            input_quantity[j].setAttribute('value', (parseInt(input_quantity[j].getAttribute('value')) + 1).toString());
            input_quantity[j].value = input_quantity[j].getAttribute('value');
        })
    }

    for(let l = 0; l < btn_remove.length; l++){
        input_quantity[l].value = parseInt(input_quantity[l].getAttribute('value')).toString();

        btn_remove[l].addEventListener('click', ()=>{
            input_quantity[l].setAttribute('value', (parseInt(input_quantity[l].getAttribute('value')) - 1).toString());
            input_quantity[l].value = input_quantity[l].getAttribute('value');

            if(Number(input_quantity[l].value < 1)){
                input_quantity[l].setAttribute('value', 0);
                card_btns_buy[l].parentElement.style.display = 'block';
                panel_card_quantity[l].style.display = 'none';
            }
        })
    }

    for(let f = 0; f < input_quantity.length; f++){
        input_quantity[f].value = parseInt(input_quantity[f].getAttribute('value')).toString();

        input_quantity[f].addEventListener('input', ()=>{
            input_quantity[f].setAttribute('value', (parseInt(input_quantity[f].value)));

            if(Number(input_quantity[f].value < 1)){
                input_quantity[f].setAttribute('value', 0);
                card_btns_buy[f].parentElement.style.display = 'block';
                panel_card_quantity[f].style.display = 'none';
            }
        })
    }
}