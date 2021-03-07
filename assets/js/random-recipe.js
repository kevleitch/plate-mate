Vue.component('randomrecipe', {
	props: ['results'],
	template: `
		<section>
			<div class="" v-for="result in results">
				<div class="card">
					<div class="card-title">
						<h3>{{ result.strMeal }}</h3>
					</div>
					<div class="card-text">
						<img :src="result.strMealThumb" />
					</div>
				</div>
			</div>
		</section>
	`
})

const rr = new Vue({
	el: '#randomrecipe-app',
	data: {
		results: [],
	},
	methods: {
		randomrec:function() {
			axios.get("https://www.themealdb.com/api/json/v1/1/random.php")
			.then(response => {
				this.results = response.data.meals;
				console.log(response);
			})
		}
	},
	created: function(){
        this.randomrec()
    }
});