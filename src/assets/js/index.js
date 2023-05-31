import '../sass/style.sass';
import '../sass/media/media.sass';

import Events from './events/events';
import Functions from './functions.js';

import Profile from './components/profile';
import { Search_Product } from './components/globalSearch';

function IndexProfile(){
    let profile = new Profile()

    profile.redirectProfile();

    profile.SignIn_Close_Modal();

    profile.OpenSignUpWindow();
    profile.SignUp_Close_Modal();

    profile.userData_Profile();
    profile.exitProfile();
}

function Index(){
    Functions();
    Events();

    IndexProfile();
    Search_Product();
}

window.addEventListener('DOMContentLoaded', Index);

