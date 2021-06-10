var coinApiPrefix = "https://api.coinpaprika.com/v1/"
var exchangeApiKey = "https://v6.exchangerate-api.com/v6/&f0106a145afb8388dcf1f3d0"


//search token 1
$("#button-1").click(function(){
    //search term value
    var searchTerm = $("#search-1").val()
    //get data value
    fetch(coinApiPrefix + "search?q=" + searchTerm).then(function(response){
        response.json().then(function(data){
            //set name 1
            $("#coin-name-1").text(data.currencies[0].name)
            $("#ticker-1").text("Ticker Symbol: " + data.currencies[0].symbol)
            //get coin price
            fetch(coinApiPrefix + "tickers/" + data.currencies[0].id).then(function(response){
                response.json().then(function(data){
                    var convert = data.quotes.USD.price
                    fetch('https://v6.exchangerate-api.com/v6/2b123b2e2008af090ae16479/latest/USD')
                    .then(response => response.json())
                    .then(data => console.log(data));
                    //price data display
                    $("#price-1").text("Current Price: $" + (data.quotes.USD.price).toFixed(2))
                    if(data.quotes.USD.percent_change_24h > 0){
                        $("#arrow-1").addClass("oi oi-arrow-circle-top")
                    }
                    else if(data.quotes.USD.percent_change_24h < 0){
                        $("#arrow-1").addClass("oi oi-arrow-circle-bottom")
                    }
                    $(".save-button").click(function() {

                        var button1Info = {
                            name: $("#coin-name-1").val(),
                            ticker: $("#ticker-1").val(),
                            price: $("#price-1").val(),
                            rate: $("#rate-1").val()
                        };
                        
                    
                        console.log(JSON.stringify($("#coin-name-1").val()));
                        
                    })
                })
            })
            
        })
    })
    /* add modal? if nothing is submitted,,, if(searchTerm === "") {
        alert("nothing was submitted please type in your crypto by name.");
} */
})


//search token 2
$("#button-2").click(function(){
    //search term value
    var searchTerm = $("#search-2").val()
    //get data from api
    fetch(coinApiPrefix + "search?q=" + searchTerm).then(function(response){
        response.json().then(function(data){
            //set name 2
            $("#coin-name-2").text(data.currencies[0].name)
            $("#ticker-2").text("Ticker Symbol: " + data.currencies[0].symbol)
            $("#price-2")
            //get price info
            fetch(coinApiPrefix + "tickers/" + data.currencies[0].id).then(function(response){
                response.json().then(function(data){
                    //display price info
                    $("#price-2").text("Current Price: $" + (data.quotes.USD.price).toFixed(2))
                    if(data.quotes.USD.percent_change_24h > 0){
                        $("#arrow-2").addClass("oi oi-arrow-circle-top")
                    }
                    else if(data.quotes.USD.percent_change_24h < 0){
                        $("#arrow-2").addClass("oi oi-arrow-circle-bottom")
                    }
                    $("#search-2").click("click", function(){
                        var button2Info = {
                            name: $("#coin-name-2").val(),
                            ticker: $("#ticker-2").val(),
                            price: $("#price-2").val(),
                            rate: $("#rate-2").val()
                        };
                        
                    })
                   
                    console.log(JSON.stringify($("#coin-name-2").val()));
                })
            })
        })
        
    })

    
})


   
