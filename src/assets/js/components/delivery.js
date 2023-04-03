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