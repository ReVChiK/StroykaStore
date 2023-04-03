export function Socks_Card_Quantity(){
    let card_buy_btns = document.querySelectorAll('.card-buy');

    let panels_card_quantity = document.querySelectorAll('.data-button__score');


    for(let i = 0; i < card_buy_btns.length; i++){
        card_buy_btns[i].addEventListener('click', ()=>{
            card_buy_btns[i].parentElement.style.display = 'none';
            panels_card_quantity[i].style.display = 'block';
        })
    }

    let quantity_btns_add = document.querySelectorAll('.btn-add');
    let quantity_btns_remove = document.querySelectorAll('.btn-remove');

    let inputs_quantity = document.querySelectorAll('.quantity');

    for(let j = 0; j < quantity_btns_add.length; j++){
        quantity_btns_add[j].addEventListener('click', ()=>{
            inputs_quantity[j].setAttribute('value', (parseInt(inputs_quantity[j].getAttribute('value')) + 1).toString());
        })
    }

    for(let l = 0; l < quantity_btns_remove.length; l++){
        quantity_btns_remove[l].addEventListener('click', ()=>{
            inputs_quantity[l].setAttribute('value', (parseInt(inputs_quantity[l].getAttribute('value')) - 1).toString());

            if(Number(inputs_quantity[l].value < 1)){
                inputs_quantity[l].setAttribute('value', 1);
                card_buy_btns[l].parentElement.style.display = 'block';
                panels_card_quantity[l].style.display = 'none';
            }
        })
    }
}