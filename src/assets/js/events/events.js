import { Hover_Elements } from "../abstract_components/hover";
import { Catalog_Providers_Component, Choose_Provider, Catalog_Product_Name } from "../catalog";
import { Brands_List, Brand_Button_BottomMenu, Brand_Button_TopMenu, SortBrands } from "../components/brands";
import { ReviewsCarousel } from "../components/carousel";
import { Delivery_Info } from "../components/delivery";
import { Choose_Geolocation_Cities, Close_Modal_Window, Open_Modal_Window, Search_Gelocation_Cities, SetCities_Geolocation } from "../components/geolocation";
import { Redirect_Product } from "../components/product";
import Resource_Product_Data from "../components/resource";

function Home_Page(){
    let logotype = document.querySelectorAll('.menu-logo');

    for(let i = 0; i < logotype.length; i++){
        logotype[i].addEventListener('click', ()=>{
            window.open('../../../index.html', '_self');
        })
    }
}

function Brands(){
    Brands_List();

    Brand_Button_TopMenu(document.querySelectorAll('#brands-top-menu'));
    Brand_Button_BottomMenu(document.querySelectorAll('#brands-bottom-menu'));

    SortBrands(document.querySelectorAll('.kind'), document.querySelectorAll('.brands-list__item'));
}

function Geo(){
    Open_Modal_Window();
    Close_Modal_Window();

    Hover_Elements(document.querySelectorAll('.list-item__content_city'), document.querySelectorAll('.list-item__content_icon'));

    SetCities_Geolocation(document.querySelectorAll('.list-item__content_city'));
    
    Search_Gelocation_Cities(document.getElementById('geo-choose-cities'), document.querySelectorAll('.geo-input__search'), document.querySelectorAll('.list-item__content_city'));

    Choose_Geolocation_Cities(document.querySelectorAll('.cities-name'), document.querySelectorAll('.list-item__content_city'))
}

function Event_Catalog(){
    Catalog_Providers_Component(document.querySelectorAll('.catalog-list__container_providers-content'));

    Choose_Provider(document.querySelectorAll('.provider__item'));
    
    Catalog_Product_Name(document.querySelectorAll('.product__link'));

    Hover_Elements(document.querySelectorAll('.catalog__list_item-product'), document.querySelectorAll('.catalog__list_item-arrow'));
}

function Products(){
    Redirect_Product();
}

function Events(){
    Home_Page();

    Hover_Elements(document.querySelectorAll('.footer-nav__content_item'), document.querySelectorAll('.footer-nav__content_icon'))

    Brands();
    Geo();

    Delivery_Info();

    ReviewsCarousel(document.querySelectorAll('.btn-left'), document.querySelectorAll('.btn-right'), document.querySelectorAll('.reviews-container__listing_content'), document.querySelectorAll('.review-listing__item'));

    Event_Catalog();

    Products();

    Resource_Product_Data(document.querySelectorAll('.product__category'), document.querySelectorAll('.product__category_kind'), document.querySelectorAll('.product__description'), document.querySelectorAll('.preview__product-img'), document.querySelectorAll('.preview__info_title h1'), document.querySelectorAll('.preview__info_price'), document.querySelectorAll('.product__page_title'));
}

export default Events;

