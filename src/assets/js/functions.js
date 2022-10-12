import browser_icon from '../icons/free-icon-shop-4646941.png';
import img_geolocation from '../img/geolocation.png';
import Logo from '../img/Logo.svg';
import search_icon from '../img/Search.png';
import profile from '../img/Profile.png';
import order from '../img/Orders.png';
import basket from '../img/Basket.png';

function Add_Favicon(){
    var link = document.querySelector("link[rel~='shortcut']");

    link.href = browser_icon;
}

function Set_Img_Panel(){
    var img_profile = document.querySelector('.menu-profile');
    img_profile.src = profile;

    var img_orders = document.querySelector('.menu-orders');
    img_orders.src = order;

    var img_basket = document.querySelector('.menu-basket');
    img_basket.src = basket;
}

function Set_Logo(){
    var logo = document.querySelector('.menu-logo');
    logo.innerHTML = Logo;
}

function Set_search_Icon(){
    var input_search_icon = document.querySelector('.input-icon');

    input_search_icon.src = search_icon;
}

function Add_Img_Geolocation(){
    var geo_img = document.querySelector('.img-geolocation');
    geo_img.src = img_geolocation;
}

function Webpack_Main(){
    Add_Favicon();
    Add_Img_Geolocation();
    Set_Logo();
    Set_search_Icon();
    Set_Img_Panel();
}

export default Webpack_Main;
