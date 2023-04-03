export function ReviewsCarousel(){
    let reviewBtnPrev = document.querySelectorAll('.btn-left');
    let reviewBtnNext = document.querySelectorAll('.btn-right');

    let reviewContent = document.querySelectorAll('.reviews-container__listing_content');

    let reviewListingItems = document.querySelectorAll('.review-listing__item');

    let activedItems = 3;
    let amountReviewItems = reviewListingItems.length - 1;

    let startTransformX = 0;
    let transformX = 392;
    let endTransformX = transformX * amountReviewItems;

    for(let i = 0; i < reviewBtnNext.length; i++){
        reviewBtnNext[i].onclick = ()=>{
            if(startTransformX < endTransformX && activedItems <= amountReviewItems){
                startTransformX += transformX;
                reviewContent[i].style.transform = "translateX(" + (-startTransformX) + "px)";
                activedItems += 1;
            }
            else{
                startTransformX = 0;
                reviewContent[i].style.transform = "translateX(" + startTransformX + "px)";
                activedItems = 3;
            }
        }
    }

    for(let j = 0; j < reviewBtnPrev.length; j++){
        reviewBtnPrev[j].onclick = ()=>{
            if(startTransformX > 0 && activedItems > 3){
                startTransformX -= transformX;
                reviewContent[j].style.transform = "translateX(" + (-startTransformX) + "px)";
                activedItems -= 1;
            }
        }
    }
}