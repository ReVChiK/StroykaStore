
import Ruberoid from '../../img/catalog/catalog_categories/products/product_fullSize/ruberoid.png';
import Pena from '../../img/catalog/catalog_categories/products/product_fullSize/pena.png';
import Grid from '../../img/catalog/catalog_categories/products/product_fullSize/grid.png';
import Metalocherepicha from '../../img/catalog/catalog_categories/products/product_fullSize/metalchezeticha.png';
import Keramogranit from '../../img/catalog/catalog_categories/products/product_fullSize/keramogranit.png';
import Zatirka from '../../img/catalog/catalog_categories/products/product_fullSize/zatirka.png';
import Gruntovka from '../../img/catalog/catalog_categories/products/product_fullSize/Gruntovka.png';
import Gipsokarton from '../../img/catalog/catalog_categories/products/product_fullSize/Gipsokarton.png';
import Profile from '../../img/catalog/catalog_categories/products/product_fullSize/Profile.png';
import Ruletka from '../../img/catalog/catalog_categories/products/product_fullSize/Ruletka.png';
import Knauf_Blue from '../../img/catalog/catalog_categories/products/product_fullSize/knauf_Blue.png';
import Angle_grey from '../../img/catalog/catalog_categories/products/product_fullSize/Angle_gray.png';
import Knauf_White from '../../img/catalog/catalog_categories/products/product_fullSize/knauf_White.png';
import Samorez from '../../img/catalog/catalog_categories/products/product_fullSize/Samorez.png';
import Shatlovka from '../../img/catalog/catalog_categories/products/product_fullSize/Shatlovka.png';
import Lenta from '../../img/catalog/catalog_categories/products/product_fullSize/Lenta.png';

// Categ Product Imgs
import categProduct_Putty from '../../img/catalog/catalog_categories/products/product_putty.png';
import categProduct_Putty2 from '../../img/catalog/catalog_categories/products/product_putty2.png';
import categProduct_Shtukaturka from '../../img/catalog/catalog_categories/products/product_Shtukaturka.png';
import categProduct_Shtukaturka2 from '../../img/catalog/catalog_categories/products/product_Shtukaturka2.png';
import categProduct_Shtukaturka3 from '../../img/catalog/catalog_categories/products/product_Shtukaturka3.png';
import categProduct_Shtukaturka4 from '../../img/catalog/catalog_categories/products/product_Shtukaturka4.png';
import categProduct_Shtukaturka5 from '../../img/catalog/catalog_categories/products/product_Shtukaturka5.png';
import categProduct_Shtukaturka6 from '../../img/catalog/catalog_categories/products/product_Shtukaturka6.png';
import categProduct_Kley from '../../img/catalog/catalog_categories/products/product_kley.png';
import categProduct_Kley2 from '../../img/catalog/catalog_categories/products/product_kley2.png';
import categProduct_Kley3 from '../../img/catalog/catalog_categories/products/product_kley3.png';
import categProduct_Osnovit from '../../img/catalog/catalog_categories/products/product_osnovit.png';
import categProduct_Gruntovka from '../../img/catalog/catalog_categories/products/product_gruntovka.png';
import categProduct_Smes from '../../img/catalog/catalog_categories/products/product_smes.png';
import { toDivide } from '../abstract_components/number';
// Categ Product Imgs

const imageFull_Size = [
    {id: 100, image: Ruberoid},
    {id: 101, image: Pena},
    {id: 102, image: Grid},
    {id: 103, image: Metalocherepicha},
    {id: 104, image: Keramogranit},
    {id: 105, image: Zatirka},
    {id: 106, image: Gruntovka},
    {id: 107, image: Gipsokarton},
    {id: 108, image: Profile},
    {id: 109, image: Ruletka},
    {id: 110, image: Knauf_Blue},
    {id: 111, image: Angle_grey},
    {id: 112, image: Knauf_White},
    {id: 113, image: Samorez},
    {id: 114, image: Shatlovka},
    {id: 115, image: Lenta},
    {id: 116, image: categProduct_Putty},
    {id: 117, image: categProduct_Shtukaturka},
    {id: 118, image: categProduct_Shtukaturka2},
    {id: 119, image: categProduct_Kley},
    {id: 120, image: categProduct_Kley2},
    {id: 122, image: categProduct_Shtukaturka3},
    {id: 124, image: categProduct_Osnovit},
    {id: 127, image: categProduct_Gruntovka},
    {id: 128, image: categProduct_Shtukaturka4},
    {id: 129, image: categProduct_Putty2},
    {id: 130, image: categProduct_Shtukaturka5},
    {id: 131, image: categProduct_Shtukaturka6},
    {id: 132, image: categProduct_Smes},
    {id: 133, image: categProduct_Kley3}
]

function Resource_Product_Data(product_category, product_category_kind, product_description, product_image, product_title, product_price, product_page_title){

    let response = JSON.parse(localStorage.getItem('product'));

    let preview_btns = document.querySelectorAll('.preview-btn');

    preview_btns.forEach(btn=>{
        btn.setAttribute('basket-id', response.id);
    })

    product_category.forEach(category=>{
        category.textContent = response.category;
    })

    product_category_kind.forEach(category_kind=>{
        category_kind.textContent = response.category_kind;
    })

    product_description.forEach(description=>{
        description.textContent = response.description;
    })

    product_image.forEach(preview=>{
        for(let i = 0; i < imageFull_Size.length; i++){
            if(imageFull_Size[i].id == response.id){
                preview.src = imageFull_Size[i].image;
            }
        }
    })

    product_title.forEach(title=>{
        title.textContent = response.description;
    })

    product_price.forEach(price=>{
        price.children[0].textContent = toDivide(response.price)
    })

    product_page_title.forEach(title=>{
        title.textContent = `Стройка Стор - ${response.description}`
    })
}

export async function Reserve_Product(parentSelector){

    let similar_products = document.querySelectorAll('.product-similar');

    if(localStorage.getItem('product_reserve') !== null){
        let product_reserve = JSON.parse(localStorage.getItem('product_reserve'));
        if(product_reserve.length < 2){
            similar_products.forEach(el=> el.style.display = 'none')
        }else{
            for(let i = 0; i < product_reserve.length; i++){
                parentSelector.forEach(selector=>{
    
                    // Similar Product Item -> selector
                    const SimilarProduct_Item = document.createElement('div');
                    SimilarProduct_Item.classList.add('product-similar__item');
                    // Similar Product Item -> selector
    
                    //------Image-----//
    
                    // Similar Product Item Preview -> Similar Product Item
                    const SimilarProduct_Item_Preview = document.createElement('div');
                    SimilarProduct_Item_Preview.classList.add('product-similar__item_preview');
                    // Similar Product Item Preview -> Similar Product Item
    
                    // Preview Image -> Similar Product Item Preview
                    const Preview_Image = document.createElement('img');
                    Preview_Image.classList.add('similar-preview');
                    for(let j = 0; j < imageFull_Size.length; j++){
                        if(imageFull_Size[j].id == product_reserve[i].id){
                            Preview_Image.src = imageFull_Size[j].image;
                        }
                    }
                    Preview_Image.alt = 'Продукт';
                    // Preview Image -> Similar Product Item Preview
    
                    //------Image-----//
    
                    // Similar Product Item Data -> Similar Product Item
                    const SimilarProduct_Item_data = document.createElement('div');
                    SimilarProduct_Item_data.classList.add('product-similar__item_data');
                    // Similar Product Item Data -> Similar Product Item
    
                    // Data Container -> Similar Product Item Data
                    const Item_Data_container = document.createElement('div');
                    Item_Data_container.classList.add('product-similar__item_data-container');
                    // Data Container -> Similar Product Item Data
    
                    // Data Container Info -> Data Container
                    const Item_Data_containerInfo = document.createElement('div');
                    Item_Data_containerInfo.classList.add('product-similar__item_data-container__info');
                    // Data Container Info -> Data Container
    
                    // Info Link -> Data Container Info
                    const Info_Link = document.createElement('a');
                    Info_Link.classList.add('data__link_product','product__info_link');
                    Info_Link.setAttribute('data-id', product_reserve[i].id);
                    Info_Link.href = "#";
                    Info_Link.textContent = product_reserve[i].description;
                    // Info Link -> Data Container Info
    
                    //-----Price-----//
    
                    // Data Container Price -> Data Container
                    const Item_Data_containerPrice = document.createElement('div');
                    Item_Data_containerPrice.classList.add('product-similar__item_data-container__price');
                    // Data Container Price -> Data Container
    
                    // Price Value -> Data Container Price
                    const Price_Value = document.createElement('p');
                    Price_Value.textContent = toDivide(product_reserve[i].price);
                    // Price Value -> Data Container Price
    
                    // Price Vallet -> Data Container Price
                    const Price_Vallet = document.createElement('span');
                    Price_Vallet.textContent = '₽';
                    // Price Vallet -> Data Container Price
    
                    //-----Price-----//
    
                    // Data Container Button -> Data Container
                    const Item_Data_containerButton = document.createElement('div');
                    Item_Data_containerButton.classList.add('product-similar__item_data-container__button');
                    // Data Container Button -> Data Container
    
                    // Button btn -> Data Container Button
                    const Button_btn = document.createElement('button');
                    Button_btn.classList.add('similar__btn', 'basket-btn');
                    Button_btn.setAttribute('basket-id', product_reserve[i].id);
                    Button_btn.textContent = 'В корзину';
                    // Button btn -> Data Container Button
    
                    Item_Data_containerButton.append(Button_btn);
                    Item_Data_containerPrice.append(Price_Value, Price_Vallet);
                    Item_Data_containerInfo.append(Info_Link);
    
                    Item_Data_container.append(Item_Data_containerInfo, Item_Data_containerPrice, Item_Data_containerButton);
    
                    SimilarProduct_Item_data.append(Item_Data_container);
                    SimilarProduct_Item_Preview.append(Preview_Image);
    
                    SimilarProduct_Item.append(SimilarProduct_Item_Preview, SimilarProduct_Item_data);
    
                    selector.appendChild(SimilarProduct_Item);
                })
            }
        }
    }else return;
}

export default Resource_Product_Data;