/*https://jqueryui.com/tooltip*/
jQuery(function() {
	/*Custom Styling*/
    "use strict";
	jQuery('[title]').tooltip({
		show: {
			effect: "fadeIn",
			delay: 250
		},
		position: {
			my: "center bottom-10",
			at: "center top",
			collision: "none",
			using: function(position, feedback) {
				jQuery(this).css(position);
				jQuery("<div>")
					.addClass("arrow-top")
					.addClass(feedback.vertical)
					.addClass(feedback.horizontal)
					.appendTo(this);
			}
		}
	});
	
	jQuery('.tooltip-bottom').tooltip({
		show: {
			effect: "fadeIn",
			delay: 250
		},
		position: {
			my: "center top",
			at: "center bottom+10",
			collision: "none", 
			using: function(position, feedback) {
				jQuery(this).css(position);
				jQuery("<div>")
					.addClass("arrow-bottom")
					.addClass(feedback.vertical)
					.addClass(feedback.horizontal)
					.appendTo(this);
			}
		}
	});

	jQuery('.tooltip-right').tooltip({
		show: {
			effect: "fadeIn",
			delay: 250
		},
		position: {
			my: "left middle",
			at: "right+10 middle",
			collision: "none",
			track: true,
			using: function(position, feedback) {
				jQuery(this).css(position);
				jQuery("<div>")
					.addClass("arrow-right")
					.addClass(feedback.vertical)
					.addClass(feedback.horizontal)
					.appendTo(this);
			}
		}
	});

	jQuery('.tooltip-left').tooltip({
		show: {
			effect: "fadeIn",
			delay: 250
		},
		position: {
			my: "right middle",
			at: "left-10 middle",
			collision: "none",
			using: function(position, feedback) {
				jQuery(this).css(position);
				jQuery("<div>")
					.addClass("arrow-left")
					.addClass(feedback.vertical)
					.addClass(feedback.horizontal)
					.appendTo(this);
			}
		}
	});
});