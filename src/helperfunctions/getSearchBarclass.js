export function getSearchBarClass(isHomePage){
    console.log(isHomePage);
    if(isHomePage){
       return 'searchbar'
    }else{
       return 'searchbarNotHome'
    }
}