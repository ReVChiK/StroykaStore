
let catalogProviders = [
    'Аксон', 'A-progress.ru', 'Дешево-Строй', 'ГдеМатериал', 'ГлавСнаб', 
    'Гермес Групп', 'Маркет-Строй', 'МосДоброСтрой', 'Сатурн', 'Ремонт 3000', 'Roof&Facade', 'Строительный двор', 'Skladom.ru', 'Smart Complect', 'Конструктор', 'RDS Строй', 'Строительный Онлайн', 'Стройкомплект', 'Строительный Мир', 'Stroimaterial Moskva', 'Стройландия', 'Stroy Shopper'
]

export function RedirectCatalog(){
    const catalogBtn = document.querySelectorAll('#btn-catalog');

    catalogBtn.forEach(btn => {
        btn.onclick = ()=>{
            window.open('../../catalog/catalog.html', '_self')
        }
    });
}

export function Catalog_Providers_Component(parentSelector){
    for(let i = 0; i < catalogProviders.length; i++){
        parentSelector.forEach(selector=>{

            const providerItem = document.createElement('div');

            if(i == 0){
                providerItem.classList.add('provider__item', 'active')
            }else{
                providerItem.classList.add('provider__item')
            }

            const providerItem_link = document.createElement('a');
            providerItem_link.classList.add('provider__item_link');
            providerItem_link.href = '#';
            providerItem_link.textContent = catalogProviders[i];

            providerItem.append(providerItem_link);

            selector.appendChild(providerItem);

        })
    }
}

export function Choose_Provider(provider_selectors){
    for(let i = 0; i < provider_selectors.length; i++){
        provider_selectors[i].onclick = ()=>{
            provider_selectors.forEach(element => {
                element.classList.remove('active');
            });
            provider_selectors[i].classList.add('active');
        }
    }
}