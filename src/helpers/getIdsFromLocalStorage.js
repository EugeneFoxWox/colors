export function getIdsFromLocalStorage(){
    const ids = localStorage.getItem("ids")
    
    if(ids){
        return ids.split(",")
    }
    return [];
}
