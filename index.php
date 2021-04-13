<?php
	require_once("assets/inc/sessions.php");
?>
<!doctype html>
<html lang="en">
<head>
	<meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
	<meta name="google-signin-client_id" content="512202368051-5jq1l6e6btf1q194o1p4lsalabufrotf.apps.googleusercontent.com">
	<title>Plate Mate</title>
	<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-BmbxuPwQa2lc/FVzBcNJ7UAyJxM6wuqIj61tLrc4wSX0szH/Ev+nYRRuWlolflfl" crossorigin="anonymous">
	<link rel="preconnect" href="https://fonts.gstatic.com">
	<link href="https://fonts.googleapis.com/css2?family=Dosis&family=Merriweather&display=swap" rel="stylesheet">
	<link rel="stylesheet" type="text/css" href="assets/css/styles.css" />
	<link rel="stylesheet" type="text/css" href="assets/css/results.css" />
	<link rel="stylesheet" type="text/css" href="assets/css/swipes.css" />
	<link rel="icon" type="image/png" href="assets/img/favicon.png"/>
</head>
<body>
	<div id="sidebar">		
		<div class="container" id="location-app">
			<location :results="results"></location>
			<hr />
		</div>
		<div class="container" id="friends-list">
			<h5>My Friends</h5>
			<?php
				require_once("assets/inc/friends-list.php");
			?>
		</div>
		<hr />
		<div class="container" id="bookmarks-list">
			<h5>My Bookmarks</h5>
			<?php
				require_once("assets/inc/bookmarks-list.php");
			?>
		</div>
	</div>
	<div id="recipesearch-app">
		<nav class="navbar navbar-expand-lg">
			<div class="container-fluid">
				<a class="navbar-brand" href="index.php"><img src="assets/img/small-logo.png" alt="PlateMate logo" /></a>
				<div id="navbarSupportedContent">
					<form class="d-flex" v-on:submit.prevent="recipesearch">
						<a class="g-signin2" data-onsuccess="onSignIn"></a>
						<div id="av" class="avatar dropdown">
							<img id="img-avatar" src="<?php echo $picpath; ?>" />
							<!--
							<div class="dropdown-content">
								<span class="arrow-up"></span>
								<a href="#" onclick="signOut();">Sign Out</a>
								<a href="#">Settings</a>
								<a href="#">My Account</a>
							 </div>
							 -->
						</div>
						<input class="form-control me-2" v-model="searchrecipe" type="search" placeholder="Recipe, ingredient" required aria-label="Search">
						<button class="btn btn-outline-success" id="searchsub" type="submit">Search</button>
					</form>
				</div>
			</div>
		</nav>
		<div class="container container-main">
			<h1 class="logo"><img src="assets/img/logo.png" alt="PlateMate" /></h1>
			<recipesearchresults :results="results"></recipesearchresults>
		</div>
	</div>
	<div class="container container-main">		
		<div class="container" id="swipes-app">
			<div class="card">
				<card></card>
			</div>
		</div>
	</div>
	<div class="container container-main">		
		<div class="container" id="recipecats-app">
			<recipecats :results="results"></recipecats>
		</div>
	</div>
	<div class="footer">
		<div>
			<p class="built-with text-center"><small>Built with <a href="https://vuejs.org/" target="_blank">Vue</a>, <a href="https://github.com/axios/axios" target="_blank">Axios</a> and <a href="https://getbootstrap.com/" target="_blank">Bootstrap</a>. API's from <a href="https://www.themealdb.com/api.php" target="_blank">TheMealDB</a>, <a href="https://forkify-api.herokuapp.com/" target="_blank">Forkify</a> and <a href="https://spoonacular.com/food-api/" target="_blank">Spoonacular</a></small></p>
		</div>
	</div>
	<script src="https://unpkg.com/vue@2.6.12/dist/vue.js"></script>
	<script src="https://unpkg.com/axios/dist/axios.min.js"></script>
	<script src="https://printjs-4de6.kxcdn.com/print.min.js"></script>
	<script src="https://cdnjs.cloudflare.com/ajax/libs/interact.js/1.2.8/interact.min.js"></script>
	<script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
	<script src="https://apis.google.com/js/platform.js" async defer></script>
	<script src="assets/js/main-jquery.js"></script>
	<script src="assets/js/recipe-search.js"></script>
	<script src="assets/js/recipe-cats.js"></script>
	<script src="assets/js/jsshare.js"></script>
	<script src="assets/js/swipes.js"></script>
	<?php
		if(!isset($_SESSION['gid'])) {
	?>
	<script src="assets/js/google.js"></script>
	<?php
		}
	?>
	<script src="assets/js/google-signout.js"></script>
	<script src="assets/js/location.js"></script>
	<script src="assets/js/remove-bookmark.js"></script>
</body>
</html>