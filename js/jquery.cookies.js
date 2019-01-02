(function($, window, document, undefined){
	
	function accept(key,val){
		if(!("localStorage" in window)) return;
		window.localStorage.setItem(key, val);
		
	}
	function acceptQuery(key){
		if(!("localStorage" in window)) return;
		return window.localStorage.getItem(key);
	}
	
	$.fn.cookiesMessage = function(userOptions){
		
		if(acceptQuery("cookiesAccepted") === "1"){
			return this;
			
		}
		
		var options = $.extend({}, $.fn.cookiesMessage.defaults, userOptions);
		
		var div = $("<div></div>", {
			"class": options.divClass
		}).hide();
		
		var p = $("<p></p>", {
			"class": options.pClass,
			"text": options.message
		});
		
		var i = $("<i></i>", {
			"class": options.iClass
		});
		
		div.append(p);
		div.append(i);
		this.prepend(div);
		
		div.slideDown(options.speed);
		
		i.on("click", function(){
			div.slideUp(options.speed, function(){
				div.remove();
			});
			accept("cookiesAccepted", 1);
		});
		
		
		
	return this;	
	};
	
	$.fn.cookiesMessage.defaults = {
		message: "This website uses cookies...",
		speed: 500,
		divClass: "cookie-message",
		pClass: "cookie-text",
		iClass: "cookie-close far fa-check-circle"
	};
	
	
})(jQuery, window, document);