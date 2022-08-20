const url = "https://japceibal.github.io/emercado-api/cats_products/101.json"

function getJSONdata(url){
    let result = {};
    return fetch(url)
    .then(response => {
        if(response.ok){
            return response.json();
        }
    })
    .then(function(response){
        result.status = 'ok';
        result.data = response;
        return result;
    })
}