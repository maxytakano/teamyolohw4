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
		
		for(h in habitList)
		{
			curHabit = habitList[h];
			
			if(curHabit.weekly_freq[currDay]){
				curHabit.total_days += 1;
				curHabit.completed_today = 0;
			}
		}
		
		curList.set('habits', habitList);
		curList.save();
	}).then(function(obj){
		status.success("AdvanceDay completed successfully");
	});
});