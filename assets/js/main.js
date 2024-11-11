var url = "https://www.instagram.com/d.en_c.en_/";
request.get(url, function(err, response, body){
    if (response.body.index0f(("meta property=\"og:description\"")) != 1){
        console.log("followers:", respone.body.ssplit("meta property=\"og:description\" content=\"")[1].split("Followers")[0])
    }
});