import data from '../../../resources/resource.json5';

function GetData(){
    for(let i = 0; i < data.products.length; i++){
        for(let item in data.products[i]){
            console.log(item + "-" + data.products[i][item]);
        }
    }
}

export default GetData;