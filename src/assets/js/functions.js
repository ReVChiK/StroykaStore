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

import brands_nav_back from '../img/brands/brands_background.png';
import delivery_nav_back from '../img/delivery/delivery_fon.png';
import order_nav_back from '../img/order/order_Background.png';

import refund_container_back from '../img/refund/refund_background.png';

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

import basketBackground from '../img/basket/basketBack.png';
import catalogFon from '../img/catalog/CatalogFon.png';

import MobileClose_icon from '../icons/mobile_menu_close.png';

// png

//docs
import linkFilePath from '../docs/Политика обработки персональных данных.pdf';
//docs

// svg

import catalogIcon from '../icons/catalog/catalog-icon.svg';

import geo_btn_close from '../img/Close.svg';

import footer_img_links from '../img/arrow_footer.svg';

import Logo from '../img/Logo.svg';
import Footer_Logo from '../img/Footer_Logo.svg';

import del_arrow from '../img/delivery/icons/delivery_arrow.svg';

import productCheck_Icon from '../icons/catalog/categories/products/checkProduct.svg';

import basketCarIcon from '../icons/basket/car.svg';

import btn_add_card from '../img/cards_socks/Add.svg';
import btn_remove_card from '../img/cards_socks/Remove.svg';

import categBtn_Nav_Icon from '../icons/catalog/categories/Navigation_Icon.svg';

import categFilters_Icon from '../icons/catalog/categories/filters.svg';

import MobileOpen_Icon from '../icons/mobile_menu_open.svg';

// svg

// functions
import { SetLogo, SetSvgIcon, SetSvgIcons } from './abstract_components/svg';
import { SetBackgroundFon, SetSrcImg, SetSrcOnlyOnceImg, Slider } from './abstract_components/img';
import Set_Link_Path_File from './abstract_components/file';
import { Add_Brand_Image } from './components/brands';
import { Add_Category, Catalog_Categories_Component, categoriesList_Brands, categoriesList_Brand_Component, CategoriesList_Provider_Component, Categories_Filters_Modal, Categories_Panel_Manipulation, Categories_Range_Inputs } from './components/categories';
import { BasketDescription_Item, Basket_Item_Component, Basket_Item_Maipulation, Place_an_Order, Redirect_Mobile_Basket } from './components/basket';
import { ProductItem } from './components/product';
import { Catalog_Product } from './catalog';
import { Geolocation_Component } from './components/geolocation';
import { Stocks_Component } from './components/sockCard';
// functions

// Structure

const cards_imgs_array = [
    visa, mastercard, maestro, mir
];

const avatars_array = [
    avatar_1, avatar_2, avatar_3, avatar_4
];


const menu_icons_array = [profile, order, basket];

const mobile_icons_menu = [profile, order]

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

function Sign_in_up_IconClose(){
    SignIn_Button_Icon_Close();
    SignUp_Button_Icon_Close();
}

function Geo_fn(){
    Geolocation_Component(document.querySelectorAll('.geolocation-content__list_content'));
}

function SetSvg_fn(){
    SetSvgIcon(document.querySelectorAll('.geolocation-btn__close'), geo_btn_close);

    SetSvgIcon(document.querySelectorAll('.categories-list__options-modal__btnClose'), geo_btn_close);

    SetSvgIcon(document.querySelectorAll('.categFilters__content_icon'), categFilters_Icon);

    SetSvgIcon(document.querySelectorAll('.point__icon'), del_arrow);
    SetSvgIcon(document.querySelectorAll('.icon__open_menu'), MobileOpen_Icon);

    SetSvgIcon(document.querySelectorAll('.manipulation__quantity_add'), btn_add_card);
    SetSvgIcon(document.querySelectorAll('.manipulation__quantity_remove'), btn_remove_card);

    SetSvgIcon(document.querySelectorAll('.preview__info_description-content__icon'), basketCarIcon);

    SetSvgIcon(document.querySelectorAll('.footer-nav__content_icon'), footer_img_links);

    SetSvgIcon(document.querySelectorAll('.btn-catalog__content_icon'), catalogIcon);

    SetSvgIcon(document.querySelectorAll('.nav-btn__arrow'), categBtn_Nav_Icon)

    SetSvgIcon(document.querySelectorAll('.preview__info_check-content__icon'), productCheck_Icon)

    SetSvgIcon(document.querySelectorAll('.catalog_icons_menu'), MobileOpen_Icon);
}

function SetSrcImgs_fn(){
    SetSrcImg(document.querySelectorAll('.footer-card-img'), cards_imgs_array);

    SetSrcImg(document.querySelectorAll('.avatar-img'), avatars_array);

    SetSrcImg(document.querySelectorAll('.menu-icon'), menu_icons_array)

    SetSrcImg(document.querySelectorAll('.mobile_icons_menu'), mobile_icons_menu)

    SetSrcOnlyOnceImg(document.querySelectorAll('.trace-img'), traced_img)
    SetSrcOnlyOnceImg(document.querySelectorAll('.icon__close_menu img'), MobileClose_icon);

    SetSrcOnlyOnceImg(document.querySelectorAll('.input-icon'), search_icon);
    SetSrcOnlyOnceImg(document.querySelectorAll('.optionsBrands__icon'), search_icon);

    SetSrcOnlyOnceImg(document.querySelectorAll('.img-geolocation'), img_geolocation);

    SetSrcOnlyOnceImg(document.querySelectorAll('.geo_img'), img_geolocation);

    SetSrcOnlyOnceImg(document.querySelectorAll('.geolocation-img'), footer_geolocation);

    SetSrcOnlyOnceImg(document.querySelectorAll('.email-img'), email);

    SetBackgroundFon(document.querySelectorAll('.about-container'), about_fon)

    SetBackgroundFon(document.querySelectorAll('.brands-navigation__container'), brands_nav_back)

    SetBackgroundFon(document.querySelectorAll('.delivery-navigation__container'), delivery_nav_back)

    SetBackgroundFon(document.querySelectorAll('.order-navigation__container'), order_nav_back)

    SetBackgroundFon(document.querySelectorAll('.refund-navigation__container'), refund_container_back)

    SetBackgroundFon(document.querySelectorAll('.basket-navigation__container'), basketBackground);

    SetBackgroundFon(document.querySelectorAll('.catalog-navigation__container'), catalogFon);

    Slider(document.querySelectorAll('.slider-container'), document.querySelectorAll('.slider-btn_left'), document.querySelectorAll('.slider-btn_right'), slide_1, slide_2);
}

function Docs_fn(){
    Set_Link_Path_File(document.querySelectorAll('.politic'), linkFilePath);
}

function Logo_fn(){
    SetLogo(document.querySelectorAll('.menu-logo'), Logo)
    SetLogo(document.querySelectorAll('.footer-item__logo'), Footer_Logo)
}

function Catalog_Categories_fn(){

    // Main Page
    Add_Category(document.querySelectorAll('#categories'));
    // Main Page

    Catalog_Product(document.querySelectorAll('.catalog-list__container_products-content'));

    Catalog_Categories_Component(document.querySelectorAll('.categories-list__products_content'));

    categoriesList_Brand_Component(document.querySelectorAll('.brands__list'));

    CategoriesList_Provider_Component(document.querySelectorAll('#categ__providers'));

    CategoriesList_Provider_Component(document.querySelectorAll('#categ__providers_mobile'));

    Categories_Range_Inputs(document.querySelectorAll('#options__price_slider-1'), document.querySelectorAll('#options__price_slider-2'), document.querySelectorAll('#opt__inputs_price-1'), document.querySelectorAll('#opt__inputs_price-2'), document.querySelectorAll('.slider-track'));

    Categories_Filters_Modal();

    Categories_Panel_Manipulation();
}

function Product_fn(){
    ProductItem(document.querySelectorAll('.products-container__cards_content'));
}

function Socks(){
    Stocks_Component(document.querySelectorAll('.stocks-container__cards_content'))
}

function Basket_fn(){
    BasketDescription_Item(document.querySelectorAll('.basket-list__panel_description'));

    Basket_Item_Component(document.querySelectorAll('.basket-list__items'), document.querySelectorAll('.summary__amount_content-amount p'), document.querySelectorAll('.summary__price_content-price p'));

    Basket_Item_Maipulation(document.querySelectorAll('.basket__btn_add'), document.querySelectorAll('.basket__btn_remove'), document.querySelectorAll('.quantity'), document.querySelectorAll('.basket__code_btn-remove'));

    Place_an_Order(document.querySelectorAll('#basket-order'));

    Redirect_Mobile_Basket(document.querySelectorAll('.menu-basket'))
}

function Functions(){
    Add_Favicon();
    Logo_fn();

    Sign_in_up_IconClose();

    Geo_fn();

    Catalog_Categories_fn();

    SetSvg_fn();
    SetSrcImgs_fn();

    Docs_fn();

    Product_fn();

    Socks();

    Basket_fn();

    Add_Brand_Image(document.querySelectorAll('#brands'));
}

export default Functions;
