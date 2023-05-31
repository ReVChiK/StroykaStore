
import del_basket_icon from '../../img/delivery/icons/delivery-icons-basket.svg';
import del_push_icon from '../../img/delivery/icons/delivery-icons-push.svg';
import del_box_icon from '../../img/delivery/icons/delivery-icons-box.svg';
import del_geolocation_icon from '../../img/delivery/icons/delivery-icons-geolocation.svg';

const del_icons_arr = [
    del_basket_icon, del_push_icon,
    del_box_icon, del_geolocation_icon
];

const del_description_arr = [
    '<p>Добавьте нужные товары <br> в корзину и оплатите заказ</p>',
    '<p>Получите уведомления <br> о подтверждении вашего заказа</p>',
    '<p>После подтверждения <br> мы сформируем ваш заказ</p>',
    '<p>Заберите из пунктов <br> выдачи</p>'
]

export async function Delivery_RuleOrder_Component(parentSelector){
    for(let i = 0; i < del_icons_arr.length; i++){
        parentSelector.forEach(selector => {
            
            const RuleOrder_Item = document.createElement('div');
            RuleOrder_Item.classList.add('rule-order');

            const RuleOrder_Item_icon = document.createElement('div');
            RuleOrder_Item_icon.classList.add('rule-order__icon');
            RuleOrder_Item_icon.innerHTML = del_icons_arr[i];

            const RuleOrder_Item_description = document.createElement('div');
            RuleOrder_Item_description.classList.add('rule-order__desc');
            RuleOrder_Item_description.innerHTML = del_description_arr[i]

            RuleOrder_Item.append(RuleOrder_Item_icon, RuleOrder_Item_description);

            selector.appendChild(RuleOrder_Item);

        });
    }
}

export function Delivery_Info(){

    let count = 1;

    let delivery_point_icons = document.querySelectorAll('.point__icon');

    let delivery_point_desc = document.querySelectorAll('.point__title_description');

    for(let i = 0; i < delivery_point_icons.length; i++){
        delivery_point_icons[i].addEventListener('click', ()=>{
            if(count % 2 != 0){
                delivery_point_desc[i].style.display = 'block';
                delivery_point_icons[i].style.transform = 'rotate(180deg)';
                count += 1;
            }else{
                delivery_point_desc[i].style.display = 'none';
                delivery_point_icons[i].style.transform = 'rotate(0deg)';
                count -= 1;
            }
            
        })
    }
}