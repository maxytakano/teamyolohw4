function initParse() {
    Parse.initialize("QCsKTmthCKmMS5BiAQefZY5aDFeBK50RZ1QTSnBf", "fxfuyNWQ48U0L3LqOlrPOpKsQr0csPwRTW3eWelP");
    return true;
}

function javascriptErrorAnalytics() {
    window.onerror = function(errorMsg, url, lineNumber, column) {
        var dimensions = {
            error_msg: JSON.stringify(errorMsg),
            line_number: JSON.stringify(lineNumber),
            column_number: JSON.stringify(column)
        };

        Parse.Analytics.track('JSErrorAnalytics', dimensions);
        return false;
    }
}

function userAnalytics(operation, username, error) {
    var dimensions = {
        operation_name: operation,
        user_name: username,
        error_code: error
    };
    console.log(dimensions);
    Parse.Analytics.track('UserAnalytics', dimensions);
}

function habitCRUDAnalytics(operation, username, habitname, error) {
    var dimensions = {
        operation_name: operation,
        user_name: username,
        habit_name: habitname,
        error_code: error
    };
    console.log(dimensions);
    Parse.Analytics.track('HCRUDAnalytics', dimensions);
}

function habitInteractionAnalytics(operation, username, habit, error) {
    var dimensions = {
        operation_name: operation,
        user_name: username,
        habit: habit,
        error_code: error
    };
    Parse.Analytics.track('HIAnalytics', dimensions);
}

// Checks if an user is logged on already.
function checkCurrentUser() {
    // If user has not logged in or previous user
    // has logged out, go to login page
    var currentUser = Parse.User.current();
    if(!currentUser) {
        if(!(/login.html/.test(window.location.href))) {
            window.location = "login.html";
        }
    }
    // If user is still logged in, go to list page
    else {
        if(/login.html/.test(window.location.href)) {
            window.location = "list.html";
        }
    }
}

// Logs out the current user
function logOut() {
    if(!confirm("Are you sure you want to log out?")){ return; }
    var currentUser = Parse.User.current();
    userAnalytics('Logout', currentUser.get('username'), '');
    Parse.User.logOut();
    if(!(/login.html/.test(window.location.href))) {
        window.location = 'login.html';
    }
}
