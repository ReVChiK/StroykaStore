import '../sass/style.sass';
import browser_icon from '../icons/free-icon-shop-4646941.png';

function Add_Favicon(){
    var link = document.querySelector("link[rel~='shortcut']");

    link.href = browser_icon;
}

Add_Favicon();
