<div class="card w-50 friends-panel">
	<div class="card-header">
		<h2>Manage Friends</h2><a class="closer" href="#">&times;</a>
	</div>
	<div class="card-body">
		<div class="container" id="friends-list">
			<div class="row">
				<div class="col-4 search-cell">
					<h5>Search For Friends</h5>
				</div>
				<div class="col-8">
					<h5>My Friends</h5>
					<?php
						include("friends-list.php");
					?>
				</div>
			</div>
		</div>
	</div>
</div>