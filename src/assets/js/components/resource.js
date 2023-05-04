
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
    {id: 115, image: Lenta}
]

function Resource_Product_Data(product_category, product_category_kind, product_description, product_image, product_title, product_price, product_page_title){

    let response = JSON.parse(localStorage.getItem('product'));

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
        console.log(price.children);
        price.children[0].textContent = response.price
    })

    product_page_title.forEach(title=>{
        title.textContent = `Стройка Стор - ${response.description}`
    })
}

export default Resource_Product_Data;