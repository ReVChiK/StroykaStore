// png
import browser_icon from '../icons/favicon.png';

import img_geolocation from '../img/geolocation.png';
import footer_geolocation from '../img/footer_geolocation.png';
import email from '../img/email.png';

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
import delivery_nav_back from '../img/delivery/delivery_fon.png';
import order_nav_back from '../img/order/order_Background.png';

import refund_container_back from '../img/refund/refund_background.png';

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

import order_item from '../img/order/order_item.png';

// png

//docs
import linkFilePath from '../docs/Политика обработки персональных данных.pdf';
//docs

// svg

import geolocation_arrow from '../img/arrow.svg';
import geo_btn_close from '../img/Close.svg';

import footer_img_links from '../img/arrow_footer.svg';

import Logo from '../img/Logo.svg';
import Footer_Logo from '../img/Footer_Logo.svg';

import btn_add_card from '../img/cards_socks/Add.svg';
import btn_remove_card from '../img/cards_socks/Remove.svg';

import del_basket_icon from '../img/delivery/icons/delivery-icons-basket.svg';
import del_push_icon from '../img/delivery/icons/delivery-icons-push.svg';
import del_box_icon from '../img/delivery/icons/delivery-icons-box.svg';
import del_geolocation_icon from '../img/delivery/icons/delivery-icons-geolocation.svg';

import del_arrow from '../img/delivery/icons/delivery_arrow.svg';
// svg

// functions
import { SetLogo, SetSvgIcon, SetSvgIcons } from './components/svg';
import { SetBackgroundFon, SetSrcImg, SetSrcOnlyOnceImg, Slider } from './components/img';
import Set_Link_Path_File from './components/file';
// functions

// Structure

let cards_imgs_array = [
    visa, mastercard, maestro, mir
];

let avatars_array = [
    avatar_1, avatar_2, avatar_3, avatar_4
];

let array_brands_icon = [
    bever, braer, leonardo_stone, 
    euro_block, perfekta, mstera, 
    lcp, galen, recke, mod_format, 
    decra, engles
];

let del_icons_arr = [
    del_basket_icon, del_push_icon,
    del_box_icon, del_geolocation_icon
];

let product_img_array = [
    stoneware, grout, primer, drywall, profile_,
    roulette, package_, angle, knauf, screws,
    putty, tape
];

let tab_img_array = [
    shower, lumber, linoleum, wallpapers, tools,
    gfc, windows, doors, plumbing, paints, eg, interior
];

let stock_icons_array = [paint, foarm, grid, metal_tile];

let menu_icons_array = [profile, order, basket];

// Structure


// Sign-In
function SignIn_Button_Icon_Close(){
    var signIn_btn_exit = document.querySelectorAll('.sign-in__btn_close');

    signIn_btn_exit.forEach(element => {
        element.innerHTML = geo_btn_close;
    });
}
// Sign-In

// Sign-Up
function SignUp_Button_Icon_Close(){
    var signUp_btn_exit = document.querySelectorAll('.sign-up__btn_close');

    signUp_btn_exit.forEach(element => {
        element.innerHTML = geo_btn_close;
    });
}
// Sign-Up

// Favicon
function Add_Favicon(){
    var link = document.querySelector("link[rel~='shortcut']");

    link.href = browser_icon;
}
// Favicon

function Functions(){
    Add_Favicon();

    SignIn_Button_Icon_Close();
    SignUp_Button_Icon_Close();

    SetSvgIcon(document.querySelectorAll('.geolocation-btn__close'), geo_btn_close);

    SetSvgIcon(document.querySelectorAll('.point__icon'), del_arrow);

    SetSvgIcon(document.querySelectorAll('.btn-add'), btn_add_card);
    SetSvgIcon(document.querySelectorAll('.btn-remove'), btn_remove_card);

    SetSvgIcon(document.querySelectorAll('.list-item__content_icon'), geolocation_arrow);
    SetSvgIcon(document.querySelectorAll('.footer-nav__content_icon'), footer_img_links);

    SetSvgIcons(document.querySelectorAll('.rule-order__icon'), del_icons_arr)

    SetSrcImg(document.querySelectorAll('.footer-card-img'), cards_imgs_array);

    SetSrcImg(document.querySelectorAll('.avatar-img'), avatars_array);

    SetSrcImg(document.querySelectorAll('.icons-item__brand'), array_brands_icon)

    SetSrcImg(document.querySelectorAll('.product-img'), product_img_array)

    SetSrcImg(document.querySelectorAll('.tab-item__img_icon'), tab_img_array)

    SetSrcImg(document.querySelectorAll('.card-img'), stock_icons_array)

    SetSrcImg(document.querySelectorAll('.menu-icon'), menu_icons_array)

    SetSrcOnlyOnceImg(document.querySelectorAll('.trace-img'), traced_img)

    SetSrcOnlyOnceImg(document.querySelectorAll('.item__content_img img'), order_item)

    SetSrcOnlyOnceImg(document.querySelectorAll('.input-icon'), search_icon);

    SetSrcOnlyOnceImg(document.querySelectorAll('.img-geolocation'), img_geolocation);
    SetSrcOnlyOnceImg(document.querySelectorAll('.geolocation-img'), footer_geolocation);

    SetSrcOnlyOnceImg(document.querySelectorAll('.email-img'), email);

    SetBackgroundFon(document.querySelectorAll('.about-container'), about_fon)

    SetBackgroundFon(document.querySelectorAll('.brands-navigation__container'), brands_nav_back)

    SetBackgroundFon(document.querySelectorAll('.delivery-navigation__container'), delivery_nav_back)

    SetBackgroundFon(document.querySelectorAll('.order-navigation__container'), order_nav_back)

    SetBackgroundFon(document.querySelectorAll('.refund-navigation__container'), refund_container_back)

    Slider(document.querySelectorAll('.slider-container'), document.querySelectorAll('.slider-btn_left'), document.querySelectorAll('.slider-btn_right'), slide_1, slide_2);

    SetLogo(document.querySelectorAll('.menu-logo'), Logo)
    SetLogo(document.querySelectorAll('.footer-item__logo'), Footer_Logo)

    Set_Link_Path_File(document.querySelectorAll('.politic'), linkFilePath);
}

export default Functions;
