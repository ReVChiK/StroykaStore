export function TextContent(selector, arr_text){
    for(let i = 0; i < selector.length; i++){
        selector[i].textContent = arr_text[i]
    }
}

export function SetAtrributes_BrandList(selector, arr_attr){
    for(let i = 0; i < selector.length; i++){
        selector[i].setAttribute('data-letter', arr_attr[i]);
    }
}

export function SetAttribute_ButtonList(selector, arr_attr){
    for(let i = 0; i < selector.length; i++){
        selector[i].setAttribute('data-button-letter', arr_attr[i]);
    }
}