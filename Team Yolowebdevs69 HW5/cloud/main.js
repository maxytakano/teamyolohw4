Parse.Cloud.job("testJob", function(request, status){
	status.success("This log file shows that the testJob completed successfully");
});

Parse.Cloud.job("AdvanceDay", function(request, status){
	//var users = new Parse.Query(Parse.User);
	var lists = new Parse.Query(Parse.Object.extend("List"));
	var currentDate = new Date();
	//console.log("Date: " + currentDate);
	currentDate.setHours(currentDate.getHours() - 10);
	var currDay = currentDate.getDay();
	
	lists.each(function(curList){
		var habitList = curList.get("habits");
		var curHabit;
		
		var h;
		for(h in habitList)
		{
			curHabit = habitList[h];
			
			if(curHabit.weekly_freq[currDay]){
				curHabit.total_days += 1;
				if (curHabit.completed_today < curHabit.daily_freq) {
                    // Habit is wasn't completed for the day.
                    curHabit.current_streak = 0;
                }
				curHabit.completed_today = 0;
			}
		}
		
		curList.set('habits', habitList);
		curList.save();
	}).then(function(obj){
		status.success("AdvanceDay completed successfully");
	});
});

Parse.Cloud.job("SendReminder", function(request, status){
	send = function() {

	var promise = new Parse.Promise();

	var jsonBody = { 
	  app_id: "e1389734-7a53-42ac-9eed-42812382c796", 
	  included_segments: ["All"],
	  headings: {en: "Virtue/Vice"},
	  contents: {en: "Make sure to fill in your habits if you haven't today!"},
	  data: {foo: "bar"}
	};

	Parse.Cloud.httpRequest({
		method: "POST",
		url: "https://onesignal.com/api/v1/notifications",
		headers: {
		  "Content-Type": "application/json;charset=utf-8",
		  "Authorization": "Basic OTkzYjVlYTAtODVhYy00MDRlLWE1NGQtYmRiMmM5MmZmNzUw"
		},
		body: jsonBody
	  }).then(function (httpResponse) {
		promise.resolve(httpResponse)
	  },
	  function (httpResponse) {
		promise.reject(httpResponse);
	}).then(function(success){
		status.success("Messages Sent");
	});

	return promise;
	};
	
	send();
});

Parse.Cloud.define("TestNotifications", function(request, response){
	send = function() {

	var promise = new Parse.Promise();

	var jsonBody = { 
	  app_id: "e1389734-7a53-42ac-9eed-42812382c796", 
	  included_segments: ["All"],
	  headings: {en: "Virtue/Vice"},
	  contents: {en: "Make sure to fill in your habits if you haven't today!"},
	  data: {foo: "bar"}
	};

	Parse.Cloud.httpRequest({
		method: "POST",
		url: "https://onesignal.com/api/v1/notifications",
		headers: {
		  "Content-Type": "application/json;charset=utf-8",
		  "Authorization": "Basic OTkzYjVlYTAtODVhYy00MDRlLWE1NGQtYmRiMmM5MmZmNzUw"
		},
		body: jsonBody
	  }).then(function (httpResponse) {
		promise.resolve(httpResponse)
	  },
	  function (httpResponse) {
		promise.reject(httpResponse);
	});

	return promise;
	};
	
	send();
});