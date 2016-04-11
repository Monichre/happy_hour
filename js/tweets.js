

    //Callback functions
    var error = function (err, response, body) {
        console.log('ERROR [%s]', err);
    };
    var success = function (data) {
        console.log('Data [%s]', data);
    };

    

    //Get this data from your twitter apps dashboard
    var config = {
        "consumerKey": "1rwxopHjn7gi7MP72xoAXtiIl",
        "consumerSecret": "GKplXtuyYXl1jl6sYwxOD8SeXz2n5mW2nRnovVwqae4DlXV2mW",
        "accessToken": "707759691963564032-iHE4VD7XSING2mggRcfiJ8aRpKhfBaa",
        "accessTokenSecret": "XI6qykHaliyZCGI4kk1I23FuU5ILqKhljKHuEonblPNu6",
        "callBackUrl": "https://api.twitter.com/1.1/search/tweets.json"
    }

$(document).ready(function (){


    var twitter = new Twitter(config);

    console.log(twitter.getSearch({'q':'#haiku','count': 10}, error, success));
    console.log("im working");
});