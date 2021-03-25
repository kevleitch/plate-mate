function onSignIn(googleUser) {
  var profile = googleUser.getBasicProfile();
  console.log('ID: ' + profile.getId());
  console.log('Email: ' + profile.getEmail());
  document.getElementById('img-avatar').src = profile.getImageUrl();
  document.getElementById('img-avatar').setAttribute('title', 'Logged in as: ' + profile.getName());
  var id_token = googleUser.getAuthResponse().id_token;
}
function signOut() {
    var auth2 = gapi.auth2.getAuthInstance();
    auth2.signOut().then(function () {
      console.log('User signed out.');
    });
}