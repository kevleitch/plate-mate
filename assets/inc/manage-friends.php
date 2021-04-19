<div class="card w-50 friends-panel">
	<div class="card-header">
		<h2>Manage Friends</h2><a class="closer" href="#">&times;</a>
	</div>
	<div class="card-body">
		<div class="container" id="friends-list">
			<div class="row">
				<div class="col-4 search-cell">
					<h5>Search For Friends</h5>
					<div class="container" id="find-friends-app">
						<input type="text" class="form-control input-sm" placeholder="Find A Friend" v-model="query" @keyup="fetchData()" />
						<div v-for="row in allData">
							<button @click="friendrequest(row.googleid)"  :value="row.googleid" class="add-friend btn btn-success btn-sm">Add {{ row.fullname }}</button>
						</div>
						<div v-if="nodata">
							No People Found
						</div>
					</div>
				</div>
				<div class="col-4">
					<h5>My Friends</h5>
					<?php
						include("friends-list.php");
					?>
				</div>
				<div class="col-4 request-cell">
					<h5>Friend Requests</h5>
					<?php
						//include("friends-list.php");
					?>
				</div>
			</div>
		</div>
	</div>
</div>