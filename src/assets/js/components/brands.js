import {SetAtrributes_BrandList, TextContent } from "../abstract_components/text";

let arr_letter = [
    'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J',
    'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T',
    'U', 'V', 'W', 'Z', 
    'А', 'Б', 'Г', 'Д', 'Е', 'Ж', 'З', 'И', 'К',
    'Л', 'М', 'Н', 'О', 'П', 'Р', 'С', 'Т', 'У', 'Ф',
    'Ш', 'Э', 'Я'
]

let arr_list = [
    'ASB-Woodline','Apecs', 'Azario', 'AVS', 'Appetite',
    'Alma Ceramica', 'Attribute', 'Alvaro-Banos', 
    'Auto Standart', 'Am.Pm', 'Axima', 'BLB', 'Belinka', 
    'Bussare', 'BOYSCOUT', 'Blocker', 'BRAVAT', 'Bosch', 
    'Belani', 'Bostik', 'Belezza', 'Braver', 'Cemmix', 
    'Ceresit', 'Ceramica Konskie', 'Ceramica Konskie', 
    'Ceresit', 'Ceresit', 'DAP', 'Docke', 'DARIIS', 'Dora', 
    'Damixa', 'Dufa', 'Deco Room', 'Dulux', 'Decoretto', 
    'Duschy', 'EKF', 'Elfe', 'Estima', 'ESKO', 'Elysium', 
    'EUROTEX', 'Energizer', 'Egger', 'Energy', 'Element', 
    'Erismann', 'Fischer', 'Fora', 'GP BATTERIES', 'Giaretti', 
    'Gracia Ceramica', 'Grohe', 'GRANICOM', 'Gimi', 'Grinda', 
    'GSHOSE', 'GlobalTile', 'Grohe', 'Gauss', 'Golden Tile', 
    'Gracia Ceramica', 'Gayafores', 'Goldman', 'Grinda', 
    'HARO', 'Hobby', 'HEGEL', 'Home Color', 'HELP', 'Husky', 
    'HENKEL', 'Huter', 'Hammer', 'IEK', 'IKA', 'IVC', 'Ideal', 
    'Jika', 'KLEO', 'Komar', 'Karcher', 'Kraftool', 
    'Kerama Marazzi', 'Krass', 'Kiilto', 'Kronostar', 
    'Kolner', 'LUX', 'Lemax', 'LaFavola', 'Leonord', 
    'Lasselsberger', 'Legrand', 'Lemark', 'METALTEX', 
    'Marburg', 'Milardo', 'MONETA', 'Marmiton', 'Monopole', 
    'Makel', 'Marshall', 'Murol', 'Makita', 'Matrix', 
    'Mallony', 'Meiwa Gravure Co., Ltd', 'NRAVA HOME', 
    'Norta', 'OLFA', 'P&P', 'Pasabahce', 'PALLADIUM', 
    'Phibo', 'PROSEPT', 'Plast team','Palisad', 'Polynor', 
    'Park', 'Power Cube', 'Quick-Step', 'Rasch', 'Rossinka', 
    'Realistik', 'Regent', 'Rehau', 'Roca', 'Safeline', 
    'Soudal', 'Salag', 'Stayer', 'Santool', 'Swensa', 
    'Schneider Electric', 'Sheffilton', 'T4P', 'Toplight', 
    'TRIUMPH NORD', 'Tarkett', 'Thermo', 'Tokito', 'UNICUM', 
    'UNIVERSAL', 'Unibob', 'Unicorn', 'VIDIMA', 'Vortex', 
    'VODA', 'Vents', 'Vernissage', 'Vincent', 'WAGO', 
    'Wester', 'Zalger', 'Ziber', 'АНИ', 'Альпа', 'АСБ-Мебель', 
    'Алюмет', 'Авангард', 'Арей', 'Аист', 'Артекс', 'Аквафор', 
    'Астрохим', 'Банные штучки', 'Барьер', 'Белвинил', 
    'Брянские обои', 'Бытпласт', 'Гипрофи', 'Двери.ру', 'ДорВуд', 
    'Дверной Континент', 'Дэта', 'Делга', 'Дельфа', 'Джоби', 
    'Еврокерамика', 'Едим Дома', 'Жук', 'Зеленая Аптека Садовода', 
    'Зенит', 'Зубр', 'Индустрия', 'Итана', 'Кедр', 'Контакт', 
    'Керамин', 'Континент', 'Колор Эксперт', 'Кукморский завод Металлопосуды',
    'Колорит', 'Комарофф', 'Лакра', 'Луга', 'Лесенка', 'Лукойл', 'Лесма',
    'Лесозавод', 'Лесстройпроект', 'Макрофлекс', 'Нева Тафт', 'Нрава', 'Нэфис', 
    'ОКСО', 'Олимп', 'Ондулин', 'Орио', 'ПРОМЕТ', 'Политэк', 'Пинотекс', 'Промрукав',
    'Пластик Репаблик', 'Профильдорс', 'Пластмаркет', 'Профилюкс', 'Полимербыт', 
    'Ресанта', 'Рифар', 'Рыжий кот', 'СИБИН', 'Сибртех', 'Старатели', 'СТН', 
    'СоюзБалтКомплект', 'Строитель', 'Сантек', 'Спарта', 'Ступино', 'Саратовские обои', 
    'Ставр', 'Сельмаш', 'Стальэмаль', 'ТДВ', 'ТОРН', 'Твоя Планета', 'Технолайн', 
    'Тритон', 'Уют', 'Фаско', 'Фертика', 'Формат', 'Фрекен Бок', 'Шахтинская плитка', 
    'Штрих', 'ЭКО', 'Эко НОМ', 'Эксперт', 'Яр краски', 'Ярославский антисептик'
]

const brands_kind = [
    'bever', 'braer', 'leonardo_stone', 'euro_block',
    'perfekta', 'mstera', 'lcp', 'galen', 'recke', 
    'mod_format', 'decra', 'engles'
]

export function Brands_List(){
    
    TextContent(document.querySelectorAll('.brands-letter'), arr_letter);

    SetAtrributes_BrandList(document.querySelectorAll('.brands-list__item'), arr_letter)

    TextContent(document.querySelectorAll('.item_list__link'), arr_list);
    
}

export function SortBrands(selector_btn, selector_brands){

    for(let i = 0; i < selector_btn.length; i++){

        selector_btn[i].onclick = (e)=>{

            let elem = e.target;

            if(elem.getAttribute('data-button-letter') === 'Все'){
                selector_brands.forEach(element => {
                    element.style.display = 'block';
                });

                selector_btn.forEach(btn=>{
                    btn.children[0].classList.remove('active');
                })

                elem.classList.add('active');
            }else{
                if(elem.getAttribute('data-button-letter') === selector_brands[i-1].getAttribute('data-letter')){
                    selector_brands.forEach(elem=>{
                        elem.style.display = 'none';
                    })

                    selector_btn.forEach(btn=>{
                        btn.children[0].classList.remove('active');
                    })

                    elem.classList.add('active');

                    selector_brands[i-1].style.display = 'block';
                }
            }

        }
    }

}

export function Add_Brand_Image(parentSelector, len, arr_img){

    for(let i = 0; i < len; i++){

        parentSelector.forEach(selector=>{

            const brandIconItem = document.createElement('div');
            brandIconItem.classList.add('icons-item');
            brandIconItem.setAttribute('data-brand-kind', brands_kind[i])

            const brandImgItem = document.createElement('img');
            brandImgItem.classList.add('icons-item__brand');
            brandImgItem.src = `${arr_img[i]}`;
            brandImgItem.alt = "brand";

            brandIconItem.append(brandImgItem);

            selector.appendChild(brandIconItem)

        })
    }

}

let array_top_menu_kind = [
    'Все', 'A', 'B', 'C', 'D', 'E', 'F', 'G',
    'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P',
    'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'Z'
]

export function Brand_Button_TopMenu(parentSelector){
    for(let i = 0; i < array_top_menu_kind.length; i++){
        parentSelector.forEach(selector => {
            
            const buttonTopKind = document.createElement('div');
            buttonTopKind.classList.add('kind');

            const buttonTopKindLetter = document.createElement('button');

            if(i == 0){
                buttonTopKindLetter.classList.add('kind-btn', 'all', 'active');
            }else{
                buttonTopKindLetter.classList.add('kind-btn', 'default')
            }

            buttonTopKindLetter.textContent = array_top_menu_kind[i];
            buttonTopKindLetter.setAttribute('data-button-letter', array_top_menu_kind[i]);

            buttonTopKind.append(buttonTopKindLetter);

            selector.appendChild(buttonTopKind);

        });
    }
}

let array_bottom_menu_kind = [
    'А', 'Б', 'Г', 'Д', 'Е', 'Ж', 'З', 'И', 'К', 'Л', 'М', 
    'Н', 'О', 'П', 'Р', 'С', 'Т', 'У', 'Ф', 'Ш', 'Э', 'Я'
]

export function Brand_Button_BottomMenu(parentSelector){
    for(let i = 0; i < array_bottom_menu_kind.length; i++){
        parentSelector.forEach(selector=>{

            const buttonBottomKind = document.createElement('div');
            buttonBottomKind.classList.add('kind');

            const buttonBottomKindLetter = document.createElement('button');
            buttonBottomKindLetter.classList.add('kind-btn', 'default')
            buttonBottomKindLetter.textContent = array_bottom_menu_kind[i];
            buttonBottomKindLetter.setAttribute('data-button-letter', array_bottom_menu_kind[i]);

            buttonBottomKind.append(buttonBottomKindLetter);

            selector.appendChild(buttonBottomKind);

        })
    }
}