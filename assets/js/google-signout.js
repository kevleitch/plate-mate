function signOut() {
    var auth2 = gapi.auth2.getAuthInstance();
    auth2.signOut().then(function () {
		document.getElementById('img-avatar').src = './assets/img/avatar.png';
    });
}