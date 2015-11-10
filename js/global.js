// Checks if an user is logged on already.
function checkCurrentUser() {
  // If user has not logged in or previous user
  // has logged out, go to login page
  if(localStorage['currentUser'] == undefined) {
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
  localStorage.removeItem('currentUser');
  if(!(/login.html/.test(window.location.href))) {
    window.location = 'login.html';
  }
}

// Returns the user account with the same ID as the current user
function getCurrentUser() {
  var users = JSON.parse(localStorage['users']);
  for(u in users) {
    if(users[u].id == localStorage['currentUser']) {
      return users[u];
    }
  }
}

// Given an updated user, update the current user
function modifyCurrentUser(newUser) {
  var users = JSON.parse(localStorage['users']);
  for(u in users) {
    if(users[u].id == localStorage['currentUser']) {
      users[u] = newUser;
    }
  }
  localStorage['users'] = JSON.stringify(users);
}

// Given a habit id, retrieve the habit with same id
// within the current user's habit list
function getHabit(id) {
  var user = getCurrentUser();
  var list = JSON.parse(user.list);
  for(h in list) {
    if(list[h].id == id) {
        return list[h];
    }
  }
}

// Given an updated habit, update it within the 
// current user's habit list
function modifyHabit(habit) {
  var user = getCurrentUser();
  var list = JSON.parse(user.list);
  for(h in list) {
    if(list[h].id == habit.id) {
      list[h] = habit;
    }
  }
  user.list = JSON.stringify(list);
  modifyCurrentUser(user);
}

// FOR TESTING PURPOSES ONLY: Prints out user list
function printUsers() {
  if (confirm('Do you wish to print out all user accounts?')) {
    if(localStorage['users'] != undefined) {
      var users = JSON.parse(localStorage['users']);
      alert('User List: '+ JSON.stringify(users));
      //for(u in users) {
      //  alert('User: ' + JSON.stringify(users[u]));
      //}
    }
    else {
      alert('User List: undefined');
    }
  }
  else {

  }
}

// FOR TESTING PURPOSES ONLY: Clears localStorage
function clearLocalStorage() {
  if (confirm('Do you wish to clear localStorage?')) {
      localStorage.clear();
  }
  else {

  }
}

