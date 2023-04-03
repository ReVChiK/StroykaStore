
class Profile{
    
    OpenSignInWindow(){
        let profile_link = document.querySelectorAll('.menu__link_profile');

        let signInWindow = document.querySelectorAll('.sign-in');

        for(let i = 0; i < profile_link.length; i++){
            profile_link[i].addEventListener('click', ()=>{
                signInWindow[i].style.display = 'block'
            })
        }
    }

    SignIn_Close_Modal(){
        let signIn_btn_close = document.querySelectorAll('.sign-in__btn_close');
    
        let signInModal = document.querySelectorAll('.sign-in');
    
        for(let i = 0; i < signIn_btn_close.length; i++){
            signIn_btn_close[i].addEventListener('click', ()=>{
                signInModal[i].style.display = 'none'
            })
        }
    }

    OpenSignUpWindow(){
        let signInButton_CreateAccount = document.querySelectorAll('.btn__create_account');

        let signUpWindow = document.querySelectorAll('.sign-up');
        let signInWindow = document.querySelectorAll('.sign-in');

        for(let i = 0; i < signInButton_CreateAccount.length; i++){
            signInButton_CreateAccount[i].addEventListener('click',     ()=>{
                signUpWindow[i].style.display = 'block';
                signInWindow[i].style.display = 'none';
            })
        }
    }

    SignUp_Close_Modal(){
        var signUp_btn_close = document.querySelectorAll('.sign-up__btn_close');
    
        var signUpModal = document.querySelectorAll('.sign-up');
    
        for(let i = 0; i < signUp_btn_close.length; i++){
            signUp_btn_close[i].addEventListener('click', ()=>{
                signUpModal[i].style.display = 'none'
            })
        }
    }
}

export default Profile
