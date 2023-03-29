import '../sass/style.sass';
import Webpack_Main from './functions.js';
import Main from './events/events';
import { Brands_Kinds, Brands_List } from './components/brands';
import { OpenSignInWindow, OpenSignUpWindow } from './components/profile';

function Index(){
    Webpack_Main();
    Main();

    Brands_Kinds();
    Brands_List();

    OpenSignInWindow();
    OpenSignUpWindow();
}

window.addEventListener('DOMContentLoaded', Index);

