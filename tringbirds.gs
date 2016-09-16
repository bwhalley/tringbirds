// an adroll api wrapper

function adrollOrganizationData(user, password) {

  var url = 'https://api.adroll.com/v1/organization/get'
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
  
  return response;
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