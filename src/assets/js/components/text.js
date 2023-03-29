export function TextContent(selector, arr_text){
    for(let i = 0; i < selector.length; i++){
        selector[i].textContent = arr_text[i]
    }
}