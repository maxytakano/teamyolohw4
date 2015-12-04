HOMEWORK #5 README

TEAM: Y0l0vv3bd3v$69
MEMBERS: Jason Tan, Gil Olaes, Alexie Sousa, Max Takano, Sam Marks

------------------------------------------------------------------

TABLE OF CONTENTS:
- LINKS
- FINISHED APPLICATION
- ERROR MONITORING AND USAGE MONITORING ANALYTICS
- MINIFICATION AND BUNDLING
- PHONE APP PROOF OF CONCEPT
- APPLICATION SUMMARY
- TEAM STRUCTURE AND DYNAMICS
- OTHER NOTES AND COMMENTS

------------------------------------------------------------------

LINKS:

You can view the application locally via the index.html page at the top directory of the zip.

We have hosted our application online. The link to it is:
http://cse134b-fa15.co.nf/

We used GitHub as our repo. The link to it is (disregard the "hw4", we developed on top of HW4 and did not bother to make a new repo):
https://github.com/maxytakano/teamyolohw4

------------------------------------------------------------------

FINISHED APPLICATION:
	- Using Parse we have authenticated (defaulted) and have cloud storage for our database needs. This was done in HW4 already.
	- Using OneSignal, we have browser notifcations working on Chrome (not on IE since IE doesn't have an implementations of the notifications API nor Mozilla Firefox since this feature on OneSignal is still in Alpha stages) and on Android (not on iOS because iOS is incompatible unless user downloads an application which is deemed to be too much effort for this project's needs. This was done in HW4 already.
	- We have included monitoring and analytics using Parse, as described in the next section.

------------------------------------------------------------------
ERROR MONITORING AND USAGE MONITORING ANALYTICS:
- Our implementation uses Parse's analytics service (specifically Parse JavaScript SDK). 
- Using this service, we have included monitoring for Parse logging (automatic), JavaScript errors, user events such as login and signup, CRUD operations for habit objects, and habit interaction events such as thumbing up/down (completing and failing) a habit. These events are done by sending an analytics object that can include up to 8 attributes of String data to Parse. These events can then be filtered according to one or more attribute(s) on the Parse website for viewing.
	- Parse Log
		- Parse automatically logs any jobs executed on the server-side and can be viewed on their website. For example, we have a scheduled job called AdvanceDay which is executed daily for day progression and habit updates and it is logged on Parse. In addition, it logs any errors for these jobs such as jobs that did not get executed.
	- JavaScript Errors (JSErrorAnalytics)
		- Event object format:
			- { error_msg: "",
                line_number: "",
                column_number: ""}
        - On our website, when any page loads, we map the window.onerror to a function which pushes a JSErrorAnalytics event to Parse. We fill out the event object with data such as the JS error message and the line and column number the error occurred at.
	- User Events (UserAnalytics)
		- Event object format:
			- { operation_name: "",
        		user_name: "",
        		error_code: "" }
       	- When a user signs up, logs in, or logs out, we push a UserAnalytics event to Parse. operation_name is either "Signin", "Login", or "Logout". user_name is the account's name (email). error_code is either empty string if successful, or a Parse error code if unsuccessful.
	- Habit CRUD Operations (HCRUDAnalytics)
		- Event object format:
			- { operation_name: operation,
        		user_name: username,
        		habit_name: habitname,
       			error_code: error }
       	- When a user performs any CRUD operation on a habit (adding, editing, viewing (on their habits list), or deleting), we push a HCRUDAnalytics event to Parse. operation_name is either "Create", "Read", "Update", or "Delete". user_name is the account's name (email). habit_name is the name (which is an unique identifier) of the habit involved with the CRUD operation. error_code is either empty string if successful, or a Parse error code if unsuccessful.
	- Habit Interaction Events (HIAnalytics)
		- Event object format:
			- { operation_name: operation,
        		user_name: username,
        		habit_name: habitname,
       			error_code: error }
		- When a user performs any interaction operation on a habit (thumbing up or down), we push a HIAnalytics event to Parse. operation_name is either "ThumbsUp" or "ThumbsDown". user_name is the account's name (email). habit_name is the name (which is an unique identifier) of the habit involved with the interaction operation. error_code is either empty string if successful, or a Parse error code if unsuccessful.
- The following information and direction will be helpful for you (the grader) to verify our monitoring:

>> Site And Account Information: 
Website: http://parse.com
Email address: jastan313@gmail.com
Password: parseparse1

>> Viewing Analytics Directions After Signing In:
	- To View Parse Logs:
		+ Under the "virtue/vice" app, at the top, click the "Core" tab. Then click on the "Logs" button on the left button menu. Now you can either select "Info" (for general information) or "Errors" (filtered out for only errors) to view Parse logs.
	- To View JavaScript Errors and User/Habit Analytics:
		+ Under the "virtue/vice" app, at the top, click the "Analytics" tab. Then click on the "Events" button on the left button menu. Above the graph, click "API Requests" to display the dropdown menu. Click "Custom Breakdown" to open the menu on the right to view and filter events. On the right-hand side under "Custom Breakdown", click "API Requests" to open the dropdown menu. From here, you can select and filter one of the following events we have monitored: "JSErrorAnalytics", "UserAnalytics", "HCRUDAnalytics", and "HIAnalytics". You may overlay analytics by clicking the "+" button above the graph to include additional graphs.
		+ As a note: you may see many other Analytic events in the Custom Breakdown dropdown menu. Please disregard them as they were events used in development and testing phases. Parse currently does not have a feature to delete events.

------------------------------------------------------------------

MINIFICATION AND BUNDLING:
- Our implementation uses Grunt Task Manager to perform the minification and bundling
- The service uses 3 Grunt modules to perform minification: grunt-contrib-cssmin to minify and package css files, grunt-contrib-uglify to minify and package js files, and grunt-contrib-htmlmin to minify html files
- The minifyed files are generated with the default grunt taks and placed in a folder \min, which is also automatically generated.

- !IMPORTANT! 
- The modules that are installed and used in the tasks require files that are not written by us that are placed in directories that are about 5-6 folders deep. This prevents a Windows user from pushing or pulling those files with git. 
- Thus, as a form of verification, the package.json file and gruntfile.js will be pushed, but you will need to also ensure that you have downloaded nodejs v4.2.2 LTS and that the grunt client is installed.
- The following modules will need then to be installed using the command prompt while in the /grunt/ directory before the default task can be run:
	- grunt-contrib-htmlmin
	- grunt-contrib-uglify
	- grunt-contrib-cssmin

------------------------------------------------------------------

PHONE APP POC:
- We were able to slightly edit the code base in order to package the web application as an Android application using Phonegap.
- Build done automatically by Adobe Phonegap Build, and the zip file that was sent to the service to build the APK is inside the repository as "PhoneGapArchive.zip"
- All 3rd party scripts (such as Parse and OneSignal) had to be downloaded and added to the local build, as Phonegap is not able to download scripts from CDNs.
- All features work correctly inside this Android application except for the notifications and custom image icon uploads and can be installed using the APK.
- The APK is included inside the git repository as the file "ViceVirtue-debug (1).apk," and the zip file used to build it on Adobe

------------------------------------------------------------------

APPLICATION SUMMARY:
- Technologies Used:
	- Vanilla JavaScript, HTML5/CSS for basic website structure and functions including client-side validation, transistions, animations.
	- Parse, Parse JavaScript SDK for the backend database, monitoring, and analytics
	- Grunt Task manager and nodejs to use the Grunt Task Manager for minifiying our css, js and html files
	- Phonegap and Adobe Phonegap Build was used in order to package and build the website as an Android APK.
- Issues:
	- Phonegap was unable to download outside scripts (such as Parse and OneSignal) for use inside the Android application, so they had to be included locally
	- Although Phonegap has support for building IOS packages, it requires a lot more codebase modification and was not implemented in this project
	- Custom image uploading is not handled properly inside the Android build
- Other Limitations:
	- Connection speed
		- Since Parse needs to be initialized via an initial asynchronous call on every page, the app must wait before using any Parse code and/or querying the database. Even then, any queries or modifications to the database are asynchronous calls. This affects the loading time of our app especially after a CRUD operation. We masked this delay by adding smooth transitions such as fading in habits (in the background, it is actually fetching habit data). Ultimately, the app's performance and user experience heavily depends on the connection speed to Parse.

------------------------------------------------------------------

TEAM STRUCTURE AND DYNAMICS:
- Overall, we split up the tasks on this homework pretty well, allowing for parallel development (which includes researching, reading APIs and documentations). Since Jason was able to finish the analytics development very early, the others could then work on polishing, minifying, and bundling the project.
- Jason Tan
	- Implemented and tested Parse analytics and monitoring. Formatted this README template.
- Max
	- Assisted with analytics and monitoring. Worked on the a lot on the website in P4 so we didn't need to change much in P5.
- Sam
	- Automated the minification and bundling tasks using Grunt.
- Gil and Alexie
	- Created a modified version of the codebase in order to correctly build the Android APK using Phonegap

------------------------------------------------------------------

OTHER NOTES AND COMMENTS:
	- No extra credit
		- We did not implement image spriting.
		- We did not do any other package efforts.

------------------------------------------------------------------