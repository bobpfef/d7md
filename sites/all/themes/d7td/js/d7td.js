(function($){

	//wonky april fools
	Drupal.behaviors.d7td_wonky = {
		attach: function(){
			$(document).ready(function() {
				$.fool('wonky');
			});
		}
	}
})(jQuery);
