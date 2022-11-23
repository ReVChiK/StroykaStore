
function Home_Page(){
    let logotype = document.querySelectorAll('.menu-logo');

    for(let i = 0; i < logotype.length; i++){
        logotype[i].addEventListener('click', ()=>{
            window.open('../../../index.html', '_self');
        })
    }
}

function Hover_Elements(){
    let geolocation_items = document.querySelectorAll('.list-item__content_city');

    let geolocation_item_icons = document.querySelectorAll('.list-item__content_icon');

    for(let i = 0; i < geolocation_items.length; i++){
        geolocation_items[i].onmouseover = ()=>{
            geolocation_item_icons[i].style.display = 'block';
        };
        geolocation_items[i].onmouseout = ()=>{
            geolocation_item_icons[i].style.display = 'none';
        }
    }
}

function Hover_Elements_Footer(){
    let footer_nav_links = document.querySelectorAll('.footer-nav__content_item');
    let footer_icons = document.querySelectorAll('.footer-nav__content_icon');

    for(let i = 0; i < footer_nav_links.length; i++){
        footer_nav_links[i].onmouseover = ()=>{
            footer_icons[i].style.display = 'block';
        };
        footer_nav_links[i].onmouseout = ()=>{
            footer_icons[i].style.display = 'none';
        }
    }
}

function Open_Modal_Window(){

    let modal_window = document.querySelectorAll('.geolocation');

    let modal_btn_open = document.querySelectorAll('.cities-name');

    for(let i = 0; i < modal_btn_open.length; i++){
        modal_btn_open[i].addEventListener('click', ()=>{
            modal_window[i].style.display = 'block';
        })
    }

}

function Close_Modal_Window(){

    let modal_window = document.querySelectorAll('.geolocation');

    let modal_btn_close = document.querySelectorAll('.geolocation-btn__close');

    for(let i = 0; i < modal_btn_close.length; i++){
        modal_btn_close[i].addEventListener('click', ()=>{
            modal_window[i].style.display = 'none';
        })
    }

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

function Delivery_Info(){

    let count = 1;

    let delivery_point_icons = document.querySelectorAll('.point__icon');

    let delivery_point_desc = document.querySelectorAll('.point__title_description');

    for(let i = 0; i < delivery_point_icons.length; i++){
        delivery_point_icons[i].addEventListener('click', ()=>{
            if(count % 2 != 0){
                delivery_point_desc[i].style.display = 'block';
                delivery_point_icons[i].style.transform = 'rotate(180deg)';
                count += 1;
            }else{
                delivery_point_desc[i].style.display = 'none';
                delivery_point_icons[i].style.transform = 'rotate(0deg)';
                count -= 1;
            }
            
        })
    }
}

function Main(){
    Home_Page();

    Hover_Elements();

    Hover_Elements_Footer();

    Open_Modal_Window();

    Close_Modal_Window();

    Socks_Card_Quantity();

    Delivery_Info();
}

export default Main;

