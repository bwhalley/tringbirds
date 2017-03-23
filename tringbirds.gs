// a learnupon api wrapper

function luFindUser(email) {
  
  if (!email) { var email = "brian.whalley@klaviyo.com" }
  
  var url = 'https://klaviyo.learnupon.com/api/v1/users/search?email=' + email;
  var headers = 
      {
        "Authorization" : "",
        "Content-Type" : "application/json"
      }
  
  var options = {
    'method': 'get',
    'headers': headers
    
};

  var response = UrlFetchApp.fetch(url, options);
  Logger.log(response.getContentText());

  var data = JSON.parse(response.getContentText());
  Logger.log(data.user);
  var userEmail = data.user[0].email;
  Logger.log(userEmail);
  return response.getContentText();
  
  
}

//
// count all registered people
//

// get course membership from: https://yourdomain.learnupon.com/api/v1/enrollments/search?course_id=1234

function luCountCourse(courseID, startDate, endDate) {
 
  if (!courseID) { var courseID = "164448"; }
  if (!startDate || !endDate) { 
    startDate = "1/1/2017";
    endDate = "3/31/2017";
  }
  
  var url = 'https://yourdomain.learnupon.com/api/v1/enrollments/search?course_id=' + courseID;
  var headers = 
      {
        "Authorization" : "",
        "Content-Type" : "application/json"
      }
  var options = {
    'method' : 'get',
    'headers' : headers
  }
  
  var response = UrlFetchApp.fetch(url, options);
  var data = JSON.parse(response.getContentText());
  var filtered = [];
  
  var startD = new Date(startDate);
  var endD = new Date(endDate);
  startD = startD.toISOString();
  endD = endD.toISOString();
  Logger.log(startD);
  
  for (i in data.enrollments) 
  {
    //var enrollD = new Date(data.enrollments[i].date_enrolled);
    var enrollD = data.enrollments[i].date_enrolled;
    Logger.log(enrollD);
    if (enrollD <= endD && enrollD >= startD)
    {
      Logger.log(data.enrollments[i].date_enrolled);
       filtered.push(data.enrollments[i]);
    }
  }
  
  if (filtered.length == 0) {
   
    return 0;
    
  }
  
  else{
  return filtered.length;
  }
  
  }

//
// get a unique count of enrollments in the course, by id or username
// 

// count all people who actually started the course: status: in_progress unique count

function luCountCourseStarted(courseID, startDate, endDate) {
 
  if (!courseID) { var courseID = "164448"; }
  if (!startDate || !endDate) { 
    startDate = "1/1/2017";
    endDate = "3/31/2017";
  }
  
  var url = 'https://yourdomain.learnupon.com/api/v1/enrollments/search?course_id=' + courseID;
  var headers = 
      {
        "Authorization" : "",
        "Content-Type" : "application/json"
      }
  var options = {
    'method' : 'get',
    'headers' : headers
  }
  
  var response = UrlFetchApp.fetch(url, options);
  var data = JSON.parse(response.getContentText());
  var filtered = [];
  
  var startD = new Date(startDate);
  var endD = new Date(endDate);
  startD = startD.toISOString();
  endD = endD.toISOString();
  Logger.log(startD);
  
  for (i in data.enrollments) 
  {
    //var enrollD = new Date(data.enrollments[i].date_enrolled);
    var enrollD = data.enrollments[i].date_enrolled;
    Logger.log(enrollD);
    if (enrollD <= endD && enrollD >= startD && data.enrollments[i].status == "in_progress")
    {
      Logger.log(data.enrollments[i].date_enrolled);
       filtered.push(data.enrollments[i]);
    }
  }
  
  if (filtered.length == 0) {
   
    return 0;
    
  }
  
  else{
  return filtered.length;
  }
  
  }


// 
// get count of people who finished 
// 
function luCountCourseCompleted(courseID, startDate, endDate) {
 
  if (!courseID) { var courseID = "164448"; }
  if (!startDate || !endDate) { 
    startDate = "1/1/2017";
    endDate = "3/31/2017";
  }
  
  var url = 'https://yourdomain.learnupon.com/api/v1/enrollments/search?course_id=' + courseID;
  var headers = 
      {
        "Authorization" : "",
        "Content-Type" : "application/json"
      }
  var options = {
    'method' : 'get',
    'headers' : headers
  }
  
  var response = UrlFetchApp.fetch(url, options);
  var data = JSON.parse(response.getContentText());
  var filtered = [];
  
  var startD = new Date(startDate);
  var endD = new Date(endDate);
  startD = startD.toISOString();
  endD = endD.toISOString();
  Logger.log(startD);
  
  for (i in data.enrollments) 
  {
    //var enrollD = new Date(data.enrollments[i].date_enrolled);
    var enrollD = data.enrollments[i].date_enrolled;
    Logger.log(enrollD);
    if (enrollD <= endD && enrollD >= startD && data.enrollments[i].status == "passed")
    {
      Logger.log(data.enrollments[i].date_enrolled);
       filtered.push(data.enrollments[i]);
    }
  }
  
  if (filtered.length == 0) {
   
    return 0;
    
  }
  
  else{
  return filtered.length;
  }
  
  }