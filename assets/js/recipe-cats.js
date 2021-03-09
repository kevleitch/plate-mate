Vue.component('recipecats', {
	props: ['results'],
	template: `
		<section>
			<h2>Categories</h2>
			<div class="" v-for="result in results">
				<div class="card">
					<div class="card-text">
						<div id="recipethumb">
							<img :src="result.strCategoryThumb" />
						</div>
						<div id="recipedetails">
							<h4>{{ result.strCategory }}</h4>
							<h5>Category: {{ result.strCategory }}</h5>
							<p>{{ result.strCategoryDescription }} </p>
							<form v-on:submit.prevent="getrecipe">
								<input type="hidden" name="catid" v-model="result.idCategory" /> 
								<button type="button" class="btn btn-outline-info btn-lg">See recipes in Category</button>
							</form>
						</div>
					</div>
				</div>
			</div>
		</section>
	`
})

const rc = new Vue({
	el: '#recipecats-app',
	data: {
		results: [],
	},
	methods: {
		recipecategories:function() {
			axios.get("https://www.themealdb.com/api/json/v1/1/categories.php")
			.then(response => {
				this.results = response.data.categories;
				console.log(response);
			})
		}
	},
	created: function(){
        this.recipecategories()
    }
});