// a learnupon api wrapper

function luFindUser(email) {
  if (!email) { var email = "brian.whalley@klaviyo.com" }
  
  var url = 'https://klaviyo.learnupon.com/api/v1/users/search?email=' + email;
  var headers = 
      {
        "Authorization" : "Basic YWZmZDQzY2JkMGYxNzJiMjJlOWU6NGJlYmZlZjQwNGY1ZTM1NDhhMWU3ZjNkNTBjZDA3",
        "Content-Type" : "application/json"
      }
  
  var options = {
    'method': 'get',
    'headers': headers
    
};

  var response = UrlFetchApp.fetch(url, options);
  Logger.log(response.getContentText());
  return response.getContentText();

}

function adrollCampaignData(user, password, campaignID, startDate, endDate) {
  
  var data_type = 'entity';
  var url = 'https://api.adroll.com/v1/report/campaign?' 
  + 'data_format=' + data_type + '&'
  + 'campaigns=' + campaignID + '&'
  + 'start_date=' + startDate + '&'
  + 'end_date=' + endDate; 
  
  var headers = 
      {
        "Authorization": "Basic "+ Utilities.base64Encode(user+":"+password)
      }
  
  var options = {
    'method': 'get',
    'headers': headers
};
 
  var response = UrlFetchApp.fetch(url, options);
  Logger.log(response.getContentText());
  
  var campaignData = response.getContentText();
  
  
  
  return campaignData;
}