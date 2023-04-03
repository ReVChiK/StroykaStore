import { Brands_Kinds, Brands_List, SortBrands } from "../components/brands";
import { ReviewsCarousel } from "../components/carousel";
import { Delivery_Info } from "../components/delivery";
import { Close_Modal_Window, Hover_Geolocation_Elements, Open_Modal_Window } from "../components/geolocation";
import { Socks_Card_Quantity } from "../components/sockCard";

function Home_Page(){
    let logotype = document.querySelectorAll('.menu-logo');

    for(let i = 0; i < logotype.length; i++){
        logotype[i].addEventListener('click', ()=>{
            window.open('../../../index.html', '_self');
        })
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

function Brands(){
    Brands_Kinds();
    Brands_List();
    SortBrands(document.querySelectorAll('.kind'), document.querySelectorAll('.brands-list__item'));
}

function Geo(){
    Open_Modal_Window();
    Close_Modal_Window();
    Hover_Geolocation_Elements();
}

function Events(){
    Home_Page();
    Hover_Elements_Footer();

    Brands();
    Geo();

    Delivery_Info();

    Socks_Card_Quantity();

    ReviewsCarousel();
}

export default Events;

