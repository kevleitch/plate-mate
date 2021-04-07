function removebookmark(bm) {
  //var bookmark = bm;
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
	if (this.readyState == 4 && this.status == 200) {
	  //alert(xhttp.responseText);
	  if(!alert(xhttp.responseText)){window.location.reload();}
    }
  };
  xhttp.open("GET", "./assets/inc/remove-bookmark.php?rid="+bm, true);
  xhttp.send();  
}