Vue.component('externalrecipes', {
	props: ['results'],
	template: `
		<section style="clear: left;">
			<h2>External Recipes</h2>
			<h5>(Links to new site opening a new tab/window)</h5>
			<div class="" v-for="result in results">
				<div class="card card-external text-center">
					<h5>{{ result.title }}</h5>
					<a class="btn btn-outline-info" :href="result.href" target="_blank" role="button">Get Recipe</a></div>
				</div>
			</div>
		</section>
	`
})

const er = new Vue({
	el: '#external-app',
	data: {
		results: [],
		searchrecipe: ''
	},
	methods: {
		extrecipes:function() {
			var getUrlParameter = function getUrlParameter(sParam) {
				var sPageURL = window.location.search.substring(1),
				sURLVariables = sPageURL.split('&'),
				sParameterName,
				i;

				for (i = 0; i < sURLVariables.length; i++) {
					sParameterName = sURLVariables[i].split('=');

					if (sParameterName[0] === sParam) {
						return sParameterName[1] === undefined ? true : decodeURIComponent(sParameterName[1]);
					}
				}		
			};
			var cid = getUrlParameter('cat');
			axios.get("https://thingproxy.freeboard.io/fetch/http://www.recipepuppy.com/api?q="+cid)
			.then(response => {
				this.results = response.data.results;
				console.log(response);
			})
		}
	},
	created: function(){
        this.extrecipes()
    }
});