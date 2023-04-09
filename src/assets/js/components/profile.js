
import Swal from "sweetalert2";

class Profile{

    __userData = {
        userName: '',
        userSurname: '',
        userBirthday: '',
        userPhone: '',
        userEmail: '',
        userPassword: '',
        userConfirmPassword: ''
    }

    SignIn_Close_Modal(){
        let signIn_btn_close = document.querySelectorAll('.sign-in__btn_close');
    
        let signInModal = document.querySelectorAll('.sign-in');
    
        for(let i = 0; i < signIn_btn_close.length; i++){
            if(signInModal[i].style.display == 'block'){
                signIn_btn_close[i].addEventListener('click', ()=>{
                    signInModal[i].style.display = 'none';
                })
            }else{
                signIn_btn_close[i].addEventListener('click', ()=>{
                    signInModal[i].style.display = 'none'
                })
            }
        }
    }

    OpenSignUpWindow(){
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

    SignUp_Close_Modal(){
        let signUp_btn_close = document.querySelectorAll('.sign-up__btn_close');
    
        let signUpModal = document.querySelectorAll('.sign-up');
    
        for(let i = 0; i < signUp_btn_close.length; i++){
            signUp_btn_close[i].addEventListener('click', ()=>{
                signUpModal[i].style.display = 'none'
            })
        }
    }

    redirectProfile(){

        let response;

        let profile_link = document.querySelectorAll('.menu__link_profile');

        let profile_signIn = document.querySelectorAll('.sign-in');
        let profile_signIn_button = document.querySelectorAll('.btn__sign_in');

        let profile_signUp = document.querySelectorAll('.sign-up');
        let profile_signUp__button_reg = document.querySelectorAll('.btn__sign_up');

        let signIn_Input_Email = document.querySelectorAll('.sign-in__input_email');
        let signIn_Input_Password = document.querySelectorAll('.sign-in__input_password');

        let signUp__Items = document.querySelectorAll('.sign-up__input');
        let signUp_Input_Name = document.querySelectorAll('.sign-up__input_name');
        let signUp_Input_Email = document.querySelectorAll('.sign-up__input_email');
        let signUp_Input_NewPassword = document.querySelectorAll('.sign-up__inputNew_password');
        let signUp_Input_ConfirmPasswordd = document.querySelectorAll('.sign-up__inputConfirm_password');

        for(let i = 0; i < profile_link.length; i++){
            if(localStorage.getItem('user') != null){
                profile_link[i].href = '../../../pages/profile.html';
            }else{
                profile_link[i].onclick = ()=>{
                    profile_signIn[i].style.display = 'block';

                    profile_signIn_button[i].onclick = ()=>{
                        if(localStorage.getItem('user') != null){
                            response = JSON.parse(localStorage.getItem('user'));

                            if(signIn_Input_Email[i].value != response.userEmail || signIn_Input_Password[i].value != response.userPassword){
                                Swal.fire({
                                    icon: 'error',
                                    title: 'Ошибка ввода данных.',
                                    text: 'Пожалуйста, введите корректные данные.'
                                })
                            }else{
                                window.open('../../../pages/profile.html', '_self')
                            }
                        }else{
                            Swal.fire({
                                icon: 'warning',
                                title: 'Ошибка.',
                                text: 'Вы не зарегистрированы. Пожалуйста, создайте учётную запись.'
                            })
                        }
                    }

                }
            }
        }

        for(let j = 0; j < profile_signUp__button_reg.length; j++){
            profile_signUp__button_reg[j].onclick = ()=>{
                if(signUp__Items[j].value != ''){
                    this.__userData.userName = signUp_Input_Name[j].value;

                    this.__userData.userEmail = signUp_Input_Email[j].value;

                    if(signUp_Input_NewPassword[j].value != signUp_Input_ConfirmPasswordd[j].value){
                        Swal.fire({
                            icon: 'error',
                            title: 'Ошибка ввода данных.',
                            text: 'Введенные пароли не совпадают'
                        })
                    }else{
                        this.__userData.userPassword = signUp_Input_NewPassword[j].value;

                        this.__userData.userConfirmPassword = signUp_Input_ConfirmPasswordd[j].value;

                        localStorage.setItem('user', JSON.stringify(this.__userData))

                        profile_signIn[j].style.display = 'block';
                        profile_signUp[j].style.display = 'none';
                    }
                }else{
                    Swal.fire({
                        icon: 'error',
                        title: 'Ошибка заполнения.',
                        text: 'Пожалуйста, заполните пропущенные поля.'
                    })
                }
            }
        }

    }

    userData_Profile(){

        let profileWindowEdit = document.querySelectorAll('.edit');
        let profileWindowShow = document.querySelectorAll('.show');

        let savedProfileName_Field = document.querySelectorAll('.saved_profile_name');
        let savedProfileSurname_Field = document.querySelectorAll('.saved_profile_surname');
        let savedProfileBirthday_Field = document.querySelectorAll('.saved_profile_birthday');
        let savedProfilePhone_Field = document.querySelectorAll('.saved_profile_phone');
        let savedProfileEmail_Field = document.querySelectorAll('.saved_profile_email');

        let profileName_Input = document.querySelectorAll('.profile__data_name');
        let profileSurname_Input = document.querySelectorAll('.profile__data_surname');
        let profileBirthday_Input = document.querySelectorAll('.profile__data_birthday');
        let profilePhone_Input = document.querySelectorAll('.profile__data_phone');
        let profileEmail_Input = document.querySelectorAll('.profile__data_email');
        let profilePassword_Input = document.querySelectorAll('.profile__data_password');
        let profileConfirmPassword_Input = document.querySelectorAll('.profile__data_confirm_password');

        let saveProfileButton = document.querySelectorAll('.profile__saved');
        let editProfileButton = document.querySelectorAll('.profile__edit');

        let profileData = JSON.parse(localStorage.getItem('user'));

        savedProfileName_Field.forEach(name=>{
            name.children[0].textContent = profileData.userName;
        })
        savedProfileSurname_Field.forEach(surname=>{
            if(profileData.userSurname != ''){
                surname.children[0].textContent = profileData.userSurname;
                return;
            }
            surname.children[0].textContent = 'Не указано'
        })
        savedProfileBirthday_Field.forEach(birth=>{
            if(profileData.userBirthday != ''){
                birth.children[0].textContent = profileData.userBirthday;
                return;
            }
            birth.children[0].textContent = 'Не указано';
        })
        savedProfilePhone_Field.forEach(phone=>{
            if(profileData.userPhone != ''){
                phone.children[0].textContent = profileData.userPhone;
                return;
            }
            phone.children[0].textContent = 'Не указано';
        })
        savedProfileEmail_Field.forEach(email=>{
            if(profileData.userEmail != ''){
                email.children[0].textContent = profileData.userEmail;
                return;
            }
            email.children[0].textContent = 'Не указано';
        })

        for(let i = 0; i < editProfileButton.length; i++){
            editProfileButton[i].onclick = ()=>{
                profileWindowShow[i].style.display = 'none';
                profileWindowEdit[i].style.display = 'block';

                if(profileData.userName != ''){
                    profileName_Input[i].value = profileData.userName;
                }

                if(profileData.userSurname != ''){
                    profileSurname_Input[i].value = profileData.userSurname;
                }
                

                if(profileData.userBirthday != ''){
                    profileBirthday_Input[i].value = profileData.userBirthday.split('-').reverse().join('-');
                }
                

                if(profileData.userPhone != ''){
                    profilePhone_Input[i].value = profileData.userPhone;
                }
                

                if(profileData.userEmail != ''){
                    profileEmail_Input[i].value = profileData.userEmail;
                }

                if(profileData.userPassword != ''){
                    profilePassword_Input[i].value = profileData.userPassword;
                }

                if(profileData.userConfirmPassword != ''){
                    profileConfirmPassword_Input[i].value = profileData.userConfirmPassword;
                }
            }
        }

        for(let j = 0; j < saveProfileButton.length; j++){
            saveProfileButton[j].onclick = ()=>{
                if(profileData.userName != ''){
                    this.__userData.userName = profileData.userName;
                }else{
                    this.__userData.userName = profileName_Input[j].value;
                }

                if(profileData.userName != profileName_Input[j].value){
                    this.__userData.userName = profileName_Input[j].value;
                }

                if(profileData.userSurname != ''){
                    this.__userData.userSurname = profileData.userSurname;
                }else{
                    this.__userData.userSurname = profileSurname_Input[j].value;
                }

                if(profileData.userSurname != profileSurname_Input[j].value){
                    this.__userData.userSurname = profileSurname_Input[j].value;
                }
                

                if(profileData.userBirthday != ''){
                    this.__userData.userBirthday = profileData.userBirthday;
                }else{
                    this.__userData.userBirthday = profileBirthday_Input[j].value.split('-').reverse().join('-');
                }
                
                if(profileData.userBirthday != profileBirthday_Input[j].value){
                    this.__userData.userBirthday = profileBirthday_Input[j].value.split('-').reverse().join('-');
                }

                if(profileData.userPhone != ''){
                    this.__userData.userPhone = profileData.userPhone;
                }else{
                    this.__userData.userPhone = profilePhone_Input[j].value;
                }

                if(profileData.userPhone != profilePhone_Input[j].value){
                    this.__userData.userPhone = profilePhone_Input[j].value;
                }
                

                if(profileData.userEmail != ''){
                    this.__userData.userEmail = profileData.userEmail;
                }else{
                    this.__userData.userEmail = profileEmail_Input[j].value;
                }

                if(profileData.userEmail != profileEmail_Input[j].value){
                    this.__userData.userEmail = profileEmail_Input[j].value;
                }

                if(profileData.userPassword != ''){
                    this.__userData.userPassword = profileData.userPassword;
                }else{
                    this.__userData.userPassword = profilePassword_Input[j].value;
                }

                if(profileData.userPassword != profilePassword_Input[j].value){
                    this.__userData.userPassword = profilePassword_Input[j].value;
                }

                if(profileData.userConfirmPassword != ''){
                    this.__userData.userConfirmPassword = profileData.userConfirmPassword;
                }else{
                    this.__userData.userConfirmPassword = profileConfirmPassword_Input[j].value;
                }

                if(profileData.userConfirmPassword != profileConfirmPassword_Input[j].value){
                    this.__userData.userConfirmPassword = profileConfirmPassword_Input[j].value;
                }

                console.log(this.__userData);
                
                localStorage.setItem('user', JSON.stringify(this.__userData));

                window.location.reload();
            }
        }

    }
}

export default Profile
