import Swal from 'sweetalert2';
import data from '../../../resources/resource.json5';

const deploy_path = 'https://revchik.github.io/Developing';

export function Search_Product(){
    let global_input = document.querySelector('input[id="search"]');
    let global_input_icon = document.querySelector('.search-input_icon');

    let product_data = {};

    let reserve_products_arr = [];
    let reserve_products_obj = {};

    global_input.onkeydown = (e)=>{
        if(e.code === 'Enter'){

            data.products.findIndex((std, index)=>{
                if(std.title.toLowerCase() === global_input.value.toLowerCase() || std.id === parseInt(global_input.value)){
    
                    product_data.id = std.id;
                    product_data.description = std.description;
                    product_data.category = std.category;
                    product_data.category_kind = std.category_kind;
                    product_data.price = std.price;
    
                    localStorage.setItem('product', JSON.stringify(product_data));
                    window.open('../../../catalog/categories/product/product.html', '_self');
                    // for deploy
                    // window.open(`${deploy_path}/catalog/categories/product/product.html`, '_self');
    
                }else{
                    const Toast = Swal.mixin({
                        toast: true,
                        position: 'top',
                        showConfirmButton: false,
                        timer: 2000,
                        didOpen: (toast) =>{
                            toast.addEventListener('mouseenter', Swal.stopTimer)
                            toast.addEventListener('mouseleave', Swal.resumeTimer)
                        }
                    })
    
                    Toast.fire({
                        icon: 'error',
                        title: 'Товар не найден.'
                    })
                }

                if(global_input.value.toLowerCase() === std.title.split(' ')[0].toLowerCase()){
                    reserve_products_arr.push(data.products[index])

                    localStorage.setItem('product_reserve', JSON.stringify(reserve_products_arr));
                }
            })
        }
    }

    global_input_icon.onclick = ()=>{

        data.products.findIndex((std, index)=>{
            if(std.title.toLowerCase() === global_input.value.toLowerCase() || std.id === parseInt(global_input.value)){

                product_data.id = std.id;
                product_data.description = std.description;
                product_data.category = std.category;
                product_data.category_kind = std.category_kind;
                product_data.price = std.price;

                localStorage.setItem('product', JSON.stringify(product_data));

                window.open('../../../catalog/categories/product/product.html', '_self');
                // for deploy
                // window.open(`${deploy_path}/catalog/categories/product/product.html`, '_self');

            }else{
                const Toast = Swal.mixin({
                    toast: true,
                    position: 'top',
                    showConfirmButton: false,
                    timer: 2000,
                    didOpen: (toast) =>{
                        toast.addEventListener('mouseenter', Swal.stopTimer)
                        toast.addEventListener('mouseleave', Swal.resumeTimer)
                    }
                })

                Toast.fire({
                    icon: 'error',
                    title: 'Товар не найден.'
                })
            }

            if(global_input.value.toLowerCase() === std.title.split(' ')[0].toLowerCase()){
                reserve_products_arr.push(data.products[index])

                localStorage.setItem('product_reserve', JSON.stringify(reserve_products_arr));
            }
        })
    }
}