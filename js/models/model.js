var app = app || {}; 

app.AgeCalculator = Backbone.Model.extend({ 
	initialize: function(){
		console.log("AgeCalculator is born!");
	},
	defaults: {
		day: 0,
		month: 0,
		year: 0,
		name: "", 
		info: ""
		
	},
	
	displayInfo: function(){
		
	}
	


});