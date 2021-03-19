Vue.component('randomrecipe', {
	props: ['results', 'checkeditems'],
	template: `
		<section>
			<div class="" v-for="result in results">
				<div class="card">
					<div class="card-title">
						<h3>Random Recipe - {{ result.strMeal }}</h3>
					</div>
					<div class="card-text">
						<div id="recipethumb">
							<img :src="result.strMealThumb" />
							<h5>Category: {{ result.strCategory }}</h5>
							<h5 v-if="result.strTags" id="tags">Tags: {{ result.strTags }}</h5>
						</div>
						<div id="recipedetails">
							<h4>Ingredients</h4>
							<h5>Check the boxes to add selected ingredients to a shopping list</h5>
							<div id="printshoppinglist">
								<h2>Shopping List</h2>
								
								<ul>
								  <li v-for="item of checkeditems">
									{{ item }}
								  </li>
								</ul>
							</div>
							<ul>
								<li v-if="result.strIngredient1">
									<input class="form-check-input" type="checkbox" :value="result.strIngredient1" :id="result.strIngredient1" v-model="checkeditems"> {{result.strIngredient1}} - {{result.strMeasure1}}
								</li>
								<li v-if="result.strIngredient2">
									<input class="form-check-input" type="checkbox" :value="result.strIngredient2" :id="result.strIngredient2" v-model="checkeditems">
									{{result.strIngredient2}} - {{result.strMeasure2}}
								</li>
								<li v-if="result.strIngredient3">
									<input class="form-check-input" type="checkbox" :value="result.strIngredient3" :id="result.strIngredient3" v-model="checkeditems">
									{{result.strIngredient3}} - {{result.strMeasure3}}
								</li>
								<li v-if="result.strIngredient4">
								<input class="form-check-input" type="checkbox" :value="result.strIngredient4" :id="result.strIngredient4" v-model="checkeditems">
									{{result.strIngredient4}} - {{result.strMeasure4}}
								</li>
								<li v-if="result.strIngredient5">
								<input class="form-check-input" type="checkbox" :value="result.strIngredient5" :id="result.strIngredient5" v-model="checkeditems">
									{{result.strIngredient5}} - {{result.strMeasure5}}
								</li>
								<li v-if="result.strIngredient6">
									<input class="form-check-input" type="checkbox" :value="result.strIngredient6" :id="result.strIngredient6" v-model="checkeditems">
									{{result.strIngredient6}} - {{result.strMeasure6}}
								</li>
								<li v-if="result.strIngredient7">
								<input class="form-check-input" type="checkbox" :value="result.strIngredient7" :id="result.strIngredient7" v-model="checkeditems">
									{{result.strIngredient7}} - {{result.strMeasure7}}
								</li>
								<li v-if="result.strIngredient8">
									<input class="form-check-input" type="checkbox" :value="result.strIngredient8" :id="result.strIngredient8" v-model="checkeditems">
									{{result.strIngredient8}} - {{result.strMeasure8}}
								</li>
								<li v-if="result.strIngredient9">
									<input class="form-check-input" type="checkbox" :value="result.strIngredient9" :id="result.strIngredient9" v-model="checkeditems">
									{{result.strIngredient9}} - {{result.strMeasure9}}
								</li>
								<li v-if="result.strIngredient10">
									<input class="form-check-input" type="checkbox" :value="result.strIngredient10" :id="result.strIngredient10" v-model="checkeditems">
									{{result.strIngredient10}} - {{result.strMeasure10}}
								</li>
								<li v-if="result.strIngredient11">
									<input class="form-check-input" type="checkbox" :value="result.strIngredient11" :id="result.strIngredient11" v-model="checkeditems">
									{{result.strIngredient11}} - {{result.strMeasure11}}
								</li>
								<li v-if="result.strIngredient12">
									<input class="form-check-input" type="checkbox" :value="result.strIngredient12" :id="result.strIngredient12" v-model="checkeditems">
									{{result.strIngredient12}} - {{result.strMeasure12}}
								</li>
								<li v-if="result.strIngredient13">
								<input class="form-check-input" type="checkbox" :value="result.strIngredient13" :id="result.strIngredient13" v-model="checkeditems">
									{{result.strIngredient13}} - {{result.strMeasure13}}
								</li>
								<li v-if="result.strIngredient14">
								<input class="form-check-input" type="checkbox" :value="result.strIngredient14" :id="result.strIngredient14" v-model="checkeditems">
									{{result.strIngredient14}} - {{result.strMeasure14}}
								</li>
								<li v-if="result.strIngredient15">
									<input class="form-check-input" type="checkbox" :value="result.strIngredient15" :id="result.strIngredient15" v-model="checkeditems">
									{{result.strIngredient15}} - {{result.strMeasure15}}
								</li>
								<li v-if="result.strIngredient16">
									<input class="form-check-input" type="checkbox" :value="result.strIngredient16" :id="result.strIngredient16" v-model="checkeditems">
									{{result.strIngredient16}} - {{result.strMeasure16}}
								</li>
								<li v-if="result.strIngredient17">
									<input class="form-check-input" type="checkbox" :value="result.strIngredient17" :id="result.strIngredient17" v-model="checkeditems">
									{{result.strIngredient17}} - {{result.strMeasure17}}
								</li>
								<li v-if="result.strIngredient18">
									<input class="form-check-input" type="checkbox" :value="result.strIngredient18" :id="result.strIngredient18" v-model="checkeditems">
									{{result.strIngredient18}} - {{result.strMeasure18}}
								</li>
								<li v-if="result.strIngredient19">
									<input class="form-check-input" type="checkbox" :value="result.strIngredient19" :id="result.strIngredient19" v-model="checkeditems">
									{{result.strIngredient19}} - {{result.strMeasure19}}
								</li>
								<li v-if="result.strIngredient20">
									<input class="form-check-input" type="checkbox" :value="result.strIngredient20" :id="result.strIngredient20" v-model="checkeditems">
									{{result.strIngredient20}} - {{result.strMeasure20}}
								</li>
							</ul>
							<button type="button" class="btn btn-secondary btn-sm sl" onclick="printJS('printshoppinglist', 'html')">
								Print Shopping List
							</button>
							<div id="printinstructions">
								<h4>Instructions</h4>
								<p>{{ result.strInstructions }}</p>
							</div>
							<button type="button" class="btn btn-secondary btn-sm" onclick="printJS('printinstructions', 'html')">
								Print Instructions
							</button>
						</div>
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
		checkeditems: []
	},
	methods: {
		randomrec:function() {
			axios.get("https://www.themealdb.com/api/json/v2/9973533/random.php")
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