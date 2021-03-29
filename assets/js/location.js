Vue.component('location', {
	props: ['results'],
	template: `
		<section>
			<div class="">
				<div class="card">
					{{ results.city }}
				</div>
			</div>
		</section>
	`
})

const loc = new Vue({
	el: '#location-app',
	data: {
		results: '',
	},
	methods: {
		locationsearch:function() {
			axios.get("https://ipgeolocation.abstractapi.com/v1?api_key=b856aa1e31ca4bc0b9a32873deacb7c7")
			.then(response => {
				this.results = response.data;
				console.log(response);
			})
		}
	},
	created: function(){
        this.locationsearch()
    }
});