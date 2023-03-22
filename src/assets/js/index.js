import '../sass/style.sass';
import Webpack_Main from './functions.js';
import Main from './events/events';
import { Brands_Kinds, Brands_List } from './components/brands';

function Index(){
    Webpack_Main();
    Main();
    Brands_Kinds();
    Brands_List();
}

window.addEventListener('DOMContentLoaded', Index);

