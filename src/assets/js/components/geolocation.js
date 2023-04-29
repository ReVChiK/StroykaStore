
let geolocationCities = [
    "Москва", "Екатеринбург", "Челябинск", "Уфа",
    "Воронеж", "Санкт-Петербург", "Казань", "Самара", "Омск",
    "Пермь", "Новосибирск", "Нижний Новгород", "Ростов-на-Дону",
    "Красноярск", "Волгоград", "Краснодар", "Саратов", "Тюмень",
    "Тольятти", "Барнаул", "Ижевск", "Махачкала", "Хабаровск", "Ульяновск", "Иркутск", "Ярославль", "Владивосток", "Кемерово", "Томск", "Севастополь", "Набережные Челны", "Ставрополь", "Оренбург", "Новокузнецк", "Рязань", "Астрахань", "Балашиха", "Пенза", "Липецк", "Чебоксары", "Калининград", "Киров", "Тула", "Сочи", "Курск", "Улан-уде", "Тверь", "Магнитогорск", "Брянск", "Сургут", "Белгород", "Иваново", "Якутск", "Владимир", "Симферополь", "Нижний Тагил", "Калуга", "Чита", "Грозный", "Волжский", "Смоленск", "Подольск", "Саранск", "Вологда", "Курган", "Череповец", "Орёл", "Архангельск", "Владикавказ", "Тамбов", "Йошкар-Ола", "Нижневартовск", "Стерлитамак", "Кострома", "Мурманск", "Новороссийск", "Химки", "Мытище", "Нальчик", "Таганрок", "Нижнекамск", "Комсомольск-на-Амуре", "Петразоводск", "Королёв", "Шахты", "Благовещенск", "Энгельс", "Великий Новгород", "Люберцы", "Братск", "Сыктывкар", "Зеленоград", "Нижнекамск", "Порхов", "Псков"
]

export function Open_Modal_Window(){

    let modal_window = document.querySelectorAll('.geolocation');

    let modal_btn_open = document.querySelectorAll('.cities-name');

    for(let i = 0; i < modal_btn_open.length; i++){
        modal_btn_open[i].addEventListener('click', ()=>{
            modal_window[i].style.display = 'block';
        })
    }

}

export function Close_Modal_Window(){

    let modal_window = document.querySelectorAll('.geolocation');

    let modal_btn_close = document.querySelectorAll('.geolocation-btn__close');

    for(let i = 0; i < modal_btn_close.length; i++){
        modal_btn_close[i].addEventListener('click', ()=>{
            modal_window[i].style.display = 'none';
        })
    }

}

export function SetCities_Geolocation(selector_cities){
    for(let i = 0; i < selector_cities.length; i++){
        selector_cities[i].children[0].textContent = geolocationCities[i]
    }
}

export function Search_Gelocation_Cities(id_search_input,search_input_button, selector_cities){

    search_input_button.forEach(element => {
        element.onclick = ()=>{
            if(geolocationCities.indexOf(capitalize(id_search_input.value)) == -1){
                selector_cities.forEach(el=>{
                    el.style.display = 'none'
                })
            }else{
                selector_cities.forEach(el=>{
                    el.style.display = 'none'
                })
    
                selector_cities[0].children[0].textContent = geolocationCities[geolocationCities.indexOf(capitalize(id_search_input.value))]
                selector_cities[0].style.display = 'block';
            }
        }
    });

    id_search_input.addEventListener('change', ()=>{
        if(geolocationCities.indexOf(capitalize(id_search_input.value)) == -1){
            selector_cities.forEach(el=>{
                el.style.display = 'none'
            })
        }else{
            selector_cities.forEach(el=>{
                el.style.display = 'none'
            })

            selector_cities[0].children[0].textContent = geolocationCities[geolocationCities.indexOf(capitalize(id_search_input.value))]
            selector_cities[0].children[0].style.display = 'block';
        }

    })

    id_search_input.addEventListener('input', ()=>{
        if(id_search_input.value === ""){
            selector_cities.forEach(el=>{
                el.style.display = 'block'
            })
        }
    })

}

export function Choose_Geolocation_Cities(selector_city_name, selector_cities){

    if(localStorage.length != 0){
        selector_city_name.forEach(el=>{
            el.textContent = localStorage.getItem('city')
        })
    }

    selector_cities.forEach(elem=>{
        elem.onclick = ()=>{
            localStorage.setItem('city', elem.children[0].textContent)
            window.location.reload();
        }
    })
}

function capitalize(val){
    return val.charAt(0).toUpperCase() + val.substring(1)
}