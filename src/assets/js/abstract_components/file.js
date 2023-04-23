function Set_Link_Path_File(selector, file){
    selector.forEach(element => {
        element.href = file
    });
}

export default Set_Link_Path_File;