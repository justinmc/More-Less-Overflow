/*
 * More Less Overflow
 * Author: Justin McCandless
 * justinmccandless.com
 */


// Config
var more = "More";
var less = "Less";

$(document).ready(function() {
// You can set the mlOverflow_more and mlOverflow_less data parameters in your .mlOverflow
// divs to easily change the text of the more/less buttons
if ($(".mlOverflow").data('mlOverflow_more'))
	more = $(".mlOverflow").data('mlOverflow_more');
if ($(".mlOverflow").data('mlOverflow_less'))
	less = $(".mlOverflow").data('mlOverflow_less');

// Save the original text and height of each exOverflow div, in case they're expanded
$(".mlOverflow").each(function () {
	$(this).data('mlOverflow_height', $(this).height());
	$(this).children('.mlOverflow_text').data('mlOverflow_text', $(this).children('.mlOverflow_text').text());
});

// Add an ellipsis and the more/less button if necessary
$(".mlOverflow").each(function () {
	var offset = 0;
	if ($(this).children('.mlOverflow_text').outerHeight(true) > $(this).outerHeight(true)) {
		$(this).append('<a href="#" class="mlOverflow_button">'+more+'</a>');
		offset = $('.mlOverflow_button').outerHeight(true);
	}
	while (($(this).children('.mlOverflow_text').outerHeight(true) + offset) > $(this).outerHeight(true)) {
		$(this).children('.mlOverflow_text').text(
			$(this).children('.mlOverflow_text').text().replace(/\W*\s(\S)*$/, '...')
	    );
	}
});

// Handle clicks by toggling between more and less mode
$('.mlOverflow_button').click(function () {
	var holder = $(this).siblings('.mlOverflow_text').text();
	$(this).siblings('.mlOverflow_text').text($(this).siblings('.mlOverflow_text').data('mlOverflow_text'));
	$(this).siblings('.mlOverflow_text').data('mlOverflow_text', holder);
	if ($(this).text() == more) {
		$(this).text(less);
		$(this).parents('.mlOverflow').css('height', 'auto');
	}
	else {
		$(this).text(more);
		$(this).parents('.mlOverflow').css('height', $(this).parents('.mlOverflow').data('mlOverflow_height'));
	}
});
});
