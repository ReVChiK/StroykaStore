import browser_icon from '../icons/free-icon-shop-4646941.png';
import img_geolocation from '../img/geolocation.png';
import Logo from '../img/Logo.svg';
import search_icon from '../img/Search.png';
import profile from '../img/Profile.png';
import order from '../img/Orders.png';
import basket from '../img/Basket.png';

import slide_1 from '../img/slide_1.png';
import slide_2 from '../img/slide_2.png';

import foarm from '../img/cards_socks/foam.png';
import grid from '../img/cards_socks/grid.png';
import metal_tile from '../img/cards_socks/metal_tile.png';
import paint from '../img/cards_socks/paint.png';

import shower from '../img/categories_img/shower.png';
import lumber from '../img/categories_img/lumber.png';
import linoleum from '../img/categories_img/linoleum.png';
import wallpapers from '../img/categories_img/wallpaper.png';
import tools from '../img/categories_img/tools.png';
import gfc from '../img/categories_img/gfc.png';
import windows from '../img/categories_img/windows.png';
import doors from '../img/categories_img/doors.png';
import plumbing from '../img/categories_img/plumbing.png';
import paints from '../img/categories_img/paints.png';
import eg from '../img/categories_img/eg.png';
import interior from '../img/categories_img/interior.png';

// Tab-Images
function Tab_Images_Set(){
    var shower_img = document.querySelector('.img-shower');
    shower_img.src = shower;

    var lumber_img = document.querySelector('.img-lumber');
    lumber_img.src = lumber;

    var linoleum_img = document.querySelector('.img-linoleum');
    linoleum_img.src = linoleum;

    var wallpaper_img = document.querySelector('.img-wallpaper');
    wallpaper_img.src = wallpapers;

    var tools_img = document.querySelector('.img-tools');
    tools_img.src = tools;

    var gfc_img = document.querySelector('.img-gfc');
    gfc_img.src = gfc;

    var windows_img = document.querySelector('.img-windows');
    windows_img.src = windows;

    var doors_img = document.querySelector('.img-doors');
    doors_img.src = doors;

    var plumbing_img = document.querySelector('.img-plumbing');
    plumbing_img.src = plumbing;

    var paints_img = document.querySelector('.img-paints');
    paints_img.src = paints;

    var eg_img = document.querySelector('.img-eg');
    eg_img.src = eg;

    var interior_img = document.querySelector('.img-interior');
    interior_img.src = interior;
}
// Tab-Images


// Favicon
function Add_Favicon(){
    var link = document.querySelector("link[rel~='shortcut']");

    link.href = browser_icon;
}
// Favicon

// Cards-Images
function Cards_Images(){
    var paint_img = document.querySelector('.paint-img');
    var foarm_img = document.querySelector('.foam-img');
    var grid_img = document.querySelector('.grid-img');
    var metal_tile_img = document.querySelector('.metal_tile-img');

    paint_img.src = paint;
    foarm_img.src = foarm;
    grid_img.src = grid;
    metal_tile_img.src = metal_tile;
}
// Cards-Images

// Slider Images
function set_background_slider_img(){
    var slider_container = document.querySelector('.slider-container');

    let count = 1;

    let slider_btn_left = document.querySelector('.slider-btn_left');

    let slider_btn_right = document.querySelector('.slider-btn_right');

    slider_btn_left.addEventListener('click', function(){
        count -= 1;
        if(count % 2 == 0){
            slider_container.style.backgroundImage = `url(${slide_2})`;
        }else{
            slider_container.style.backgroundImage = `url(${slide_1})`;
        }
    })

    slider_btn_right.addEventListener('click', function(){
        count += 1
        if(count % 2 == 1){
            slider_container.style.backgroundImage = `url(${slide_1})`;
        }else{
            slider_container.style.backgroundImage = `url(${slide_2})`;
        }
    })

    if(count > 0 && count < 2){
        slider_container.style.backgroundImage = `url(${slide_1})`;
    }

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
    Cards_Images();
    Tab_Images_Set();
}

export default Webpack_Main;
