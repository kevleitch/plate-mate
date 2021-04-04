function onSignIn(googleUser) {
  var profile = googleUser.getBasicProfile();
  var id = profile.getId();
  var em = profile.getEmail();
  var name = profile.getName();
  var pic = profile.getImageUrl();
  document.getElementById('img-avatar').src = profile.getImageUrl();
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
	if (this.readyState == 4 && this.status == 200) {
	  window.location = "route.php";
	  console.log(xhttp.responseText);
    }
  };
  xhttp.open("GET", "./assets/inc/profile.php?id="+id+"&e="+em+"&n="+name+"&p="+pic, true);
  xhttp.send();  
}