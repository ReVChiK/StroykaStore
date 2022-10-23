
function Hover_Elements(){
    let geolocation_items = document.querySelectorAll('.list-item__content_city');

    let geolocation_item_icons = document.querySelectorAll('.list-item__content_icon');

    for(let i = 0; i < geolocation_items.length; i++){
        geolocation_items[i].onmouseover = function(){
            geolocation_item_icons[i].style.display = 'block';
        };
        geolocation_items[i].onmouseout = function(){
            geolocation_item_icons[i].style.display = 'none';
        }
    }
}

function Open_Modal_Window(){

    let modal_window = document.querySelector('.geolocation');

    let modal_btn_open = document.querySelector('.cities-name');

    modal_btn_open.addEventListener('click', ()=>{
        modal_window.style.display = 'block';
    })
}

function Close_Modal_Window(){

    let modal_window = document.querySelector('.geolocation');

    let modal_btn_close = document.querySelector('.geolocation-btn__close');

    modal_btn_close.addEventListener('click', ()=>{
        modal_window.style.display = 'none';
    })
}

function Socks_Card_Quantity(){
    let card_buy_btns = document.querySelectorAll('.card-buy');

    let panels_card_quantity = document.querySelectorAll('.data-button__score');

    for(let i = 0; i < card_buy_btns.length; i++){
        card_buy_btns[i].addEventListener('click', ()=>{
            card_buy_btns[i].parentElement.style.display = 'none';
            panels_card_quantity[i].style.display = 'block';
        })
    }

    let quantity_btns_add = document.querySelectorAll('.btn-add');
    let quantity_btns_remove = document.querySelectorAll('.btn-remove');

    let inputs_quantity = document.querySelectorAll('.quantity');

    for(let j = 0; j < quantity_btns_add.length; j++){
        quantity_btns_add[j].addEventListener('click', ()=>{
            inputs_quantity[j].setAttribute('value', (parseInt(inputs_quantity[j].getAttribute('value')) + 1).toString());
        })
    }

    for(let l = 0; l < quantity_btns_remove.length; l++){
        quantity_btns_remove[l].addEventListener('click', ()=>{
            inputs_quantity[l].setAttribute('value', (parseInt(inputs_quantity[l].getAttribute('value')) - 1).toString());

            if(Number(inputs_quantity[l].value < 1)){
                inputs_quantity[l].setAttribute('value', 1);
                card_buy_btns[l].parentElement.style.display = 'block';
                panels_card_quantity[l].style.display = 'none';
            }
        })
    }
}

function Main(){
    Hover_Elements();
    Open_Modal_Window();
    Close_Modal_Window();
    Socks_Card_Quantity();
}

export default Main;

