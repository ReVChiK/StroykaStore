export function ReviewsCarousel(btn_left, btn_right, reviews_content, reviews_item){
    
    let activedItems = 3;
    let amountReviewItems = reviews_item.length - 1;

    let startTransformX = 0;
    let transformX = 392;
    let endTransformX = transformX * amountReviewItems;

    for(let i = 0; i < btn_right.length; i++){
        btn_right[i].onclick = ()=>{
            if(startTransformX < endTransformX && activedItems <= amountReviewItems){
                startTransformX += transformX;
                reviews_content[i].style.transform = "translateX(" + (-startTransformX) + "px)";
                activedItems += 1;
            }
            else{
                startTransformX = 0;
                reviews_content[i].style.transform = "translateX(" + startTransformX + "px)";
                activedItems = 3;
            }
        }
    }

    for(let j = 0; j < btn_left.length; j++){
        btn_left[j].onclick = ()=>{
            if(startTransformX > 0 && activedItems > 3){
                startTransformX -= transformX;
                reviews_content[j].style.transform = "translateX(" + (-startTransformX) + "px)";
                activedItems -= 1;
            }
        }
    }
}