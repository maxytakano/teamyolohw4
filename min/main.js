function initParse(){return Parse.initialize("QCsKTmthCKmMS5BiAQefZY5aDFeBK50RZ1QTSnBf","fxfuyNWQ48U0L3LqOlrPOpKsQr0csPwRTW3eWelP"),!0}function javascriptErrorAnalytics(){window.onerror=function(a,b,c,d){var e={error_msg:JSON.stringify(a),line_number:JSON.stringify(c),column_number:JSON.stringify(d)};return Parse.Analytics.track("JSErrorAnalytics",e),!1}}function userAnalytics(a,b,c){var d={operation_name:a,user_name:b,error_code:c};console.log(d),Parse.Analytics.track("UserAnalytics",d)}function habitCRUDAnalytics(a,b,c,d){var e={operation_name:a,user_name:b,habit_name:c,error_code:d};console.log(e),Parse.Analytics.track("HCRUDAnalytics",e)}function habitInteractionAnalytics(a,b,c,d){var e={operation_name:a,user_name:b,habit_name:c,error_code:d};Parse.Analytics.track("HIAnalytics",e)}function checkCurrentUser(){var a=Parse.User.current();a?/login.html/.test(window.location.href)&&(window.location="list.html"):/login.html/.test(window.location.href)||(window.location="login.html")}function logOut(){if(confirm("Are you sure you want to log out?")){var a=Parse.User.current();userAnalytics("Logout",a.get("username"),""),Parse.User.logOut(),/login.html/.test(window.location.href)||(window.location="login.html")}}Parse.Cloud.job("testJob",function(a,b){b.success("This log file shows that the testJob completed successfully")}),Parse.Cloud.job("AdvanceDay",function(a,b){var c=new Parse.Query(Parse.Object.extend("List")),d=new Date;d.setHours(d.getHours()-10);var e=d.getDay();c.each(function(a){var b,c,d=a.get("habits");for(c in d)b=d[c],b.weekly_freq[e]&&(b.total_days+=1,b.completed_today<b.daily_freq&&(b.current_streak=0),b.completed_today=0);a.set("habits",d),a.save()}).then(function(a){b.success("AdvanceDay completed successfully")})}),Parse.Cloud.job("SendReminder",function(a,b){send=function(){var a=new Parse.Promise,c={app_id:"e1389734-7a53-42ac-9eed-42812382c796",included_segments:["All"],headings:{en:"Virtue/Vice"},contents:{en:"Make sure to fill in your habits if you haven't today!"},data:{foo:"bar"}};return Parse.Cloud.httpRequest({method:"POST",url:"https://onesignal.com/api/v1/notifications",headers:{"Content-Type":"application/json;charset=utf-8",Authorization:"Basic OTkzYjVlYTAtODVhYy00MDRlLWE1NGQtYmRiMmM5MmZmNzUw"},body:c}).then(function(b){a.resolve(b)},function(b){a.reject(b)}).then(function(a){b.success("Messages Sent")}),a},send()}),Parse.Cloud.define("TestNotifications",function(a,b){send=function(){var a=new Parse.Promise,b={app_id:"e1389734-7a53-42ac-9eed-42812382c796",included_segments:["All"],headings:{en:"Virtue/Vice"},contents:{en:"Make sure to fill in your habits if you haven't today!"},data:{foo:"bar"}};return Parse.Cloud.httpRequest({method:"POST",url:"https://onesignal.com/api/v1/notifications",headers:{"Content-Type":"application/json;charset=utf-8",Authorization:"Basic OTkzYjVlYTAtODVhYy00MDRlLWE1NGQtYmRiMmM5MmZmNzUw"},body:b}).then(function(b){a.resolve(b)},function(b){a.reject(b)}),a},send()});