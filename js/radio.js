// RadioButton
$('.radioblock').find('.radio').each(function(){
	$(this).click(function(){
		var valueRadio = $(this).html();
		$(this).parent().find('.radio').removeClass('active');
		$(this).addClass('active');
		$(this).parent().find('input').val(valueRadio);
	});
});

$('.tableradio').find('.radio').each(function(){
	$(this).click(function(){
		var valueRadio = $(this).html();
		$(this).parent().parent().parent().parent().parent().parent().parent().find('.radio').removeClass('active');
		$(this).addClass('active');
		$(this).parent().parent().parent().parent().parent().parent().parent().find('input').val(valueRadio);
	});
});

$('.content').find('.radio').each(function(){
		$(this).click(function(){
		var valueRadio = $(this).html();
		$(this).parent().parent().parent().parent().parent().find('.radio').removeClass('active');
		$(this).addClass('active');
		$(this).parent().parent().parent().parent().parent().find('input').val(valueRadio);
	});
});

