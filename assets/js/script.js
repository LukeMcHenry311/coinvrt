var coinApiPrefix = "https://api.coinpaprika.com/v1/"
var exchangeApiKey = "https://v6.exchangerate-api.com/v6/&f0106a145afb8388dcf1f3d0"

//search token 1
$("#button-1").click(function(){
    //search term value
    var stuff = $("#search-1").val()
    //get data value
    fetch(coinApiPrefix + "search?q=" + stuff).then(function(response){
        response.json().then(function(data){
            //set name 1
            $("#coin-name-1").text(data.currencies[0].name)
            $("#ticker-1").text(data.currencies[0].symbol)
            $("#price-1")
        })
    })
})


//search token 2
$("#button-2").click(function(){
    //search term value
    var stuff = $("#search-2").val()
    //get data from api
    fetch(coinApiPrefix + "search?q=" + stuff).then(function(response){
        response.json().then(function(data){
            //set name 2
            $("#coin-name-2").text(data.currencies[0].name)
            $("#ticker-2").text(data.currencies[0].symbol)
            $("#price-2")
        })
    })
})

//display name
