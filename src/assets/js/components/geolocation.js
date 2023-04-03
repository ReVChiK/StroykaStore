export function Open_Modal_Window(){

    let modal_window = document.querySelectorAll('.geolocation');

    let modal_btn_open = document.querySelectorAll('.cities-name');

    for(let i = 0; i < modal_btn_open.length; i++){
        modal_btn_open[i].addEventListener('click', ()=>{
            modal_window[i].style.display = 'block';
        })
    }

}

export function Close_Modal_Window(){

    let modal_window = document.querySelectorAll('.geolocation');

    let modal_btn_close = document.querySelectorAll('.geolocation-btn__close');

    for(let i = 0; i < modal_btn_close.length; i++){
        modal_btn_close[i].addEventListener('click', ()=>{
            modal_window[i].style.display = 'none';
        })
    }

}

export function Hover_Geolocation_Elements(){
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