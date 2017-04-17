/* 
	* Copyright nickpettican
 	* Code licensed under the Apache License v2.0.
 	* For details, see http://www.apache.org/licenses/LICENSE-2.0. 
 */

$(document).ready(toggleNavCollapse);

$(window).scroll(toggleNavCollapse);

$(document).ready(function () {
	$(".navbar-toggle").on("click", function () {
		$(this).toggleClass("active");
		if (!pagePositionScrolled()) {
			$(".navbar-fixed-top").toggleClass("navbar-transform");
		}
		if ($("#burger").hasClass("active")) {
			toggleColour("black");
		} else { 
			$(".navbar-default .navbar-brand").css("color", returnColour(pagePositionScrolled()));
			$(".navbar-toggle .icon-bar:nth-of-type(1)").css("background-color", returnColour(pagePositionScrolled()));
			$(".navbar-toggle .icon-bar:nth-of-type(3)").css("background-color", returnColour(pagePositionScrolled()));
			//toggleColour(returnColour(pagePositionScrolled()));
		} 
		window.setTimeout(toggleBurger, 500);
	});
});

$(document).ready(function () {
	$(document).on("click", function (event) {
		var clickover = $(event.target);
		if ($(".navbar-collapse").hasClass("collapse in") && !clickover.hasClass("navbar-toggle") && !clickover.hasClass("icon-bar")){
			$("#burger").click();
		}
	});
});

function pagePositionScrolled() {
	if ($(".navbar").offset().top > 100) { return true} else { return false}
}

function toggleNavCollapse() {
	if (pagePositionScrolled() &! $("#burger").hasClass("active")) {
		$(".navbar-fixed-top").removeClass("navbar-transform");
		toggleColour(returnColour(pagePositionScrolled()));
	} else if (!$("#burger").hasClass("active")){
		$(".navbar-fixed-top").addClass("navbar-transform");
		toggleColour(returnColour(pagePositionScrolled()));
	}
}

function returnColour(requirement) {
	if (requirement) { return "black"} else { return "white"}
}

function toggleColour(colour) {
	$(".navbar-default .navbar-nav li a").css("color", colour);
	$(".navbar-default .navbar-brand").css("color", colour);
	$(".navbar-toggle .icon-bar").css("background-color", colour);
	$(".navbar-toggle.active .icon-bar").css({"background-color": colour})
}

function toggleBurger() {
	colour = returnColour(pagePositionScrolled())

	if ($("#burger").hasClass("active")){
		$(".navbar-toggle.active .icon-bar:nth-of-type(1)").css({"top": "6px", "transform": "rotate(45deg)"});
		$(".navbar-toggle.active .icon-bar:nth-of-type(3)").css({"top": "-6px", "transform": "rotate(-45deg)"});
		$(".navbar-toggle.active .icon-bar:nth-of-type(2)").css({"background-color": "transparent"});
	} else {
		$(".navbar-toggle .icon-bar:nth-of-type(1)").css({"top": "", "transform": ""});
		$(".navbar-toggle .icon-bar:nth-of-type(3)").css({"top": "", "transform": ""});
		toggleColour(returnColour(pagePositionScrolled()));
	}
}

$("a.page-scroll").click(function() {
	var a = $(this)
	$("html, body").animate({
		scrollTop: $(a.attr("href")).offset().top
	}, 1200);
});
