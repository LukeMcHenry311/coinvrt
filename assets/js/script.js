var coinApiPrefix = "https://api.coinpaprika.com/v1/coins"
var exchangeApiKey = "https://v6.exchangerate-api.com/v6/&f0106a145afb8388dcf1f3d0"

//search token
$("button").on("click", function(event){
    // var search = this.closest("input").val()
    console.log((event.target).closest("input"));

    fetch(coinApiPrefix).then(function(response){
        response.json().then(function(data){
            // $("#coin-name-1").text(data)
        })
    })
})

//display name
