function initParse() {
    Parse.initialize("QCsKTmthCKmMS5BiAQefZY5aDFeBK50RZ1QTSnBf", "fxfuyNWQ48U0L3LqOlrPOpKsQr0csPwRTW3eWelP");
    return true;
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
    Parse.User.logOut();
    if(!(/login.html/.test(window.location.href))) {
        window.location = 'login.html';
    }
}
