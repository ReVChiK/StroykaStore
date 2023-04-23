export function SetSrcImg(selector, arr_img){
    for(let i = 0; i < selector.length; i++){
        selector[i].src = arr_img[i];
    }
    
}

export function SetSrcOnlyOnceImg(selector, img){
    selector.forEach(element => {
        element.src = img;
    });
}

export function SetBackgroundFon(selector, backgroundImg){
    selector.forEach(element => {
        element.style.background = `url(${backgroundImg})`;
        element.style.backgroundRepeat = 'no-repeat';
        element.style.backgroundSize = 'cover';
    });
}

export function Slider(selector_fon, selector_btn_left, selector_btn_right, slide_1_img, slide_2_img){
    
    let count = 1;

    for(let i = 0; i < selector_btn_left.length; i++){
        selector_btn_left[i].addEventListener('click', function(){
            count -= 1;
            if(count % 2 == 0){
                selector_fon[i].style.backgroundBlendMode = 'multiply';
                selector_fon[i].style.background = 'linear-gradient(73.49deg, #F6F6F6 12.24%, rgba(255, 255, 255, 0) 49.34%)';
                selector_fon[i].style.backgroundSize = 'cover';
                selector_fon[i].style.backgroundRepeat = 'no-repeat';
                selector_fon[i].style.backgroundImage = `url(${slide_2_img})`;
            }else{
                selector_fon[i].style.backgroundBlendMode = 'multiply';
                selector_fon[i].style.background = 'linear-gradient(73.49deg, #F6F6F6 12.24%, rgba(255, 255, 255, 0) 49.34%)';
                selector_fon[i].style.backgroundSize = 'cover';
                selector_fon[i].style.backgroundRepeat = 'no-repeat';
                selector_fon[i].style.backgroundImage = `url(${slide_1_img})`;
            }
        })
    }

    for(let j = 0; j < selector_btn_right.length; j++){
        selector_btn_right[j].addEventListener('click', function(){
            count += 1
            if(count % 2 == 1){
                selector_fon[j].style.backgroundBlendMode = 'multiply';
                selector_fon[j].style.background = 'linear-gradient(73.49deg, #F6F6F6 12.24%, rgba(255, 255, 255, 0) 49.34%)';
                selector_fon[j].style.backgroundSize = 'cover';
                selector_fon[j].style.backgroundRepeat = 'no-repeat';
                selector_fon[j].style.backgroundImage = `url(${slide_1_img})`;
            }else{
                selector_fon[j].style.backgroundBlendMode = 'multiply';
                selector_fon[j].style.background = 'linear-gradient(73.49deg, #F6F6F6 12.24%, rgba(255, 255, 255, 0) 49.34%)';
                selector_fon[j].style.backgroundSize = 'cover';
                selector_fon[j].style.backgroundRepeat = 'no-repeat';
                selector_fon[j].style.backgroundImage = `url(${slide_2_img})`;
            }
        })
    }

    for(let n = 0; n < selector_fon.length; n++){
        if(count > 0 && count < 2){
            selector_fon[n].style.backgroundBlendMode = 'multiply';
            selector_fon[n].style.background = 'linear-gradient(73.49deg, #F6F6F6 12.24%, rgba(255, 255, 255, 0) 49.34%)';
            selector_fon[n].style.backgroundSize = 'cover';
            selector_fon[n].style.backgroundRepeat = 'no-repeat';
            selector_fon[n].style.backgroundImage = `url(${slide_1_img})`;
        }
    }
}