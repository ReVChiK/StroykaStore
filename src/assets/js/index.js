import '../sass/style.sass';

import Events from './events/events';
import Functions from './functions.js';

import Profile from './components/profile';

function IndexProfile(){
    let profile = new Profile()

    profile.redirectProfile();

    profile.SignIn_Close_Modal();

    profile.OpenSignUpWindow();
    profile.SignUp_Close_Modal();

    profile.userData_Profile();
}

function Index(){
    Functions();
    Events();

    IndexProfile();
}

window.addEventListener('DOMContentLoaded', Index);

