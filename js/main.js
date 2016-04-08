	//****************************************************************

	var auth = { 
	    consumerKey: "pu0FZK1NCYaEjpeB4knDZw", 
	    consumerSecret: "aibygSsZLkPTUm_xwUFEvrnUeZc",
	    accessToken: "DKxSZz29f_SzJ6z3rc2jhuZQ5xdaTkiw",
	    accessTokenSecret: "4-BdFvqqfWR8q5ZhzUQ_fwlQEco",
	  };
	//*****************************************************************

		var terms = 'happy hour';
	  	var near = 'Portland';
	  	var sort = 0;
	  	var radius_filter = 8000;

	  var accessor = {
	    consumerSecret: auth.consumerSecret,
	    tokenSecret: auth.accessTokenSecret
	  };

	  var parameters = [];
	  parameters.push(['sort', sort]);
	  parameters.push(['location', near]);
	  parameters.push(['radius_filter', radius_filter]);
	  parameters.push(['location', near]);
	  parameters.push(['oauth_consumer_key', auth.consumerKey]);
	  parameters.push(['oauth_consumer_secret', auth.consumerSecret]);
	  parameters.push(['oauth_token', auth.accessToken]);

	  var message = { 
	    'action': 'http://api.yelp.com/v2/search',
	    'method': 'GET',
	    'parameters': parameters 
	  };

	  OAuth.setTimestampAndNonce(message);  

	  OAuth.SignatureMethod.sign(message, accessor);

	  var parameterMap = OAuth.getParameterMap(message.parameters);
	  parameterMap.oauth_signature = OAuth.percentEncode(parameterMap.oauth_signature)

	  var url = OAuth.addToURL(message.action,parameterMap);
	  var response = UrlFetchApp.fetch(url).getContentText();
	  var responseObject = Utilities.jsonParse(response);
	  //have my JSON object, do whatever we want here, like add to spreadsheets