$(document).ready(function() {
	
	var now = new Date();
    var date = now.getDate() + '.' + (1 + now.getMonth()) + '.' + now.getFullYear();
	$('#date').val(date);
	$('#upload').attr('scrolling', 'no');

	var urlBase = window.location.href.substr(0, window.location.href.lastIndexOf('/'));

	$('#obligation').prop('selectedIndex', -1);
	$('#obligation').change(function() {
		var obligation = $('#obligation').val();
		if (obligation == 'Оферта кухня') {
			redirect = decodeURI(urlBase) + '/запитване/оферта-кухня-изпратена.html';
		} 
		else if (obligation == 'Договор кухня') {
			redirect = decodeURI(urlBase) + '/запитване/договор-кухня-изпратен.html';
		}
		else if (obligation == 'Запитване кухня в магазинa') {
			redirect = decodeURI(urlBase) + '/запитване/запитване-магазин-изпратено.html';
		}
		$('#subject').val(obligation);
		$('#redirect').val(redirect);
	});
	var redirect = decodeURI(urlBase) + '/запитване/запитване-кухня-изпратено.html';
	$('#redirect').val(redirect);

	$('#model').prop('selectedIndex', -1);

	var check = function(){
		$('#store').hide();
		if ( $('#from').val().endsWith('kuhnidialog.bg') ) {
			$('#store').show();
			$('#phone').val('000-000-000');
			$('#obligation').prop('selectedIndex', 0);
		} else {
			$('#store').hide();
		}
	}
	$('#from').keyup(function () { 
		check();
	});
	setTimeout(check, 1000);
	check();

	jQuery.extend(jQuery.validator.messages, {
	    required: "Полето е задължително.",
	    from: "Моля, въведете валиден E-Mail."
	});
	$('#rfp').validate();
});
