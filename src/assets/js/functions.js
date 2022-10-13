import browser_icon from '../icons/free-icon-shop-4646941.png';
import img_geolocation from '../img/geolocation.png';
import Logo from '../img/Logo.svg';
import search_icon from '../img/Search.png';
import profile from '../img/Profile.png';
import order from '../img/Orders.png';
import basket from '../img/Basket.png';

import slide_1 from '../img/slide_1.png';
import slide_2 from '../img/slide_2.png';

// Favicon
function Add_Favicon(){
    var link = document.querySelector("link[rel~='shortcut']");

    link.href = browser_icon;
}
// Favicon

// Slider Images
function set_background_slider_img(){
    var slider_container = document.querySelector('.slider-container');

    let imgs_array = [slide_1, slide_2];
    let count = 1;

    let slider_btn_left = document.querySelector('.slider-btn_left');

    let slider_btn_right = document.querySelector('.slider-btn_right');

    slider_btn_left.addEventListener('click', function(){
        count =- 1;
        if(count < 1){
            slider_container.style.backgroundImage = `url(${imgs_array[slide_2]})`
        }
        slider_container.style.backgroundImage = `url(${slide_1})`;
    })

    slider_container.style.backgroundImage = `url(${slide_1})`;
}
// Slider Images

// Custom-Panel-Images
function Set_Img_Panel(){
    var img_profile = document.querySelector('.menu-profile');
    img_profile.src = profile;

    var img_orders = document.querySelector('.menu-orders');
    img_orders.src = order;

    var img_basket = document.querySelector('.menu-basket');
    img_basket.src = basket;
}
// Custom-Panel-Images

// Logotype
function Set_Logo(){
    var logo = document.querySelector('.menu-logo');
    logo.innerHTML = Logo;
}
// Logotype

// Search Input Icon
function Set_search_Icon(){
    var input_search_icon = document.querySelector('.input-icon');

    input_search_icon.src = search_icon;
}
// Search Input Icon

// Geolocation Cities
function Add_Img_Geolocation(){
    var geo_img = document.querySelector('.img-geolocation');
    geo_img.src = img_geolocation;
}
// Geolocation Cities

function Webpack_Main(){
    Add_Favicon();
    Add_Img_Geolocation();
    Set_Logo();
    Set_search_Icon();
    Set_Img_Panel();
    set_background_slider_img();
}

export default Webpack_Main;
