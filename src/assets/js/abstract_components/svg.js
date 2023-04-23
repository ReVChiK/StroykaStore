export function SetSvgIcon(selector, icon){
    selector.forEach(element => {
        element.innerHTML = icon
    });
}

export function SetSvgIcons(selector, icons){
    for(let i = 0; i < selector.length; i++){
        selector[i].innerHTML = icons[i]
    }
}

export function SetLogo(selector, logoIcon){
    selector.forEach(element => {
        element.innerHTML = logoIcon;
    });
}