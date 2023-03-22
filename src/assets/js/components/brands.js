
export function Brands_Kinds(){
    let array_top_menu_kinds = [
        'Все', 'A', 'B', 'C', 'D', 'E', 'F', 'G',
        'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P',
        'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'Z',
        'А', 'Б', 'В', 'Г', 'Д', 'Е', 'Ж', 'З', 'И',
        'К', 'Л', 'М', 'Н', 'О', 'П', 'Р', 'С', 'Т', 'У',
        'Ф', 'Ш', 'Э', 'Я'
    ]

    let top_menu_kinds = document.querySelectorAll('.kind-btn');

    for(let i = 0; i < top_menu_kinds.length; i++){
        top_menu_kinds[i].textContent = array_top_menu_kinds[i];
    }

}

export function Brands_List(){
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

    let brands_letters = document.querySelectorAll('.brands-letter');

    let brands_kinds_link = document.querySelectorAll('.item_list__link');

    for(let i = 0; i < brands_letters.length; i++){
        brands_letters[i].textContent = arr_letter[i];
    }

    for(let j = 0; j < brands_kinds_link.length; j++){
        brands_kinds_link[j].textContent = arr_list[j];
    }
    
}