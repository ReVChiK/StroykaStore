export function OpenSignInWindow(){
    let profile_link = document.querySelectorAll('.menu__link_profile');

    let signInWindow = document.querySelectorAll('.sign-in');

    for(let i = 0; i < profile_link.length; i++){
        profile_link[i].addEventListener('click', ()=>{
            signInWindow[i].style.display = 'block'
        })
    }
}

export function OpenSignUpWindow(){
    let signInButton_CreateAccount = document.querySelectorAll('.btn__create_account');

    let signUpWindow = document.querySelectorAll('.sign-up');
    let signInWindow = document.querySelectorAll('.sign-in');

    for(let i = 0; i < signInButton_CreateAccount.length; i++){
        signInButton_CreateAccount[i].addEventListener('click', ()=>{
            signUpWindow[i].style.display = 'block';
            signInWindow[i].style.display = 'none';
        })
    }
}