export function Hover_Elements(selector_link, selector_item){
    for(let i = 0; i < selector_link.length; i++){
        selector_link[i].onmouseover = ()=>{
            selector_item[i].style.display = 'block';
        };
        selector_link[i].onmouseout = ()=>{
            selector_item[i].style.display = 'none'
        }
    }
}