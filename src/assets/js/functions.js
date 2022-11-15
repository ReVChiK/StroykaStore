import browser_icon from '../icons/favicon.png';

import img_geolocation from '../img/geolocation.png';
import footer_geolocation from '../img/footer_geolocation.png';
import email from '../img/email.png';

import geolocation_arrow from '../img/arrow.svg';

import footer_img_links from '../img/arrow_footer.svg';

import Logo from '../img/Logo.svg';
import Footer_Logo from '../img/Footer_Logo.svg';

import geo_btn_close from '../img/Close.svg';

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

import btn_add_card from '../img/cards_socks/Add.svg';
import btn_remove_card from '../img/cards_socks/Remove.svg';

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

import stoneware from '../img/products/stoneware.png';
import grout from '../img/products/grout.png';
import primer from '../img/products/primer.png';
import drywall from '../img/products/drywall.png';
import profile_ from '../img/products/profile.png';
import roulette from '../img/products/roulette.png';
import package_ from '../img/products/package.png';
import angle from '../img/products/angle.png';
import knauf from '../img/products/knauf.png';
import screws from '../img/products/screws.png';
import putty from '../img/products/putty.png';
import tape from '../img/products/tape.png';

import brands_nav_back from '../img/brands/brands_background.png';

import bever from '../img/brands/bever.png';
import braer from '../img/brands/braer.png';
import leonardo_stone from '../img/brands/leonardo_stone.png';
import euro_block from '../img/brands/euro_block.png';
import perfekta from '../img/brands/perfekta.png';
import mstera from '../img/brands/mstera.png';
import lcp from '../img/brands/lcp.png';
import galen from '../img/brands/galen.png';
import recke from '../img/brands/recke.png';
import mod_format from '../img/brands/mod_format.png';
import decra from '../img/brands/decra.png';
import engles from '../img/brands/engels.png';

import avatar_1 from '../img/reviews/avatars/Avatars_1.png';
import avatar_2 from '../img/reviews/avatars/Avatars_2.png';
import avatar_3 from '../img/reviews/avatars/Avatars_3.png';
import avatar_4 from '../img/reviews/avatars/Avatars_4.png';

import traced_img from '../img/reviews/traced.png';

import about_fon from '../img/about/about_fon.png';

import visa from '../img/footer_cards/Visa.png';
import mastercard from '../img/footer_cards/MasterCard.png';
import maestro from '../img/footer_cards/Maestro.png';
import mir from '../img/footer_cards/Mir.png';

// Geolocation-Close-Btn
function Geo_btn_Close(){
    var geo_btn_exit = document.querySelectorAll('.geolocation-btn__close');

    for(let i = 0; i < geo_btn_exit.length; i++){
        geo_btn_exit[i].innerHTML = geo_btn_close;
    }
}
// Geolocation-Close-Btn

// Footer Cards Pay
function Set_Cards_Pay_Img(){
    let cards_imgs_array = [visa, mastercard, maestro, mir];

    let cards_imgs = document.querySelectorAll('.footer-card-img');

    for(let i = 0; i < cards_imgs.length; i++){
        cards_imgs[i].src = cards_imgs_array[i];
    }
}
// Footer Cards Pay

// About-Img
function Set_About_Fon(){
    var about_fon_img = document.querySelectorAll('.about-container');

    for(let i = 0; i < about_fon_img.length; i++){
        about_fon_img[i].style.backgroundImage = `url(${about_fon})`;
    }
}
// About-Img

// Reviews-Avatars
function Set_Avatars(){
    let avatars_array = [avatar_1, avatar_2, avatar_3, avatar_4];

    let avatar_imgs = document.querySelectorAll('.avatar-img');
    for (let i = 0; i < avatar_imgs.length; i++){
        avatar_imgs[i].src = avatars_array[i];
    }

    let traced_imgs = document.querySelectorAll('.trace-img');
    for(let j = 0; j < traced_imgs.length; j++){
        traced_imgs[j].src = traced_img;
    }
}
// Reviews-Avatars

// Brands-Image
function Brands_Image_Set(){
   
    var brands_img = document.querySelectorAll('.icons-item__brand');

    let array_brands_icon = [bever, braer, leonardo_stone, euro_block,
                            perfekta, mstera, lcp, galen, recke,
                            mod_format, decra, engles
    ];
    
    for(let i = 0; i < brands_img.length; i++){
        brands_img[i].src = array_brands_icon[i];
    }

}
// Brands-Image

function Set_Background_Brands_Nav(){
    let brand_nav_background = document.querySelectorAll('.brands-navigation__container');

    for(let i = 0; i < brand_nav_background.length; i++){
        brand_nav_background[i].style.background = `url(${brands_nav_back})`;
    }

}


// Products-Image
function Products_Image_Set(){

    let product_img_el = document.querySelectorAll('.product-img');

    let product_img_array = [stoneware, grout, primer, drywall, profile_,
                            roulette, package_, angle, knauf, screws,
                            putty, tape
    ];

    for(let i = 0; i < product_img_el.length; i++){
        product_img_el[i].src = product_img_array[i];
    }
}
// Products-Image

// Tab-Images
function Tab_Images_Set(){

    let tab_imgs_el = document.querySelectorAll('.tab-item__img_icon ');

    let tab_img_array = [shower, lumber, linoleum, wallpapers, tools,
                        gfc, windows, doors, plumbing, paints, eg, interior
    ];

    for(let i = 0; i < tab_imgs_el.length; i++){
        tab_imgs_el[i].src = tab_img_array[i];
    }

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

    let stock_icons_array = [paint, foarm, grid, metal_tile];

    let stocks_img = document.querySelectorAll('.card-img');
    

    for(let k = 0; k < stocks_img.length; k++){
        stocks_img[k].src = stock_icons_array[k];
    }

    var btn_add = document.querySelectorAll('.btn-add');
    var btn_remove = document.querySelectorAll('.btn-remove');

    for(let i = 0; i < btn_add.length; i++){
        btn_add[i].innerHTML = btn_add_card;
    }

    for(let j = 0; j < btn_remove.length; j++){
        btn_remove[j].innerHTML = btn_remove_card;
    }

}
// Cards-Images

// Slider Images
function set_background_slider_img(){
    var slider_container = document.querySelectorAll('.slider-container');

    let count = 1;

    let slider_btn_left = document.querySelectorAll('.slider-btn_left');

    let slider_btn_right = document.querySelectorAll('.slider-btn_right');

    for(let i = 0; i < slider_btn_left.length; i++){
        slider_btn_left[i].addEventListener('click', function(){
            count -= 1;
            if(count % 2 == 0){
                slider_container[i].style.backgroundImage = `url(${slide_2})`;
            }else{
                slider_container[i].style.backgroundImage = `url(${slide_1})`;
            }
        })
    }

    for(let j = 0; j < slider_btn_right.length; j++){
        slider_btn_right[j].addEventListener('click', function(){
            count += 1
            if(count % 2 == 1){
                slider_container[j].style.backgroundImage = `url(${slide_1})`;
            }else{
                slider_container[j].style.backgroundImage = `url(${slide_2})`;
            }
        })
    }

    for(let n = 0; n < slider_container.length; n++){
        if(count > 0 && count < 2){
            slider_container[n].style.backgroundImage = `url(${slide_1})`;
        }
    }

}
// Slider Images

// Custom-Panel-Images
function Set_Img_Panel(){

    let menu_icons = document.querySelectorAll('.menu-icon');

    let menu_icons_array = [profile, order, basket];

    for(let i = 0; i < menu_icons.length; i++){
        menu_icons[i].src = menu_icons_array[i];
    }

}
// Custom-Panel-Images

// Logotype
function Set_Logo(){
    var logo = document.querySelectorAll('.menu-logo');
    for(let i = 0; i < logo.length; i++){
        logo[i].innerHTML = Logo;
    }

    var footer_logo = document.querySelectorAll('.footer-item__logo');
    for(let j = 0; j < footer_logo.length; j ++){
        footer_logo[j].innerHTML = Footer_Logo;
    }
    // footer_logo.innerHTML = Footer_Logo;
}
// Logotype

// Search Input Icon
function Set_search_Icon(){
    var input_search_icon = document.querySelectorAll('.input-icon');

    for(let i = 0; i < input_search_icon.length; i++){
        input_search_icon[i].src = search_icon;
    }
}
// Search Input Icon

// Geolocation Cities
function Add_Img_Geolocation(){
    var geo_img = document.querySelectorAll('.img-geolocation');

    for(let j = 0; j < geo_img.length; j++){
        geo_img[j].src = img_geolocation;
    }

    var footer_geo_img = document.querySelectorAll('.geolocation-img');
    
    for(let i = 0; i < footer_geo_img.length; i++){
        footer_geo_img[i].src = footer_geolocation;
    }

    let geolocation_cities_icon = document.querySelectorAll('.list-item__content_icon');

    for(let i = 0; i < geolocation_cities_icon.length; i++){
        geolocation_cities_icon[i].innerHTML = geolocation_arrow;
    }
}
// Geolocation Cities

// Footer Arrow
function Set_Footer_Arrow(){
    let footer_icon_arrows = document.querySelectorAll('.footer-nav__content_icon');

    for(let i = 0; i < footer_icon_arrows.length; i++){
        footer_icon_arrows[i].innerHTML = footer_img_links;
    }
}
// Footer Arrow

// Email Image
function Set_email_Footer(){
    var footer_email_img = document.querySelectorAll('.email-img');

    for(let i = 0; i < footer_email_img.length; i++){
        footer_email_img[i].src = email;
    }
}
// Email Image

function Webpack_Main(){
    Add_Favicon();
    Add_Img_Geolocation();
    Set_Logo();
    Set_search_Icon();
    Set_Img_Panel();
    set_background_slider_img();
    Cards_Images();
    Tab_Images_Set();
    Products_Image_Set();
    Brands_Image_Set();
    Set_Background_Brands_Nav();
    Set_Avatars();
    Set_About_Fon();
    Set_email_Footer();
    Set_Footer_Arrow();
    Set_Cards_Pay_Img();
    Geo_btn_Close();
}

export default Webpack_Main;
