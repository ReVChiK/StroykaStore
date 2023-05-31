export function Mobile_Manipulation_Menu(){
    let openMobile_menu = document.querySelectorAll('.icon__open_menu');
    let closeMobile_menu = document.querySelectorAll('.icon__close_menu');

    let mobileMenu = document.querySelectorAll('.header-container__mobile_menu');

    openMobile_menu.forEach((btn, index)=>{
        btn.onclick = ()=>{

            closeMobile_menu[index].style.display = 'block';
            mobileMenu[index].style.display = 'block';
            openMobile_menu[index].style.display = 'none';

        }
    })

    closeMobile_menu.forEach((btn, index)=>{
        btn.onclick = ()=>{

            closeMobile_menu[index].style.display = 'none';
            mobileMenu[index].style.display = 'none';
            openMobile_menu[index].style.display = 'block';

        }
    })
}