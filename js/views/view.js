var app = app || {};
	app.AgeView = Backbone.View.extend({

	  id : "#theApp",
	  
	  render: function() {
		var template= _.template( $("#appPanel").html() );

		html = template({
			day : start.get('day'), 
			month : start.get('month'), 
			year : start.get('year'), 
			name : start.get('name'), 
			info : start.get('info'),
			
		});
		this.$el.html(html);
		return this;
	  },
	  
	  getValues: function() {
		var today = new Date();
		var dd = today.getDate();
		var mm = today.getMonth()+1;
		var yyyy = today.getFullYear();
		

	  
	  
        var d = $('#getDay').val();
		if( d >= 1 && d <= 31)
        start.set('day',d);
		
		
		var m = $('#getMonth').val();
		if( m >= 1 && m <= 12)
        start.set('month',m);
		
		
		var y = $('#getYear').val();
		if( y >= 1 && y <= yyyy)
        start.set('year',y);
		
		
		var n = $('#getName').val();
        start.set('name',n);
		
		
		
		function getAge(y,m,d) {
		  var now = new Date();
		  var today = new Date(now.getYear(),now.getMonth(),now.getDate());

		  var yearNow = now.getYear();
		  var monthNow = now.getMonth();
		  var dateNow = now.getDate();

		  var dob = new Date(y,m-1,d);

		  var yearDob = dob.getYear();
		  var monthDob = dob.getMonth();
		  var dateDob = dob.getDate();
		  var age = {};
		  var ageString = "";
		  var yearString = "";
		  var monthString = "";
		  var dayString = "";


		  yearAge = yearNow - yearDob;

		  if (monthNow >= monthDob)
			var monthAge = monthNow - monthDob;
		  else {
			yearAge--;
			var monthAge = 12 + monthNow -monthDob;
		  }

		  if (dateNow >= dateDob)
			var dateAge = dateNow - dateDob;
		  else {
			monthAge--;
			var dateAge = 31 + dateNow - dateDob;

			if (monthAge < 0) {
			  monthAge = 11;
			  yearAge--;
			}
		  }

		  age = {
			  years: yearAge,
			  months: monthAge,
			  days: dateAge
			  };

		  if ( age.years > 1 ) yearString = " years";
		  else yearString = " year";
		  if ( age.months> 1 ) monthString = " months";
		  else monthString = " month";
		  if ( age.days > 1 ) dayString = " days";
		  else dayString = " day";


		  if ( (age.years > 0) && (age.months > 0) && (age.days > 0) )
			ageString = age.years + yearString + ", " + age.months + monthString + ", and " + age.days + dayString + " old.";
		  else if ( (age.years == 0) && (age.months == 0) && (age.days > 0) )
			ageString = "Only " + age.days + dayString + " old!";
		  else if ( (age.years > 0) && (age.months == 0) && (age.days == 0) )
			ageString = age.years + yearString + " old. Happy Birthday!!";
		  else if ( (age.years > 0) && (age.months > 0) && (age.days == 0) )
			ageString = age.years + yearString + " and " + age.months + monthString + " old.";
		  else if ( (age.years == 0) && (age.months > 0) && (age.days > 0) )
			ageString = age.months + monthString + " and " + age.days + dayString + " old.";
		  else if ( (age.years > 0) && (age.months == 0) && (age.days > 0) )
			ageString = age.years + yearString + " and " + age.days + dayString + " old.";
		  else if ( (age.years == 0) && (age.months > 0) && (age.days == 0) )
			ageString = age.months + monthString + " old.";
		  else ageString = "is out of range! Could not calculate age!";

		  return ageString;
		}		
		
		
		start.set('info' , start.get('name') + " age is " + getAge(y,m,d));
		
		this.render();
	  },
	  
	  events: {
		"click #submitInfo": "getValues",
		
		
	  },

	});
