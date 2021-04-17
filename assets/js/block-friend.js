function blockid(fid) {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
	if (this.readyState == 4 && this.status == 200) {
	  if(!alert(xhttp.responseText)){window.location.reload();}
    }
  };
  xhttp.open("GET", "./assets/inc/block-friend.php?fid="+fid, true);
  xhttp.send();  
}