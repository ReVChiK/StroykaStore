import '../sass/style.sass';
import Webpack_Main from './functions.js';
import Component from './components/components.js';

import Main from './events/events';

function Index(){
    Webpack_Main();
    Main();
    Component();
}

window.addEventListener('DOMContentLoaded', Index);

