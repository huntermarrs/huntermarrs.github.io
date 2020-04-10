$(function() {
$(document).mouseup(function (e){

	var container = $(".popup");

	if (!container.is(e.target) && container.has(e.target).length === 0){

		container.fadeOut();

	}
});
});
