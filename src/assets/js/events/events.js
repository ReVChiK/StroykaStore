
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

function Main(){
    Hover_Elements();
    Open_Modal_Window();
    Close_Modal_Window();
}

export default Main;

