Vue.component('recipecats', {
	props: ['results'],
	template: `
		<section>
			<h2>Recipe Categories</h2>
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
							<a class="btn btn-outline-info" :href="'categories.html?catid=' + result.idCategory" role="button">See recipes in Category</a>
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