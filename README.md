HOMEWORK #5 README

TEAM: 
MEMBERS: 

------------------------------------------------------------------

ERROR MONITORING AND USAGE MONITORING ANALYTICS:
- Our implementation uses Parse's analytics service (specifically Parse JavaScript SDK). 
- Using this service, we have included monitoring for Parse (database) errors, JavaScript errors, user events such as login and signup, CRUD operations for habit objects, and habit interaction events such as thumbing up/down (completing and failing) a habit.
	- Parse Errors
		- TODO: JASON
	- JavaScript Errors (JSErrorAnalytics)
		- TODO: JASON
	- User Events (UserAnalytics)
		- TODO: JASON
	- Habit CRUD Operations (HCRUDAnalytics)
		- TODO: JASON
	- Habit Interaction Events (HIAnalytics)
		- TODO: JASON
- The following information and direction will be helpful for you (the grader) to verify our monitoring:

>> Site And Account Information: 
Website: http://parse.com
Email address: jastan313@gmail.com
Password: parseparse1

>> Viewing Analytics Directions After Signing In:
	- To View Parse Errors:
		+ TODO: JASON
	- To View JavaScript Errors and User/Habit Analytics:
		+ Under the "virtue/vice" app, click on the "Events" tab on the left button menu. Above the graph, click "API Requests" to display the dropdown menu. Click "Custom Breakdown" to open the menu on the right to view and filter events. On the right-hand side under "Custom Breakdown", click "API Requests" to open the dropdown menu. From here, you can select and filter one of the following events we have monitored: "JSErrorAnalytics", "UserAnalytics", "HCRUDAnalytics", and "HIAnalytics". You may overlay analytics by clicking the "+" button above the graph to include additional graphs.

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
	- Parse, Parse JavaScript SDK for the backend database, monitoring, and analytics
	- Grunt Task manager and nodejs to use the Grunt Task Manager for minifiying our css, js and html files
	- Phonegap and Adobe Phonegap Build was used in order to package and build the website as an Android APK.
- Issues:
	- Phonegap was unable to download outside scripts (such as Parse and OneSignal) for use inside the Android application, so they had to be included locally
	- Although Phonegap has support for building IOS packages, it requires a lot more codebase modification and was not implemented in this project
	- Custom image uploading is not handled properly inside the Android build
- Limitations:
	- Connection speed with Parse (TODO: JASON)

------------------------------------------------------------------

TEAM STRUCTURE AND DYNAMICS:
- Jason Tan
	- TODO: JASON
- Max
	- Assisted with analytics and monitoring. Worked on the a lot on the website in P4 so we didn't need to change much in P5. 
- Gil and Alexie
	- Created a modified version of the codebase in order to correctly build the Android APK using Phonegap

------------------------------------------------------------------

OTHER COMMENTS (SUBJECT TO CHANGE):
- TODO: EVERYBODY
