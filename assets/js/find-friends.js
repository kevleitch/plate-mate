var application = new Vue({
	el:'#find-friends-app',
	data:{
		allData:'',
		query:'',
		nodata:false,
	},
	methods: {
		fetchData:function(){
			axios.post('assets/inc/find-friends.php', {
				query:this.query
			}).then(function(response){
				if(response.data.length > 0)
				{
					application.allData = response.data;
					application.nodata = false;
				}
				else
				{
					application.allData = '';
					application.nodata = true;
				}
			});
		},
		friendrequest: function(val) {
			alert(val);
		}
	},
	created:function(){
		this.fetchData();
	}
});